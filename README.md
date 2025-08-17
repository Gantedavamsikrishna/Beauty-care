# GlowGroove – Beauty Care E-Commerce Monorepo

✨ **GlowGroove** (Beauty Care) is a full-stack **E-Commerce Monorepo** built to simplify online beauty product shopping.
It provides a modern **Angular-based frontend** for customers and a **Spring Boot microservices backend** for managing products, users, and orders.
This project is designed to be scalable, modular, and easy to extend for real-world e-commerce needs.

---

## ⚡ Tech Stack

### Frontend

- Angular
- TypeScript
- HTML, CSS, Bootstrap

### Backend

- Java (Spring Boot)
- Microservices
- Maven
- REST APIs

### Database

- MongoDB

### Tools & Others

- Git & GitHub
- Postman (API testing)
- Docker (containerization)

---

## 📂 Project Structure

| Folder                     | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `frontend/`                | Angular based E-Commerce UI for Beauty Care           |
| `backend/product-service/` | Handles product catalog (CRUD for beauty products)    |
| `backend/order-service/`   | Manages customer orders and order history             |
| `backend/user-service/`    | User management (registration, login, authentication) |
| `backend/admin-service/`   | Admin dashboard and role management                   |

---

## 🚀 Features

- 🛍️ Product listing, search, and details
- 🛒 Shopping cart & checkout system
- 👤 User authentication & profile management
- 📦 Order management & history
- 🛠️ Admin panel for managing products & users
- 🔗 REST APIs for frontend-backend integration

---

## 🌍 Hosted URLs

| Service                | Status     | URL                                                                                |                                          |
| ---------------------- | ---------- | ---------------------------------------------------------------------------------- | ---------------------------------------- |
| **Frontend (Angular)** | 🟢 Active  | [https://beauty-care-psi.vercel.app/home](https://beauty-care-psi.vercel.app/home) |                                          |
| **Order Service**      | 🟢 Active  | [https://orderserviceapi.onrender.com](https://orderserviceapi.onrender.com)       |                                          |
| **Product Service**    | 🟢 Active  | [https://products-api-44eo.onrender.com](https://products-api-44eo.onrender.com)   |                                          |
| **Admin Service**      | 🟢 Pending | [https://adminlogin-latest.onrender.com] (https://adminlogin-latest.onrender.com)  |                                          |

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Gantedavamsikrishna/Beauty-care.git
cd beauty-care
```

### Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

### Backend (Spring Boot)

Go into each microservice and run:

```bash
cd backend/product-service
mvn spring-boot:run
```

---

## 📌 API Endpoints

### 🔹 Product Service

| Method | Endpoint              | Description      |
| ------ | --------------------- | ---------------- |
| GET    | `/product/data`       | Get all products |
| POST   | `/product/save`       | Add new product  |
| PUT    | `/product/edit/{id}`  | Update product   |
| DELETE | `/product/delete/{id` | Delete product   |

### 🔹 Order Service

| Method | Endpoint      | Description     |
| ------ | ------------- | --------------- |
| GET    | `/order/data` | Get all orders  |
| POST   | `/api/save`   | Place new order |

### 🔹 Admin Service

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | `/admin/save`  | Register user |
| POST   | `/admin/login` | admin login   |

---
