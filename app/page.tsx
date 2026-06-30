import Link from "next/link";
import SectionCard from "@/components/SectionCard";
import { monitoringSections, quickStats, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Internal monitoring guide website</span>
            <h1>{site.name}</h1>
            <p>
              A centralized internal guide for employee monitoring tools and checking standards. Use this website
              to check what must be updated, when to check it, who is responsible, and what standard should be followed.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/monitoring-tools">Open Monitoring Tools</Link>
              <Link className="button secondary" href="/checking-schedule">View Checking Schedule</Link>
            </div>
          </div>
          <aside className="scope-card">
            <h2>Monitoring Guide Coverage</h2>
            <p>
              This website serves as an internal monitoring reference portal for Dadi staff. It provides clear
              guidelines, checking standards, schedules, and examples for employee monitoring tools.
            </p>
            <ul>
              <li>Job Responsibility / JR checking guide</li>
              <li>Weekly To-Do List monitoring standards</li>
              <li>Calendar random checking guide</li>
              <li>Work Plan and OGSA checking standards</li>
              <li>Monthly KPI checking format and examples</li>
              <li>Monthly Work Reflection checking guide</li>
              <li>Performance Evaluation monitoring reminders</li>
              <li>Goal Link update checking guide</li>
            </ul>
          </aside>
        </div>
      </section>

      <div className="container stat-grid">
        {quickStats.map((item) => (
          <div className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.note}</p>
          </div>
        ))}
      </div>

      <section className="container page-section">
        <span className="eyebrow">Main monitoring guides</span>
        <h1>Employee monitoring tools</h1>
        <div className="card-grid">
          {monitoringSections.map((section) => (
            <SectionCard
              key={section.slug}
              title={section.title}
              summary={section.summary}
              href={`/monitoring-tools/${section.slug}`}
              meta={section.frequency}
            />
          ))}
        </div>
      </section>
    </>
  );
}
