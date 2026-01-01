# <div align="center">Nappy Garde</div>

<div align="center">
<strong>Premium Baby Care Essentials Delivered to Your Doorstep</strong>
</div>

<br />

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-Database-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)

<br />

<a href="https://nappygarde.lk">
<img src="https://img.shields.io/badge/View%20Live%20Store-Click%20Here-0071e3?style=for-the-badge&logo=safari&logoColor=white" height="50" />
</a>

<br />
<br />

**[Visit Live Site: https://nappygarde.lk](https://nappygarde.lk)**

</div>

<br />

> **"Premium Comfort for Your Little One."**
>
> Nappy Garde isn't just an e-commerce store; it's a promise of quality.  
> Built with modern web technologies and Google Sheets integration, it delivers a seamless shopping experience for parents in Sri Lanka.

---

## 🌟 Vision

Nappy Garde's mission is to be:

- **The most trusted baby care platform** — Offering premium diapers, wipes, and skincare
- **A seamless digital experience** — Lightning-fast navigation and checkout
- **A modern, beautiful web application** — Designed with care for parents who care

---

## ✨ Why Nappy Garde?

Parents deserve a stress-free shopping experience.  
Nappy Garde provides **ultra-soft comfort, superior absorption, and island-wide delivery** with a platform that is as reliable as the products we sell.

---

## 🎨 Apple-Inspired Design

- **Minimalist Aesthetics**  
  Clean, clutter-free interface focusing on the products.

- **Immersive Interactions**  
  Subtle animations (like our celebratory fireworks) and fluid transitions.

- **Responsive Layouts**  
  Optimized for every device, ensuring a perfect experience on mobile and desktop.

- **Modern Typography**  
  Legible, beautiful fonts that enhance readability and trust.

---

## 🤖 Smart Integrations

- **Google Sheets Database**  
  Innovative use of Google Sheets as a CMS and database for real-time inventory and order management.

- **WhatsApp Notifications**  
  Automated order updates sent directly to users via WhatsApp for instant communication.

- **Enterprise SEO**  
  Built with Next.js Metadata API for maximum visibility and search ranking.

- **Dynamic Cart System**  
  Real-time state management for a smooth "add to cart" and checkout flow.

---

## 🔐 Secure & Reliable

- **Secure Checkout**  
  Streamlined and secure checkout process for customer peace of mind.

- **Data Privacy**  
  Respecting user data with minimal collection and secure handling.

- **Performance First**  
  Built on Next.js 16 to ensure instant loading times and interactions.

---

## 🎓 Complete Shopping Experience

- **Curated Catalog**  
  Browse our selection of premium baby products with ease.

- **Instant Search**  
  Find exactly what you need with optimized search functionality.

- **Quick Checkout**  
  Optimized flow to get orders placed in seconds.

- **Mobile First**  
  Designed primarily for the mobile experience that busy parents rely on.

---

## 📁 Project Structure

```
Nappy-Garde-GSheet/
├── web/
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/              # Next.js API Routes (Orders, WhatsApp)
│   │   │   ├── checkout/         # Checkout Page
│   │   │   ├── product/          # Product Details
│   │   │   └── layout.tsx        # Main Application Layout
│   │   ├── components/           # Reusable UI Components
│   │   │   ├── Navbar.tsx        # Navigation
│   │   │   ├── Footer.tsx        # Footer
│   │   │   └── Fireworks.tsx     # Celebration Animations
│   │   └── context/
│   │       └── CartContext.tsx   # State Management
│   └── public/                   # Static Assets
└── products_import.csv           # Product Import Data
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18+)
- **npm** or **yarn** or **pnpm**
- **Google Cloud Service Account** (for Sheets API)

### 1. Clone the Repository

```bash
git clone https://github.com/nappygarde/nappy-garde.git
cd Nappy-Garde-GSheet
```

### 2. Install Dependencies

```bash
cd web
npm install
```

### 3. Environment Configuration

Create `web/.env.local`:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
SPREADSHEET_ID=your-google-sheet-id
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run the Application

```bash
npm run dev
```

Visit **http://localhost:3000** 🎉

---

## 🎯 Key Features

### For Parents

✅ **Easy Browsing** — Clean categories and product views  
✅ **Fast Checkout** — Minimized steps to purchase  
✅ **Mobile Optimized** — Perfect for shopping on the go  
✅ **Instant Support** — WhatsApp integration for help  

### For Admins

✅ **Sheet-Based Management** — Manage products and orders directly in Google Sheets  
✅ **Real-Time Updates** — Changes in Sheets reflect instantly on the site  
✅ **Zero Infrastructure** — No complex database servers to maintain  

---

## 🔧 Tech Stack

### Frontend & Backend (Next.js)
- **Next.js 16** — React Framework for Production
- **React 19** — Library for web and native user interfaces
- **Tailwind CSS** — Utility-first CSS framework
- **TypeScript** — Typed JavaScript for better tooling
- **Sonner** — An opinionated toast component for React

### Data & Services
- **Google Sheets API** — Primary database for products and orders
- **Google Auth Library** — Secure server-to-server authentication

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add Environment Variables (Service Account, Sheet ID)
4. Deploy!

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

MIT License — 100% Free and Open Source

---

## ☕️ Support the Project

<div align="center">
<a href="https://nappygarde.lk">
<img src="https://nappygarde.lk/new_icon.png" height="60" width="60" alt="Nappy Garde Logo">
</a>
</div>

<p align="center">
Made by <strong>Zaki Sheriff</strong>
</p>

<p align="center">
<em>Premium care for your little ones.</em>
</p>
