import React, { useRef, useEffect, useState } from "react";
import './blocks.css';

type PosterProps = {
  title?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function Poster({
  title = "Poster",
  defaultOpen = false,
  children,
}: PosterProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState<string>(open ? "none" : "0px");

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (open) {
      const h = el.scrollHeight;
      setMaxH(h + "px");
      const id = window.setTimeout(() => setMaxH("none"), 260);
      return () => window.clearTimeout(id);
    } else {
      if (maxH === "none") {
        const h = el.scrollHeight;
        setMaxH(h + "px");
        requestAnimationFrame(() => setMaxH("0px"));
      } else {
        setMaxH("0px");
      }
    }
  }, [open]);

  return (
    <div className="poster">
      <button
        className="poster-header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="poster-panel"
        type="button"
      >
        <span>{title}</span>
        <span
          className={`poster-chevron ${open ? "open" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      <div
        id="poster-panel"
        ref={panelRef}
        className={`poster-panel ${open ? "open" : "closed"}`}
        style={{ maxHeight: maxH }}
      >
        <div className="poster-content">{children}</div>
      </div>
    </div>
  );
}

/* ===================================================================== 
=====================================================================*/

interface NoteProps {
  text: string;
  children: React.ReactNode;
}

function Note({ text, children }: NoteProps) {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<"center" | "left" | "right">("center");

  useEffect(() => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    const rect = tooltip.getBoundingClientRect();
    const margin = 10; // px from window edge

    if (rect.left < margin) {
      setPos("left");
    } else if (rect.right > window.innerWidth - margin) {
      setPos("right");
    } else {
      setPos("center");
    }
  }, [text]);

  return (
    <span className="note-container">
      {children}
      <span
        ref={tooltipRef}
        className={`note-tooltip note-tooltip-${pos}`}
      >
        {text}
      </span>
    </span>
  );
}

export { Poster, Note};