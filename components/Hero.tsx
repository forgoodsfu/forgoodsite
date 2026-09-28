import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

/** Night stage with skyline photo, two-tone display headline ending in a sunset caret. */
export function Hero({ title, titleMuted, lede, image, actions, facts, eyebrow, eyebrowIndex }: {
  title: string; titleMuted: string; lede?: string; image?: string; actions?: ReactNode; facts?: string[]; eyebrow?: string; eyebrowIndex?: string;
}) {
  return (
    <header id="top" className="pfg-hero pfg-night">
      {image && <div className="pfg-hero-bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />}
      {image && <div className="pfg-hero-scrim" aria-hidden="true" />}
      <div className="pfg-hero-inner">
        {eyebrow && <Eyebrow index={eyebrowIndex}>{eyebrow}</Eyebrow>}
        <h1>
          {title}
          <span className="muted">{titleMuted}<span className="pfg-caret" aria-hidden="true" /></span>
        </h1>
        {lede && <p>{lede}</p>}
        {actions && <div className="pfg-hero-actions">{actions}</div>}
        {facts && <div className="pfg-hero-foot">{facts.map((f) => <span key={f}>{f}</span>)}</div>}
      </div>
    </header>
  );
}
