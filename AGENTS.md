# Portfolio Project Structure & Guidelines

## Architecture Overview

This is a **Next.js 16+ portfolio** with the App Router, using:

- **React 19** with modern patterns
- **Tailwind CSS v4** (new CSS-first architecture)
- **Motion** (motion/react) for animations
- **shadcn/ui** components
- **next-themes** for dark mode
- **TypeScript** throughout

### Key File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider, fonts, metadata
│   ├── page.tsx            # Home page (resume sections)
│   └── globals.css         # Global styles, theme tokens, Tailwind imports
├── components/
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # Dark mode toggle button
│   ├── resume/             # Main content sections
│   │   ├── navbar.tsx
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── education-section.tsx
│   │   ├── projects-section.tsx (commented out)
│   │   ├── footer.tsx
│   │   └── desktop-sidebars.tsx
│   ├── ui/                 # shadcn/ui primitives
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   └── icons/              # Custom icons
│       └── github-icon.tsx
└── lib/
    ├── utils.ts            # cn() helper (clsx + tailwind-merge)
    └── motion.ts           # Reusable animation variants
```

---

## Styling System

### Tailwind CSS v4

- **Import order in globals.css:**
  ```css
  @import 'tailwindcss';
  @import 'tw-animate-css';
  @import 'shadcn/tailwind.css';
  ```
- **Custom variant:** `@custom-variant dark (&:is(.dark *))`
- **Theme bridge:** `@theme inline { ... }` maps CSS variables to Tailwind tokens

### Design Tokens (CSS Variables)

All colors use **OKLCH** for perceptual uniformity and smooth dark mode transitions:

```css
/* Light mode */
--background: oklch(0.97 0.006 255);
--foreground: oklch(0.13 0.03 265);
--primary: oklch(0.5 0.27 270); /* Purple/violet */
--muted: oklch(0.93 0.015 265);
--border: oklch(0.87 0.013 265);

/* Dark mode (.dark class) */
--background: oklch(0.09 0.018 265);
--foreground: oklch(0.94 0.006 265);
--primary: oklch(0.66 0.23 270);
--border: oklch(1 0 0 / 10%);
```

**Radius tokens:**

- `--radius: 0.75rem` (base)
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-2xl`

---

## Component Patterns

### Client Components

All interactive/animated components use `'use client'`:

- Navbar (scroll detection, mobile menu)
- Hero/sections (Motion animations)
- Desktop sidebars (IntersectionObserver for active section tracking)
- Theme toggle

### Animation with Motion

**Import:** `import { motion, AnimatePresence, useScroll } from 'motion/react'`

**Reusable variants** in `lib/motion.ts`:

- `fadeInUp`, `fadeIn`, `slideInLeft`, `scaleIn`
- `staggerContainer` + `staggerItem` for sequential animations

**Example usage:**

```tsx
<motion.div variants={staggerContainer} initial='hidden' animate='visible'>
  <motion.h1 variants={staggerItem}>Title</motion.h1>
  <motion.p variants={staggerItem}>Text</motion.p>
</motion.div>
```

### Layout System

**Page structure (page.tsx):**

```tsx
<Navbar />
<DesktopLeftSidebar />
<DesktopRightSidebar />
<main>
  <HeroSection />
  <AboutSection />
  <ExperienceSection />
  {/* ... */}
</main>
<Footer />
```

**Responsive strategy:**

- Mobile-first approach
- Desktop sidebars hidden on `<xl` screens (`hidden xl:flex`)
- Navbar has mobile hamburger menu (`sm:hidden`)

### Theme Toggle

- Uses `next-themes` with `attribute='class'`
- Default theme: `light`, system detection disabled
- Toggle component uses lucide-react icons

---

## Code Conventions

### TypeScript

- **Strict mode enabled** (tsconfig.json)
- Prefer type imports: `import type { Metadata } from 'next'`
- Use `ComponentProps<typeof Component>` for prop spreading

### Styling

- **Use `cn()` utility** (from `lib/utils.ts`) for conditional classes:
  ```tsx
  className={cn('base-class', conditional && 'active-class', className)}
  ```
- Avoid inline styles except for dynamic values
- Prefer Tailwind utilities over custom CSS

### Animations

- **Initial state → Animate in:** All hero/section animations start hidden
- Use `transition={{ duration, ease }}` for custom timing
- Stagger children with `delayChildren` + `staggerChildren`
- **AnimatePresence** for enter/exit animations (mobile menu)

### Accessibility

- Semantic HTML (`<nav>`, `<main>`, `<section>`)
- `aria-label` on icon-only buttons
- Scroll behavior: `smooth` in globals.css
- `scroll-padding-top: 80px` for fixed navbar offset

---

## Design Principles

1. **Minimalist & Modern:** Clean layouts, ample white space, subtle animations
2. **Purple accent:** Primary color is vibrant purple (`oklch(0.5 0.27 270)`)
3. **Soft backgrounds:** Fixed orbs with blur (`bg-primary/10 blur-[120px]`)
4. **Smooth transitions:** All hover/focus states use `transition-colors` or `transition-all`
5. **Scroll-driven interactions:**
   - Navbar background/shadow appears on scroll
   - IntersectionObserver highlights active section in desktop sidebar

---

## Common Tasks

### Adding a New Section

1. Create `src/components/resume/new-section.tsx`
2. Export a client component with `id` matching nav link
3. Wrap content in `<motion.section>` with stagger animations
4. Import and render in `app/page.tsx`
5. Add nav link to `navbar.tsx` and `desktop-sidebars.tsx`

### Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Components go to `src/components/ui/` automatically.

### Modifying Theme Colors

Edit CSS variables in `globals.css` under `:root` (light) or `.dark` (dark mode). Use OKLCH format for best results.

### Custom Icons

- SVG components in `src/components/icons/`
- Accept `className` prop for styling
- Use `currentColor` for fills/strokes to inherit text color

---

## Performance Notes

- All animations use `transform` and `opacity` (GPU-accelerated)
- `will-change-transform` on fixed sidebars
- `overflow-x: clip` prevents horizontal scroll
- Fonts preloaded with `display: 'swap'`
- Background orbs use `pointer-events-none` to avoid blocking interactions

---

## Development Commands

```bash
npm run dev       # Start dev server on port 8080
npm run build     # Production build
npm run start     # Serve production build on port 3000
npm run lint      # Run ESLint
```

---

## Important Reminders

- **Next.js 16+:** Always check `node_modules/next/dist/docs/` for API changes
- **Tailwind v4:** Uses new CSS-based config, NOT `tailwind.config.js`
- **Motion library:** Not Framer Motion (different import paths)
- **Client components:** Mark with `'use client'` if using hooks/events
- **Dark mode:** Controlled via `class` attribute, not media queries
