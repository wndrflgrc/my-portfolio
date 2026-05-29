# Modern Portfolio Website

A high-performance, type-safe portfolio website built with cutting-edge web technologies. This project demonstrates modern React patterns, performance optimization, and thoughtful UI/UX design.

---

## Tech Stack

| Layer            | Technology                                    | Why This Choice                                                         |
| ---------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org) (App Router) | Server Components by default, automatic code splitting, optimal SEO     |
| Language         | TypeScript                                    | Type safety reduces bugs, better IDE support, self-documenting code     |
| Styling          | Tailwind CSS v4                               | CSS-first config, OKLCH color space, minimal runtime overhead           |
| UI Primitives    | shadcn/ui + Base UI                           | Accessible, customizable components without prop-drilling               |
| Animations       | Motion                                        | Performant declarative animations, better bundle size than alternatives |
| Icons            | Lucide React                                  | Tree-shakeable, consistent design system, active maintenance            |
| Theming          | next-themes                                   | Zero-flash dark mode, localStorage persistence, SSR-compatible          |
| Containerization | Docker                                        | Multi-stage builds for 10x smaller images, reproducible deployments     |
| Deployment       | Vercel                                        | Zero-config, edge network, automatic HTTPS, preview deployments         |

---

## Architecture Decisions

### Why Next.js App Router?

The App Router (vs. Pages Router) provides:

- **Server Components by default** — send less JavaScript to the client
- **Streaming** — progressive page rendering for faster perceived performance
- **Layouts** — shared UI without re-rendering (navbar, sidebars persist across navigation)

### Why Tailwind CSS v4?

Version 4 introduces a **CSS-first configuration** approach:

- No `tailwind.config.js` — configuration lives in CSS using `@theme` directive
- Native CSS cascade support for better specificity control
- **OKLCH color space** for perceptually uniform colors (smoother dark mode transitions)

### Why Motion over Framer Motion?

Motion is a modern fork optimized for:

- **Smaller bundle size** (~30% reduction)
- Better tree-shaking
- Updated APIs aligned with modern React patterns
- Import from `motion/react` instead of `framer-motion`

### Why Component Separation?

Components are organized by purpose:

- **`resume/`** — domain-specific portfolio sections (Hero, Experience, Skills)
- **`ui/`** — generic, reusable primitives (Button, Card, Badge)
- **`icons/`** — custom SVG components for better control than icon libraries

This separation ensures:

- Easy to locate components
- Prevents cross-contamination of domain logic
- Reusable primitives can be extracted to a shared library

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with fonts, metadata, theme provider
│   ├── page.tsx          # Home page composition (imports all sections)
│   └── globals.css       # Design tokens, Tailwind imports, CSS variables
├── components/
│   ├── resume/           # Portfolio-specific sections
│   │   ├── navbar.tsx             # Fixed header with scroll detection
│   │   ├── hero-section.tsx       # Above-the-fold intro
│   │   ├── about-section.tsx      # Professional summary
│   │   ├── experience-section.tsx # Work history timeline
│   │   ├── skills-section.tsx     # Technical proficiencies
│   │   ├── education-section.tsx  # Academic background
│   │   ├── desktop-sidebars.tsx   # Sticky navigation (xl+ screens)
│   │   └── footer.tsx             # Social links, copyright
│   ├── ui/               # Generic primitives (shadcn/ui)
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── icons/            # Custom SVG components
│   │   └── github-icon.tsx
│   ├── theme-provider.tsx  # next-themes wrapper (client component)
│   └── theme-toggle.tsx    # Dark mode switch
└── lib/
    ├── utils.ts          # cn() helper (clsx + tailwind-merge)
    └── motion.ts         # Reusable animation variants
```

### Why This Structure?

**Colocation by feature** — all resume sections live together in `resume/`, making it easy to:

- Add/remove sections without hunting through folders
- Understand the page composition at a glance
- Extract to a separate package if needed

**Separation of concerns** — UI primitives (`ui/`) are decoupled from domain logic, allowing:

- Independent testing
- Reuse across projects
- Updates without breaking features

---

## Key Technical Features

### 1. Performance Optimization

**Server Components by default** — Only interactive parts use `'use client'`:

- Navbar (scroll detection)
- Sections (animation triggers)
- Theme toggle
- Desktop sidebars (IntersectionObserver)

**GPU-accelerated animations** — Motion animations only use `transform` and `opacity`:

```tsx
// ✅ GPU-accelerated
<motion.div animate={{ opacity: 1, y: 0 }} />

// ❌ Triggers repaints
<motion.div animate={{ height: 100 }} />
```

**Font optimization** — Next.js automatically:

- Self-hosts Google Fonts (no external requests)
- Generates font-face declarations
- Uses `display: 'swap'` to prevent layout shift

### 2. Accessibility

**Semantic HTML** — Proper use of landmarks:

```tsx
<nav>      // Navigation
<main>     // Primary content
<section>  // Thematic groupings
<footer>   // Site footer
```

**Scroll behavior** — Smooth scrolling with offset for fixed navbar:

```css
scroll-padding-top: 80px; /* Prevents content from hiding under navbar */
```

**ARIA labels** — Icon-only buttons include screen-reader text:

```tsx
<button aria-label='Toggle navigation'>
  <Menu />
</button>
```

### 3. Theming System

**CSS Variables + OKLCH** — Colors defined in perceptually uniform color space:

```css
/* Light mode */
--primary: oklch(0.5 0.27 270); /* Purple */

/* Dark mode */
--primary: oklch(
  0.66 0.23 270
); /* Lighter purple (auto-adjusts perceived brightness) */
```

**Why OKLCH?**

- Perceptually uniform (equal numeric changes = equal visual changes)
- Better dark mode transitions than RGB/HSL
- Wider color gamut on modern displays

**Theme bridge** — CSS variables mapped to Tailwind tokens:

```css
@theme inline {
  --color-primary: var(--primary);
}
```

Now `bg-primary` in components automatically uses the CSS variable.

### 4. Responsive Design

**Mobile-first approach** — Base styles target mobile, progressively enhance:

```tsx
className = 'px-4 md:px-6 lg:px-8'; // Padding increases with screen size
```

**Conditional rendering** — Different layouts per breakpoint:

- **Mobile (`<sm`)**: Hamburger menu, stacked layout
- **Desktop (`xl+`)**: Sticky sidebars, horizontal navigation

**Viewport units** — `min-h-dvh` instead of `min-h-screen` for mobile browsers with dynamic toolbars

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10

### Local Development

```bash
# Install dependencies
npm install

# Start development server (port 8080)
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

**Why port 8080?** Common proxy-safe port; avoids conflicts with other local services.

### Production Build

```bash
# Generate optimized build
npm run build

# Serve production build (port 3000)
npm run start
```

The build process:

1. Pre-renders static pages (SSG)
2. Minifies JavaScript/CSS
3. Optimizes images
4. Generates font-face declarations
5. Creates build manifest for caching

---

## Docker Deployment

The included Dockerfile uses a **multi-stage build** for optimal image size:

```bash
# Build production image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Why Multi-Stage Builds?

The Dockerfile has separate stages:

1. **Dependencies** — Install all packages
2. **Build** — Compile Next.js app
3. **Production** — Copy only runtime files

This results in:

- **~100MB final image** (vs. ~1GB without multi-stage)
- No dev dependencies in production
- Faster deployments and cold starts

---

## Deployment to Vercel

This project is optimized for Vercel's edge network:

1. Push repository to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Auto-detects Next.js (zero config needed)
4. Click **Deploy**

### Vercel Benefits

- **Edge Network** — CDN distribution worldwide
- **Preview Deployments** — Every PR gets a unique URL
- **Automatic HTTPS** — SSL certificates managed automatically
- **Analytics** — Built-in Web Vitals monitoring

---

## Code Quality

### TypeScript Strict Mode

Enabled in `tsconfig.json` for maximum type safety:

- No implicit `any`
- Strict null checks
- No unused variables/imports

### ESLint Configuration

Next.js recommended rules + custom overrides for:

- Import ordering
- React Hooks rules
- Accessibility checks

### Code Formatting

Components follow consistent patterns:

- Named exports (easier to search/refactor)
- Type imports separated
- Props typed explicitly

---

## Performance Metrics

Target Web Vitals (measured via Vercel Analytics):

- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

Achieved through:

- Font preloading
- Image optimization
- Minimal client JavaScript
- GPU-accelerated animations

---

## Browser Support

- **Chrome/Edge** ≥ 90
- **Firefox** ≥ 88
- **Safari** ≥ 14

Modern features used:

- CSS Grid/Flexbox
- CSS Variables
- Intersection Observer API
- OKLCH color space (gracefully degrades in older browsers)

---

## License

This project is open source and available under the [MIT License](LICENSE).
