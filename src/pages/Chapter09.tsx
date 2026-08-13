import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Checklist, Callout, Badge } from "../components/ui";
import { DashboardMockup, ProcessLoop, BarMini } from "../components/illustrations";

export function Page23() {
  return (
    <PageShell pageNumber={23}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 09" title="Scale, Automate & Optimize" />

      <P className="mb-3">
        Once you have consistent publishing, your analytics dashboard becomes your roadmap for what
        to double down on — and what to leave behind.
      </P>

      <div className="grid grid-cols-[1.1fr_1fr] gap-4 items-start">
        <Card>
          <SectionTitle>Identify Winners & Weak Pins</SectionTitle>
          <Checklist
            items={[
              "High CTR + high saves = strong creative, keep variations coming",
              "High impressions + low clicks = weak headline or visual, redesign",
              "Low impressions overall = keyword mismatch, revisit research",
              "Track conversions per offer, not just per pin",
            ]}
          />
        </Card>
        <div>
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wide text-ink-500">
            Weekly Outbound Clicks by Topic
          </p>
          <Card>
            <BarMini
              data={[
                { label: "T1", value: 30 },
                { label: "T2", value: 52 },
                { label: "T3", value: 40 },
                { label: "T4", value: 68 },
              ]}
            />
          </Card>
        </div>
      </div>

      <Card className="mt-3">
        <SectionTitle>Key Metrics At A Glance</SectionTitle>
        <div className="mt-1.5 grid grid-cols-3 gap-2">
          {[
            ["CTR", "Clicks ÷ impressions"],
            ["Save Rate", "Saves ÷ impressions"],
            ["Conversion Rate", "Sales ÷ clicks"],
          ].map(([label, def], i) => (
            <div key={i} className="rounded-lg bg-navy-900/5 p-2">
              <p className="text-[10px] font-bold text-navy-900">{label}</p>
              <p className="text-[9px] text-ink-500">{def}</p>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  );
}

export function Page24() {
  return (
    <PageShell pageNumber={24}>
      <PageBackdrop />
      <SectionTitle>Systems That Let You Scale</SectionTitle>
      <P className="mt-1.5 mb-3">
        Scaling isn't about working harder — it's about turning your best-performing process into a
        repeatable system that's easy to batch and delegate.
      </P>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <SectionTitle>Repurpose & Batch</SectionTitle>
          <Checklist
            items={[
              "Turn one blog post or guide into 5–10 pin variations",
              "Batch-create a week or month of pins in one sitting",
              "Reuse design templates for faster, on-brand output",
              "Schedule pins in advance with a Pinterest-approved tool",
            ]}
          />
        </Card>
        <Card>
          <SectionTitle>Use Spreadsheets & AI Thoughtfully</SectionTitle>
          <Checklist
            items={[
              "Track keywords, pin topics, and performance in one sheet",
              "Use AI tools to draft headline variations, then edit for voice",
              "Use AI to speed up research, not to replace quality control",
              "Review every AI-assisted pin before publishing",
            ]}
          />
        </Card>
      </div>

      <Callout title="Automation Should Support Quality" variant="tip">
        Scheduling and AI tools save time, but automation should never produce spammy, repetitive,
        or low-value content. Every published pin should still meet your quality bar.
      </Callout>
    </PageShell>
  );
}

export function Page25() {
  return (
    <PageShell pageNumber={25}>
      <PageBackdrop />
      <SectionTitle>The Optimization Loop</SectionTitle>
      <P className="mt-1.5 mb-3">
        Run this loop continuously. It turns raw analytics data into steady, compounding improvement
        across your entire Pinterest account.
      </P>

      <Card className="mb-4">
        <ProcessLoop steps={["Publish", "Measure", "Analyze", "Improve", "Republish / Test", "Scale"]} />
      </Card>

      <div className="mb-1.5 flex items-center gap-2">
        <p className="font-display text-[12px] font-bold text-navy-900">Sample Performance Dashboard</p>
        <Badge tone="cyan">Live Example</Badge>
      </div>
      <DashboardMockup />
    </PageShell>
  );
}
