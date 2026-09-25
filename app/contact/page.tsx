"use client";

import type { FormEvent } from "react";
import { ArrowDownToLine, ArrowLeft, ArrowUpRight, Code2, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import AnimatedHeroTitle from "../AnimatedHeroTitle";
import { sitePath } from "../paths";
import ScrollRail from "../ScrollRail";
import { profile } from "../siteData";

const contactItems = [
  { label: "GitHub", value: "@GeoCeff", href: profile.github, icon: <Github /> },
  { label: "LinkedIn", value: "Geo Ceff Vinzr Gabaisen", href: profile.linkedin, icon: <Linkedin /> },
  { label: "Instagram", value: "@g.cefff", href: profile.instagram, icon: <Instagram /> },
  { label: "LeetCode", value: "@Vinzr", href: profile.leetcode, icon: <Code2 /> },
  { label: "DataCamp", value: "ghgabaisen", href: profile.datacamp, icon: <Code2 /> }
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
        <p className="hello"><span /> Get in touch</p>
        <div className="route-title-row">
          <AnimatedHeroTitle text="CONTACT" />
        </div>
        <p className="about-lead">
          I&apos;m open to internships, software projects, and collaborations around data tools,
          web interfaces, and games. Tell me what you&apos;re working on.
        </p>
        <div className="contact-direct">
          <a href={profile.mailto}><Mail size={20} aria-hidden="true" /><span>{profile.email}</span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <p><MapPin size={16} aria-hidden="true" />{profile.location}</p>
        </div>
      </section>

      <section className="contact-grid" data-reveal>
        <article className="contact-message" data-reveal>
          <p className="bio-kicker">Message</p>
          <h2>Write a message</h2>
          <form className="contact-form" onSubmit={openEmailDraft}>
            <label>Name<input autoComplete="name" name="name" placeholder="Your name" required /></label>
            <label>Email<input autoComplete="email" name="email" placeholder="you@example.com" required type="email" /></label>
            <label>Message<textarea name="message" placeholder="A little about your idea..." required rows={5} /></label>
            <button className="button primary" type="submit">
              <span>Open Email Draft</span>
              <Mail size={16} />
            </button>
            <p className="contact-form-note">Opens your email app with a draft. Nothing is sent from this page.</p>
          </form>
        </article>

        <aside className="contact-list" aria-label="Other places to connect">
          <p className="bio-kicker">Elsewhere</p>
          <h2>Find me online</h2>
          {contactItems.map((item) => (
            <a className="contact-channel" href={item.href} key={item.label} rel="noreferrer" target="_blank">
              {item.icon}
              <span><strong>{item.label}</strong><small>{item.value}</small></span>
              <ArrowUpRight className="contact-channel-arrow" size={17} aria-hidden="true" />
            </a>
          ))}
        </aside>
      </section>
    </main>
  );
}
