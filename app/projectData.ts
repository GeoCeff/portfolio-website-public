export const portfolioProjects = [
  {
    label: "GAME",
    title: "Perk the Star",
    status: "Godot 4.6 / C++ GDExtension",
    summary:
      "Playable orbital-defense game with rotating tower slots, wave modes, Tech XP, and native C++ helpers behind the Godot loop.",
    detail:
      "Perk the Star is a Godot 4.6 orbital tower-defense game about defending the Sun with satellites placed on concentric rotating rings. The project uses C++ GDExtension for reusable data, math, HUD, audio, and helper systems, while GDScript coordinates scene flow, input, drawing, and waves.",
    whatItDoes:
      "Players build towers on orbital slots, start waves, fire Solar Flare, earn Tech XP, and unlock permanent upgrades across Campaign, Boss Rush, Daily Seed, Draft Defense, Endless, and No-Flare Challenge.",
    whatIBuilt:
      "I built the core gameplay loop, wave modes, tech-tree progression, scoring bonuses, saved records, and native extension helpers that keep the Godot project easier to maintain.",
    whyItMatters:
      "It shows game systems thinking: readable architecture, replayable modes, native performance helpers, and player-facing progression in one project.",
    highlights: [
      "Six playable modes with scaling waves, boss pressure, daily seeds, and draft perks.",
      "C++ GDExtension split for reusable game data, math, HUD, audio, and helper classes.",
      "Tech XP progression, Perfect Orbit bonuses, fast-kill combos, and saved best records."
    ],
    stack: ["Godot 4.6", "C++", "GDExtension", "GDScript", "Game Systems"],
    href: "https://github.com/GeoCeff/perk-the-star",
    liveHref: "",
    image: "/images/projects/perk-the-star-gameplay.png",
    imageAlt: "Perk the Star live orbital-defense gameplay with mission HUD and tower tray",
    imageNote: "",
    className: "robot"
  },
  {
    label: "DATA",
    title: "Stock Backtester and Simulator",
    status: "Streamlit Market Analytics",
    summary:
      "Local market workstation for comparing tickers, testing strategies, and reading risk before pretending a trade idea is good.",
    detail:
      "A Streamlit market analytics dashboard for downloading market data, comparing tickers, running strategy backtests, testing safe Quant Lab snippets, and practicing manual trades in a paper-trading simulator. It is educational software and does not place live trades.",
    whatItDoes:
      "The app loads Yahoo Finance, Stooq, or deterministic demo data; charts indicators; runs MA, RSI, and Bollinger strategies; compares benchmarks; and tracks portfolio risk.",
    whatIBuilt:
      "I built a broker-style dashboard, backtest modules, paper-trading flows, safe strategy-code checks, risk views, and tests around the data and simulator pieces.",
    whyItMatters:
      "It turns finance concepts into an inspectable local tool with guardrails, repeatable demo data, and practical analytics.",
    highlights: [
      "Backtests moving-average crossover, RSI, and Bollinger Band strategies against buy-and-hold.",
      "Quant Lab blocks imports, filesystem, network, subprocess, reflection helpers, and unsafe pandas writes.",
      "Portfolio views include Sharpe ratio, drawdown, VaR, CVaR, rolling risk, and monthly returns."
    ],
    stack: ["Python", "Streamlit", "Pandas", "Backtesting", "Risk Metrics"],
    href: "https://github.com/GeoCeff/stock-tester-and-simulator",
    liveHref: "",
    image: "/images/projects/stock-backtester.png",
    imageAlt: "Stock Backtester dashboard preview",
    imageNote: "",
    className: "circuit"
  },
  {
    label: "MAPS",
    title: "Philippine Demographic Mapper",
    status: "Local-First Choropleth Studio",
    summary:
      "CSV-to-map studio that turns PSGC-coded Philippine data into reviewed choropleths with export-ready visuals.",
    detail:
      "A local-first web app for creating infographic-style Philippine demographic choropleths. It supports geography scopes, PSGC-coded CSV joins, match review, palette controls, project JSON save/load, and publication-ready export while keeping caveats around sample fixtures visible.",
    whatItDoes:
      "Users select region, province, city, municipality, or scoped barangay levels, import CSV data, review match issues, style choropleths, and export map images.",
    whatIBuilt:
      "I built the static app workflow, validation panels, export options, boundary-source selector, and scaffolded data pipeline for generated normalized GeoJSON.",
    whyItMatters:
      "It shows data product judgment: local-first workflows, validation before visualization, and careful handling of geographic data limits.",
    highlights: [
      "CSV import uses PSGC joins with duplicate, wrong-level, parent-scope, and value issue review.",
      "Exports PNG/SVG in square, portrait, and report presets with title, subtitle, and source notes.",
      "Includes no-dependency boundary fetch and normalization scripts for open Philippine boundary data."
    ],
    stack: ["JavaScript", "GeoJSON", "PSGC", "SVG", "Data Validation"],
    href: "https://github.com/GeoCeff/philippine-demographic-mapper",
    liveHref: "https://geoceff.github.io/philippine-demographic-mapper/",
    image: "/images/projects/demographic-mapper.png",
    imageAlt: "Philippine Demographic Mapper choropleth preview",
    imageNote: "",
    className: "circuit"
  },
  {
    label: "EXTENSION",
    title: "ChatGPT Thread Optimizer",
    status: "Manifest V3 Browser Tool",
    summary:
      "Browser extension that makes long ChatGPT threads lighter by parking old turns behind reversible placeholders.",
    detail:
      "A Manifest V3 browser extension that keeps recent ChatGPT turns fully live and parks older lengthy turns into lightweight placeholders. The extension works client-side, does not send chat data anywhere, and restores parked turns in-place when clicked.",
    whatItDoes:
      "It watches the conversation with MutationObserver, applies content-visibility and containment, keeps the newest turns live, and reduces layout and paint pressure from older heavy messages.",
    whatIBuilt:
      "I built the content script, settings flow, placeholder restoration, local long-thread fixtures, and simulated live tests for extension behavior.",
    whyItMatters:
      "It solves a real browser performance pain with reversible DOM changes instead of destructive shortcuts.",
    highlights: [
      "Includes local long-thread and live-simulated tests for regression checks.",
      "Keeps original conversation content intact and expands parked turns immediately on click or keyboard activation.",
      "Uses content-visibility, containment, and compact placeholders to reduce long-thread rendering cost."
    ],
    stack: ["JavaScript", "Manifest V3", "DOM APIs", "Performance", "Chrome Extension"],
    href: "https://github.com/GeoCeff/chatgpt-thread-optimizer",
    liveHref: "",
    image: "/images/projects/thread-optimizer.png",
    imageAlt: "ChatGPT Thread Optimizer browser extension preview",
    imageNote: "",
    className: "portfolio"
  },
  {
    label: "PHYSICS",
    title: "Projectile Motion Lab",
    status: "Interactive Browser Simulation",
    summary:
      "Interactive physics lab where students compare ideal projectile motion against drag with charts, animation, and exports.",
    detail:
      "An interactive browser-based physics lab for exploring projectile motion with and without air resistance. It turns projectile equations into a graphing-calculator style experience with live charts, presets, validation, share links, image export, and CSV output.",
    whatItDoes:
      "Students adjust object, environment, gravity, air density, speed, angle, and time step, then compare range, apex, flight time, energy, and drag effects.",
    whatIBuilt:
      "I built the numerical simulation, Desmos-style controls, chart updates, animation scrubber, shareable URLs, CSV export, and per-chart PNG downloads.",
    whyItMatters:
      "It makes a physics model concrete, inspectable, and reusable without a backend or build step.",
    highlights: [
      "Ships as a live GitHub Pages app with a lightweight syntax-check workflow.",
      "Includes object presets, environment presets, validation, animation, CSV export, and PNG chart export.",
      "Compares ideal motion with quadratic drag using adjustable gravity and air density."
    ],
    stack: ["JavaScript", "HTML", "CSS", "Physics", "Charts"],
    href: "https://github.com/GeoCeff/projectile-motion",
    liveHref: "https://geoceff.github.io/projectile-motion/",
    image: "/images/projects/projectile-motion.png",
    imageAlt: "Projectile Motion Lab interactive chart screenshot",
    imageNote: "",
    className: "robot"
  },
  {
    label: "AUTOMATION",
    title: "Auto Response Email",
    status: "Consent-First Outreach Tool",
    summary:
      "Consent-first email automation that defaults to dry runs, suppression checks, local review, and auditable CSV logs.",
    detail:
      "A local, CSV-driven command-line tool for consent-first outreach. It sends personalized messages, collects replies, detects unsubscribe requests, maintains suppression lists, prepares response drafts, and keeps CSV logs for auditing and deduplication.",
    whatItDoes:
      "Users initialize local data, run setup checks, review contacts and replies in a dashboard, preview outreach, collect replies, and send only after explicit confirmation.",
    whatIBuilt:
      "I built the CLI workflows, dashboard review surfaces, consent gates, dry-run defaults, suppression handling, scheduling, drafts, and audit logs.",
    whyItMatters:
      "It treats automation as a trust-boundary problem: local-first, review-first, capped by default, and explicit about consent.",
    highlights: [
      "Outreach is capped at 25 messages per run unless deliberately overridden.",
      "Dry runs are the default and real sends require confirmation flags.",
      "SMTP, IMAP, dashboard review, suppression lists, reply drafts, schedules, and CSV audit logs live locally."
    ],
    stack: ["Python", "SMTP", "IMAP", "CSV", "Local Dashboard"],
    href: "https://github.com/GeoCeff/email-automation",
    liveHref: "",
    image: "/images/projects/auto-response-email.png",
    imageAlt: "Auto Response Email dashboard and CLI preview",
    imageNote: "",
    className: "portfolio"
  },
  {
    label: "PYTHON",
    title: "Python Automation Toolkit",
    status: "Standard-Library CLI Suite",
    summary:
      "Beginner-friendly automation toolkit for organizing files, generating Markdown reports, and creating ZIP backups.",
    detail:
      "A practical Python automation portfolio project with file organization, CSV reporting, folder backups, tests, GitHub Actions, and step-by-step learning notes. The implementation sticks to the standard library.",
    whatItDoes:
      "The toolkit sorts files into useful folders, reads sales CSV data to generate Markdown summaries, and creates timestamped ZIP backups.",
    whatIBuilt:
      "I built the reusable modules, argparse CLI, unittest coverage, sample data, lessons, and GitHub Actions validation.",
    whyItMatters:
      "It demonstrates clean beginner-friendly automation with tests and documentation, without unnecessary dependencies.",
    highlights: [
      "Standard-library implementation using argparse, unittest, csv, pathlib, and zipfile.",
      "Includes file organizer, CSV report generator, and folder backup commands.",
      "Ships with sample files, learning notes, tests, and CI."
    ],
    stack: ["Python", "argparse", "unittest", "GitHub Actions", "CLI"],
    href: "https://github.com/GeoCeff/python-automation-toolkit",
    liveHref: "",
    image: "/images/projects/python-automation.png",
    imageAlt: "Python Automation Toolkit terminal preview",
    imageNote: "",
    className: "portfolio"
  },
  {
    label: "CLI",
    title: "Terminal Journal",
    status: "Local Markdown Journal",
    summary:
      "Terminal-based journaling tool for writing, organizing, searching, exporting, and backing up local notes.",
    detail:
      "A minimal terminal journal for fast daily logging without opening a full notes app. It stores Markdown entries locally, supports titles, moods, tags, favorites, templates, filters, review tools, export formats, backup, restore, validation, Git sync, and single-file encryption.",
    whatItDoes:
      "Users create timestamped entries, search and filter notes, review streaks and calendars, export Markdown/JSON/HTML, extract todos, and back up or restore journal folders.",
    whatIBuilt:
      "I built the command set, local file workflow, metadata filters, export paths, backup/restore helpers, themes, and utility commands.",
    whyItMatters:
      "It shows product thinking in a small CLI: fast capture first, then review, export, backup, and privacy-oriented local storage.",
    highlights: [
      "Supports titles, moods, tags, favorites, templates, search, stats, streaks, and calendar review.",
      "Exports Markdown, JSON, or HTML and can back up, restore, archive, validate, and Git-sync entries.",
      "Keeps notes in a simple local folder so the data stays inspectable."
    ],
    stack: ["Python", "CLI", "Markdown", "Local Files", "Productivity"],
    href: "https://github.com/GeoCeff/terminal-journal",
    liveHref: "",
    image: "/images/projects/terminal-journal.png",
    imageAlt: "Terminal Journal sample CLI session showing list, search, and stats output",
    imageNote: "",
    className: "portfolio"
  },
  {
    label: "WEB",
    title: "Personal Portfolio Website",
    status: "Next.js Portfolio",
    summary:
      "Responsive portfolio with project screenshots, content data files, dedicated pages, animation, and GitHub Pages deployment.",
    detail:
      "This portfolio is a statically exported Next.js app with reusable content data, project screenshots, dedicated About/Projects/Skills/Contact routes, scroll reveal behavior, section tracking, and automated GitHub Pages deployment.",
    whatItDoes:
      "It presents my profile, education, skills, project case studies, resume, and contact routes in one responsive web presence.",
    whatIBuilt:
      "I built the Next.js structure, content model, project cards, route pages, responsive CSS, image handling, and portfolio data updates.",
    whyItMatters:
      "It acts as the public hub for the rest of the work and keeps project content easy to maintain.",
    highlights: [
      "Centralized profile and project data in app/siteData.ts and app/projectData.ts.",
      "Dedicated routes for About, Projects, Skills, and Contact.",
      "Uses local screenshots, static export, and a GitHub Actions workflow for GitHub Pages."
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS", "GitHub Pages"],
    href: "https://github.com/GeoCeff/portfolio-website-public",
    liveHref: "",
    image: "/images/projects/portfolio-website.png",
    imageAlt: "Personal portfolio website screenshot",
    imageNote: "",
    className: "portfolio"
  },
  {
    label: "GAME",
    title: "Bagyo Command",
    status: "DOST Game Dev / Disaster Simulation",
    summary:
      "Seeded disaster-response city-builder where players prepare a coastal barangay for floods, typhoons, tsunamis, and landslides.",
    detail:
      "A Godot 4.6 and C++ GDExtension city-builder simulation for disaster readiness. Players study a procedural coastal barangay map, place evacuation and mitigation infrastructure, then survive escalating disaster chains across flood, typhoon, tsunami, earthquake, and landslide scenarios.",
    whatItDoes:
      "Players make preparedness decisions on a generated coastal map and watch those decisions tested by escalating hazards.",
    whatIBuilt:
      "I worked on the systems framing for procedural maps, disaster scenarios, infrastructure placement, and simulation feedback loops.",
    whyItMatters:
      "It connects interactive systems work with disaster-readiness education.",
    highlights: [
      "Procedural coastal barangay map concept with seeded replayability.",
      "Multiple disaster types and mitigation infrastructure decisions.",
      "Godot and C++ GDExtension stack matching my strongest game-systems work."
    ],
    stack: ["Godot 4.6", "C++", "GDExtension", "Simulation", "Procedural Maps"],
    href: "https://github.com/GeoCeff/dost-nxt-lvl-bagyo-command",
    liveHref: "",
    image: "/images/projects/bagyo-command.png",
    imageAlt: "Bagyo Command disaster-response city-builder preview",
    imageNote: "",
    className: "circuit"
  },
  {
    label: "MOBILE",
    title: "Flownance / FinanceFlow Mobile",
    status: "Offline-First Finance App",
    summary:
      "Expo mobile finance tracker with local SQLite storage, transaction flows, budgets, analytics, and optional app lock.",
    detail:
      "A mobile-first personal finance tracker designed to work without a backend or required account. It includes local SQLite persistence, income/expense/transfer handling, account and category management, monthly budget progress, dashboard summaries, spending analytics, demo data, backup export, and PIN or biometric locking through Expo security APIs.",
    whatItDoes:
      "Users track balances, income, expenses, transfers, budgets, categories, and spending analytics while keeping data on-device.",
    whatIBuilt:
      "I built the local-first app flow, storage model, budget summaries, transaction handling, demo data, backup path, and app-lock behavior.",
    whyItMatters:
      "It shows mobile product work around privacy, local persistence, and daily-use finance workflows.",
    highlights: [
      "Offline-first SQLite persistence with no required backend account.",
      "Income, expense, transfer, account, category, monthly budget, and analytics flows.",
      "Optional PIN or biometric locking through Expo security APIs."
    ],
    stack: ["Expo", "React Native", "TypeScript", "SQLite", "SecureStore"],
    href: "https://github.com/GeoCeff/flownance-finance-tracker",
    liveHref: "",
    image: "/images/projects/financeflow.png",
    imageAlt: "FinanceFlow offline finance tracker mobile preview",
    imageNote: "",
    className: "portfolio"
  },
  {
    label: "MAPS",
    title: "Geohash Studio",
    status: "Desktop Map Utility",
    summary:
      "Desktop-style geohash encoder, decoder, and map plotter with validation, recent history, and Leaflet map selection.",
    detail:
      "A desktop-style JavaScript geospatial utility for encoding coordinates, decoding geohashes into coordinate ranges, estimating cell size, selecting points from a street map, and plotting multiple geohashes. It includes a tested geohash algorithm, Leaflet map integration, local world data, and a quiet desktop launcher.",
    whatItDoes:
      "Users encode coordinates, decode geohashes, inspect bounds and cell sizes, pick map points, and plot multiple cells.",
    whatIBuilt:
      "I built the geohash logic, validation states, map integration, recent history, and desktop-like UI flow.",
    whyItMatters:
      "It turns a compact spatial encoding algorithm into a practical visual tool.",
    highlights: [
      "Encode/decode flow with coordinate ranges and cell-size estimates.",
      "Leaflet map selection and multi-geohash plotting.",
      "Local world data and a desktop launcher workflow."
    ],
    stack: ["JavaScript", "Leaflet", "OpenStreetMap", "Node.js", "GeoJSON"],
    href: "https://github.com/GeoCeff/geohash-studio",
    liveHref: "",
    image: "/images/projects/geohash-studio.png",
    imageAlt: "Geohash Studio coordinate encoder and decoder screenshot",
    imageNote: "",
    className: "circuit"
  },
  {
    label: "MEDIA",
    title: "Local Video Ad Pipeline",
    status: "Gradio / FFmpeg / Real-ESRGAN",
    summary:
      "Local tool for trimming, upscaling, stitching, and exporting short video clips.",
    detail:
      "A local Gradio app for assembling short videos from one or more clips. FFmpeg handles trimming, reframing, color grading, stitching, and export presets; portable Real-ESRGAN NCNN-Vulkan upscales frames. Project settings and previews stay local.",
    whatItDoes:
      "Users inspect frame thumbnails, trim and crop clips, upscale them, compare previews, and export aspect-ratio presets.",
    whatIBuilt:
      "I built the Gradio project flow, FFmpeg render steps, Real-ESRGAN integration, progress controls, and local preview and export tools.",
    whyItMatters:
      "It shows a practical local video workflow with visible processing steps and no platform credentials required.",
    highlights: [
      "A generated four-frame demo completed GPU upscale, FFmpeg rendering, color grade, and export locally.",
      "Frame thumbnails, before/after preview, saved project settings, and aspect-ratio presets.",
      "Local-only processing; no social-platform credentials or automatic posting."
    ],
    stack: ["Python", "Gradio", "FFmpeg", "Real-ESRGAN", "Video Pipeline"],
    href: "",
    liveHref: "",
    image: "/images/projects/videoad-pipeline.png",
    imageAlt: "Video Ad Pipeline Gradio app completing an upscale of a generated test clip; local paths redacted",
    imageNote: "",
    className: "portfolio video-demo"
  }
];

export const projectNotes = [
  {
    title: "Game Systems Work",
    topic: "Godot / Native Extensions",
    copy:
      "Perk the Star is the strongest current proof point: Godot gameplay, C++ GDExtension helpers, replayable modes, tech-tree progression, scoring rules, and saved records working together."
  },
  {
    title: "Local-First Data Tools",
    topic: "Data Product Design",
    copy:
      "The stock dashboard, demographic mapper, Geohash Studio, FinanceFlow, and Projectile Motion Lab all favor inspectable local workflows where users can validate inputs and export results."
  },
  {
    title: "Conservative Automation",
    topic: "Trust Boundaries",
    copy:
      "The email automation and browser extension projects are intentionally cautious: dry-run defaults, reversible DOM changes, local data handling, explicit consent, and tests around risky behavior."
  }
];

export const openSourceHighlights = [
  {
    title: "Perk the Star",
    type: "Godot / C++",
    copy:
      "A public game project with native extension systems, multiple modes, tech-tree progression, wave data, docs, and asset-credit hygiene.",
    href: "https://github.com/GeoCeff/perk-the-star"
  },
  {
    title: "Stock Backtester and Simulator",
    type: "Python / Streamlit",
    copy:
      "A market analytics workstation with strategy backtests, Quant Lab safety checks, paper trading, risk metrics, tests, and clear education-only framing.",
    href: "https://github.com/GeoCeff/stock-tester-and-simulator"
  },
  {
    title: "Philippine Demographic Mapper",
    type: "JavaScript / Mapping",
    copy:
      "A local-first choropleth studio with PSGC joins, match review, generated boundary workflows, and PNG/SVG export.",
    href: "https://github.com/GeoCeff/philippine-demographic-mapper"
  },
  {
    title: "ChatGPT Thread Optimizer",
    type: "Manifest V3",
    copy:
      "A privacy-conscious browser extension with reversible DOM changes, settings, docs, and local long-thread performance tests.",
    href: "https://github.com/GeoCeff/chatgpt-thread-optimizer"
  },
  {
    title: "Auto Response Email",
    type: "Python / Automation",
    copy:
      "A consent-first outreach tool with dry-run defaults, confirmation gates, suppression lists, local review flows, schedules, and CSV audit logs.",
    href: "https://github.com/GeoCeff/email-automation"
  },
  {
    title: "Python Automation Toolkit",
    type: "Python / CLI",
    copy:
      "A standard-library automation repo with a CLI, unit tests, GitHub Actions, learning notes, and practical file/report/backup examples.",
    href: "https://github.com/GeoCeff/python-automation-toolkit"
  }
];
