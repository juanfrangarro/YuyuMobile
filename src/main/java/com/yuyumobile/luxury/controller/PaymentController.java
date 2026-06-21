package com.yuyumobile.luxury.controller;

import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.EventDataObjectDeserializer;
import com.stripe.model.PaymentIntent;
import com.stripe.model.Refund;
import com.stripe.net.Webhook;
import com.yuyumobile.luxury.model.Transaction;
import com.yuyumobile.luxury.model.TransactionStatus;
import com.yuyumobile.luxury.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*")
public class PaymentController {

    private static final Logger LOGGER = Logger.getLogger(PaymentController.class.getName());

    @Value("${stripe.webhook.secret}")
    private String webhookSecret;

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    /**
     * Creates a new PaymentIntent via Stripe and records a PENDING Transaction log in our DB.
     */
    @PostMapping("/create-intent")
    public ResponseEntity<?> createPaymentIntent(@RequestBody Map<String, Object> request) {
        try {
            BigDecimal amount = new BigDecimal(request.get("amount").toString());
            String currency = (String) request.getOrDefault("currency", "EUR");
            String customerName = (String) request.get("customerName");
            String customerEmail = (String) request.get("customerEmail");

            if (customerName == null || customerEmail == null) {
                return ResponseEntity.badRequest().body("Customer name and email coordinates are required.");
            }

            Transaction transaction = paymentService.createPaymentIntent(amount, currency, customerName, customerEmail);
            return ResponseEntity.ok(transaction);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    /**
     * Executes a Refund request for a specific Stripe Payment Intent.
     * Marks the corresponding database Transaction ledger as REFUNDED.
     */
    @PostMapping("/refund")
    public ResponseEntity<?> processRefund(@RequestBody Map<String, String> request) {
        try {
            String stripePaymentIntentId = request.get("stripePaymentIntentId");
            String reason = request.getOrDefault("reason", "Customer return / Refund requested");

            if (stripePaymentIntentId == null) {
                return ResponseEntity.badRequest().body("Stripe Payment Intent ID is required for executing refunds.");
            }

            Transaction transaction = paymentService.processRefund(stripePaymentIntentId, reason);
            return ResponseEntity.ok(transaction);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    /**
     * Lists all transactions registered in the database for the administration panel.
     */
    @GetMapping("/orders")
    public ResponseEntity<?> getAllOrders() {
        try {
            return ResponseEntity.ok(paymentService.getAllTransactions());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    /**
     * Receives and verifies Stripe webhook events, keeping our database records synchronized.
     */
    @PostMapping("/webhook")
    public ResponseEntity<String> handleStripeWebhook(
            @RequestBody String payload,
            @RequestHeader("Stripe-Signature") String sigHeader) {

        if (stripeApiKey == null || stripeApiKey.contains("placeholder")) {
            // Mock webhook parser for offline testing
            LOGGER.info(">>> Mock Webhook endpoint received request. Payload: " + payload);
            return ResponseEntity.ok("Mock Webhook parsed successfully.");
        }

        Event event;
        try {
            // Validate payload integrity using Stripe's cryptographical signature header
            event = Webhook.constructEvent(payload, sigHeader, webhookSecret);
        } catch (SignatureVerificationException e) {
            LOGGER.severe(">>> Webhook signature verification failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid signature.");
        }

        // Deserialize event parameters
        EventDataObjectDeserializer dataObjectDeserializer = event.getDataObjectDeserializer();
        if (dataObjectDeserializer.getObject().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to deserialize event object.");
        }

        // Route actions based on event type
        String eventType = event.getType();
        LOGGER.info(">>> Received Stripe Webhook event: " + eventType);

        switch (eventType) {
            case "payment_intent.succeeded":
                PaymentIntent paymentIntent = (PaymentIntent) dataObjectDeserializer.getObject().get();
                paymentService.updateTransactionStatus(paymentIntent.getId(), TransactionStatus.SUCCEEDED);
                break;

            case "payment_intent.payment_failed":
                PaymentIntent failedIntent = (PaymentIntent) dataObjectDeserializer.getObject().get();
                paymentService.updateTransactionStatus(failedIntent.getId(), TransactionStatus.FAILED);
                break;

            case "charge.refunded":
                // Handles case where refunds are initiated manually from the Stripe dashboard.
                // It fetches the refund object and locates the matching payment intent to synchronize states.
                Refund refund = (Refund) dataObjectDeserializer.getObject().get();
                paymentService.updateTransactionStatus(refund.getPaymentIntent(), TransactionStatus.REFUNDED);
                break;

            default:
                LOGGER.info(">>> Unhandled Stripe event type: " + eventType);
                break;
        }

        return ResponseEntity.ok("Webhook processed successfully.");
    }
}
