import type { ReactNode } from "react";

/** Closing night panel with a two-line promise, buttons and the sunset dash grid. */
export function CTABand({ id, title, titleMuted, body, actions }: { id?: string; title: string; titleMuted?: string; body?: string; actions?: ReactNode }) {
  const cells = Array.from({ length: 32 }, (_, i) => i % 9 === 0 || i === 31);
  return (
    <section id={id} className="pfg-cta pfg-night" aria-labelledby={id ? `${id}-title` : undefined}>
      <h2 id={id ? `${id}-title` : undefined}>
        {title}
        {titleMuted && <span className="muted"> {titleMuted}</span>}
      </h2>
      {body && <p>{body}</p>}
      {actions && <div className="pfg-hero-actions">{actions}</div>}
      <div className="pfg-cta-grid" aria-hidden="true">
        {cells.map((on, i) => <i key={i} className={on ? "on" : undefined} />)}
      </div>
    </section>
  );
}
