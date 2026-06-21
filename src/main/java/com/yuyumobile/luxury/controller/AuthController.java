package com.yuyumobile.luxury.controller;

import com.yuyumobile.luxury.model.User;
import com.yuyumobile.luxury.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository userRepository;

    @Autowired
    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> request) {
        try {
            String username = request.get("username");
            String password = request.get("password");
            String email = request.get("email");
            String fullName = request.get("fullName");
            String address = request.get("address");
            String city = request.get("city");
            String zipCode = request.get("zipCode");
            String country = request.get("country");

            if (username == null || password == null || email == null) {
                return ResponseEntity.badRequest().body("Username, password, and email are required fields.");
            }

            if (userRepository.findByUsername(username).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Username is already occupied.");
            }

            if (userRepository.findByEmail(email).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Email is already registered.");
            }

            String hashedPassword = hashPassword(password);
            User user = new User(username, hashedPassword, email, fullName, address, city, zipCode, country, "USER");
            User savedUser = userRepository.save(user);

            // Clean password from response
            savedUser.setPassword("");
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> request) {
        try {
            String username = request.get("username");
            String password = request.get("password");

            if (username == null || password == null) {
                return ResponseEntity.badRequest().body("Username and password are required.");
            }

            Optional<User> userOpt = userRepository.findByUsername(username);
            if (userOpt.isEmpty()) {
                // Check if they input email instead of username
                userOpt = userRepository.findByEmail(username);
            }

            if (userOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
            }

            User user = userOpt.get();
            String hashedPassword = hashPassword(password);

            if (!user.getPassword().equals(hashedPassword)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
            }

            // Clean password from response
            User responseUser = new User();
            responseUser.setId(user.getId());
            responseUser.setUsername(user.getUsername());
            responseUser.setEmail(user.getEmail());
            responseUser.setFullName(user.getFullName());
            responseUser.setAddress(user.getAddress());
            responseUser.setCity(user.getCity());
            responseUser.setZipCode(user.getZipCode());
            responseUser.setCountry(user.getCountry());
            responseUser.setRole(user.getRole());

            return ResponseEntity.ok(responseUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, String> request) {
        try {
            String username = request.get("username");
            if (username == null) {
                return ResponseEntity.badRequest().body("Username coordinate is required.");
            }

            Optional<User> userOpt = userRepository.findByUsername(username);
            if (userOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
            }

            User user = userOpt.get();
            
            // Update fields if provided
            if (request.containsKey("email")) user.setEmail(request.get("email"));
            if (request.containsKey("fullName")) user.setFullName(request.get("fullName"));
            if (request.containsKey("address")) user.setAddress(request.get("address"));
            if (request.containsKey("city")) user.setCity(request.get("city"));
            if (request.containsKey("zipCode")) user.setZipCode(request.get("zipCode"));
            if (request.containsKey("country")) user.setCountry(request.get("country"));
            
            // Password change option
            if (request.containsKey("password") && request.get("password") != null && !request.get("password").trim().isEmpty()) {
                user.setPassword(hashPassword(request.get("password")));
            }

            User updatedUser = userRepository.save(user);
            updatedUser.setPassword(""); // Clean password
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    /**
     * Standard SHA-256 password hashing.
     */
    private String hashPassword(String password) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(password.getBytes(StandardCharsets.UTF_8));
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception ex) {
            throw new RuntimeException("Error hashing password", ex);
        }
    }
}
