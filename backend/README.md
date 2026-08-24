# VDM Backend API

Modular, production-ready RESTful API backend for VDM built with Node.js, Express, and Mongoose (MongoDB).

---

## 📁 Architecture & Folder Structure

```
backend/
├── .env                       # Local Environment Variables
├── .env.example               # Environment Variables Template
├── package.json               # Dependencies & Scripts
├── README.md                  # Backend Documentation
└── src/
    ├── config/
    │   └── db.js              # Database Connection (Mongoose)
    ├── controllers/
    │   ├── auditController.js # Audit Request CRUD Logic
    │   ├── authController.js  # JWT Register, Login, Me, Logout
    │   ├── contactController.js # Contact Message Handlers
    │   └── serviceController.js # Services Management
    ├── middlewares/
    │   ├── authMiddleware.js  # JWT Protection & Role Authorization
    │   └── errorMiddleware.js # Centralized Error & 404 Handlers
    ├── models/
    │   ├── AuditRequest.js    # Mongoose Schema for Audits
    │   ├── Contact.js         # Mongoose Schema for Messages
    │   ├── Service.js         # Mongoose Schema for Services
    │   └── User.js            # Mongoose Schema for Auth/User
    ├── routes/
    │   ├── index.js           # Central Router (/api/v1)
    │   ├── auditRoutes.js     # /api/v1/audits
    │   ├── authRoutes.js      # /api/v1/auth
    │   ├── contactRoutes.js   # /api/v1/contacts
    │   └── serviceRoutes.js   # /api/v1/services
    ├── utils/
    │   ├── apiError.js        # ApiError Custom Class
    │   ├── apiResponse.js     # Standardized JSON Response Class
    │   └── asyncHandler.js    # Controller Wrapper for Async Errors
    ├── app.js                 # Express Application Middleware Setup
    └── server.js              # Entry Point: Server Listener & DB Init
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create `.env` file in `backend/`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/vdm_db
JWT_SECRET=vdm_secret_jwt_key_987654321_secure
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

### 3. Run Development Server
```bash
npm run dev
```

---

## 🔌 API Endpoints Summary

### Health Check
- `GET /api/v1/health` - Check API Status

### Audit Requests (`/api/v1/audits`)
- `POST /api/v1/audits` - Submit new Audit Request (Public)
- `GET /api/v1/audits` - Get all Audit Requests (Admin)
- `GET /api/v1/audits/:id` - Get single request (Admin)
- `PATCH /api/v1/audits/:id/status` - Update request status (Admin)
- `DELETE /api/v1/audits/:id` - Delete request (Admin)

### Contact Messages (`/api/v1/contacts`)
- `POST /api/v1/contacts` - Submit Contact Form (Public)
- `GET /api/v1/contacts` - Get all messages (Admin)
- `PATCH /api/v1/contacts/:id/read` - Mark as read (Admin)
- `DELETE /api/v1/contacts/:id` - Delete message (Admin)

### Auth & User (`/api/v1/auth`)
- `POST /api/v1/auth/register` - Register new user (Public)
- `POST /api/v1/auth/login` - Login user (Public)
- `GET /api/v1/auth/me` - Get current user profile (Private)
- `POST /api/v1/auth/logout` - Logout user (Private)

### Services (`/api/v1/services`)
- `GET /api/v1/services` - Get active services (Public)
- `GET /api/v1/services/:slug` - Get service details (Public)
- `POST /api/v1/services` - Create service (Admin)
- `PUT /api/v1/services/:id` - Update service (Admin)
- `DELETE /api/v1/services/:id` - Delete service (Admin)
