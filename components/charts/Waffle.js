"use client";

import { useEffect, useRef, useState } from "react";

const TEXTURE_CLASS = {
  solid: "tex-solid",
  hatch: "tex-hatch",
  dot: "tex-dot",
  dash: "tex-dash",
};

export default function Waffle({ counts, newGroup }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cells = [];
  counts.forEach((c) => {
    for (let i = 0; i < c.n; i++) {
      cells.push({ key: `${c.key}-${i}`, status: c.key, texture: c.texture, label: c.label });
    }
  });

  const legend = [...counts, newGroup];

  return (
    <div className="waffle-wrap" ref={ref}>
      <div className="waffle">
        {cells.map((cell, i) => (
          <div
            key={cell.key}
            className={`wcell ${TEXTURE_CLASS[cell.texture]}`}
            data-shown={shown}
            style={{ "--sw": `var(--status-${cell.status})`, transitionDelay: `${i * 12}ms` }}
            title={cell.label}
          />
        ))}
      </div>
      <div className="waffle-plus">
        78 tracked pages, reassessed 10 days after publication. Separately,{" "}
        <b className="mono" style={{ color: "var(--status-new)" }}>
          {newGroup.n} new pages
        </b>{" "}
        were introduced into the network in the same window.
      </div>
      <div className="legend">
        {legend.map((c) => (
          <div className="legend-item" key={c.key}>
            <span
              className={`swatch-sq ${TEXTURE_CLASS[c.texture]}`}
              style={{ "--sw": `var(--status-${c.key})` }}
            />
            {c.label} · {c.n}
          </div>
        ))}
      </div>
    </div>
  );
}
