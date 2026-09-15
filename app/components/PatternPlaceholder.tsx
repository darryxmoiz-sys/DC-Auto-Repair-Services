const patterns = {
  grid: "grid-fill",
  diag: "diag-fill",
  dot: "dot-fill",
} as const;

export default function PatternPlaceholder({
  pattern = "grid",
  label,
  className = "",
}: {
  pattern?: keyof typeof patterns;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-border bg-panel ${patterns[pattern]} ${className}`}
    >
      <span className="absolute bottom-3 left-3 rounded-sm bg-surface/80 px-2.5 py-1 text-xs text-text-faint">
        {label}
      </span>
    </div>
  );
}
