import SectionCard from "@/components/SectionCard";
import { monitoringSections } from "@/lib/content";

export default function MonitoringToolsPage() {
  return (
    <section className="container page-section">
      <span className="eyebrow">Monitoring tools</span>
      <h1>Employee monitoring tools guide</h1>
      <p>
        Use these pages as the standard reference for checking employee monitoring documents, update schedules,
        formatting requirements, and common mistakes.
      </p>
      <div className="card-grid">
        {monitoringSections.map((section) => (
          <SectionCard
            key={section.slug}
            title={section.title}
            summary={section.summary}
            href={`/monitoring-tools/${section.slug}`}
            meta={section.owner}
          />
        ))}
      </div>
    </section>
  );
}
