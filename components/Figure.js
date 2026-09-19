"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

export default function Figure({ src, width, height, caption, fignum }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="evidence-photo">
        <button
          type="button"
          className="evidence-photo-btn"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge exhibit: ${caption}`}
        >
          <Image src={src} width={width} height={height} alt={caption} sizes="(max-width: 700px) 100vw, 700px" />
        </button>
        <figcaption>
          <span className="mono fig-tag">Fig. {fignum}</span> {caption}
        </figcaption>
      </figure>

      {open && <Lightbox src={src} caption={caption} fignum={fignum} onClose={() => setOpen(false)} />}
    </>
  );
}
