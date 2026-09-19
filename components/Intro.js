import { introduction, whyMatters } from "@/data/report";
import Reveal from "./Reveal";
import { highlightTerms } from "@/lib/highlight";

export default function Intro() {
  return (
    <section id="intro">
      <div className="wrap">
        <Reveal as="div" className="col">
          <span className="kicker">{introduction.kicker}</span>
          {introduction.paragraphs.map((p, i) => (
            <p className={i === 0 ? "lede" : undefined} key={i}>
              {highlightTerms(p)}
            </p>
          ))}

          <span className="kicker" style={{ marginTop: "2.4rem" }}>
            {whyMatters.kicker}
          </span>
          {whyMatters.paragraphs.map((p, i) => (
            <p key={i}>{highlightTerms(p)}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
