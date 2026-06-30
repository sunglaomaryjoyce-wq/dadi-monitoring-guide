import { faqItems } from "@/lib/content";

export default function FAQPage() {
  return (
    <section className="container page-section">
      <span className="eyebrow">FAQ</span>
      <h1>Monitoring guide frequently asked questions</h1>
      <div className="schedule-list">
        {faqItems.map((item) => (
          <article className="faq-item" key={item.question}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
