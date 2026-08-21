export function SolvixLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M16 2.75 27.5 9.4v13.2L16 29.25 4.5 22.6V9.4L16 2.75Z"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-signal"
        />
        <path
          d="M9.1 10.2h9.2c2.7 0 4.6 1.35 4.6 3.35 0 1.65-1.2 2.7-3.45 3.15l-5.8 1.15c-1.3.25-1.9.7-1.9 1.35 0 .8.85 1.3 2.25 1.3h8.8"
          stroke="currentColor"
          strokeWidth="2.05"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-paper"
        />
        <circle cx="23.2" cy="8.8" r="1.7" className="fill-verified" />
      </svg>

      {!compact && (
        <div className="leading-none">
          <div className="font-display text-[17px] font-semibold tracking-[-0.025em]">
            SOLVIX <span className="text-signal">LABS</span>
          </div>
          <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-slate">
            AI &amp; Data Engineering
          </div>
        </div>
      )}
    </div>
  );
}
