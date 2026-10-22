import { Phone } from "lucide-react";
import { business } from "@/data/business";

export function StickyCallButton() {
  return (
    <>
      <a
        href={`tel:${business.phoneRaw}`}
        className="sm:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-yellow-400 text-black font-bold text-lg shadow-2xl shadow-yellow-500/30 active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" strokeWidth={2.5} />
        Call Now — {business.phoneDisplay}
      </a>

      <a
        href={`tel:${business.phoneRaw}`}
        className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-6 py-4 rounded-full bg-yellow-400 text-black font-bold shadow-2xl shadow-yellow-500/30 hover:bg-yellow-300 hover:scale-105 transition-all group"
      >
        <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20 group-hover:opacity-0"></span>
        <Phone className="w-5 h-5 relative" strokeWidth={2.5} />
        <span className="relative">{business.phoneDisplay}</span>
      </a>
    </>
  );
}
