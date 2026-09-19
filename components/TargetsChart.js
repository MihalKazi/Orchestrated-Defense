"use client";

import { useEffect, useRef, useState } from "react";
import { highlightTerms } from "@/lib/highlight";

function CountUp({ target, run }) {
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
    const dur = 2600;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [run, target]);

  return value;
}

export default function TargetsChart({ targets }) {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(false);
  const ref = useRef(null);

  const max = Math.max(...targets.map((t) => t.ads));
  const total = targets.reduce((sum, t) => sum + t.ads, 0);

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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="ledger" ref={ref} onMouseLeave={() => setActive(0)}>
      <div className="ledger-head mono">
        <span>Target</span>
        <span>Ads run against them</span>
      </div>

      {targets.map((t, i) => {
        const isActive = active === i;
        const share = Math.round((t.ads / total) * 100);
        return (
          <div className="ledger-entry" key={t.name}>
            <button
              type="button"
              className="ledger-row"
              data-active={isActive}
              aria-expanded={isActive}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="ledger-rank mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="ledger-id">
                <span className="ledger-name">{t.name}</span>
                {t.role && <span className="ledger-role">{t.role}</span>}
              </span>
              <span className="ledger-bar">
                <span
                  className="ledger-fill"
                  style={{ width: shown ? `${(t.ads / max) * 100}%` : "0%" }}
                />
              </span>
              <span className="ledger-n mono">
                <CountUp target={t.ads} run={shown} />
              </span>
            </button>

            <div className="ledger-detail" data-open={isActive}>
              <div className="ledger-detail-inner">
                <span className="ledger-share mono">
                  {share}% of all {total} ads in phase one
                </span>
                {t.tag && <p className="ledger-note">{highlightTerms(t.tag)}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
