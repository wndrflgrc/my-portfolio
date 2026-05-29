# GitHub Copilot Instructions

## Project Context

You are working on a **personal portfolio website** built with:

- **Next.js 16.2.4** (App Router)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS v4.2.2** (CSS-first config)
- **Motion 12.38.0** (animation library)
- **shadcn/ui** component system

---

## Critical Reminders

### Next.js Version

This is **Next.js 16+**, which has breaking changes from earlier versions:

- Always check `node_modules/next/dist/docs/` for current APIs
- Server Components are default; use `'use client'` only when needed
- App Router conventions apply (`app/` directory)

### Tailwind CSS v4

- **No `tailwind.config.js`** — configuration is CSS-based
- Import order matters in `globals.css`:
  ```css
  @import 'tailwindcss';
  @import 'tw-animate-css';
  @import 'shadcn/tailwind.css';
  ```
- Theme tokens defined via `@theme inline { ... }`
- Dark mode uses `@custom-variant dark (&:is(.dark *))`

### Motion Library

- Import from `motion/react`, NOT `framer-motion`
- Example: `import { motion, AnimatePresence } from 'motion/react'`
- Use reusable variants from `@/lib/motion` (fadeInUp, staggerContainer, etc.)

---

## Code Style & Conventions

### TypeScript

- **Always use TypeScript** for new files
- Prefer type imports: `import type { ComponentProps } from 'react'`
- Use proper typing for props and function returns
- Leverage `ComponentProps<typeof Component>` for extending props

### Component Structure

**Client Components:**

```tsx
'use client';

import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from '@/lib/motion';

export function MySection() {
  return (
    <motion.section
      id='my-section'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      className='py-20 px-6'
    >
      {/* content */}
    </motion.section>
  );
}
```

**Server Components (default):**

```tsx
import type { ReactNode } from 'react';

export function Container({ children }: { children: ReactNode }) {
  return <div className='max-w-3xl mx-auto'>{children}</div>;
}
```

### Styling

**Always use `cn()` for conditional classes:**

```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-class', isActive && 'active-class', className)} />;
```

**Common patterns:**

- `px-6` for horizontal padding
- `max-w-3xl mx-auto` for centered content
- `transition-colors` or `transition-all` for hover effects
- `text-muted-foreground` for secondary text
- `bg-card border border-border` for cards

### Animation Patterns

**Stagger animations (recommended):**

```tsx
<motion.div variants={staggerContainer} initial='hidden' animate='visible'>
  <motion.h2 variants={staggerItem}>Title</motion.h2>
  <motion.p variants={staggerItem}>Description</motion.p>
</motion.div>
```

**Scroll-triggered animations:**

```tsx
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
```

**Exit animations:**

```tsx
import { AnimatePresence } from 'motion/react';

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
    >
      {/* content */}
    </motion.div>
  )}
</AnimatePresence>;
```

---

## Design System

### Colors (OKLCH Format)

**Theme tokens (use as Tailwind classes):**

- `bg-background` / `text-foreground`
- `bg-card` / `text-card-foreground`
- `bg-primary` / `text-primary-foreground`
- `bg-secondary` / `text-secondary-foreground`
- `bg-muted` / `text-muted-foreground`
- `bg-accent` / `text-accent-foreground`
- `border-border`

**Primary accent:** Purple/violet (`oklch(0.5 0.27 270)`)

### Typography

**Fonts:**

- Sans: `font-sans` (Inter)
- Mono: `font-mono` (Fira Code)

**Common scales:**

- Headings: `text-3xl font-bold` or `text-4xl font-black`
- Body: `text-base text-muted-foreground`
- Small: `text-sm text-muted-foreground`
- Code: `font-mono text-sm`

### Spacing

- Sections: `py-20` or `py-24`
- Card padding: `p-6` or `p-8`
- Gaps: `gap-4`, `gap-6`, `gap-8`

### Borders & Shadows

- Border: `border border-border`
- Rounded: `rounded-lg`, `rounded-xl`, `rounded-2xl`
- Shadow: `shadow-sm`, `shadow-md`
- Ring: `ring-2 ring-primary`

---

## Common Patterns

### Section Layout

```tsx
<section id='section-name' className='py-20 px-6'>
  <div className='max-w-3xl mx-auto'>
    <motion.h2 variants={fadeInUp} className='text-3xl font-bold mb-6'>
      Section Title
    </motion.h2>
    {/* content */}
  </div>
</section>
```

### Card Component

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card className='hover:border-primary/50 transition-colors'>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className='text-muted-foreground'>Description</p>
  </CardContent>
</Card>;
```

### Badge Usage

```tsx
import { Badge } from '@/components/ui/badge';

<Badge variant='secondary' className='text-xs'>
  React
</Badge>;
```

### Icon Integration

```tsx
import { Mail, Github, ExternalLink } from 'lucide-react';

<a
  href='mailto:email@example.com'
  className='flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
>
  <Mail className='w-4 h-4' />
  <span>Contact</span>
</a>;
```

---

## Accessibility

- Always include `id` attributes on sections for smooth scroll navigation
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`
- Add `aria-label` to icon-only buttons
- Ensure sufficient color contrast (OKLCH helps)
- Use `sr-only` class for screen-reader-only text

---

## File Organization

### Creating New Components

**Resume sections:** `src/components/resume/`
**UI primitives:** `src/components/ui/`
**Icons:** `src/components/icons/`
**Utilities:** `src/lib/`

### Import Aliases

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/app` → `src/app`

### File Naming

- Components: `kebab-case.tsx` (e.g., `hero-section.tsx`)
- Utilities: `kebab-case.ts` (e.g., `utils.ts`)
- Exports: Use named exports (`export function Component`)

---

## Performance Best Practices

- **GPU-accelerated animations:** Only animate `transform` and `opacity`
- **Avoid layout shifts:** Use `will-change-transform` sparingly
- **Lazy load images:** Use `next/image` with `loading='lazy'`
- **Code splitting:** Client components auto-split; avoid massive barrel exports
- **Minimize JS:** Prefer Server Components when no interactivity needed

---

## Dark Mode

- Controlled via `class` attribute (`.dark` on `<html>`)
- Toggle uses `next-themes`'s `useTheme()` hook
- All colors auto-switch via CSS variables
- Test both modes when adding new components

---

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Components install to `src/components/ui/` with proper theme integration.

**Commonly used:**

- `badge`, `button`, `card`, `separator`, `dialog`, `dropdown-menu`

---

## Motion Variants Reference

Located in `@/lib/motion`:

```typescript
fadeInUp; // opacity: 0 → 1, y: 20 → 0
fadeIn; // opacity: 0 → 1
slideInLeft; // opacity: 0 → 1, x: -20 → 0
scaleIn; // opacity: 0 → 1, scale: 0.95 → 1
staggerContainer; // orchestrates child animations
staggerItem; // child of staggerContainer
```

**Usage:**

```tsx
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
```

---

## Navigation & Routing

**Smooth scroll to sections:**

```tsx
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
```

**Active section detection (IntersectionObserver):**
See `desktop-sidebars.tsx` for reference implementation.

---

## Testing Checklist

When adding new features:

- [ ] Responsive (mobile, tablet, desktop)
- [ ] Dark mode compatible
- [ ] Animations smooth (60fps)
- [ ] Accessible (keyboard nav, screen readers)
- [ ] TypeScript errors resolved
- [ ] ESLint warnings addressed

---

## Common Mistakes to Avoid

❌ Using `framer-motion` instead of `motion/react`
❌ Creating `tailwind.config.js` (v4 uses CSS config)
❌ Forgetting `'use client'` on interactive components
❌ Inline styles instead of Tailwind classes
❌ Importing lucide icons without tree-shaking (`lucide-react/icons/`)
❌ Not using `cn()` for conditional classes
❌ Hardcoding colors instead of theme tokens

---

## Helpful Commands

```bash
# Development
npm run dev           # Start dev server (port 8080)

# Production
npm run build         # Build for production
npm run start         # Serve build (port 3000)

# Code Quality
npm run lint          # ESLint check

# Add shadcn components
npx shadcn@latest add <component>
```

---

## Additional Resources

- Next.js docs: `node_modules/next/dist/docs/`
- Motion docs: https://motion.dev
- Tailwind v4: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- OKLCH color picker: https://oklch.com

---

**When in doubt:** Follow existing patterns in `src/components/resume/` and refer to `AGENTS.md` for architecture details.
