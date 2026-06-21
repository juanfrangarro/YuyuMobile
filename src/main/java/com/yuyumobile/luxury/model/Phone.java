package com.yuyumobile.luxury.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "phones")
public class Phone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(length = 1000)
    private String description;

    private String chassis;
    private String plating;
    private String glass;
    private String storage;
    private String color;
    private String deviceCondition;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "phone_images", joinColumns = @JoinColumn(name = "phone_id"))
    @Column(name = "image_tag")
    private List<String> images = new ArrayList<>();

    @Column(nullable = false)
    private Boolean inStock = true;

    // Constructors
    public Phone() {
    }

    public Phone(Long id, String name, BigDecimal price, String description, String chassis, String plating, String glass, String storage, String color, String deviceCondition, List<String> images, Boolean inStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.chassis = chassis;
        this.plating = plating;
        this.glass = glass;
        this.storage = storage;
        this.color = color;
        this.deviceCondition = deviceCondition;
        this.images = images;
        this.inStock = inStock;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getChassis() {
        return chassis;
    }

    public void setChassis(String chassis) {
        this.chassis = chassis;
    }

    public String getPlating() {
        return plating;
    }

    public void setPlating(String plating) {
        this.plating = plating;
    }

    public String getGlass() {
        return glass;
    }

    public void setGlass(String glass) {
        this.glass = glass;
    }

    public String getStorage() {
        return storage;
    }

    public void setStorage(String storage) {
        this.storage = storage;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDeviceCondition() {
        return deviceCondition;
    }

    public void setDeviceCondition(String deviceCondition) {
        this.deviceCondition = deviceCondition;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public Boolean getInStock() {
        return inStock;
    }

    public void setInStock(Boolean inStock) {
        this.inStock = inStock;
    }
}
