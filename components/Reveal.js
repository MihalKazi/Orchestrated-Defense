"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

let idCounter = 0;

/**
 * Fades + slides an element up when it scrolls into view.
 * SSR-safe: server markup has no hidden state, so no-JS visitors see everything.
 * Client adds the "pending" (hidden) class pre-paint only for elements that are
 * off-screen at mount, then reveals via IntersectionObserver.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.92;
    if (!alreadyVisible) {
      el.classList.add("pending");
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !el.classList.contains("pending")) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.remove("pending");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("pending");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
