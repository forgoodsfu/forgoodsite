"use client";

import { useState } from "react";
import { cx } from "./types";

type Step = { title: string; body: string; screenLabel?: string; screenTitle?: string; checklist?: { label: string; done?: boolean }[] };

/** Step list with a sunset rail on the active step, and a dark screen showing that step's checklist. */
export function ProcessSteps({ steps, initial = 0 }: { steps: Step[]; initial?: number }) {
  const [active, setActive] = useState(initial);
  const cur = steps[active];
  return (
    <div className="pfg-process">
      <ol className="pfg-steps">
        {steps.map((s, i) => (
          <li key={s.title} className={cx("pfg-step", i === active && "is-active")}>
            <h3>
              <button type="button" onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} aria-expanded={i === active}>
                <span className="pfg-step-n">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </button>
            </h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="pfg-screen" aria-live="polite">
        <div className="pfg-screen-bar">
          <div className="pfg-screen-dots"><i /><i /><i /></div>
          <span>{cur.screenLabel ?? "project.log"}</span>
        </div>
        <div className="pfg-screen-body">
          <div className="pfg-screen-title">{cur.screenTitle ?? cur.title}</div>
          {(cur.checklist ?? []).map((c) => (
            <div key={c.label} className={cx("pfg-screen-row", c.done && "done")}>
              <i />{c.label}<span className="sr-only">{c.done ? " (done)" : " (to do)"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
