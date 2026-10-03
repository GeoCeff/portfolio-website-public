import { ArrowDownToLine } from "lucide-react";
import { sitePath } from "./paths";
import { profile } from "./siteData";

const links = [
  ["home", "Home", "/#home"],
  ["about", "About", "/about"],
  ["projects", "Projects", "/projects"],
  ["skills", "Skills", "/skills"],
  ["contact", "Contact", "/contact"],
] as const;

type SiteHeaderProps = {
  active: (typeof links)[number][0];
};

export default function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <a className="logo" href={sitePath("/#home")} aria-label="Home">
        {profile.monogram}
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {links.map(([key, label, href]) => (
          <a
            className={key === active ? "active" : undefined}
            href={sitePath(href)}
            aria-current={key === active ? "page" : undefined}
            key={key}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="resume" href={sitePath(profile.resumeHref)} download>
        <span>Resume</span>
        <ArrowDownToLine size={16} aria-hidden="true" />
      </a>
    </header>
  );
}
