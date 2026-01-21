# 💸 Full Stack AI Finance Platform

A **Full Stack AI-powered Finance Platform** built with **Next.js (App Router)**, **Clerk**, **Supabase**, **Prisma**, **Tailwind CSS**, **Inngest**, **ArcJet**, and **shadcn/ui**.

This platform allows users to securely manage income and expenses, visualize financial data, and receive AI-driven insights with automated background processing.

---

## 🚀 Tech Stack

### Frontend
- **Next.js (App Router)**
- **Tailwind CSS**
- **shadcn/ui**
- **TypeScript**

### Backend & Infrastructure
- **Next.js Server Actions**
- **Prisma ORM**
- **Supabase (PostgreSQL)**
- **Inngest** – Background jobs & workflows
- **ArcJet** – Security, rate limiting & bot protection

### Authentication
- **Clerk** – Secure authentication & user management

### Emails & Notifications
- Server-side email templates
- Automated transactional emails

---

## ✨ Features

### 🔐 Authentication & Security
- Authentication powered by **Clerk**
- Secure middleware-protected routes
- Rate limiting and abuse prevention using **ArcJet**

### 💰 Finance Management
- Add, edit, and delete income & expenses
- Category-based transaction tracking
- Real-time balance calculation
- Monthly and yearly summaries

### 📊 Analytics Dashboard
- Clean and responsive UI
- Category-wise expense breakdown
- Income vs expense comparison
- Time-based financial trends

### 🧠 AI-Powered Capabilities
- Smart transaction categorization
- Spending pattern analysis
- AI-generated financial insights
- Predictive expense forecasting (extensible)

### ⚙️ Background Jobs & Automation
- Event-driven workflows using **Inngest**
- Automated monthly summaries
- Scheduled cleanup & processing jobs
- Async financial analysis tasks

### ✉️ Email System
- Transactional emails
- Alerts for unusual spending
- Monthly financial reports

### 🎨 UI & UX
- Modern component system with **shadcn/ui**
- Responsive & accessible design
- Dark mode support
- Optimized performance

---

## 🗂️ Project Structure

```bash
.
├── .clerk/              # Clerk authentication config
├── .next/               # Next.js build output
├── actions/             # Server actions (data mutations, business logic)
├── app/                 # Next.js App Router pages & layouts
├── components/          # Reusable UI components
├── data/                # Static & mock data
├── emails/              # Email templates
├── hooks/               # Custom React hooks
├── lib/                 # Utilities, helpers, configs
├── prisma/              # Prisma schema & migrations
├── public/              # Static assets
├── middleware.js        # Auth & security middleware
├── components.json     # shadcn/ui config
├── eslint.config.mjs    # ESLint configuration
├── jsconfig.json        # Path aliases
├── next.config.mjs      # Next.js configuration
├── postcss.config.mjs   # PostCSS config
├── package.json         # Dependencies & scripts
├── .env                 # Environment variables
└── README.md
⚙️ Environment Variables
Create a .env file in the root directory:

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Inngest
INNGEST_EVENT_KEY=

# ArcJet
ARCJET_KEY=

🧑‍💻 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/AmirDihan/Ai-Finance-Tracker--FinTrack-.git
cd Ai-Finance-Tracker--FinTrack-

2️⃣ Install Dependencies
npm install

3️⃣ Setup Database
npx prisma generate
npx prisma migrate dev

4️⃣ Run the Development Server
npm run dev

📦 Future Improvements

Budget planning & alerts

Bank API integrations

Export data as PDF / CSV

Multi-currency support

Mobile-first PWA support

## 👥 Contributors

Thanks to the following contributors for their valuable contributions to this project:

- **Amir Hossan** 
- **SajjadHossaain** 
- **c223081-del** 
- **ShSami108** 
- **mehdi143m** 
- **HalimurRashid**