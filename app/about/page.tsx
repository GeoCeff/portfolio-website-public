import { ArrowDownToLine, ArrowLeft, ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { sitePath } from "../paths";
import ScrollRail from "../ScrollRail";
import { aboutMilestones, aboutTraits, profile } from "../siteData";

export default function AboutPage() {
  return (
    <main className="site-shell about-page">
      <div className="aurora" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />
      <header className="topbar">
        <a className="logo" href={sitePath("/#home")} aria-label="Home">
          {profile.monogram}
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href={sitePath("/#home")}>Home</a>
          <a className="active" href={sitePath("/about")}>About</a>
          <a href={sitePath("/#projects")}>Projects</a>
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

      <section className="about-hero" data-reveal>
        <div className="about-hero-copy">
          <a className="back-link" href={sitePath("/#about")}>
            <ArrowLeft size={17} />
            <span>Back to portfolio</span>
          </a>
          <p className="hello"><span /> About {profile.displayName}</p>
          <h1>STORY</h1>
          <p className="role">Computer Science / Data / Game Systems</p>
          <p className="about-lead">
            I am {profile.fullName}, a BS Computer Science student at UP Cebu and a DOST-SEI
            scholar. I build useful systems where software, data, and interaction meet: local
            dashboards, browser tools, game systems, simulations, and automation with guardrails.
          </p>
        </div>

        <div className="about-portrait" aria-label={profile.portraitAlt}>
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              {profile.portraitSrc ? (
                <Image
                  alt={profile.portraitAlt}
                  className="portrait-photo"
                  height={520}
                  priority
                  src={sitePath(profile.portraitSrc)}
                  width={520}
                />
              ) : (
                <span>{profile.monogram}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="story-grid" data-reveal>
        <article className="story-card large">
          <p className="bio-kicker">Profile</p>
          <h2>A student builder focused on useful systems.</h2>
          <p>
            I study Computer Science at the University of the Philippines Cebu, where I am building
            foundations in programming, algorithms, data analysis, and software development. My
            work is strongest when it turns a technical concept into something visible, testable,
            and usable.
          </p>
          <p>
            I enjoy projects that combine logic, usefulness, and a clean user experience, from
            analytics dashboards and web interfaces to browser extensions, Godot systems, local
            automation, and interactive simulations. After joining the April 2026 GCI World
            cohort, I am retaking the September-December course with Matsuo-Iwasawa Laboratory,
            The University of Tokyo, to complete the coursework and qualify for a certificate.
          </p>
        </article>

        <aside className="story-card traits-card" data-reveal>
          <p className="bio-kicker">Focus</p>
          <div className="trait-list">
            {aboutTraits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="story-path" data-reveal>
        <div className="section-title">
          <span />
          <h2>01 - journey</h2>
          <span />
        </div>
        <div className="about-timeline">
          {aboutMilestones.map((item) => (
            <article className="timeline-item" key={item.label} data-reveal>
              <div className="timeline-dot" aria-hidden="true" />
              <p className="timeline-period">{item.label}</p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="photo-strip" data-reveal>
        <div className="section-title">
          <span />
          <h2>02 - selected work</h2>
          <span />
        </div>
        <div className="photo-grid">
          <article className="photo-card" data-reveal>
            <div className="photo-placeholder">
              <Image
                alt="Perk the Star orbital-defense gameplay"
                className="project-shot"
                height={420}
                src={sitePath("/images/projects/perk-the-star-gameplay.png")}
                width={640}
              />
            </div>
            <p>Perk the Star - six-mode orbital defense</p>
          </article>
          <article className="photo-card" data-reveal>
            <div className="photo-placeholder">
              <Image
                alt="Philippine Demographic Mapper choropleth preview"
                className="project-shot"
                height={420}
                src={sitePath("/images/projects/demographic-mapper.png")}
                width={640}
              />
            </div>
            <p>Demographic Mapper - reviewed PSGC data joins</p>
          </article>
          <article className="photo-card" data-reveal>
            <div className="photo-placeholder">
              <Image
                alt="Stock Backtester market analytics dashboard"
                className="project-shot"
                height={420}
                src={sitePath("/images/projects/stock-backtester.png")}
                width={640}
              />
            </div>
            <p>Stock Backtester - strategy and risk analysis</p>
          </article>
        </div>
      </section>

      <section className="about-closing" data-reveal>
        <p>I am open to opportunities and collaborations where thoughtful software and practical problem-solving can create value.</p>
        <a className="button primary" href={sitePath("/contact")}>
          <span>Contact Me</span>
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
