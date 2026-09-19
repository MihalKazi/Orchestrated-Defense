// Wraps key institutional names/acronyms in body copy with a distinct color
// so they're scannable on re-read. Terms are matched longest-first so a full
// phrase like "International Crimes Tribunal (ICT)" highlights as one unit
// rather than double-marking the parenthetical acronym inside it.
const TERMS = [
  "International Crimes Tribunal (ICT)",
  "Directorate General of Forces Intelligence (DGFI)",
  "International Crimes Tribunal",
  "Directorate General of Forces Intelligence",
  "Inquiry Commission on Enforced Disappearances",
  "Commission on Enforced Disappearances",
  "Amnesty International",
  "Bangladesh Army",
  "Air Force",
  "Rainforest Media",
  "The Dissent",
  "ICT",
  "DGFI",
  "RAW",
].sort((a, b) => b.length - a.length);

const PATTERN = new RegExp(`(${TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");

export function highlightTerms(text) {
  if (typeof text !== "string") return text;
  const parts = text.split(PATTERN);
  return parts.map((part, i) =>
    TERMS.includes(part) ? (
      <span className="term-name" key={i}>
        {part}
      </span>
    ) : (
      part
    )
  );
}
