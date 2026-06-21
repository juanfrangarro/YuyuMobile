package com.yuyumobile.luxury.controller;

import com.yuyumobile.luxury.model.Phone;
import com.yuyumobile.luxury.service.PhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/phones")
@CrossOrigin(origins = "*")
public class PhoneController {

    private final PhoneService phoneService;

    @Autowired
    public PhoneController(PhoneService phoneService) {
        this.phoneService = phoneService;
    }

    @GetMapping
    public ResponseEntity<List<Phone>> getAllPhones() {
        return ResponseEntity.ok(phoneService.getAllPhones());
    }

    @GetMapping("/in-stock")
    public ResponseEntity<List<Phone>> getInStockPhones() {
        return ResponseEntity.ok(phoneService.getInStockPhones());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Phone> getPhoneById(@PathVariable Long id) {
        return phoneService.getPhoneById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Phone> createPhone(@RequestBody Phone phone) {
        Phone saved = phoneService.savePhone(phone);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Phone> updatePhone(@PathVariable Long id, @RequestBody Phone phoneDetails) {
        return phoneService.getPhoneById(id)
                .map(existingPhone -> {
                    existingPhone.setName(phoneDetails.getName());
                    existingPhone.setPrice(phoneDetails.getPrice());
                    existingPhone.setDescription(phoneDetails.getDescription());
                    existingPhone.setChassis(phoneDetails.getChassis());
                    existingPhone.setPlating(phoneDetails.getPlating());
                    existingPhone.setGlass(phoneDetails.getGlass());
                    existingPhone.setStorage(phoneDetails.getStorage());
                    existingPhone.setColor(phoneDetails.getColor());
                    existingPhone.setDeviceCondition(phoneDetails.getDeviceCondition());
                    existingPhone.setImages(phoneDetails.getImages());
                    existingPhone.setInStock(phoneDetails.getInStock());
                    
                    Phone updated = phoneService.savePhone(existingPhone);
                    return ResponseEntity.ok(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePhone(@PathVariable Long id) {
        if (phoneService.getPhoneById(id).isPresent()) {
            phoneService.deletePhone(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
