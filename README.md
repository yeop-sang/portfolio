# Yeop Sang Portfolio

Personal portfolio showcasing backend systems, full-stack product work, AI prototyping, award-winning projects, and open-source contributions. Built with React, Vite, and TypeScript.

## Live Site

- Production: `<add-your-vercel-url>`

## Overview

This repository contains a bilingual portfolio site for Yeop Sang. It presents selected project work, award-winning builds, open-source contributions, and background across backend, full-stack, and AI-driven product development.

## What’s Included

- KR/EN language toggle
- Work page with project cards and detailed case-study routes
- About page with background, tech stack, and timeline
- Contact page with external links
- Award-focused project storytelling
- Open-source contribution entries tied to real product needs
- SPA routing configured for Vercel deployment

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Motion
- MUI / Radix UI
- Vercel

## Routes

- `/` — Home
- `/work` — Project index
- `/work/:id` — Project detail
- `/about` — About
- `/contact` — Contact

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

This project is ready to deploy on Vercel.

### Option 1: GitHub + Vercel Dashboard

1. Push this repository to GitHub.
2. Import the repository at https://vercel.com.
3. Confirm the build settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Deployment Notes

- `vercel.json` rewrites all routes to `index.html` for SPA navigation.
- No environment variables are required for deployment.

## Recommended GitHub Repository Description

Personal portfolio showcasing backend systems, full-stack product work, AI prototyping, award-winning projects, and open-source contributions. Built with React, Vite, and TypeScript.
