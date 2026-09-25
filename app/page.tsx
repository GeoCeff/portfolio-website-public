import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Mouse,
} from "lucide-react";
import AnimatedHeroTitle from "./AnimatedHeroTitle";
import Image from "next/image";
import { SiLeetcode } from "react-icons/si";
import EducationLogo from "./EducationLogo";
import HeroScene from "./HeroScene";
import { sitePath } from "./paths";
import { portfolioProjects } from "./projectData";
import ScrollRail from "./ScrollRail";
import SectionTracker from "./SectionTracker";
import { currentFocus, education, experiences, profile } from "./siteData";
import ToolkitMarquee from "./ToolkitMarquee";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" }
];

const featuredProjects = portfolioProjects.slice(0, 6);

export default function Home() {
  return (
    <main className="site-shell">
      <div className="aurora" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />
      <header className="topbar">
        <a className="logo" href="#home" aria-label="Home">
          {profile.monogram}
        </a>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a key={item.label} className={index === 0 ? "active" : ""} href={sitePath(item.href)}>
              {item.label}
            </a>
          ))}
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
          <a href={profile.leetcode} aria-label="LeetCode" target="_blank" rel="noreferrer">
            <SiLeetcode size={19} />
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
        <SectionTracker />
        <span />
      </aside>

      <section id="home" className="hero">
        <div className="hero-copy" data-reveal>
          <p className="hello"><span /> Hello, I&apos;m</p>
          <div className="route-title-row">
            <AnimatedHeroTitle text={profile.displayName} />
          </div>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.heroIntro}</p>
          <div className="cta-row">
            <a className="button primary" href="#projects">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>
            <a className="button secondary" href={sitePath("/contact")}>
              <span>Contact Me</span>
              <Mail size={16} />
            </a>
          </div>
          <div className="focus-strip" data-reveal>
            {currentFocus.map((item) => (
              <div className="focus-item" key={item.label}>
                <span>{item.label}</span>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <HeroScene />
          <div className="hero-portrait" aria-label={profile.portraitAlt}>
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
        </div>

        <p className="quote"><span /> {profile.heroQuote}</p>
      </section>

      <section id="about" className="about" data-reveal>
        <div className="section-title">
          <span />
          <h2>01 - biography</h2>
          <span />
        </div>
        <article className="bio-card">
          <p className="bio-kicker">Biography</p>
          <h3>A student builder building and breaking random programs and code, creating whatever he feels contributes to greater humanity</h3>
          <p>
            As stated, I study computer science but thats such a broad thing so more specifically:
            I am learning automation especially in regards with AI and agentic engineering (call me
            a vibecoder or whatever). I build anything and I build what I like, therefore I build
            anything I like... in all seriousness, I like dealing with data and interactive
            thingymajigs such as games (also studying data science and machine learning from GCI).
          </p>
        </article>
      </section>

      <section id="experience" className="experience" data-reveal>
        <div className="section-title">
          <span />
          <h2>02 - experience</h2>
          <span />
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`} data-reveal>
              <div className="timeline-dot" aria-hidden="true" />
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects" data-reveal>
        <div className="section-title">
          <span />
          <h2>03 - featured projects</h2>
          <span />
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title} data-reveal>
              <div className="project-heading">
                <p className="tag">{project.label}</p>
                <p className="timeline-period">{project.status}</p>
                <h3>{project.title}</h3>
              </div>
              <div
                className={`project-image ${project.className} ${project.image ? "has-shot" : ""}`}
                aria-hidden={project.image ? undefined : true}
              >
                {project.image ? (
                  <Image
                    alt={project.imageAlt}
                    className="project-shot"
                    height={420}
                    src={sitePath(project.image)}
                    width={640}
                  />
                ) : null}
              </div>
              <div className="project-details">
                <p>{project.summary}</p>
                <div className="stack-list compact">
                  {project.stack.slice(0, 4).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className="project-highlight"><strong>Evidence:</strong> {project.highlights[0]}</p>
                <a
                  href={project.href ?? sitePath("/projects")}
                  target={project.href ? "_blank" : undefined}
                  rel={project.href ? "noreferrer" : undefined}
                >
                  {project.href ? "Open Project" : "View Details"} <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills" data-reveal>
        <div className="skills-heading">
          <h2>04 - toolkit</h2>
          <span />
          <a href={sitePath("/skills")}>
            View All Skills <ArrowRight size={16} />
          </a>
        </div>
        <ToolkitMarquee />
      </section>

      <section id="education" className="education" data-reveal>
        <div className="section-title">
          <span />
          <h2>05 - education</h2>
          <span />
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article
              className={`education-card${item.logo === "GCI" ? " education-card--lab" : ""}${item.levels ? " education-card--grouped" : ""}`}
              key={`${item.school}-${item.degree}`}
              data-reveal
            >
              <EducationLogo alt={`${item.school} education mark`} fallback={item.logo} src={item.logoSrc} />
              <p className="timeline-period">{item.period}</p>
              <h3>{item.school}</h3>
              <p className="timeline-company">{item.degree}</p>
              {item.details ? <p>{item.details}</p> : null}
              {item.levels ? (
                <div className="education-levels">
                  {item.levels.map((level) => (
                    <section className="education-level" key={`${level.period}-${level.degree}`}>
                      <p className="timeline-period">{level.period}</p>
                      <h4>{level.degree}</h4>
                      {level.details ? <p>{level.details}</p> : null}
                    </section>
                  ))}
                </div>
              ) : null}
              {item.courseUrl ? (
                <a className="education-course-link" href={item.courseUrl} rel="noreferrer" target="_blank">
                  Course syllabus <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <a className="scroll-cue" href="#projects" aria-label="Scroll to projects">
        <Mouse size={16} />
      </a>
    </main>
  );
}
