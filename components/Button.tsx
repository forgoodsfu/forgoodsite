import type { ReactNode } from "react";
import { Arrow } from "./Arrow";
import { cx } from "./types";

type Variant = "accent" | "primary" | "ghost" | "link" | "on-night" | "ghost-night";

/** `accent` for the one main action per view; `ghost` / `ghost-night` beside it. Renders a link when `href` is set. */
export function Button({ variant = "primary", size, arrow, href, onClick, type = "button", className, children }: {
  variant?: Variant; size?: "sm"; arrow?: boolean; href?: string; onClick?: () => void; type?: "button" | "submit"; className?: string; children: ReactNode;
}) {
  const cls = cx("pfg-btn", `pfg-btn-${variant}`, size === "sm" && "pfg-btn-sm", className);
  const content = (<>{children}{arrow && <Arrow />}</>);
  if (href) return <a className={cls} href={href}>{content}</a>;
  return <button className={cls} type={type} onClick={onClick}>{content}</button>;
}
