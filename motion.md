# NOVAAACODE PORTFOLIO

# Volume 5 — Motion & Interaction Engineering Specification

**Status:** Implementation Specification  
**Purpose:** Define how motion, scrolling, interaction, transitions, and responsive animation should be engineered across Novaaacode.

---

# 1. Motion Philosophy

Novaaacode uses motion to communicate:

```text
HIERARCHY
+
CONTINUITY
+
DEPTH
+
STATE
+
INTERACTION
```

Motion must never become the main product.

Core rule:

> If removing an animation makes the interface confusing, the static UX needs improvement.

---

# 2. Recommended Motion Stack

Primary implementation:

```text
Next.js
TypeScript
GSAP
GSAP ScrollTrigger
CSS Transitions
requestAnimationFrame where necessary
```

Optional:

```text
Lenis
```

for subtle smooth scrolling.

Do not introduce several competing animation libraries without a clear reason.

---

# 3. Library Responsibilities

```text
CSS
→ Micro-interactions
→ Hover
→ Focus
→ Simple fades
→ Basic transforms

GSAP
→ Complex timelines
→ Scroll choreography
→ Text reveals
→ Sticky storytelling
→ Horizontal sections

ScrollTrigger
→ Scroll progress
→ Pinning
→ Scrubbing
→ Section activation

requestAnimationFrame
→ Cursor interpolation
→ Pointer effects
```

---

# 4. Framer Motion

Framer Motion is optional.

Do not use:

```text
GSAP
+
Framer Motion
+
CSS animation
```

for the same interaction.

If GSAP handles the portfolio's primary motion architecture, keep Framer Motion limited or omit it entirely.

---

# 5. Smooth Scrolling

Preferred first implementation:

```text
Native browser scrolling
+
ScrollTrigger
```

Only add Lenis if testing proves it meaningfully improves the experience.

The portfolio should never feel like the page is dragging behind the user's trackpad.

---

# 6. Global Motion Tokens

```ts
export const motion = {
  duration: {
    micro: 0.16,
    fast: 0.24,
    normal: 0.32,
    medium: 0.5,
    expressive: 0.8,
  },

  ease: {
    standard: "power2.out",
    enter: "power4.out",
    exit: "power3.in",
    expressive: "expo.out",
  },

  distance: {
    small: 8,
    medium: 24,
    large: 60,
  },
};
```

These values may be tuned during visual QA.

---

# 7. Motion Intensity

Use four levels:

```text
01 — MICRO
Buttons, links, navigation

02 — REVEAL
Headings, media, metadata

03 — SCROLL STORY
Sticky sections, parallax

04 — SIGNATURE
Hero, Selected Work, Mobile Showcase
```

Most of the website should remain Level 1–2.

---

# 8. Global Reveal System

Standard heading reveal:

```text
overflow: hidden

text:
translateY(110%)
→
translateY(0%)
```

Typical duration:

```text
0.7–0.9s
```

Stagger:

```text
0.05–0.12s
```

Use for major headings only.

---

# 9. Body Copy Reveal

Body text should be quieter.

```text
opacity: 0 → 1
translateY: 12px → 0
```

Duration:

```text
0.4–0.6s
```

Do not animate every line independently.

---

# 10. Image Reveal

Standard:

```text
Outer container:
clip / overflow reveal

Inner media:
scale(1.04)
→
scale(1)
```

Duration:

```text
0.8–1.1s
```

The effect should feel controlled rather than dramatic.

---

# 11. Section Entry

Use Intersection Observer or ScrollTrigger.

Recommended trigger:

```text
top 80–85% viewport
```

Do not wait until content reaches the middle of the screen before revealing it.

---

# 12. Replay Rule

Most entrance animations:

```text
play once
```

Do not repeatedly animate headings every time the visitor scrolls slightly backward.

---

# 13. Homepage Hero Timeline

Initial sequence:

```text
NAV / WORDMARK
        ↓
PRIMARY HERO LINE
        ↓
SECOND HERO LINE
        ↓
SUPPORTING INFORMATION
        ↓
HERO VISUAL
        ↓
SCROLL INDICATOR
```

Approximate total duration:

```text
1.5–2.2 seconds
```

The page should become interactive immediately.

---

# 14. Hero Text

Example choreography:

```text
DIGITAL
↓ 0.08s

EXPERIENCES
↓ 0.08s

BUILT WITH
↓ 0.08s

INTENTION.
```

Do not reveal individual letters one by one.

---

# 15. Hero Scroll Response

As the visitor scrolls:

```text
Heading
→ small vertical displacement

Supporting copy
→ slightly faster movement

Hero media
→ subtle opposing movement
```

Maximum displacement:

```text
20–60px
```

No extreme parallax.

---

# 16. Hero Scale

Optional:

```text
Hero media
scale 1
→ 0.97
```

during initial scroll.

Keep scale differences subtle.

---

# 17. Hero Exit

Do not:

```text
blur everything
rotate everything
fade everything simultaneously
```

Preferred:

```text
natural viewport exit
+
small differential movement
```

---

# 18. Featured Project

Featured Project may use a sticky composition.

Structure:

```text
ENTRY
↓
PROJECT IDENTITY
↓
MEDIA DOMINANCE
↓
DETAIL REVEAL
↓
EXIT
```

---

# 19. Featured Project Pinning

Desktop only.

Conceptual:

```text
section height: 180–250vh

visual container:
position/pin through controlled section
```

The pin must release naturally.

---

# 20. Featured Project Scroll Progress

Example:

```text
0–20%
Project label/title enters

20–55%
Main media expands

55–80%
Description/metadata enters

80–100%
Composition releases
```

Exact percentages should be tuned against actual content.

---

# 21. Featured Media Scale

Potential:

```text
scale .88
→
scale 1
```

during the sticky sequence.

Do not exceed viewport boundaries unintentionally.

---

# 22. Studio Statement

This is a quiet section.

Motion:

```text
line reveal
+
very small vertical movement
```

No pinning.

No complex parallax.

No pointer effect.

---

# 23. Selected Work Desktop

This is one of the signature interactions.

Vertical scrolling controls horizontal project movement.

Concept:

```text
VERTICAL SCROLL

        ↓

PROJECT 01 → PROJECT 02 → PROJECT 03 → PROJECT 04
```

---

# 24. Selected Work Structure

Conceptually:

```text
<section class="selected-work">
  <div class="sticky-viewport">
    <div class="horizontal-track">
      <Project />
      <Project />
      <Project />
    </div>
  </div>
</section>
```

---

# 25. Horizontal Distance

Calculate dynamically.

Conceptually:

```ts
distance =
  track.scrollWidth -
  window.innerWidth;
```

Never hardcode horizontal travel based on one development monitor.

---

# 26. Horizontal ScrollTrigger

Concept:

```text
trigger:
selected work section

pin:
viewport

scrub:
true

end:
based on horizontal distance
```

The visitor continues using normal vertical scrolling.

---

# 27. Horizontal Project Composition

Each project should occupy approximately:

```text
70–90vw
```

depending on layout.

Allow glimpses of the next project where useful.

This communicates that more work exists horizontally.

---

# 28. Selected Work Motion

Inside each project:

```text
Image
→ slight internal parallax

Number
→ small movement

Title
→ controlled reveal
```

Do not animate every child independently.

---

# 29. Horizontal Exit

After the final project:

```text
track completes
↓
pin releases
↓
normal vertical page resumes
```

This transition must feel seamless.

---

# 30. Selected Work Mobile

Do not recreate desktop horizontal scroll.

Mobile:

```text
PROJECT 01
↓
PROJECT 02
↓
PROJECT 03
↓
PROJECT 04
```

Each project receives its own vertical space.

---

# 31. Capabilities Interaction

Desktop capability rows:

```text
WEB EXPERIENCES
MOBILE PRODUCTS
PRODUCT DESIGN
INTERACTION
```

Hovering a row may reveal relevant media.

---

# 32. Capability Hover

Sequence:

```text
pointer enters
↓
row becomes active
↓
other rows reduce slightly
↓
preview appears
```

Timing:

```text
150–300ms
```

It should feel responsive.

---

# 33. Capability Preview

Preview may follow the pointer with interpolation.

Never place it directly under the pointer.

Offset:

```text
20–40px
```

to maintain visibility.

---

# 34. Cursor Interpolation

Concept:

```ts
current += (target - current) * 0.12;
```

Run through:

```text
requestAnimationFrame
```

rather than React state updates every mouse movement.

---

# 35. Cursor Performance

Pointer coordinates should not trigger React component rerenders at 60fps.

Use:

```text
refs
GSAP quickTo
requestAnimationFrame
```

or equivalent imperative animation.

---

# 36. Cursor Activation

Enable only when:

```css
@media (hover: hover) and (pointer: fine)
```

Never assume desktop-sized viewport means mouse input.

---

# 37. Project Archive Preview

Work archive uses a similar preview system.

Hover:

```text
Project row
↓
Project visual appears
↓
Visual follows pointer
```

---

# 38. Preview Switching

Moving from:

```text
PROJECT A
→
PROJECT B
```

should transition the visual rather than destroy/recreate it abruptly.

Possible:

```text
opacity
+
scale
```

or:

```text
clip transition
```

---

# 39. Preview Exit

On leaving the archive area:

```text
opacity → 0
scale → .97
```

Duration:

```text
150–250ms
```

---

# 40. Mobile Product Showcase

This is another signature experience.

Desktop concept:

```text
PHONE REMAINS CENTRAL

SCROLL
↓

HOME
↓

RESTAURANT
↓

FOOD DETAILS
↓

CART
↓

CHECKOUT
```

---

# 41. Mobile Showcase Pin

Desktop:

```text
phone composition pinned
```

while supporting content changes around it.

The sequence may occupy:

```text
300–500vh
```

depending on the number of screens.

Do not artificially extend it beyond what feels natural.

---

# 42. Screen Change

Preferred transition:

```text
Current screen
translateY(0)
→
translateY(-4%)

opacity 1
→
0

Next screen
translateY(6%)
→
0

opacity 0
→
1
```

Avoid phone rotation.

The device itself should remain stable.

---

# 43. Device Movement

During the primary showcase:

```text
Phone position
→ mostly stable
```

Small scale or vertical adjustments are acceptable.

Do not repeatedly spin or rotate the device.

---

# 44. Supporting Text

Each screen may correspond with:

```text
01
DISCOVER

02
CHOOSE

03
CUSTOMIZE

04
REVIEW

05
CHECKOUT
```

Text transitions should synchronize with screen changes.

---

# 45. Screen Fan Finale

After the final screen:

```text
single phone
↓
additional screens emerge
↓
composition spreads
```

Potential:

```text
Screen 1 → translateX(-35%)
Screen 2 → translateX(-18%)
Center → 0
Screen 4 → translateX(18%)
Screen 5 → translateX(35%)
```

with small depth/scale variation.

---

# 46. Screen Fan Rule

Keep device rotation extremely small or zero.

The screens themselves should remain readable.

---

# 47. Mobile Showcase Mobile Version

Mobile should not pin for several hundred viewport heights.

Instead:

```text
Phone / Screen
↓
Label
↓
Next screen
↓
Next screen
```

or use short sticky segments.

Performance and readability take priority.

---

# 48. Process Section

Stages:

```text
01 DISCOVER
02 DIRECTION
03 DESIGN
04 BUILD
05 REFINE
```

This section should feel calm after the Mobile Showcase.

---

# 49. Process Motion

Desktop:

```text
Large number remains
↓
number changes
↓
title changes
↓
description changes
```

Use a controlled crossfade or vertical transition.

---

# 50. Process Scroll

A short sticky system is acceptable.

Do not create another massive cinematic pinned sequence.

The user has already experienced several motion-heavy sections.

---

# 51. Final CTA

Example:

```text
HAVE A PROJECT
IN MIND?

LET'S BUILD IT.
```

Motion:

```text
masked heading reveal
+
CTA arrow movement
```

Optional small pointer response on desktop.

---

# 52. Magnetic CTA

If implemented:

```text
maximum translation:
6–10px
```

Do not make the button chase the pointer.

Disable on touch and reduced-motion environments.

---

# 53. Link Hover System

Standard text CTA:

```text
VIEW PROJECT        ↗
```

Hover:

```text
text → 2px movement
arrow → 4–6px movement
underline → reveal/translate
```

Duration:

```text
160–240ms
```

---

# 54. Navigation Motion

Navigation entrance:

```text
opacity
+
small vertical movement
```

Navigation hide/reveal:

```text
translateY
```

Avoid opacity-only disappearance because it may still occupy visual space awkwardly.

---

# 55. Navigation Auto-Hide

Optional desktop/mobile behavior:

```text
scroll down significantly
→ hide

scroll up
→ reveal
```

Do not trigger on tiny scroll changes.

---

# 56. Mobile Menu Opening

Sequence:

```text
Overlay enters
↓
Primary links reveal
↓
Secondary links reveal
```

Total duration:

```text
400–650ms
```

Closing should be slightly faster.

---

# 57. Mobile Menu Scroll Lock

When menu opens:

```text
document background scrolling
→ disabled
```

Restore previous scroll position exactly after closing.

---

# 58. Route Transition Architecture

Default:

```text
OLD PAGE
↓
short exit
↓
NEW PAGE
↓
short entrance
```

Total perceived delay should remain low.

---

# 59. Default Route Transition

Exit:

```text
opacity 1 → 0
translateY 0 → -10px
```

Entrance:

```text
opacity 0 → 1
translateY 12px → 0
```

Duration:

```text
300–500ms
```

---

# 60. Shared Project Transition

Advanced enhancement:

```text
Work preview
↓ click
Preview position captured
↓
Transition layer created
↓
Image expands
↓
Project route resolves
↓
Image becomes hero
```

Only implement after basic navigation is stable.

---

# 61. Next Project Transition

Strongest candidate for shared transition:

```text
NEXT PROJECT IMAGE
↓
expand
↓
becomes next hero
```

Because both source and destination layouts are controlled.

---

# 62. Contact Transition

Homepage CTA may transition:

```text
Dark CTA
↓
viewport coverage
↓
Contact page appears
```

This is optional.

A normal fast route transition is perfectly acceptable.

---

# 63. Transition Accessibility

Reduced motion:

```text
shared expansion
→ disabled

route transition
→ very short fade or immediate
```

Navigation must never depend on animation completion.

---

# 64. ScrollTrigger Architecture

Do not scatter unmanaged ScrollTriggers throughout the application.

Prefer:

```text
one animation module/hook
per major section
```

Example:

```text
useHeroMotion()
useFeaturedProjectMotion()
useSelectedWorkMotion()
useMobileShowcaseMotion()
useProcessMotion()
```

---

# 65. GSAP Context

Each component should scope GSAP animations.

Concept:

```ts
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // animations
  }, root);

  return () => ctx.revert();
}, []);
```

This prevents stale timelines and selectors.

---

# 66. ScrollTrigger Cleanup

On component destruction:

```text
timelines destroyed
ScrollTriggers killed
listeners removed
RAF cancelled
```

No orphan animation loops.

---

# 67. Refresh Handling

Call appropriate refresh logic after:

```text
fonts load
large media resolves
viewport changes significantly
layout changes
```

Pinned measurements must remain accurate.

---

# 68. Resize Strategy

Do not continuously rebuild expensive timelines during every resize event.

Use:

```text
debouncing
matchMedia
responsive animation contexts
```

---

# 69. GSAP matchMedia

Recommended:

```text
Desktop motion
Tablet motion
Mobile motion
Reduced motion
```

should be defined separately.

Do not build one huge timeline and try to patch it through CSS.

---

# 70. Example Concept

```ts
const mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  // full desktop choreography
});

mm.add("(max-width: 1023px)", () => {
  // simplified behavior
});
```

Also account for:

```text
prefers-reduced-motion
```

---

# 71. Parallax Engineering

Parallax should use transforms.

Do not update:

```text
top
left
margin
```

on every frame.

Preferred:

```text
translate3d
```

or GSAP transforms.

---

# 72. Scrub Values

Not every scroll animation needs:

```text
scrub: true
```

Use:

```text
scrubbed
```

for directly scroll-connected motion.

Use:

```text
triggered timeline
```

for entrance animation.

---

# 73. ScrollTrigger Markers

Development:

```text
markers: true
```

when debugging.

Production:

```text
markers: false
```

Obviously.

---

# 74. Scroll Velocity

Avoid effects whose behavior becomes unstable during very fast scrolling.

All timelines should be tested under:

```text
fast trackpad flick
fast mouse wheel
scrollbar dragging
```

---

# 75. Background Theme Controller

Sections may expose:

```ts
data-theme="light"
data-theme="dark"
```

Navigation responds to the active environment.

Avoid manually changing navbar colors independently inside every section.

---

# 76. Background Transition

When entering dark sections:

```text
page background
→ dark

navigation
→ light

foreground
→ appropriate contrast
```

These should feel synchronized.

---

# 77. Pointer Interaction Architecture

Global pointer state should not cause the entire application tree to rerender.

Prefer an isolated:

```text
PointerLayer
```

or interaction controller.

---

# 78. Pointer Layer

Possible responsibilities:

```text
Project preview
Cursor label
Magnetic interaction
Pointer coordinates
```

It sits outside normal page composition.

---

# 79. Custom Cursor Rule

Keep the system cursor unless a custom treatment provides real value.

A giant circular replacement cursor is explicitly unnecessary.

---

# 80. Hover Information Rule

Hover can reveal:

```text
additional
```

information.

It cannot reveal:

```text
required
```

information.

Mobile and keyboard users must receive equivalent content.

---

# 81. Touch Interactions

Touch uses:

```text
Tap
Scroll
Native swipe where appropriate
```

Never require:

```text
hover simulation
```

to understand content.

---

# 82. Page Visibility

When browser tab becomes hidden:

```text
pause unnecessary RAF loops
```

where practical.

Resume safely when visible again.

---

# 83. Image Animation Performance

Avoid simultaneously animating:

```text
large blur
+
scale
+
clip-path
+
filter
```

on full-screen images.

Choose one or two effects.

---

# 84. Blur Rule

Blur should be extremely rare.

Blur transitions are GPU-expensive and often create a generic cinematic aesthetic.

Prefer:

```text
opacity
transform
clip
```

---

# 85. will-change

Use:

```css
will-change: transform;
```

only for elements that genuinely need it.

Do not apply it globally.

---

# 86. GPU Layer Rule

Do not force hundreds of elements onto independent compositing layers.

Only optimize known animated elements.

---

# 87. Mobile Performance

On mobile, automatically simplify:

```text
large parallax
multiple simultaneous transforms
pointer systems
complex pinning
continuous ambient motion
```

---

# 88. Low-Power Philosophy

Do not attempt unreliable device-performance guessing.

Build efficient defaults.

Mobile already receives the lighter animation architecture.

---

# 89. Reduced Motion Detection

Use:

```css
@media (prefers-reduced-motion: reduce)
```

and corresponding JavaScript detection where animation logic requires it.

---

# 90. Reduced Motion Experience

Transform:

```text
Horizontal Selected Work
→ vertical stack

Pinned Mobile Showcase
→ normal vertical screens

Parallax
→ static

Cursor preview movement
→ static/no preview

Shared transitions
→ short fade

Magnetic CTA
→ standard CTA
```

---

# 91. Animation Loading

Animations should not block first content rendering.

The visitor should receive the page before all animation infrastructure finishes initializing.

---

# 92. Dynamic Imports

Heavy animation modules may be loaded only where necessary.

Example:

```text
Homepage signature animations
```

do not need to ship to a simple Contact page if architecture allows avoiding it.

---

# 93. Project Page Motion

Case studies use:

```text
Hero reveal
Media reveals
Small parallax
Occasional sticky storytelling
Next Project transition
```

Do not give every case study the same signature animation.

---

# 94. Project-Specific Motion

Each major project may define:

```ts
motionStyle:
  "minimal"
  "editorial"
  "product"
  "immersive"
```

This controls intensity without creating entirely separate systems.

---

# 95. Web Project Motion

Web projects may emphasize:

```text
browser expansion
scroll simulation
section reveals
responsive transformations
```

---

# 96. Mobile Project Motion

Mobile projects may emphasize:

```text
device screen swaps
screen stacks
vertical interface progression
```

---

# 97. Dashboard Project Motion

Dashboard projects may emphasize:

```text
panel reveals
data relationships
navigation transitions
```

Do not fake animated analytics if they were not part of the actual product.

---

# 98. Motion and Content

Animation timing should respond to actual content length.

Do not use identical scroll distances for:

```text
3-screen showcase
```

and:

```text
8-screen showcase.
```

---

# 99. Animation Fallback

Every signature section requires a static fallback.

If JS fails:

```text
content remains visible
```

Never initialize important content as permanently:

```css
opacity: 0;
```

without a safe enhancement strategy.

---

# 100. No-JS Principle

Essential:

```text
Navigation
Project names
Descriptions
Images
Contact information
```

should remain available without animation JavaScript.

---

# 101. Animation Debug Mode

Development may support:

```text
?debugMotion=true
```

or an environment flag.

Possible features:

```text
ScrollTrigger markers
section bounds
current progress
active theme
```

Do not ship debug UI to production.

---

# 102. Motion QA — Hero

Verify:

```text
[ ] Hero appears immediately
[ ] Text reveal doesn't clip incorrectly
[ ] Fonts loading doesn't break timeline
[ ] Scroll works during entrance
[ ] Fast scroll doesn't leave hero stuck
[ ] Mobile composition works
[ ] Reduced motion works
```

---

# 103. Motion QA — Featured Project

```text
[ ] Pin starts correctly
[ ] Pin releases correctly
[ ] Media remains sharp
[ ] No layout jump
[ ] Resize recalculates
[ ] Mobile fallback works
[ ] Reduced motion fallback works
```

---

# 104. Motion QA — Selected Work

```text
[ ] Horizontal distance calculated dynamically
[ ] First project starts correctly
[ ] Last project fully visible
[ ] Pin releases naturally
[ ] Track doesn't overflow after section
[ ] Fast scrolling works
[ ] Mobile stacks vertically
[ ] Reduced motion stacks vertically
```

---

# 105. Motion QA — Cursor Preview

```text
[ ] Fine pointer only
[ ] No React rerender loop
[ ] Preview doesn't cover project title
[ ] Switching projects is smooth
[ ] Preview disappears on exit
[ ] Keyboard navigation still works
[ ] Touch receives normal project media
```

---

# 106. Motion QA — Mobile Showcase

```text
[ ] Device stays stable
[ ] Screens remain readable
[ ] Screen swaps synchronize with copy
[ ] Pin isn't excessively long
[ ] Fan finale doesn't overlap badly
[ ] Mobile version is simplified
[ ] Reduced motion is usable
```

---

# 107. Motion QA — Navigation

```text
[ ] Light/dark state correct
[ ] Menu scroll lock works
[ ] Closing restores scroll
[ ] Escape closes menu
[ ] Route change closes menu
[ ] Focus remains usable
```

---

# 108. Motion QA — Page Transitions

```text
[ ] Navigation isn't delayed
[ ] Back button works
[ ] Forward button works
[ ] Deep links work
[ ] Scroll restoration works
[ ] Failed navigation doesn't leave overlay
[ ] Reduced motion works
```

---

# 109. Performance Targets

Aim for smooth interaction on normal consumer hardware.

Important:

```text
No obvious scroll stutter

No pointer lag

No major layout shifts

No long main-thread animation blocks

No enormous initial animation bundle
```

---

# 110. Animation Priority Under Performance Pressure

Remove effects in this order:

```text
01 Ambient movement

02 Pointer parallax

03 Magnetic interactions

04 Secondary parallax

05 Shared page transitions

06 Non-essential sticky choreography
```

Preserve:

```text
Micro feedback
Core reveals
Important storytelling
```

---

# 111. Implementation Order

Do not build all animation simultaneously.

Recommended:

```text
01
Static website

02
Responsive layouts

03
CSS micro-interactions

04
Global reveal system

05
Hero

06
Featured Project

07
Selected Work

08
Capabilities preview

09
Mobile Showcase

10
Process

11
Route transitions

12
Project-specific motion

13
Performance optimization

14
Reduced motion

15
Final polish
```

---

# 112. Motion Architecture

Recommended conceptual structure:

```text
src/
│
├── motion/
│   ├── tokens.ts
│   ├── gsap.ts
│   ├── media.ts
│   ├── reducedMotion.ts
│   └── helpers.ts
│
├── hooks/
│   ├── useHeroMotion.ts
│   ├── useReveal.ts
│   ├── useSelectedWork.ts
│   ├── useProjectPreview.ts
│   ├── useMobileShowcase.ts
│   └── useProcessMotion.ts
│
└── components/
    └── motion/
        ├── RevealText
        ├── RevealMedia
        ├── PointerLayer
        └── PageTransition
```

Exact folder structure can be adjusted during Volume 6.

---

# 113. Motion Ownership

Each section owns its animation.

Example:

```text
Hero
→ Hero motion

Selected Work
→ Selected Work motion
```

Avoid one giant:

```text
homepageAnimation.ts
```

controlling the entire site.

---

# 114. Global Motion Responsibilities

Only truly global behavior belongs globally:

```text
Reduced-motion detection

Motion tokens

Route transitions

Pointer layer

Theme transitions

GSAP configuration
```

---

# 115. React Rendering Rule

React controls:

```text
application state
content
component lifecycle
```

GSAP controls:

```text
high-frequency visual transforms
timelines
scroll-linked animation
```

Do not continuously put animation coordinates into React state.

---

# 116. State vs Animation

Example:

```text
activeProjectId
```

can be React state.

But:

```text
cursorX
cursorY
```

should generally not be React state.

---

# 117. Motion Accessibility Rule

Animation can reinforce:

```text
active
selected
entered
changed
```

but another visual or semantic indicator must also communicate that state.

---

# 118. Final Motion Character

Novaaacode motion should feel:

```text
SMOOTH
CONTROLLED
EDITORIAL
PHYSICAL
SUBTLE
PRECISE
```

Not:

```text
BOUNCY
GAMIFIED
FLASHY
CHAOTIC
OVER-CINEMATIC
```

---

# 119. Signature Interaction Set

The site should be remembered for approximately four major motion ideas:

```text
01
Editorial Hero Reveal

02
Horizontal Selected Work

03
Cursor-Responsive Project Archive

04
Pinned Mobile Product Showcase
```

Everything else supports these.

---

# 120. Final Engineering Rule

Before adding an animation ask:

```text
Does this improve the experience?

Is it consistent with the motion language?

Does it perform smoothly?

Does it work without hover?

Does it have a reduced-motion fallback?

Can it fail without hiding content?
```

If not, do not ship it.

---

# 121. Volume 5 Final Specification

Novaaacode's motion architecture is therefore:

```text
NATIVE SCROLL FIRST

        +

GSAP FOR COMPLEX MOTION

        +

SCROLLTRIGGER FOR STORYTELLING

        +

CSS FOR MICRO-INTERACTIONS

        +

RAF / IMPERATIVE MOTION
FOR POINTER INTERACTIONS

        +

RESPONSIVE MOTION BUDGETS

        +

REDUCED-MOTION FALLBACKS

        +

STATIC CONTENT AS THE FOUNDATION
```

The motion system exists to make Novaaacode feel crafted without making the portfolio difficult to use.

---

# Volume 5 — COMPLETE