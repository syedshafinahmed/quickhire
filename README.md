<div align="center">
  <img src="/src/assets/logo.png" alt="QuickHire Logo" width="20"/>
  
  **Discover more than 5000 jobs**
  
  [![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![Firebase](https://img.shields.io/badge/Firebase-12.6.0-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
</div>

---

## 🌐 Live Demo

https://bloodlink-ssa.pages.dev/

---


# QuickHire 🚀

A full-stack job board web application built with React, Firebase, and MongoDB. QuickHire connects employers with applicants through a clean, role-based dashboard experience — complete with a polished public-facing landing page.

---

## Features

### Landing Page
- **Hero Banner** — headline search bar with job title/keyword input and location selector
- **Grow Section** — auto-scrolling marquee of partner company logos (Vodafone, Intel, Tesla, AMD)
- **Explore by Category** — 8 job categories (Design, Sales, Marketing, Finance, Technology, Engineering, Business, HR) with live job counts and hover animations
- **Poster CTA** — "Start posting jobs today" promotional banner with a clipped polygon design
- **Featured Jobs** — 8 static featured job cards with company logos, tags, and type badges
- **Latest Jobs Open** — grid of the most recent job listings with company, location, and category tags
- **Footer** — dark footer with About/Resources links, email newsletter subscription, and social media icons

### For Applicants
- Browse and search job listings by title or category (Full-Time, Part-Time, Contract, Remote)
- View detailed job descriptions
- Apply to jobs with a resume (Google Drive link) and cover letter
- Track all submitted applications in a personal dashboard
- Prevent duplicate applications — the "Apply Now" button becomes "Applied" after submission

### For Admins
- Post new job listings with company details, location, and category
- View, edit, and delete posted jobs
- View all applicants across every job posting
- Dashboard overview with total users, jobs, and applications at a glance

### General
- Firebase Authentication — email/password and Google Sign-In
- Role-based routing (admin vs. applicant views)
- Protected routes with loading state
- Responsive sticky navbar with mobile hamburger menu
- Responsive sidebar dashboard layout with mobile drawer
- Scroll-to-top button
- SweetAlert2 notifications for all key actions

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router v7 |
| Styling | Tailwind CSS v4, DaisyUI |
| Auth | Firebase Authentication |
| Backend | Node.js / Express (runs on `localhost:3000`) |
| Database | MongoDB |
| Icons | Lucide React, React Icons |
| Alerts | SweetAlert2 |
| Marquee | react-fast-marquee |
| Loader | react-loader-spinner |
| Fonts | Clash Display, Epilogue, Red Hat Display |

---

## Project Structure

```
src/
├── assets/
├── components/
│   └── ScrollToTop.jsx
├── context/
│   ├── AuthContext.js
│   └── AuthProvider.jsx
├── firebase/
│   └── firebase.init.js
├── layouts/
│   ├── RootLayout.jsx
│   └── DashboardLayout.jsx
├── logo/
│   └── Logo.jsx
├── pages/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── dashboard/
│   │   ├── DashboardHome.jsx
│   │   ├── PostJob.jsx
│   │   ├── PostedJobs.jsx
│   │   ├── EditJob.jsx
│   │   ├── JobDetails.jsx
│   │   ├── AppliedJobs.jsx
│   │   └── Applicants.jsx
│   ├── findjobs/
│   │   └── FindJobs.jsx
│   ├── home/
│   │   ├── Home.jsx
│   │   ├── Banner.jsx
│   │   ├── Grow.jsx
│   │   ├── Explore.jsx
│   │   ├── Poster.jsx
│   │   ├── Featured.jsx
│   │   └── Latest.jsx
│   └── shared/
│       ├── Navbar.jsx
│       └── Footer.jsx
└── router/
    ├── router.jsx
    └── PrivateRoute.jsx
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- A Firebase project with Authentication enabled
- A running backend server at `http://localhost:3000`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quickhire.git
   cd quickhire
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root with your Firebase config:
   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

> Make sure your backend server is running on `http://localhost:3000` before starting the frontend.

---

## Routes

| Path | Component | Access |
|---|---|---|
| `/` | Home | Public |
| `/find-jobs` | FindJobs | Public |
| `/browse-companies` | Companies | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/jobs/:id` | JobDetails | Public |
| `/dashboard` | DashboardLayout | Private |
| `/dashboard/post-job` | PostJob | Admin |
| `/dashboard/posted-jobs` | PostedJobs | Admin |
| `/dashboard/jobs/:id/edit` | EditJob | Admin |
| `/dashboard/applicants` | Applicants | Admin |
| `/dashboard/applied-jobs` | AppliedJobs | Applicant |
| `/dashboard/dashboard-home` | DashboardHome | Private |

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_apiKey` | Firebase API Key |
| `VITE_authDomain` | Firebase Auth Domain |
| `VITE_projectId` | Firebase Project ID |
| `VITE_storageBucket` | Firebase Storage Bucket |
| `VITE_messagingSenderId` | Firebase Messaging Sender ID |
| `VITE_appId` | Firebase App ID |

---

## Backend API Endpoints (Expected)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users?email=` | Get user by email |
| GET | `/users/all` | Get all users |
| POST | `/users` | Create new user |
| GET | `/jobs` | Get all jobs (supports `?search=` and `?category=`) |
| GET | `/jobs/:id` | Get single job |
| POST | `/jobs` | Create a job |
| PUT | `/jobs/:id` | Update a job |
| DELETE | `/jobs/:id` | Delete a job |
| GET | `/applications?email=` | Get applications by user email |
| GET | `/applications/all` | Get all applications |
| POST | `/applications` | Submit a job application |

---

<!-- ## License

This project is open source and available under the [MIT License](LICENSE). -->