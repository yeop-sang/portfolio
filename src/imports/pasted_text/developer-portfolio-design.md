Design a personal developer portfolio website with the following specifications.

---

## OVERALL CONCEPT

Dark, minimal, editorial-style developer portfolio.
Inspired by high-end Korean brand design studios (like CFC — contentformcontext.com).
The site should feel like a "developer who thinks like a designer" — precise, intentional, and technically confident.

---

## IDENTITY

Name: [YOUR NAME]
Role: AI/ML Developer · Startup Founder · CS Student
Location: Seoul, Korea
Tagline: "I build things that think."
(or alternate: "Code. Model. Ship.")

---

## COLOR SYSTEM

Background: #0F0F0F (near-black, not pure black)
Primary Text: #FFFFFF
Secondary Text: #888888 (muted gray for metadata, dates, tags)
Accent: #C8FF00 (electric lime — used sparingly: hover states, active tags, one CTA button)
Card/Panel Background: #1A1A1A
Border/Divider: #2A2A2A
White Panel (About section): #F5F5F0 (off-white, warm)

---

## TYPOGRAPHY

Use these Google Fonts or system alternatives:

Display / Hero: "Space Grotesk" — Bold, wide letter-spacing (0.08em), ALL CAPS for section labels
Body: "Inter" — Regular 400/500, 16px base, line-height 1.7
Monospace (code tags, tech stack): "JetBrains Mono" — used for skill tags and code snippets
Nav: ALL CAPS, letter-spacing 0.15em, font-size 12px

---

## SITE STRUCTURE (5 pages / sections)

### 1. NAV (Global, Sticky)
- Left: Name or initials — e.g. "Y.S" or monogram, large letter-spacing
- Center: Logo mark (abstract minimal — optional, can be just name)
- Right: WORK · ABOUT · CONTACT (ALL CAPS, 12px, tracked)
- Active state: underline with accent color #C8FF00
- Transparent background, white text, blurs slightly on scroll (backdrop-filter: blur)

---

### 2. HOME / HERO SECTION

Full-viewport dark hero.

Layout:
- Top-left corner: small label "AVAILABLE FOR WORK — 2026" in monospace, #888
- Center-left (vertically centered): 
  - Large display text: "AI · ML · DEV"
  - Subtitle (body font): "Seoul-based developer building intelligent systems — from audio models to agentic workflows."
  - CTA Button: "VIEW WORK →" — outline style, hover fills with #C8FF00, text turns black
- Bottom of hero: a single horizontal rule + marquee/scrolling ticker text:
  "LLM · AUDIO PROCESSING · COMPUTER VISION · FULL-STACK · STARTUP · OPEN TO COLLABORATE ·" repeating

---

### 3. WORK / PROJECTS PAGE

Grid layout — 2 columns, no padding on edges (edge-to-edge).

Each project card:
- Full-bleed thumbnail image (16:9 aspect ratio)
- Below image: PROJECT TITLE in ALL CAPS (12px, tracked)
- Year tag below title: e.g. "2025" in #888
- On hover: image dims to 60% opacity, title and a one-line description fade in as overlay

Projects to include as placeholder cards (fill with solid color blocks for now):

1. MUSIC SENSE — 2025
   Tag: LLM · Audio · GPT-4o
   
2. SIGN LANGUAGE AI — 2025
   Tag: Computer Vision · Video Generation · Accessibility

3. AI AGENT PLATFORM — 2024
   Tag: LLM · Agentic Workflow · FastAPI

4. WHISPER PIPELINE — 2024
   Tag: Audio · WhisperX · Pitch Detection

5. COMPUTER VISION SYSTEM — 2024
   Tag: YOLO · Pose Detection · OpenCV

6. FULL-STACK WEB — 2024
   Tag: Flask · Flutter · Shopify

Grid: 2 columns × 3 rows = 6 cards. Gap between cells: 2px (dark background shows through as thin lines).

---

### 4. ABOUT PAGE

Split into 3 visual blocks:

**Block A — White Panel (full width)**
Background: #F5F5F0
Content (centered, max-width 640px):

Small label: "ABOUT"
Body text (centered):
"I'm a Seoul-based AI/ML developer and startup founder.
Currently pursuing CS at Sungshin Women's University (Aug 2025 graduation).
I work across the full stack — from training audio models to shipping production apps."

Large centered quote (display font, 32px):
" I build systems that understand context, generate meaning, and ship value. "
(draw an oval/ellipse underline under keywords like "context" and "meaning" — similar to CFC's style)

3-column horizontal list below:
· ANALYZE DATA
· BUILD MODELS  
· SHIP PRODUCTS

**Block B — Dark (background #0F0F0F)**
Heading: "TECH STACK" (ALL CAPS, 12px, tracked, #888)

Two-column list of skills with category labels:
Left column:
- AI / ML: Python, PyTorch, OpenAI API, Claude API, LangChain, Whisper, YOLO
- AUDIO: Librosa, MFCC, Pitch Detection, WhisperX

Right column:
- BACKEND: FastAPI, Flask, Django, Docker, Azure
- FRONTEND: Flutter, JavaScript, Shopify
- INFRA: Ubuntu, Tailscale, GitHub, systemd, cron

Style: tags displayed as small pill badges — border: 1px solid #2A2A2A, text: #888, hover: border turns #C8FF00, text turns white.

**Block C — Experience Timeline**
Background: #1A1A1A
Simple vertical timeline:
- 2026 · Startup Founder — AI Platform (current)
- 2025 · SKT FLY AI Challenger 8 — AI/ML Bootcamp
- 2024 · Music Sense — AI Music Platform Development  
- 2023~25 · Sungshin Women's University — Computer Science
- 2020 · Deeplyn Inc — Interview Stage

---

### 5. CONTACT PAGE

Ultra-minimal. Dark background.

Center of page:
- Label: "CONTACT" (12px, tracked, #888)
- Large display text: "Let's build something."
- Email (linked): youremail@email.com
- Optional: GitHub · LinkedIn icons (minimal outline style)

Bottom footer:
"© 2026 [YOUR NAME] — Seoul, Korea" — small, #888, centered

---

## INTERACTIONS / ANIMATIONS

1. Page load: black screen fades out over 0.8s (opacity 0 → 1)
2. Nav: on scroll past 80px, add backdrop-filter blur + subtle dark overlay
3. Work grid: image hover → opacity transition 300ms ease
4. CTA button: hover fill animation left-to-right (background slides in)
5. Scroll-to-top button: fixed bottom-right, circular, 48px, appears after scroll 300px
6. Section entrance: elements fade up 20px as they enter viewport (Intersection Observer)
7. Marquee ticker: smooth infinite horizontal scroll at 40px/s

---

## RESPONSIVE

Desktop first (1440px base).
Tablet (768px): 2-col grid stays, nav collapses.
Mobile (375px): single column grid, hamburger menu.

---

## ADDITIONAL NOTES

- No unnecessary decorations. Every element must serve a purpose.
- Images can be placeholder solid-color blocks (#1A1A1A with a subtle texture or project title text centered)
- Favicon: monogram initial in white on black square
- The feel should reference: CFC Studio, Linear.app, Vercel.com — minimal, dark, editorial
