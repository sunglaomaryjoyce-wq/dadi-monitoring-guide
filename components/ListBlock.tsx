type ListBlockProps = {
  title: string;
  items: string[];
};

export default function ListBlock({ title, items }: ListBlockProps) {
  return (
    <section className="list-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
