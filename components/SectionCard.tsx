import Link from "next/link";

type SectionCardProps = {
  title: string;
  summary: string;
  href: string;
  meta?: string;
};

export default function SectionCard({ title, summary, href, meta }: SectionCardProps) {
  return (
    <Link className="section-card" href={href}>
      {meta ? <span className="card-meta">{meta}</span> : null}
      <h3>{title}</h3>
      <p>{summary}</p>
      <span className="card-link">Open guide</span>
    </Link>
  );
}
