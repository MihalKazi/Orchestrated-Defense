import { conclusionCopy } from "@/data/report";
import Reveal from "./Reveal";

export default function Conclusion() {
  return (
    <section id="conclusion" className="conclusion">
      <div className="wrap">
        <Reveal as="div" className="col-center">
          <span className="kicker">{conclusionCopy.kicker}</span>
          <blockquote>{conclusionCopy.paragraphs[0]}</blockquote>
          <p className="col-center" style={{ textAlign: "left" }}>
            {conclusionCopy.paragraphs[1]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
