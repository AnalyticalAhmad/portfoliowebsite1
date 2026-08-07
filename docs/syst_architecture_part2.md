# Volume 2 — System Architecture

## Part 2 — Application Structure, Routing & Folder Architecture

---

# 16. Application Structure Strategy

The Novaaacode Portfolio shall use a feature-oriented architecture while preserving a clear shared foundation for reusable UI, motion and configuration.

The structure must satisfy three goals:

1. Make the project easy to understand.
2. Keep motion logic isolated from page content.
3. Allow new projects and sections to be added without restructuring the entire application.

The architecture should remain easy enough for a single developer to maintain while still resembling production-grade software organization.

The project shall avoid both extremes:

- A flat folder structure where everything lives in `components/`
- An enterprise-heavy structure with unnecessary layers and abstractions

The chosen structure should remain practical.

---

# 17. Root Project Structure

Recommended project structure:

```text
novaaacode-portfolio/
│
├── public/
│   ├── images/
│   ├── projects/
│   ├── mockups/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── motion/
│   ├── content/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   └── config/
│
├── docs/
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

# 18. `src/app` Architecture

The project should use the Next.js App Router.

Recommended structure:

```text
src/app/
│
├── layout.tsx
├── page.tsx
├── globals.css
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
├── not-found.tsx
├── loading.tsx
└── sitemap.ts
```

The initial release may keep several sections on the homepage, but the routing architecture should support dedicated pages where they improve storytelling.

---

# 19. Route Responsibilities

## `/`

Primary studio experience.

Responsibilities:

- Hero experience
- Featured work
- Studio statement
- Selected services
- Process
- Final CTA

The homepage should not contain every possible piece of information.

Its job is to establish quality and guide visitors toward projects or contact.

---

## `/work`

Complete project archive.

Responsibilities:

- Display selected projects
- Allow filtering if eventually required
- Introduce the work philosophy
- Provide access to individual case studies

This page should remain visually editorial rather than becoming a conventional card gallery.

---

## `/work/[slug]`

Individual project case study.

Examples:

```text
/work/portfolio-website
/work/food-delivery-app
/work/expense-tracker
/work/cv-builder
```

Responsibilities:

- Project overview
- Context
- Problem
- Design approach
- Development approach
- Final visuals
- Technologies
- Outcome
- Next project navigation

---

## `/about`

Studio/about page.

Responsibilities:

- Philosophy
- Development approach
- Design thinking
- Experience
- Working principles

Avoid writing a traditional CV-style biography.

---

## `/services`

Optional dedicated service page.

Responsibilities:

- Web development
- Mobile applications
- UI/UX
- Backend systems
- API integration

Service descriptions should remain outcome-driven rather than technology-driven.

---

## `/contact`

Simple contact experience.

Since Version 1 does not require a backend, the route may contain:

- Contact interface
- Email link
- Instagram/social profile
- Project enquiry UI
- Optional mailto interaction

No fake server functionality should be introduced.

---

# 20. Route Rendering Rules

Each route should contain minimal implementation logic.

Example:

```tsx
export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <ProjectIndex />
      <ContactCTA />
    </>
  );
}
```

Avoid large page files containing:

- Full animation timelines
- Project arrays
- Utility functions
- Complex layout logic
- Reusable elements

Those belong elsewhere.

---

# 21. `components` Architecture

The `components` directory shall contain reusable design-system-level UI.

Recommended structure:

```text
src/components/
│
├── ui/
│   ├── button.tsx
│   ├── link.tsx
│   ├── container.tsx
│   ├── heading.tsx
│   ├── section-label.tsx
│   ├── divider.tsx
│   └── icon.tsx
│
├── layout/
│   ├── navbar.tsx
│   ├── mobile-menu.tsx
│   ├── footer.tsx
│   └── page-shell.tsx
│
├── media/
│   ├── responsive-image.tsx
│   ├── video-frame.tsx
│   ├── device-frame.tsx
│   ├── phone-mockup.tsx
│   └── laptop-mockup.tsx
│
└── feedback/
    ├── loading-indicator.tsx
    └── transition-overlay.tsx
```

These components should remain generic enough to support multiple compositions.

---

# 22. `features` Architecture

Page-specific experiences belong inside `features`.

Recommended structure:

```text
src/features/
│
├── home/
│   ├── hero/
│   ├── featured-project/
│   ├── studio-intro/
│   ├── capabilities/
│   ├── process/
│   └── contact-finale/
│
├── work/
│   ├── work-index/
│   ├── project-preview/
│   └── project-navigation/
│
├── project/
│   ├── project-hero/
│   ├── project-story/
│   ├── project-gallery/
│   ├── project-tech/
│   └── project-outcome/
│
├── about/
│   ├── about-hero/
│   ├── philosophy/
│   └── principles/
│
└── contact/
    ├── contact-hero/
    └── inquiry-panel/
```

Each feature folder may contain:

```text
component.tsx
motion.ts
types.ts
constants.ts
```

only when necessary.

Do not create empty architectural files for the sake of consistency.

---

# 23. Feature Isolation Rule

A feature should own its own unique composition.

For example:

```text
features/home/featured-project/
```

may contain:

- Sticky project visual
- Scroll labels
- Project metadata
- Section-specific GSAP timeline

That logic should not be moved into a global `animations.ts` file if it only makes sense for that one section.

Shared behavior belongs globally.

Unique storytelling stays local.

---

# 24. `motion` Architecture

Shared motion behavior shall live in:

```text
src/motion/
│
├── presets/
│   ├── fade.ts
│   ├── reveal.ts
│   ├── stagger.ts
│   ├── scale.ts
│   └── slide.ts
│
├── gsap/
│   ├── register.ts
│   ├── scroll.ts
│   ├── parallax.ts
│   └── cleanup.ts
│
├── transitions/
│   ├── page-transition.ts
│   └── section-transition.ts
│
└── tokens.ts
```

---

# 25. Motion Tokens

Motion should use predefined tokens rather than arbitrary values.

Example:

```ts
export const motionDuration = {
  fast: 0.2,
  normal: 0.45,
  slow: 0.8,
  cinematic: 1.2,
};

export const motionEase = {
  standard: [0.22, 1, 0.36, 1],
  soft: [0.16, 1, 0.3, 1],
};
```

This creates visual consistency.

---

# 26. `content` Architecture

All manually curated content should live separately from presentation.

Recommended:

```text
src/content/
│
├── projects.ts
├── services.ts
├── navigation.ts
├── studio.ts
├── testimonials.ts
└── contact.ts
```

If the amount of project content becomes large:

```text
src/content/projects/
│
├── index.ts
├── portfolio.ts
├── food-delivery.ts
├── cv-builder.ts
└── expense-tracker.ts
```

---

# 27. Project Data Model

Recommended project model:

```ts
export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  year: string;
  summary: string;

  heroImage: string;
  thumbnail: string;

  services: string[];
  technologies: string[];

  challenge?: string;
  approach?: string;
  outcome?: string;

  gallery: ProjectMedia[];

  featured: boolean;
  order: number;
};
```

Supporting media type:

```ts
export type ProjectMedia = {
  type: "image" | "video" | "mockup";
  src: string;
  alt: string;
  orientation?: "portrait" | "landscape";
};
```

---

# 28. Project Ordering

Project order shall be controlled through data rather than JSX position.

Example:

```ts
order: 1
```

This enables rearranging featured projects without modifying page architecture.

---

# 29. Content Validation

Although a CMS is not used, project data should remain strongly typed.

The application should fail during development when required project fields are missing.

Optional future improvement:

Use a lightweight schema validator such as Zod only if content complexity makes it genuinely valuable.

Do not introduce validation dependencies without need.

---

# 30. `hooks` Architecture

Custom hooks should only exist when browser behavior is reused.

Recommended examples:

```text
src/hooks/
│
├── use-media-query.ts
├── use-scroll-direction.ts
├── use-reduced-motion.ts
├── use-pointer-position.ts
└── use-mounted.ts
```

Avoid creating hooks that simply wrap one line of React logic.

---

# 31. Scroll Direction Hook

A reusable scroll direction hook may control:

- Navbar compression
- Navbar hiding
- Floating utility visibility

Example behavior:

```text
Scroll Down
   ↓
Navbar compresses / hides

Scroll Up
   ↓
Navbar returns
```

This logic should remain centralized.

---

# 32. Reduced Motion Hook

The site must respect:

```css
prefers-reduced-motion
```

Animation-heavy sections shall provide simplified behavior when motion reduction is requested.

Examples:

- Remove parallax
- Disable sticky transformations
- Replace scrubbed sequences with static layouts
- Keep simple opacity reveals where appropriate

Accessibility must not require a separate site.

---

# 33. `lib` Architecture

Utility and infrastructure code belongs here.

```text
src/lib/
│
├── cn.ts
├── metadata.ts
├── projects.ts
├── seo.ts
└── browser.ts
```

Examples:

- Class merging
- Project lookup by slug
- Metadata generation
- Structured SEO helpers

---

# 34. `types` Architecture

Shared domain types live in:

```text
src/types/
│
├── project.ts
├── navigation.ts
├── media.ts
└── common.ts
```

Do not create one enormous global type file.

Types should remain grouped by domain.

---

# 35. `config` Architecture

Global configuration:

```text
src/config/
│
├── site.ts
├── navigation.ts
├── social.ts
└── animation.ts
```

Example:

```ts
export const siteConfig = {
  name: "Novaaacode",
  description:
    "Digital products designed and developed with purpose.",
};
```

Hardcoded site metadata should not be repeated across routes.

---

# 36. Asset Architecture

Recommended public structure:

```text
public/
│
├── projects/
│   ├── portfolio/
│   ├── food-app/
│   ├── cv-builder/
│   └── expense-tracker/
│
├── mockups/
│   ├── iphone/
│   ├── macbook/
│   └── browser/
│
├── brand/
│   ├── logo.svg
│   └── marks/
│
└── textures/
```

Do not place hundreds of unrelated files directly under `/public`.

---

# 37. Asset Naming Standard

Use:

```text
food-app-home.webp
food-app-checkout.webp
portfolio-hero.webp
portfolio-project-grid.webp
```

Avoid:

```text
image1.png
newimage-final2.png
screenshot_latest.png
```

---

# 38. Image Format Strategy

Preferred:

```text
AVIF
WebP
SVG
```

Use PNG only where transparency or source quality makes it necessary.

Avoid unnecessarily large JPEG/PNG assets.

---

# 39. Media Component Strategy

All significant imagery should use shared wrappers that handle:

- Responsive sizing
- Aspect ratio
- Loading
- Accessibility
- Optional reveal animation

Example:

```tsx
<ProjectImage
  src={project.heroImage}
  alt="..."
  reveal
/>
```

This ensures visual consistency without forcing identical layouts.

---

# 40. Layout Architecture

Global layout should provide:

```text
Root Layout
│
├── Font configuration
├── Global metadata
├── Navigation
├── Main route content
├── Footer
└── Motion infrastructure
```

The root layout should not own page-specific animation timelines.

---

# 41. Container Strategy

Avoid one fixed container width across the entire website.

The design system should support:

```text
container-sm
container-md
container-lg
container-wide
container-full
```

Example usage:

- Text sections: narrow
- Project storytelling: medium/wide
- Full-bleed imagery: full
- Editorial compositions: custom

This helps prevent the generic “everything inside one centered 1200px box” appearance.

---

# 42. Section Architecture

A section may choose one of several spatial strategies:

### Narrow Editorial

```text
      TEXT
      TEXT
      TEXT
```

### Wide Showcase

```text
|             PROJECT VISUAL              |
```

### Split Composition

```text
TEXT                 VISUAL
TEXT                 VISUAL
```

### Asymmetric Composition

```text
           VISUAL

TEXT
        SMALL VISUAL
```

### Full Bleed

```text
████████████████████████████████
████████ PROJECT VISUAL ████████
████████████████████████████████
```

The architecture should enable all of these without custom page hacks.

---

# 43. Routing Data Flow

Project route resolution:

```text
URL
 ↓
/work/food-delivery-app
 ↓
slug = food-delivery-app
 ↓
getProjectBySlug(slug)
 ↓
Project Data
 ↓
Project Page Composition
```

If no project matches:

```text
notFound()
```

No manual route switch statements.

---

# 44. Metadata Architecture

Individual projects should generate their own metadata.

Conceptual implementation:

```ts
generateMetadata({ params })
```

Uses:

- Project title
- Project summary
- Social preview
- Canonical URL

This keeps future deployment readiness intact even if the portfolio initially remains local.

---

# 45. Navigation Architecture

Primary navigation:

```text
Work
Services
About
Contact
```

Logo returns to `/`.

On mobile:

```text
Menu button
   ↓
Full-screen navigation overlay
```

The mobile menu should be treated as a designed experience rather than a generic drawer.

---

# 46. Mobile Navigation Behavior

Recommended:

- Full viewport overlay
- Large typography
- Minimal links
- Smooth masked reveal
- Social/contact details positioned separately
- Close action remains obvious

Avoid overly complex nested menus.

---

# 47. Navigation State

No global state library is necessary.

Navigation state can remain local:

```ts
const [isOpen, setIsOpen] = useState(false);
```

If global state becomes necessary later, introduce it only after a concrete use case exists.

---

# 48. State Architecture

Version 1 should have extremely limited application state.

Expected state categories:

### Local UI State

- Mobile menu
- Hover state
- Project gallery selection
- Modal state

### Derived State

- Active route
- Scroll direction
- Viewport width
- Reduced motion preference

### Persistent State

None initially.

No Redux.

No Zustand.

No context provider tree unless required.

---

# 49. State Rule

State shall live as close as possible to where it is used.

Avoid:

```text
Global Provider
     ↓
Entire Application
```

for simple interface state.

Preferred:

```text
Component
   ↓
Local State
```

---

# 50. Folder Boundary Rule

Each folder should have a clear reason to exist.

Do not create directories simply because a boilerplate template contains them.

Before adding a directory ask:

> Does this contain a distinct architectural responsibility?

If not, do not create it.

---

# 51. Barrel Export Strategy

Avoid excessive `index.ts` barrel files.

Barrel exports may be used for stable public feature APIs.

Example:

```text
features/project/index.ts
```

may export:

```ts
export { ProjectHero } from "./project-hero";
export { ProjectGallery } from "./project-gallery";
```

Do not create nested barrel exports throughout every folder, as they complicate dependency tracing.

---

# 52. Dependency Direction

Preferred dependency flow:

```text
Pages
 ↓
Features
 ↓
Components
 ↓
Foundation
```

Content may be consumed by:

```text
Pages
Features
```

Low-level shared components must never import feature-specific modules.

Incorrect:

```text
Button → FeaturedProject
```

Correct:

```text
FeaturedProject → Button
```

---

# 53. Import Aliases

Recommended aliases:

```json
{
  "@/*": ["./src/*"]
}
```

Example:

```ts
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
```

Avoid deep relative imports such as:

```text
../../../../../components/button
```

---

# 54. Naming Standards

React components:

```text
PascalCase
```

Files:

```text
kebab-case.tsx
```

Variables:

```text
camelCase
```

Constants:

```text
camelCase
```

Types:

```text
PascalCase
```

Routes:

```text
kebab-case
```

---

# 55. Feature Naming Philosophy

Names should describe purpose.

Preferred:

```text
FeaturedProjectStory
ProjectGallery
StudioIntroduction
ContactFinale
```

Avoid:

```text
CoolSection
Section2
AnimationBox
CardThing
```

Architecture should remain readable without opening every file.

---

# 56. Part 2 Architecture Decision Summary

The following decisions are now defined:

| Decision | Status |
|---|---|
| Next.js App Router | Locked |
| `/work/[slug]` case studies | Locked |
| Feature-oriented structure | Locked |
| Shared component layer | Locked |
| Separate motion layer | Locked |
| Static typed content | Locked |
| Local state first | Locked |
| No global state library initially | Locked |
| Project assets grouped by project | Locked |
| Multiple container widths | Locked |
| Unique composition components | Locked |
| Generic section templates | Rejected |
| Mobile overlay navigation | Approved |
| Route-level metadata | Approved |

---

# End of Volume 2 — Part 2

**Next:** Part 3 — Component Architecture, Design-System Integration & Composition Model