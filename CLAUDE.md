# Shreyas Portfolio

Personal portfolio for Shreyas Sharma — SDE2 at Microsoft Copilot. Built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Badge, Button via Radix UI)
- **Deployment**: Vercel (auto-deploys on push to `main`)
- **Repo**: https://github.com/shreyas-sharma-1998/shreyas-portfolio

## Project structure

```
src/
  app/
    api/
      featured-work/route.ts   # Tabs data: Projects, Books, Blogs
      page-data/route.ts       # Experience, Education, Project Overview data
    components/
      home/
        hero-section/          # Name, title, social links, CTA
        about-me/              # Bio paragraphs + skills grid
        featured-work/         # Tabbed cards with modal detail view
        experience/            # Work history timeline
        education/             # Education timeline
        project-overview/      # Case studies + side projects list
      layout/
        header/                # Top nav + announcement bar
        footer/                # Footer
    layout.tsx                 # Root layout with metadata
    page.tsx                   # Home page composition
  components/ui/               # shadcn Badge, Button
  lib/utils.ts                 # cn() helper
public/images/                 # All static assets (icons, user photo, banners)
```

## Content is data-driven

All page content lives in the two API routes — not scattered across components. To update content, edit:
- `src/app/api/page-data/route.ts` — experience, education, project overview links
- `src/app/api/featured-work/route.ts` — featured work tabs (Projects, Books, Blogs)

## Dev commands

```bash
npm run dev    # Start dev server (Turbopack)
npm run build  # Production build
npm run lint   # ESLint
```

## Commit style

No Co-Authored-By lines in commits. Keep messages concise and descriptive.
