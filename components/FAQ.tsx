/** Accordion built on native details/summary. */
export function FAQ({ items, openIndex }: { items: { q: string; a: string }[]; openIndex?: number }) {
  return (
    <div className="pfg-faq">
      {items.map((it, i) => (
        <details key={it.q} open={i === openIndex}>
          <summary>{it.q}</summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  );
}
