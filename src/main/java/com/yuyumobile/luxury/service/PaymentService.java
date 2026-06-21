package com.yuyumobile.luxury.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.model.Refund;
import com.stripe.param.PaymentIntentCreateParams;
import com.stripe.param.RefundCreateParams;
import com.yuyumobile.luxury.model.Transaction;
import com.yuyumobile.luxury.model.TransactionStatus;
import com.yuyumobile.luxury.repository.TransactionRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Logger;

@Service
public class PaymentService {

    private static final Logger LOGGER = Logger.getLogger(PaymentService.class.getName());

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    private final TransactionRepository transactionRepository;

    @Autowired
    public PaymentService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @PostConstruct
    public void init() {
        // Set the Stripe secret key on startup
        if (stripeApiKey == null || stripeApiKey.contains("placeholder")) {
            LOGGER.warning(">>> Stripe API key is currently using a placeholder config. Operations will run in mock simulation mode.");
        } else {
            Stripe.apiKey = stripeApiKey;
            LOGGER.info(">>> Stripe API client successfully initialized.");
        }
    }

    /**
     * Initializes a transaction: registers intent in Stripe and saves database entity.
     */
    @Transactional
    public Transaction createPaymentIntent(BigDecimal amount, String currency, String customerName, String customerEmail) {
        String paymentIntentId;
        String clientSecret;

        // Convert BigDecimal amount to Stripe cents (e.g. 10.00 EUR -> 1000 cents)
        long amountInCents = amount.multiply(new BigDecimal("100")).longValue();

        if (stripeApiKey == null || stripeApiKey.contains("placeholder")) {
            // Mock simulation mode
            paymentIntentId = "pi_mock_" + UUID.randomUUID().toString().replace("-", "").substring(0, 16);
            clientSecret = paymentIntentId + "_secret_mock";
            LOGGER.info(">>> Simulated Stripe PaymentIntent created locally: " + paymentIntentId);
        } else {
            try {
                PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                        .setAmount(amountInCents)
                        .setCurrency(currency.toLowerCase())
                        .setReceiptEmail(customerEmail)
                        .putMetadata("customerName", customerName)
                        .build();

                PaymentIntent intent = PaymentIntent.create(params);
                paymentIntentId = intent.getId();
                clientSecret = intent.getClientSecret();
            } catch (StripeException e) {
                LOGGER.severe(">>> Stripe API Error creating payment intent: " + e.getMessage());
                throw new RuntimeException("Could not initiate Stripe Payment Intent: " + e.getMessage(), e);
            }
        }

        // Save ledger entry with PENDING status
        Transaction tx = new Transaction();
        tx.setStripePaymentIntentId(paymentIntentId);
        tx.setAmount(amount);
        tx.setCurrency(currency.toUpperCase());
        tx.setCustomerName(customerName);
        tx.setCustomerEmail(customerEmail);
        tx.setStatus(TransactionStatus.PENDING);
        
        return transactionRepository.save(tx);
    }

    /**
     * Processes customer returns: triggers refund in Stripe and updates database ledger entry.
     */
    @Transactional
    public Transaction processRefund(String stripePaymentIntentId, String reason) {
        // 1. Find the transaction
        Transaction tx = transactionRepository.findByStripePaymentIntentId(stripePaymentIntentId)
                .orElseThrow(() -> new IllegalArgumentException("Transaction not found for payment intent: " + stripePaymentIntentId));

        // 2. Prevent double refunds
        if (tx.getStatus() == TransactionStatus.REFUNDED) {
            throw new IllegalStateException("Transaction has already been refunded.");
        }

        String refundId;

        if (stripeApiKey == null || stripeApiKey.contains("placeholder")) {
            // Mock simulation mode
            refundId = "re_mock_" + UUID.randomUUID().toString().replace("-", "").substring(0, 16);
            LOGGER.info(">>> Simulated Stripe Refund processed locally for intent: " + stripePaymentIntentId);
        } else {
            try {
                // Stripe uses charge references or intent references. We can trigger a refund directly by Intent ID.
                RefundCreateParams params = RefundCreateParams.builder()
                        .setPaymentIntent(stripePaymentIntentId)
                        .putMetadata("reason", reason)
                        .build();

                Refund refund = Refund.create(params);
                refundId = refund.getId();
            } catch (StripeException e) {
                LOGGER.severe(">>> Stripe API Error processing refund: " + e.getMessage());
                throw new RuntimeException("Could not process payment refund through Stripe: " + e.getMessage(), e);
            }
        }

        // Update database log
        tx.setStripeRefundId(refundId);
        tx.setStatus(TransactionStatus.REFUNDED);
        
        return transactionRepository.save(tx);
    }

    /**
     * Updates an existing transaction status (e.g. from webhooks).
     */
    @Transactional
    public void updateTransactionStatus(String stripePaymentIntentId, TransactionStatus newStatus) {
        transactionRepository.findByStripePaymentIntentId(stripePaymentIntentId)
                .ifPresent(tx -> {
                    tx.setStatus(newStatus);
                    transactionRepository.save(tx);
                    LOGGER.info(">>> Transaction " + stripePaymentIntentId + " updated to " + newStatus);
                });
    }
}
