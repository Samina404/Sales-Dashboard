import { NextResponse } from "next/server";
import { getAuthToken } from "../client";
import { MOCK_SALES_DATA, SALES_LIST } from "./mockData";

function filterMockData(searchParams: URLSearchParams) {
  let filtered = [...SALES_LIST];

  // 1. Filter by Date Range
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  if (startDate) {
    filtered = filtered.filter((s) => s.date >= startDate);
  }
  if (endDate) {
    filtered = filtered.filter((s) => s.date <= endDate);
  }

  // 2. Filter by Min Price
  const priceMin = searchParams.get("priceMin");
  if (priceMin) {
    filtered = filtered.filter((s) => s.price >= Number(priceMin));
  }

  // 3. Filter by Email
  const email = searchParams.get("email");
  if (email) {
    filtered = filtered.filter((s) =>
      s.customerEmail.toLowerCase().includes(email.toLowerCase())
    );
  }

  // 4. Filter by Phone
  const phone = searchParams.get("phone");
  if (phone) {
    filtered = filtered.filter((s) =>
      (s as any).customerPhone?.includes(phone)
    );
  }

  // 5. Sorting
  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("sortOrder") || "asc";

  if (sortBy) {
    filtered.sort((a: any, b: any) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }

  // 6. Pagination (Mock)
  // We'll just take the first 50 for now to simulate a page
  const limit = Number(searchParams.get("limit")) || 50;
  const paginated = filtered.slice(0, limit);

  return {
    ...MOCK_SALES_DATA,
    sales: paginated,
  };
}

// Server-side proxy for sales
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  try {
    // Try to get token
    let token;
    try {
      token = await getAuthToken();
    } catch (e) {
      console.warn("Failed to get auth token, using mock data", e);
      return NextResponse.json(filterMockData(searchParams));
    }

    const apiUrl = `https://autobizz-425913.uc.r.appspot.com/sales?${searchParams.toString()}`;

    const res = await fetch(apiUrl, {
      headers: { "X-AUTOBIZZ-TOKEN": token },
    });

    if (!res.ok) {
      console.warn("API returned error, using mock data", res.status);
      return NextResponse.json(filterMockData(searchParams));
    }

    const data = await res.json();

    // Transform API response to match our internal shape
    return NextResponse.json({
      sales: data.results?.Sales || [],
      chartData: data.results?.TotalSales?.map((item: any) => ({
        date: item.day,
        totalSale: item.totalSale,
      })) || [],
      before: data.pagination?.before,
      after: data.pagination?.after,
    });
  } catch (err: any) {
    console.error("Fetch failed, using mock data", err);
    return NextResponse.json(filterMockData(searchParams));
  }
}
