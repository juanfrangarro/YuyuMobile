package com.yuyumobile.luxury.repository;

import com.yuyumobile.luxury.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    
    /**
     * Finds a single transaction log entry matching a specific Stripe Payment Intent key.
     */
    Optional<Transaction> findByStripePaymentIntentId(String stripePaymentIntentId);
}
