import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Checklist, Callout } from "../components/ui";
import { WeeklyCalendar, ProcessLoop, BarMini } from "../components/illustrations";

export function Page18() {
  return (
    <PageShell pageNumber={18}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 07" title="Build Your Organic Traffic Engine" />

      <P className="mb-3">
        Pinterest traffic compounds through consistency. A steady stream of fresh, keyword-targeted
        pins — organized into clear boards and clusters — is what builds long-term, repeatable reach.
      </P>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <SectionTitle>Publishing Fundamentals</SectionTitle>
          <Checklist
            items={[
              "Publish consistently rather than in occasional bursts",
              "Create fresh pin creative for existing top content",
              "Rotate through your keyword clusters, don't repeat one",
              "Use a scheduler to maintain a steady cadence",
            ]}
          />
        </Card>
        <Card>
          <SectionTitle>Organize by Content Clusters</SectionTitle>
          <P className="mt-1">
            Group boards and pins around keyword clusters from Chapter 4 (e.g., "beginner,"
            "tools," "mistakes"). This reinforces topical authority and helps Pinterest match your
            content to more searches.
          </P>
        </Card>
      </div>
    </PageShell>
  );
}

export function Page19() {
  const days = [
    { day: "Mon", content: "Educational Pin" },
    { day: "Tue", content: "Problem/Solution" },
    { day: "Wed", content: "Product-Focused" },
    { day: "Thu", content: "Tutorial Pin" },
    { day: "Fri", content: "List/Checklist" },
    { day: "Sat", content: "Seasonal/Trend" },
    { day: "Sun", content: "Top Pin Variation" },
  ];
  return (
    <PageShell pageNumber={19}>
      <PageBackdrop />
      <SectionTitle>A Sample Weekly Publishing Schedule</SectionTitle>
      <P className="mt-1.5 mb-3">
        A simple content rhythm removes decision fatigue and keeps your boards fresh with varied,
        relevant formats throughout the week.
      </P>
      <Card className="mb-4">
        <WeeklyCalendar days={days} />
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <SectionTitle>Evergreen vs. Seasonal</SectionTitle>
          <P className="mt-1">
            Evergreen content (how-to guides, tool roundups) drives traffic year-round. Seasonal
            content (holiday gift guides, new year goals) spikes predictably — plan both into your mix.
          </P>
        </Card>
        <Card>
          <SectionTitle>Diversify Your Traffic</SectionTitle>
          <P className="mt-1">
            Don't rely on a single pin or board. Spread topics across multiple boards and keyword
            clusters so no algorithm shift or trend change can sink your entire traffic source.
          </P>
        </Card>
      </div>
    </PageShell>
  );
}

export function Page20() {
  return (
    <PageShell pageNumber={20}>
      <PageBackdrop />
      <SectionTitle>Your Content Engine, Visualized</SectionTitle>
      <P className="mt-1.5 mb-3">
        Treat publishing as a repeatable loop, not a one-time task. This is the engine that keeps
        Pinterest surfacing your content to new, relevant searchers.
      </P>

      <Card className="mb-4">
        <ProcessLoop steps={["Research Keywords", "Design Pins", "Publish Consistently", "Track Analytics"]} />
      </Card>

      <div className="grid grid-cols-[1fr_1.1fr] gap-4 items-start">
        <Card>
          <SectionTitle>Reading Pinterest Analytics</SectionTitle>
          <Checklist
            items={[
              "Impressions show how often pins are surfaced",
              "Saves indicate content resonance and shareability",
              "Outbound clicks are your real traffic signal",
              "Compare boards & topics, not just single pins",
            ]}
          />
        </Card>
        <div>
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wide text-ink-500">
            Outbound Clicks by Content Type
          </p>
          <Card>
            <BarMini
              data={[
                { label: "Edu", value: 42 },
                { label: "Prob", value: 58 },
                { label: "Prod", value: 71 },
                { label: "Tut", value: 49 },
                { label: "List", value: 65 },
              ]}
            />
          </Card>
        </div>
      </div>

      <Callout title="Quality Beats Quantity" variant="tip">
        Publishing more pins only helps if each one is relevant and well-designed. A handful of
        targeted, high-quality pins consistently outperforms a flood of low-effort content.
      </Callout>
    </PageShell>
  );
}
