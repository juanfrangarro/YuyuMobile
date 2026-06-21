# YUYU MOBILE - Certified Pre-Owned E-Commerce Platform

Welcome to the **YUYU MOBILE** developer documentation. This full-stack Spring Boot web application is designed for High-Net-Worth Individuals (HNWI) purchasing certified, hand-polished, second-hand luxury flagship smartphones.

---

## 🛠 Tech Stack

*   **Backend Core:** Spring Boot 3.3.0 (Java 17)
*   **Database & Persistence:** Spring Data JPA with Hibernate, running an in-memory **H2 Database** for rapid seeding and zero-configuration setups.
*   **External Integration:** Official **Stripe SDK** for secure acquisition transactions and payment refunds.
*   **Frontend Client:** Premium Vanilla HTML5, CSS3, and Javascript (built-in 3D lighting simulators, interactive canvases, multi-lingual translations, dynamic carousels, and modal frameworks).

---

## 🚀 How to Access & Run the Web Application

### Prerequisites
1.  **JDK 17** installed.
2.  **Maven** configured in your environment or locally.

### Compilation
Build the executable fat JAR by executing the clean package phase:
```bash
mvn clean package -DskipTests
```

### Starting the Server
Run the packaged JAR:
```bash
java -jar target/luxury-1.0.0.jar
```
The server binds to port **`8080`** by default.

### Port & Access Endpoints
*   **Main Application Webpage:** [http://localhost:8080](http://localhost:8080)
*   **In-Memory Database Console:** [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
    *   *JDBC URL:* `jdbc:h2:mem:luxurydb`
    *   *Username:* `SA`
    *   *Password:* *(leave empty)*

---

## 📡 REST API Controller Specifications

### 1. `PhoneController` (Base Path: `/api/phones`)

Handles certified catalog inventory queries and management.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/phones` | Lists all phones, including spec details, conditions, and multi-angle views. |
| **GET** | `/api/phones/in-stock` | Returns in-stock certified listings only. |
| **GET** | `/api/phones/{id}` | Fetches a single device configuration by ID. |
| **POST** | `/api/phones` | Inserts a new configuration (for administrators). |
| **PUT** | `/api/phones/{id}` | Modifies catalog specifications of an existing device. |
| **DELETE** | `/api/phones/{id}` | Deletes a device from the database catalog. |

#### Request Payload Example (`POST /api/phones`)
```json
{
  "name": "Apple iPhone 15 Pro Max (Custom Gold)",
  "price": 4500.00,
  "description": "Solid aerospace grade titanium back electroplated in pure 24-karat gold.",
  "chassis": "Bespoke Grade 5 Titanium",
  "plating": "24K Gold Electroplating",
  "glass": "Ceramic Shield & Sapphire",
  "storage": "1 TB Secured Storage",
  "color": "gold",
  "deviceCondition": "Pristine (Like New)",
  "images": ["gold_front", "gold_back", "gold_side"],
  "inStock": true
}
```

---

### 2. `PaymentController` (Base Path: `/api/payments`)

Exposes endpoints for processing Stripe transactions, handling refunds, and parsing real-time events.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/payments/create-intent` | Initiates Stripe Payment Intent, writing a `PENDING` log into the ledger (or succeeds immediately in mock). |
| **POST** | `/api/payments/refund` | Issues a Stripe Refund, transitioning the local transaction status to `REFUNDED`. |
| **POST** | `/api/payments/webhook` | Receives signature-verified callback webhooks from Stripe network. |
| **GET** | `/api/payments/orders` | Retrieves all transaction ledgers (available for users with ADMIN role). |

#### Request Payload Example (`POST /api/payments/create-intent`)
```json
{
  "amount": 4500.00,
  "currency": "EUR",
  "customerName": "Sir Julian Sterling",
  "customerEmail": "julian@sterling.luxury"
}
```

---

### 3. `AuthController` (Base Path: `/api/auth`)

Manages user registration, authentication session logs, and personal shipping coordinate profile updates.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Registers a new account, hashing passwords with SHA-256. |
| **POST** | `/api/auth/login` | Authenticates user credentials, returning user profile details. |
| **PUT** | `/api/auth/profile` | Modifies account profile coordinates and passwords. |

#### Seeded Accounts on Startup
The seeder bean checks and seeds:
* **Role:** `ADMIN` | **Username:** `admin` | **Password:** `admin123` | **Email:** `grindelsoftware@gmail.com`

---

## 🎨 Frontend Architecture

The frontend files reside under `src/main/resources/static/`:
*   `index.html`: Holds the structure, translations bindings (`data-t`), and modal views.
*   `styles.css`: Dark-obsidian theme styles, glassmorphic filters, slide animations, and responsive breakpoints.
*   `app.js`: Client controller. Includes:
    *   **Vector Canvas Engine:** Renders dynamic 2D device structures based on image suffixes (`_front`, `_back`, `_side`) eliminating generic broken image icons.
    *   **Card Carousels:** Handles sliding views for items containing multiple image keys.
    *   **Detail Modals:** Dynamically displays specs lists and condition labels on card click.
    *   **Cart & Checkout State:** Calculates subtotal valuations, adding custom packaging fees if desired.

---

## ⚠️ Developer Notes & Guardrails
*   **Lombok Omitted:** Standard getters, setters, and constructors are written explicitly in `Phone.java` and `Transaction.java`. Avoid using Lombok annotations to maintain compilation environment portability.
*   **Stripe Mock Mode:** If no Stripe API key is set in configuration files, the application automatically handles payments using virtual simulation mode (`pi_mock_...`), avoiding integration errors in local workspaces.
