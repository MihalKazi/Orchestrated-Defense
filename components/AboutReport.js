import { aboutReport } from "@/data/report";
import Reveal from "./Reveal";
import { highlightTerms } from "@/lib/highlight";

export default function AboutReport() {
  const [p1, p2, , p4] = aboutReport.paragraphs;
  return (
    <section id="about">
      <div className="wrap">
        <Reveal as="div" className="col">
          <span className="kicker">{aboutReport.kicker}</span>
          <p className="lede">{highlightTerms(p1)}</p>
          <p>{highlightTerms(p2)}</p>
          <p>
            We uncovered and documented this digital manipulation, publishing our in-depth
            findings across two detailed investigative stories on <span className="term-name">The Dissent</span> on October 28 and
            November 20, 2025 ({" "}
            <a
              className="inline-src"
              href="https://thedissent.news/digital-investigations/paid-anonymous-facebook-campaign-targets-army-officers-trial"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            and{" "}
            <a
              className="inline-src"
              href="https://thedissent.news/digital-investigations/trial-of-army-officers-coordinated-campaign-targeting-the-tribunal-continues"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ).
          </p>

          <p>{p4}</p>
        </Reveal>
      </div>
    </section>
  );
}
