# Prema Labs

> **Intelligence with a Heartbeat.**
> Building Context-Aware AI that understands emotion, strategy, and human intent.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## 🌟 Project Overview

This is the production-ready landing page for **Prema Labs**, a futuristic AI research company. The design follows a **"Hyper-Clean Ethereal"** aesthetic, combining clinical precision with human warmth through high-fidelity 3D glassmorphism and smooth, staggered animations.

### Key Features
- **3D Hero Scene**: A "Digital Heart" visualization using refractive glass materials (`MeshTransmissionMaterial`) and organic rotation.
- **Glassmorphism UI**: Custom frosted glass cards and overlays using Tailwind v4 compatible CSS filters.
- **Product Showcase**: Interactive 3D Bento Grid visualizations for "Prema.ai" and "App Builder".
- **Research Lab Identity**: Comprehensive corporate pages including a "Responsible AI" manifesto and detailed product breakdowns.
- **Corporate Pages**: Dedicated pages for Research, Careers, Products, Ethics, and Privacy.
- **Responsive Design**: Fully mobile-optimized layout with adaptive 3D scene positioning.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D Engine**: 
  - [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
  - [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: 
  - **Inter** (Sans-serif, Primary)
  - **Playfair Display** (Serif, Editorial/Research)

## 📂 File Structure

```
e:/Prema labs website/
├── app/
│   ├── components/
│   │   ├── Footer.tsx          # Minimalist global footer
│   │   ├── Header.tsx          # Global navigation header
│   │   ├── HeroScene.tsx       # 3D "Digital Heart" Canvas component
│   │   └── ProductScene.tsx    # 3D visualization for product cards
│   ├── about/
│   │   └── page.tsx            # Expanded Company Overview & Philosophy
│   ├── careers/
│   │   └── page.tsx            # Job Listings & Cultural Values
│   ├── contact/
│   │   └── page.tsx            # Contact & Inquiries page
│   ├── ethics/
│   │   └── page.tsx            # [NEW] Responsible AI Manifesto
│   ├── privacy/
│   │   └── page.tsx            # Legal/Privacy policy page
│   ├── products/
│   │   └── page.tsx            # [NEW] Detailed Platform Breakdown
│   ├── research/
│   │   ├── [slug]/
│   │   │   └── page.tsx        # Dynamic Article view (Serif typography)
│   │   └── page.tsx            # Research papers index
│   ├── terms/
│   │   └── page.tsx            # Terms of Service page
│   ├── globals.css             # Tailwind v4 configuration & custom utilities
│   ├── layout.tsx              # Root layout with Font configuration
│   └── page.tsx                # Main Landing Page (Hero + Features)
├── lib/
│   └── utils.ts                # cn() class merge utility
├── public/                     # Static assets
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

3.  **Build for Production**
    ```bash
    npm run build
    npm start
    ```

## 🔁 Monorepo Integration Notes (April 2026)

- This site is co-located with the main Prema app workspace and can be bundled into the web build output using:
  - `web/package.json` script: `npm run build:all`
- That workflow builds this Next.js app and copies static output into the main web distribution folder under `dist/labs`.
- Keep shared brand/product messaging consistent with the root project docs in the main repository README.

## 🎨 Design System

### Colors
- **Primary**: Zinc-900 (Black)
- **Accents**: Warm Orange (#ff8e3c), Gold
- **Background**: Pure White (#ffffff) with Slate-50 highlights

### Typography
- **Headers**: Inter (Tight tracking, bold)
- **Body**: Inter (Clean, legible)
- **Research**: Playfair Display (Elegant, academic)

### Effects
- **Glass**: `backdrop-blur-xl bg-white/40 border-white/50`
- **Transitions**: `ease-[0.22, 1, 0.36, 1]` (Custom Bezier)

---
© 2026 Prema Labs Inc.
Coimbatore • San Francisco
