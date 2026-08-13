import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Checklist, Badge, DisclaimerNote } from "../components/ui";
import { RoadmapTimeline } from "../components/illustrations";
import { ArrowRight } from "lucide-react";

export function Page26() {
  return (
    <PageShell pageNumber={26}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 10" title="Your 90-Day Pinterest Growth Plan" />

      <P className="mb-3">
        Here is a practical, phase-by-phase roadmap for implementing everything in this system.
        Follow it in order — each phase builds directly on the last.
      </P>

      <RoadmapTimeline
        phases={[
          {
            range: "Days 1–30",
            title: "Foundation",
            items: ["Choose niche & audience", "Select affiliate offers", "Optimize Pinterest profile", "Build boards & keyword map", "Publish first pins"],
          },
          {
            range: "Days 31–60",
            title: "Traffic",
            items: ["Publish consistently", "Create fresh pin creative", "Expand keyword clusters", "Review analytics weekly", "Test new headlines"],
          },
          {
            range: "Days 61–90",
            title: "Optimize & Scale",
            items: ["Double down on winning topics", "Improve landing pages", "Expand affiliate offers", "Automate repetitive tasks", "Build a repeatable system"],
          },
        ]}
      />

      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <p className="font-display text-[12px] font-bold text-navy-900">90-Day Action Checklist</p>
          <Badge>Checklist</Badge>
        </div>
        <Card className="grid grid-cols-3 gap-x-4 gap-y-1">
          <Checklist items={["Niche & offers locked in", "Profile fully optimized", "First 15–20 pins published"]} />
          <Checklist items={["Weekly publishing rhythm set", "Analytics reviewed weekly", "3+ headline variations tested"]} />
          <Checklist items={["Top 5 pins identified", "Landing pages improved", "One workflow automated"]} />
        </Card>
      </div>
    </PageShell>
  );
}

export function Page27() {
  const rows = [
    ["Monthly Pin Impressions", "500,000"],
    ["Outbound Click-Through Rate", "0.5%"],
    ["Resulting Clicks", "2,500"],
    ["Landing Page → Offer Rate", "60%"],
    ["Offer Page Visits", "1,500"],
    ["Conversion Rate", "2%"],
    ["Monthly Sales", "30"],
    ["Average Commission", "$35"],
  ];
  return (
    <PageShell pageNumber={27}>
      <PageBackdrop />
      <SectionTitle>Your Pinterest $1K Target Model</SectionTitle>
      <P className="mt-1.5 mb-3">
        This is an illustrative example of how traffic, click-through rate, conversion rate, and
        commission combine into a monthly income figure — not a promise of results.
      </P>

      <Card className="mb-3">
        <div className="divide-y divide-black/5">
          {rows.map(([label, value], i) => (
            <div key={i} className="flex items-center justify-between py-1.5">
              <span className="text-[10.5px] text-ink-700">{label}</span>
              <span className="font-display text-[11px] font-bold text-navy-900">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between rounded-lg bg-navy-950 px-3 py-2.5 text-white">
          <span className="text-[11px] font-semibold">Estimated Monthly Result</span>
          <span className="font-display text-lg font-extrabold bg-gradient-to-r from-cyan-glow to-magenta-glow bg-clip-text text-transparent">
            ≈ $1,050
          </span>
        </div>
      </Card>

      <P className="mb-2">
        Reaching this outcome — or a different one — depends on your traffic volume, offer quality,
        click-through rate, conversion rate, and consistency of execution. Smaller or larger accounts
        will see different numbers at every step.
      </P>
      <DisclaimerNote>
        This is an example calculation for educational purposes only, not a guarantee of earnings.
        Actual results vary based on niche, effort, offer quality, and market conditions.
      </DisclaimerNote>
    </PageShell>
  );
}

export function Page28() {
  return (
    <PageShell noPad pageNumber={28} className="text-white">
      <div className="relative flex h-full w-full flex-col">
        <img src="/images/final-system.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/75 to-navy-950/95" />

        <div className="relative flex h-full flex-col px-8 py-10 sm:px-14 sm:py-12">
          <span className="w-fit rounded-full border border-white/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Final Word
          </span>

          <h1 className="mt-5 font-display text-[28px] font-extrabold leading-tight sm:text-[34px]">
            Your Pinterest Business Starts With One Pin.
          </h1>
          <P dark className="mt-3 max-w-md">
            You now have a complete, repeatable system — from niche and offer selection to keyword
            research, pin design, publishing rhythm, conversion, and scale. Progress compounds with
            consistency. Your results will depend on the traffic you generate, the offers you choose,
            and how consistently you execute — so start now, and keep improving with every pin.
          </P>

          <div className="mt-6 flex flex-wrap items-center gap-1.5">
            {["Choose", "Optimize", "Create", "Publish", "Measure", "Improve", "Scale"].map((s, i, arr) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold backdrop-blur">{s}</div>
                {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-cyan-glow" />}
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between border-t border-white/15 pt-5">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">Thank you for reading</p>
              <p className="font-display text-[18px] font-bold">GrowthVault</p>
            </div>
            <p className="max-w-[200px] text-right text-[9px] italic text-white/40">
              Results vary. Success depends on traffic quality, offer selection, and consistent execution.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
