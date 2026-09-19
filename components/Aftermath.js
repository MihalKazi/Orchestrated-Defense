import {
  postExposureCopy,
  beforeAfter,
  beforeAfterDeltaLabel,
  waffleCounts,
  waffleNew,
  narrativeShifts,
  figures,
} from "@/data/report";
import BeforeAfter from "./charts/BeforeAfter";
import Waffle from "./charts/Waffle";
import Figure from "./Figure";
import Reveal from "./Reveal";
import { highlightTerms } from "@/lib/highlight";

export default function Aftermath() {
  return (
    <section id="exposure">
      <div className="wrap">
        <Reveal className="exhibit-head">
          <h2>{postExposureCopy.kicker}</h2>
        </Reveal>
        <Reveal className="col" delay={60}>
          <p>{postExposureCopy.intro}</p>
          <p>
            <b>{postExposureCopy.deEscalationLabel}</b> {postExposureCopy.deEscalationIntro}
          </p>
        </Reveal>

        <Reveal className="ba-wrap" delay={100}>
          <BeforeAfter data={beforeAfter} deltaLabel={beforeAfterDeltaLabel} />
          <div className="col" style={{ maxWidth: "34ch", paddingBottom: ".4rem" }}>
            <p style={{ margin: "0 0 .6rem" }}>
              <b>{postExposureCopy.preLabel}</b> {postExposureCopy.preText}
            </p>
            <p style={{ margin: 0 }}>
              <b>{postExposureCopy.postLabel}</b> {postExposureCopy.postText}
            </p>
          </div>
        </Reveal>

        <Reveal className="col" style={{ marginTop: "1.6rem" }}>
          <p>
            <b>{postExposureCopy.infraLabel}</b> {postExposureCopy.infraText}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Waffle counts={waffleCounts} newGroup={waffleNew} />
        </Reveal>
        <Reveal>
          <Figure {...figures.unpublished} />
        </Reveal>

        <Reveal className="exhibit-head" style={{ marginTop: "3rem" }}>
          <span className="kicker">{postExposureCopy.narrativeLabel}</span>
        </Reveal>
        <div className="narr-grid">
          {narrativeShifts.map((n, i) => (
            <Reveal className="narr-card" key={n.tag} delay={i * 100}>
              <div className="narr-tag">{n.tag}</div>
              <p>{highlightTerms(n.text)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Figure {...figures.insideStory} />
        </Reveal>
      </div>
    </section>
  );
}
