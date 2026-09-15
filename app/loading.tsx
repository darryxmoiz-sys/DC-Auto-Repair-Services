export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="space-y-4">
          <div className="shimmer h-4 w-32 rounded-sm" />
          <div className="shimmer h-14 w-full rounded-sm" />
          <div className="shimmer h-14 w-5/6 rounded-sm" />
          <div className="shimmer h-4 w-full max-w-md rounded-sm" />
          <div className="shimmer h-4 w-2/3 max-w-md rounded-sm" />
          <div className="shimmer mt-4 h-11 w-40 rounded-sm" />
        </div>
        <div className="shimmer aspect-[4/5] w-full rounded-sm" />
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3 rounded-sm border border-border p-5">
            <div className="shimmer h-9 w-9 rounded-sm" />
            <div className="shimmer h-4 w-2/3 rounded-sm" />
            <div className="shimmer h-3 w-full rounded-sm" />
            <div className="shimmer h-3 w-4/5 rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
