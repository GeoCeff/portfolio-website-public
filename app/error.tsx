"use client";

import { sitePath } from "./paths";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="site-shell recovery-page">
      <div className="texture" aria-hidden="true" />
      <section className="recovery-card" aria-labelledby="error-title">
        <p className="hello"><span /> Something went wrong</p>
        <h1 id="error-title">The page hit a temporary snag.</h1>
        <p>Try loading this section again, or take a working route back through the portfolio.</p>
        <div className="recovery-actions">
          <button className="button primary" type="button" onClick={() => reset()}>Try again</button>
          <a className="button secondary" href={sitePath("/#home")}>Home</a>
          <a className="button secondary" href={sitePath("/projects")}>Projects</a>
          <a className="button secondary" href={sitePath("/contact")}>Contact</a>
        </div>
      </section>
    </main>
  );
}
