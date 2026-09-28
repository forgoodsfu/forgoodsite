import { Button, CTABand, FAQ, Footer, Hero, ImpactList, NavBar, ProcessSteps, ProjectCard, SectionHeader, TeamStrip } from "@/components";
import { faqs, footer, hero, impact, JOIN_HREF, nav, PARTNER_HREF, projects, steps, team } from "@/content/site";

export default function Home() {
  return (
    <>
      <NavBar links={nav} />
      <Hero
        {...hero}
        actions={
          <>
            <Button variant="accent" arrow href="#partner">Partner with us</Button>
            <Button variant="ghost-night" href="#projects">See our projects</Button>
          </>
        }
      />

      <main id="main">
        <section id="impact" className="pfg-section" aria-labelledby="impact-title">
          <div className="pfg-section-inner">
            <SectionHeader id="impact-title" index="01" label="What we do" light="Software that" title="gives back."
              lede="Local organizations run on sticky notes, spreadsheets and tools that almost fit. We write the software that gives them time back." />
            <ImpactList variant="grid" items={impact} />
          </div>
        </section>

        <section id="process" className="pfg-section pfg-sunken" aria-labelledby="process-title">
          <div className="pfg-section-inner">
            <SectionHeader id="process-title" index="02" label="Process" title="How a partnership goes" />
            <ProcessSteps steps={steps} />
          </div>
        </section>

        <section id="projects" className="pfg-section" aria-labelledby="projects-title">
          <div className="pfg-section-inner">
            <SectionHeader id="projects-title" index="03" label="Projects" light="Work that" title="speaks for itself." />
            <div className="pfg-projects-grid">
              {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
            </div>
          </div>
        </section>

        <section id="team" className="pfg-section pfg-sunken pfg-team-section" aria-labelledby="team-title">
          <div className="pfg-section-inner">
            <div className="pfg-headrow">
              <SectionHeader id="team-title" index="04" label="Team" light="Built by" title="SFU engineers."
                lede="Four SFU students who take each project from the first call to launch." />
              <Button variant="primary" arrow href={JOIN_HREF}>Join the team</Button>
            </div>
          </div>
          <TeamStrip members={team} />
        </section>

        <section id="faq" className="pfg-section" aria-labelledby="faq-title">
          <div className="pfg-section-inner">
            <div className="pfg-faq-layout">
              <SectionHeader id="faq-title" index="05" label="FAQ" title="Questions we hear on first calls." />
              <FAQ items={faqs} />
            </div>
          </div>
        </section>

        <div className="pfg-cta-wrap">
          <CTABand
            id="partner"
            title="Tell us what your team needs."
            titleMuted="We will build it."
            body="One 30-minute call. No cost, no obligation, no jargon."
            actions={
              <>
                <Button variant="accent" arrow href={PARTNER_HREF}>Book a discovery call</Button>
                <Button variant="ghost-night" href={JOIN_HREF}>Join as a student</Button>
              </>
            }
          />
        </div>
      </main>

      <Footer {...footer} />
    </>
  );
}
