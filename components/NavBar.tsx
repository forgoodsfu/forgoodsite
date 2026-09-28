"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { cx } from "./types";

type Link = { label: string; href: string; active?: boolean; cta?: boolean };

/** Sticky black bar. Collapses into a MENU panel under 720px. */
export function NavBar({ links, accentCursor = true }: { links: Link[]; accentCursor?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav className="pfg-nav pfg-night" aria-label="Main">
        <a href="#top" aria-label="Project For Good, back to top"><Wordmark onNight accent={accentCursor} /></a>
        <div className="pfg-nav-links">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={cx("pfg-nav-link", l.active && "is-active", l.cta && "is-cta")}>{l.label}</a>
          ))}
        </div>
        <button className="pfg-nav-menu" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="pfg-nav-panel">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={cx(l.cta && "is-cta")} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
