import type { ReactNode } from "react";
import { CheckCircle2, Sparkles, Lightbulb, AlertTriangle, Quote } from "lucide-react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* PAGE SHELL                                                          */
/* ------------------------------------------------------------------ */

export function PageShell({
  pageNumber,
  dark = false,
  noPad = false,
  className,
  children,
}: {
  pageNumber?: number;
  dark?: boolean;
  noPad?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={pageNumber ? `page-${pageNumber}` : undefined}
      data-page={pageNumber}
      className={cn(
        "page-snap relative mx-auto flex w-full max-w-[900px] flex-col overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]",
        "aspect-[4/5] rounded-[8px] sm:rounded-[14px]",
        dark ? "bg-navy-950 text-white" : "bg-offwhite text-ink-900",
        className
      )}
    >
      <div className={cn("relative flex h-full w-full flex-col", !noPad && "px-8 py-9 sm:px-14 sm:py-12")}>
        {children}
      </div>
      {pageNumber ? (
        <div
          className={cn(
            "pointer-events-none absolute bottom-4 left-0 flex w-full items-center justify-between px-8 text-[10px] tracking-[0.25em] uppercase sm:px-14",
            dark ? "text-white/40" : "text-ink-500/70"
          )}
        >
          <span className="font-display font-semibold">GrowthVault</span>
          <span>{String(pageNumber).padStart(2, "0")} / 28</span>
        </div>
      ) : null}
    </section>
  );
}

export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
    />
  );
}

export function PageBackdrop({ dark = false }: { dark?: boolean }) {
  if (dark) {
    return (
      <>
        <Glow className="-top-24 -left-20 h-72 w-72 bg-violet-glow/40" />
        <Glow className="top-1/3 -right-24 h-80 w-80 bg-magenta-glow/30" />
        <Glow className="bottom-0 left-1/4 h-64 w-64 bg-cyan-glow/20" />
      </>
    );
  }
  return (
    <>
      <Glow className="-top-16 -right-16 h-64 w-64 bg-violet-glow/10" />
      <Glow className="bottom-0 -left-10 h-56 w-56 bg-cyan-glow/10" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HEADERS & TEXT                                                       */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]",
        dark
          ? "bg-white/10 text-cyan-glow ring-1 ring-white/10"
          : "bg-violet-glow/10 text-violet-glow ring-1 ring-violet-glow/20"
      )}
    >
      <Sparkles className="h-3 w-3" />
      {children}
    </div>
  );
}

export function ChapterHeading({
  kicker,
  title,
  dark = false,
  className,
}: {
  kicker: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-5", className)}>
      <Eyebrow dark={dark}>{kicker}</Eyebrow>
      <h1
        className={cn(
          "mt-3 font-display text-[26px] font-bold leading-[1.15] sm:text-[32px]",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h1>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-glow via-magenta-glow to-cyan-glow" />
    </div>
  );
}

export function SectionTitle({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2
      className={cn(
        "font-display text-[15px] font-bold tracking-tight sm:text-[17px]",
        dark ? "text-white" : "text-navy-900"
      )}
    >
      {children}
    </h2>
  );
}

export function P({ children, dark = false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={cn("text-[11.5px] leading-[1.65] sm:text-[12.5px]", dark ? "text-white/70" : "text-ink-700", className)}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* CALLOUTS / CARDS                                                     */
/* ------------------------------------------------------------------ */

export function Callout({
  title,
  children,
  variant = "tip",
}: {
  title: string;
  children: ReactNode;
  variant?: "tip" | "warning" | "quote";
}) {
  const Icon = variant === "warning" ? AlertTriangle : variant === "quote" ? Quote : Lightbulb;
  const styles =
    variant === "warning"
      ? "border-pink-glow/30 bg-pink-glow/5"
      : variant === "quote"
      ? "border-cyan-glow/30 bg-cyan-glow/5"
      : "border-violet-glow/30 bg-violet-glow/5";
  return (
    <div className={cn("rounded-xl border p-3.5", styles)}>
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 shrink-0 text-navy-800" />
        <p className="font-display text-[11px] font-bold text-navy-900">{title}</p>
      </div>
      <div className="mt-1.5 text-[11px] leading-[1.55] text-ink-700">{children}</div>
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-black/5 bg-white p-3.5 shadow-sm", className)}>{children}</div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-[11px] leading-snug text-ink-700">
          <CheckCircle2 className="mt-[1px] h-3.5 w-3.5 shrink-0 text-violet-glow" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Badge({ children, tone = "violet" }: { children: ReactNode; tone?: "violet" | "cyan" | "magenta" }) {
  const map = {
    violet: "bg-violet-glow/10 text-violet-glow",
    cyan: "bg-cyan-glow/10 text-cyan-700",
    magenta: "bg-magenta-glow/10 text-magenta-glow",
  } as const;
  return (
    <span className={cn("rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider", map[tone])}>
      {children}
    </span>
  );
}

export function FrameworkStrip({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="rounded-lg bg-navy-900 px-2.5 py-1.5 font-display text-[10px] font-bold text-white">
            {step}
          </div>
          {i < steps.length - 1 && <span className="text-violet-glow">→</span>}
        </div>
      ))}
    </div>
  );
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-navy-900 p-3 text-center text-white">
      <p className="font-display text-lg font-extrabold bg-gradient-to-r from-cyan-glow to-magenta-glow bg-clip-text text-transparent">
        {value}
      </p>
      <p className="mt-0.5 text-[9px] uppercase tracking-wider text-white/60">{label}</p>
    </div>
  );
}

export function DisclaimerNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg bg-navy-900/5 px-3 py-2 text-[9.5px] italic leading-snug text-ink-500">
      {children}
    </p>
  );
}

export function TwoCol({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid grid-cols-2 gap-4", className)}>{children}</div>;
}
