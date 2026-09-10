# NOVAAACODE PORTFOLIO

# Volume 3 — Experience Architecture & Page-Level UX

## Part 3 — Studio Statement & Selected Work Experience

---

# 135. Part 3 Objective

The featured project is intentionally visually intense.

The next portion of the homepage must change pace.

The sequence becomes:

```text
FEATURED PROJECT
      ↓
BREATHING SPACE
      ↓
STUDIO STATEMENT
      ↓
SELECTED WORK
      ↓
CAPABILITIES
```

This part has two responsibilities:

```text
STUDIO STATEMENT
→ Establish Novaaacode's point of view.

SELECTED WORK
→ Demonstrate range.
```

The visitor should move from:

```text
"That project looks good."
```

to:

```text
"They clearly have a broader design and development capability."
```

---

# 136. Rhythm Reset

The end of the featured project should contain substantial whitespace.

The previous experience contained:

- Sticky screens
- Interface transitions
- Floating media
- Large imagery
- Scroll choreography

The next viewport should therefore feel dramatically quieter.

Conceptually:

```text
████ PROJECT ████
████ PROJECT ████

        ↓

        ↓

        ↓


          small text


        ↓


     LARGE STATEMENT
```

Silence becomes part of the design.

---

# 137. Studio Statement Purpose

This is not an "About Me" section.

Do not introduce:

```text
Hi, I'm...
```

at this point.

Instead, communicate the design philosophy behind Novaaacode.

The statement should explain how Novaaacode approaches digital products.

---

# 138. Statement Content Model

Recommended structure:

```text
SMALL LABEL

LARGE STATEMENT

SMALL SUPPORTING THOUGHT
```

Example:

```text
APPROACH

GOOD DIGITAL PRODUCTS
SHOULDN'T JUST WORK.

THEY SHOULD FEEL
INTENTIONAL.

Design and development treated
as one connected process.
```

Final wording may change later.

---

# 139. Statement Composition

Desktop:

```text
┌──────────────────────────────────────────────────────┐
│                                                      │
│ APPROACH                                             │
│                                                      │
│                                                      │
│       GOOD DIGITAL PRODUCTS                          │
│       SHOULDN'T JUST WORK.                           │
│                                                      │
│                 THEY SHOULD                          │
│                 FEEL INTENTIONAL.                    │
│                                                      │
│                                      Design and      │
│                                      development     │
│                                      treated as one. │
│                                                      │
└──────────────────────────────────────────────────────┘
```

Notice that the statement does not use one rigid alignment.

---

# 140. Typography as Composition

The statement should use text as a visual object.

Potential hierarchy:

```text
GOOD DIGITAL PRODUCTS
```

very large.

Then:

```text
SHOULDN'T JUST WORK.
```

offset horizontally.

Then:

```text
THEY SHOULD FEEL INTENTIONAL.
```

positioned differently again.

This creates visual rhythm without requiring decorative graphics.

---

# 141. Statement Width

Do not constrain the statement inside a narrow content container.

Allow major text to occupy:

```text
70–95% viewport width
```

depending on the line.

Supporting copy remains narrower.

---

# 142. Statement Scroll Reveal

The statement should not appear simultaneously.

Sequence:

```text
APPROACH
    ↓
GOOD DIGITAL PRODUCTS
    ↓
SHOULDN'T JUST WORK.
    ↓
THEY SHOULD
    ↓
FEEL INTENTIONAL.
    ↓
Supporting sentence
```

Each line enters as the visitor progresses.

---

# 143. Statement Reveal Style

Preferred:

```text
Mask
+
Vertical translation
+
Small opacity transition
```

Example:

```text
translateY: 110% → 0
opacity: .4 → 1
```

Avoid dramatic zoom.

---

# 144. Scroll-Based Word Emphasis

Selected words may transition from muted to full contrast.

Example:

```text
GOOD DIGITAL PRODUCTS
SHOULDN'T JUST WORK.

THEY SHOULD FEEL INTENTIONAL.
```

Initially:

```text
GOOD DIGITAL PRODUCTS
```

may appear muted.

As scroll progresses:

```text
INTENTIONAL
```

becomes visually dominant.

---

# 145. Word Highlight Rule

Do not use bright gradient highlights.

Preferred emphasis:

```text
Weight
Contrast
Italic
Scale
Spacing
```

rather than:

```text
Neon color
Glow
Gradient text
```

---

# 146. Floating Statement Behavior

One line may move horizontally at a slightly different scroll rate.

Example:

```text
GOOD DIGITAL PRODUCTS
       →

SHOULDN'T JUST WORK.
   ←

THEY SHOULD FEEL INTENTIONAL.
        →
```

Movement should remain subtle.

---

# 147. Statement Exit

As the visitor reaches the end:

```text
Earlier lines
→ slightly fade

Final thought
→ remains

Selected Work label
→ enters
```

The statement therefore dissolves into the next section.

---

# 148. Background Behavior

The studio statement should use a simple environment.

Preferred:

```text
Warm neutral
```

or a subtle inversion if needed.

Do not place large screenshots behind the text.

The typography needs room.

---

# 149. Optional Background Texture

A very subtle texture may be used:

```text
Fine noise
Paper-like grain
```

Opacity should remain extremely low.

The visitor should feel texture rather than consciously notice it.

---

# 150. Studio Statement Mobile

Mobile should maintain oversized typography but restructure the lines.

Example:

```text
APPROACH

GOOD
DIGITAL
PRODUCTS

SHOULDN'T
JUST WORK.

THEY SHOULD
FEEL
INTENTIONAL.
```

The exact wrapping should be manually art-directed.

---

# 151. Mobile Statement Motion

Use:

```text
Line reveal
+
small translation
```

Avoid strong horizontal scroll movement.

The mobile experience should remain easy to read.

---

# 152. Studio Statement Accessibility

The visual fragmentation must not destroy semantic reading order.

DOM order should still read naturally:

```text
Good digital products
shouldn't just work.
They should feel intentional.
```

CSS may create the visual offsets.

---

# 153. Selected Work Objective

The featured project proved depth.

Selected Work proves range.

The section should answer:

```text
What else can Novaaacode create?
```

Projects may include:

```text
Web experiences
Mobile applications
Product interfaces
Dashboards
Tools
Experimental concepts
```

---

# 154. Selected Work Principle

Do not use:

```text
PROJECTS

┌────────┐ ┌────────┐ ┌────────┐
│ Card   │ │ Card   │ │ Card   │
└────────┘ └────────┘ └────────┘
```

This is explicitly rejected.

Each project should receive an appropriate composition based on its content.

---

# 155. Selected Work Opening

After the studio statement:

```text
SELECTED WORK
```

enters as a smaller section label.

Then a large count or title may appear:

```text
03 PROJECTS
```

or:

```text
A FEW THINGS
WE'VE BUILT.
```

Avoid overly corporate wording.

---

# 156. Selected Work Structure

Potential project sequence:

```text
PROJECT 02
Mobile Product

      ↓

PROJECT 03
Web Tool

      ↓

PROJECT 04
Dashboard / Product

      ↓

VIEW ALL WORK
```

The featured project remains Project 01.

---

# 157. Project Diversity Rule

Projects should not all receive identical presentation.

For example:

```text
Project 02
→ Large mobile-device composition

Project 03
→ Full-width browser experience

Project 04
→ Typography + dashboard crop

Project 05
→ Experimental horizontal composition
```

The project type influences the visual presentation.

---

# 158. Project 02 — Mobile Product Composition

A mobile project such as the food application may use:

```text
LARGE PROJECT TITLE
+
MULTIPLE PHONE SCREENS
+
PROJECT METADATA
```

Desktop example:

```text
02 / MOBILE PRODUCT

FOOD
DELIVERY

                ┌─────────┐
                │ PHONE 1 │
                │         │
                └─────────┘

                       ┌─────────┐
                       │ PHONE 2 │
                       │         │
                       └─────────┘

UI/UX + Development
```

---

# 159. Mobile Screen Arrangement

Screens should not simply sit in one straight row.

Use depth:

```text
        Phone A

                Phone B

    Phone C
```

Potential transformations:

```text
scale variation
vertical offset
small rotation
overlap
```

---

# 160. Mobile Screen Scroll Behavior

As the section enters:

```text
Phone A
↑ from below

Phone B
↑ slightly later

Phone C
↑ slightly later
```

As the visitor continues:

```text
Screens drift vertically
at slightly different rates.
```

---

# 161. Phone Rotation Constraint

Keep device rotation restrained.

Recommended:

```text
-4°
to
+4°
```

The UI itself must remain readable.

---

# 162. Project Title Relationship

The title may sit partially behind or in front of the phone composition.

Example:

```text
FOOD

        [PHONE]

DELIVERY
```

Layering creates depth.

However, the title must remain readable.

---

# 163. Layer Architecture

Potential:

```text
Layer 1
Background

Layer 2
Large title

Layer 3
Primary phone

Layer 4
Secondary typography

Layer 5
Foreground phone
```

This creates editorial depth without requiring 3D rendering.

---

# 164. Project Metadata

Use concise metadata:

```text
MOBILE PRODUCT

UI/UX
FLUTTER
2026
```

Do not overload the preview with technical information.

---

# 165. Mobile Project Hover

Desktop pointer interaction may slightly shift the composition.

Example:

```text
Pointer X
↓
Foreground phone moves 5px

Background phone moves 2px
```

This gives depth.

No pointer behavior on touch devices.

---

# 166. Project CTA Behavior

The entire composition may link to the case study.

Additionally:

```text
VIEW PROJECT ↗
```

may appear near metadata.

Avoid placing multiple competing buttons.

---

# 167. Project 03 — Web Tool Composition

A project such as the AI Smart CV Builder should use a different presentation.

Concept:

```text
PROJECT TITLE
        ↓
LARGE BROWSER / INTERFACE
        ↓
SMALL SUPPORTING DETAIL
```

---

# 168. Web Tool Desktop Layout

Example:

```text
03 / WEB PRODUCT

SMART CV
BUILDER

        ┌─────────────────────────────────┐
        │                                 │
        │          APPLICATION            │
        │                                 │
        └─────────────────────────────────┘

                              ┌──────────────┐
                              │ DETAIL CROP  │
                              └──────────────┘
```

---

# 169. Browser Frame

The browser frame should remain minimal.

It may show:

```text
small dots
+
simple URL area
```

or no chrome at all.

The project UI is more important than browser realism.

---

# 170. Browser Project Entrance

Potential:

```text
Project title
→ reveals first

Browser
→ rises from below

Detail crop
→ enters slightly later
```

The browser should feel heavier than floating phone screens.

---

# 171. Browser Project Scroll Motion

The large browser interface may move:

```text
translateY: 80px → -40px
```

over the section.

Internal image parallax may move slightly in the opposite direction.

---

# 172. Project 04 — Dashboard Composition

A dashboard or expense tracker can use an editorial crop approach.

Instead of showing the entire UI immediately:

```text
Large dashboard crop
+
numeric typography
+
secondary mobile view
```

---

# 173. Dashboard Layout

Example:

```text
04 / PRODUCT DESIGN

EXPENSE
TRACKER

┌─────────────────────────────────────┐
│                                     │
│          DASHBOARD CROP             │
│                                     │
└─────────────────────────────────────┘

          01
          TRACK

                         02
                         UNDERSTAND

          03
          CONTROL
```

This makes the interface feel like designed content rather than a screenshot gallery.

---

# 174. Project-Specific Typography

Each project may slightly change typographic composition.

However:

```text
Font family
Core scale system
Spacing logic
```

must remain consistent with Novaaacode.

The portfolio identity should remain stronger than individual project branding.

---

# 175. Project Background Colors

Selected projects may temporarily introduce subtle background shifts.

Example:

```text
Studio Statement
Warm White

↓

Mobile Project
Soft neutral green tint

↓

Web Tool
Warm White

↓

Dashboard
Dark neutral
```

These shifts create chapters.

---

# 176. Background Transition

Background changes should occur gradually with scroll.

Avoid sudden:

```text
WHITE
↓
BLACK
```

at arbitrary section boundaries.

Use transition zones.

---

# 177. Dark Project Chapter

At least one project may use a dark environment if it suits the visual.

Example:

```text
Near black background

Warm white typography

Bright interface screenshot
```

This gives the homepage tonal variation.

---

# 178. Dark Mode Section Rule

A dark project section does not mean the entire site enters permanent dark mode.

It is an art-directed project environment.

Navigation colors must adapt automatically.

---

# 179. Navigation Contrast Adaptation

When navbar overlays a dark project section:

```text
Logo
Links
```

must switch to light styling.

When returning to a light environment:

```text
Navbar
→ dark styling
```

The transition should not flicker.

---

# 180. Project Preview Hover Architecture

Desktop project titles may provide a more experimental hover interaction.

Example list:

```text
02  FOOD DELIVERY
03  SMART CV BUILDER
04  EXPENSE TRACKER
```

Hovering a project could reveal a floating preview image.

---

# 181. Cursor-Follow Preview

Potential desktop-only interaction:

```text
Pointer enters project title
       ↓
Preview appears near pointer
       ↓
Pointer moves
       ↓
Preview follows with slight delay
       ↓
Pointer exits
       ↓
Preview scales/fades away
```

This may be used in the Work archive rather than the main homepage if the homepage already contains large visual compositions.

---

# 182. Cursor Preview Motion

Preview movement should use interpolation.

Do not attach the image exactly to the cursor.

Preferred feeling:

```text
Cursor
   ↓

        Preview
        follows softly
```

This gives weight.

---

# 183. Cursor Preview Size

Keep the preview large enough to understand but small enough not to obscure project titles.

Approximately:

```text
300–450px desktop width
```

depending on viewport.

---

# 184. Cursor Preview Mobile Fallback

Mobile:

```text
No cursor preview.
```

Project imagery remains permanently visible within the project layout.

---

# 185. Horizontal Work Experience

Volume 2 approved one major horizontal-scroll experience.

Selected Work is a strong candidate.

Potential structure:

```text
VERTICAL SCROLL

        ↓

SECTION PINS

        ↓

PROJECT 02 → PROJECT 03 → PROJECT 04

        ↓

SECTION RELEASES
```

---

# 186. Horizontal Story Objective

Horizontal movement should communicate:

```text
Browsing through work
```

rather than being used simply because horizontal scrolling looks impressive.

---

# 187. Horizontal Work Composition

Conceptually:

```text
┌────────────── VIEWPORT ──────────────┐

  PROJECT 02          PROJECT 03
  [VISUAL]            [VISUAL]

└──────────────────────────────────────┘
                        →

```

As vertical scrolling continues:

```text
PROJECT 03          PROJECT 04
[VISUAL]            [VISUAL]
```

---

# 188. Horizontal Track

Conceptual:

```text
TRACK

[ INTRO ]
[ PROJECT 02 ]
[ PROJECT 03 ]
[ PROJECT 04 ]
[ OUTRO ]
```

The viewport travels across this track.

---

# 189. Horizontal Project Width

Not every project panel needs exactly:

```text
100vw
```

Possible rhythm:

```text
Intro      70vw
Project 2  90vw
Project 3  110vw
Project 4  85vw
Outro      60vw
```

This creates visual variation.

---

# 190. Horizontal Project Overlap

Project visuals may partially enter before the previous project completely leaves.

This makes the track feel continuous.

---

# 191. Horizontal Scroll Progress Indicator

Optional:

```text
02 ━━━━━━━ 03 ━━━━━━━ 04
```

or a simple line near the bottom.

Avoid a conventional carousel indicator.

---

# 192. Horizontal Scroll Exit

The track should naturally release back into vertical scrolling.

Sequence:

```text
Horizontal work
      ↓
Last project
      ↓
Track slows
      ↓
Outro appears
      ↓
Vertical page resumes
```

The user should never feel trapped.

---

# 193. Horizontal Scroll Mobile Strategy

Do not convert vertical mobile scrolling into a pinned horizontal sequence.

Instead mobile becomes:

```text
PROJECT 02
↓
PROJECT 03
↓
PROJECT 04
```

Normal vertical scrolling.

Optional horizontal swipe galleries may exist inside individual projects.

---

# 194. Selected Work Architecture Decision

The homepage should not combine every possible project interaction.

Recommended final architecture:

```text
Featured Project
→ Deep sticky story

Selected Work
→ Horizontal desktop showcase

Work Archive
→ Experimental hover preview list
```

This gives each area its own identity.

---

# 195. Selected Work Desktop Flow

Recommended:

```text
SELECTED WORK INTRO
        ↓
SECTION PINS
        ↓
PROJECT 02
Mobile Product
        →
PROJECT 03
Web Product
        →
PROJECT 04
Dashboard
        →
SELECTED WORK OUTRO
        ↓
SECTION RELEASES
```

---

# 196. Project Panel Structure

Each horizontal panel contains:

```text
Project number
Project category
Project name
Primary visual
Role / year
View project interaction
```

But the placement changes per project.

---

# 197. Project 02 Panel

Possible composition:

```text
02 / MOBILE

FOOD DELIVERY

        [PHONE]
             [PHONE]

UI/UX + DEVELOPMENT

                         VIEW PROJECT ↗
```

---

# 198. Project 03 Panel

Possible composition:

```text
                     03 / WEB PRODUCT

SMART CV
BUILDER

[ LARGE BROWSER INTERFACE ]

                             VIEW PROJECT ↗
```

---

# 199. Project 04 Panel

Possible composition:

```text
04 / PRODUCT

       EXPENSE
       TRACKER

[LARGE DASHBOARD CROP]

            [SMALL MOBILE SCREEN]

ROLE / YEAR
```

---

# 200. Selected Work Intro Panel

The horizontal sequence should not immediately begin with a project.

Intro panel:

```text
SELECTED
WORK

02—04

A selection of digital
products across web
and mobile.
```

This prepares the direction change.

---

# 201. Selected Work Outro Panel

After the final project:

```text
MORE WORK

View all projects →

or

SEE THE
FULL ARCHIVE ↗
```

This leads to `/work`.

---

# 202. Horizontal Scroll Animation

The horizontal track movement should remain linear relative to vertical progress.

Individual project elements may have additional subtle parallax.

Example:

```text
Track:
1x

Project title:
.92x

Foreground visual:
1.04x
```

---

# 203. Horizontal Typography Movement

Large project names may slightly move within their panels as the viewport passes.

Example:

```text
FOOD DELIVERY
          ←
```

This reinforces direction.

---

# 204. Image Reveal Within Horizontal Track

Project images may start partially clipped.

As they enter the viewport:

```text
clip-path opens
```

or:

```text
scale .96 → 1
```

Do not animate every project with completely different logic.

---

# 205. Selected Work Interaction Rule

Scrolling must remain the primary interaction.

Do not require:

```text
dragging
clicking arrows
carousel buttons
```

to see the projects.

The visitor should naturally encounter them.

---

# 206. Horizontal Scroll Accessibility

The DOM should maintain logical project order:

```text
Project 02
Project 03
Project 04
```

The horizontal presentation is visual only.

Reduced-motion users should receive a normal stacked layout.

---

# 207. Horizontal Reduced Motion

With reduced motion:

```text
Selected Work

Project 02
↓
Project 03
↓
Project 04
↓
View all
```

No pinning.

No horizontal conversion.

---

# 208. Selected Work Mobile Layout

Mobile sequence:

```text
SELECTED WORK

02
FOOD DELIVERY
[Phone composition]

↓

03
SMART CV BUILDER
[Browser composition]

↓

04
EXPENSE TRACKER
[Dashboard composition]

↓

VIEW ALL WORK
```

Each project receives substantial vertical space.

---

# 209. Mobile Project Alternation

To avoid repetition:

```text
Project 02
Title left
Visual right-biased

Project 03
Title right
Visual full-width

Project 04
Title left
Visual overlapping
```

The differences should remain controlled.

---

# 210. Mobile Project Images

UI screenshots must remain large enough to read.

Do not attempt to show:

```text
5 phone screens
```

at once on mobile.

Instead:

```text
1 primary screen
+
1 secondary overlap
```

or a simple swipeable screen sequence.

---

# 211. Mobile Project Metadata

Metadata can appear above or below the image:

```text
02 / MOBILE PRODUCT

FOOD DELIVERY

UI/UX + DEVELOPMENT
2026
```

Avoid squeezing metadata into tiny columns.

---

# 212. Mobile Project CTA

Use:

```text
VIEW PROJECT ↗
```

with a generous touch target.

The project visual may also be tappable.

---

# 213. Project Transition Rhythm

Projects should not touch each other visually.

Use transition space:

```text
PROJECT

     ↓

Whitespace / background transition

     ↓

NEXT PROJECT
```

This makes each project memorable.

---

# 214. Project Number Continuity

Numbering should remain consistent across:

```text
Homepage
Work Archive
Case Studies
Next Project Navigation
```

Example:

```text
01 Featured Portfolio
02 Food Delivery
03 CV Builder
04 Expense Tracker
```

Numbers should originate from the project content architecture.

---

# 215. Project Category Language

Use simple categories.

Examples:

```text
WEB EXPERIENCE
MOBILE PRODUCT
WEB PRODUCT
PRODUCT DESIGN
EXPERIMENT
```

Avoid unnecessary jargon.

---

# 216. Project Year

Year may appear as quiet metadata:

```text
2026
```

It should not compete with the title.

---

# 217. Project Technology Visibility

Selected Work previews should not display full technology stacks.

The homepage sells:

```text
Work
```

not:

```text
Framework badges.
```

Technology belongs primarily inside case studies.

---

# 218. Visual Consistency

Although each project composition differs, consistency comes from:

```text
Typography
Spacing
Numbering
Motion timing
Metadata styling
Image treatment
CTA behavior
```

This prevents the homepage from becoming visually chaotic.

---

# 219. Avoiding the AI Portfolio Look

Reject patterns such as:

```text
Rounded glass cards everywhere

Purple/blue gradient backgrounds

Glowing buttons

Skill badge clouds

Infinite logo marquees

Random 3D blobs

Generic testimonials

Four identical project cards

"Transforming ideas into reality"

"Crafting digital experiences"

"Let's build the future together"
```

unless a specific project genuinely requires one of these patterns.

---

# 220. Human Art Direction Rule

Layouts should occasionally contain decisions that are visually intentional but not mathematically symmetrical.

Examples:

```text
One image slightly too large
A title intentionally offset
Unexpected whitespace
Asymmetric alignment
Overlapping type and media
Different project panel widths
```

These decisions make the experience feel art-directed.

---

# 221. Controlled Imperfection

Not every element needs to align perfectly with the same grid line.

But irregularity must be intentional.

The rule:

> Break the grid after understanding the grid.

---

# 222. Project Preview Copy

Keep descriptions extremely concise.

Example:

```text
A mobile ordering experience focused on
fast discovery and frictionless checkout.
```

Approximately:

```text
15–30 words
```

is enough for homepage previews.

---

# 223. Selected Work CTA

At the end:

```text
VIEW ALL
PROJECTS ↗
```

This should be visually significant.

Potential presentation:

```text
VIEW ALL PROJECTS

────────────────────────────── ↗
```

---

# 224. CTA Hover Preview

Desktop optional:

Hovering:

```text
VIEW ALL PROJECTS
```

could briefly reveal a stack of project thumbnails.

This is optional and should only be added if the section remains visually clean.

---

# 225. Selected Work → Capabilities Transition

After the Selected Work outro:

```text
Horizontal motion ends
        ↓
Page returns to vertical
        ↓
Visual density decreases
        ↓
Small section label enters
        ↓
CAPABILITIES
```

This gives the visitor a clear change in topic.

---

# 226. Transition Typography

A small transition phrase may appear:

```text
FROM IDEA
TO INTERFACE
TO CODE.
```

before Capabilities.

This can connect the work shown with the services offered.

---

# 227. Selected Work Performance

Only media near the horizontal viewport should be loaded eagerly.

Do not load every large project screenshot at initial page load.

Priority:

```text
Featured project
↓
Project 02
↓
Project 03
↓
Project 04
```

---

# 228. Selected Work Motion Budget

Primary motion:

```text
Horizontal track
```

Secondary:

```text
Project image reveals
```

Tertiary:

```text
Small internal parallax
```

Do not add another major simultaneous effect.

---

# 229. Selected Work Accessibility

Requirements:

- Projects remain real links.
- Project names exist as text.
- Visual order matches logical order.
- Keyboard access remains available.
- Horizontal transformation does not trap focus.
- Reduced-motion stacked layout exists.
- Images receive appropriate alt text.

---

# 230. Studio Statement + Selected Work Desktop Blueprint

```text
FEATURED PROJECT
        │
        ▼
    WHITESPACE
        │
        ▼
┌───────────────────────────────┐
│ APPROACH                      │
│                               │
│ GOOD DIGITAL PRODUCTS         │
│    SHOULDN'T JUST WORK.       │
│                               │
│         THEY SHOULD           │
│         FEEL INTENTIONAL.     │
└───────────────────────────────┘
        │
        ▼
STATEMENT FADES / FLOATS
        │
        ▼
SELECTED WORK
        │
        ▼
HORIZONTAL EXPERIENCE PINS
        │
        ├──────────────→ PROJECT 02
        │
        ├──────────────→ PROJECT 03
        │
        ├──────────────→ PROJECT 04
        │
        └──────────────→ VIEW ALL
                              │
                              ▼
                     HORIZONTAL RELEASE
                              │
                              ▼
                         CAPABILITIES
```

---

# 231. Mobile Blueprint

```text
FEATURED PROJECT
        │
        ▼
   LARGE WHITESPACE
        │
        ▼
     APPROACH
        │
        ▼
 LARGE STATEMENT
        │
        ▼
 SUPPORTING COPY
        │
        ▼
  SELECTED WORK
        │
        ▼
    PROJECT 02
        │
        ▼
    PROJECT 03
        │
        ▼
    PROJECT 04
        │
        ▼
 VIEW ALL PROJECTS
        │
        ▼
   CAPABILITIES
```

No pinned horizontal scrolling is required on mobile.

---

# 232. Part 3 Experience Decisions

| Experience Area | Decision |
|---|---|
| Quiet section after featured project | Locked |
| Studio philosophy statement | Locked |
| Generic About section here | Rejected |
| Oversized editorial typography | Locked |
| Scroll line reveals | Approved |
| Subtle floating typography | Approved |
| Gradient text emphasis | Rejected |
| Selected Work project cards | Rejected |
| Project-specific compositions | Locked |
| Mobile product phone composition | Locked |
| Web product browser composition | Locked |
| Dashboard editorial crop | Locked |
| Project-specific subtle backgrounds | Approved |
| Dark project chapter | Approved where suitable |
| Navbar contrast adaptation | Required |
| Cursor-follow preview | Reserved mainly for Work archive |
| Horizontal Selected Work | Locked for desktop |
| Horizontal pinned mobile layout | Rejected |
| Mobile stacked projects | Locked |
| Project numbering | Locked |
| Technology badge clouds | Rejected |
| Large View All CTA | Locked |
| Controlled asymmetry | Locked |
| Reduced-motion stacked layout | Mandatory |
| Actual project work over decoration | Locked |

---

# End of Volume 3 — Part 3

## Next — Part 4: Capabilities, Mobile Product Showcase & Process Experience

Part 4 will define how we show **what Novaaacode can actually build without turning it into a boring "Our Services" grid**.

It will cover:

```text
Capabilities introduction
Design + development relationship
Interactive capability typography
Web development
Mobile applications
UI/UX
Frontend/product engineering
Capability hover interactions
Large text transformations

↓

Dedicated mobile product showcase
Multiple iPhone screen choreography
Screen stacking
Scroll-driven phone movement
Screen replacement
Foreground/background depth
How the food app or another polished mobile UI can become a visual showcase

↓

Process experience
Discovery
Direction
Design
Build
Refine
Process scroll progression
Number transitions
Minimal process storytelling

↓

Transition into the Work/Contact side of the homepage
```

The key goal will be making **Capabilities feel like part of the visual story rather than four rounded cards saying "Web Development / App Development / UI Design / Development."**