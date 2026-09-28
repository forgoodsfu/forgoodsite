import { TONE_FILL, type Tone } from "./types";

// Monograms use only fills that hold 4.5:1 with on-sunset text.
const TONES: Tone[] = ["sunset", "lilac", "moss"];

function Member({ name, role, i, hidden }: { name: string; role?: string; i: number; hidden?: boolean }) {
  const initials = name.split(" ").map((w) => w.charAt(0)).join("").slice(0, 2);
  return (
    <div className="pfg-member" aria-hidden={hidden || undefined}>
      <span className="pfg-monogram" style={{ background: TONE_FILL[TONES[i % TONES.length]] }}>{initials}</span>
      <div>
        <div className="pfg-member-name">{name}</div>
        {role && <div className="pfg-member-role">{role}</div>}
      </div>
    </div>
  );
}

// Each half of the track needs enough cards to span a wide screen, or the loop shows a gap.
const MIN_PER_HALF = 12;

/** Slow marquee of members. Pauses on hover and under reduced motion. */
export function TeamStrip({ members }: { members: { name: string; role?: string }[] }) {
  const copies = Math.max(1, Math.ceil(MIN_PER_HALF / members.length));
  const half = Array.from({ length: copies }, () => members).flat();
  return (
    <div className="pfg-team">
      <div className="pfg-marquee-track">
        {half.map((m, i) => <Member key={`a-${i}`} {...m} i={i % members.length} hidden={i >= members.length} />)}
        {half.map((m, i) => <Member key={`b-${i}`} {...m} i={i % members.length} hidden />)}
      </div>
    </div>
  );
}
