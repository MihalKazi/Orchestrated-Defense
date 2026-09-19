import { hubs, forensicsCopy, figures } from "@/data/report";
import HubDiagram from "./charts/HubDiagram";
import Figure from "./Figure";
import Reveal from "./Reveal";
import { highlightTerms } from "@/lib/highlight";

export default function Forensics() {
  return (
    <section id="forensics" className="deep">
      <div className="wrap">
        <Reveal className="exhibit-head">
          <h2>{forensicsCopy.kicker}</h2>
        </Reveal>
        <Reveal className="col" delay={60}>
          <p>{forensicsCopy.intro}</p>
        </Reveal>

        <div className="hubs">
          {hubs.map((hub, i) => (
            <Reveal key={hub.id} delay={i * 100}>
              <HubDiagram hub={hub} />
              <p style={{ marginTop: "1rem", fontSize: ".92rem" }}>
                <b>{hub.heading}:</b> {highlightTerms(hub.text)}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Figure {...figures.overlap} />
        </Reveal>
      </div>
    </section>
  );
}
