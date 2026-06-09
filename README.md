# MoonShine Window Tinting & Car Valeting

Dublin's premier window tinting, car valeting, PPF and vehicle enhancement specialist.

**Live site:** [moonshine-tinting.pages.dev](https://moonshine-tinting.pages.dev)

## Tech Stack

- **Next.js 15.5.2** — App Router, edge runtime
- **React 19** — with TypeScript strict mode
- **Tailwind CSS v4** — `@theme` tokens in CSS, no config file
- **Cloudflare Pages** — deployed via `@cloudflare/next-on-pages`

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
# Standard Next.js build (CI check)
npm run build

# Cloudflare Pages build (run on Linux / in CI)
npm run pages:build
```

Deployments are triggered automatically by pushing to `main`.
