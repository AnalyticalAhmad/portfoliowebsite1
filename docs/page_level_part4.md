# NOVAAACODE PORTFOLIO

# Volume 3 — Experience Architecture & Page-Level UX

## Part 4 — Capabilities, Mobile Product Showcase & Process Experience

---

# 233. Part 4 Objective

By this point, the visitor has already experienced:

```text
Brand Identity
      ↓
Featured Project
      ↓
Studio Philosophy
      ↓
Selected Work
```

They have seen what Novaaacode creates.

The next question is:

> What can Novaaacode actually do for a client?

Part 4 answers this without introducing a conventional services-card section.

The experience should communicate:

```text
DESIGN
+
DEVELOPMENT
+
PRODUCT THINKING
+
MOTION
```

as one connected capability.

---

# 234. Capabilities Experience Objective

The Capabilities section must not look like:

```text
┌──────────────┐
│ UI/UX Design │
└──────────────┘

┌──────────────┐
│ Development  │
└──────────────┘

┌──────────────┐
│ Mobile Apps  │
└──────────────┘
```

Instead, capabilities should become a typographic interaction.

---

# 235. Capabilities Opening

The transition from Selected Work should become quiet.

Example:

```text
FROM IDEA
TO INTERFACE
TO CODE.

            ↓

CAPABILITIES
```

The visitor then encounters a large list of disciplines.

---

# 236. Capability Structure

Recommended capabilities:

```text
01
PRODUCT DESIGN

02
WEB DEVELOPMENT

03
MOBILE APPLICATIONS

04
INTERACTION & MOTION

05
PRODUCT ENGINEERING
```

These can later be refined based on final positioning.

---

# 237. Capability Desktop Layout

Conceptually:

```text
CAPABILITIES

01      PRODUCT DESIGN                     ↗
────────────────────────────────────────────

02      WEB DEVELOPMENT                    ↗
────────────────────────────────────────────

03      MOBILE APPLICATIONS                ↗
────────────────────────────────────────────

04      INTERACTION & MOTION               ↗
────────────────────────────────────────────

05      PRODUCT ENGINEERING                ↗
────────────────────────────────────────────
```

Each capability occupies substantial vertical space.

---

# 238. Capability Typography

Capability names should be large.

Not necessarily hero-sized, but significantly larger than body typography.

The list itself becomes the composition.

Example:

```text
01      PRODUCT
        DESIGN
```

rather than placing everything inside boxes.

---

# 239. Capability Default State

Initially:

```text
Number        muted
Title         strong
Description   hidden/minimal
Visual        hidden
```

The interface remains clean.

---

# 240. Capability Hover State

Desktop pointer enters:

```text
PRODUCT DESIGN
```

Then:

```text
Title shifts slightly
Number increases contrast
Arrow moves
Description reveals
Supporting visual appears
```

The entire row becomes active.

---

# 241. Capability Description

Description should remain concise.

Example:

```text
PRODUCT DESIGN

Interfaces shaped around hierarchy,
interaction and actual product behavior.
```

Approximately:

```text
15–30 words
```

per capability.

---

# 242. Capability Visual Preview

Each capability may have a visual associated with it.

Example:

```text
PRODUCT DESIGN
→ Interface detail

WEB DEVELOPMENT
→ Browser experience

MOBILE APPLICATIONS
→ Phone screen

INTERACTION & MOTION
→ Motion frame

PRODUCT ENGINEERING
→ Product/dashboard visual
```

The visual should appear only when useful.

---

# 243. Floating Capability Preview

Desktop option:

```text
Capability title
        ↓ hover
Floating visual appears
        ↓
Visual follows pointer loosely
```

However, unlike the Work archive, the preview should remain restrained.

The capabilities are not projects.

---

# 244. Preview Position

The preview may appear toward the right side:

```text
01 PRODUCT DESIGN             [VISUAL]
───────────────────────────────────────
```

or float partially over the list.

Avoid blocking the active title.

---

# 245. Capability Hover Transition

Potential:

```text
Inactive preview
opacity 0
scale .96

↓

Active preview
opacity 1
scale 1
```

When changing capability:

```text
Current visual
→ clips upward

Next visual
→ enters underneath
```

---

# 246. Capability Row Motion

Hover:

```text
Title
translateX: 0 → 12px

Arrow
translateX: 0 → 8px
```

The movement should remain small.

---

# 247. Capability Description Reveal

Description may appear through:

```text
height
+
opacity
```

or a masked reveal.

Avoid causing a large disruptive layout jump.

---

# 248. Capability Click Behavior

The homepage capability rows do not necessarily require navigation.

Options:

```text
Hover-only informational interaction
```

or:

```text
Click → /services
```

Recommended:

```text
Title/arrow links to /services
```

while the row itself remains an interactive preview.

---

# 249. Capability Mobile Layout

Mobile cannot depend on hover.

Each capability should therefore show enough information by default.

Example:

```text
01

PRODUCT
DESIGN

Interfaces shaped around
hierarchy, interaction and
actual product behavior.

                    ↗
──────────────────────
```

---

# 250. Mobile Capability Visuals

Do not place a large image after every capability.

That would make the section unnecessarily long.

Instead:

```text
Capability text
+
occasional visual punctuation
```

or one shared visual area that updates through tap interaction.

---

# 251. Mobile Accordion Option

A capability may expand on tap:

```text
PRODUCT DESIGN      +
```

Tap:

```text
PRODUCT DESIGN      −

Description

Small visual
```

This is acceptable if testing shows it improves the mobile layout.

However, core capability names must remain visible without interaction.

---

# 252. Capability Scroll Entrance

Rows should enter progressively.

Example:

```text
01
↓
02
↓
03
↓
04
↓
05
```

Use simple masked or opacity transitions.

This section does not require heavy scroll choreography.

---

# 253. Capability Active Scroll State

On desktop, a row near the viewport center may subtly gain contrast even without hover.

This provides visual progression for trackpad users who may not interact with every item.

---

# 254. Capability Section Exit

After the final capability:

```text
List ends
      ↓
Large whitespace
      ↓
Short transition statement
      ↓
Mobile showcase begins
```

Possible transition:

```text
DESKTOP.
MOBILE.
EVERYTHING BETWEEN.
```

---

# 255. Mobile Product Showcase Objective

The Selected Work section already shows mobile projects.

This section has a different purpose.

Selected Work says:

```text
Here is a mobile project.
```

The Mobile Showcase says:

```text
Look at the level of interface detail we can create.
```

It is primarily visual.

---

# 256. Showcase Content

The showcase should use one visually strong mobile product.

Possible screens:

```text
Home
Restaurant / Browse
Details
Cart
Checkout
```

The screens should belong to the same product.

This creates visual continuity.

---

# 257. Showcase Narrative

The screens naturally form a journey:

```text
DISCOVER
   ↓
EXPLORE
   ↓
CHOOSE
   ↓
REVIEW
   ↓
COMPLETE
```

This is stronger than displaying unrelated screens.

---

# 258. Showcase Opening

The section begins with minimal text.

Example:

```text
MOBILE EXPERIENCE

FROM FIRST TAP
TO FINAL ACTION.
```

Then the phone composition enters.

---

# 259. Desktop Showcase Initial Composition

Conceptually:

```text
┌───────────────────────────────────────────────────────┐
│                                                       │
│ MOBILE EXPERIENCE                                     │
│                                                       │
│ FROM FIRST TAP                                        │
│ TO FINAL ACTION.                                      │
│                                                       │
│                           ┌─────────────┐             │
│                           │             │             │
│                           │   PHONE     │             │
│                           │             │             │
│                           └─────────────┘             │
│                                                       │
└───────────────────────────────────────────────────────┘
```

---

# 260. Phone Frame

The device frame should be minimal.

Requirements:

```text
Thin frame
Correct proportions
Subtle depth
No excessive realistic reflections
```

The interface must remain the focal point.

---

# 261. Showcase Sticky Architecture

Desktop may use:

```text
Sticky phone
+
scrolling journey labels
```

but this should feel different from the Featured Project sticky story.

The featured project was narrative-heavy.

This section should be visual-first.

---

# 262. Showcase Scroll Structure

Conceptually:

```text
PHONE
sticky in center

Scroll progress:

01 DISCOVER
02 EXPLORE
03 CHOOSE
04 REVIEW
05 COMPLETE
```

As the user scrolls:

```text
Phone screen changes.
```

---

# 263. Screen 01 — Discover

Phone displays:

```text
Home screen
```

Supporting label:

```text
01
DISCOVER
```

Minimal supporting copy may describe discovery.

---

# 264. Screen 02 — Explore

Phone transitions to:

```text
Restaurant / listing / browsing screen
```

Label:

```text
02
EXPLORE
```

---

# 265. Screen 03 — Choose

Phone transitions to:

```text
Product / food detail screen
```

Label:

```text
03
CHOOSE
```

---

# 266. Screen 04 — Review

Phone transitions to:

```text
Cart
```

Label:

```text
04
REVIEW
```

---

# 267. Screen 05 — Complete

Phone transitions to:

```text
Checkout
```

Label:

```text
05
COMPLETE
```

The journey now has a logical ending.

---

# 268. Phone Screen Transition

Preferred screen change:

```text
Current UI
moves upward slightly
+
clips away

Next UI
enters from below
```

This gives the impression of progressing through the product.

---

# 269. Screen Transition Constraint

Do not animate the physical phone itself every time.

The phone remains stable.

The content inside changes.

This makes the interaction feel like one continuous device.

---

# 270. Phone Internal Mask

The phone's screen area acts as:

```text
overflow: hidden
```

New screens transition inside the device boundary.

This creates a realistic application experience without needing actual app execution.

---

# 271. Background Phone Screens

As the primary phone progresses, previous screens may occasionally appear behind it.

Example:

```text
       [Screen 01]

            [ACTIVE PHONE]

                         [Screen 03]
```

These are interface panels rather than full realistic phones.

---

# 272. Screen Fan Composition

At one point, the single-phone experience may expand into a fan of screens:

```text
          SCREEN 2
             │
SCREEN 1  ACTIVE  SCREEN 3
             │
          SCREEN 4
```

or horizontally:

```text
[HOME] [BROWSE] [DETAIL] [CART] [CHECKOUT]
```

This creates a visual climax.

---

# 273. Fan Expansion

Sequence:

```text
Single phone
     ↓
Phone stabilizes
     ↓
Secondary screens emerge
     ↓
Screens spread outward
     ↓
Full product journey visible
```

---

# 274. Fan Motion

Screens should not explode outward.

Use:

```text
translate
+
small rotation
+
scale
```

with restrained distances.

---

# 275. Fan Layering

Potential:

```text
Home
rotation -4°

Browse
rotation -2°

Detail
rotation 0°

Cart
rotation +2°

Checkout
rotation +4°
```

The central screen remains dominant.

---

# 276. Fan Exit

As the visitor continues:

```text
Outer screens
→ move away / fade

Central screen
→ remains briefly

Entire composition
→ moves upward
```

Then the Process section enters.

---

# 277. Showcase Background

This section may use a contrasting environment.

Potential:

```text
Deep neutral
```

with bright mobile interfaces.

This creates strong separation from the capabilities typography.

---

# 278. Dark Showcase

If using a dark background:

```text
Near black
+
warm white typography
+
bright interface screens
```

The phones should visually pop.

Avoid neon glow around devices.

---

# 279. Background Transition Into Showcase

Transition:

```text
Capabilities
Warm white

↓

Neutral darkens gradually

↓

Mobile Showcase
Near black
```

The text colors transition correspondingly.

---

# 280. Navigation During Showcase

The navigation must remain legible.

When entering the dark showcase:

```text
Navbar
dark text → light text
```

When leaving:

```text
Navbar
light text → dark text
```

depending on the Process background.

---

# 281. Mobile Showcase on Tablet

Tablet may retain:

```text
Central sticky phone
+
screen transitions
```

with reduced fan spread.

Portrait tablets may use a normal vertical flow.

---

# 282. Mobile Showcase on Mobile Devices

The irony of showing a phone inside a phone viewport must be handled carefully.

Do not create a tiny device mockup.

Instead:

```text
Large screen UI
+
minimal device frame
```

occupying most of the available width.

---

# 283. Mobile Showcase Mobile Flow

Recommended:

```text
MOBILE EXPERIENCE

FROM FIRST TAP
TO FINAL ACTION.

↓

HOME SCREEN

↓

01 DISCOVER

↓

BROWSE SCREEN

↓

02 EXPLORE

↓

DETAIL SCREEN

↓

03 CHOOSE

↓

CART

↓

04 REVIEW

↓

CHECKOUT

↓

05 COMPLETE
```

Alternatively, the screen may remain semi-sticky if performance testing supports it.

---

# 284. Mobile Showcase Screen Size

The phone should occupy approximately:

```text
70–85% viewport width
```

depending on device size.

The UI must remain readable.

---

# 285. Mobile Fan Alternative

Instead of a large fan of five screens:

```text
Horizontal swipe strip
```

may show:

```text
Home
Browse
Details
Cart
Checkout
```

with partial next-screen visibility.

This encourages touch interaction.

---

# 286. Swipe Accessibility

If swipe is implemented:

- Screen navigation must also work without precise gestures.
- Screen order remains logical.
- Touch targets remain accessible.
- No content should be available exclusively through swipe.

---

# 287. Showcase Reduced Motion

Reduced motion:

```text
No sticky screen swapping.
```

Instead:

```text
Home
↓
Browse
↓
Details
↓
Cart
↓
Checkout
```

as a static editorial sequence.

---

# 288. Showcase Performance

All five screens should be optimized.

Because they are UI screenshots:

```text
AVIF/WebP
```

with enough resolution to preserve interface text.

Avoid:

```text
5 enormous transparent PNG files.
```

---

# 289. Showcase Purpose Rule

The showcase should not explain every screen.

Its purpose is:

```text
VISUAL PRODUCT CRAFT
```

not:

```text
FULL CASE STUDY
```

Keep copy minimal.

---

# 290. Showcase Exit

After the screen fan:

```text
Mobile screens move away
        ↓
Dark environment begins clearing
        ↓
Whitespace returns
        ↓
PROCESS label appears
```

This is another rhythm reset.

---

# 291. Process Experience Objective

The Process section answers:

> How does Novaaacode move from an idea to a finished product?

It should reassure potential clients without becoming a corporate process diagram.

---

# 292. Process Stages

Recommended:

```text
01
DISCOVER

02
DIRECTION

03
DESIGN

04
BUILD

05
REFINE
```

Alternative naming may be adjusted later.

---

# 293. Process Philosophy

The process should communicate that:

```text
Design
and
Development
```

are connected rather than isolated phases.

The final experience should feel iterative.

---

# 294. Process Opening

Example:

```text
PROCESS

FROM A ROUGH IDEA
TO SOMETHING PEOPLE
CAN ACTUALLY USE.
```

Short supporting copy:

```text
Strategy, interface and development
move forward together.
```

---

# 295. Process Desktop Layout

Conceptually:

```text
PROCESS

01      DISCOVER
        Understand the product.

02      DIRECTION
        Define structure and visual language.

03      DESIGN
        Shape the interface and interactions.

04      BUILD
        Turn the system into a working product.

05      REFINE
        Test, adjust and polish.
```

But the visual presentation should not resemble a plain numbered list.

---

# 296. Process Large Number Composition

Each step may use a very large number.

Example:

```text
          01

DISCOVER

Understand what the product
actually needs to do.
```

As the visitor scrolls:

```text
01
↓
02
↓
03
↓
04
↓
05
```

---

# 297. Sticky Process Number

Desktop option:

```text
LEFT

large sticky number

RIGHT

scrolling process stages
```

Example:

```text
┌───────────────────────────────────────┐
│                                       │
│       01          DISCOVER            │
│                   description         │
│                                       │
└───────────────────────────────────────┘
```

When the next stage activates:

```text
01
↓
02
```

through a masked number transition.

---

# 298. Number Transition

Potential:

```text
01
moves upward

02
enters from below
```

within a fixed overflow container.

This creates a mechanical counter-like effect.

---

# 299. Process Text Activation

Inactive:

```text
opacity .25
```

Active:

```text
opacity 1
```

The active stage receives focus while the large number updates.

---

# 300. Process Stage Height

Each process stage should receive enough space to be understood.

Approximately:

```text
50–80vh
```

on desktop depending on final pacing.

The section should not feel artificially stretched.

---

# 301. Process Visual Line

A subtle vertical line may indicate progress.

Example:

```text
│
● Discover
│
● Direction
│
● Design
│
● Build
│
● Refine
│
```

But it should remain secondary.

Avoid making it look like a project-management timeline component.

---

# 302. Process Progress Line

The line may fill based on scroll progress.

This is one of the few places where a progress indicator directly reflects the content.

---

# 303. Process Supporting Visuals

The Process section should use few or no large project screenshots.

After the Mobile Showcase, the page needs visual rest.

Potential visual language:

```text
Numbers
Typography
Lines
Whitespace
```

---

# 304. Process Stage — Discover

Purpose:

```text
Understand the idea,
users and product goals.
```

Potential copy:

```text
Before designing screens, understand
what the product actually needs to solve.
```

---

# 305. Process Stage — Direction

Purpose:

```text
Define structure,
visual direction and priorities.
```

Potential copy:

```text
Turn the idea into a clear system
before visual complexity begins.
```

---

# 306. Process Stage — Design

Purpose:

```text
Create the interface
and interaction language.
```

Potential copy:

```text
Build hierarchy, flows and visual
behavior around the product.
```

---

# 307. Process Stage — Build

Purpose:

```text
Turn the designed system
into a working experience.
```

Potential copy:

```text
Translate the interface into
maintainable production code.
```

---

# 308. Process Stage — Refine

Purpose:

```text
Test,
adjust,
optimize,
polish.
```

Potential copy:

```text
The final layer is where small
decisions create a finished product.
```

---

# 309. Process Final State

At the end:

```text
05
REFINE
```

remains briefly visible.

Then a concluding phrase may appear:

```text
THEN WE SHIP.
```

or a quieter equivalent.

Avoid forced startup language if it does not fit the brand.

---

# 310. Process Mobile Layout

Mobile should use a straightforward vertical structure.

Example:

```text
PROCESS

01
DISCOVER
Description

↓

02
DIRECTION
Description

↓

03
DESIGN
Description

↓

04
BUILD
Description

↓

05
REFINE
Description
```

Large numbers remain as visual anchors.

---

# 311. Mobile Process Number

Each number may occupy:

```text
30–40% viewport width
```

as oversized background typography.

Example:

```text
01

     DISCOVER

     Understand what
     needs to be built.
```

---

# 312. Mobile Process Motion

Use:

```text
Number reveal
+
heading reveal
+
description fade
```

No long sticky timeline required.

---

# 313. Process Reduced Motion

Reduced motion uses the same vertical content with simple or no reveals.

All steps remain visible.

---

# 314. Process → Final Homepage Stage

After Process, the visitor has now seen:

```text
Who Novaaacode is

What Novaaacode builds

How the work looks

What capabilities exist

How products are created
```

Only one major question remains:

> How do I work with Novaaacode?

The homepage should therefore begin transitioning toward its final conversion experience.

---

# 315. Process Exit

Recommended:

```text
REFINE
      ↓
Process line ends
      ↓
Large whitespace
      ↓
Small availability/contact statement
      ↓
Final CTA environment begins
```

---

# 316. Transition Phrase

Possible:

```text
HAVE SOMETHING
IN MIND?
```

or:

```text
GOT AN IDEA?
```

or a more distinctive phrase developed later.

This should begin the emotional shift from portfolio viewing to contact.

---

# 317. Part 4 Desktop Experience Blueprint

```text
SELECTED WORK
       │
       ▼
HORIZONTAL SECTION RELEASE
       │
       ▼
FROM IDEA TO INTERFACE TO CODE
       │
       ▼
CAPABILITIES
       │
       ├── 01 Product Design
       ├── 02 Web Development
       ├── 03 Mobile Applications
       ├── 04 Interaction & Motion
       └── 05 Product Engineering
       │
       ▼
TRANSITION
       │
       ▼
DARK MOBILE SHOWCASE
       │
       ├── Discover
       ├── Explore
       ├── Choose
       ├── Review
       └── Complete
       │
       ▼
SCREEN FAN EXPANSION
       │
       ▼
SCREENS EXIT
       │
       ▼
LIGHT ENVIRONMENT RETURNS
       │
       ▼
PROCESS
       │
       ├── 01 Discover
       ├── 02 Direction
       ├── 03 Design
       ├── 04 Build
       └── 05 Refine
       │
       ▼
CONTACT TRANSITION
```

---

# 318. Part 4 Mobile Experience Blueprint

```text
SELECTED WORK
       │
       ▼
CAPABILITIES
       │
       ├── Product Design
       ├── Web Development
       ├── Mobile Applications
       ├── Interaction & Motion
       └── Product Engineering
       │
       ▼
MOBILE EXPERIENCE
       │
       ├── Home
       ├── Browse
       ├── Details
       ├── Cart
       └── Checkout
       │
       ▼
PROCESS
       │
       ├── Discover
       ├── Direction
       ├── Design
       ├── Build
       └── Refine
       │
       ▼
CONTACT TRANSITION
```

---

# 319. Part 4 Motion Hierarchy

## Capabilities

Primary:

```text
Capability activation
```

Secondary:

```text
Visual preview
```

---

## Mobile Showcase

Primary:

```text
Phone screen transitions
```

Secondary:

```text
Journey labels
```

Tertiary:

```text
Screen fan movement
```

---

## Process

Primary:

```text
Number transition
```

Secondary:

```text
Text activation
```

Tertiary:

```text
Progress line
```

This prevents multiple sections from sharing the same motion language.

---

# 320. Part 4 Performance Rules

Capabilities:

```text
Minimal JS
```

Mobile Showcase:

```text
Optimized images
Controlled sticky logic
No unnecessary video
```

Process:

```text
Mostly typography
Minimal runtime complexity
```

The section should remain significantly lighter than the Featured Project.

---

# 321. Part 4 Accessibility Rules

Capabilities:

- Names visible without hover.
- Links keyboard accessible.
- Descriptions accessible.
- Hover visuals non-essential.

Mobile Showcase:

- Screen order remains semantic.
- Screens receive appropriate alt text.
- Sticky behavior never traps scrolling.
- Reduced-motion version available.

Process:

- Steps remain logical in DOM order.
- Active styling is not required for understanding.
- Numbers are not the only labels.
- Progress animation is decorative.

---

# 322. Part 4 Experience Failure Conditions

Reject the implementation if:

```text
Capabilities look like service cards.

Every capability uses a random animation.

Mobile screenshots become too small.

The phone frame dominates the UI.

Screen swapping feels like a slideshow.

The showcase takes too long to scroll through.

Five screens move simultaneously for most of the section.

Process resembles a corporate PowerPoint timeline.

Process copy becomes excessively long.

Mobile requires desktop-style sticky interactions.

The section feels visually exhausting after Selected Work.
```

---

# 323. Part 4 Experience Decisions

| Experience Area | Decision |
|---|---|
| Capability card grid | Rejected |
| Large capability typography | Locked |
| Numbered capability system | Locked |
| Hover capability previews | Approved desktop |
| Mobile hover dependency | Rejected |
| Services route connection | Approved |
| Dedicated mobile showcase | Locked |
| One product across showcase | Locked |
| Home → Checkout journey | Locked |
| Stable phone frame | Locked |
| Screen swaps inside phone | Locked |
| Sticky desktop showcase | Approved |
| Screen fan climax | Approved |
| Excessive device realism | Rejected |
| Dark showcase environment | Approved |
| Neon phone glow | Rejected |
| Mobile showcase reconstruction | Mandatory |
| Swipe presentation on mobile | Optional |
| Process section | Locked |
| Five-stage process | Locked |
| Large process numbering | Locked |
| Sticky number desktop | Approved |
| Corporate timeline appearance | Rejected |
| Mobile vertical process | Locked |
| Reduced-motion alternatives | Mandatory |
| Final transition toward contact | Locked |

---

# End of Volume 3 — Part 4

## Next — Part 5: Work Archive & Individual Project Case Study UX

Part 5 moves beyond the homepage and defines the two most important portfolio content experiences:

```text
/work
```

and:

```text
/work/[slug]
```

It will define:

- The full Work archive
- Large project index instead of a generic card gallery
- Cursor-follow project previews
- Project filters without ugly filter chips
- Project numbering
- Archive hover behavior
- Alternative visual view of projects
- Opening a project
- Case-study hero
- Project overview
- Role/year/technology presentation
- Problem/context
- Design direction
- UI showcase
- Web-project presentation
- Mobile-project presentation
- Full-bleed screenshots
- Scroll storytelling
- Before/after moments where appropriate
- Motion demonstrations
- Responsive design showcase
- Technical implementation section
- Project outcome
- Next-project transition
- Case study → case study navigation
- Desktop/mobile transformations
- Reduced-motion behavior

Part 5 is especially important because **the homepage attracts attention, but the individual project pages are what actually prove the quality of the work.**