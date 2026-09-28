import { Eyebrow } from "./Eyebrow";

/** Eyebrow + two-tone h2 ("Work that / speaks for itself.") + optional lede. */
export function SectionHeader({ index, label, light, title, lede, id }: { index?: string; label?: string; light?: string; title: string; lede?: string; id?: string }) {
  return (
    <div className="pfg-sechead">
      {(index || label) && <Eyebrow index={index}>{label}</Eyebrow>}
      <h2 id={id}>
        {light && <span className="light">{light} </span>}
        {title}
      </h2>
      {lede && <p>{lede}</p>}
    </div>
  );
}
