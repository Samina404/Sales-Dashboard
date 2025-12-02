"use client";

export default function Filters({ filters, setFilters }: any) {
  function update(key: string, value: string) {
    const newFilters = { ...filters };
    if (value) {
      newFilters[key] = value;
    } else {
      delete newFilters[key];
    }
    // Reset pagination when filters change
    delete newFilters.before;
    delete newFilters.after;
    setFilters(newFilters);
  }

  return (
    <div className="card p-4 md:p-6 mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filter Sales
        </h2>
        <button 
          onClick={() => setFilters({})} 
          className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1"
        >
          Clear Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* Start Date */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400 ml-1">Start Date</label>
          <div className="relative">
            <input
              type="date"
              className="input text-sm h-11"
              value={filters.startDate || ""}
              onChange={(e) => update("startDate", e.target.value)}
            />
          </div>
        </div>

        {/* End Date */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400 ml-1">End Date</label>
          <div className="relative">
            <input
              type="date"
              className="input text-sm h-11"
              value={filters.endDate || ""}
              onChange={(e) => update("endDate", e.target.value)}
            />
          </div>
        </div>

        {/* Min Price */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400 ml-1">Min Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
            <input
              type="number"
              placeholder="0.00"
              className="input text-sm h-11 pl-7"
              value={filters.priceMin || ""}
              onChange={(e) => update("priceMin", e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400 ml-1">Email</label>
          <div className="relative">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input
              type="text"
              placeholder="Search Email..."
              className="input text-sm h-11 pl-9"
              value={filters.email || ""}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400 ml-1">Phone</label>
          <div className="relative">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search Phone..."
              className="input text-sm h-11 pl-9"
              value={filters.phone || ""}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
