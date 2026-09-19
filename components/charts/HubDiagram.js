"use client";

import { useEffect, useRef, useState } from "react";

const W = 260;
const H = 150;
const CX = W / 2;
const CY = H - 14;
const RAD = 6;
const SPREAD = 150;
const START = -90 - SPREAD / 2;

export default function HubDiagram({ hub }) {
  const n = hub.count;
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [reduced, setReduced] = useState(false);

  const spokes = Array.from({ length: n }, (_, i) => {
    const angle = ((START + (n === 1 ? SPREAD / 2 : (SPREAD * i) / (n - 1))) * Math.PI) / 180;
    const len = 70 + (i % 3) * 10;
    return {
      x: CX + Math.cos(angle) * len,
      y: CY + Math.sin(angle) * len,
      len,
    };
  });

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
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
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="hub-card" ref={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${hub.id} linked to ${hub.count} pages`}>
        {spokes.map((s, i) => (
          <line
            key={`l${i}`}
            x1={CX}
            y1={CY}
            x2={s.x}
            y2={s.y}
            stroke="var(--rule-strong)"
            strokeWidth="1"
            className="hub-line"
            style={{
              strokeDasharray: s.len,
              strokeDashoffset: reduced || shown ? 0 : s.len,
              transitionDelay: `${i * 35}ms`,
            }}
          />
        ))}
        {spokes.map((s, i) => (
          <circle
            key={`d${i}`}
            cx={s.x}
            cy={s.y}
            r="3.2"
            fill="var(--accent)"
            className="hub-dot"
            style={{
              opacity: reduced || shown ? 1 : 0,
              transform: reduced || shown ? "scale(1)" : "scale(0)",
              transformOrigin: `${s.x}px ${s.y}px`,
              transitionDelay: `${i * 35 + 120}ms`,
            }}
          />
        ))}
        <circle cx={CX} cy={CY} r={RAD} fill="var(--ink)" />
      </svg>
      <div className="hub-count">
        {hub.kind} · {hub.count} pages
      </div>
      <div className="hub-id">{hub.id}</div>
      {hub.examples.length > 0 && (
        <div className="hub-examples">
          {hub.examples.map((e) => (
            <span className="swatch named" key={e}>
              {e}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
