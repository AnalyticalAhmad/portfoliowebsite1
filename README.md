# Portfolio Website

A responsive personal portfolio built with Next.js, React, TypeScript, and motion-first UI tooling.

## Stack

- Next.js 16 and React 19
- TypeScript
- GSAP, Framer Motion, and Lenis
- Tailwind CSS

## Run locally

Prerequisite: Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Serve the production build
npm run lint   # Run ESLint
```

## Project structure

- `src/app` — routes, layouts, and global styles
- `src/components` — shared interface components
- `src/features` — page and feature sections
- `src/data` — project and content data
- `public` — images and other static assets

## Environment variables

Do not commit secrets. Local environment files such as `.env`, `.env.local`, and `.env.production` are ignored through `.gitignore`. If configuration is added later, document its required keys in a committed `.env.example` file without values.

## Deployment

Create a production build with `npm run build`, then deploy the resulting Next.js app to your preferred Node.js-compatible host.
