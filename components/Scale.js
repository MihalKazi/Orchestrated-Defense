import { scaleCopy, figures } from "@/data/report";
import Figure from "./Figure";
import Reveal from "./Reveal";
import { highlightTerms } from "@/lib/highlight";

export default function Scale() {
  return (
    <section id="scale">
      <div className="wrap">
        <Reveal className="exhibit-head">
          <h2>{scaleCopy.kicker}</h2>
        </Reveal>
        <Reveal className="col" delay={80}>
          {scaleCopy.paragraphs.map((p, i) => (
            <p key={i}>{highlightTerms(p)}</p>
          ))}
          <div className="fact-grid">
            {scaleCopy.lines.map((l) => (
              <div className="fact-card" key={l.label}>
                <span className="fact-card-label">{l.label}</span>
                <p className="fact-card-text">{l.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Figure {...figures.top10Pages} />
        </Reveal>
      </div>
    </section>
  );
}
