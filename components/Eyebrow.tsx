import type { ReactNode } from "react";

/** Mono uppercase label above a section heading: "01 / WHAT WE DO". */
export function Eyebrow({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <span className="pfg-eyebrow">
      {index && <b>{index}</b>}
      {index && <span className="sep" aria-hidden="true">/</span>}
      <span>{children}</span>
    </span>
  );
}
