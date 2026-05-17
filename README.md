# JG University — Premium Landing Page

A modern, futuristic university landing page built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🎨 Dark premium theme with purple/cyan gradient accents
- 💎 Glassmorphism cards and blur effects
- 🎞️ Smooth Framer Motion animations throughout
- 📱 Fully responsive (mobile-first design)
- 🌟 Interactive components (accordion, slider, counters)
- ⚡ Particle canvas background in Hero section
- 🔢 Animated stat counters on scroll
- 🖼️ Campus gallery with hover effects
- ❓ Expandable FAQ accordion
- 📧 Newsletter subscription footer

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| TypeScript | Type safety |

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ installed ([Download](https://nodejs.org/))
- **npm** or **yarn**

### Installation & Setup

```bash
# 1. Navigate into the project folder
cd jg-university

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

### Then open your browser:
```
http://localhost:3000
```

---

## 📦 Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
jg-university/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles, animations, utilities
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main page (assembles all sections)
│   └── components/
│       ├── Navbar.tsx         # Sticky transparent navbar
│       ├── Hero.tsx           # Hero with particle canvas
│       ├── About.tsx          # About section
│       ├── Programs.tsx       # Academic programs grid
│       ├── Stats.tsx          # Animated stat counters
│       ├── Testimonials.tsx   # Alumni testimonials slider
│       ├── Gallery.tsx        # Campus gallery grid
│       ├── FAQ.tsx            # Accordion FAQ
│       ├── CTA.tsx            # Call-to-action banner
│       └── Footer.tsx         # Responsive footer
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#020617` |
| Purple Accent | `#8B5CF6` |
| Cyan Accent | `#06B6D4` |
| Display Font | Syne |
| Body Font | DM Sans |
| Mono Font | JetBrains Mono |

## 📝 Notes

- Google Fonts (Syne, DM Sans, JetBrains Mono) are loaded from CDN in `globals.css`
- Make sure you have an active internet connection on first load for fonts
- The particle canvas in the Hero section is performant and uses `requestAnimationFrame`

---

Built with ❤️ for the JG University internship assignment.
