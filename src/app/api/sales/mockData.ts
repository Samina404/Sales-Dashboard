const SALES_LIST = Array.from({ length: 200 }).map((_, i) => ({
    id: `sale-${i}`,
    date: new Date(Date.now() - i * 86400000).toISOString().split("T")[0],
    price: Math.floor(Math.random() * 1000) + 50,
    customerName: `Customer ${i}`,
    customerEmail: `customer${i}@example.com`,
    customerPhone: `+1 (555) 000-${String(i).padStart(4, '0')}`
}));

export const MOCK_SALES_DATA = {
    sales: SALES_LIST.slice(0, 50),
    chartData: Array.from({ length: 30 }).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 86400000).toISOString().split("T")[0],
        totalSale: Math.floor(Math.random() * 5000) + 1000,
    })),
    before: null,
    after: "token-after",
};

export { SALES_LIST };
