import { PageShell } from "../components/ui";
import { PinCard, GrowthChart } from "../components/illustrations";
import { TrendingUp } from "lucide-react";

export default function Page01Cover() {
  return (
    <PageShell noPad pageNumber={1} className="text-white">
      <div className="relative flex h-full w-full flex-col">
        <img
          src="/images/cover-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/55 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-glow/20 via-transparent to-cyan-glow/10" />

        <div className="relative flex h-full flex-col px-8 py-10 sm:px-14 sm:py-14">
          {/* Top brand row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-glow to-cyan-glow" />
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-white/80">
                GrowthVault
              </span>
            </div>
            <span className="rounded-full border border-white/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
              Digital Marketing Playbook
            </span>
          </div>

          {/* Floating pin mockups */}
          <div className="mt-8 grid w-[62%] grid-cols-3 gap-3 self-end sm:mt-10">
            <div className="translate-y-3">
              <PinCard title="Pinterest SEO Checklist" tag="Guide" index={0} tall />
            </div>
            <div className="-translate-y-2">
              <PinCard title="Affiliate Income Report" tag="Case Study" index={1} tall />
            </div>
            <div className="translate-y-5">
              <PinCard title="90-Day Growth Plan" tag="Roadmap" index={2} tall />
            </div>
          </div>

          {/* Title block */}
          <div className="mt-auto max-w-[560px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
              <TrendingUp className="h-3 w-3 text-cyan-glow" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
                Organic Traffic · No Ads · No Followers Required
              </span>
            </div>
            <h1 className="font-display text-[38px] font-extrabold leading-[1.05] sm:text-[52px]">
              The <span className="bg-gradient-to-r from-cyan-glow via-violet-glow to-magenta-glow bg-clip-text text-transparent">$1K/Month</span> Pinterest Affiliate System
            </h1>
            <p className="mt-4 text-[14px] font-medium leading-snug text-white/80 sm:text-[16px]">
              Build a Profitable Business Without Ads or Followers
            </p>

            <div className="mt-8 flex items-end justify-between border-t border-white/15 pt-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">Written by</p>
                <p className="font-display text-[16px] font-bold">GrowthVault</p>
              </div>
              <div className="w-28 opacity-90">
                <GrowthChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
