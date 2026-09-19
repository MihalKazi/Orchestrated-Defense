"use client";

import { Fragment, useEffect, useRef, useState } from "react";

const MAX_HEIGHT = 160;

function useCountUp(target, run, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    let start = null;
    let raf = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return value;
}

function Bar({ d, max, delay, shown }) {
  const count = useCountUp(d.value, shown);
  const targetHeight = Math.round((d.value / max) * MAX_HEIGHT);
  return (
    <div className="ba-col">
      <div className="ba-n mono">{count}</div>
      <div
        className="ba-bar"
        style={{
          height: shown ? `${targetHeight}px` : "0px",
          background: `var(--status-${d.status})`,
          transitionDelay: `${delay}ms`,
        }}
      />
      <div className="ba-l">
        {d.label.split("\n").map((line, j) => (
          <span key={j}>
            {line}
            {j === 0 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfter({ data, deltaLabel }) {
  const max = Math.max(...data.map((d) => d.value));
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
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="ba-bar-group" ref={ref}>
      {data.map((d, i) => (
        <Fragment key={d.label}>
          <Bar d={d} max={max} delay={i * 250} shown={shown} />
          {i === 0 && (
            <div className="ba-delta" style={{ opacity: shown ? 1 : 0, transitionDelay: "650ms" }}>
              {deltaLabel}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
