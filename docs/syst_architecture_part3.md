# Volume 2 — System Architecture

## Part 3 — Component Architecture, Design-System Integration & Composition Model

---

# 57. Component Architecture Objective

The Novaaacode component architecture shall provide strong implementation consistency without creating visual repetition.

This distinction is critical.

A reusable system should make development easier.

It should not make every section look the same.

The architecture therefore separates components into four levels:

```text
PRIMITIVES
    ↓
FOUNDATION COMPONENTS
    ↓
COMPOUND COMPONENTS
    ↓
EXPERIENCE COMPOSITIONS
```

Each level has a different responsibility.

---

# 58. Component Hierarchy

The component system shall follow:

```text
Level 1
Design Tokens

        ↓

Level 2
UI Primitives

        ↓

Level 3
Compound Components

        ↓

Level 4
Experience Compositions

        ↓

Level 5
Pages
```

Example:

```text
Spacing Token
     ↓
Container
     ↓
ProjectMeta
     ↓
FeaturedProjectStory
     ↓
Homepage
```

Pages should primarily compose experiences rather than directly construct low-level UI.

---

# 59. Level 1 — Design Tokens

Design tokens are the lowest visual layer.

They define shared values such as:

- Typography
- Spacing
- Radius
- Color
- Motion duration
- Easing
- Breakpoints
- Shadows
- Layering

Example conceptual structure:

```ts
export const spacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "2rem",
  lg: "4rem",
  xl: "7rem",
  section: "clamp(6rem, 12vw, 12rem)",
};
```

Exact values shall be defined in Volume 4 — Design System.

Volume 2 only establishes their architectural ownership.

---

# 60. Token Ownership Rule

Visual values must originate from the design system.

Avoid:

```tsx
<div className="mt-[73px]">
```

when the value represents reusable spacing.

One-off values remain acceptable when required by intentionally asymmetric compositions.

The goal is consistency.

Not mathematical rigidity.

---

# 61. Level 2 — UI Primitives

UI primitives are the smallest reusable interface elements.

Examples:

```text
Button
TextLink
Container
SectionLabel
Heading
Paragraph
Divider
Icon
MediaFrame
```

They should contain:

- Accessibility behavior
- Core styling
- Variants
- Basic interaction states

They should not know which page is rendering them.

---

# 62. Button Architecture

Recommended conceptual API:

```tsx
<Button
  variant="primary"
  size="large"
  icon="arrow"
>
  Start a project
</Button>
```

Potential variants:

```text
primary
secondary
ghost
text
```

Avoid creating:

```text
HeroButton
ContactButton
AboutButton
ProjectButton
```

when they only differ visually.

Those differences should normally be expressed through variants or composition.

---

# 63. Button Internal Structure

Conceptually:

```text
Button
│
├── Background Layer
├── Label
└── Optional Icon
```

The background may animate independently.

Example hover sequence:

```text
Pointer Enter
      ↓
Background transforms
      ↓
Label shifts 1–2px
      ↓
Arrow translates
```

This provides sophistication without aggressive animation.

---

# 64. Link Architecture

Links shall communicate navigation clearly.

Types:

```text
Navigation Link
Inline Text Link
Project Link
External Link
CTA Link
```

External links should expose appropriate semantics.

Animations should never hide the fact that something is clickable.

---

# 65. Typography Components

Typography components may include:

```text
DisplayHeading
SectionHeading
BodyText
Caption
Eyebrow
```

However, avoid building dozens of typography wrappers.

Where semantic HTML plus Tailwind classes provide sufficient clarity, use them directly.

Componentization should reduce repetition, not create abstraction for abstraction's sake.

---

# 66. Section Label

Example:

```text
01 / SELECTED WORK
```

or:

```text
CAPABILITIES
```

The SectionLabel component may standardize:

- Font
- Tracking
- Case
- Baseline alignment
- Optional index

It must remain visually quiet compared with the main heading.

---

# 67. Container Component

Recommended API:

```tsx
<Container size="wide">
  ...
</Container>
```

Possible values:

```text
narrow
default
wide
full
```

The container should control:

- Maximum width
- Horizontal page padding
- Responsive behavior

It should not control vertical section spacing.

---

# 68. Section Wrapper

A lightweight Section component may standardize:

- Semantic `<section>`
- Section identifier
- Positioning context
- Optional overflow behavior

Example:

```tsx
<Section id="work" overflow="hidden">
```

Do not force:

- Background
- Border
- Radius
- Heading
- Grid

onto every section.

That would immediately produce template-like output.

---

# 69. Media Architecture

Project media is one of the most important visual systems.

Media primitives may include:

```text
ImageFrame
VideoFrame
BrowserFrame
PhoneFrame
LaptopFrame
FloatingMedia
```

Each should solve a distinct presentation problem.

---

# 70. ImageFrame

Responsibilities:

- Aspect ratio
- Overflow clipping
- Responsive sizing
- Image optimization
- Optional reveal mask
- Optional hover transformation

Example:

```tsx
<ImageFrame
  src="/projects/food-app/home.webp"
  alt="Food application home interface"
  ratio="portrait"
  reveal="mask"
/>
```

---

# 71. Device Frame Architecture

Device frames must be reusable visual shells.

They must not contain project-specific information.

Conceptual:

```text
PhoneFrame
│
├── Device Shell
│
├── Screen Mask
│
└── Screen Content
```

Usage:

```tsx
<PhoneFrame>
  <Image ... />
</PhoneFrame>
```

This enables different projects to reuse the same physical device presentation.

---

# 72. Device Mockup Rule

Device frames must not dominate every project.

Using an iPhone or MacBook for every visual would make the portfolio repetitive.

Project imagery may alternatively appear:

- Full bleed
- Inside browser windows
- Cropped
- Floating
- Without devices
- As layered UI fragments
- As oversized details

Device mockups are storytelling tools.

Not decoration.

---

# 73. Level 3 — Compound Components

Compound components combine multiple primitives around a reusable purpose.

Examples:

```text
ProjectMeta
ProjectPreview
ProjectNavigation
ServiceItem
ContactBlock
ProjectMediaGallery
```

These components understand a domain concept.

---

# 74. ProjectMeta

Conceptual input:

```tsx
<ProjectMeta
  category="Mobile Application"
  year="2026"
  services={[
    "Product Design",
    "Development"
  ]}
/>
```

Responsibilities:

- Present project metadata
- Maintain consistent hierarchy
- Adapt responsively

It should not control the project's visual composition.

---

# 75. Project Preview

A ProjectPreview represents a project entry point.

It may receive:

```ts
type ProjectPreviewProps = {
  project: Project;
  variant?: "editorial" | "visual" | "compact";
};
```

However, variants must remain limited.

Do not create twenty configuration properties to make one component reproduce every possible layout.

When a layout becomes fundamentally different, create a composition.

---

# 76. Configuration Complexity Rule

Avoid APIs such as:

```tsx
<ProjectCard
  imageLeft
  titleTop
  textBottom
  imageScale={1.2}
  dark
  floating
  sticky
  parallax
  horizontal
  largeTitle
  noBorder
/>
```

This indicates the component is trying to solve too many unrelated presentation problems.

Instead:

```text
ProjectPreview
```

for reusable previews.

And:

```text
FeaturedProjectStory
HorizontalProjectSequence
FloatingMobileShowcase
```

for unique experiences.

---

# 77. Level 4 — Experience Compositions

Experience compositions are the primary visual storytelling units.

They may be intentionally unique.

Examples:

```text
HeroExperience
FeaturedProjectStory
StudioStatement
HorizontalWorkExperience
CapabilitiesExperience
FloatingMobileShowcase
ProcessExperience
ContactFinale
```

This layer is where the portfolio avoids looking generated from a template.

---

# 78. Composition Ownership

A composition may own:

- Layout
- Section-specific motion
- ScrollTrigger timeline
- Sticky behavior
- Responsive transformation
- Internal sequence
- Project-specific presentation

It should still consume shared:

- Typography
- Buttons
- Containers
- Media components
- Motion tokens

This creates:

> Visual uniqueness built on systemic consistency.

---

# 79. Homepage Composition Tree

Recommended conceptual homepage:

```text
HomePage
│
├── HeroExperience
│
├── FeaturedProjectStory
│
├── StudioStatement
│
├── HorizontalWorkExperience
│
├── CapabilitiesExperience
│
├── FloatingMobileShowcase
│
├── ProcessExperience
│
└── ContactFinale
```

This is a conceptual structure.

The exact ordering will be finalized in Volume 3.

---

# 80. Hero Component Architecture

Conceptually:

```text
HeroExperience
│
├── HeroBackground
│
├── HeroStudioLabel
│
├── HeroHeadline
│   ├── LineMask
│   ├── Line
│   └── Line
│
├── HeroSupportingCopy
│
├── HeroCTA
│
└── HeroVisual
```

The hero visual may become part of the scroll transition into the next section.

This creates continuity rather than:

```text
Hero ends
↓
Next section suddenly starts
```

---

# 81. Hero Motion Boundary

The hero should own its entrance timeline.

It may expose DOM references to a section-level animation controller.

Avoid putting the entire hero timeline inside every individual child.

Preferred:

```text
HeroExperience
      ↓
Hero Timeline
      ↓
Coordinates Children
```

This allows choreography.

---

# 82. Featured Project Story Architecture

Conceptually:

```text
FeaturedProjectStory
│
├── StickyProjectVisual
│
├── StoryProgress
│
└── StoryContent
│
    ├── Introduction
│    ├── Challenge
│    ├── Approach
│    └── Result
```

Scroll progression:

```text
0%
│
├── Introduction
│
25%
├── Challenge
│
50%
├── Approach
│
75%
├── Result
│
100%
```

The visual may evolve as the narrative progresses.

---

# 83. Sticky Story Separation

Content and scroll implementation must remain separate.

Conceptually:

```tsx
<FeaturedProjectStory
  project={project}
/>
```

Internally:

```text
Project Data
     ↓
Story Content
     +
Story Timeline
     ↓
Rendered Experience
```

Project data must not contain GSAP instructions.

---

# 84. Horizontal Work Experience

One section may convert vertical scroll progress into horizontal project movement.

Architecture:

```text
HorizontalWorkExperience
│
├── StickyViewport
│
└── HorizontalTrack
│
    ├── ProjectPanel
│
    ├── ProjectPanel
│
    └── ProjectPanel
```

Conceptual relationship:

```text
Vertical Scroll
      ↓
Scroll Progress
      ↓
Horizontal Track Translation
```

---

# 85. Horizontal Section Constraint

There shall be no more than one major horizontal scroll sequence on the homepage unless later usability testing demonstrates otherwise.

Overuse reduces novelty and makes navigation tiring.

---

# 86. Capabilities Composition

Services should not be displayed as:

```text
[ Web ]
[ App ]
[ UI ]
```

inside three identical cards.

Instead, capabilities may use large interactive typography.

Example:

```text
01   DIGITAL PRODUCTS
02   MOBILE EXPERIENCES
03   WEB EXPERIENCES
04   PRODUCT ENGINEERING
```

Hovering or scrolling may reveal supporting imagery or descriptions.

The exact visual design belongs to Volume 3.

---

# 87. Process Composition

The process should communicate:

```text
Discover
Design
Build
Refine
```

without becoming a generic four-card row.

Potential architecture:

```text
ProcessExperience
│
├── StickyProcessHeading
└── ProcessSteps
    ├── ProcessStep
    ├── ProcessStep
    ├── ProcessStep
    └── ProcessStep
```

Steps may progressively enter while the main heading remains anchored.

---

# 88. Contact Finale Architecture

The final CTA should feel like the conclusion of the entire experience.

Conceptually:

```text
ContactFinale
│
├── ClosingStatement
├── PrimaryContactCTA
├── SocialLinks
└── FooterTransition
```

The transition between CTA and footer should be intentional.

The footer should not feel like unrelated information appended to the page.

---

# 89. Navbar Architecture

Conceptual hierarchy:

```text
Navbar
│
├── Logo
│
├── DesktopNavigation
│
│   ├── Work
│
│   ├── Services
│
│   ├── About
│
│   └── Contact
│
├── ContactShortcut
│
└── MobileMenuTrigger
```

Desktop and mobile presentations may differ substantially while sharing navigation data.

---

# 90. Navbar Visual States

Possible states:

```text
INITIAL
Transparent / expanded

        ↓

SCROLLED
Surface blur / compact

        ↓

SCROLLING DOWN
Reduced visibility

        ↓

SCROLLING UP
Visible

        ↓

MENU OPEN
Navigation overlay active
```

Transitions between states must remain subtle.

---

# 91. Navbar State Machine

Conceptually:

```text
             ┌──────────────┐
             │   INITIAL    │
             └──────┬───────┘
                    │ scroll
                    ▼
             ┌──────────────┐
             │   SCROLLED   │
             └──────┬───────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
     SCROLL DOWN          SCROLL UP
          │                   │
          ▼                   ▼
       COMPACT             VISIBLE
```

Menu-open state temporarily overrides scroll visibility behavior.

---

# 92. Mobile Menu Composition

Conceptually:

```text
MobileMenu
│
├── BackgroundLayer
├── MenuHeader
├── NavigationLinks
├── ContactDetails
├── SocialLinks
└── DecorativeMotionLayer
```

The decorative layer must remain restrained.

The menu should feel premium without making navigation slower.

---

# 93. Project Detail Page Composition

Recommended:

```text
ProjectPage
│
├── ProjectHero
├── ProjectOverview
├── ProjectHeroMedia
├── ProjectChallenge
├── ProjectVisualBreak
├── ProjectApproach
├── ProjectGallery
├── ProjectOutcome
└── NextProject
```

Not every project must use exactly this order.

The project data model remains shared while compositions may differ.

---

# 94. Case Study Flexibility

Two projects may intentionally have different presentation structures.

Example:

```text
Food App

Hero
↓
Phone Sequence
↓
Problem
↓
Restaurant Flow
↓
Checkout Flow
↓
Outcome
```

while:

```text
SaaS Dashboard

Hero
↓
Dashboard Panorama
↓
Information Architecture
↓
Feature Details
↓
Desktop Interaction
↓
Outcome
```

This is encouraged.

A case study should reflect the nature of the product.

---

# 95. Project Template Rule

There may be a default project layout for simpler projects.

However, featured projects may override it with custom compositions.

Architecture:

```text
Shared Project Data
        │
        ├── DefaultProjectTemplate
        │
        └── CustomFeaturedExperience
```

This provides efficiency without sacrificing art direction.

---

# 96. Composition Registry

If custom project experiences grow significantly, a controlled registry may be introduced.

Conceptually:

```ts
const projectLayouts = {
  "food-delivery-app": FoodDeliveryCaseStudy,
  "saas-dashboard": SaaSCaseStudy,
};
```

Projects without a custom layout fall back to:

```text
DefaultProjectCaseStudy
```

Do not introduce this system until at least two genuinely different case-study compositions exist.

---

# 97. Component Prop Philosophy

Props should describe intent rather than implementation.

Preferred:

```tsx
<Heading emphasis="strong">
```

Less desirable:

```tsx
<Heading
  fontSize={92}
  lineHeight={0.91}
  letterSpacing={-4}
/>
```

Design implementation should generally remain controlled by the design system.

---

# 98. Boolean Prop Rule

Avoid excessive boolean props.

Poor API:

```tsx
<Component
  dark
  big
  centered
  animated
  sticky
  bordered
  rounded
/>
```

Prefer explicit variants:

```tsx
<Component
  variant="editorial"
  motion="reveal"
/>
```

Or create a distinct composition when behavior fundamentally differs.

---

# 99. Component Responsibility Rule

Each component should have one clear responsibility.

A component should not simultaneously manage:

- Data fetching
- Layout
- Scroll tracking
- Analytics
- Global state
- Complex animation
- Content transformation

For Novaaacode specifically, the most likely complexity comes from animation.

Animation responsibilities should therefore be deliberately isolated.

---

# 100. Animation Component Pattern

For simple reusable reveals:

```tsx
<Reveal>
  <Heading>Selected work</Heading>
</Reveal>
```

For complex experiences:

```text
FeaturedProjectStory
│
├── Layout
└── useFeaturedProjectMotion()
```

or a local animation controller.

Do not wrap every DOM node in an animation abstraction.

---

# 101. Ref Strategy

GSAP-driven components may require DOM refs.

Preferred architecture:

```tsx
const sectionRef = useRef<HTMLElement>(null);
const visualRef = useRef<HTMLDivElement>(null);
const contentRef = useRef<HTMLDivElement>(null);
```

Timeline initialization remains inside the owning composition.

Cleanup is mandatory.

---

# 102. GSAP Context Rule

Every GSAP composition should scope animation selectors and clean them when the component unmounts.

Conceptually:

```ts
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // timeline
  }, sectionRef);

  return () => ctx.revert();
}, []);
```

This prevents stale timelines and cross-component selector collisions.

---

# 103. Motion Ownership Matrix

| Motion Type | Owner |
|---|---|
| Button hover | Button |
| Text reveal | Shared Motion Primitive |
| Image reveal | Media/Reveal Primitive |
| Navbar scroll state | Navbar |
| Hero choreography | HeroExperience |
| Project sticky timeline | FeaturedProjectStory |
| Horizontal work | HorizontalWorkExperience |
| Page transition | Global Motion Layer |
| Project gallery hover | Gallery Component |
| Custom case-study sequence | Case Study Composition |

---

# 104. Responsive Component Strategy

Responsive behavior should be designed rather than merely scaled.

Desktop composition:

```text
TEXT                 PHONE
                     PHONE
```

may become:

```text
TEXT

PHONE

PHONE
```

on mobile.

Some desktop scroll choreography should become simpler stacked storytelling on mobile.

---

# 105. Mobile Motion Rule

Mobile should prioritize:

- Readability
- Touch performance
- Natural scrolling
- Battery efficiency

Desktop-only effects may include:

- Pointer parallax
- Magnetic cursor
- Complex hover states

Mobile equivalents should not attempt to simulate pointer interactions.

---

# 106. Composition Breakpoint Strategy

A composition may have different structural implementations when necessary.

Example:

```tsx
return isDesktop
  ? <DesktopProjectStory />
  : <MobileProjectStory />;
```

However, CSS responsiveness should remain preferred for simple layout changes.

Separate structural components are justified when animation architecture differs fundamentally.

---

# 107. Custom Cursor Architecture

A custom cursor is optional.

If implemented:

```text
CursorProvider
      ↓
Pointer Position
      ↓
Cursor State
      ↓
Cursor Visual
```

Possible states:

```text
default
view
drag
external
```

It must never replace the native pointer in a way that reduces usability.

---

# 108. Custom Cursor Constraints

Disable custom cursor when:

- Touch input is detected
- Reduced motion is requested
- Device performance is inadequate
- Pointer type is coarse

The portfolio must work perfectly without it.

---

# 109. Layer Architecture

A standardized z-index system should be established.

Conceptually:

```text
base        0
content     10
floating    20
navbar      40
overlay     60
menu        80
transition  100
cursor      120
```

Avoid arbitrary values such as:

```text
z-[999999]
```

unless there is a documented reason.

---

# 110. Portal Strategy

Portals should only be used for interface elements that genuinely need to escape layout boundaries.

Examples:

- Full-screen menu
- Modal
- Page transition overlay
- Custom cursor

Do not portal normal content.

---

# 111. Error Boundary Components

Even though the site is static, visual failures should degrade gracefully.

A failed project image should not destroy the entire layout.

Relevant boundaries may include:

- Media fallback
- Route not found
- Optional video fallback

---

# 112. Empty State Philosophy

Because project content is curated, users should rarely encounter empty states.

Development-time empty states may exist for:

```text
No projects configured
No project media
Missing optional content
```

Production should never expose unfinished placeholders.

---

# 113. Loading Component Philosophy

Static content should appear quickly.

Avoid unnecessary branded loaders.

A full-screen loading animation should not delay content merely to appear cinematic.

If an experience needs loading:

```text
Skeleton / reserved layout
        ↓
Media arrives
        ↓
Subtle reveal
```

Performance is part of premium design.

---

# 114. Progressive Enhancement

Core content must remain usable without advanced motion.

Architecture:

```text
Semantic HTML
     ↓
Responsive CSS
     ↓
Core Interaction
     ↓
Motion Enhancement
     ↓
Advanced Scroll Enhancement
```

Each layer improves the previous one.

None should replace it.

---

# 115. Design-System Integration Boundary

Volume 4 will define exact:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Breakpoints
- Component styling

Volume 2 defines how those values enter the application.

Architecture:

```text
DESIGN SYSTEM
     ↓
TOKENS
     ↓
PRIMITIVES
     ↓
COMPOUNDS
     ↓
COMPOSITIONS
```

Compositions must consume the system rather than inventing a separate visual language.

---

# 116. Intentional Design Exceptions

Unique compositions may occasionally break standard spacing or sizing rules.

Example:

A project image may intentionally extend beyond the normal content grid.

This is allowed when:

1. The exception is intentional.
2. It improves composition.
3. Responsive behavior remains correct.
4. It does not create inconsistency elsewhere.

A premium editorial layout requires controlled exceptions.

---

# 117. Component Documentation

Complex reusable components should document:

```text
Purpose
Expected usage
Variants
Responsive behavior
Accessibility
Motion behavior
```

Simple components do not require verbose documentation.

Code should remain readable without excessive comments.

---

# 118. Component Testing Priority

Highest testing priority:

```text
Navigation
Project routing
Interactive controls
Responsive layout
Reduced-motion behavior
Project data rendering
```

Lower priority:

Pure decorative elements.

The test strategy will be expanded later in this volume.

---

# 119. Component Quality Checklist

Before considering a reusable component complete:

- [ ] Responsibility is clear.
- [ ] Props are minimal.
- [ ] Accessibility is considered.
- [ ] Responsive behavior is defined.
- [ ] Motion behavior is intentional.
- [ ] It does not contain unrelated page logic.
- [ ] It does not duplicate another component.
- [ ] It does not over-generalize unique compositions.
- [ ] It works without animation where appropriate.

---

# 120. Anti-Pattern — Universal Card

Do not create one universal:

```text
<Card />
```

and use it for:

- Projects
- Services
- Process
- Testimonials
- Contact
- Technologies

This is one of the fastest ways to make the website resemble a generic template.

Different information deserves different presentation.

---

# 121. Anti-Pattern — Everything Animated

Do not create:

```tsx
<AnimatedSection>
  <AnimatedHeading />
  <AnimatedText />
  <AnimatedCard />
  <AnimatedImage />
  <AnimatedButton />
</AnimatedSection>
```

simply because animation components exist.

Motion hierarchy matters.

One dominant motion event is usually stronger than five competing ones.

---

# 122. Anti-Pattern — Component Fragmentation

Avoid:

```text
Hero/
├── Hero.tsx
├── HeroTitle.tsx
├── HeroSubtitle.tsx
├── HeroButton.tsx
├── HeroImage.tsx
├── HeroWrapper.tsx
├── HeroContainer.tsx
└── HeroBackground.tsx
```

unless those pieces genuinely contain independent complexity.

Component count is not a measure of architectural quality.

---

# 123. Anti-Pattern — Premature Abstraction

Do not abstract something after its first occurrence simply because it might be reused later.

Preferred rule:

> Abstract after a repeated pattern becomes clear.

Exceptions apply to obvious design-system primitives such as buttons and containers.

---

# 124. Anti-Pattern — Visual Uniformity

Consistency does not mean:

```text
same card
same grid
same heading
same animation
same spacing
```

for every section.

Consistency means:

```text
same design language
+
different compositions
```

This distinction is fundamental to Novaaacode.

---

# 125. Final Component Model

The complete conceptual hierarchy becomes:

```text
NOVAAACODE
│
├── DESIGN TOKENS
│
│   ├── Color
│   ├── Typography
│   ├── Spacing
│   ├── Motion
│   └── Layering
│
├── PRIMITIVES
│
│   ├── Button
│   ├── Link
│   ├── Heading
│   ├── Container
│   ├── Section
│   └── Media
│
├── COMPOUNDS
│
│   ├── ProjectMeta
│   ├── ProjectPreview
│   ├── ServiceItem
│   ├── Navigation
│   └── DeviceFrame
│
├── EXPERIENCES
│
│   ├── HeroExperience
│   ├── FeaturedProjectStory
│   ├── HorizontalWorkExperience
│   ├── CapabilitiesExperience
│   ├── FloatingMobileShowcase
│   ├── ProcessExperience
│   └── ContactFinale
│
└── ROUTES
    │
    ├── Home
    ├── Work
    ├── Project
    ├── Services
    ├── About
    └── Contact
```

---

# 126. Part 3 Architecture Decisions

| Decision | Status |
|---|---|
| Layered component hierarchy | Locked |
| Design tokens beneath components | Locked |
| Reusable primitives | Locked |
| Domain compound components | Locked |
| Unique experience compositions | Locked |
| Shared device frames | Approved |
| Identical project layouts | Rejected |
| Custom featured case studies | Approved |
| Universal card component | Rejected |
| Motion ownership boundaries | Locked |
| Mobile motion simplification | Locked |
| Custom cursor | Optional |
| Progressive enhancement | Locked |
| Controlled design exceptions | Approved |
| Premature abstraction | Rejected |

---

# End of Volume 2 — Part 3

**Next: Part 4 — Motion Architecture, Scroll Engine & Animation Orchestration**