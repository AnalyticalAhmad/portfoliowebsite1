# NOVAAACODE PORTFOLIO

# Volume 3 — Experience Architecture & Page-Level UX

## Part 5 — Work Archive & Individual Project Case Study UX

---

# 324. Part 5 Objective

The homepage introduces the work.

The Work Archive and individual case studies prove it.

The architecture becomes:

```text
HOME
 │
 ├── Featured Project
 │
 ├── Selected Work
 │
 └── View All Work
          │
          ▼
        /work
          │
          ▼
   PROJECT ARCHIVE
          │
          ▼
    /work/[slug]
          │
          ▼
     CASE STUDY
```

The `/work` page should encourage exploration.

The `/work/[slug]` page should provide depth.

---

# 325. Work Archive Philosophy

The Work page must not become:

```text
OUR PROJECTS

[Card] [Card] [Card]
[Card] [Card] [Card]
```

Instead, it should feel like an interactive index of Novaaacode's work.

The primary experience should be:

```text
TYPOGRAPHY
+
PROJECT INDEX
+
PREVIEW MEDIA
+
INTERACTION
```

---

# 326. Work Page Opening

The page begins with a simple editorial introduction.

Example:

```text
WORK

SELECTED DIGITAL
PRODUCTS & EXPERIENCES.

2024 — 2026
```

A small description may explain the range:

```text
Web experiences, mobile products
and interfaces designed and built
from idea to implementation.
```

---

# 327. Work Page Hero

Unlike the homepage, `/work` does not need another cinematic hero.

The visitor already knows the brand.

The Work page should enter the content quickly.

Recommended:

```text
Navbar
↓
Work title
↓
Small introduction
↓
Project index
```

---

# 328. Work Count

The page may show:

```text
06 PROJECTS
```

or:

```text
WORK / 06
```

The number should come dynamically from project data.

---

# 329. Primary Archive View

Desktop:

```text
01   NOVAAACODE PORTFOLIO        WEB EXPERIENCE       2026
────────────────────────────────────────────────────────────

02   FOOD DELIVERY               MOBILE PRODUCT       2026
────────────────────────────────────────────────────────────

03   SMART CV BUILDER            WEB PRODUCT          2026
────────────────────────────────────────────────────────────

04   EXPENSE TRACKER             MOBILE PRODUCT       2026
────────────────────────────────────────────────────────────

05   APPOINTMENT MANAGER         WEB PRODUCT          2026
────────────────────────────────────────────────────────────

06   BUY & SELL                   E-COMMERCE           2026
────────────────────────────────────────────────────────────
```

This becomes the primary archive.

---

# 330. Archive Row Anatomy

Each project row contains:

```text
PROJECT NUMBER

PROJECT NAME

CATEGORY

YEAR

OPTIONAL ARROW
```

The title should receive the strongest visual hierarchy.

---

# 331. Archive Row Height

Rows should be generous.

Desktop:

```text
Approximately 100–160px
```

depending on final typography.

The project names need room to feel significant.

---

# 332. Archive Hover

Desktop pointer enters a project row.

Sequence:

```text
Row title
→ shifts slightly

Other metadata
→ gains contrast

Arrow
→ moves

Floating project preview
→ appears
```

The row itself should not become a conventional filled card.

---

# 333. Cursor-Follow Project Preview

This is the primary experimental interaction reserved from Part 3.

When hovering:

```text
02 FOOD DELIVERY
```

a project image appears near the pointer.

Conceptually:

```text
02  FOOD DELIVERY                    2026

                 [PROJECT PREVIEW]
                         ↘
                         cursor
```

---

# 334. Preview Behavior

The preview should:

```text
Appear quickly
Follow with inertia
Remain slightly offset
Change when crossing project rows
Disappear when leaving the archive
```

It should not sit directly under the pointer.

---

# 335. Preview Movement

Use interpolated movement.

Conceptually:

```text
Cursor position
       ↓
Target position
       ↓
Preview gradually catches target
```

This gives the image physical weight.

---

# 336. Preview Dimensions

Recommended desktop range:

```text
320–480px wide
```

depending on viewport.

Mobile product previews may use a taller ratio.

Web projects may use landscape previews.

---

# 337. Preview Shape Changes

Different project types may use different preview ratios.

Example:

```text
Web
16:10

Mobile
3:4

Dashboard
4:3
```

The preview container may smoothly resize between projects.

---

# 338. Preview Transition Between Projects

When moving:

```text
Food Delivery
      ↓
Smart CV Builder
```

do not:

```text
remove image
wait
show next image
```

Instead:

```text
Current preview clips out

Next preview enters underneath

Container changes aspect ratio
```

---

# 339. Preview Rotation

A tiny pointer-responsive rotation may be used.

Maximum:

```text
±2°
```

No dramatic card tilting.

---

# 340. Preview Layering

The preview should appear above page content but below navigation where appropriate.

It must not interfere with clicking archive rows.

Use:

```text
pointer-events: none
```

for the floating media layer.

---

# 341. Archive Row Active Hover

When one project is active:

```text
Active row
opacity 1

Other rows
opacity .35–.55
```

This directs attention.

The effect should reverse immediately when leaving.

---

# 342. Archive Click

Clicking a row navigates to:

```text
/work/[slug]
```

Example:

```text
/work/food-delivery
```

The entire row should be clickable.

---

# 343. Project Transition

Opening a project should feel connected to the selected preview.

Potential desktop transition:

```text
Floating preview
       ↓
moves toward viewport center
       ↓
expands
       ↓
becomes project hero visual
```

This is an optional advanced transition.

---

# 344. Fallback Project Transition

If shared-layout transitions become fragile:

```text
Archive fades slightly
↓
Project page enters
```

Reliability is more important than forcing a complex transition.

---

# 345. Archive Filters

If project count becomes large enough, filters may be introduced.

Potential:

```text
ALL
WEB
MOBILE
PRODUCT
```

However, filters are unnecessary with only a small number of projects.

---

# 346. Filter Design

Reject:

```text
[ All ] [ Web ] [ Mobile ] [ UI/UX ]
```

as rounded pills.

Preferred:

```text
ALL 06

WEB 03

MOBILE 02

PRODUCT 01
```

using plain typography.

---

# 347. Filter Active State

Example:

```text
ALL 06
──────
```

Inactive categories remain slightly muted.

---

# 348. Filter Transition

When filtering:

```text
Rows leaving
→ fade / collapse

Remaining rows
→ reposition

Preview state
→ reset
```

Do not perform excessive bouncing layout animation.

---

# 349. Archive Alternative View

If enough projects exist later, a secondary visual view may be offered.

Example:

```text
INDEX     GRID
```

But this is optional.

The index remains the primary experience.

---

# 350. Grid View Philosophy

If implemented, Grid should still avoid generic portfolio cards.

Example:

```text
Large project image
Project number
Project name
Category
```

with varied media ratios.

---

# 351. Grid Composition

Potential:

```text
┌──────────────────────┐
│                      │
│      PROJECT 01      │
│                      │
└──────────────────────┘

                       ┌──────────────┐
                       │ PROJECT 02   │
                       └──────────────┘

      ┌────────────────────────────┐
      │         PROJECT 03         │
      └────────────────────────────┘
```

This creates an editorial archive.

---

# 352. Work Page Mobile

Cursor interactions disappear entirely.

Mobile archive:

```text
WORK

SELECTED DIGITAL
PRODUCTS & EXPERIENCES.

↓

01
NOVAAACODE PORTFOLIO
WEB EXPERIENCE / 2026

[PROJECT IMAGE]

↓

02
FOOD DELIVERY
MOBILE PRODUCT / 2026

[PROJECT IMAGE]

↓

03
SMART CV BUILDER
WEB PRODUCT / 2026
```

Images become permanently visible.

---

# 353. Mobile Archive Rhythm

Do not compress projects into small rows.

Each project should receive enough space for its media.

The mobile Work page becomes an editorial project feed.

---

# 354. Mobile Project Image

Recommended:

```text
Full content width
```

or:

```text
slightly inset
```

depending on project composition.

Mobile projects may use a phone-screen composition rather than one flattened screenshot.

---

# 355. Mobile Archive Interaction

Tap anywhere on:

```text
Project number
Title
Image
Metadata
```

within the project block to open the case study.

The target should be generous.

---

# 356. Work Page Footer Transition

After the final project:

```text
END OF INDEX
```

followed by:

```text
HAVE A PROJECT IN MIND?
LET'S TALK ↗
```

The archive should naturally lead toward contact.

---

# 357. Case Study Objective

The individual project page must answer:

```text
What was built?

Why was it built?

How was it designed?

How does it work?

What did Novaaacode contribute?

How was it implemented?

What does the final experience look like?
```

It should demonstrate thinking without becoming a 20-minute article.

---

# 358. Case Study Architecture

Recommended structure:

```text
PROJECT HERO
      ↓
PROJECT OVERVIEW
      ↓
CONTEXT / IDEA
      ↓
DESIGN DIRECTION
      ↓
CORE EXPERIENCE
      ↓
INTERFACE SHOWCASE
      ↓
RESPONSIVE / MOBILE
      ↓
MOTION & INTERACTION
      ↓
TECHNICAL IMPLEMENTATION
      ↓
OUTCOME / REFLECTION
      ↓
NEXT PROJECT
```

Not every project needs every section.

The content schema should allow sections to be optional.

---

# 359. Case Study Hero

The project page begins with identity rather than explanation.

Example:

```text
02 / MOBILE PRODUCT

FOOD
DELIVERY

A mobile ordering experience
designed around fast discovery
and frictionless checkout.

2026
```

Then:

```text
LARGE PROJECT VISUAL
```

---

# 360. Hero Layout Desktop

Conceptually:

```text
┌───────────────────────────────────────────────────────┐
│ 02 / MOBILE PRODUCT                                   │
│                                                       │
│ FOOD                                                  │
│ DELIVERY                                              │
│                                                       │
│                           A mobile ordering           │
│                           experience designed         │
│                           around speed and clarity.   │
│                                                       │
│ ROLE                       YEAR                       │
│ UI/UX + DEVELOPMENT         2026                      │
│                                                       │
└───────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────┐
│                                                       │
│                PROJECT HERO MEDIA                     │
│                                                       │
└───────────────────────────────────────────────────────┘
```

---

# 361. Hero Title

The project name should be one of the largest typographic moments on the page.

The title can break across lines intentionally.

Example:

```text
SMART
CV BUILDER
```

or:

```text
EXPENSE
TRACKER
```

---

# 362. Hero Project Category

Category remains small:

```text
03 / WEB PRODUCT
```

This provides orientation without competing with the title.

---

# 363. Hero Description

Keep it concise.

Approximately:

```text
20–45 words
```

The hero is not where the entire project is explained.

---

# 364. Hero Metadata

Potential:

```text
ROLE
UI/UX
Development

YEAR
2026

PLATFORM
iOS / Android

TYPE
Concept / Product / Client
```

Only display relevant fields.

---

# 365. Confidentiality Support

Some projects may not be publicly displayable in full.

The project schema should support:

```text
PUBLIC
LIMITED
PRIVATE
```

For limited projects, only approved visuals and information should appear.

---

# 366. Hero Media

Immediately after the project identity:

```text
Large visual
```

should establish the project's visual world.

This may be:

```text
Browser interface
Mobile device composition
Dashboard
Full-bleed product crop
Motion clip
```

---

# 367. Hero Media Entrance

On page load:

```text
Project identity reveals
      ↓
Hero visual rises slightly
      ↓
Visual settles
```

Do not immediately trigger a huge scroll animation.

---

# 368. Case Study Intro Transition

As the hero leaves:

```text
Project title
→ moves upward

Hero media
→ remains dominant briefly

Overview
→ enters underneath
```

---

# 369. Project Overview

The Overview provides concise context.

Recommended layout:

```text
OVERVIEW

The project
[short explanation]

Role
[roles]

Platform
[platform]

Year
[year]
```

---

# 370. Overview Desktop Grid

Example:

```text
OVERVIEW

A mobile product designed to simplify
food discovery, ordering and checkout.

                    ROLE
                    UI/UX
                    Flutter Development

                    PLATFORM
                    Mobile

                    YEAR
                    2026
```

The explanation receives more width than metadata.

---

# 371. Overview Copy Length

Approximately:

```text
50–100 words
```

Maximum.

This keeps the project moving.

---

# 372. Project Context

The next section explains the reason behind the product.

Potential heading:

```text
THE IDEA
```

or:

```text
CONTEXT
```

Avoid forcing:

```text
THE PROBLEM
```

if there was no formal business problem.

---

# 373. Context Structure

Example:

```text
THE IDEA

Food ordering interfaces often become
visually crowded because restaurants,
categories, offers and actions compete
for attention.

This concept explores a calmer hierarchy
that keeps discovery fast without making
the interface feel empty.
```

Specificity is important.

---

# 374. Context Visual

A supporting visual may appear beside or after the context.

Possible:

```text
Early layout
Wireframe
Navigation structure
Initial screen
Design-system fragment
```

Only include genuine process material.

Do not manufacture fake UX artifacts just to make the case study look professional.

---

# 375. Design Direction

This section explains the project's visual language.

Potential topics:

```text
Hierarchy
Typography
Spacing
Color
Image treatment
Navigation
Interaction principles
```

---

# 376. Design Direction Composition

Rather than writing six paragraphs:

```text
DESIGN DIRECTION

CALM
DIRECT
VISUAL

Large interface visual

Small explanation
```

Use design itself to communicate design.

---

# 377. Design Keywords

Three or four words may summarize the direction:

```text
CLEAR

FAST

WARM

FOCUSED
```

These can appear as large typography.

Avoid meaningless buzzwords.

---

# 378. Typography Showcase

If typography plays an important role:

```text
Aa

Primary Typeface

Heading Scale
Body Scale
Numerals
```

may be shown.

But this is optional.

Do not automatically create a fake brand-guideline section for every project.

---

# 379. Color Showcase

Similarly, colors may appear where meaningful.

Prefer:

```text
Large color fields
```

rather than tiny circles with hex codes.

Hex values are unnecessary unless the case study specifically discusses design systems.

---

# 380. Core Experience Section

This section explains the primary user flow.

For the food application:

```text
DISCOVER
↓
EXPLORE
↓
CHOOSE
↓
REVIEW
↓
CHECKOUT
```

This connects directly with the mobile showcase introduced on the homepage.

---

# 381. Flow Presentation

Desktop:

```text
01 DISCOVER       02 EXPLORE       03 CHOOSE
     ↓                 ↓                 ↓
[SCREEN]          [SCREEN]          [SCREEN]

04 REVIEW         05 COMPLETE
     ↓                 ↓
[SCREEN]          [SCREEN]
```

But avoid reducing screens to tiny thumbnails.

Use larger sequential scenes.

---

# 382. Scroll Flow Story

Preferred:

```text
01 DISCOVER

[Large screen]

↓

02 EXPLORE

[Large screen]

↓

03 CHOOSE

[Large screen]
```

Each flow step receives enough visual space.

---

# 383. Alternating Flow Layout

Desktop:

```text
01 DISCOVER

TEXT               SCREEN


02 EXPLORE

SCREEN              TEXT


03 CHOOSE

TEXT               SCREEN
```

This creates natural variation.

---

# 384. Sticky Flow Alternative

For projects where interaction matters:

```text
Sticky visual
+
scrolling flow descriptions
```

may be used.

However, do not automatically use sticky storytelling in every case study.

---

# 385. Case Study Motion Rule

Each project should have:

```text
One signature interaction
```

rather than every project using identical scroll effects.

Examples:

```text
Food App
→ phone screen progression

CV Builder
→ document transformation

Expense Tracker
→ data/dashboard expansion

Portfolio
→ editorial scroll storytelling
```

This gives projects individual character.

---

# 386. Food App Signature Interaction

Potential:

```text
Home screen
      ↓
Restaurant selection
      ↓
Food details
      ↓
Cart
      ↓
Checkout
```

inside one stable device.

This mirrors actual product progression.

---

# 387. CV Builder Signature Interaction

Potential:

```text
Blank document
      ↓
User content enters
      ↓
CV structure forms
      ↓
Final formatted CV appears
```

This communicates the product idea more effectively than random screenshots.

---

# 388. Expense Tracker Signature Interaction

Potential:

```text
Raw transaction list
      ↓
Categorization
      ↓
Dashboard
      ↓
Insight view
```

The interface visually becomes more informative.

---

# 389. Web Project Showcase

Web experiences should receive large browser compositions.

Example:

```text
┌────────────────────────────────────────────────────┐
│                                                    │
│                  WEBSITE UI                        │
│                                                    │
└────────────────────────────────────────────────────┘
```

Use enough width for desktop UI to remain readable.

---

# 390. Website Scroll Simulation

A long website screenshot may move vertically inside a browser frame as the visitor scrolls.

Conceptually:

```text
Browser fixed
      ↓
Website content inside
moves upward
```

This can demonstrate a long page without requiring video.

---

# 391. Scroll Simulation Constraint

Do not force the entire screenshot to scroll slowly for an excessive duration.

The user should still control the page naturally.

---

# 392. Website Section Extraction

Instead of always displaying one enormous screenshot, extract key scenes:

```text
Hero
Project section
Interaction
Mobile adaptation
Final CTA
```

This provides better detail.

---

# 393. Mobile Project Showcase

Mobile products should not only appear as isolated phone mockups.

Use combinations:

```text
Device frame
+
raw UI screens
+
full-bleed crops
+
screen stacks
```

This avoids repetitive device presentation.

---

# 394. Full-Bleed Screen

A mobile interface may be enlarged beyond device proportions:

```text
██████████████████████████
████ MOBILE INTERFACE ████
██████████████████████████
```

to show details.

---

# 395. UI Detail Crop

Important elements can receive dedicated scenes:

```text
Navigation
Search
Product card
Checkout summary
Chart
Editor
```

The crop should explain a design decision.

---

# 396. Full-Width Visual Breaks

Case studies need visual breathing room.

Use occasional:

```text
Full viewport-width image
```

with almost no surrounding text.

This allows the project to speak visually.

---

# 397. Image Rhythm

Avoid:

```text
Image
Image
Image
Image
Image
```

with identical widths.

Instead:

```text
Full width
↓
Text + image
↓
Small detail
↓
Large composition
↓
Whitespace
↓
Full bleed
```

---

# 398. Responsive Design Section

For web projects:

```text
DESKTOP
TABLET
MOBILE
```

should be demonstrated where relevant.

The goal is to show adaptation rather than simply shrinking the same screenshot.

---

# 399. Responsive Composition

Example:

```text
┌───────────────────────────────┐
│          DESKTOP              │
└───────────────────────────────┘

                  ┌────────────┐
                  │   TABLET   │
                  └────────────┘

        ┌───────┐
        │MOBILE │
        └───────┘
```

Different scales create depth.

---

# 400. Responsive Story

Supporting copy may explain:

```text
Navigation changes
Layout reflow
Interaction changes
Content priority
Touch behavior
```

Do not merely say:

```text
"The website is fully responsive."
```

Show what changed.

---

# 401. Motion & Interaction Section

Projects with meaningful interaction may include a dedicated motion scene.

Possible content:

```text
Menu transition
Hover state
Scroll reveal
Screen transition
Drag interaction
Loading state
```

---

# 402. Motion Media

Preferred:

```text
Short optimized video
```

or:

```text
interactive recreation
```

only where necessary.

Static screenshots remain preferred for most of the case study.

---

# 403. Video Behavior

If video is used:

```text
Muted
Looping where appropriate
No controls if purely demonstrative
Lazy loaded
```

Do not autoplay large videos near initial page load.

---

# 404. Interaction Explanation

Keep explanation short.

Example:

```text
Screen transitions preserve spatial
continuity so navigation feels like
movement through one product rather
than loading separate pages.
```

This explains intention.

---

# 405. Technical Implementation Section

Because Novaaacode represents development as well as design, case studies should show technical capability.

However, do not turn the section into GitHub documentation.

---

# 406. Technical Section Heading

Potential:

```text
UNDER THE
INTERFACE.
```

or simply:

```text
BUILD
```

---

# 407. Technical Information

Potential:

```text
FRONTEND
Flutter

BACKEND
Node.js / Express

DATA
PostgreSQL

STATE
Provider / Riverpod / Zustand etc.

MOTION
GSAP / Framer Motion

DEPLOYMENT
Vercel / relevant infrastructure
```

Only include technologies actually used.

---

# 408. Technical Architecture Visual

For projects where architecture matters:

```text
CLIENT
   ↓
API
   ↓
BACKEND
   ↓
DATABASE
```

may be shown as a clean diagram.

But most portfolio visitors do not need a massive architecture diagram.

Keep it high-level.

---

# 409. Technical Decision Story

More useful than listing technologies:

```text
WHY
```

Example:

```text
Location updates are separated from
persistent application data so frequent
real-time updates do not continuously
hit the primary database.
```

This demonstrates engineering thinking.

---

# 410. Technical Depth Toggle

If desired later:

```text
VIEW TECHNICAL DETAILS +
```

may reveal additional engineering information.

This keeps the default case study visually focused.

Optional only.

---

# 411. Code Snippets

Avoid large code blocks inside portfolio case studies unless a specific technical solution is worth explaining.

The portfolio is not developer documentation.

---

# 412. Outcome Section

Not every portfolio project has real business metrics.

Never fabricate:

```text
+42% conversion
10K users
30% engagement increase
```

without actual data.

---

# 413. Outcome Without Metrics

For conceptual or personal projects:

```text
OUTCOME

The project established a complete
mobile ordering flow from discovery
through checkout while maintaining
one consistent interface system.
```

This is sufficient.

---

# 414. Reflection

Optional:

```text
WHAT I'D PUSH FURTHER
```

may briefly discuss future improvements.

This can make the case study feel more genuine.

Example:

```text
The next iteration would explore
personalized recommendations and
stronger restaurant discovery filters.
```

---

# 415. Client Project Outcome

For real client projects, outcomes may include:

```text
Delivered functionality
Released platform
Reduced manual process
User feedback
Actual performance improvements
```

only when verifiable.

---

# 416. Case Study Final Visual

Before leaving the project, provide one final strong visual.

This should feel like the project's closing frame.

Example:

```text
Five product screens
```

or:

```text
Full desktop + mobile composition
```

---

# 417. Project Credits

Near the end:

```text
ROLE
UI/UX
Development

YEAR
2026

TECHNOLOGY
Flutter
Node.js
Express

PROJECT
Personal Concept
```

Credits remain understated.

---

# 418. Live Project CTA

If a live project exists:

```text
VIEW LIVE SITE ↗
```

If not deployed:

Do not display a dead or fake CTA.

---

# 419. Source Code CTA

GitHub links should only appear when the repository is intended to be public.

Potential:

```text
VIEW SOURCE ↗
```

Private client projects should never expose repository links.

---

# 420. Next Project Experience

Case studies should not end with a normal footer immediately.

Instead:

```text
NEXT PROJECT
```

becomes a large transition.

---

# 421. Next Project Composition

Example:

```text
NEXT / 03

SMART
CV BUILDER

WEB PRODUCT

                         ↗
```

A project preview may appear behind or beside the title.

---

# 422. Next Project Hover

Desktop:

```text
Title shifts
Preview image grows
Arrow moves
```

The entire section links to the next project.

---

# 423. Next Project Transition

Potential advanced transition:

```text
Next project preview
       ↓
expands
       ↓
becomes next project's hero
```

This creates continuous browsing.

---

# 424. Final Project Behavior

When the user reaches the final project:

```text
NEXT PROJECT
→ Project 01
```

The archive may loop.

Alternative:

```text
BACK TO WORK INDEX
```

Recommended:

```text
Loop to Project 01
+
small Work Index link
```

---

# 425. Case Study Footer

After or alongside Next Project:

```text
NOVAAACODE
Work
About
Services
Contact
```

The footer remains minimal.

The large next-project interaction should be the primary exit.

---

# 426. Case Study Mobile Hero

Mobile:

```text
02 / MOBILE PRODUCT

FOOD
DELIVERY

A mobile ordering experience
designed around fast discovery
and frictionless checkout.

ROLE
UI/UX + DEVELOPMENT

YEAR
2026

[HERO VISUAL]
```

Everything stacks naturally.

---

# 427. Mobile Case Study Typography

Project titles should remain large but readable.

Manual line breaks should be project-specific.

Avoid shrinking long project titles excessively just to force one line.

---

# 428. Mobile Case Study Metadata

Use:

```text
ROLE
UI/UX + DEVELOPMENT

PLATFORM
MOBILE

YEAR
2026
```

rather than tiny multi-column tables.

---

# 429. Mobile Context Sections

Structure:

```text
THE IDEA

Paragraph

[Visual]

DESIGN DIRECTION

Paragraph

[Visual]
```

Simple vertical flow is preferred.

---

# 430. Mobile UI Screens

A mobile case study may show:

```text
one screen at a time
```

at large scale.

Do not shrink three or four phones side by side.

---

# 431. Mobile Screen Overlap

Occasional:

```text
Primary phone
+
small secondary screen
```

is acceptable.

But interface readability remains the priority.

---

# 432. Mobile Web Screens

For desktop web interfaces on mobile portfolio pages:

Do not simply shrink the entire desktop screenshot until unreadable.

Use:

```text
Full screenshot
+
detail crops
```

so users can inspect the interface.

---

# 433. Mobile Responsive Showcase

When showing responsive web design:

```text
Desktop crop
↓
Tablet
↓
Mobile
```

may be stacked vertically.

This naturally demonstrates adaptation.

---

# 434. Mobile Technical Section

Technology information should remain simple.

Example:

```text
BUILT WITH

Next.js
TypeScript
Node.js
PostgreSQL
```

No horizontally overflowing technology lists.

---

# 435. Mobile Next Project

The final transition becomes:

```text
NEXT PROJECT

03

SMART
CV BUILDER

[PREVIEW]

VIEW PROJECT ↗
```

with a large touch target.

---

# 436. Case Study Reduced Motion

Reduced-motion mode removes:

```text
Pinned scenes
Large parallax
Screen scrubbing
Shared-layout expansion
Cursor effects
```

while preserving:

```text
Content order
Screens
Descriptions
Project navigation
```

---

# 437. Case Study Loading Strategy

Initial priority:

```text
Project title
Hero copy
Hero media
```

Then:

```text
First content visual
```

Then:

```text
Remaining case-study media
```

Next-project media should load late.

---

# 438. Image Loading

Below-fold images:

```text
lazy
```

Images near the viewport may be prefetched strategically.

Avoid loading an entire image-heavy case study on first request.

---

# 439. Case Study Media Optimization

Each asset should have appropriate variants.

Example:

```text
Desktop screenshot
Large

Mobile request
Smaller optimized source
```

Do not send a 3000px image to a 390px viewport without reason.

---

# 440. Case Study Content Width

Body copy should remain readable.

Recommended:

```text
55–75 characters per line
```

approximately.

Visual media may escape the text container and extend much wider.

---

# 441. Reading Rhythm

A strong case study alternates:

```text
READ
↓
SEE
↓
READ
↓
EXPERIENCE
↓
SEE
↓
UNDERSTAND
```

It should not become either:

```text
a wall of text
```

or:

```text
a screenshot dump.
```

---

# 442. Case Study Length

Not every project requires the same length.

Potential:

```text
Featured flagship project
Long

Strong secondary project
Medium

Small experimental project
Short
```

Content determines length.

Do not stretch weak projects to match stronger ones.

---

# 443. Project Schema Flexibility

The project data model should support optional sections such as:

```text
overview
context
designDirection
userFlow
showcase
responsive
motion
technical
outcome
reflection
```

A page renderer can compose only the available sections.

---

# 444. Case Study Template Rule

The underlying system may be reusable.

The visual result should not feel templated.

Shared:

```text
Typography
Spacing
Navigation
Metadata
Footer
Accessibility
```

Variable:

```text
Hero composition
Media layout
Signature interaction
Section order
Background treatment
Showcase style
```

---

# 445. Project-Specific Theme

Each project may define:

```text
accent
background
foreground
mediaBackground
```

These values influence the case study without replacing the global Novaaacode identity.

---

# 446. Project Theme Transition

When entering a project:

```text
Global neutral
↓
Project environment
```

When approaching Next Project:

```text
Current environment
↓
Next project hint
```

This makes case studies feel connected.

---

# 447. Browser Back Behavior

Returning from a case study to `/work` should ideally preserve:

```text
Archive scroll position
```

so users do not restart at the top.

This significantly improves browsing.

---

# 448. Homepage Return Behavior

If a user entered a project from the homepage, standard browser back should naturally return to the same homepage location where possible.

Do not override browser history unnecessarily.

---

# 449. Project Deep Linking

Every case study must have a stable route:

```text
/work/project-slug
```

so it can be:

```text
shared
bookmarked
indexed
linked from social media
```

---

# 450. Project SEO Structure

Each project route should provide:

```text
Unique title
Unique description
Project Open Graph image
Canonical URL
Relevant metadata
```

This lets individual projects function as portfolio landing pages.

---

# 451. Social Share Preview

Each case study should have its own visual preview.

Example:

```text
NOVAAACODE

FOOD DELIVERY
Mobile Product

[Project Visual]
```

This is preferable to using one generic Novaaacode OG image everywhere.

---

# 452. Work Archive SEO

The Work page should contain real project names and descriptions in HTML.

Do not make the archive purely animation-driven or canvas-rendered.

---

# 453. Accessibility — Work Archive

Requirements:

```text
Cursor preview decorative only
Rows keyboard accessible
Focus states visible
Project information readable without hover
Logical DOM order
Touch alternative available
```

---

# 454. Keyboard Archive Interaction

When a project row receives keyboard focus:

```text
same visual emphasis
```

as hover where possible.

The floating preview may appear, but it is not required.

---

# 455. Accessibility — Case Studies

Requirements:

- Correct heading hierarchy.
- Meaningful image alt text.
- Decorative screenshots marked appropriately where duplicated.
- Videos captioned if they contain meaningful audio.
- Motion does not carry exclusive information.
- Interactive demos remain keyboard accessible.
- Reduced-motion behavior exists.
- Text contrast remains sufficient across project themes.

---

# 456. Work Archive Failure Conditions

Reject the implementation if:

```text
The page becomes a generic card grid.

Cursor preview makes titles hard to click.

Project names become secondary to images.

Filters exist with only three projects.

Mobile tries to reproduce cursor interactions.

All projects use identical preview dimensions.

Archive animations slow down navigation.

Projects cannot be opened with keyboard.

The Work page takes longer to understand than the homepage.
```

---

# 457. Case Study Failure Conditions

Reject the implementation if:

```text
Every project uses the exact same template.

The case study becomes mostly marketing copy.

Screenshots are too small to inspect.

Device frames overpower the interface.

Animations delay reading.

Technical sections become documentation dumps.

Fake metrics are introduced.

Fake UX research artifacts are shown.

Mobile is simply a scaled desktop layout.

Projects require scroll effects to understand the story.

Every case study becomes unnecessarily long.
```

---

# 458. Work Archive Desktop Blueprint

```text
NAVIGATION
     │
     ▼
WORK INTRODUCTION
     │
     ▼
PROJECT COUNT
     │
     ▼
PROJECT INDEX
     │
     ├── 01 Portfolio
     │
     ├── 02 Food Delivery
     │
     ├── 03 Smart CV Builder
     │
     ├── 04 Expense Tracker
     │
     ├── 05 Appointment Manager
     │
     └── 06 Buy & Sell
     │
     │
     └── Hover → Floating Preview
     │
     ▼
CONTACT TRANSITION
     │
     ▼
FOOTER
```

---

# 459. Work Archive Mobile Blueprint

```text
WORK
 │
 ▼
INTRO
 │
 ▼
01
PROJECT
[IMAGE]
 │
 ▼
02
PROJECT
[IMAGE]
 │
 ▼
03
PROJECT
[IMAGE]
 │
 ▼
...
 │
 ▼
CONTACT CTA
 │
 ▼
FOOTER
```

---

# 460. Case Study Desktop Blueprint

```text
PROJECT IDENTITY
       │
       ▼
LARGE HERO MEDIA
       │
       ▼
OVERVIEW
       │
       ▼
CONTEXT
       │
       ▼
DESIGN DIRECTION
       │
       ▼
SIGNATURE INTERACTION
       │
       ▼
CORE PRODUCT FLOW
       │
       ▼
FULL-BLEED SHOWCASE
       │
       ▼
INTERFACE DETAILS
       │
       ▼
RESPONSIVE EXPERIENCE
       │
       ▼
MOTION / INTERACTION
       │
       ▼
TECHNICAL IMPLEMENTATION
       │
       ▼
OUTCOME / REFLECTION
       │
       ▼
FINAL VISUAL
       │
       ▼
PROJECT CREDITS
       │
       ▼
NEXT PROJECT
       │
       ▼
FOOTER
```

---

# 461. Case Study Mobile Blueprint

```text
PROJECT IDENTITY
       │
       ▼
HERO VISUAL
       │
       ▼
OVERVIEW
       │
       ▼
THE IDEA
       │
       ▼
VISUAL
       │
       ▼
DESIGN DIRECTION
       │
       ▼
VISUAL
       │
       ▼
PRODUCT FLOW
       │
       ▼
SCREEN 01
       │
       ▼
SCREEN 02
       │
       ▼
SCREEN 03
       │
       ▼
RESPONSIVE / DETAILS
       │
       ▼
BUILD
       │
       ▼
OUTCOME
       │
       ▼
NEXT PROJECT
```

---

# 462. Part 5 Experience Decisions

| Experience Area | Decision |
|---|---|
| `/work` dedicated archive | Locked |
| Generic project card grid | Rejected |
| Large typographic project index | Locked |
| Cursor-follow previews | Locked desktop |
| Preview inertia | Approved |
| Project-specific preview ratios | Approved |
| Whole archive row clickable | Locked |
| Shared archive → project transition | Optional advanced |
| Simple transition fallback | Required |
| Filters with few projects | Rejected |
| Typography-based filters | Approved when needed |
| Optional alternative grid | Future enhancement |
| Mobile archive as project feed | Locked |
| Cursor effects on mobile | Rejected |
| Dedicated `/work/[slug]` pages | Locked |
| Large project hero | Locked |
| Concise project overview | Locked |
| Project-specific case study structure | Locked |
| Fake challenge/problem narratives | Rejected |
| Fake UX artifacts | Rejected |
| Signature interaction per major project | Locked |
| Food app product-flow interaction | Approved |
| CV Builder transformation interaction | Approved |
| Expense Tracker data transformation | Approved |
| Large browser compositions | Locked for web projects |
| Full-bleed UI | Approved |
| Responsive showcase | Locked where applicable |
| Technical implementation section | Locked |
| Technology badge cloud | Rejected |
| Technical decision explanations | Approved |
| Fake project metrics | Strictly rejected |
| Outcome without metrics | Approved |
| Reflection section | Optional |
| Live-project CTA | Only when real |
| Public source CTA | Only when repository is public |
| Large Next Project transition | Locked |
| Project-to-project continuity | Locked |
| Stable project deep links | Locked |
| Unique project SEO metadata | Required |
| Per-project social preview | Required |
| Preserve archive position | Recommended |
| Reduced-motion experience | Mandatory |
| Mobile case-study reconstruction | Mandatory |

---

# End of Volume 3 — Part 5

## Next — Part 6: About, Services, Contact & Footer Experience

Part 6 will define the remaining major pages and the **conversion side of Novaaacode**:

```text
/about
/services
/contact
```

including:

```text
ABOUT
→ How to introduce you without the generic
  "Hi, I'm Ahmad, a passionate developer..." layout

SERVICES
→ How to present web development,
  mobile development, UI/UX and product
  engineering without service cards

CONTACT
→ A premium project inquiry experience
→ What do you need?
→ Web / Mobile / UI
→ Project scope
→ Budget
→ Timeline
→ Contact details
→ Form interactions
→ Validation
→ Success/error states

FINAL HOMEPAGE CTA
→ The big ending of the homepage

FOOTER
→ Minimal global footer
→ Navigation
→ Social presence
→ Availability
→ Copyright

PLUS
→ Desktop compositions
→ Mobile reconstruction
→ Motion behavior
→ Page entrances/exits
→ Accessibility
```

After Part 6, we'll have **only Part 7 left**, which ties the whole experience together with the final responsive rules, page transitions, loading behavior, global motion choreography and complete Volume 3 UX blueprint.