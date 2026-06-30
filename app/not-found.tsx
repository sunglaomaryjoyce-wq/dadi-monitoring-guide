import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container page-section">
      <span className="eyebrow">Page not found</span>
      <h1>Guide page unavailable</h1>
      <p>The page may have been removed or renamed. Return to the monitoring guide homepage.</p>
      <Link className="button primary" href="/">Go home</Link>
    </section>
  );
}
