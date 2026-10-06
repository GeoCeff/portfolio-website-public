import { ArrowLeft, ChevronDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import AnimatedHeroTitle from "../AnimatedHeroTitle";
import Image from "next/image";
import PortraitOrbit from "../PortraitOrbit";
import { sitePath } from "../paths";
import ScrollRail from "../ScrollRail";
import SiteHeader from "../SiteHeader";
import { profile } from "../siteData";
import { aboutPosts } from "./posts";
import PersonalTopics from "./PersonalTopics";

export default function AboutPage() {
  return (
    <main className="site-shell about-page">
      <div className="aurora" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />
      <SiteHeader active="about" />

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

      <section className="about-hero" data-motion data-reveal>
        <div className="about-hero-copy">
          <a className="back-link" href={sitePath("/#about")}>
            <ArrowLeft size={17} />
            <span>Back to portfolio</span>
          </a>
          <p className="hello"><span /> About {profile.displayName}</p>
          <div className="route-title-row">
            <AnimatedHeroTitle text="STORY" />
          </div>
          <p className="role">Beyond the projects</p>
          <p className="about-lead">
            Who? Me? I am Geo Ceff Vinzr H. Gabaisen (Human), a Computer Science student studying
            at UP Cebu. Currently at the ripe young age of 19, atleast at the moment I am writing
            this.  Male and straight. Would be the greatest philosopher of all time if I was born
            a few thousand years ago.
          </p>
        </div>

        <div className="about-portrait" aria-label={profile.portraitAlt}>
          <PortraitOrbit
            alt={profile.portraitAlt}
            fallback={profile.monogram}
            presence="online"
            previewRail
            slides={profile.portraitSlides}
          />
        </div>
      </section>

      <section className="personal-section" data-reveal>
        <div className="section-title">
          <span />
          <h2>01 - beyond the projects</h2>
          <span />
        </div>
        <PersonalTopics />
      </section>

      <section className="writing-section" id="writing" data-reveal>
        <div className="section-title">
          <span />
          <h2>02 - writing</h2>
          <span />
        </div>
        {aboutPosts.length ? (
          <div className="writing-list">
            {aboutPosts.map((post) => (
              <article className="writing-post" id={`post-${post.slug}`} key={post.slug}>
                <details>
                  <summary>
                    <span className="writing-meta">
                      <span>{post.topic}</span>
                      <time dateTime={post.date}>
                        {new Intl.DateTimeFormat("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          timeZone: "UTC"
                        }).format(new Date(post.date))}
                      </time>
                    </span>
                    <strong className="writing-title">{post.title}</strong>
                    <span className="writing-excerpt">{post.excerpt}</span>
                    <span className="writing-toggle">
                      <span className="writing-read">Read post</span>
                      <span className="writing-close">Close post</span>
                      <ChevronDown size={18} aria-hidden="true" />
                    </span>
                  </summary>
                  <div className="writing-body">
                    {post.blocks.map((block, index) => {
                      if (block.type === "heading") return <h3 key={index}>{block.text}</h3>;
                      if (block.type === "paragraph") return <p key={index}>{block.text}</p>;
                      if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
                      if (block.type === "list") {
                        return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
                      }
                      return (
                        <figure key={index}>
                          <Image
                            alt={block.alt}
                            height={block.height}
                            sizes="(max-width: 780px) calc(100vw - 76px), 680px"
                            src={sitePath(block.src)}
                            width={block.width}
                          />
                          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
                        </figure>
                      );
                    })}
                  </div>
                </details>
              </article>
            ))}
          </div>
        ) : (
          <p className="writing-empty">No posts published yet.</p>
        )}
      </section>

    </main>
  );
}
