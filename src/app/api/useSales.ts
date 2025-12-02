"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query"; // ✅ must be this

export function useSales(filters: any) {
  return useQuery({
    queryKey: ["sales", filters],
    queryFn: async () => {
      const params = new URLSearchParams();



      // Process filters
      Object.keys(filters).forEach((key) => {
        if (key === "sort") {
          if (filters.sort?.field) {
            // Assuming API expects sortBy and sortOrder, or similar. 
            // Since we don't know exact API, we'll send what's common or just pass it if API expects nested (unlikely for GET).
            // Let's try flattening: sort_by and sort_order
            params.append("sortBy", filters.sort.field);
            params.append("sortOrder", filters.sort.direction);
          }
        } else if (filters[key]) {
          params.append(key, filters[key]);
        }
      });

      const res = await fetch(`/api/sales?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch sales");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });
}
