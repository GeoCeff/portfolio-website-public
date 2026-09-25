import {
  SiC,
  SiCplusplus,
  SiCss,
  SiGit,
  SiGithubactions,
  SiGodotengine,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiStreamlit,
  SiTypescript
} from "react-icons/si";

const groups = [
  {
    title: "Languages, Markup and Styling",
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> }
    ]
  },
  {
    title: "Frameworks and UI",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
      { name: "Chrome Extensions", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Tools and Platforms",
    items: [
      { name: "Godot", icon: <SiGodotengine /> },
      { name: "Git / GitHub", icon: <SiGit /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Pandas / NumPy", icon: <SiPython /> },
      { name: "Plotly", icon: <SiPython /> }
    ]
  }
];

export default function ToolkitMarquee() {
  return (
    <div className="toolkit-groups">
      {groups.map((group) => (
        <section className="toolkit-group" key={group.title} aria-label={group.title}>
          <h3>{group.title}</h3>
          <div className="toolkit-marquee">
            <div className="toolkit-track">
              {[false, true].map((duplicate) => (
                <ul className="toolkit-set" aria-hidden={duplicate || undefined} key={String(duplicate)}>
                  {group.items.map((item) => (
                    <li className="tech-item" key={item.name}>
                      {item.icon}
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
