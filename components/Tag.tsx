import type { ReactNode } from "react";
import { cx, TONE_FILL, type Tone } from "./types";

export function Tag({ tone, accent, children }: { tone?: Tone; accent?: boolean; children: ReactNode }) {
  return (
    <span className={cx("pfg-tag", accent && "pfg-tag-accent")}>
      {tone && <i style={{ background: TONE_FILL[tone] }} />}
      {children}
    </span>
  );
}
