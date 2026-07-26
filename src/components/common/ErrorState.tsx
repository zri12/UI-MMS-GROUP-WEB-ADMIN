import { AlertTriangle } from "lucide-react";

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return <div className="m-4 rounded-2xl border border-red-500/15 bg-red-500/[0.07] p-4 text-[13px] text-red-300 shadow-[0_8px_24px_rgba(0,0,0,.16)]">
    <div className="flex items-center gap-2 font-semibold"><AlertTriangle size={17}/>{message}</div>
    {onRetry&&<button onClick={onRetry} className="mt-3 min-h-10 rounded-xl bg-red-500/10 px-3 font-semibold text-red-200 hover:bg-red-500/15">Coba lagi</button>}
  </div>;
}
