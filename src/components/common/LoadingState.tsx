export function LoadingState({ label = "Memuat data..." }: { label?: string }) {
  return <div className="space-y-3 p-5" aria-label={label}>
    <span className="block h-4 w-32 animate-pulse rounded-lg bg-white/[0.06]"/>
    <span className="block h-20 w-full animate-pulse rounded-2xl bg-white/[0.04]"/>
    <span className="block h-20 w-full animate-pulse rounded-2xl bg-white/[0.04]"/>
  </div>;
}
