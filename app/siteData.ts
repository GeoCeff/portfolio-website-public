export const profile = {
  fullName: "Geo Ceff Vinzr H. Gabaisen",
  displayName: "Vynzer",
  monogram: "G",
  title: "Geo Gabaisen | Portfolio",
  description:
    "Portfolio of Geo Ceff Vinzr H. Gabaisen, a UP Cebu computer science student and DOST-SEI scholar building games, data tools, browser extensions, automation, and web interfaces.",
  role: "Student Builder / Data Interfaces / Game Systems",
  heroIntro:
    "I build local-first tools, data interfaces, and game systems that turn technical ideas into usable software.",
  heroQuote: "Practical systems, shipped with receipts.",
  portraitAlt: "Portrait of Geo Ceff Vinzr H. Gabaisen",
  portraitSrc: "/images/portfolio-image.jpg",
  resumeHref: "/resume/geo-gabaisen-resume-public.docx",
  email: "ghgabaisen@up.edu.ph",
  mailto: "mailto:ghgabaisen@up.edu.ph",
  location: "Cebu City, Cebu, Philippines",
  availability: "Open to opportunities. Contact me.",
  github: "https://github.com/GeoCeff",
  githubLabel: "github.com/GeoCeff",
  linkedin: "https://www.linkedin.com/in/geo-ceff-vinzr-gabaisen-43214a339/",
  linkedinLabel: "linkedin.com/in/geo-ceff-vinzr-gabaisen-43214a339",
  instagram: "https://www.instagram.com/g.cefff/",
  instagramLabel: "instagram.com/g.cefff",
  leetcode: "https://leetcode.com/u/Vinzr/",
  leetcodeLabel: "leetcode.com/u/Vinzr",
  datacamp: "https://datacamp.com/portfolio/ghgabaisen",
  datacampLabel: "datacamp.com/portfolio/ghgabaisen"
};

export const currentFocus = [
  {
    label: "Building",
    copy: "Perk the Star: Godot/C++ orbital defense systems."
  },
  {
    label: "Learning",
    copy: "GCI World: Python data analysis, model evaluation, and SQL."
  },
  {
    label: "Direction",
    copy: "Local-first tools with clear interfaces and careful guardrails."
  }
];

export const experiences = [
  {
    role: "Office Aide",
    company: "Local Government Unit - Maribojoc, Bohol",
    period: "June 2025 - July 2025",
    copy:
      "Coordinated with 3+ offices, including the Mayor's and Vice Mayor's offices, to process documents and keep administrative workflows moving; managed payroll and personnel data for 20+ staff and summer workers in Microsoft Excel; processed and encoded 100+ job orders and employee records during administrative transitions."
  }
];

type EducationLevel = {
  degree: string;
  period: string;
  details?: string;
};

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details?: string;
  logo: string;
  logoSrc?: string;
  courseUrl?: string;
  levels?: EducationLevel[];
};

export const education: EducationItem[] = [
  {
    school: "University of the Philippines Cebu",
    degree: "Bachelor of Science in Computer Science",
    period: "August 2025 - Ongoing",
    details:
      "Current GWA: 1.975. DOST-SEI Undergraduate Scholar, Merit Awardee 2025. Based in Cebu City, Cebu.",
    logo: "UP",
    logoSrc: "/logos/up-cebu-seal.png"
  },
  {
    school: "Global Consumer Intelligence (GCI World)",
    degree: "Data Science & Machine Learning Foundations",
    period: "September 2026 - December 2026 (Ongoing)",
    details:
      "Retaking the course after the April 2026 cohort to complete the coursework and qualify for a certificate. The syllabus combines NumPy/pandas analysis, visualization, model evaluation, feature engineering, marketing analytics, and SQL with weekly homework, a competition, and a final assignment.",
    logo: "GCI",
    logoSrc: "/logos/matsuo-iwasawa-lab.png",
    courseUrl: "https://weblab.t.u-tokyo.ac.jp/en/lecture/gci/"
  },
  {
    school: "Bohol Wisdom School",
    degree: "Basic Education",
    period: "2013 - 2025",
    logo: "BWS",
    logoSrc: "/logos/bohol-wisdom-school-logo.png",
    levels: [
      {
        degree: "Senior High School | STEM Strand",
        period: "2023 - 2025",
        details:
          "Ranked 9th overall in the Grade 12 batch. Served as governor of the Mind Games Club, which focused on chess and other logic games."
      },
      {
        degree: "Junior High School",
        period: "2019 - 2023"
      },
      {
        degree: "Elementary School",
        period: "2013 - 2019"
      }
    ]
  }
];

export const personalTopics = [
  {
    title: "Hobbies",
    copy:
      "I am an avid gamer, or used to be. I'm more casual now, preferring more chill and less competitive games though I used to sweat and grind alot (CoD:M and such). Initially developed my interest in logic through Minecraft redstone, my desire for automation comes from me building farms in the game.\n\nI love music, I listen to it alot alot. You won't see me in person without some form of audio device (this is somewhat of an exaggeration but also isn't one). I listen to alot of genres, the \"normie\" ones such as RnB, Hip-Hop, etc. but I also listen rock, metal, air (joke), white girl music and dare I say phonk. Allat I haven't mentioned but I really don't limit what I listen to."
  },
  {
    title: "Passions",
    copy:
      "--Gym/Fitness--\nI love and hate the gym. Well it might be I love the gym but hate my physique. Could be body dysmorphia or that I really am just small. I'd say the former. Anyways, throughout my senior high school days, I'd always workout at home at times where the academic load wasn't that heavy, for the most part atleast. I didn't really care much, I'd still train despite having exams the next day/morning. Recently, I have started going to a local gym and training is the one thing I look forward to in my days.\n\nDue to this, I am pretty interested in what applications computer science has in the field of physical fitness. I have been updating myself in upcoming and new researches of the subject, especially when it comes to what data has been pulled and interpretations of it."
  },
  {
    title: "Values",
    copy:
      "Philosophically, I would label myelf absurdist nihilist. I do not believe in an absolute truth. What I do believe in is my being. I move in my favor and create situations favorable to me.\n\nOf all the traits, I value resolve the most. I truly believe that when one does something, they should do it with their all."
  }
];

export const skillGroups = [
  {
    title: "Languages and Core Web",
    summary:
      "Languages and web foundations listed in the resume and used across the portfolio projects.",
    items: ["Python", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS", "GDScript", "JSON"],
    evidence: [
      "Python appears in the quantitative trading platform, automation toolkit, and GCI data science coursework.",
      "C, C++, and GDScript appear in the listed skills and the Perk the Star Godot/GDExtension stack.",
      "JavaScript, TypeScript, HTML, and CSS appear in the resume skills and browser/web projects.",
      "JSON appears in the Perk the Star project stack for wave data."
    ]
  },
  {
    title: "Frameworks and Interfaces",
    summary:
      "Frameworks and interface tools explicitly named in the resume's skills and project stacks.",
    items: ["React", "Next.js", "Streamlit", "Chrome Extensions", "Manifest V3", "DOM APIs"],
    evidence: [
      "React and Next.js are listed under resume skills and power this portfolio.",
      "Streamlit appears in the quantitative trading platform and resume skills.",
      "Chrome Extensions, Manifest V3, MutationObserver, content-visibility, and DOM APIs appear in ChatGPT Thread Optimizer."
    ]
  },
  {
    title: "Data and Analytics",
    summary:
      "Data libraries and analytics skills named in the resume and GCI coursework.",
    items: ["Pandas", "NumPy", "Plotly", "yfinance", "Backtesting", "Risk Metrics", "CSV Export", "Data Visualization"],
    evidence: [
      "The quantitative trading platform uses Python, Streamlit, Pandas, NumPy, Plotly, and yfinance.",
      "The same project includes MA/RSI/Bollinger backtests, Plotly dashboards, risk metrics, manual trading, and CSV export.",
      "GCI coursework covers Python-based data analysis, machine learning, and data visualization."
    ]
  },
  {
    title: "Games and Browser Systems",
    summary:
      "Interactive project stacks from the resume: Godot gameplay, browser extensions, and physics web work.",
    items: ["Godot", "Godot 4.6", "GDExtension", "GDScript", "JavaScript Physics", "Chrome Extensions"],
    evidence: [
      "Perk the Star is listed with C++, GDExtension, GDScript, Godot, and JSON.",
      "ChatGPT Thread Optimizer is listed with JavaScript, Chrome Extension, Manifest V3, and DOM APIs.",
      "Projectile Motion Web App is listed with JavaScript, HTML, and CSS."
    ]
  },
  {
    title: "Automation and Testing",
    summary:
      "Automation and quality tools named in the Python Automation Toolkit resume entry.",
    items: ["argparse", "unittest", "GitHub Actions", "File Organization", "CSV Reports", "ZIP Backups"],
    evidence: [
      "Python Automation Toolkit includes file organization, CSV sales reports, timestamped ZIP backups, argparse, unittest coverage, and GitHub Actions CI.",
      "GitHub Actions also appears in the resume project stack for the automation toolkit."
    ]
  },
  {
    title: "Tools and Platforms",
    summary:
      "General tools and platforms listed in the resume skills, portfolio, and work experience sections.",
    items: ["Git", "GitHub", "GitHub Actions", "Microsoft Excel", "LeetCode", "DataCamp"],
    evidence: [
      "Git/GitHub appears in the resume's Languages/Tools and Skills sections.",
      "Microsoft Excel appears in the office aide experience for payroll and personnel data.",
      "LeetCode and DataCamp are linked in the resume portfolio section."
    ]
  }
];
