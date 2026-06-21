# Technical Decisions Walkthrough - YUYU MOBILE

This document details the architectural decisions, pivot choices, and problem resolutions implemented during the development of the YUYU MOBILE web platform.

---

## 1. Pivot: Luxury Configurator to Certified Pre-Owned Reseller

### Trigger
The brand direction shifted from a direct custom phone manufacturer/retailer to a highly vetted **second-hand (Certified Pre-Owned) marketplace** for flagship smartphones. 
* Developers needed to show quality status indicators for each item.
* Potential buyers wanted to inspect specific physical angles (Front, Back, Side) to check physical condition before buying.
* Deep technical specifications (chassis cores, glass types) needed to be easily inspectable in detail without cluttering the catalog grid.

### Decision
* **Condition Indicators:** Modified the JPA data structure and REST endpoints to accept and store `deviceCondition` grades (e.g. *Pristine*, *Mint*, *Excellent*).
* **Multi-Angle Catalog Carousels:** Refactored card structures to load chevrons, pagination indicator dots, and interactive multi-image structures.
* **Glassmorphic Product Detail Modals:** Implemented a slide-up detail overlay that displays specification sheets and contains a standalone high-res carousel.

---

## 2. Dynamic Canvas Illustrations vs. Real Static Images

### Trigger
Using static image URLs for custom luxury phones (e.g., iPhone 15 Pro Max Custom Gold in front/back/side configurations) leads to high bandwidth costs, potential broken links, and limits runtime updates (changing colors dynamically).

### Decision
Implemented custom HTML5 vector canvas drawing scripts in `app.js` keyed by suffix values:
* `_front`: Draws the device screen face displaying "YUYU MOBILE".
* `_back`: Draws the back chassis detailing custom camera arrays and branding.
* `_side`: Draws side profile frames detailing buttons and shiny metallic edges.

### Trade-offs
* **Pros:** Guaranteed load success, zero file dependencies, highly performant, adapts color palettes instantly.
* **Cons:** Renderings are geometric vector simulations rather than photorealistic textures.

---

## 3. Omission of Lombok Library

### Trigger
During multi-environment builds, the Java compilation process failed to resolve generated getters and setters due to classpath discrepancies in annotation processor configurations.

### Decision
Completely removed Lombok dependencies (`@Getter`, `@Setter`, `@NoArgsConstructor`) from the entities [Phone.java](file:///d:/Symbio/Proyectos/YuyuMobile/src/main/java/com/yuyumobile/luxury/model/Phone.java) and [Transaction.java](file:///d:/Symbio/Proyectos/YuyuMobile/src/main/java/com/yuyumobile/luxury/model/Transaction.java), replaced them with manual Java constructors, getters, and setters.

### Trade-offs
* **Pros:** Complete compiler environment portability; build succeeds out of the box regardless of IDE annotation processor support.
* **Cons:** Increases boilerplate code inside entity models.

---

## 4. Stripe Webhook & Payment Simulation Strategy

### Trigger
Offline developers without Stripe Dashboard credentials needed to execute and test the order checkout ledger, state transitions, and webhook listeners without hitting real APIs.

### Decision
* Built a **mock fall-through processor** in `PaymentService`. If no valid `stripe.api.key` is detected in configurations, the service automatically generates simulated Stripe tokens (`pi_mock_...` and `re_mock_...`).
* Integrated matching mock triggers into `/api/payments/webhook` to handle checkout states cleanly during local testing.

---

## 5. Lightweight User Authentication & Profile Management

### Trigger
Requirement to sign up/login users, modify profiles, and fill out shipping details automatically.

### Decision
* Built a self-contained JPA `User` entity and repository.
* Implemented `AuthController.java` with `/api/auth/register`, `/api/auth/login`, and PUT `/api/auth/profile` endpoints.
* Utilized native Java standard `SHA-256` hashing with `MessageDigest` to avoid bringing in complex Spring Security dependencies that could break the client SPA router.

---

## 6. Administrator Control Panel (Ledger Table)

### Trigger
Administration needed a secure way to visualize transaction success, total values, customer names, and emails.

### Decision
* Created GET `/api/payments/orders` endpoint inside `PaymentController.java` to list all transaction logs.
* Added an Admin Panel navigation link that fetches orders dynamically and renders them in a premium scrollable table (only accessible to users with the `ADMIN` role).
* Seeded a default `admin` user with email `grindelsoftware@gmail.com` and password `admin123` on startup.

---

## 7. Email Notification Alerts to grindelsoftware@gmail.com

### Trigger
Automatic notification of the administrator when checkout succeeds.

### Decision
* Created `EmailService.java` which compiles order reference IDs, client coordinates, and transaction status logs.
* Connected `EmailService` to trigger notifications when Stripe mock transactions succeed or when the production Stripe webhook transitions status to `SUCCEEDED`.
* Outfitted the mail system with a console logger fallback so development teams can verify emails without active SMTP configs.
