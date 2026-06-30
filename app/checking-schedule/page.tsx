import { checkingSchedule } from "@/lib/content";

export default function CheckingSchedulePage() {
  return (
    <section className="container page-section">
      <span className="eyebrow">Checking schedule</span>
      <h1>Daily, weekly, monthly, and quarterly monitoring schedule</h1>
      <p>
        Use this page to know when monitoring items should be updated, reviewed, checked, and followed up.
      </p>
      <div className="schedule-list">
        {checkingSchedule.map((group) => (
          <article className="schedule-item" key={group.period}>
            <h2>{group.period}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
