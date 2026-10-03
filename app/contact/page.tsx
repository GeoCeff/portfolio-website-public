"use client";

import type { FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, Code2, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import AnimatedHeroTitle from "../AnimatedHeroTitle";
import { sitePath } from "../paths";
import ScrollRail from "../ScrollRail";
import SiteHeader from "../SiteHeader";
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
      <SiteHeader active="contact" />

      <ScrollRail />
      <aside className="side-rail right" aria-label="Social links">
        <div className="social-stack">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={19} /></a>
          <a href={profile.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={19} /></a>
          <a href={profile.mailto} aria-label="Email"><Mail size={19} /></a>
        </div>
      </aside>

      <section className="contact-hero" data-motion data-reveal>
        <a className="back-link" href={sitePath("/#home")}>
          <ArrowLeft size={17} />
          <span>Back to portfolio</span>
        </a>
        <p className="hello"><span /> Get in touch</p>
        <div className="route-title-row contact-title-row">
          <AnimatedHeroTitle text="CONTACT" />
          <svg className="contact-mail-scene" viewBox="0 0 156 104" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <g className="contact-mailbox">
              <path className="contact-mailbox-stand" d="M99 68v21m-10 0h20" />
              <path className="contact-mailbox-opening" d="M64 68V40a16 16 0 0 1 32 0v28Z" />
              <g className="contact-mailbox-door">
                <path d="M64 68V40a16 16 0 0 1 32 0v28Z" />
                <path d="M76 43h8" />
              </g>
              <g className="contact-mail-envelope">
                <rect className="contact-mail-paper" x="11" y="42" width="30" height="24" rx="3" stroke="none" />
                <Mail x="8" y="36" width="36" height="36" strokeWidth={1.5} />
              </g>
              <path className="contact-mailbox-side" d="M80 24h38a18 18 0 0 1 18 18v26H96V40a16 16 0 0 0-16-16Z" />
              <g className="contact-mailbox-flag">
                <path d="M114 50V16" />
                <path d="M114 16h12v10h-12Z" fill="currentColor" />
                <circle cx="114" cy="50" r="2" fill="currentColor" stroke="none" />
              </g>
            </g>
          </svg>
        </div>
        <p className="about-lead">
          I&apos;m open to internships, software projects, and collaborations around data tools,
          web interfaces, and games. Tell me what you&apos;re working on.
        </p>
        <div className="contact-direct">
          <a href={profile.mailto}><Mail size={20} aria-hidden="true" /><span>{profile.email}</span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href={profile.locationHref} rel="noreferrer" target="_blank">
            <MapPin size={16} aria-hidden="true" />
            <span>{profile.location}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
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
              <Mail aria-hidden="true" size={16} />
            </button>
            <p className="contact-form-note">Opens your email app with a draft. Nothing is sent from this page.</p>
            <label className="contact-email-fallback">
              No mail app? Copy this address
              <input aria-label="Email address to copy" readOnly value={profile.email} />
            </label>
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
