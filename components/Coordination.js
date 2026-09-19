import { coordinationCopy, renameChains, figures } from "@/data/report";
import Figure from "./Figure";
import Reveal from "./Reveal";
import RenameChain from "./RenameChain";

export default function Coordination() {
  const { intro, sub1, sub2, sub3 } = coordinationCopy;

  return (
    <section id="coordination">
      <div className="wrap">
        <Reveal className="exhibit-head">
          <h2>{coordinationCopy.kicker}</h2>
          <p className="sub">{intro}</p>
        </Reveal>

        <Reveal as="h3" className="sec-subhead">
          {sub1.title}
        </Reveal>
        <Reveal className="col">
          <p>{sub1.text}</p>
        </Reveal>
        <Reveal>
          <Figure {...figures.syndicatedPost} />
        </Reveal>

        <Reveal as="h3" className="sec-subhead" style={{ marginTop: "2rem" }}>
          {sub2.title}
        </Reveal>
        <Reveal className="col">
          <p>{sub2.intro}</p>
        </Reveal>
        <div className="rename-chains">
          {renameChains.map((chain, i) => (
            <RenameChain key={chain.page} chain={chain} text={sub2.lines[i]} />
          ))}
        </div>
        <Reveal>
          <Figure {...figures.pageRenames} />
        </Reveal>

        <Reveal as="h3" className="sec-subhead" style={{ marginTop: "2.4rem" }}>
          {sub3.title}
        </Reveal>
        <Reveal className="col">
          <p>{sub3.text}</p>
        </Reveal>
        <Reveal>
          <Figure {...figures.deepfake} />
        </Reveal>
      </div>
    </section>
  );
}
