import { meta } from "@/data/report";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="grid">
          <div>
            <h4>Reporting</h4>
            {meta.authors.join(" & ")}
          </div>
          <div>
            <h4>Data Visualization</h4>
            Kazi Rohanuzzaman Mehal
          </div>
          <div>
            <h4>Published By</h4>
            Activate Rights
          </div>
        </div>
        <div className="credit">
          {meta.title}: {meta.subtitle}
        </div>
      </div>
    </footer>
  );
}
