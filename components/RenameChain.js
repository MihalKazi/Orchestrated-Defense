"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sequential "detective board" reveal: nodes appear one at a time, a dot
 * travels each connecting arrow first, and every superseded name gets a
 * strike-through the instant the next alias lands. The current name pulses
 * once it arrives.
 */
export default function RenameChain({ chain, text }) {
  const ref = useRef(null);
  const [step, setStep] = useState(-1); // index of the last revealed node
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(isReduced);
    if (isReduced) {
      setStep(chain.history.length - 1);
      return;
    }

    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setStep(chain.history.length - 1);
      return;
    }

    let timers = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          chain.history.forEach((_, i) => {
            timers.push(setTimeout(() => setStep(i), i * 700));
          });
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [chain.history]);

  return (
    <div className="rename-chain" ref={ref}>
      <p className="rename-chain-text">{text}</p>
      <div className="ribbon">
        {chain.history.map((h, j) => {
          const revealed = reduced || step >= j;
          const struck = !h.current && step > j;
          return (
            <span key={h.name} className="ribbon-step">
              {j > 0 && (
                <span className="arrow" data-active={reduced || step >= j}>
                  →<span className="arrow-dot" />
                </span>
              )}
              <div
                className={`rnode${h.current ? " now" : ""}`}
                data-revealed={revealed}
                data-struck={struck}
                data-just-arrived={!reduced && step === j && h.current}
              >
                {h.year && <span className="y">{h.year}</span>}
                <span className="rnode-name">&quot;{h.name}&quot;</span>
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
}
