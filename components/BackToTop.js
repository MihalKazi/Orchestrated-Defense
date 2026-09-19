"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className="back-to-top"
      aria-label="Back to top"
      data-visible={visible}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      &#8593;
    </button>
  );
}
