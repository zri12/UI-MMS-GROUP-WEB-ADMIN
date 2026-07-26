import { Inbox } from "lucide-react";

export function EmptyState({ title = "Belum ada data", description = "Belum ada data untuk ditampilkan." }: { title?: string; description?: string }) {
  return <div className="flex flex-col items-center px-6 py-12 text-center">
    <span className="grid size-12 place-items-center rounded-2xl bg-white/[0.035] text-[#747E8B]"><Inbox size={22}/></span>
    <p className="mt-4 text-[14px] font-semibold text-[#F3F5F7]">{title}</p>
    <p className="mt-1 max-w-sm text-[12px] leading-relaxed text-[#747E8B]">{description}</p>
  </div>;
}
