import { TONE_FILL, type Tone } from "./types";

const TONES: Tone[] = ["sunset", "harbour", "lilac", "moss"];

/** Outcomes as colour-square bullets (list) or three titled columns (grid). */
export function ImpactList({ items, variant = "list" }: { items: { label: string; body?: string; tone?: Tone }[]; variant?: "list" | "grid" }) {
  if (variant === "grid") {
    return (
      <div className="pfg-impact-grid">
        {items.map((it, i) => (
          <div key={it.label} className="pfg-impact-cell">
            <h3><i style={{ background: TONE_FILL[it.tone ?? TONES[i % 4]] }} />{it.label}</h3>
            {it.body && <p>{it.body}</p>}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="pfg-impact">
      <ul>
        {items.map((it, i) => (
          <li key={it.label}><i style={{ background: TONE_FILL[it.tone ?? TONES[i % 4]] }} />{it.label}</li>
        ))}
      </ul>
    </div>
  );
}
