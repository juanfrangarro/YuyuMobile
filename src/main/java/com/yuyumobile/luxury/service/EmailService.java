package com.yuyumobile.luxury.service;

import com.yuyumobile.luxury.model.Transaction;
import org.springframework.stereotype.Service;
import java.util.logging.Logger;

@Service
public class EmailService {

    private static final Logger LOGGER = Logger.getLogger(EmailService.class.getName());

    /**
     * Sends a transaction confirmation email alert to the administrator account.
     */
    public void sendAdminNotification(Transaction transaction) {
        String adminEmail = "grindelsoftware@gmail.com";
        String subject = "🔔 NEW SMARTPHONE ACQUISITION AUTHORIZED: " + transaction.getStripePaymentIntentId();
        
        StringBuilder body = new StringBuilder();
        body.append("========================================================================\n");
        body.append("                  YUYU MOBILE - LUXURY TRANSACTION ALERT                \n");
        body.append("========================================================================\n");
        body.append("To: ").append(adminEmail).append("\n");
        body.append("Subject: ").append(subject).append("\n\n");
        body.append("A client has successfully authorized an acquisition on the platform.\n\n");
        body.append("--- ORDER DETAILS ---\n");
        body.append("Transaction ID: ").append(transaction.getId()).append("\n");
        body.append("Stripe Intent ID: ").append(transaction.getStripePaymentIntentId()).append("\n");
        body.append("Client Name: ").append(transaction.getCustomerName()).append("\n");
        body.append("Client Email: ").append(transaction.getCustomerEmail()).append("\n");
        body.append("Amount Settled: ").append(transaction.getAmount()).append(" ").append(transaction.getCurrency()).append("\n");
        body.append("Transaction Status: ").append(transaction.getStatus()).append("\n");
        body.append("Timestamp: ").append(transaction.getCreatedAt() != null ? transaction.getCreatedAt() : "Just Now").append("\n");
        body.append("========================================================================\n");

        LOGGER.info("\n" + body.toString());
    }

    /**
     * Sends verification link to registered client email address.
     */
    public void sendVerificationEmail(com.yuyumobile.luxury.model.User user) {
        String recipient = user.getEmail();
        String subject = "🔑 VERIFY YOUR YUYU MOBILE LUXURY PORTAL ACCESS";

        StringBuilder body = new StringBuilder();
        body.append("========================================================================\n");
        body.append("                  YUYU MOBILE - ACCESS VERIFICATION REQUIRED            \n");
        body.append("========================================================================\n");
        body.append("To: ").append(recipient).append("\n");
        body.append("Subject: ").append(subject).append("\n\n");
        body.append("Welcome to YUYU MOBILE. Please verify your email coordinates using the link below:\n\n");
        body.append("👉 http://localhost:8080/api/auth/verify?token=").append(user.getVerificationToken()).append("\n\n");
        body.append("If you did not request registration, please disregard this transmission.\n");
        body.append("========================================================================\n");

        LOGGER.info("\n" + body.toString());
    }
}
