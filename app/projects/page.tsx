import { ArrowLeft, ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import AnimatedHeroTitle from "../AnimatedHeroTitle";
import Image from "next/image";
import { sitePath } from "../paths";
import { openSourceHighlights, portfolioProjects, projectNotes } from "../projectData";
import ScrollRail from "../ScrollRail";
import SiteHeader from "../SiteHeader";
import { profile } from "../siteData";

const gallerySlots = ["Main image", "Left detail", "Right detail"];

export default function ProjectsPage() {
  return (
    <main className="site-shell projects-page">
      <div className="aurora" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />
      <SiteHeader active="projects" />

      <ScrollRail />
      <aside className="side-rail right" aria-label="Social links">
        <div className="social-stack">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin size={19} />
          </a>
          <a href={profile.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
            <Instagram size={19} />
          </a>
          <a href={profile.mailto} aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </aside>

      <section className="projects-hero" data-motion data-reveal>
        <a className="back-link" href={sitePath("/#projects")}>
          <ArrowLeft size={17} />
          <span>Back to portfolio</span>
        </a>
        <p className="hello"><span /> Selected Work</p>
        <div className="route-title-row">
          <AnimatedHeroTitle text="PROJECTS" />
        </div>
        <p className="role">Builds / Systems / Experiments</p>
        <p className="about-lead">
          A proof-led tour of shipped and portfolio-ready work: game systems, local data tools,
          browser performance utilities, simulations, automation, and interfaces that make
          technical ideas easier to use.
        </p>
        <svg className="project-folder-scene" viewBox="0 0 300 240" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <g className="project-folder">
            <path className="project-folder-back" d="M60 206V105a7 7 0 0 1 7-7h50l13 13h103a7 7 0 0 1 7 7v88Z" />
            <g className="project-sheet project-sheet--code">
              <rect x="120" y="122" width="60" height="72" rx="4" />
              <path d="m139 140-7 7 7 7m22-14 7 7-7 7m-8-17-6 26M133 176h34m-34 6h22" />
            </g>
            <g className="project-sheet project-sheet--interface">
              <rect x="120" y="122" width="60" height="72" rx="4" />
              <rect x="131" y="137" width="38" height="28" rx="2" />
              <path d="M131 145h38m-26 0v20m-10 11h34m-34 6h22" />
            </g>
            <g className="project-sheet project-sheet--build">
              <rect x="120" y="122" width="60" height="72" rx="4" />
              <path d="m150 135 15 8v17l-15 8-15-8v-17Zm-15 8 15 8 15-8m-15 8v17M133 181h17" />
              <g className="project-build-check">
                <circle cx="173" cy="176" r="11" />
                <path d="m168 176 3 3 6-7" />
              </g>
            </g>
            <g className="project-folder-cover">
              <path d="M60 206V128a7 7 0 0 1 7-7h166a7 7 0 0 1 7 7v78Z" />
              <path className="project-folder-label" d="M81 144h28m-28 8h17" />
            </g>
            <path className="project-folder-edge" d="M60 206h180" />
          </g>
        </svg>
      </section>

      <section className="project-showcase" data-reveal>
        {portfolioProjects.map((project, index) => (
          <article className={`showcase-card ${index < 4 ? "feature-scene" : ""}`} key={project.title} data-reveal>
            <div className="showcase-copy">
              <div className="showcase-meta">
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <p className="tag">{project.label}</p>
              </div>
              <p className="timeline-period">{project.status}</p>
              <h2>{project.title}</h2>
              <p>{project.detail}</p>
              <div className="case-grid">
                <div>
                  <h3>What it does</h3>
                  <p>{project.whatItDoes}</p>
                </div>
                <div>
                  <h3>What I built</h3>
                  <p>{project.whatIBuilt}</p>
                </div>
                <div>
                  <h3>Why it matters</h3>
                  <p>{project.whyItMatters}</p>
                </div>
              </div>
              <p className="timeline-period">Evidence &amp; outcomes</p>
              <ul className="highlight-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.href ? (
                  <a className="project-action" href={project.href} target="_blank" rel="noreferrer">
                    Open Repository <ArrowRight size={17} />
                  </a>
                ) : (
                  <>
                    <span className="project-action muted">Private source</span>
                    <a className="project-action" href={sitePath(project.image)} target="_blank" rel="noreferrer">
                      View Demo Capture <ArrowRight size={17} />
                    </a>
                  </>
                )}
                {project.liveHref ? (
                  <a className="project-action" href={project.liveHref} target="_blank" rel="noreferrer">
                    Live Demo <ArrowRight size={17} />
                  </a>
                ) : null}
              </div>
            </div>
            <div
              className={`showcase-visual project-image ${project.className} ${project.image ? "has-shot" : ""}`}
              aria-label={project.image ? undefined : project.imageAlt}
            >
              {project.image ? (
                <Image
                  alt={project.imageAlt}
                  className="project-shot"
                  height={420}
                  sizes="(max-width: 780px) calc(100vw - 48px), (max-width: 980px) calc(100vw - 96px), 40vw"
                  src={sitePath(project.image)}
                  width={640}
                />
              ) : (
                <p className="image-note">{project.imageNote}</p>
              )}
            </div>
            <div className="showcase-gallery" aria-label={`${project.title} screenshot gallery`}>
              {Array.from(
                { length: Math.max(gallerySlots.length, 1 + (project.screenshots?.length ?? 0)) },
                (_, slotIndex) => {
                  const label = gallerySlots[slotIndex] ?? `Screenshot ${slotIndex}`;
                  const screenshot = project.screenshots?.[slotIndex - 1];
                  const fallbackDetail = slotIndex > 0 && !screenshot;
                  const image = slotIndex === 0 ? project.image : screenshot?.image ?? project.image;
                  const alt = slotIndex === 0 ? project.imageAlt : screenshot?.imageAlt ?? `${project.imageAlt}, ${label.toLowerCase()}`;
                  const slotLabel = slotIndex === 0 ? "Main image" : screenshot?.label ?? label;

                  return (
                    <figure className={`showcase-gallery-item ${image ? "has-shot" : ""} ${fallbackDetail ? `detail-crop detail-crop-${slotIndex}` : ""}`} key={slotLabel}>
                      <div>
                        {image ? (
                          <Image
                            alt={alt ?? `${project.title} ${slotLabel} screenshot`}
                            className="project-shot"
                            height={180}
                            sizes="(max-width: 780px) 30vw, 280px"
                            src={sitePath(image)}
                            width={280}
                          />
                        ) : (
                          <span>{slotLabel}</span>
                        )}
                      </div>
                      <figcaption>{slotLabel}</figcaption>
                    </figure>
                  );
                }
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="project-extras" data-reveal>
        <div className="section-title">
          <span />
          <h2>01 - project notes</h2>
          <span />
        </div>
        <div className="extra-grid">
          {projectNotes.map((post) => (
            <article className="extra-card" key={post.title} data-reveal>
              <p className="timeline-period">{post.topic}</p>
              <h3>{post.title}</h3>
              <p>{post.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-extras" data-reveal>
        <div className="section-title">
          <span />
          <h2>02 - open source</h2>
          <span />
        </div>
        <div className="extra-grid">
          {openSourceHighlights.map((item) => (
            <article className="extra-card" key={item.title} data-reveal>
              <p className="timeline-period">{item.type}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a className="project-action" href={item.href} target="_blank" rel="noreferrer">
                View Source <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-closing" data-reveal>
        <p>These projects show native game logic, data analysis, browser performance, maps, simulations, automation, local-first product thinking, and responsive web delivery.</p>
        <a className="button primary" href={sitePath("/contact")}>
          <span>Contact Me</span>
          <Mail size={16} />
        </a>
      </section>
    </main>
  );
}
