import { cx } from "./types";

/** The Project For Good name set in type, ending in a blinking underscore cursor. */
export function Wordmark({ onNight, accent, className }: { onNight?: boolean; accent?: boolean; className?: string }) {
  return (
    <span className={cx("pfg-wordmark", onNight && "on-night", accent && "accent", className)} aria-label="Project For Good">
      Project For Good<span className="pfg-cursor" aria-hidden="true" />
    </span>
  );
}
