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
}
