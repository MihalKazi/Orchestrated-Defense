import { targets, targetsCopy, figures } from "@/data/report";
import Figure from "./Figure";
import Reveal from "./Reveal";
import TargetsChart from "./TargetsChart";
import { highlightTerms } from "@/lib/highlight";

export default function Targets() {
  return (
    <section id="targets" className="deep">
      <div className="wrap">
        <Reveal className="exhibit-head">
          <h2>{targetsCopy.kicker}</h2>
          <p className="sub">{targetsCopy.intro}</p>
        </Reveal>

        <Reveal className="col" delay={60}>
          <p>{targetsCopy.listIntro}</p>
        </Reveal>

        <Reveal delay={90}>
          <TargetsChart targets={targets} />
        </Reveal>

        <Reveal delay={120}>
          <Figure {...figures.eliasAds} />
        </Reveal>

        <Reveal className="col" style={{ marginTop: "2.2rem" }}>
          <p>{highlightTerms(targetsCopy.outro)}</p>
        </Reveal>
      </div>
    </section>
  );
}
