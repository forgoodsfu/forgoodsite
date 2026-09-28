import { Wordmark } from "./Wordmark";

export function Footer({ blurb, columns, legal, note }: {
  blurb?: string; columns?: { title: string; links: { label: string; href: string }[] }[]; legal?: string; note?: string;
}) {
  return (
    <footer className="pfg-footer pfg-night">
      <div className="pfg-footer-top">
        <div>
          <Wordmark onNight />
          {blurb && <p>{blurb}</p>}
        </div>
        {columns?.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>{c.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="pfg-footer-base"><span>{legal}</span><span>{note}</span></div>
    </footer>
  );
}
