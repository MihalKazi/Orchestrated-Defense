import { meta } from "@/data/report";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <h1>{meta.title}</h1>
        <p className="dek">{meta.subtitle}</p>

        <div className="hero-image">
          <img src="/hero-manipulation.png" alt="Coordinated inauthentic Facebook network targeting Bangladesh's International Crimes Tribunal" />
        </div>

        <div className="dateline">
          <span className="dateline-place">DHAKA, BANGLADESH</span>
          <span className="dateline-sep">—</span>
          <span>
            By{" "}
            {meta.authors.map((a, i) => (
              <b key={a}>
                {a}
                {i < meta.authors.length - 2 ? ", " : i === meta.authors.length - 2 ? " and " : ""}
              </b>
            ))}
          </span>
        </div>
        <div className="byline-rule" />
      </div>
    </header>
  );
}
