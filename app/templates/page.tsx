import { templateItems } from "@/lib/content";

export default function TemplatesPage() {
  return (
    <section className="container page-section">
      <span className="eyebrow">Templates</span>
      <h1>Monitoring templates and reference files</h1>
      <p>
        Use these template categories as the standard monitoring references. Add downloadable company template files later
        when final versions are approved.
      </p>
      <div className="template-grid">
        {templateItems.map((item) => (
          <article className="template-item" key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
