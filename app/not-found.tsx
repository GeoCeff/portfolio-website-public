import { sitePath } from "./paths";

export default function NotFound() {
  return (
    <main className="site-shell recovery-page">
      <div className="texture" aria-hidden="true" />
      <section className="recovery-card" aria-labelledby="not-found-title">
        <p className="hello"><span /> 404 / Page not found</p>
        <h1 id="not-found-title">This page drifted off course.</h1>
        <p>The address may have changed, but the rest of the portfolio is still within reach.</p>
        <nav className="recovery-actions" aria-label="Page recovery">
          <a className="button primary" href={sitePath("/#home")}>Home</a>
          <a className="button secondary" href={sitePath("/projects")}>Projects</a>
          <a className="button secondary" href={sitePath("/contact")}>Contact</a>
        </nav>
      </section>
    </main>
  );
}
