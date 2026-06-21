package com.yuyumobile;

import com.yuyumobile.luxury.model.Phone;
import com.yuyumobile.luxury.repository.PhoneRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.util.List;

@SpringBootApplication
public class LuxuryApplication {

    public static void main(String[] args) {
        SpringApplication.run(LuxuryApplication.class, args);
    }

    /**
     * Seeds the database with default luxury certified pre-owned configurations on start.
     */
    @Bean
    public CommandLineRunner databaseSeeder(PhoneRepository phoneRepository, com.yuyumobile.luxury.repository.UserRepository userRepository) {
        return args -> {
            if (phoneRepository.count() == 0) {
                Phone gold = new Phone();
                gold.setName("Apple iPhone 15 Pro Max (Custom Gold)");
                gold.setPrice(new BigDecimal("4500.00"));
                gold.setDescription("Rigourously inspected custom creation. Solid aerospace grade titanium back electroplated in pure 24-karat gold.");
                gold.setChassis("Bespoke Grade 5 Titanium");
                gold.setPlating("24K Gold Electroplating");
                gold.setGlass("Ceramic Shield & Sapphire");
                gold.setStorage("1 TB Secured Storage");
                gold.setColor("gold");
                gold.setDeviceCondition("Pristine (Like New)");
                gold.setImages(List.of("gold_front", "gold_back", "gold_side"));
                gold.setInStock(true);

                Phone obsidian = new Phone();
                obsidian.setName("Samsung Galaxy S24 Ultra (Obsidian Custom)");
                obsidian.setPrice(new BigDecimal("3800.00"));
                obsidian.setDescription("Inspected and fully certified. Carbon-silicon body with amorphous diamond stealth coating.");
                obsidian.setChassis("Titanium & Carbon Frame");
                obsidian.setPlating("Amorphous Diamond-Like Carbon");
                obsidian.setGlass("Corning Armor & Sapphire Layer");
                obsidian.setStorage("512 GB Secured Storage");
                obsidian.setColor("obsidian");
                obsidian.setDeviceCondition("Excellent (Polished)");
                obsidian.setImages(List.of("obsidian_front", "obsidian_back", "obsidian_side"));
                obsidian.setInStock(true);

                Phone platinum = new Phone();
                platinum.setName("Apple iPhone 14 Pro (Bespoke Platinum)");
                platinum.setPrice(new BigDecimal("2900.00"));
                platinum.setDescription("Inspected pre-owned edition. Cladded in custom mirror-polished platinum and diamond cut control buttons.");
                platinum.setChassis("Bespoke Titanium Core");
                platinum.setPlating("Bespoke Platinum Cladding");
                platinum.setGlass("Ceramic Shield & Sapphire Layer");
                platinum.setStorage("1 TB Secured Storage");
                platinum.setColor("platinum");
                platinum.setDeviceCondition("Mint (Showroom State)");
                platinum.setImages(List.of("platinum_front", "platinum_back", "platinum_side"));
                platinum.setInStock(true);

                phoneRepository.saveAll(List.of(gold, obsidian, platinum));
                System.out.println(">>> Relational database successfully pre-loaded with luxury certified pre-owned smartphone assets.");
            }

            if (userRepository.findByUsername("admin").isEmpty()) {
                String pass = "admin123";
                try {
                    java.security.MessageDigest digest = java.security.MessageDigest.getInstance("SHA-256");
                    byte[] hash = digest.digest(pass.getBytes(java.nio.charset.StandardCharsets.UTF_8));
                    StringBuilder hexString = new StringBuilder();
                    for (byte b : hash) {
                        String hex = Integer.toHexString(0xff & b);
                        if (hex.length() == 1) hexString.append('0');
                        hexString.append(hex);
                    }
                    com.yuyumobile.luxury.model.User admin = new com.yuyumobile.luxury.model.User(
                        "admin",
                        hexString.toString(),
                        "grindelsoftware@gmail.com",
                        "Grindel Administrator",
                        "Edificio G, Planta 4",
                        "Madrid",
                        "28001",
                        "ES",
                        "ADMIN"
                    );
                    userRepository.save(admin);
                    System.out.println(">>> Seeded default administrator account: admin / admin123 (grindelsoftware@gmail.com)");
                } catch (Exception e) {
                    System.err.println(">>> Failed to seed administrator user: " + e.getMessage());
                }
            }
        };
    }
}
