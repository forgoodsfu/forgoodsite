export type Tone = "harbour" | "sunset" | "lilac" | "moss";

export const TONE_FILL: Record<Tone | "ink", string> = {
  sunset: "var(--sunset)",
  harbour: "var(--frame-harbour)",
  lilac: "var(--frame-lilac)",
  moss: "var(--frame-moss)",
  ink: "var(--ink)",
};

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
