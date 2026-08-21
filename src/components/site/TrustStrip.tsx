const industries = [
  "Financial Services",
  "Government & Public Sector",
  "Logistics & Supply Chain",
  "Healthcare",
  "Insurance",
  "Energy & Utilities",
  "Telecommunications",
  "Retail",
];

export function TrustStrip() {
  const items = [...industries, ...industries];
  return (
    <div className="border-y border-line-dark bg-ink-raised overflow-hidden py-5">
      <div className="mx-auto max-w-6xl px-6 mb-3">
        <p className="mono-label text-[11px] text-slate-dark">
          Built for regulated, data-heavy industries
        </p>
      </div>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-sm text-slate-dark whitespace-nowrap flex items-center gap-6"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-signal/60" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
