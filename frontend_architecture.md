# NOVAAACODE PORTFOLIO

# Volume 6 — Frontend Technical Architecture

**Status:** Implementation Specification  
**Primary Stack:** Next.js + TypeScript  
**Purpose:** Define the production architecture used to implement the visual, UX, responsive, and motion systems established in Volumes 1–5.

---

# 1. Technical Direction

Novaaacode should be built as a:

```text
NEXT.JS APPLICATION
+
TYPESCRIPT
+
REUSABLE DESIGN SYSTEM
+
DATA-DRIVEN PROJECT SYSTEM
+
GSAP MOTION LAYER
+
RESPONSIVE MEDIA SYSTEM
```

The architecture should remain simple enough for a portfolio while still being clean and scalable.

Do not overengineer it into an enterprise application.

---

# 2. Recommended Stack

```text
Framework
→ Next.js

Language
→ TypeScript

Routing
→ App Router

Styling
→ Tailwind CSS + CSS variables

Motion
→ GSAP + ScrollTrigger

Icons
→ Lucide only where required

Forms
→ React Hook Form

Validation
→ Zod

Email
→ Resend / equivalent

Images
→ next/image

Fonts
→ next/font

Deployment
→ Vercel
```

Optional:

```text
Lenis
```

only if native scrolling does not provide the desired final feel.

---

# 3. Architecture Principle

Use:

```text
Server Components by default
```

and:

```text
Client Components only where interaction requires them.
```

Do not turn the entire portfolio into:

```ts
"use client";
```

---

# 4. Application Structure

Recommended:

```text
src/
│
├── app/
├── components/
├── sections/
├── features/
├── data/
├── lib/
├── hooks/
├── motion/
├── styles/
├── types/
└── config/
```

Public assets:

```text
public/
├── images/
├── videos/
├── projects/
└── social/
```

---

# 5. App Router Structure

```text
app/
│
├── layout.tsx
├── page.tsx
├── loading.tsx
├── not-found.tsx
├── error.tsx
│
├── work/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── about/
│   └── page.tsx
│
├── services/
│   └── page.tsx
│
├── contact/
│   └── page.tsx
│
├── api/
│   └── contact/
│       └── route.ts
│
├── sitemap.ts
└── robots.ts
```

This maps directly to the experience architecture.

---

# 6. Route Map

```text
/
→ Homepage

/work
→ Work Archive

/work/[slug]
→ Project Case Study

/about
→ About

/services
→ Services

/contact
→ Contact
```

Future optional:

```text
/privacy
/terms
```

---

# 7. Root Layout

`layout.tsx` owns global infrastructure:

```text
HTML
BODY
FONT VARIABLES
GLOBAL NAVIGATION
PAGE TRANSITION LAYER
POINTER LAYER
GLOBAL ACCESSIBILITY
FOOTER where appropriate
```

Do not place page-specific animation logic here.

---

# 8. Homepage Architecture

```text
app/page.tsx

<Home>
    <Hero />
    <FeaturedProject />
    <StudioStatement />
    <SelectedWork />
    <Capabilities />
    <MobileShowcase />
    <Process />
    <FinalCTA />
</Home>
```

Each major section should remain independently maintainable.

---

# 9. Sections Directory

Recommended:

```text
sections/
│
├── home/
│   ├── Hero.tsx
│   ├── FeaturedProject.tsx
│   ├── StudioStatement.tsx
│   ├── SelectedWork.tsx
│   ├── Capabilities.tsx
│   ├── MobileShowcase.tsx
│   ├── Process.tsx
│   └── FinalCTA.tsx
│
├── work/
├── project/
├── about/
├── services/
└── contact/
```

Sections represent page-level compositions.

---

# 10. Components Directory

Reusable visual primitives:

```text
components/
│
├── layout/
│   ├── Container.tsx
│   ├── Section.tsx
│   └── Grid.tsx
│
├── navigation/
│   ├── Navbar.tsx
│   ├── NavLink.tsx
│   └── MobileMenu.tsx
│
├── typography/
│   ├── DisplayText.tsx
│   ├── SectionLabel.tsx
│   └── TextLink.tsx
│
├── media/
│   ├── ProjectMedia.tsx
│   ├── BrowserFrame.tsx
│   ├── PhoneFrame.tsx
│   └── VideoFrame.tsx
│
├── project/
│   ├── ProjectRow.tsx
│   ├── ProjectMeta.tsx
│   ├── ProjectPreview.tsx
│   └── NextProject.tsx
│
├── form/
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Selector.tsx
│   └── SubmitButton.tsx
│
└── motion/
    ├── RevealText.tsx
    ├── RevealMedia.tsx
    ├── PointerLayer.tsx
    └── PageTransition.tsx
```

---

# 11. Section vs Component Rule

Use:

```text
SECTION
```

when something represents a substantial page composition.

Use:

```text
COMPONENT
```

when something is reusable across multiple sections/pages.

Example:

```text
SelectedWork
→ Section

ProjectRow
→ Component
```

---

# 12. Data-Driven Projects

Do not hardcode each project directly inside page JSX.

Use centralized project data.

```text
data/
└── projects.ts
```

or:

```text
data/projects/
├── portfolio.ts
├── food-delivery.ts
├── cv-builder.ts
└── expense-tracker.ts
```

The second approach is better once case studies become larger.

---

# 13. Project Type

Conceptually:

```ts
export interface Project {
  slug: string;
  number: string;

  title: string;
  shortTitle?: string;

  category: string;
  year: number;

  description: string;

  featured: boolean;

  role: string[];

  technologies: string[];

  theme: ProjectTheme;

  thumbnail: string;
  heroMedia: ProjectMedia;

  sections: ProjectSection[];

  nextProject?: string;
}
```

---

# 14. Project Theme

```ts
interface ProjectTheme {
  background: string;
  foreground: string;
  accent: string;
  mediaBackground?: string;
}
```

This allows individual projects to have personality without breaking the Novaaacode system.

---

# 15. Project Media Type

```ts
type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
    }
  | {
      type: "phone";
      src: string;
      alt: string;
    }
  | {
      type: "browser";
      src: string;
      alt: string;
    };
```

---

# 16. Project Section Model

Do not force every case study into exactly the same layout.

Use flexible sections.

Concept:

```ts
interface ProjectSection {
  type:
    | "text"
    | "media"
    | "text-media"
    | "gallery"
    | "statement"
    | "mobile-showcase"
    | "browser-showcase"
    | "technical";

  heading?: string;

  body?: string;

  media?: ProjectMedia[];

  layout?: string;
}
```

---

# 17. Project Renderer

Case-study route:

```text
/work/[slug]
```

loads project data and sends sections to:

```text
ProjectSectionRenderer
```

Conceptually:

```ts
switch (section.type) {
  case "text":
    return <TextSection />;

  case "media":
    return <MediaSection />;

  case "gallery":
    return <GallerySection />;

  case "statement":
    return <StatementSection />;
}
```

This provides structure without forcing identical case studies.

---

# 18. Dynamic Project Routes

Use:

```text
/work/[slug]
```

instead of manually creating a route folder for every project.

Example:

```text
/work/portfolio
/work/food-delivery
/work/cv-builder
/work/expense-tracker
```

---

# 19. Static Generation

Portfolio projects should generally be statically generated.

Use project slugs to generate routes at build time where practical.

Benefits:

```text
Fast pages
SEO
Reliable deployment
Minimal server work
```

---

# 20. CMS Decision

Initial Novaaacode version:

```text
NO CMS REQUIRED
```

Project content can live in:

```text
TypeScript
JSON
MDX
```

For the first version, structured TypeScript or MDX is sufficient.

Do not add a CMS simply because portfolios sometimes use one.

---

# 21. MDX Option

If case studies become writing-heavy, use:

```text
MDX
```

for project narrative while keeping metadata structured.

Possible future structure:

```text
content/
└── projects/
    ├── portfolio.mdx
    ├── food-delivery.mdx
    └── cv-builder.mdx
```

Not required for MVP.

---

# 22. State Management

Global application state should remain minimal.

Do not introduce Redux.

Potential global states:

```text
Mobile menu state
Pointer preview state
Route transition state
Theme/environment state
```

Most state should remain local.

---

# 23. Zustand

Zustand is acceptable if shared interaction state becomes useful.

Example:

```text
Active project preview
Menu state
Transition state
```

But do not create a giant global store.

---

# 24. Server vs Client State

The portfolio has almost no traditional server state.

Therefore:

```text
React Query
SWR
```

are unnecessary unless future dynamic functionality requires them.

---

# 25. Client Component Rule

Components requiring:

```text
GSAP
window
document
pointer events
local interaction state
forms
```

may be Client Components.

Everything else should remain server-renderable where practical.

---

# 26. Motion Architecture

Recommended:

```text
motion/
├── config.ts
├── tokens.ts
├── gsap.ts
├── reducedMotion.ts
└── helpers.ts
```

Hooks:

```text
hooks/
├── useReveal.ts
├── useHeroMotion.ts
├── useSelectedWork.ts
├── useProjectPreview.ts
├── useMobileShowcase.ts
└── useProcessMotion.ts
```

---

# 27. GSAP Registration

Register plugins centrally.

Concept:

```ts
gsap.registerPlugin(ScrollTrigger);
```

Do not repeatedly register ScrollTrigger inside every component.

---

# 28. Animation Ownership

Each major animated section owns its timeline.

Example:

```text
Hero
→ useHeroMotion

SelectedWork
→ useSelectedWork

MobileShowcase
→ useMobileShowcase
```

No giant global homepage timeline.

---

# 29. CSS Architecture

Use:

```text
Tailwind
+
CSS variables
+
small amount of component CSS where necessary
```

Do not force complex GSAP layout requirements into unreadable Tailwind class strings.

---

# 30. Global CSS

`globals.css` should contain primarily:

```text
Reset
CSS variables
Body
Selection
Scrollbar where appropriate
Accessibility utilities
Global typography defaults
```

Do not place entire page designs in `globals.css`.

---

# 31. Design Tokens

Define CSS variables:

```css
:root {
  --bg-primary: #f4f4f0;
  --bg-dark: #111111;

  --text-primary: #111111;
  --text-secondary: #666662;

  --page-gutter: 40px;

  --motion-fast: 160ms;
  --motion-normal: 320ms;
}
```

Tailwind can reference these tokens.

---

# 32. Theme Architecture

Use global neutral theme plus project-specific variables.

Project page may set:

```css
--project-bg
--project-fg
--project-accent
--project-media-bg
```

This prevents dozens of project-specific utility classes.

---

# 33. Fonts

Use:

```text
next/font
```

where supported.

Goals:

```text
No unnecessary external font requests
Minimal layout shift
Correct preload behavior
```

Expose font families through CSS variables.

---

# 34. Image Architecture

Use:

```tsx
<Image />
```

for most raster media.

Always define:

```text
dimensions
```

or:

```text
fill + constrained container
```

to prevent layout shift.

---

# 35. Responsive Images

Do not send desktop-sized screenshots unnecessarily to mobile.

Use:

```text
sizes
```

correctly.

Example concept:

```text
mobile
→ near viewport width

desktop
→ based on project composition
```

---

# 36. Image Formats

Preferred:

```text
AVIF
WebP
```

through framework optimization.

Source project screenshots may remain PNG where necessary for UI sharpness.

---

# 37. Project Screenshot Quality

Do not overcompress interface screenshots.

Text inside UI must remain readable.

Balance:

```text
quality
vs
payload
```

---

# 38. Video Architecture

Use video only when motion itself needs demonstration.

Recommended:

```text
MP4/WebM
muted
playsInline
poster
```

Autoplay only where appropriate.

---

# 39. Video Loading

Do not eagerly load every project video.

Use:

```text
poster
+
lazy initialization
```

where practical.

---

# 40. Video Accessibility

Meaningful video demonstrations should have:

```text
supporting text
```

explaining what they demonstrate.

The case study should not become incomprehensible if video fails.

---

# 41. Navigation Architecture

Global:

```text
Navbar
MobileMenu
```

Navigation configuration:

```ts
export const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
```

Centralize it.

---

# 42. Navigation Theme

Sections may declare:

```text
light
dark
```

environment.

The navigation controller determines appropriate foreground color.

Do not manually style the navbar separately on every page.

---

# 43. Mobile Menu

Menu requirements:

```text
Focus management
Escape to close
Scroll lock
Route change close
Keyboard navigation
Reduced-motion support
```

---

# 44. Pointer Preview Architecture

Create one global or page-level:

```text
ProjectPreviewLayer
```

rather than one floating preview per project row.

Rows provide:

```text
activeProject
```

The preview layer handles rendering.

---

# 45. Pointer Coordinates

Store high-frequency coordinates outside React state.

Use:

```text
refs
GSAP quickTo
RAF
```

This avoids excessive rerendering.

---

# 46. Contact Form Architecture

Flow:

```text
ContactForm
     ↓
Client validation
     ↓
POST /api/contact
     ↓
Server validation
     ↓
Email provider
     ↓
Success / failure
```

---

# 47. Contact Validation

Use shared:

```text
Zod schema
```

where practical.

Fields:

```text
name
email
projectType
details
budget?
timeline?
```

---

# 48. Contact API

`POST /api/contact`

Responsibilities:

```text
Validate payload
Sanitize where appropriate
Rate limit
Spam check
Send email
Return controlled response
```

Never trust client validation alone.

---

# 49. Email Provider

A transactional email service such as Resend is appropriate.

Environment variable:

```text
RESEND_API_KEY
```

Never expose provider keys in client code.

---

# 50. Contact Email

The generated inquiry email should contain:

```text
Name
Email
Project type
Project details
Budget
Timeline
Submission time
```

Reply-To should use the visitor's provided email where supported safely.

---

# 51. Spam Protection

Start with:

```text
Honeypot
Rate limiting
Server validation
```

Add CAPTCHA only if spam becomes an actual problem.

---

# 52. Rate Limiting

Protect:

```text
/api/contact
```

from repeated automated submissions.

Implementation may use:

```text
Upstash Redis
```

or an equivalent lightweight rate limiter if needed.

---

# 53. Environment Variables

Example:

```env
RESEND_API_KEY=
CONTACT_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

Never commit actual `.env` secrets.

---

# 54. Environment Validation

Optional but recommended:

Validate required server environment variables during startup/build where appropriate.

Fail clearly rather than producing mysterious contact-form failures.

---

# 55. SEO Architecture

Each route needs:

```text
Title
Description
Canonical URL
Open Graph
Social image
```

Project pages receive project-specific metadata.

---

# 56. Global Metadata

Concept:

```text
Novaaacode — Digital Product Design & Development
```

Description should clearly explain:

```text
web
mobile
product design
development
```

without keyword stuffing.

---

# 57. Project Metadata

Example:

```text
Food Delivery App — Novaaacode
```

Description:

```text
A mobile food ordering interface focused on discovery,
restaurant browsing, ordering and checkout.
```

Keep descriptions factual.

---

# 58. Dynamic Metadata

`/work/[slug]` should generate metadata from project data.

Do not manually duplicate project titles/descriptions.

---

# 59. Open Graph Images

Provide:

```text
Global Novaaacode OG
+
Project-specific OG images
```

Project OG should include:

```text
Project title
Strong visual
Novaaacode identity
```

---

# 60. Sitemap

Generate routes for:

```text
/
 /work
 /about
 /services
 /contact
 /work/*
```

Exclude internal API routes.

---

# 61. robots.txt

Production should permit indexing of public portfolio pages.

Non-production environments should avoid accidental indexing where deployment configuration supports it.

---

# 62. Structured Data

Optional useful structured data:

```text
Person / ProfessionalService
WebSite
CreativeWork / SoftwareApplication where appropriate
```

Do not add irrelevant schema purely for SEO scores.

---

# 63. Accessibility Architecture

Accessibility should be implemented structurally rather than patched later.

Required:

```text
Semantic HTML
Keyboard support
Visible focus
Alt text
Labels
Reduced motion
Contrast
Logical heading hierarchy
```

---

# 64. Skip Navigation

Root layout should include:

```text
Skip to content
```

which becomes visible on keyboard focus.

---

# 65. Main Element

Every page must expose:

```html
<main id="main-content">
```

or equivalent semantic structure.

---

# 66. Focus Management

Mobile menu and modal-like interfaces require correct focus behavior.

Page transitions must not trap or lose focus.

---

# 67. Error Architecture

Provide:

```text
not-found.tsx
error.tsx
```

plus local error handling where necessary.

---

# 68. 404

Unknown project slug:

```text
notFound()
```

Do not render an empty project page.

---

# 69. Contact Error

API should return controlled error structures.

The client displays:

```text
Couldn't send that.
Try again or email me directly.
```

Do not expose server stack traces.

---

# 70. Loading Architecture

Avoid unnecessary route loaders.

Most static pages should render quickly enough that:

```text
transition
+
media placeholders
```

are sufficient.

---

# 71. Initial Loader

If used, it should exist only for genuine initialization needs.

Do not intentionally delay rendering to display the Novaaacode logo.

---

# 72. Media Loading

Below-the-fold project media:

```text
lazy
```

Critical hero media:

```text
priority where justified
```

Do not mark every image as priority.

---

# 73. Performance Architecture

Primary performance risks:

```text
Large screenshots
Video
GSAP timelines
ScrollTrigger
Fonts
Pointer effects
Too many Client Components
```

These should be actively managed.

---

# 74. JavaScript Budget

Do not hydrate static content unnecessarily.

Server-render:

```text
Project descriptions
Metadata
About content
Services content
Footer
```

Client-render only interactions.

---

# 75. Code Splitting

Heavy interaction sections may be dynamically loaded where beneficial.

Example:

```text
Mobile Showcase animation
Project preview system
```

But avoid dynamic-import complexity unless bundle analysis shows value.

---

# 76. Third-Party Scripts

Keep third-party scripts minimal.

Do not install analytics, heatmaps, chat widgets, trackers, and animation services without a clear reason.

---

# 77. Analytics

If analytics are later desired:

```text
Vercel Analytics
```

or a lightweight privacy-conscious equivalent is enough for the portfolio.

Track meaningful events only.

---

# 78. Useful Analytics Events

Potential:

```text
project_view
contact_started
contact_submitted
external_social_click
```

Do not track every scroll movement.

---

# 79. Security

Minimum:

```text
No secrets client-side
Input validation
Rate limiting
Safe email handling
Secure headers
Dependency maintenance
```

---

# 80. CSP

A Content Security Policy is recommended where practical.

Keep external dependencies low so CSP remains manageable.

---

# 81. External Links

Links opening new tabs should safely use appropriate:

```text
noopener
noreferrer
```

behavior where relevant.

---

# 82. Data Privacy

The Contact form should collect only information necessary for project communication.

Do not collect:

```text
Address
Phone
Company size
Personal profile information
```

without a real need.

---

# 83. Deployment

Recommended:

```text
GitHub
↓
Vercel
↓
Custom domain
```

Production deploys should originate from the main production branch.

---

# 84. Deployment Environments

Use:

```text
Local
Preview
Production
```

Preview deployments are useful for testing animation and responsive changes before production.

---

# 85. Domain Architecture

Final structure:

```text
novaaacode.[TLD]
```

Primary domain should redirect consistently between:

```text
www
non-www
```

based on whichever version is selected.

---

# 86. HTTPS

Production must always use HTTPS.

Vercel/custom-domain configuration should handle certificate provisioning.

---

# 87. Cache Strategy

Static assets should benefit from long-lived caching.

Project pages can remain statically generated unless dynamic requirements emerge.

---

# 88. Project Asset Structure

Recommended:

```text
public/projects/
│
├── portfolio/
│   ├── hero.webp
│   ├── desktop.webp
│   └── mobile.webp
│
├── food-delivery/
│   ├── hero.webp
│   ├── home.webp
│   ├── restaurant.webp
│   ├── details.webp
│   ├── cart.webp
│   └── checkout.webp
│
└── cv-builder/
```

Keep assets organized by project.

---

# 89. Naming Convention

Use:

```text
kebab-case
```

for assets.

Good:

```text
food-details-mobile.webp
```

Avoid:

```text
Screenshot 2026-08-04 at 2.31.57 PM FINAL FINAL.png
```

---

# 90. TypeScript Rules

Avoid:

```ts
any
```

unless absolutely necessary.

Define reusable types for:

```text
Projects
Media
Sections
Navigation
Contact
Themes
```

---

# 91. Component Props

Keep props explicit.

Bad:

```ts
data: any
```

Better:

```ts
project: Project
```

---

# 92. Constants

Centralize:

```text
Site name
Site URL
Social URLs
Navigation
Contact email
```

Example:

```text
config/site.ts
```

---

# 93. Site Config

Concept:

```ts
export const siteConfig = {
  name: "Novaaacode",
  description: "...",

  navigation: [...],

  socials: {
    instagram: "...",
    github: "...",
    linkedin: "...",
  },
};
```

---

# 94. Content Separation

Do not bury long marketing copy inside components.

Use:

```text
data
config
content
```

where appropriate.

Components should primarily describe structure and behavior.

---

# 95. Testing Strategy

The portfolio does not require an enormous test suite.

Focus on critical behavior.

---

# 96. Unit Testing

Useful targets:

```text
Validation schemas
Project utilities
Data helpers
Route helpers
```

Do not unit-test trivial visual markup.

---

# 97. Integration Testing

Important:

```text
Contact form
Navigation
Project routing
404 behavior
```

---

# 98. E2E Testing

High-value journeys:

```text
Homepage
→ Project

Work
→ Project
→ Next Project

Homepage
→ Contact
→ Submit

Mobile Menu
→ Navigate
```

Playwright is suitable if automated E2E testing is added.

---

# 99. Visual Testing

Because Novaaacode is design-heavy, manual visual QA remains important.

Test:

```text
Mobile
Tablet
Laptop
Desktop
Ultrawide
```

---

# 100. Browser Support

Primary:

```text
Current Chrome
Current Safari
Current Firefox
Current Edge
```

Mobile:

```text
iOS Safari
Android Chrome
```

Do not design only around Chrome.

---

# 101. Safari Testing

Pay particular attention to:

```text
Sticky positioning
Viewport units
Video autoplay
Clip-path
ScrollTrigger
Mobile menu height
```

---

# 102. Viewport Units

Where appropriate use modern units:

```text
svh
dvh
lvh
```

rather than blindly using:

```text
100vh
```

on mobile.

---

# 103. Responsive Testing

At minimum:

```text
375px
430px
768px
1024px
1280px
1440px
1728px+
```

Also test widths between these values.

---

# 104. Motion Testing

Test:

```text
Slow scroll
Fast scroll
Trackpad
Mouse wheel
Touch
Resize
Back navigation
Reduced motion
Background/foreground tab
```

---

# 105. Lighthouse Targets

Aim for strong results rather than chasing artificial 100 scores.

Targets:

```text
Performance
90+

Accessibility
95+

Best Practices
95+

SEO
95+
```

Real user experience takes priority over gaming the score.

---

# 106. Core Web Vitals

Pay attention to:

```text
LCP
INP
CLS
```

Likely LCP candidate:

```text
Hero typography/media
```

Avoid loading behavior that causes it to shift.

---

# 107. Development Phases

### Phase 1

```text
Project setup
Fonts
Tokens
Grid
Navigation
```

### Phase 2

```text
Static homepage
```

### Phase 3

```text
Work archive
Project architecture
Case studies
```

### Phase 4

```text
About
Services
Contact
```

### Phase 5

```text
Responsive reconstruction
```

### Phase 6

```text
Core motion
```

### Phase 7

```text
Signature motion
```

### Phase 8

```text
SEO
Accessibility
Performance
QA
```

---

# 108. MVP Technical Scope

MVP must include:

```text
Next.js architecture

Responsive pages

Project data system

Work archive

Case studies

About

Services

Contact

Basic motion

SEO

Accessibility

404

Deployment
```

---

# 109. Enhancement Scope

After MVP:

```text
Horizontal Selected Work

Cursor previews

Advanced Mobile Showcase

Shared project transitions

Advanced page transitions

Fine parallax

Magnetic interactions
```

Do not block completion of the portfolio on these enhancements.

---

# 110. Dependency Rule

Before installing a package ask:

```text
Can React do this?

Can CSS do this?

Can an existing dependency do this?
```

If yes, do not add another library.

---

# 111. Package Philosophy

The final dependency list should remain relatively small.

Core:

```text
next
react
react-dom
typescript
tailwindcss
gsap
zod
react-hook-form
```

Then only genuinely necessary additions.

---

# 112. Anti-Architecture Rules

Do not introduce:

```text
Redux for trivial state

Microservices

Separate backend application

GraphQL

WebSockets

Database

Authentication

User accounts

Complex CMS

Docker orchestration

Kubernetes

Enterprise design-system tooling
```

unless future requirements genuinely introduce those needs.

This is a portfolio.

---

# 113. Backend Requirement

The only initial backend-like functionality required is:

```text
Contact submission
```

A Next.js route handler/server action is sufficient.

There is no need for:

```text
Node.js + Express backend
```

for the initial portfolio.

---

# 114. Database Requirement

Initial version:

```text
NO DATABASE
```

Contact messages can be delivered through email.

If inquiry storage becomes necessary later, a database can be introduced.

---

# 115. Authentication

```text
NOT REQUIRED
```

No admin dashboard is necessary for the first version.

Project content lives in the codebase.

---

# 116. Architecture Priority

When deciding between:

```text
clever architecture
```

and:

```text
simple maintainable architecture
```

choose simple maintainable architecture.

---

# 117. Final Folder Blueprint

```text
novaaacode/
│
├── public/
│   ├── projects/
│   ├── images/
│   ├── videos/
│   └── social/
│
├── src/
│   │
│   ├── app/
│   │   ├── work/
│   │   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   │
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   ├── api/
│   │   │   └── contact/
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── typography/
│   │   ├── media/
│   │   ├── project/
│   │   ├── form/
│   │   └── motion/
│   │
│   ├── sections/
│   │   ├── home/
│   │   ├── work/
│   │   ├── project/
│   │   ├── about/
│   │   ├── services/
│   │   └── contact/
│   │
│   ├── data/
│   │   └── projects/
│   │
│   ├── hooks/
│   │
│   ├── motion/
│   │
│   ├── lib/
│   │   ├── validation/
│   │   ├── email/
│   │   └── utils/
│   │
│   ├── config/
│   │   └── site.ts
│   │
│   ├── types/
│   │
│   └── styles/
│       └── globals.css
│
├── .env.local
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

# 118. Architecture Flow

```text
PROJECT DATA
      │
      ▼
NEXT.JS ROUTES
      │
      ▼
PAGE SECTIONS
      │
      ▼
REUSABLE COMPONENTS
      │
      ├───────────────┐
      ▼               ▼
DESIGN TOKENS      MOTION SYSTEM
      │               │
      └───────┬───────┘
              ▼
        FINAL INTERFACE
              │
              ▼
     RESPONSIVE / ACCESSIBLE
              │
              ▼
           VERCEL
```

---

# 119. Implementation Rules for Codex

When building from this specification:

```text
1. Do not redesign the architecture.

2. Do not replace editorial layouts
   with generic cards.

3. Do not introduce gradients,
   glassmorphism or glowing effects
   unless explicitly specified.

4. Build static composition before animation.

5. Use Server Components by default.

6. Keep animation logic isolated.

7. Use project data instead of duplicated JSX.

8. Build mobile intentionally.

9. Respect reduced motion.

10. Do not invent portfolio content.

11. Do not expose confidential projects.

12. Do not add dependencies without necessity.

13. Preserve accessibility.

14. Optimize project media.

15. Keep architecture simple.
```

---

# 120. Definition of Done

The frontend architecture is successfully implemented when:

```text
[ ] All routes work

[ ] Projects are data-driven

[ ] New project can be added without restructuring site

[ ] Components use shared tokens

[ ] Desktop layout matches specification

[ ] Mobile is intentionally reconstructed

[ ] Tablet behaves correctly

[ ] Motion is isolated from content architecture

[ ] Reduced motion works

[ ] Contact submission works

[ ] Validation works client + server

[ ] Secrets remain server-side

[ ] 404 works

[ ] SEO metadata exists

[ ] Project metadata is dynamic

[ ] Sitemap works

[ ] Images are optimized

[ ] Videos are lazy where appropriate

[ ] Keyboard navigation works

[ ] No unnecessary global state

[ ] No unnecessary backend/database

[ ] No obvious performance problems

[ ] Production build succeeds
```

---

# 121. Volume 6 Final Decision

Novaaacode should use a deliberately lean architecture:

```text
NEXT.JS APP ROUTER
        +
TYPESCRIPT
        +
TAILWIND / CSS TOKENS
        +
DATA-DRIVEN PROJECTS
        +
SERVER COMPONENTS BY DEFAULT
        +
GSAP MOTION LAYER
        +
NEXT IMAGE/FONT
        +
LIGHTWEIGHT CONTACT API
        +
STATIC GENERATION
        +
VERCEL
```

The technical architecture exists to support the portfolio's design rather than dictate it.

The result should be:

```text
FAST
MAINTAINABLE
SCALABLE ENOUGH
SEO-FRIENDLY
ACCESSIBLE
MOTION-CAPABLE
EASY TO EXTEND
```

without introducing infrastructure the project does not need.

---

# Volume 6 — COMPLETE