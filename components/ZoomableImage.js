"use client";

import { useRef, useState } from "react";

/**
 * Google-Photos-style zoom: mouse wheel, pinch (two-finger touch), and
 * drag-to-pan once zoomed in. Double-click/tap toggles zoom.
 */
export default function ZoomableImage({ src, alt }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const moved = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const pinch = useRef(null);

  const clamp = (v) => Math.min(4, Math.max(1, v));

  function reset() {
    setScale(1);
    setPos({ x: 0, y: 0 });
  }

  function onWheel(e) {
    e.preventDefault();
    const next = clamp(scale - e.deltaY * 0.0025);
    setScale(next);
    if (next === 1) setPos({ x: 0, y: 0 });
  }

  function touchDist(touches) {
    const [a, b] = touches;
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  function onTouchStart(e) {
    if (e.touches.length === 2) {
      pinch.current = { dist: touchDist(e.touches), scale };
    } else if (e.touches.length === 1 && scale > 1) {
      dragging.current = true;
      last.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }

  function onTouchMove(e) {
    if (e.touches.length === 2 && pinch.current) {
      e.preventDefault();
      const d = touchDist(e.touches);
      setScale(clamp(pinch.current.scale * (d / pinch.current.dist)));
    } else if (e.touches.length === 1 && dragging.current) {
      e.preventDefault();
      const dx = e.touches[0].clientX - last.current.x;
      const dy = e.touches[0].clientY - last.current.y;
      last.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setPos((p) => ({ x: p.x + dx, y: p.y + dy }));
    }
  }

  function onTouchEnd(e) {
    if (e.touches.length < 2) pinch.current = null;
    if (e.touches.length === 0) dragging.current = false;
  }

  function onMouseDown(e) {
    if (scale <= 1) return;
    dragging.current = true;
    moved.current = false;
    last.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseMove(e) {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) moved.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    setPos((p) => ({ x: p.x + dx, y: p.y + dy }));
  }

  function toggleZoom(e) {
    e.stopPropagation();
    if (moved.current) return;
    if (scale > 1) reset();
    else setScale(2.5);
  }

  return (
    <div className="zoomable-viewport" onWheel={onWheel}>
      <img
        src={src}
        alt={alt}
        className="zoomable-img"
        data-zoomed={scale > 1}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onDoubleClick={toggleZoom}
        onClick={toggleZoom}
        draggable={false}
      />
    </div>
  );
}
