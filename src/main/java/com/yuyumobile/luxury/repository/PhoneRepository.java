package com.yuyumobile.luxury.repository;

import com.yuyumobile.luxury.model.Phone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhoneRepository extends JpaRepository<Phone, Long> {
    
    /**
     * Retrieves all luxury smartphones currently marked as in-stock.
     */
    List<Phone> findByInStockTrue();
}
