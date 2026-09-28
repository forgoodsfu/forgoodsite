import { Arrow } from "./Arrow";
import { cx, type Tone } from "./types";

/** Case-study card: colour stage with a device mock, title, arrow link and Client / Service / Sector. */
export function ProjectCard({ tone = "harbour", title, client, service, sector, image, imageAlt, href }: {
  tone?: Tone; title: string; client: string; service: string; sector: string; image?: string; imageAlt?: string; href?: string;
}) {
  const external = !!href && /^https?:\/\//.test(href);
  return (
    <article className="pfg-project">
      <div className={cx("pfg-project-stage", tone, image && "has-image")}>
        <div className="pfg-device">
          <div className="pfg-device-bar"><i /><i /><i /></div>
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={imageAlt ?? ""} />
          ) : (
            <div className="pfg-device-wire" aria-hidden="true">
              <b style={{ width: "40%" }} /><b style={{ width: "85%" }} /><b style={{ width: "70%" }} /><b style={{ width: "92%" }} /><b style={{ width: "60%" }} />
            </div>
          )}
        </div>
      </div>
      <div className="pfg-project-head">
        <h3>{title}</h3>
        {!href ? null : external ? (
          <a className="pfg-project-go" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit the ${client} site (opens in a new tab)`}><Arrow /></a>
        ) : (
          <a className="pfg-project-go" href={href} aria-label={`Read the case study: ${title}`}><Arrow /></a>
        )}
      </div>
      <dl className="pfg-project-meta">
        <div><dt>Client</dt><dd>{client}</dd></div>
        <div><dt>Service</dt><dd>{service}</dd></div>
        <div><dt>Sector</dt><dd>{sector}</dd></div>
      </dl>
    </article>
  );
}
