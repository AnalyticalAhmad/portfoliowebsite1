# Volume 2 — System Architecture

## Part 4 — Motion Architecture, Scroll Engine & Animation Orchestration

---

# 127. Motion Architecture Objective

Motion is a first-class architectural concern of the Novaaacode Portfolio.

It shall not be implemented as a collection of unrelated effects added after the interface has been completed.

Instead, motion shall operate as a coordinated system responsible for:

- Visual hierarchy
- Story progression
- Spatial continuity
- Interaction feedback
- Section transitions
- Focus management
- Perceived depth
- Brand personality

The objective is:

> Make the interface feel alive without making the interface feel busy.

Motion must remain subordinate to content.

---

# 128. Motion Architecture Overview

The system shall contain four motion layers.

```text
MOTION SYSTEM
│
├── 1. MICRO MOTION
│
│   ├── Buttons
│   ├── Links
│   ├── Navigation
│   └── Hover feedback
│
├── 2. REVEAL MOTION
│
│   ├── Text
│   ├── Images
│   ├── Sections
│   └── Content groups
│
├── 3. SCROLL MOTION
│
│   ├── Parallax
│   ├── Floating
│   ├── Sticky
│   ├── Scrubbing
│   └── Horizontal movement
│
└── 4. EXPERIENCE MOTION
    │
    ├── Hero choreography
    ├── Project storytelling
    ├── Section transitions
    └── Page transitions
```

Each layer requires different implementation strategies.

---

# 129. Technology Responsibility

Motion technology responsibilities are strictly separated.

## CSS

Use CSS for:

- Simple hover transitions
- Color transitions
- Basic transforms
- Focus states
- Very small interaction feedback

---

## Framer Motion

Use for:

- Entrance animations
- Exit animations
- Component reveals
- Layout transitions
- Navigation
- Modals
- Mobile menu
- Hover interactions
- Reusable animation primitives

---

## GSAP

Use for:

- ScrollTrigger
- Pinned sections
- Scroll-scrubbed sequences
- Advanced parallax
- Horizontal scrolling
- Complex timelines
- Section-to-section choreography
- Project storytelling

---

# 130. Golden Motion Rule

The implementation should always use the simplest tool capable of producing the desired result.

Do not use GSAP for:

```text
button opacity 0 → 1
```

Do not use Framer Motion to construct an extremely complex pinned multi-stage scroll timeline when GSAP is more appropriate.

Do not use JavaScript where CSS provides the same result reliably.

---

# 131. Motion Token Architecture

Shared motion values shall be centralized.

Conceptually:

```ts
export const duration = {
  instant: 0.15,
  fast: 0.25,
  normal: 0.45,
  slow: 0.75,
  cinematic: 1.1,
};
```

Easing:

```ts
export const easing = {
  standard: [0.22, 1, 0.36, 1],
  soft: [0.16, 1, 0.3, 1],
  entrance: [0.16, 1, 0.3, 1],
  exit: [0.7, 0, 0.84, 0],
};
```

Exact values shall be finalized in Volume 5.

---

# 132. Motion Intensity Levels

Animations should be classified into three levels.

## Level 1 — Micro

Examples:

- Button arrow
- Link underline
- Navigation state
- Small hover

Duration:

Approximately 150–350ms.

---

## Level 2 — Interface

Examples:

- Text reveal
- Image reveal
- Menu entrance
- Content transition

Duration:

Approximately 350–800ms.

---

## Level 3 — Cinematic

Examples:

- Hero entrance
- Sticky storytelling
- Full section transition
- Project reveal

These may follow scroll progress instead of fixed durations.

---

# 133. Motion Hierarchy

When several elements enter simultaneously, hierarchy must determine order.

Example:

```text
Section Label
      ↓
Headline
      ↓
Description
      ↓
Visual
      ↓
Secondary Details
```

Everything should not fade in simultaneously.

---

# 134. Stagger Architecture

Reusable stagger configuration should exist.

Example:

```ts
const stagger = {
  tight: 0.04,
  normal: 0.08,
  relaxed: 0.14,
};
```

Stagger should communicate grouping.

It should not artificially delay content.

---

# 135. Reveal Architecture

The website shall support multiple reveal families.

```text
Reveal
│
├── Fade
├── Rise
├── Mask
├── Blur
├── Scale
├── Clip
└── Stagger
```

Not every section should use the same reveal.

---

# 136. Standard Fade/Rise Reveal

Typical:

```text
Initial

opacity: 0
translateY: 24–40px

↓

Final

opacity: 1
translateY: 0
```

This should be reserved for secondary content.

It should not become the animation applied to everything.

---

# 137. Blur Reveal

Possible sequence:

```text
opacity    0 → 1
blur      12px → 0
translate 20px → 0
```

Useful for:

- Supporting copy
- Editorial statements
- Atmospheric transitions

Avoid heavy blur on large areas because it increases rendering cost.

---

# 138. Masked Text Reveal

Important headings should use masked line reveals.

Architecture:

```text
TextReveal
│
├── Overflow Mask
│   └── Text Line
│
├── Overflow Mask
│   └── Text Line
│
└── Overflow Mask
    └── Text Line
```

Initial:

```text
translateY: 110%
```

Final:

```text
translateY: 0%
```

This creates a more intentional editorial reveal than ordinary opacity animation.

---

# 139. Text Splitting Strategy

Avoid unnecessary per-character animation.

Preferred hierarchy:

```text
Line animation      → preferred
Word animation      → occasional
Character animation → rare
```

Character-level animation can feel gimmicky and create accessibility complexity.

---

# 140. Image Reveal Architecture

Images may reveal using an overflow mask.

Conceptual:

```text
ImageReveal
│
├── Mask Container
│
└── Image
```

Animation:

```text
Mask:
clip / scale

Image:
scale 1.06 → 1
```

This creates subtle depth.

---

# 141. Image Curtain Reveal

For high-priority visuals:

```text
IMAGE
████████████████
████ COVER █████
████████████████

        ↓

Cover translates away

        ↓

IMAGE REVEALED
```

The curtain may use the surrounding section background rather than an arbitrary accent color.

---

# 142. Scroll Architecture

Scroll behavior shall be divided into:

```text
Native Scroll
     ↓
Scroll Observation
     ↓
Scroll Progress
     ↓
Animation Mapping
     ↓
Visual Transformation
```

The system must not intercept scrolling unnecessarily.

---

# 143. ScrollTrigger Registration

GSAP plugins shall be registered once.

Conceptually:

```ts
gsap.registerPlugin(ScrollTrigger);
```

Registration should live within dedicated motion infrastructure.

Do not repeatedly register plugins inside feature components.

---

# 144. ScrollTrigger Ownership

Each composition owns its own triggers.

Example:

```text
HeroExperience
      ↓
Hero ScrollTrigger

FeaturedProjectStory
      ↓
Project ScrollTriggers

HorizontalWork
      ↓
Horizontal ScrollTrigger
```

Avoid one enormous homepage animation file.

---

# 145. Trigger Lifecycle

Every trigger must:

1. Initialize after relevant DOM exists.
2. Scope itself to its composition.
3. Respond correctly to viewport changes.
4. Be destroyed when no longer needed.

No orphan ScrollTriggers.

---

# 146. Floating Animation System

Floating is one of the primary visual behaviors requested for Novaaacode.

Floating should not mean endlessly bouncing elements.

Instead, floating represents subtle scroll-linked displacement.

Example:

```text
Normal Scroll
     ↓

Phone Mockup      translateY: -80px
Small Label       translateY: -30px
Background Shape  translateY: +40px
```

This creates depth.

---

# 147. Floating Layer Model

Each floating composition may use three depth layers.

```text
FOREGROUND
   ↑ faster displacement

MIDGROUND
   ↑ moderate displacement

BACKGROUND
   ↑ slower displacement
```

Conceptual values:

```text
foreground: 1.15
midground:   1.00
background:  0.65
```

These are relative conceptual speeds, not final implementation constants.

---

# 148. Floating Constraint

Floating movement should generally remain small.

The user should perceive:

> depth

rather than:

> something is moving everywhere.

Avoid excessive travel distances.

---

# 149. Scroll Invisibility System

Elements may progressively disappear as the visitor moves away from them.

This is especially valuable for the hero.

Example:

```text
Scroll Progress

0%                 100%

Opacity
1 ───────────────→ 0

Blur
0 ───────────────→ 10px

Scale
1 ───────────────→ .97
```

The effect creates visual focus on incoming content.

---

# 150. Hero Exit Sequence

Recommended hero scroll behavior:

```text
INITIAL

Headline visible
Description visible
CTA visible
Project visual lower in viewport

        ↓ scroll

Headline moves slightly upward
Headline opacity decreases
Description fades faster
CTA disappears
Project visual moves toward focus

        ↓

Hero copy becomes nearly invisible

        ↓

Project visual becomes bridge
into next section
```

This creates continuity.

---

# 151. Cross-Section Transition Architecture

Sections should occasionally share elements.

Example:

```text
HERO
│
│    floating device
│          ↓
└──────────┼─────────
           ↓
FEATURED PROJECT
```

Instead of:

```text
Hero
END

Featured Project
START
```

Shared visual continuity makes the website feel directed.

---

# 152. Sticky Architecture

Sticky sections should be used for storytelling.

Basic architecture:

```text
Story Section
│
├── Sticky Visual
│
└── Scrolling Content
    ├── Step 1
    ├── Step 2
    ├── Step 3
    └── Step 4
```

---

# 153. Sticky Story Timeline

Example:

```text
0–25%
Introduction

25–50%
Challenge

50–75%
Design

75–100%
Outcome
```

The visual may update at each stage.

---

# 154. Sticky Visual Transitions

The sticky visual may change through:

- Crossfade
- Mask reveal
- Translation
- Screen replacement
- UI zoom
- Device movement

Avoid completely unrelated visual transformations between every step.

The sequence should feel continuous.

---

# 155. Pinning Rule

Pinned sections should be reserved for high-value storytelling.

Do not pin:

- Every heading
- Every project
- Every service
- Every image

Overuse makes scrolling feel artificially constrained.

---

# 156. Horizontal Scroll Architecture

One major horizontal experience is permitted.

Structure:

```text
HorizontalSection
│
├── StickyViewport
│
└── Track
    │
    ├── Project 01
    ├── Project 02
    ├── Project 03
    └── Project 04
```

Vertical scroll distance drives horizontal translation.

---

# 157. Horizontal Scroll Mapping

Conceptually:

```text
Vertical Progress

0% ───────────────── 100%

maps to

Horizontal Translation

0 ───────────────── -TrackWidth
```

Movement should feel directly connected to scrolling.

---

# 158. Horizontal Section Exit

The final project must naturally transition back into vertical scrolling.

The visitor should not experience an abrupt:

```text
horizontal movement
STOP
vertical movement
```

The final panel should visually prepare the next vertical section.

---

# 159. Parallax Architecture

Parallax shall use scroll-linked transforms rather than background-position manipulation where possible.

Preferred:

```text
transform: translate3d(...)
```

Avoid expensive layout properties.

---

# 160. Parallax Categories

### Atmospheric Parallax

Very slow background movement.

### Media Parallax

Image moves slightly inside a clipping container.

### Composition Parallax

Multiple independent objects move at different speeds.

### Typography Parallax

Large decorative text moves independently from foreground content.

Typography parallax should be used sparingly.

---

# 161. Media Internal Parallax

Example:

```text
FRAME
┌───────────────────────────┐
│                           │
│      oversized image      │
│          ↕                │
│                           │
└───────────────────────────┘
```

The image moves inside a fixed mask.

This provides movement without shifting the page layout.

---

# 162. Scale-on-Scroll

Scale transformations may create depth.

Example:

```text
0% scroll    scale .94
50%          scale 1
100%         scale 1.03
```

Use primarily for:

- Major project imagery
- Section transitions
- Full-screen media

Do not apply to every card.

---

# 163. Full-Screen Expansion

A project preview may expand toward full viewport width during scroll.

Conceptually:

```text
Initial

        ┌────────────┐
        │  PROJECT   │
        └────────────┘

              ↓

      ┌──────────────────┐
      │                  │
      │     PROJECT      │
      │                  │
      └──────────────────┘

              ↓

████████████████████████████
██████████ PROJECT █████████
████████████████████████████
```

This can create a cinematic entry into a project showcase.

---

# 164. Section Background Transitions

Background changes should interpolate rather than abruptly switch where appropriate.

Example:

```text
Off White
    ↓
Warm Grey
    ↓
Near Black
```

Background transitions may correspond to project mood.

---

# 165. Dark Section Transition

A dark project section may emerge underneath a light section.

Possible effect:

```text
Light Section
████████████████████

scroll

████████████████████
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▒▒▒ DARK SECTION ▒▒▒

scroll

████ DARK SECTION ████
```

The transition should feel spatial rather than like a theme toggle.

---

# 166. Section Overlap

Controlled overlapping sections may be used.

Example:

```text
Previous Section
██████████████████
██████████████████

      Next Section
      ┌───────────────
      │
      │
```

The next section may visually rise over the previous one.

This requires careful z-index ownership.

---

# 167. Scroll Progress Architecture

A normalized progress value may be used:

```text
0.0 → 1.0
```

This value can drive:

- Opacity
- Translation
- Scale
- Blur
- Rotation
- Mask position

Animations should map related properties from the same progress where appropriate.

---

# 168. Rotation Constraint

Rotation should be extremely restrained.

Allowed:

```text
-2° → 0°
0° → 2°
```

for floating editorial visuals.

Avoid dramatic rotation of devices or project interfaces.

The product itself should remain readable.

---

# 169. Pointer Parallax

Desktop hero/project visuals may react subtly to pointer position.

Architecture:

```text
Pointer Position
      ↓
Normalized X/Y
      ↓
Interpolation
      ↓
Visual Transform
```

Maximum displacement should remain small.

---

# 170. Pointer Smoothing

Pointer movement must not map directly to transforms.

Instead:

```text
Pointer
   ↓
Target Position
   ↓
Interpolation / spring
   ↓
Rendered Position
```

This prevents jitter.

---

# 171. Magnetic Interaction

Selected CTA buttons may use a very subtle magnetic response.

Pointer approaches:

```text
Button Content
      ↘
       cursor
```

Button content shifts slightly toward the pointer.

Maximum movement must remain small.

This should only appear on high-value CTAs.

---

# 172. Hover Image Behavior

Project image hover may:

```text
Image scale        1 → 1.025
Internal position  slight movement
Overlay            subtle
Cursor             View
```

Avoid:

```text
scale 1 → 1.2
```

which feels aggressive and hides content.

---

# 173. Navigation Motion

Navigation motion sequence:

```text
Initial
↓
Transparent

Scroll threshold
↓
Background blur appears

Scroll downward
↓
Navbar compresses

Scroll upward
↓
Navbar returns

Hero top reached
↓
Navbar restores initial state
```

---

# 174. Mobile Menu Timeline

Suggested entrance:

```text
Overlay enters
        ↓
Navigation links reveal sequentially
        ↓
Secondary information appears
```

Exit:

```text
Secondary information fades
        ↓
Links leave
        ↓
Overlay closes
```

The animation must remain fast enough that navigation does not feel delayed.

---

# 175. Page Transition Architecture

Page transitions should create continuity between:

```text
Homepage Project
       ↓
Project Case Study
```

Potential future enhancement:

Shared project visual transition.

Version 1 may use a simpler controlled transition.

---

# 176. Standard Page Transition

Conceptual:

```text
Current Page
     ↓
Content fades / shifts
     ↓
Transition surface
     ↓
Route changes
     ↓
New content enters
```

Target duration should remain short.

Do not force users to watch long cinematic loaders between pages.

---

# 177. Project Transition

A more advanced transition may allow the clicked project image to visually become the project hero.

Conceptually:

```text
PROJECT PREVIEW

      ↓ click

image expands

      ↓

PROJECT HERO
```

This should only be implemented if it remains stable across routing and responsive layouts.

It is not mandatory for V1.

---

# 178. Scroll Restoration

Route changes should explicitly define scroll behavior.

Project navigation:

```text
Project A
    ↓
Project B

→ start Project B at top
```

Back navigation should respect expected browser behavior where practical.

---

# 179. Smooth Scrolling Architecture

Native scrolling is the baseline.

Lenis may be introduced if it materially improves the experience.

Architecture if enabled:

```text
Browser Input
      ↓
Lenis
      ↓
Scroll Position
      ↓
GSAP Ticker
      ↓
ScrollTrigger Update
```

Integration must remain synchronized.

---

# 180. Lenis Decision Criteria

Introduce Lenis only if:

- Native scrolling makes choreography feel disconnected.
- Testing demonstrates a meaningful experience improvement.
- Mobile remains natural.
- Accessibility remains intact.
- Performance remains stable.

Otherwise:

> Use native scroll.

---

# 181. Scroll Speed Rule

Never create intentionally sluggish scrolling.

The user should retain control.

Premium motion means smooth response.

Not delayed response.

---

# 182. Animation Performance Architecture

Preferred animated properties:

```text
transform
opacity
```

Use carefully:

```text
filter
clip-path
```

Avoid continuous animation of:

```text
width
height
top
left
margin
padding
```

where transforms can achieve the same result.

---

# 183. GPU-Friendly Motion

Where appropriate, use transform-based movement.

Example:

```text
translate3d()
scale()
```

Do not force GPU layers onto every element.

Excessive compositing can itself reduce performance.

---

# 184. Blur Performance Rule

Blur is visually useful but expensive.

Use blur primarily during short reveal/exit sequences.

Avoid continuously animating massive blurred backgrounds.

---

# 185. `will-change` Rule

Do not globally apply:

```css
will-change: transform;
```

Use it selectively for elements known to animate heavily.

Remove unnecessary persistent compositing hints.

---

# 186. ScrollTrigger Refresh Strategy

Refresh may be necessary after:

- Fonts load
- Major responsive changes
- Dynamic media dimensions resolve

Avoid constantly calling:

```text
ScrollTrigger.refresh()
```

during normal scrolling.

---

# 187. Resize Architecture

Complex timelines must handle breakpoint changes.

Possible strategy:

```text
Desktop Timeline
      ↓ resize
Cleanup
      ↓
Breakpoint Evaluation
      ↓
Mobile/Tablet Timeline
```

GSAP `matchMedia()` may be used for breakpoint-specific animation.

---

# 188. GSAP MatchMedia Strategy

Conceptually:

```ts
mm.add("(min-width: 1024px)", () => {
  // desktop experience
});

mm.add("(max-width: 1023px)", () => {
  // simplified experience
});
```

Cleanup remains mandatory.

---

# 189. Mobile Animation Architecture

Mobile motion should preserve narrative while reducing complexity.

Desktop:

```text
Pinned device
+
4-stage scrub
+
background parallax
+
floating labels
```

Mobile:

```text
Project visual
↓
Text
↓
Visual
↓
Text
```

with controlled reveals.

The story remains.

The expensive choreography changes.

---

# 190. Reduced Motion Architecture

When:

```css
prefers-reduced-motion: reduce
```

is active:

Disable:

- Parallax
- Pointer effects
- Scrubbed movement
- Horizontal scroll conversion
- Large scale transformations
- Magnetic interactions

Preserve:

- Content visibility
- Navigation feedback
- Essential state transitions

---

# 191. Reduced Motion Principle

Reduced motion must not produce a visually broken version of the website.

Architecture must support:

```text
Motion Enabled
      ↓
Enhanced Story

Motion Reduced
      ↓
Complete Static Story
```

Both are first-class experiences.

---

# 192. Motion Loading Strategy

Do not hide the entire page until motion infrastructure initializes.

Initial content should render.

Motion then progressively enhances it.

Avoid:

```text
Blank Screen
↓
JavaScript loads
↓
GSAP initializes
↓
Website appears
```

---

# 193. Initial Animation Flash Prevention

Elements participating in entrance animations must avoid flashing in their final state before JavaScript initialization.

Solutions may include:

- Carefully scoped initial styles
- Framer Motion initial states
- Progressive enhancement techniques

However, content must never remain permanently invisible if JavaScript fails.

---

# 194. Animation Failure Strategy

If GSAP fails:

```text
Content remains visible.
Layout remains usable.
Navigation remains functional.
```

Motion failure must never become application failure.

---

# 195. Animation Debug Mode

During development, an optional debug mode may expose:

- ScrollTrigger markers
- Section boundaries
- Scroll progress
- Active animation state

This must never ship enabled.

---

# 196. Motion Naming Convention

Timelines should describe their purpose.

Preferred:

```text
heroEntranceTimeline
heroExitTimeline
featuredProjectTimeline
horizontalWorkTimeline
```

Avoid:

```text
tl1
tl2
animationThing
scrollAnim
```

---

# 197. Timeline Architecture

Complex sequences should use named timelines.

Example:

```text
heroEntranceTimeline

0.00  studio label
0.10  headline line 1
0.18  headline line 2
0.35  description
0.45  CTA
0.55  visual
```

Exact timing belongs in Volume 5.

---

# 198. Timeline Coordination

Related elements should share one timeline when their sequence matters.

Incorrect:

```text
Five independent useEffect animations
```

Preferred:

```text
One composition-level timeline
```

This ensures deterministic choreography.

---

# 199. Scroll Animation Coordination

Animations within one scroll section should derive from the same scroll context where practical.

Example:

```text
Section Scroll Progress
        │
        ├── Headline opacity
        ├── Visual translation
        ├── Background shift
        └── Label movement
```

This produces cohesive movement.

---

# 200. Motion Density

Not every viewport should contain active motion.

The experience requires quiet moments.

Recommended rhythm:

```text
CINEMATIC
   ↓
CALM
   ↓
INTERACTIVE
   ↓
CALM
   ↓
CINEMATIC
   ↓
CALM
```

Contrast makes important motion more memorable.

---

# 201. Motion Rhythm

The website should behave similarly to film editing.

Fast movement followed by fast movement creates fatigue.

Instead:

```text
Reveal
Pause
Explore
Transition
Pause
Reveal
```

Motion pacing is part of the brand.

---

# 202. Animation Budget

Every section has a conceptual motion budget.

Ask:

> How many things need to move for this idea to work?

If the answer is:

> everything

the design should be reconsidered.

---

# 203. Motion Priority

Priority order:

```text
1. Content comprehension
2. Interaction feedback
3. Story progression
4. Spatial continuity
5. Delight
6. Decoration
```

Decoration has the lowest priority.

---

# 204. Scroll Story Example

A featured mobile project may follow:

```text
ENTER SECTION

       ↓

Large title reveals

       ↓

Phone rises from below viewport

       ↓

Title slowly loses opacity

       ↓

Phone becomes sticky

       ↓

First interface displayed

       ↓

Scroll

       ↓

Supporting copy appears

       ↓

Phone interface transitions

       ↓

Second feature explained

       ↓

Phone moves slightly left

       ↓

Final outcome appears

       ↓

Phone releases from sticky state

       ↓

Section transitions into next project
```

This is the type of experience the architecture is designed to support.

---

# 205. Desktop Motion Target

Desktop may contain the complete motion system:

- Sticky storytelling
- Pointer interactions
- Custom cursor
- Horizontal work
- Layered parallax
- Mask reveals
- Scroll-linked transformations
- Full cinematic transitions

provided performance remains acceptable.

---

# 206. Tablet Motion Target

Tablet receives:

- Simplified sticky behavior
- Reduced parallax
- No pointer-dependent storytelling
- Reduced horizontal complexity
- Full content reveals

---

# 207. Mobile Motion Target

Mobile receives:

- High-quality entrance reveals
- Image reveals
- Controlled floating
- Simple sticky elements where safe
- Section transitions
- Reduced scroll choreography

No effect should interfere with touch scrolling.

---

# 208. Performance Escape Hatch

Every complex composition should have a simplified implementation available.

Conceptually:

```text
Can device support experience?
        │
        ├── YES → Enhanced Motion
        │
        └── NO  → Simplified Motion
```

The simplified version must still look intentional.

---

# 209. Animation Acceptance Criteria

A motion sequence is accepted only when:

- It communicates a clear purpose.
- It remains smooth.
- It does not delay navigation.
- It does not hide essential information.
- It behaves correctly across supported breakpoints.
- Reduced-motion behavior exists.
- Cleanup works correctly.
- It does not introduce layout shift.
- It does not noticeably damage interaction responsiveness.

---

# 210. Motion Rejection Criteria

Reject an animation when:

- It exists purely because it looks impressive.
- It competes with important content.
- It makes reading harder.
- It causes scroll jank.
- It behaves unpredictably.
- It makes mobile interaction worse.
- It resembles a generic template effect.
- It appears repeatedly without variation.
- It significantly increases complexity for little experiential value.

---

# 211. Motion Architecture Blueprint

```text
                     NOVAAACODE MOTION
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼

      CSS              FRAMER MOTION          GSAP
       │                     │                  │
       │                     │                  │
       ▼                     ▼                  ▼

Micro Interaction      UI Animation       Scroll Choreography
Hover                  Reveal             Pinning
Focus                  Menu               Scrubbing
Color                  Layout             Horizontal
Simple Transform       Transition         Parallax
                       Exit               Storytelling

        │                     │                  │
        └─────────────────────┼──────────────────┘
                              │
                              ▼
                       MOTION TOKENS
                              │
                              ▼
                    EXPERIENCE COMPOSITIONS
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼

             Hero         Featured Work     Case Study
              │               │               │
              └───────────────┼───────────────┘
                              │
                              ▼
                       RESPONSIVE LAYER
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼

           Desktop          Tablet           Mobile
              │               │               │
              └───────────────┼───────────────┘
                              │
                              ▼
                      ACCESSIBILITY LAYER
                              │
                              ▼
                        Reduced Motion
```

---

# 212. Motion Architecture Decision Summary

| Decision | Status |
|---|---|
| Motion as architectural layer | Locked |
| CSS for basic interaction | Locked |
| Framer Motion for UI motion | Locked |
| GSAP for advanced scroll | Locked |
| ScrollTrigger | Locked |
| Lenis | Conditional |
| Masked heading reveals | Approved |
| Floating scroll elements | Approved |
| Scroll invisibility | Approved |
| Sticky storytelling | Approved |
| Horizontal work section | One major section |
| Parallax | Controlled |
| Background transitions | Approved |
| Section overlap | Approved |
| Pointer parallax | Desktop optional |
| Magnetic CTA | Selective |
| Custom cursor | Optional |
| Scroll hijacking | Rejected |
| Excessive rotation | Rejected |
| Mobile choreography simplification | Mandatory |
| Reduced motion support | Mandatory |
| Motion failure fallback | Mandatory |
| Composition-level timelines | Locked |
| Animation everywhere | Rejected |
| Quiet motion sections | Mandatory |

---

# End of Volume 2 — Part 4

**Next: Part 5 — Responsive Architecture, Performance Engineering & Asset Pipeline**