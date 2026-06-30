type MetaGridProps = {
  items: { label: string; value: string }[];
};

export default function MetaGrid({ items }: MetaGridProps) {
  return (
    <div className="meta-grid">
      {items.map((item) => (
        <div key={item.label} className="meta-item">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}
