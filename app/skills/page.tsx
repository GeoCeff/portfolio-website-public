import { ArrowDownToLine, ArrowLeft, Github, Instagram, Linkedin, Mail } from "lucide-react";
import AnimatedHeroTitle from "../AnimatedHeroTitle";
import { sitePath } from "../paths";
import ScrollRail from "../ScrollRail";
import { profile, skillGroups } from "../siteData";
import ToolkitMarquee from "../ToolkitMarquee";

export default function SkillsPage() {
  return (
    <main className="site-shell skills-page">
      <div className="aurora" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />
      <header className="topbar">
        <a className="logo" href={sitePath("/#home")} aria-label="Home">{profile.monogram}</a>
        <nav className="nav" aria-label="Primary navigation">
          <a href={sitePath("/#home")}>Home</a>
          <a href={sitePath("/about")}>About</a>
          <a href={sitePath("/projects")}>Projects</a>
          <a className="active" href={sitePath("/skills")}>Skills</a>
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
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={19} /></a>
          <a href={profile.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={19} /></a>
          <a href={profile.mailto} aria-label="Email"><Mail size={19} /></a>
        </div>
      </aside>

      <section className="skills-hero" data-reveal>
        <a className="back-link" href={sitePath("/#skills")}>
          <ArrowLeft size={17} />
          <span>Back to portfolio</span>
        </a>
        <p className="hello"><span /> Technical Toolkit</p>
        <div className="route-title-row">
          <AnimatedHeroTitle text="SKILLS" />
        </div>
        <p className="role">Languages / Software / Data / Systems</p>
        <p className="about-lead">
          A project-backed map of the languages, software, frameworks, platforms, and workflows I
          use across games, data products, browser tools, mobile apps, automation, simulations, and
          this portfolio.
        </p>
      </section>

      <section className="skills-showcase" data-reveal>
        <ToolkitMarquee />

        <div className="skill-group-grid">
          {skillGroups.map((group) => (
            <article className="story-card" key={group.title} data-reveal>
              <p className="bio-kicker">{group.title}</p>
              <h2>{group.title}</h2>
              <p className="skill-summary">{group.summary}</p>
              <div className="stack-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul className="skill-evidence">
                {group.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
