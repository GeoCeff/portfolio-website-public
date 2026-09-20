"use client";

import type { FormEvent } from "react";
import { ArrowDownToLine, ArrowLeft, Code2, Github, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { sitePath } from "../paths";
import ScrollRail from "../ScrollRail";
import { profile } from "../siteData";

const contactItems = [
  { label: "Email", value: profile.email, href: profile.mailto, icon: <Mail /> },
  { label: "Location", value: profile.location, icon: <MapPin /> },
  { label: "Availability", value: profile.availability, icon: <Send /> },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, icon: <Linkedin /> },
  { label: "Instagram", value: profile.instagramLabel, href: profile.instagram, icon: <Instagram /> },
  { label: "GitHub", value: profile.githubLabel, href: profile.github, icon: <Github /> },
  { label: "LeetCode", value: profile.leetcodeLabel, href: profile.leetcode, icon: <Code2 /> },
  { label: "DataCamp", value: profile.datacampLabel, href: profile.datacamp, icon: <Code2 /> }
];

function openEmailDraft(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

  // This navigates to the user's email client, not an internal route.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.href = `${profile.mailto}?subject=${subject}&body=${body}`;
}

export default function ContactPage() {
  return (
    <main className="site-shell contact-page">
      <div className="aurora" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />
      <header className="topbar">
        <a className="logo" href={sitePath("/#home")} aria-label="Home">{profile.monogram}</a>
        <nav className="nav" aria-label="Primary navigation">
          <a href={sitePath("/#home")}>Home</a>
          <a href={sitePath("/about")}>About</a>
          <a href={sitePath("/projects")}>Projects</a>
          <a href={sitePath("/skills")}>Skills</a>
          <a className="active" href={sitePath("/contact")}>Contact</a>
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

      <section className="contact-hero" data-reveal>
        <a className="back-link" href={sitePath("/#home")}>
          <ArrowLeft size={17} />
          <span>Back to portfolio</span>
        </a>
        <p className="hello"><span /> Let&apos;s Connect</p>
        <h1>CONTACT</h1>
        <p className="role">Messages / Collaborations / Opportunities</p>
        <p className="about-lead">
          Reach out for software projects, data-focused work, game or web systems,
          collaborations, or opportunities where practical engineering and clear problem-solving
          matter.
        </p>
      </section>

      <section className="contact-grid" data-reveal>
        <article className="story-card large" data-reveal>
          <p className="bio-kicker">Message</p>
          <h2>Send a note.</h2>
          <form className="contact-form" onSubmit={openEmailDraft}>
            <input aria-label="Name" autoComplete="name" name="name" placeholder="Name" required />
            <input aria-label="Email" autoComplete="email" name="email" placeholder="Email" required type="email" />
            <textarea aria-label="Message" name="message" placeholder="Message" required rows={6} />
            <button className="button primary" type="submit">
              <span>Open Email Draft</span>
              <Mail size={16} />
            </button>
          </form>
        </article>

        <aside className="contact-list">
          {contactItems.map((item) => (
            <article className="contact-card" key={item.label} data-reveal>
              {item.icon}
              <div>
                <p className="bio-kicker">{item.label}</p>
                <h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </h3>
              </div>
            </article>
          ))}
        </aside>
      </section>
    </main>
  );
}
