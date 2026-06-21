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
    private final com.yuyumobile.luxury.service.EmailService emailService;

    @Autowired
    public AuthController(UserRepository userRepository, com.yuyumobile.luxury.service.EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> request) {
        try {
            String email = request.get("email");
            String phone = request.get("phone");
            String password = request.get("password");
            String repeatPassword = request.get("repeatPassword");

            if ((email == null || email.trim().isEmpty()) && (phone == null || phone.trim().isEmpty())) {
                return ResponseEntity.badRequest().body("Either email or phone number coordinate is required.");
            }

            if (password == null || repeatPassword == null) {
                return ResponseEntity.badRequest().body("Password and Repeat Password are required fields.");
            }

            if (!password.equals(repeatPassword)) {
                return ResponseEntity.badRequest().body("Passwords do not match.");
            }

            // Enforce password complexity: 8-50 chars, uppercase, lowercase, numbers, special characters
            String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&.])[A-Za-z\\d@$!%*?&.]{8,50}$";
            if (!password.matches(passwordRegex)) {
                return ResponseEntity.badRequest().body("Password must be between 8 and 50 characters, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&.).");
            }

            String username = (email != null && !email.trim().isEmpty()) ? email : phone;

            if (email != null && !email.trim().isEmpty() && userRepository.findByEmail(email).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Email is already registered.");
            }

            if (phone != null && !phone.trim().isEmpty() && userRepository.findByPhone(phone).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Phone number is already registered.");
            }

            if (userRepository.findByUsername(username).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Username coordinate is already registered.");
            }

            String hashedPassword = hashPassword(password);
            User user = new User();
            user.setUsername(username);
            user.setPassword(hashedPassword);
            user.setRole("USER");

            if (email != null && !email.trim().isEmpty()) {
                user.setEmail(email);
                user.setVerified(false);
                user.setVerificationToken(java.util.UUID.randomUUID().toString());
                User savedUser = userRepository.save(user);
                emailService.sendVerificationEmail(savedUser);
                return ResponseEntity.ok(Map.of(
                    "status", "VERIFICATION_PENDING",
                    "message", "A verification email has been dispatched. Please authorize it before signing in."
                ));
            } else {
                user.setPhone(phone);
                user.setVerified(true); // Phone registered users verified directly
                User savedUser = userRepository.save(user);
                savedUser.setPassword("");
                return ResponseEntity.ok(savedUser);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/verify")
    public ResponseEntity<String> verifyUser(@RequestParam("token") String token) {
        Optional<User> userOpt = userRepository.findByVerificationToken(token);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .header("Content-Type", "text/html; charset=UTF-8")
                .body("<h2>Verification Failed</h2><p>Invalid or expired verification token.</p>");
        }
        User user = userOpt.get();
        user.setVerified(true);
        user.setVerificationToken(null);
        userRepository.save(user);
        return ResponseEntity.ok()
            .header("Content-Type", "text/html; charset=UTF-8")
            .body("<h2>Verification Successful</h2><p>Your YUYU MOBILE access has been verified. You can now close this tab and sign in.</p>");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> request) {
        try {
            String username = request.get("username");
            String password = request.get("password");

            if (username == null || password == null) {
                return ResponseEntity.badRequest().body("Username/Email/Phone and password are required.");
            }

            Optional<User> userOpt = userRepository.findByUsername(username);
            if (userOpt.isEmpty()) {
                userOpt = userRepository.findByEmail(username);
            }
            if (userOpt.isEmpty()) {
                userOpt = userRepository.findByPhone(username);
            }

            if (userOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
            }

            User user = userOpt.get();
            
            // Check verification status
            if (user.getVerified() != null && !user.getVerified()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Your email is not verified yet. Please check your inbox for the verification link.");
            }

            String hashedPassword = hashPassword(password);
            if (!user.getPassword().equals(hashedPassword)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
            }

            // Clean password from response
            User responseUser = new User();
            responseUser.setId(user.getId());
            responseUser.setUsername(user.getUsername());
            responseUser.setEmail(user.getEmail());
            responseUser.setPhone(user.getPhone());
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
