---
name: Orchestrated Defense
description: Interactive investigative briefing on coordinated inauthentic behavior targeting Bangladesh's International Crimes Tribunal
colors:
  paper: "#18191C"
  paper-deep: "#1F2023"
  paper-card: "#232427"
  ink: "#F1F1EE"
  ink-muted: "#B4B5BA"
  ink-faint: "#8B8C92"
  rule: "#2C2C31"
  rule-strong: "#3C3C42"
  accent: "#E5534B"
  accent-ink: "#0A0A0C"
  status-critical: "#BE2E31"
  status-warning: "#A58B00"
  status-organic: "#00986C"
  status-new: "#3C7EBE"
  status-neutral: "#7D8072"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 7.5vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Serif 4, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.65
  mono:
    fontFamily: "JetBrains Mono, Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.05em"
spacing:
  sm: "0.6rem"
  md: "1.4rem"
  lg: "2.4rem"
  xl: "clamp(3.5rem, 9vw, 6rem)"
rounded:
  sm: "2px"
  md: "5px"
  pill: "50%"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
    padding: "0"
  kicker-label:
    textColor: "{colors.accent}"
    typography: "{typography.mono}"
  fact-card:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1.3rem 1.4rem"
---

# Design System: Orchestrated Defense

## Overview

**Creative North Star: "The Case File"**

This is a redacted-dossier interface, not a marketing page: near-black paper, evidence tagged in mono type, findings numbered and filed rather than pitched. Every color decision reads as forensic annotation — a single Wire Red stamps urgency onto flagged items (kickers, findings numbers, evidence tags, active states), while status codes (critical/warning/organic/new) carry their own restrained hues for chart legends and network diagrams only. The system rejects glossy elevation: everything sits flat on three tonal layers of near-black, with shadows reserved for the rare floating overlay (lightbox, exhibit caption card) where something genuinely lifts off the page.

Typography does the identity work. Big Shoulders (condensed, heavy, uppercase) reads as investigative-headline type — tight line-height, no ornament. Source Serif 4 carries the long-form reading body with a generous 1.35rem/1.65 rhythm built for sustained reading, not skimming. JetBrains Mono is reserved for anything that behaves like data or metadata: bylines, datelines, stat values, evidence tags, hub IDs, ledger numbers — the visual signal that "this is a measured fact, not prose."

**Key Characteristics:**
- Near-black dossier paper with three tonal steps (paper / paper-deep / paper-card), no shadows at rest
- One accent (Wire Red) used sparingly as an urgency/evidence marker, never decoratively
- Condensed uppercase display type for headlines; serif for reading body; mono for anything numeric or evidentiary
- Status-coded chart palette (critical/warning/organic/new/neutral) kept separate from the brand accent
- Flat, ledger-like data presentation (rows, ranks, bars) over card-heavy dashboard patterns

## Colors

A near-monochrome dark palette punctuated by exactly one warm accent; status hues exist only inside charts and network diagrams, never in chrome.

### Primary
- **Wire Red** (`#E5534B`): the system's only brand accent. Marks kickers, active nav state, findings numbers, evidence-tag rules, blockquote rules, hover borders, and chart fill for the "this is the point" data series. The One Voice Rule below governs its use.

### Neutral
- **Case Paper** (`#18191C`): base page background.
- **Deep Paper** (`#1F2023`): the sunken layer — alternating sections, sticky pin backgrounds, track backgrounds for bars/ledgers.
- **Card Paper** (`#232427`): the raised layer — fact cards, back-to-top button, rename-chain nodes.
- **Ink** (`#F1F1EE`): primary text and headline color.
- **Ink Muted** (`#B4B5BA`): secondary body text, sub-heads, findings text.
- **Ink Faint** (`#8B8C92`): tertiary metadata (masthead meta, target roles, hub captions).
- **Rule** (`#2C2C31`): default hairline border/divider.
- **Rule Strong** (`#3C3C42`): emphasized divider (back-to-top border, ledger head rule).
- **Accent Ink** (`#0A0A0C`): text-on-accent color (active nav pill, primary button text).

### Chart / Status (scoped to data visualization only)
- **Critical** (`#BE2E31`): darker red-adjacent hue for the most severe chart category — deliberately distinct from Wire Red so brand accent and data-severity encoding never collide visually.
- **Warning** (`#A58B00`): amber for cautionary chart categories.
- **Organic** (`#00986C`): green for authentic/organic-growth series (e.g. before/after delta).
- **New** (`#3C7EBE`): blue for newly-appeared entities (dashed waffle cells).
- **Neutral** (`#7D8072`): olive-grey for uncategorized chart segments.

### Named Rules
**The One Voice Rule.** Wire Red appears on evidence and urgency markers only — kickers, findings numbers, active states, chart's "this is the finding" series. It never becomes a background fill, a large surface, or a decorative flourish. Its rarity is what makes it read as a flag.

**The Status-Never-Brand Rule.** Chart status colors (critical/warning/organic/new/neutral) never leak into UI chrome, buttons, or navigation. They exist only inside data visualizations, so a reader can trust that any red they see in prose or nav is the brand accent, not a severity code.

## Typography

**Display Font:** Big Shoulders (weights 700/800/900), with Arial Narrow, sans-serif fallback
**Body Font:** Source Serif 4 (weights 400/500/600/700), with -apple-system, Segoe UI, sans-serif fallback
**Label/Mono Font:** JetBrains Mono (weights 400/500/700), with Consolas, monospace fallback

**Character:** A condensed, all-caps investigative-headline voice paired with a classical serif reading body and a clinical mono for data — the pairing reads as "wire report meets forensic ledger."

### Hierarchy
- **Display** (800, `clamp(2.6rem, 7.5vw, 5.6rem)`, line-height 0.98): hero H1 only, uppercase, tight tracking (-0.01em).
- **Headline** (800, `clamp(1.9rem, 4.4vw, 2.9rem)`, line-height 0.98): section H2s (exhibit-head), uppercase.
- **Title** (800, `clamp(1.6rem, 3.4vw, 2.2rem)` down to 1.05rem, line-height 0.98): findings labels, stat values, media-break text — uppercase, condensed.
- **Body** (400, 1.35rem base / 1rem in-card, line-height 1.65): long-form reading paragraphs, 65–75ch measure via `.col` (42rem max-width).
- **Label** (700, 0.68–0.82rem, letter-spacing 0.05–0.14em, uppercase): kickers, mono metadata, ledger heads, hub counts.

### Named Rules
**The All-Caps Headline Rule.** Every `h1/h2/h3` is uppercase, condensed (Big Shoulders), and set at line-height 0.98 — headlines behave like stamped section markers, not friendly greetings.

**The Data-Is-Mono Rule.** Any value that is a measurement, count, date, byline, or ID renders in JetBrains Mono with tabular-nums — the reader learns to trust mono type as "this number is a fact," never used for prose emphasis.

## Layout

Single centered column, `max-width: 1120px` (`.wrap`), with a narrower `42rem` reading column (`.col`) for prose sections. Side gutters scale with viewport via `clamp(1.2rem, 5vw, 2.4rem)`. Section vertical rhythm is generous and fluid: `clamp(3.5rem, 9vw, 6rem)` padding per section, alternating `paper` and `paper-deep` backgrounds (`section.deep`) to mark dossier "chapters" without borders. Grids (`fact-grid`, `hubs`, `statgrid`) use `repeat(auto-fit, minmax(...))` so density adapts by breakpoint rather than fixed column counts. Below 640–720px, multi-column ledgers and target rows collapse to single-column stacks; the topbar hides its title text to conserve space.

## Elevation & Depth

Flat by default — no ambient box-shadows on cards, buttons, or sections. Depth comes from three stepped tonal layers (Case Paper → Deep Paper → Card Paper, each roughly 2–3% lighter) rather than shadow, keeping the dossier feel matte and print-like. Shadows appear only when content genuinely leaves the page plane: the lightbox image (`0 8px 40px rgba(0,0,0,.4)`) and the exhibit-overlay caption card (`0 6px 24px rgba(0,0,0,.4)`), both floating overlays on top of photographic evidence.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest; a shadow only ever appears under a floating overlay (lightbox, exhibit card), never under a resting card, button, or nav element.

## Shapes

Corners stay tight and functional: 2px on photos/exhibit boxes (barely-there, evidentiary rather than decorative), 5px on rename-chain nodes and rounded ledger bars, full circles (50%) only on interactive round controls (topbar nav icons, back-to-top button, active nav pill). No large soft-rounded cards anywhere — the case-file aesthetic stays sharp-edged. Borders are 1px hairlines (`--rule`) by default, escalating to 2–3px colored accents (`border-left: 3px solid var(--accent)`) to mark quoted or flagged content (blockquotes, dossier callouts, pull quotes).

## Components

### Buttons
- **Shape:** circular (50% radius) for icon buttons (topbar nav, back-to-top); no rectangular filled CTA button exists in the current system.
- **Primary/active:** Wire Red background with Accent Ink text (topbar active nav link).
- **Hover/Focus:** background shifts to Deep Paper with Ink text; `:focus-visible` gets a 2px Wire Red outline with 3px offset system-wide.

### Cards / Containers
- **Corner Style:** 2px (fact cards, evidence photos) to 8px (rename-chain container) — kept minimal.
- **Background:** Card Paper, occasionally Deep Paper for nested/track elements.
- **Shadow Strategy:** none at rest (see Elevation & Depth); border-top accent (2px Wire Red) marks a fact card instead of a shadow.
- **Border:** 1px `--rule`, strengthening to `--rule-strong` on hover.
- **Internal Padding:** ~1.1–1.4rem.

### Data / Ledger Rows
- **Style:** flat rows with a 2px transparent left border that turns Wire Red on hover/active, plus a subtle accent-tinted background wash (`color-mix` 5–9% accent). Numeric fill bars use a diagonal-hatch Wire Red gradient at rest, solid Wire Red on hover/active — signaling "provisional vs. confirmed" without new color.
- **Expand/collapse:** `grid-template-rows: 0fr → 1fr` transition for detail panels, no height/opacity hacks.

### Navigation
- **Topbar:** sticky, blurred-glass background (`backdrop-filter: blur(8px)` over 90%-opacity paper), mono-type circular icon links; active state fills Wire Red with Accent Ink glyph.
- **Masthead:** static top strip, condensed uppercase publication name, faint mono metadata line.

### Evidence / Exhibit Components (signature)
Zoomable, lightboxed photographic evidence is a first-class citizen: `ZoomableImage`, `Lightbox`, `ExhibitOverlay`, `Figure` all exist to keep screenshots inspectable at full fidelity. Exhibit captions always carry a mono `fig-tag` prefix in Wire Red before the caption text, reinforcing "this is cited evidence," not illustrative imagery.

## Do's and Don'ts

### Do:
- **Do** keep Wire Red confined to evidence/urgency markers (kickers, active states, findings numbers, chart "finding" series) — never a large fill.
- **Do** render every count, date, byline, or ID in JetBrains Mono with tabular numerals.
- **Do** use the three-step tonal paper scale for depth; reach for a shadow only on true floating overlays.
- **Do** keep headlines uppercase, condensed, and tightly leaded (line-height ~0.98).

### Don't:
- **Don't** introduce drop shadows on resting cards, buttons, or sections — it breaks the flat dossier read.
- **Don't** reuse chart status colors (critical/warning/organic/new/neutral) in UI chrome, nav, or buttons — they're reserved for data encoding only.
- **Don't** round corners past ~8px anywhere except fully circular icon controls — soft, bubbly shapes contradict the case-file form language.
- **Don't** fabricate testimonials, stats, or exhibits — all evidentiary content must trace back to `data/report.js` and the source report.
