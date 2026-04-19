# Jose Arnel Valleser — Portfolio

Personal portfolio site built to showcase my skills, experience, and projects as a Frontend Developer.

Live at: **[jav.dev](https://jav.dev)** _(replace with your actual URL)_

---

## Tech Stack

| Layer            | Technology                                    |
| ---------------- | --------------------------------------------- |
| Framework        | [Next.js 16](https://nextjs.org) (App Router) |
| Language         | TypeScript                                    |
| Styling          | Tailwind CSS v4                               |
| UI Primitives    | shadcn/ui + Base UI                           |
| Animations       | Motion (Framer Motion)                        |
| Icons            | Lucide React                                  |
| Theming          | next-themes                                   |
| Containerization | Docker                                        |
| Deployment       | Vercel                                        |

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Docker

The app ships with a production-ready, multi-stage Dockerfile optimized for minimal image size.

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment — Vercel

This project is optimized for zero-config deployment on Vercel.

1. Push the repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no configuration needed.
4. Click **Deploy**.

Every push to `main` triggers an automatic re-deploy.

> For a custom domain, go to **Project Settings → Domains** in the Vercel dashboard and add your domain.

---

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals)
├── components/
│   ├── resume/       # Portfolio sections (Hero, About, Experience…)
│   ├── ui/           # Reusable UI primitives (Badge, Button, Card…)
│   └── icons/        # Custom SVG icon components
└── lib/              # Shared utilities and motion variants
```

---

## Author

**Jose Arnel Valleser** — Frontend Developer  
[GitHub](https://github.com/wndrflgrc) · [valleser0502@gmail.com](mailto:valleser0502@gmail.com)
