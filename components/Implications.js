import { implicationsCopy } from "@/data/report";
import Reveal from "./Reveal";

export default function Implications() {
  return (
    <section id="implications" className="deep">
      <div className="wrap">
        <Reveal className="exhibit-head">
          <span className="kicker">{implicationsCopy.kicker}</span>
        </Reveal>
        <div className="imps">
          {implicationsCopy.items.map((imp, i) => (
            <Reveal className="imp" key={imp.title} delay={i * 100}>
              <div>
                <h3>{imp.title}</h3>
                <p>{imp.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
