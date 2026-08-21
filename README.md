# Solvix Labs

Enterprise AI & Data consulting website. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui-style components + Framer Motion + Lucide icons.

## What's built

- **Pages**: Home, Services, About, Contact — real copy, no lorem ipsum
- **Design system**: custom token set in `src/app/globals.css` (not a default theme) — dark "ink" hero, light "paper" body, engineering-blue + verified-teal accents, Space Grotesk / Inter / IBM Plex Mono type system
- **Signature element**: animated SVG pipeline diagram in the hero (`src/components/site/PipelineDiagram.tsx`), built with Framer Motion, respects `prefers-reduced-motion`
- **Contact form**: React Server Action (`src/app/contact/actions.ts`) → [Resend](https://resend.com), with Zod validation and a honeypot field
- **SEO**: per-page metadata, Open Graph/Twitter cards, `sitemap.ts`, `robots.ts`, JSON-LD `ProfessionalService` schema in the root layout
- **Security**: CSP, HSTS, X-Frame-Options, and related headers in `next.config.ts`, with the CSP already allowing Cloudflare Turnstile's domain

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY at minimum
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example`. At minimum, set `RESEND_API_KEY` to get the contact form sending real email — get one from https://resend.com/api-keys (free tier is fine to start). Until it's set, the form fails gracefully with a message asking people to email you directly instead of erroring.

## Deploying

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new) — it auto-detects Next.js, no config needed.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Point your domain at Vercel and enable it in the Vercel dashboard.

## Still to wire up (needs your accounts/credentials — noted in code where relevant)

- **Resend**: verify a sending domain so email doesn't come from `onboarding@resend.dev`
- **Cloudflare**: put the domain on Cloudflare, add Turnstile, drop the site key into `.env.local` and uncomment the widget in `src/components/site/ContactForm.tsx`
- **GA4 / Microsoft Clarity**: add their snippets to `src/app/layout.tsx` (IDs are already in `.env.example` as placeholders)
- **CMS (later)**: once case studies/articles grow past what MDX comfortably handles, Sanity or Contentful can be layered in — the content structure here doesn't need to change to add one
- **CRM (later)**: swap/extend the Resend call in `actions.ts` to also push leads into HubSpot once you're on it

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, JSON-LD, header/footer shell
    page.tsx           # homepage
    services/page.tsx
    about/page.tsx
    contact/
      page.tsx
      actions.ts        # server action → Resend
    sitemap.ts
    robots.ts
    globals.css         # design tokens
  components/
    ui/                 # shadcn-style primitives (button, card, form fields)
    site/               # Header, Footer, ContactForm, PipelineDiagram
  lib/
    utils.ts            # cn() class-merge helper
```


## Premium homepage update

The homepage was redesigned with a richer enterprise systems-engineering visual language: animated architecture map, schematic graphics, focused services, industry visuals, customer-owned environment messaging, secure-by-design principles, and a concise delivery framework.


## Solvix V1 positioning
- Domain-led
- Tool-agnostic
- Customer-owned
- Secure by design
- Production-focused
- Generic seven-step lifecycle removed.
## V2 fixes
- Development CSP permits `unsafe-eval` only when NODE_ENV is not production, required by React/Next.js debugging.
- Production CSP remains strict and does not permit eval.
- Development WebSocket connections are allowed for Turbopack HMR.
- New Solvix geometric "S-path" logo mark added to the header.
