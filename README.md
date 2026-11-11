# Freelance Management Platform

A full-stack project and freelance management application built with **Next.js**, **Node.js/Express**, and **MongoDB**. Designed to help freelancers manage clients, track project progress, organize tasks, and monitor payments in one centralized dashboard.

---

## 📁 Project Structure

```
├── frontend/             # Next.js App Router client
│   ├── public/           # Static assets, icons, images
│   ├── src/
│   │   ├── app/          # App router pages & layouts
│   │   │   ├── (auth)/   # Login & register routes
│   │   │   └── (dashboard)/ # Clients, projects, tasks, payments, reports
│   │   ├── components/   # Reusable UI & feature components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Helper utilities & constants
│   │   ├── services/     # API service layer
│   │   └── types/        # TypeScript interfaces & types
│   └── package.json
│
├── backend/              # Node.js & Express REST API
│   ├── src/
│   │   ├── config/       # Database & environment configurations
│   │   ├── controllers/  # Request handlers (auth, clients, projects)
│   │   ├── middlewares/  # Authentication & error handling middlewares
│   │   ├── models/       # Mongoose schemas & data models
│   │   ├── routes/       # API endpoints definitions
│   │   ├── services/     # Business logic layer
│   │   └── utils/        # Utility helpers
│   └── (server setup)
│
└── README.md
```

---

## 🚀 Tech Stack

### Frontend
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI / Radix primitives
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB & Mongoose
- **Authentication:** JSON Web Tokens (JWT) & bcryptjs password hashing

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/priyabratasahoo780/nextjs_project.git
cd nextjs_project
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Runs the development server on `http://localhost:3000`.

### 3. Backend Setup
```bash
cd ../backend
# Install dependencies & start server
npm install
npm run dev
```

---

## 🔑 Features

- **Authentication:** Secure user registration, login, and JWT-protected endpoints.
- **Client Management:** Manage client details, communications, and history.
- **Projects & Deliverables:** Track active projects, deliverables, milestones, and deadlines.
- **Task Board:** Organize tasks by status, priorities, and assignments.
- **Financials & Payments:** Monitor invoices, pending dues, and revenue analytics.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
