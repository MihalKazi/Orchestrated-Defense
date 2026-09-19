"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ZoomableImage from "./ZoomableImage";

/**
 * Rendered via a portal to document.body so `position:fixed` is relative to
 * the real viewport — nesting this inside any ancestor with a CSS transform
 * (e.g. the .reveal fade-in wrapper) would otherwise box it in.
 */
export default function Lightbox({ src, caption, fignum, onClose }) {
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(typeof document !== "undefined" ? document.activeElement : null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus?.();
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button ref={closeBtnRef} type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        ✕
      </button>
      <ZoomableImage src={src} alt={caption || ""} />
      {caption && (
        <div className="lightbox-caption mono">
          Fig. {fignum} — {caption} · Scroll, pinch, or double-tap to zoom
        </div>
      )}
    </div>,
    document.body
  );
}
