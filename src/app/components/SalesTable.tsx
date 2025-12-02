"use client";
import SortIcon from "./SortIcon";

export default function SalesTable({ sales, sort, setSort }: any) {

  function toggleSort(field: string) {
    setSort({
      field,
      direction: sort.direction === "asc" ? "desc" : "asc",
    });
  }

  return (
    <div className="mt-6 card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-400">
          <thead className="bg-[#27272a] text-white font-semibold border-b border-[#27272a]">
            <tr>
              <th className="p-3 md:p-4 cursor-pointer hover:bg-white/5 transition-colors" onClick={() => toggleSort("date")}>
                <div className="flex items-center gap-1">
                  Date <SortIcon field="date" sort={sort}/>
                </div>
              </th>

              <th className="p-3 md:p-4 cursor-pointer hover:bg-white/5 transition-colors" onClick={() => toggleSort("price")}>
                <div className="flex items-center gap-1">
                  Price <SortIcon field="price" sort={sort}/>
                </div>
              </th>

              <th className="p-3 md:p-4">Phone</th>
              <th className="p-3 md:p-4">Email</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#27272a]">
            {sales.map((s: any, i: number) => (
              <tr key={s._id || s.id || i} className="hover:bg-white/5 transition-colors">
                <td className="p-3 md:p-4 font-medium text-white">{new Date(s.date).toLocaleDateString()}</td>
                <td className="p-3 md:p-4 text-primary font-medium">${s.price.toLocaleString()}</td>
                <td className="p-3 md:p-4 text-slate-500">{s.customerPhone || "N/A"}</td>
                <td className="p-3 md:p-4 text-slate-500">{s.customerEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
