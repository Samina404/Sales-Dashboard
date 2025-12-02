"use client";

import { useState } from "react";
import { useSales } from "./api/useSales";
import Filters from "./components/Filters";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";
import Pagination from "./components/Pagination";

export default function Page() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ field: "date", direction: "asc" });

  const { data, isLoading, error, isFetching } = useSales({ ...filters, sort });

  if (isLoading && !data) return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="animate-pulse">Loading Dashboard...</div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-400">
      Error loading sales data
    </div>
  );

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">Sales Dashboard</h1>

      <Filters filters={filters} setFilters={setFilters} />

      <div className={`transition-opacity duration-200 ${isFetching ? 'opacity-60' : 'opacity-100'}`}>
        <SalesChart data={data?.chartData || []} />

        <SalesTable sales={data?.sales || []} sort={sort} setSort={setSort} />

        <Pagination
          before={data?.before}
          after={data?.after}
          onPrev={() => {
            const { after, ...rest } = filters as any;
            setFilters({ ...rest, before: data?.before });
          }}
          onNext={() => {
            const { before, ...rest } = filters as any;
            setFilters({ ...rest, after: data?.after });
          }}
        />
      </div>
    </main>
  );
}
