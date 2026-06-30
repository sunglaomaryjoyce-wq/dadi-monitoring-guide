import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{site.name}</strong>
          <p>Internal Use Only | Dadi Coach Corporation</p>
        </div>
        <p>For monitoring standards, checking schedules, and staff reference.</p>
      </div>
    </footer>
  );
}
