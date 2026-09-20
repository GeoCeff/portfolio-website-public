import { ArrowDownToLine, ArrowLeft, ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { sitePath } from "../paths";
import { openSourceHighlights, portfolioProjects, projectNotes } from "../projectData";
import ScrollRail from "../ScrollRail";
import { profile } from "../siteData";

export default function ProjectsPage() {
  return (
    <main className="site-shell projects-page">
      <div className="aurora" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />
      <header className="topbar">
        <a className="logo" href={sitePath("/#home")} aria-label="Home">
          {profile.monogram}
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href={sitePath("/#home")}>Home</a>
          <a href={sitePath("/about")}>About</a>
          <a className="active" href={sitePath("/projects")}>Projects</a>
          <a href={sitePath("/skills")}>Skills</a>
          <a href={sitePath("/contact")}>Contact</a>
        </nav>
        <a className="resume" href={sitePath(profile.resumeHref)} download>
          <span>Resume</span>
          <ArrowDownToLine size={16} />
        </a>
      </header>

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

      <section className="projects-hero" data-reveal>
        <a className="back-link" href={sitePath("/#projects")}>
          <ArrowLeft size={17} />
          <span>Back to portfolio</span>
        </a>
        <p className="hello"><span /> Selected Work</p>
        <h1>PROJECTS</h1>
        <p className="role">Builds / Systems / Experiments</p>
        <p className="about-lead">
          A proof-led tour of shipped and portfolio-ready work: game systems, local data tools,
          browser performance utilities, simulations, automation, and interfaces that make
          technical ideas easier to use.
        </p>
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
                  src={sitePath(project.image)}
                  width={640}
                />
              ) : (
                <p className="image-note">{project.imageNote}</p>
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
