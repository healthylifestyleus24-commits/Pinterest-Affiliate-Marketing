import { PageShell, PageBackdrop, Eyebrow } from "../components/ui";
import { TOC } from "../data/toc";
import { DashboardMockup } from "../components/illustrations";

function TocRow({ entry }: { entry: (typeof TOC)[number] }) {
  return (
    <div className="flex items-center gap-3 border-b border-black/5 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy-900 to-violet-glow font-display text-[11px] font-extrabold text-white">
        {String(entry.chapter).padStart(2, "0")}
      </div>
      <p className="flex-1 text-[11.5px] font-semibold leading-snug text-navy-900">{entry.title}</p>
      <span className="font-display text-[11px] font-bold text-ink-500">{entry.page}</span>
    </div>
  );
}

export function Page02() {
  return (
    <PageShell pageNumber={2}>
      <PageBackdrop />
      <Eyebrow>What&apos;s Inside</Eyebrow>
      <h1 className="mt-3 font-display text-[26px] font-bold leading-tight text-navy-900 sm:text-[30px]">
        Table of Contents
      </h1>
      <p className="mt-3 max-w-md text-[11.5px] leading-relaxed text-ink-700">
        A complete, step-by-step system for building a Pinterest-powered affiliate business — from
        strategy and setup to publishing, conversion, and scale.
      </p>

      <div className="mt-6 flex-1">
        {TOC.slice(0, 5).map((t) => (
          <TocRow key={t.chapter} entry={t} />
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-navy-950 p-4 text-white">
        <p className="font-display text-[11px] font-bold">Continued on the next page →</p>
        <p className="mt-1 text-[10px] text-white/60">Chapters 6–10 plus your 90-day growth plan.</p>
      </div>
    </PageShell>
  );
}

export function Page03() {
  return (
    <PageShell pageNumber={3}>
      <PageBackdrop />
      <Eyebrow>Continued</Eyebrow>
      <h1 className="mt-3 font-display text-[26px] font-bold leading-tight text-navy-900 sm:text-[30px]">
        Table of Contents
      </h1>

      <div className="mt-6 flex-1">
        {TOC.slice(5, 10).map((t) => (
          <TocRow key={t.chapter} entry={t} />
        ))}
      </div>

      <div className="mt-4">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-ink-500">
          What Success Looks Like When You Execute the System
        </p>
        <DashboardMockup />
      </div>
    </PageShell>
  );
}
