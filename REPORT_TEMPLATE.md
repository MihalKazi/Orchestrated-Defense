# Starting a new investigative report site

Reusable brief for bootstrapping a Next.js investigative-report site in a new folder/repo. Paste the relevant parts into that new repo's chat, or use as a checklist.

## 1. Stack

"Next.js App Router, plain CSS (no Tailwind), React. Structure: `data/report.js` holds all report content as exported constants; `components/` holds one component per section; `app/globals.css` holds the whole design system as CSS custom properties."

## 2. Product context (what `/impeccable init` will ask)

Have these ready:
- **Primary users**: who reads this (journalists/researchers, policy/legal bodies, general public — pick what's true)
- **Positioning**: what makes this report's proof credible (forensic evidence, exclusive access, first documentation, etc.)
- **Durable constraint**: "Evidence must stay verbatim — no embellishment, no fabricated claims. All content traces back to the source report/data file."

## 3. Design system to request

Say: *"Build a flat, near-black dossier aesthetic. One accent color used only as an evidence/urgency marker — never decorative. Condensed uppercase display font for headlines, serif for body reading text, mono for anything numeric/evidentiary (dates, counts, IDs, bylines). No shadows except on floating overlays like a lightbox. Tight, sharp-edged shapes — no soft rounded cards."*

Concretely hand over:
- **Colors**: a near-black paper background, two lighter tonal steps for card/deep backgrounds, an off-white ink color, one accent color chosen for this report (pick a hue that fits the subject — doesn't have to be red), separate muted "chart status" colors (critical/warning/organic/new/neutral) that **never** leak into UI chrome.
- **Type**: a condensed/heavy display font (headlines, uppercase), a serif or humanist body font (reading paragraphs), a monospace font (data/metadata).
- **Rule**: "One Voice Rule" — the accent color only marks evidence/urgency, never used as a large fill or decoration.

## 4. Content structure to request

"Structure the report as: Masthead → Hero (title/dek/hero image) → About This Report → Executive Summary (bulleted key findings) → Introduction / Why It Matters → Scale (the numbers) → Targets/Affected Parties (as a ledger/table, not a donut chart) → Method/Coordination (how it was done, with real screenshots) → Forensics (technical evidence — real IDs, not abstracted) → Aftermath/Post-Exposure (what changed after publication) → Implications → Conclusion → Footer (reporting credit, methodology, published-by)."

Adjust section names to fit the actual story — this is a starting skeleton, not a fixed requirement.

## 5. The non-negotiable content rule

State this explicitly up front, every time: **"All report content must come from a single `data/report.js`-style file, copied verbatim from the source document. No paraphrasing, no invented statistics, no fabricated quotes or testimonials. Every claim needs a citable source (a screenshot, a figure, or the original report text)."**

## 6. Evidence-display rules

- Every image/screenshot is a numbered "Exhibit"/"Figure" with a real caption — never decorative.
- Build a zoomable lightbox for evidence photos (people will want to verify text in screenshots).
- Never crop or full-bleed an evidentiary image for "atmosphere" — if it needs to be read, show it intact.
- Restrain visual treatment on sensitive content (manipulated media, harassment evidence) — flat captioned display, not dramatized.

## 7. Things to explicitly avoid (learned the hard way)

- Don't add stat/hero numbers unless asked for on the hero — a wall of counters up top can feel like a dashboard, not a story.
- Don't use full-bleed cover-cropped pinned backgrounds for evidence images — only for genuine atmosphere/mood shots, if any.
- Don't invent section headings not present in the source copy — always pull the heading text from the data file's own `kicker`/title field.
- Check contrast on any "faint"/tertiary text color against the near-black background (WCAG AA, 4.5:1 minimum) before finalizing the palette.
- Keep data-table-style rows (rankings, ledgers) left/right-aligned for scanability — don't center-align tabular data even if the rest of the page is centered.
- Don't add animated visuals just to have motion — only animate a fact the data actually supports.

## 8. Order of operations

1. `/impeccable init` — product context first.
2. Build `data/report.js` from the real source document (verbatim).
3. Build components section-by-section against that data.
4. `/impeccable document` — generate `DESIGN.md` + sidecar from the finished CSS (don't hand-write DESIGN.md before code exists — extract it after).
5. `/impeccable audit` — a11y/perf/responsive pass before calling it done.
