import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronUp, ChevronDown, Menu, X, BookOpen } from "lucide-react";
import { TOC } from "../data/toc";

export default function EbookViewer({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [navOpen, setNavOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);

      const pages = Array.from(el.querySelectorAll<HTMLElement>("[data-page]"));
      let closest = 1;
      let closestDist = Infinity;
      for (const p of pages) {
        const dist = Math.abs(p.getBoundingClientRect().top - el.getBoundingClientRect().top);
        if (dist < closestDist) {
          closestDist = dist;
          closest = Number(p.dataset.page);
        }
      }
      setCurrentPage(closest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (pageNumber: number) => {
    const el = containerRef.current?.querySelector<HTMLElement>(`[data-page="${pageNumber}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavOpen(false);
  };

  const goDelta = (delta: number) => {
    goTo(Math.min(28, Math.max(1, currentPage + delta)));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#060716]">
      {/* Progress bar */}
      <div className="absolute left-0 top-0 z-30 h-1 w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-violet-glow via-magenta-glow to-cyan-glow transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top bar */}
      <div className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 text-white">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-glow to-cyan-glow">
            <BookOpen className="h-3.5 w-3.5 text-white" />
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="font-display text-[11px] font-bold">The $1K/Month Pinterest Affiliate System</p>
            <p className="text-[9px] text-white/50">by GrowthVault</p>
          </div>
        </div>
        <button
          onClick={() => setNavOpen((v) => !v)}
          className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur hover:bg-white/20"
        >
          {navOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
          Contents
        </button>
      </div>

      {/* Side nav drawer */}
      <div
        className={`absolute right-0 top-0 z-40 h-full w-[280px] transform bg-navy-950/95 backdrop-blur-xl transition-transform duration-300 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-5 pt-16">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Table of Contents</p>
          <button
            onClick={() => goTo(1)}
            className="mb-1 rounded-lg px-3 py-2 text-left text-[11px] font-semibold text-white/70 hover:bg-white/5"
          >
            Cover
          </button>
          <button
            onClick={() => goTo(2)}
            className="mb-1 rounded-lg px-3 py-2 text-left text-[11px] font-semibold text-white/70 hover:bg-white/5"
          >
            Table of Contents
          </button>
          <div className="mt-1 flex-1 space-y-0.5 overflow-y-auto pr-1">
            {TOC.map((t) => (
              <button
                key={t.chapter}
                onClick={() => goTo(t.firstPage)}
                className="flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left text-white/80 hover:bg-white/5"
              >
                <span className="mt-0.5 shrink-0 rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-cyan-glow">
                  {String(t.chapter).padStart(2, "0")}
                </span>
                <span className="text-[11px] leading-snug">{t.title}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => goTo(28)}
            className="mt-2 rounded-lg px-3 py-2 text-left text-[11px] font-semibold text-white/70 hover:bg-white/5"
          >
            Final Word
          </button>
        </div>
      </div>

      {/* Scroll container */}
      <div ref={containerRef} className="snap-container h-full w-full overflow-y-scroll px-3 py-16 sm:px-6">
        <div className="mx-auto flex max-w-[900px] flex-col gap-6">{children}</div>
      </div>

      {/* Prev/next controls */}
      <div className="absolute bottom-5 right-4 z-20 flex flex-col gap-2 sm:right-6">
        <button
          onClick={() => goDelta(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
          aria-label="Previous page"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
        <div className="flex h-9 items-center justify-center rounded-full bg-white/10 px-2 text-[10px] font-bold text-white backdrop-blur">
          {currentPage}/28
        </div>
        <button
          onClick={() => goDelta(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
          aria-label="Next page"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
