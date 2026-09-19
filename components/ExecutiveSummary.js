import { execSummary } from "@/data/report";
import Reveal from "./Reveal";
import { highlightTerms } from "@/lib/highlight";

export default function ExecutiveSummary() {
  const [p1, p2] = execSummary.paragraphs;
  return (
    <section id="executive-summary" className="deep">
      <div className="wrap">
        <Reveal as="div" className="col">
          <span className="kicker">{execSummary.kicker}</span>
          <p>{highlightTerms(p1)}</p>
          <p>{highlightTerms(p2)}</p>

          <h3 className="findings-intro">{execSummary.bulletsIntro}</h3>
          <ol className="findings-list">
            {execSummary.bullets.map((b, i) => (
              <li className="findings-item" key={b.label}>
                <span className="findings-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="findings-body">
                  <span className="findings-label">{b.label}</span>
                  <span className="findings-text">{b.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
