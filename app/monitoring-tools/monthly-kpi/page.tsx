import Link from "next/link";
import { notFound } from "next/navigation";
import ListBlock from "@/components/ListBlock";
import MetaGrid from "@/components/MetaGrid";
import { getMonitoringSection, monitoringSections } from "@/lib/content";

const slug = "monthly-kpi";

export default function MonitoringDetailPage() {
  const section = getMonitoringSection(slug);

  if (!section) {
    notFound();
  }

  return (
    <div className="container detail-shell">
      <aside className="side-panel">
        <strong>Monitoring Guides</strong>
        {monitoringSections.map((item) => (
          <Link key={item.slug} href={`/monitoring-tools/${item.slug}`}>
            {item.title.replace(" Monitoring Guide", "").replace(" Checking Guide", "")}
          </Link>
        ))}
      </aside>
      <article className="content-panel">
        <span className="eyebrow">Monitoring standard</span>
        <h1>{section.title}</h1>
        <p>{section.summary}</p>
        <MetaGrid
          items={[
            { label: "Responsible parties", value: section.owner },
            { label: "Checking frequency", value: section.frequency }
          ]}
        />
        <ListBlock title="Checking standards" items={section.standards} />
        <ListBlock title="Monitoring checklist" items={section.checklist} />
        <ListBlock title="Common mistakes to avoid" items={section.commonMistakes} />
        <div className="example-box">
          <strong>Example:</strong>
          <p>{section.example}</p>
        </div>
        <div className="hero-actions">
          <Link className="button secondary" href="/monitoring-tools">Back to all monitoring tools</Link>
        </div>
      </article>
    </div>
  );
}
