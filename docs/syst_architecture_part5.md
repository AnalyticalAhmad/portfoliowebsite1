# Volume 2 — System Architecture

## Part 5 — Responsive Architecture, Performance Engineering & Asset Pipeline

---

# 213. Responsive Architecture Objective

Responsive design for Novaaacode shall not mean shrinking the desktop website until it fits on a smaller screen.

Each device class shall receive an intentionally designed version of the same experience.

The architecture therefore follows:

> Same brand. Same content. Same story. Different choreography.

Desktop may prioritize cinematic storytelling.

Mobile must prioritize clarity, touch interaction and performance.

---

# 214. Responsive Experience Model

The system shall recognize three primary experience classes:

```text
DESKTOP
│
├── Full compositions
├── Advanced scroll choreography
├── Pointer interactions
├── Horizontal storytelling
└── Layered parallax

TABLET
│
├── Adapted compositions
├── Reduced choreography
├── Touch-first interaction
└── Moderate motion

MOBILE
│
├── Reconstructed layouts
├── Linear storytelling
├── Lightweight motion
├── Touch-first navigation
└── Performance priority
```

Responsive behavior therefore operates at both:

```text
Layout Level
+
Experience Level
```

---

# 215. Breakpoint Philosophy

Breakpoints should represent moments where the composition stops working rather than arbitrary device names.

Conceptually:

```text
Mobile
< 640px

Large Mobile / Small Tablet
640–767px

Tablet
768–1023px

Desktop
1024–1439px

Large Desktop
1440px+

Ultra Wide
1920px+
```

Exact breakpoints shall align with the final design system.

---

# 216. Breakpoint Rule

Do not design exclusively for:

```text
375px
768px
1440px
```

and assume everything between those widths works.

Layouts must be tested continuously between breakpoints.

Important intermediate widths include:

```text
390
430
820
1024
1280
1366
1440
1728
1920
```

---

# 217. Fluid Layout Architecture

Where possible, layout properties should scale fluidly.

Examples:

```css
font-size: clamp(...);
padding: clamp(...);
gap: clamp(...);
```

This reduces abrupt breakpoint transitions.

---

# 218. Fluid Typography

Large display typography should use fluid scaling.

Conceptually:

```css
font-size: clamp(3rem, 8vw, 9rem);
```

The exact values will be defined in Volume 4.

This allows headlines to retain visual presence without overflowing smaller screens.

---

# 219. Fluid Spacing

Section spacing should also adapt.

Example:

```text
Mobile
80–110px

Tablet
110–150px

Desktop
140–220px
```

These are conceptual ranges.

Exact spacing tokens belong to the Design System.

---

# 220. Mobile-First CSS Strategy

Base CSS should represent the simplest layout.

Complexity should progressively increase.

Conceptually:

```text
BASE
Mobile layout

      ↓

md:
Tablet enhancements

      ↓

lg:
Desktop composition

      ↓

xl:
Large desktop refinement
```

This prevents desktop assumptions from leaking into mobile layouts.

---

# 221. Responsive Composition Strategy

Each composition must explicitly define:

```text
Desktop Behavior
Tablet Behavior
Mobile Behavior
```

Example:

### Featured Project Story

Desktop:

```text
Sticky visual
+
Scrolling narrative
```

Tablet:

```text
Reduced sticky duration
+
Simplified transitions
```

Mobile:

```text
Visual
↓
Narrative
↓
Visual
↓
Narrative
```

---

# 222. Structural Responsiveness

CSS should handle normal layout changes.

Example:

```text
Desktop

TEXT       IMAGE

Mobile

TEXT
IMAGE
```

However, when motion behavior fundamentally changes, separate composition implementations may be justified.

---

# 223. Responsive Component Decision

Use separate implementations only when:

- DOM structure must fundamentally change.
- Animation architecture differs significantly.
- Desktop implementation would create unnecessary mobile complexity.

Do not duplicate entire components simply because grid columns change.

---

# 224. Mobile Content Priority

Mobile layouts should preserve content hierarchy.

Priority:

```text
1. Project
2. Headline
3. Core description
4. Primary visual
5. CTA
6. Supporting information
7. Decorative elements
```

Decorative elements should disappear first when space becomes constrained.

---

# 225. Touch Architecture

Interactive targets must remain comfortable for touch.

Minimum conceptual target:

```text
44 × 44px
```

Small visual icons may remain smaller while their interactive hit areas are larger.

---

# 226. Hover Dependency Rule

No essential functionality may depend on hover.

Desktop:

```text
Hover → preview appears
```

Mobile must provide equivalent information through:

```text
Visible state
or
Tap interaction
```

---

# 227. Mobile Navigation Architecture

Mobile navigation should use a dedicated overlay experience.

Requirements:

- Large tap targets
- Clear close action
- No nested navigation
- Body scroll locking
- Keyboard accessibility
- Focus management
- Fast entrance/exit

---

# 228. Mobile Typography Constraint

Large editorial typography must remain readable.

Avoid headlines that produce:

```text
A
W
K
W
A
R
D
```

single-character wrapping.

Manual line breaks may be defined where art direction requires them.

---

# 229. Landscape Mobile

Landscape orientation should not be ignored.

Potential problems include:

- Hero height
- Sticky sections
- Full-screen menu
- Viewport units
- Large headings

Use modern viewport units where appropriate:

```text
svh
dvh
lvh
```

rather than blindly relying on `100vh`.

---

# 230. Ultra-Wide Architecture

The design should not stretch indefinitely.

At very large widths:

```text
Content width remains controlled
+
Whitespace increases
```

Project visuals may expand more aggressively than text content.

---

# 231. Performance Philosophy

Performance is part of the visual design.

A beautiful animation that drops frames is not premium.

A high-resolution image that takes several seconds to appear is not premium.

A cinematic transition that delays navigation is not premium.

Therefore:

> Perceived quality includes responsiveness.

---

# 232. Performance Objectives

Primary targets:

```text
LCP ≤ 2.5 seconds

INP ≤ 200 ms

CLS ≤ 0.1
```

These represent Core Web Vitals quality targets.

The implementation should aim to comfortably remain inside them rather than barely passing.

---

# 233. Lighthouse Target

Target:

```text
Performance      90+
Accessibility    95+
Best Practices   95+
SEO              95+
```

The original PRD target of 95+ performance remains aspirational.

Motion quality should not be artificially reduced simply to chase a synthetic score when real-world performance remains excellent.

---

# 234. Performance Budget

Initial production budget:

```text
Initial JS:
Keep as small as practical.

Hero media:
Prefer < 500 KB where quality permits.

Normal project image:
Prefer < 300 KB.

Large showcase image:
Prefer < 600 KB.

Fonts:
Minimize families and weights.

Video:
Never preload large decorative videos unnecessarily.
```

These are budgets rather than absolute limits.

---

# 235. JavaScript Budget Philosophy

The application should ship JavaScript only for actual interaction.

Static content should remain server-rendered wherever possible.

Architecture:

```text
Server Component
        ↓
HTML

Interactive Island
        ↓
Client JavaScript
```

Do not hydrate entire pages because one child needs motion.

---

# 236. Client Component Budget

Client boundaries should remain narrow.

Bad:

```tsx
"use client";

export default function EntireHomepage() {}
```

Preferred:

```text
Server Homepage
│
├── Static Content
├── Static Content
├── Motion Composition [CLIENT]
├── Static Content
└── Navigation [CLIENT]
```

---

# 237. Dependency Budget

Every dependency increases:

- Bundle size
- Upgrade burden
- Potential security surface
- Build complexity

Core dependencies should remain limited.

Expected:

```text
next
react
react-dom
framer-motion
gsap
```

Potential:

```text
lenis
clsx
tailwind-merge
icon library
```

Everything else requires justification.

---

# 238. Tree-Shaking Strategy

Libraries should be imported selectively where supported.

Avoid importing enormous utility libraries for one helper function.

Prefer native JavaScript where implementation remains clear.

---

# 239. Dynamic Import Strategy

Heavy client-only experiences may be dynamically imported where appropriate.

Potential candidates:

- Complex interactive showcase
- Optional cursor system
- Heavy visual experiment

However, dynamic loading must not create distracting visual popping.

---

# 240. Route-Level Code Splitting

Next.js route boundaries should naturally prevent project case-study code from unnecessarily loading on unrelated pages.

Custom project compositions should remain route-specific where possible.

---

# 241. GSAP Loading Strategy

GSAP should only be present where required.

Do not initialize global timelines for sections that are not mounted.

ScrollTrigger logic remains local to owning compositions.

---

# 242. Framer Motion Usage Strategy

Framer Motion should not wrap every element.

Use it where:

- Animation requires React state.
- Presence animation is needed.
- Reusable reveal behavior is valuable.
- Layout transition behavior is required.

Use CSS for simple interactions.

---

# 243. Image Architecture

Images are expected to be the largest content payload.

Therefore image optimization is a major architectural concern.

Primary pipeline:

```text
SOURCE IMAGE
     ↓
Crop / Prepare
     ↓
Resize
     ↓
Compress
     ↓
Convert
     ↓
Responsive Delivery
     ↓
Next/Image
```

---

# 244. Image Format Priority

Preferred:

```text
AVIF
↓
WebP
↓
JPEG
↓
PNG
```

SVG remains preferred for vector graphics.

PNG should primarily be used when transparency or image characteristics justify it.

---

# 245. Source Asset Rule

Never use a 5000px source image directly on a 400px UI element.

Create appropriately sized source assets before shipping.

Next.js optimization is not an excuse for careless asset management.

---

# 246. Responsive Image Sizes

`next/image` should receive accurate `sizes`.

Example:

```tsx
<Image
  ...
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1200px) 70vw,
    50vw
  "
/>
```

Incorrect `sizes` can cause browsers to download unnecessarily large files.

---

# 247. Hero Image Priority

Only genuine above-the-fold critical imagery should receive high loading priority.

Do not mark every project image as priority.

Over-prioritization defeats browser resource scheduling.

---

# 248. Below-the-Fold Images

Project images below the initial viewport should load lazily.

Architecture:

```text
Initial viewport
     ↓
Critical assets

Visitor approaches section
     ↓
Remaining media loads
```

---

# 249. Image Placeholder Strategy

Optional placeholders:

- Dominant-color background
- Lightweight blur placeholder
- Neutral project background

The placeholder should preserve layout dimensions and avoid CLS.

---

# 250. Image Reveal Timing

Animation must not reveal an empty media container.

Preferred:

```text
Container exists
      ↓
Image becomes ready
      ↓
Reveal starts
```

But avoid holding surrounding content while waiting for non-critical media.

---

# 251. Project Gallery Loading

Large case studies should not load every full-resolution image immediately.

Prioritize:

```text
Hero
↓
First visual
↓
Nearby gallery media
↓
Remaining gallery
```

---

# 252. Video Architecture

Video should only be used where movement materially demonstrates the project.

Examples:

- Product interaction
- Interface transition
- Prototype
- Motion design

Do not replace static images with video merely for visual activity.

---

# 253. Video Format Strategy

Where video is used:

```text
WebM
+
MP4 fallback
```

Compression should prioritize UI readability.

Portfolio interface videos usually do not require cinematic bitrate.

---

# 254. Video Autoplay Rule

Decorative/project demonstration video may autoplay only when:

```text
muted
playsInline
```

and when autoplay improves the experience.

Controls should be provided where the media is meaningful enough to warrant user control.

---

# 255. Video Loading Strategy

Below-the-fold video should not eagerly consume bandwidth.

Possible approach:

```text
Poster Image
     ↓
Viewport approaches
     ↓
Video initialized
```

---

# 256. Reduced Data Consideration

Where practical, visitors using reduced-data preferences should receive lighter media behavior.

Large autoplay videos should not be essential for understanding a project.

---

# 257. Font Architecture

Typography is central to Novaaacode.

Font loading therefore requires careful optimization.

Preferred architecture:

```text
next/font
     ↓
Self-hosted optimization
     ↓
CSS variables
     ↓
Typography tokens
```

---

# 258. Font Family Budget

Prefer:

```text
1 primary family
+
optional 1 supporting/display family
```

Avoid loading multiple decorative font families.

---

# 259. Font Weight Budget

Only weights actually used should be shipped.

Example:

```text
400
500
600
```

instead of:

```text
100
200
300
400
500
600
700
800
900
```

unless variable fonts make the cost acceptable.

---

# 260. Variable Fonts

Variable fonts are preferred where:

- Browser support is appropriate.
- File size is efficient.
- Multiple weights are required.
- Typography benefits from variable axes.

---

# 261. Font Layout Shift

Font loading must minimize text reflow.

Use:

- Next.js font optimization
- Appropriate fallback fonts
- Size adjustment where necessary

Typography should not visibly jump after page load.

---

# 262. Icon Architecture

Prefer:

```text
SVG
```

for icons.

Avoid:

- PNG icons
- Icon fonts
- Multiple icon libraries

If a library is used, import only required icons.

---

# 263. Mockup Asset Architecture

Device mockups may contain:

```text
DEVICE SHELL
+
SCREEN ASSET
+
OPTIONAL SHADOW
```

Whenever possible, separate the shell from screen content.

This allows reuse.

---

# 264. Mockup Rendering Strategy

Instead of storing:

```text
food-app-iphone-mockup.png
cv-app-iphone-mockup.png
expense-app-iphone-mockup.png
```

as massive pre-rendered images, prefer reusable device framing when practical:

```tsx
<PhoneFrame>
  <ProjectScreen />
</PhoneFrame>
```

Advantages:

- Smaller assets
- Consistent device styling
- Easier updates
- Better responsive control
- Motion flexibility

---

# 265. Pre-Rendered Mockup Exception

Use pre-rendered mockups when:

- Perspective is complex.
- Lighting is part of the composition.
- 3D positioning is required.
- Recreating it in CSS would add unnecessary complexity.

Architecture should serve the visual outcome.

---

# 266. Asset Directory Standard

Recommended:

```text
public/
└── projects/
    │
    ├── portfolio/
    │   ├── hero.avif
    │   ├── overview.avif
    │   ├── mobile.avif
    │   └── details/
    │
    ├── food-app/
    │   ├── hero.avif
    │   ├── home.avif
    │   ├── restaurant.avif
    │   ├── details.avif
    │   ├── cart.avif
    │   └── checkout.avif
    │
    └── expense-tracker/
```

---

# 267. Asset Naming

Naming format:

```text
project-purpose-variant.ext
```

Examples:

```text
food-app-home.avif
food-app-checkout.avif
portfolio-hero-desktop.avif
portfolio-hero-mobile.avif
```

Avoid ambiguous names.

---

# 268. Desktop/Mobile Asset Variants

Separate media variants are acceptable when art direction requires them.

Example:

```text
project-hero-desktop.avif
project-hero-mobile.avif
```

Do not force a wide desktop crop into a vertical mobile composition if important content becomes unreadable.

---

# 269. Asset Quality Rule

Compression must never make interface screenshots visibly blurry.

Portfolio UI screenshots are especially sensitive to:

- Text sharpness
- Thin borders
- Icons
- Fine gradients

Compression should be evaluated visually.

---

# 270. Asset Source Preservation

Original high-quality source assets should remain outside the production delivery path where possible.

Conceptually:

```text
assets-source/
      ↓
production optimization
      ↓
public/projects/
```

Only optimized production assets should ship.

---

# 271. Animation Asset Strategy

Prefer native web animation:

```text
CSS
Framer Motion
GSAP
```

over pre-rendered animation files when possible.

Use video when actual product motion needs to be demonstrated.

Avoid large GIFs.

---

# 272. GIF Rule

Do not ship large animated GIFs.

Use:

```text
MP4
WebM
```

for raster animation.

---

# 273. Layout Shift Prevention

Every major media container should know its dimensions or aspect ratio before media loads.

Bad:

```text
Image loads
↓
Page suddenly moves
```

Preferred:

```text
Reserved frame
↓
Image loads inside it
```

---

# 274. Hero Performance Architecture

The hero is the most performance-sensitive composition.

Loading priority:

```text
1. HTML
2. Critical CSS
3. Primary font
4. Hero typography
5. Critical hero media
6. Hero interaction JS
7. Non-critical motion
8. Below-fold assets
```

Do not let decorative hero assets compete with critical content.

---

# 275. Hero Motion Initialization

Hero content should be available immediately.

Entrance animation should enhance it.

Avoid waiting for:

- All project images
- Every font variation
- GSAP sections below fold
- Videos
- Non-critical assets

before showing the hero.

---

# 276. LCP Strategy

The likely LCP element will be either:

- Hero headline
- Hero project visual

Whichever becomes the LCP must be optimized intentionally.

If it is an image:

- Correct size
- Priority
- Efficient format
- No unnecessary delay

---

# 277. CLS Strategy

Potential CLS sources:

- Fonts
- Images
- Navigation
- Lazy content
- Dynamic motion wrappers

Every one should reserve its final layout footprint where possible.

Motion should transform elements rather than unexpectedly changing document flow.

---

# 278. INP Strategy

Interaction responsiveness can be damaged by:

- Heavy scroll listeners
- Expensive pointer events
- Huge React rerenders
- Synchronous JS
- Excessive animation calculations

Avoid React state updates on every scroll frame.

---

# 279. Scroll State Rule

Do not do:

```ts
window.addEventListener("scroll", () => {
  setScrollY(window.scrollY);
});
```

for complex continuous animation.

This can cause unnecessary React rendering.

Prefer animation systems designed for frame-level updates.

---

# 280. Pointer State Rule

Pointer parallax should not trigger React rerenders every time the mouse moves.

Prefer:

- Motion values
- GSAP quick setters
- Refs
- requestAnimationFrame-based systems

---

# 281. DOM Complexity Budget

Cinematic design should not produce thousands of unnecessary DOM elements.

Avoid splitting every paragraph into individual characters unless required.

Avoid decorative markup that provides negligible visual value.

---

# 282. CSS Complexity

Tailwind utilities should remain the primary styling mechanism.

Global CSS should be reserved for:

- Tokens
- Typography
- Resets
- Global behaviors
- Special animation utilities

Avoid building a second parallel styling system.

---

# 283. Runtime Style Calculation

Avoid repeatedly calculating layout values in JavaScript when CSS can handle them.

CSS should own:

- Grid
- Flexbox
- Fluid sizing
- Breakpoint layout

JavaScript should own behavior CSS cannot express cleanly.

---

# 284. Third-Party Script Policy

Version 1 should contain very few third-party scripts.

If analytics are eventually added, they must not block rendering.

No unnecessary:

- Chat widgets
- Tracking bundles
- Marketing scripts
- Heatmaps

during initial development.

---

# 285. Performance Monitoring

During development test:

```text
Chrome DevTools
Lighthouse
Performance panel
Network panel
React profiler when necessary
```

Performance testing should occur throughout development, not only at the end.

---

# 286. Real Device Testing

Emulator testing is insufficient.

At minimum test on:

- A real iPhone
- A real Android device where available
- Desktop Safari
- Desktop Chrome

Scroll behavior can differ substantially across browsers and hardware.

---

# 287. Low-Power Device Testing

The website should be tested under CPU throttling.

If an animation only looks smooth on a powerful development machine, it is not ready.

---

# 288. Network Testing

Test using:

```text
Fast 4G
Slow 4G
Throttled connections
```

The initial experience should remain understandable while large project assets are loading.

---

# 289. Safari Performance

Safari requires specific attention because:

- Filter animations may behave differently.
- Sticky + overflow combinations can be problematic.
- Scroll behavior differs.
- GPU compositing behavior differs.

Do not assume Chrome performance represents Safari.

---

# 290. Mobile Safari Viewport

Dynamic browser chrome affects viewport height.

Use modern viewport units and test:

```text
Address bar visible
Address bar collapsed
Landscape
Portrait
```

---

# 291. Performance Degradation Strategy

When an experience is too expensive:

First reduce:

```text
Decorative parallax
↓
Blur
↓
Pointer effects
↓
Secondary floating objects
↓
Complex background motion
```

Preserve:

```text
Content
Primary storytelling
Navigation
Core transitions
```

---

# 292. Device Capability Philosophy

Do not aggressively fingerprint hardware.

Prefer environmental signals such as:

- Pointer capability
- Reduced motion
- Viewport size
- Touch support

Simplification should primarily be driven by experience needs rather than complicated device scoring.

---

# 293. Lazy Motion Initialization

Below-the-fold complex animation should initialize near the point it becomes relevant where practical.

Do not initialize the entire website's expensive animation system at first paint.

---

# 294. IntersectionObserver Usage

IntersectionObserver may be used for:

- Media preparation
- Simple reveal activation
- Video initialization
- Non-critical feature loading

Do not use scroll event listeners when IntersectionObserver solves the problem.

---

# 295. Preload Strategy

Preload only genuinely critical resources.

Potential:

```text
Primary font
Critical hero image
```

Do not preload:

```text
Every project image
Every font
Every video
Every route
```

Over-preloading can reduce performance.

---

# 296. Prefetch Strategy

Next.js route prefetching may improve navigation.

However, very heavy project routes should be monitored to ensure prefetching does not unnecessarily compete with current-page resources.

---

# 297. Case Study Performance

Project pages may contain substantially more media than the homepage.

Architecture should prioritize:

```text
Project Hero
↓
First Content Block
↓
Nearby Media
↓
Remaining Case Study
```

The browser should not download the entire case study immediately.

---

# 298. Performance Testing Gates

Performance review should occur at:

```text
Gate 1
Hero complete

Gate 2
Homepage structure complete

Gate 3
Motion system complete

Gate 4
First case study complete

Gate 5
Release candidate
```

This prevents performance problems from accumulating until the end.

---

# 299. Performance Acceptance Criteria

A page is not considered complete when it merely looks correct.

It must also:

- Scroll smoothly.
- Respond immediately.
- Avoid major layout shifts.
- Load critical content quickly.
- Avoid unnecessary JS.
- Use optimized media.
- Behave correctly on mobile.
- Respect reduced motion.
- Remain usable under slower network conditions.

---

# 300. Responsive Acceptance Criteria

Every major composition must be reviewed at:

```text
Small Mobile
Large Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Review:

- Typography
- Overflow
- Alignment
- Touch targets
- Media crop
- Motion
- Sticky behavior
- Navigation
- Section spacing

---

# 301. Asset Acceptance Criteria

Before an asset enters production:

- [ ] Naming is meaningful.
- [ ] Dimensions are appropriate.
- [ ] Format is optimized.
- [ ] Compression has been visually reviewed.
- [ ] Correct alt text strategy exists.
- [ ] Mobile crop exists if necessary.
- [ ] Aspect ratio is known.
- [ ] It is stored in the correct project directory.
- [ ] No unnecessary source file ships.

---

# 302. Performance Anti-Patterns

Reject:

```text
Massive PNG screenshots
Large GIF animations
Multiple autoplay hero videos
Every component as "use client"
Scroll state through React every frame
Unnecessary animation libraries
Full-screen loaders
Excessive blur
Huge font families
Unbounded desktop layouts
Unoptimized mockup PNGs
```

---

# 303. Responsive Anti-Patterns

Reject:

```text
Desktop design simply scaled down
Hover-only information
Tiny mobile typography
Desktop sticky sections forced onto mobile
Horizontal overflow
Huge empty mobile spaces
Overlapping text
Unreadable project screenshots
Desktop navigation squeezed into mobile
```

---

# 304. Performance Priority Matrix

| Element | Visual Importance | Performance Priority |
|---|---:|---:|
| Hero Typography | Critical | Critical |
| Hero Media | Critical | Critical |
| Navigation | Critical | Critical |
| Featured Project | Critical | High |
| Project Galleries | High | High |
| Background Decorations | Low | Low |
| Pointer Effects | Low | Low |
| Custom Cursor | Low | Low |
| Decorative Blur | Low | Low |

When compromises are required, lower-priority decoration is removed first.

---

# 305. Responsive Experience Matrix

| Feature | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero Motion | Full | Reduced | Simplified |
| Text Reveals | Full | Full | Full |
| Sticky Story | Full | Reduced | Optional |
| Horizontal Work | Full | Adapted | Stacked/Swipe |
| Parallax | Full | Reduced | Minimal |
| Pointer Effects | Yes | No | No |
| Custom Cursor | Optional | No | No |
| Magnetic CTA | Optional | No | No |
| Image Reveals | Full | Full | Full |
| Page Transitions | Full | Full | Simplified |
| Project Media | High Res | Optimized | Mobile Optimized |
| Navigation | Desktop | Adapted | Full Overlay |

---

# 306. Performance Architecture Blueprint

```text
                     USER REQUEST
                          │
                          ▼
                    NEXT.JS ROUTE
                          │
             ┌────────────┴────────────┐
             ▼                         ▼

      SERVER CONTENT              CLIENT ISLANDS
             │                         │
             ▼                         ▼

        HTML / CSS                Interaction JS
                                      │
                         ┌────────────┼────────────┐
                         ▼            ▼            ▼

                       Framer        GSAP      Optional
                       Motion                  Enhancements

             │                         │
             └────────────┬────────────┘
                          ▼
                   RESPONSIVE LAYER
                          │
            ┌─────────────┼─────────────┐
            ▼             ▼             ▼

         Desktop        Tablet        Mobile
            │             │             │
            └─────────────┼─────────────┘
                          ▼
                    ASSET PIPELINE
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼

      Images            Fonts             Video
        │                 │                 │
        ▼                 ▼                 ▼

   AVIF/WebP        Optimized Font      WebM/MP4
        │                 │                 │
        └─────────────────┼─────────────────┘
                          ▼
                    BROWSER DELIVERY
                          │
                          ▼
                  PERFORMANCE GATES
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼

         LCP             INP             CLS
       ≤ 2.5s          ≤ 200ms          ≤ .1
```

---

# 307. Part 5 Architecture Decision Summary

| Decision | Status |
|---|---|
| Mobile-first CSS | Locked |
| Experience-level responsiveness | Locked |
| Fluid typography | Locked |
| Fluid spacing | Locked |
| Touch-first mobile | Locked |
| Hover-dependent functionality | Rejected |
| Core Web Vitals targets | Locked |
| Narrow client boundaries | Locked |
| Image optimization pipeline | Locked |
| AVIF/WebP preference | Locked |
| Lazy below-fold media | Locked |
| Responsive image sizing | Mandatory |
| Video used selectively | Locked |
| GIF for major animation | Rejected |
| Next/font | Approved |
| Limited font weights | Locked |
| Reusable device frames | Approved |
| Pre-rendered complex mockups | Allowed |
| Layout shift prevention | Mandatory |
| Real-device testing | Mandatory |
| Safari testing | Mandatory |
| Progressive performance degradation | Locked |
| Decorative motion sacrificed first | Locked |
| Full-screen artificial loaders | Rejected |

---

# End of Volume 2 — Part 5

**Next: Part 6 — Accessibility, SEO, Reliability, Testing & Security Architecture**