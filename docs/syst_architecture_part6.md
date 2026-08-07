# Volume 2 — System Architecture

## Part 6 — Accessibility, SEO, Reliability, Testing & Security Architecture

---

# 308. Production Quality Objective

Although Novaaacode is primarily a portfolio experience, it shall follow production-grade engineering practices.

Visual sophistication must not come at the expense of:

- Accessibility
- Search discoverability
- Reliability
- Browser compatibility
- Security
- Maintainability
- Testability

The architecture therefore treats these concerns as foundational rather than post-development cleanup.

---

# 309. Accessibility Architecture

Accessibility shall exist across four layers:

```text
SEMANTICS
    ↓
INTERACTION
    ↓
VISUAL ACCESSIBILITY
    ↓
MOTION ACCESSIBILITY
```

A visitor should be able to understand and navigate the portfolio even when the enhanced visual experience is unavailable.

---

# 310. Semantic HTML

Native semantic elements should be preferred.

Use:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<button>
<a>
```

rather than excessive:

```html
<div>
```

with manually recreated semantics.

---

# 311. Semantic Component Rule

Reusable components must preserve correct HTML semantics.

For example:

```tsx
<Button />
```

should normally produce:

```html
<button>
```

while:

```tsx
<Link />
```

should produce:

```html
<a>
```

A clickable `<div>` should not replace either.

---

# 312. Heading Architecture

Every route should maintain a logical heading hierarchy.

Conceptually:

```text
H1 — Page identity

    H2 — Major section

        H3 — Subsection

        H3 — Subsection

    H2 — Major section
```

Typography size and semantic level are separate concerns.

A visually small label may still accompany an `h2`.

---

# 313. Homepage Heading

The homepage should contain one primary `h1`.

Example conceptual structure:

```text
H1
Digital experiences built with intention.

H2
Selected Work

H2
Capabilities

H2
Process

H2
Let's build something.
```

Do not use headings purely for styling.

---

# 314. Keyboard Navigation

Every interactive feature must support keyboard navigation where applicable.

Users must be able to reach:

- Navigation
- Menu trigger
- Project links
- CTA buttons
- Contact links
- Interactive gallery controls

using the keyboard.

---

# 315. Focus Visibility

Keyboard focus must remain visible.

Do not globally use:

```css
outline: none;
```

without an accessible replacement.

Focus styling should align with the Novaaacode visual system.

It may be subtle, but it must remain obvious.

---

# 316. Focus Style Architecture

A shared focus token should exist.

Conceptually:

```text
Focus Ring
│
├── Width
├── Offset
├── Color
└── Radius
```

This prevents inconsistent focus styling across components.

---

# 317. Mobile Menu Focus Management

When the mobile navigation opens:

```text
Menu Trigger
     ↓
Overlay Opens
     ↓
Focus enters menu
     ↓
User navigates within overlay
```

When closed:

```text
Overlay closes
     ↓
Focus returns to menu trigger
```

Keyboard focus must not disappear behind the overlay.

---

# 318. Escape Key Behavior

Full-screen overlays and modal-style interfaces should close when:

```text
Escape
```

is pressed where expected.

---

# 319. Skip Navigation

The site should provide a visually unobtrusive:

```text
Skip to content
```

link for keyboard users.

It may remain hidden until focused.

---

# 320. Image Accessibility

Every meaningful image requires appropriate alternative text.

Example:

```text
"Restaurant discovery screen from the food delivery mobile application."
```

Avoid:

```text
"image"
"project screenshot"
"picture"
```

---

# 321. Decorative Images

Purely decorative imagery should use:

```html
alt=""
```

where appropriate.

Screen readers should not be forced to hear descriptions of visual decoration.

---

# 322. Project Screenshot Alt Strategy

Alt text should describe what is important about the visual.

Example:

```text
"Mobile checkout screen showing delivery address, payment method and order summary."
```

This is more useful than:

```text
"Food app image."
```

---

# 323. SVG Accessibility

Decorative SVGs should be hidden from assistive technology.

Meaningful icons should receive accessible context.

Icon-only buttons require accessible labels.

Example:

```tsx
<button aria-label="Open navigation">
```

---

# 324. Link Clarity

Avoid ambiguous links such as:

```text
Click here
Learn more
Read more
```

when context is insufficient.

Prefer:

```text
View Food Delivery case study
Explore the project
```

Visual text may remain concise while accessible labels provide additional context.

---

# 325. Color Contrast

Text and interactive elements must maintain sufficient contrast.

Target:

```text
WCAG AA
```

especially for:

- Body copy
- Navigation
- Buttons
- Metadata
- Form elements
- Focus states

---

# 326. Low-Contrast Design Constraint

Premium minimalism must not become:

```text
light grey text
on
slightly lighter grey background
```

just because it looks aesthetically subtle.

Readability takes priority.

---

# 327. Text Size Accessibility

Body text should remain comfortably readable.

Avoid extremely small:

```text
10px
11px
```

text for important information.

Small typography may be used for decorative metadata only when contrast and readability remain acceptable.

---

# 328. Motion Accessibility

The motion architecture defined in Part 4 must respect:

```css
prefers-reduced-motion: reduce;
```

This affects:

- Parallax
- Scrubbing
- Floating
- Horizontal scroll conversion
- Large transformations
- Cursor effects
- Magnetic interactions

---

# 329. Reduced Motion Layout

Reduced motion should not simply set:

```css
animation-duration: 0;
```

on everything.

Complex layouts may require alternative presentation.

Example:

```text
Normal

Sticky phone
+
scrolling content

Reduced Motion

Phone
↓
content
↓
next visual
↓
content
```

---

# 330. Accessibility Testing

Accessibility testing should include:

```text
Automated testing
+
Keyboard testing
+
Manual inspection
```

Automated tools alone are insufficient.

---

# 331. SEO Architecture Objective

The website should remain discoverable even though social media and direct referrals may initially generate most visitors.

SEO architecture should support:

- Brand discovery
- Service discovery
- Project indexing
- Search result quality
- Social sharing

---

# 332. SEO Layer Architecture

```text
SEO
│
├── Technical SEO
├── Metadata
├── Content Structure
├── Social Metadata
├── Sitemap
├── Robots
└── Structured Data
```

---

# 333. Metadata Architecture

Each major route should define:

```text
Title
Description
Canonical URL
Open Graph
Social preview
```

Example:

```text
Novaaacode — Digital Product Design & Development
```

rather than:

```text
Home
```

---

# 334. Metadata Configuration

Shared metadata should originate from:

```text
src/config/site.ts
```

Route-specific metadata should extend the global configuration.

---

# 335. Root Metadata

Conceptually:

```ts
export const metadata = {
  title: {
    default: "Novaaacode",
    template: "%s — Novaaacode",
  },
  description:
    "Digital products designed and developed with intention.",
};
```

Exact copy will be finalized during content design.

---

# 336. Project Metadata

Every case study should generate metadata from project data.

Conceptually:

```text
Project
   ↓
title
summary
hero image
slug
   ↓
generateMetadata()
```

Example:

```text
Food Delivery App — Novaaacode
```

---

# 337. Open Graph Architecture

Project pages should have shareable visual previews.

Each project may define:

```text
ogImage
```

within project data.

Recommended social preview ratio:

```text
1200 × 630
```

---

# 338. Social Sharing Quality

A shared project link should display:

- Project title
- Short description
- Strong preview image
- Novaaacode branding

This turns every case study into a shareable marketing asset.

---

# 339. Sitemap Architecture

The application should generate a sitemap containing:

```text
/
/work
/about
/services
/contact

/work/project-a
/work/project-b
/work/project-c
```

Project routes should be derived from the project data source.

---

# 340. Robots Architecture

Production should provide an appropriate `robots.txt`.

During unfinished/private development, indexing may be disabled.

Before public deployment:

```text
Indexing
→ explicitly reviewed
→ enabled
```

Never accidentally ship `noindex` to production.

---

# 341. Semantic SEO

SEO should emerge naturally from semantic content.

Avoid:

- Keyword stuffing
- Hidden text
- Repetitive headings
- Artificial service pages
- SEO paragraphs that damage the design

The portfolio should remain human-first.

---

# 342. Structured Data

Optional structured data may describe:

```text
Organization / ProfessionalService
WebSite
CreativeWork
```

depending on final business positioning.

Structured data should only represent information actually present on the website.

---

# 343. URL Architecture

URLs should remain clean.

Preferred:

```text
/work/food-delivery-app
/work/expense-tracker
/about
/contact
```

Avoid:

```text
/project?id=127
/work/project-final-v2
```

---

# 344. Slug Stability

Once deployed and indexed, project slugs should remain stable.

If changed later, redirects should be introduced.

---

# 345. Reliability Architecture

A portfolio has limited business logic, but failure states still exist.

Potential failures include:

- Missing images
- Missing project
- Broken links
- Failed video
- JavaScript failure
- Animation initialization failure
- Unsupported browser behavior

Each should degrade gracefully.

---

# 346. Reliability Principle

The hierarchy is:

```text
CONTENT
must work.

NAVIGATION
must work.

LAYOUT
must work.

INTERACTION
should work.

MOTION
enhances everything.
```

If the motion layer fails, the first three must remain operational.

---

# 347. 404 Architecture

Unknown routes should render a custom `not-found.tsx`.

The 404 page should:

- Maintain brand styling
- Explain the page is unavailable
- Provide route back to work/home
- Avoid unnecessary complexity

---

# 348. Missing Project Handling

For:

```text
/work/nonexistent-project
```

the project lookup should trigger:

```ts
notFound();
```

Do not render an empty project template.

---

# 349. Media Failure

If optional video fails:

```text
Poster image remains
```

If a critical image fails:

- Layout remains stable.
- Alternative content remains understandable.
- Browser broken-image artifacts should be avoided where practical.

---

# 350. JavaScript Failure

Essential content must remain server-rendered.

Therefore a client-side runtime failure should not produce:

```text
Blank Website
```

This is another reason to preserve narrow Client Component boundaries.

---

# 351. Animation Failure

If a complex GSAP timeline cannot initialize:

```text
Final readable state
```

should be preferred over invisible content.

---

# 352. Error Logging

Because Version 1 is static, complex observability infrastructure is unnecessary.

During development:

```text
console.error
development warnings
framework errors
```

are sufficient.

If publicly deployed and actively used for client acquisition, lightweight error monitoring may later be introduced.

---

# 353. Testing Architecture

Testing shall follow a risk-based strategy.

The goal is not maximum test count.

The goal is confidence.

Architecture:

```text
STATIC ANALYSIS
      ↓
UNIT TESTS
      ↓
COMPONENT TESTS
      ↓
INTEGRATION TESTS
      ↓
E2E TESTS
      ↓
VISUAL / MANUAL QA
```

---

# 354. Static Analysis

Every build should verify:

```text
TypeScript
ESLint
Next.js build
```

Type errors should not be ignored.

---

# 355. TypeScript Strictness

Use strict TypeScript where practical.

Avoid:

```ts
any
```

unless justified.

Project content, component props and configuration should remain strongly typed.

---

# 356. Linting

Linting should enforce code-quality rules without becoming unnecessarily restrictive.

Important concerns:

- React correctness
- Hook correctness
- Accessibility
- Dead code
- Import quality

---

# 357. Formatting

One consistent formatter should be used.

Code formatting should never consume development discussion.

Consistency should be automatic.

---

# 358. Unit Testing Scope

Unit tests should focus on logic.

Potential targets:

```text
getProjectBySlug()
project ordering
metadata helpers
URL helpers
content transformation
```

Do not unit-test static JSX merely to increase coverage.

---

# 359. Component Testing

High-value components may receive interaction tests.

Examples:

- Navbar
- Mobile menu
- Project navigation
- Gallery controls
- CTA interactions

Test behavior rather than internal implementation.

---

# 360. Motion Testing Philosophy

Automated tests should not attempt to prove that an animation "looks premium."

Instead test:

- Element becomes available.
- Reduced-motion branch works.
- Trigger does not break interaction.
- Navigation remains usable.

Visual motion quality requires human review.

---

# 361. E2E Architecture

A lightweight E2E suite should verify critical visitor journeys.

Potential framework:

```text
Playwright
```

Recommended flows:

```text
Homepage → Work
Homepage → Featured Project
Work → Project
Project → Next Project
Navigation → About
Navigation → Contact
Mobile Menu → Project
```

---

# 362. Primary E2E Journey

```text
Visitor
   ↓
Homepage
   ↓
Views featured work
   ↓
Opens case study
   ↓
Explores project
   ↓
Navigates to contact
```

This is the most important conversion journey.

It should never break.

---

# 363. Responsive E2E Testing

Critical flows should run against at least:

```text
Desktop viewport
Mobile viewport
```

Not every visual breakpoint needs full E2E duplication.

---

# 364. Visual Regression

Optional screenshot testing may be introduced for:

- Homepage
- Navigation
- Project hero
- Contact section

This becomes valuable because highly designed interfaces can be broken by small CSS changes.

---

# 365. Visual Regression Constraint

Animation must be stabilized or disabled during screenshot tests.

Otherwise transient animation states will create false failures.

---

# 366. Manual Visual QA

Manual review remains mandatory.

Review:

- Typography
- Spacing
- Alignment
- Motion timing
- Hover behavior
- Scroll rhythm
- Media quality
- Responsive transitions

Automated tests cannot replace design review.

---

# 367. Browser Testing Matrix

Minimum target:

```text
Chrome
Safari
Firefox
Edge
Mobile Safari
Chrome Android
```

Primary emphasis:

```text
Chrome
Safari
Mobile Safari
```

because motion-heavy behavior frequently exposes browser differences.

---

# 368. Safari Testing

Specifically verify:

- Sticky positioning
- Overflow clipping
- Blur
- Clip-path
- ScrollTrigger
- Viewport units
- Fixed navigation
- Videos
- Font rendering

---

# 369. Test Environment Philosophy

Development should test:

```text
Ideal conditions
+
Realistic conditions
+
Degraded conditions
```

Examples:

```text
Fast desktop
Real phone
Slow network
Reduced motion
Keyboard-only
Small viewport
```

---

# 370. Security Architecture Objective

The attack surface of Version 1 is intentionally small because there is:

- No authentication
- No database
- No backend
- No payment system
- No user-generated content

Nevertheless, baseline web security practices remain required.

---

# 371. Security Surface

Primary concerns:

```text
Dependencies
External links
Headers
Third-party scripts
Future contact functionality
Deployment configuration
```

---

# 372. Dependency Security

Dependencies should remain:

- Minimal
- Maintained
- Purposeful
- Updated

Do not install random packages copied from tutorials.

---

# 373. Dependency Review

Before adding a dependency evaluate:

```text
Maintenance
Popularity
Bundle impact
Security history
Necessity
Alternatives
```

A five-line utility does not justify a 100 KB dependency.

---

# 374. External Link Security

Links opened in a new tab should use appropriate security attributes where required.

Example:

```html
rel="noopener noreferrer"
```

---

# 375. Content Security Policy

A Content Security Policy may be introduced for deployment.

It should account for:

- Self-hosted assets
- Fonts
- Images
- Analytics if added
- Required scripts

Avoid overly broad directives such as unrestricted:

```text
*
```

---

# 376. Security Headers

Production deployment should consider headers including:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Frame restrictions should be configured based on whether embedding is required.

---

# 377. HTTPS

Production deployment must use HTTPS.

Modern hosting platforms typically provide this automatically.

No production content should be served over insecure HTTP.

---

# 378. Secrets Architecture

Version 1 should require few or no secrets.

If environment variables are later introduced:

```text
.env.local
```

must never be committed.

Public variables should only contain information safe to expose to the browser.

---

# 379. Contact Security

If a real contact form is introduced later, it becomes a server boundary.

At that point architecture must address:

- Validation
- Sanitization
- Rate limiting
- Spam prevention
- Email abuse
- CSRF considerations where applicable

This is outside the current V1 scope.

---

# 380. No Fake Backend

Do not introduce insecure client-side API credentials simply to make the static portfolio appear functional.

Secrets must never be embedded into frontend JavaScript.

---

# 381. Third-Party Script Security

Any future:

- Analytics
- Chat
- Scheduling
- Embedded content

should be reviewed before integration.

Every external script introduces:

```text
Performance cost
+
Privacy considerations
+
Security surface
```

---

# 382. Privacy Architecture

Version 1 should collect as little user information as possible.

If no analytics or forms are used:

```text
Data collection ≈ none
```

This is architecturally desirable.

---

# 383. Analytics Future Strategy

If analytics are later required, prefer privacy-conscious lightweight analytics where business requirements permit.

Track meaningful events such as:

```text
Project opened
Contact CTA clicked
External profile opened
```

Avoid collecting data merely because it is available.

---

# 384. Build Reliability

A production build must fail when critical technical errors exist.

Required gate:

```text
Type Check
    ↓
Lint
    ↓
Tests
    ↓
Production Build
```

Deployment should only proceed after successful completion.

---

# 385. CI Architecture

If the repository is hosted on GitHub, future CI may follow:

```text
Push / Pull Request
        ↓
Install
        ↓
Type Check
        ↓
Lint
        ↓
Tests
        ↓
Build
```

This is sufficient for the project's scale.

---

# 386. Branch Strategy

For a solo-development portfolio, avoid unnecessary Git complexity.

Recommended:

```text
main
│
└── feature branches when useful
```

A GitFlow-style environment is unnecessary.

---

# 387. Commit Quality

Commits should describe meaningful changes.

Preferred:

```text
feat: add featured project scroll composition
fix: prevent mobile navigation overflow
perf: optimize portfolio hero assets
refactor: isolate GSAP project timeline
```

Avoid:

```text
update
changes
final
final2
working now
```

---

# 388. Release Gate

Before a release candidate:

```text
TYPE CHECK
     ↓
LINT
     ↓
TESTS
     ↓
BUILD
     ↓
ACCESSIBILITY REVIEW
     ↓
PERFORMANCE REVIEW
     ↓
RESPONSIVE QA
     ↓
BROWSER QA
     ↓
CONTENT REVIEW
     ↓
RELEASE
```

---

# 389. Accessibility Quality Gate

Release fails if:

- Keyboard navigation is broken.
- Focus disappears.
- Essential information requires hover.
- Reduced motion is ignored.
- Important images lack suitable alt text.
- Contrast makes important content difficult to read.
- Mobile menu focus becomes trapped incorrectly.

---

# 390. SEO Quality Gate

Before public deployment verify:

- Page titles
- Descriptions
- Canonical URLs
- Open Graph
- Sitemap
- Robots
- Project metadata
- Heading structure
- Indexing configuration

---

# 391. Reliability Quality Gate

Release fails if:

- Unknown projects crash.
- Missing optional media destroys layout.
- GSAP failure hides content.
- Navigation fails without advanced motion.
- Page transitions create stuck states.
- Browser back navigation behaves incorrectly.

---

# 392. Testing Quality Gate

Critical user journeys must pass.

At minimum:

```text
Home
→ Work
→ Project
→ Contact
```

and:

```text
Mobile Menu
→ Route
→ Close / Navigate
```

---

# 393. Security Quality Gate

Before public deployment verify:

- No secrets committed.
- No private API credentials shipped.
- Dependencies reviewed.
- HTTPS enabled.
- External links safe.
- Security headers considered.
- Unnecessary third-party scripts removed.

---

# 394. Definition of Technical Reliability

Novaaacode shall be considered technically reliable when:

> A failure in an enhancement does not cause a failure in the core experience.

Examples:

```text
Parallax fails
→ Project remains visible.

Video fails
→ Poster remains visible.

Custom cursor fails
→ Native cursor works.

GSAP fails
→ Content remains readable.

JavaScript partially fails
→ Server-rendered content remains available.
```

---

# 395. Progressive Enhancement Blueprint

```text
                    CORE DOCUMENT
                         │
                         ▼
                   SEMANTIC HTML
                         │
                         ▼
                   RESPONSIVE CSS
                         │
                         ▼
                  CORE NAVIGATION
                         │
                         ▼
                   CLIENT UI
                         │
                         ▼
                  FRAMER MOTION
                         │
                         ▼
                  GSAP / SCROLL
                         │
                         ▼
               OPTIONAL ENHANCEMENTS
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼

           Cursor     Parallax    Magnetic
```

Every layer above the core may disappear without destroying the layers below it.

---

# 396. Quality Architecture Blueprint

```text
                         NOVAAACODE
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼

 ACCESSIBILITY               SEO                RELIABILITY
        │                     │                     │
 Semantic HTML             Metadata              Fallbacks
 Keyboard                  Sitemap               404
 Focus                     OG                    Media Safety
 Reduced Motion            Structure             Motion Safety
 Contrast                  URLs                  JS Safety

        └─────────────────────┼─────────────────────┘
                              ▼

                           TESTING
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼

         Static          Automated          Manual QA
        Analysis            Tests
            │                 │                 │
            ▼                 ▼                 ▼

      TypeScript          Unit/E2E          Design Review
      ESLint              Playwright        Browser QA

                              │
                              ▼

                           SECURITY
                              │
                Dependencies / Headers
                  HTTPS / No Secrets

                              │
                              ▼

                        RELEASE GATE
```

---

# 397. Part 6 Architecture Decision Summary

| Decision | Status |
|---|---|
| Semantic HTML | Mandatory |
| WCAG AA target | Locked |
| Keyboard navigation | Mandatory |
| Visible focus | Mandatory |
| Skip navigation | Approved |
| Reduced-motion experience | Mandatory |
| Meaningful image alt text | Mandatory |
| Hover-only functionality | Rejected |
| Route metadata | Mandatory |
| Project Open Graph | Approved |
| Dynamic sitemap | Approved |
| Clean URLs | Locked |
| Custom 404 | Mandatory |
| Motion failure fallback | Mandatory |
| TypeScript strictness | Approved |
| ESLint | Approved |
| Unit testing | Selective |
| Component testing | Selective |
| Playwright E2E | Recommended |
| Visual regression | Optional |
| Manual visual QA | Mandatory |
| Safari QA | Mandatory |
| Minimal dependency surface | Locked |
| HTTPS | Mandatory for deployment |
| Secrets in frontend | Prohibited |
| CSP/security headers | Deployment consideration |
| Heavy observability | Rejected for V1 |
| CI pipeline | Recommended |
| Simple Git strategy | Locked |
| Production quality gates | Mandatory |

---

# End of Volume 2 — Part 6

**Next: Part 7 — Build Architecture, Deployment, Scalability, Architecture Decision Records & Final System Blueprint**