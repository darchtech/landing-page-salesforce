# Salesforce Career Accelerator Masterclass — Landing Page

A high-converting, production-grade landing page built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
salesforce-landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── archnanigade.jpeg      # Orange iTech founder
│   │   │   └── dayneshwaragaw.jpeg    # Mentor photo
│   │   └── videos/
│   │       └── video.MOV              # Hero intro video
│   ├── components/
│   │   ├── layout/                    # Persistent UI chrome
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── StickyBar.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── index.js
│   │   ├── sections/                  # Page sections (1 per file)
│   │   │   ├── HeroSection.jsx
│   │   │   ├── CountdownSection.jsx
│   │   │   ├── ValueSection.jsx
│   │   │   ├── CertificateSection.jsx
│   │   │   ├── MentorSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── CoursesSection.jsx
│   │   │   ├── AudienceSection.jsx
│   │   │   ├── FinalCTASection.jsx
│   │   │   └── index.js
│   │   └── ui/                        # Reusable primitives
│   │       ├── Badge.jsx
│   │       ├── CTAButton.jsx
│   │       ├── FadeIn.jsx
│   │       ├── GlassCard.jsx
│   │       ├── Icons.jsx
│   │       ├── Section.jsx
│   │       ├── SectionTitle.jsx
│   │       └── index.js
│   ├── constants/
│   │   └── index.js                   # All data, config, copy
│   ├── hooks/
│   │   ├── useCountdown.js
│   │   ├── useDarkMode.js
│   │   ├── useInView.js
│   │   ├── useScrollState.js
│   │   └── index.js
│   ├── styles/                        # (reserved for future CSS modules)
│   ├── App.jsx                        # Root component
│   ├── App.css
│   ├── index.css                      # Tailwind + global styles
│   └── main.jsx                       # React entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── .gitignore
```

## 🏗️ Architecture Decisions

| Principle | Implementation |
|-----------|---------------|
| **Separation of concerns** | UI primitives → sections → layout → App |
| **Single source of truth** | All copy, data, links in `constants/` |
| **Custom hooks** | Countdown, dark mode, intersection observer, scroll |
| **Zero external UI deps** | Hand-crafted SVG icons, no icon library bundle |
| **Dark mode** | `class` strategy via Tailwind, persisted to localStorage |
| **Animations** | CSS transitions + IntersectionObserver (no JS animation lib) |
| **Performance** | Passive scroll listeners, observer-based animations, lazy triggers |

## 🎨 Design System

- **Typography**: Plus Jakarta Sans (variable weight)
- **Colors**: Salesforce-inspired blue/indigo palette with dark variants
- **Effects**: Glassmorphism, gradient blobs, shimmer CTAs
- **Responsive**: Mobile-first breakpoints (sm → md → lg)

## 📦 Build

```bash
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## 📄 License

Private — Cloud Gyani & Orange iTech.
