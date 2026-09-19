# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences: journalists and OSINT researchers verifying claims; policy/legal bodies (tribunal officials, NGOs, policymakers) needing evidence for accountability action; and the general public seeking accessible awareness of the campaign. Content must work as rigorous evidence for experts and as a readable narrative for lay readers simultaneously.

## Product Purpose

An interactive investigative report ("Orchestrated Defense") documenting a coordinated inauthentic Facebook network targeting Bangladesh's International Crimes Tribunal. Success is credible, verifiable disclosure that holds up to scrutiny from technical and legal audiences alike.

## Positioning

Forensic evidence rigor — the report's distinct strength is hard forensic/network analysis proof (screenshots, hub diagrams, coordination timelines, waffle/ring charts of scale) rather than narrative claims alone. A neighboring writeup without the underlying exhibits could not credibly replicate this.

## Operating Context

Long-form scrolling investigative briefing built in Next.js (App Router). Structured as sequential sections: Masthead, TopNav, Hero, About Report, Executive Summary, Intro, Scale, Targets, Coordination, Forensics, Aftermath, Implications, Conclusion, Footer. Uses pinned/scroll-driven components (ScrollPin, RingPinned, TargetsPinned, Reveal) and data visualizations (Waffle, BeforeAfter, HubDiagram, RingChart, TargetsChart) sourced from `data/report.js`. A source .docx of the same report exists in the repo root.

## Capabilities and Constraints

- Report content and figures are sourced from `data/report.js`; evidence (screenshots, exhibits, quotes) must remain verbatim — no embellishment or fabricated claims.
- Built with Next.js 15 / React 19, Google fonts (Big Shoulders display, Source Serif 4 body, JetBrains Mono).
- Exhibit/zoom/lightbox components (ZoomableImage, Lightbox, ExhibitOverlay, Figure) imply real screenshot evidence is displayed and must stay inspectable at full fidelity.

## Evidence on Hand

Source report document: `Orchestrated Defense_ The Coordinated Inauthentic Behavior Targeting Bangladesh's International Crimes Tribunal.docx` (repo root). Structured report data in `data/report.js`. No additional testimonials, press, or case studies beyond the report itself — none should be fabricated.

## Product Principles

1. Evidence integrity over persuasion — never dress up or soften forensic findings for effect.
2. Serve three literacy levels at once: skimmable narrative for public readers, verifiable detail for researchers, citable structure for legal/policy use.
3. Scale and coordination must be *shown* (charts, diagrams) not just asserted.
4. Preserve source fidelity — content changes trace back to `data/report.js` and the source docx, not invention.
