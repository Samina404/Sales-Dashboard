export default function SortIcon({ field, sort }: { field: string; sort: { field: string; direction: string } }) {
  if (sort.field !== field) {
    return <span className="text-slate-600 ml-1">↕</span>;
  }

  return (
    <span className="ml-1 text-primary">
      {sort.direction === "asc" ? "↑" : "↓"}
    </span>
  );
}
