package com.yuyumobile.luxury.service;

import com.yuyumobile.luxury.model.Phone;
import com.yuyumobile.luxury.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PhoneService {

    private final PhoneRepository phoneRepository;

    @Autowired
    public PhoneService(PhoneRepository phoneRepository) {
        this.phoneRepository = phoneRepository;
    }

    @Transactional(readOnly = true)
    public List<Phone> getAllPhones() {
        return phoneRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Phone> getInStockPhones() {
        return phoneRepository.findByInStockTrue();
    }

    @Transactional(readOnly = true)
    public Optional<Phone> getPhoneById(Long id) {
        return phoneRepository.findById(id);
    }

    @Transactional
    public Phone savePhone(Phone phone) {
        return phoneRepository.save(phone);
    }

    @Transactional
    public void deletePhone(Long id) {
        phoneRepository.deleteById(id);
    }
}
