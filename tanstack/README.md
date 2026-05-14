# Norsk Luftvern — TanStack Start Migration

This directory contains the full site ported to **TanStack Start v1 + React 19 + Tailwind v4**, ready to drop into a Lovable-connected repository.

## How to use with Lovable

1. In Lovable, create a new project from the **TanStack Start** template
2. Connect it to a GitHub repo (+ menu → GitHub → Connect project)
3. Clone the new repo locally
4. Copy everything inside this `tanstack/` folder into the root of the new repo
5. Install extra dependencies:
   ```bash
   bun add gray-matter marked @tailwindcss/typography
   ```
6. Merge `src/styles.css` — append the `@plugin` and `@theme inline` block from `tanstack/src/styles.css` **after** the existing `@import "tailwindcss"` line in the Lovable template's `src/styles.css`
7. `bun run dev` — verify at localhost:3000
8. Push to the connected repo; Lovable auto-syncs

## Structure

```
tanstack/
├── content/
│   └── articles/          # Markdown articles (frontmatter + body)
└── src/
    ├── styles.css          # Tailwind v4 @theme inline brand tokens — APPEND to existing styles.css
    ├── types/
    │   └── article.ts      # TypeScript interfaces
    ├── lib/
    │   └── articles.ts     # Content loading via import.meta.glob + gray-matter + marked
    ├── components/
    │   ├── Logo.tsx
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Divider.tsx
    │   ├── CategoryBadge.tsx
    │   ├── ArticleMeta.tsx
    │   ├── ArticleCard.tsx
    │   ├── HeroArticle.tsx
    │   ├── ArticleGrid.tsx
    │   ├── ReadingProgress.tsx
    │   └── ArticleLayout.tsx
    └── routes/
        ├── __root.tsx
        ├── index.tsx
        ├── about.tsx
        ├── articles.$slug.tsx
        ├── categories.$category.tsx
        └── api/
            └── rss.xml.ts
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Homepage — featured hero + article grid |
| `/articles/:slug` | Full article reading page |
| `/categories/:category` | Filtered article list by category |
| `/about` | About page |
| `/api/rss.xml` | RSS feed |

## Adding articles

Drop a `.md` file in `content/articles/` with this frontmatter:

```yaml
---
title: Article title
date: 2025-01-15
excerpt: One-sentence summary shown in cards and meta.
category: missilforsvar   # or: anskaffelse | analyse | history | nato | teknologi
tags: [nasams, luftvern]
heroImage: /images/hero.jpg
heroImageAlt: Description of image
featured: true            # shows as hero on homepage
author: Redaksjonen
lang: no
---
```
