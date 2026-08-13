import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Callout, Badge } from "../components/ui";
import { CommissionFlow, VerticalFunnel } from "../components/illustrations";
import { Search, Users2, Target } from "lucide-react";

export function Page04() {
  return (
    <PageShell pageNumber={4}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 01" title="The Pinterest Affiliate Opportunity" />

      <P className="mb-4">
        Pinterest is not a typical social network — it behaves more like a{" "}
        <strong className="text-navy-900">visual search engine</strong>. People come to Pinterest
        actively looking for ideas, products, and solutions, which makes it a uniquely powerful
        platform for affiliate marketing built on genuine buyer intent rather than passive scrolling.
      </P>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <div className="mb-1.5 flex items-center gap-2">
            <Search className="h-3.5 w-3.5 text-violet-glow" />
            <SectionTitle>Pinterest = Search + Discovery</SectionTitle>
          </div>
          <P>
            Content is indexed and surfaced by keywords, not just recency. A well-optimized pin can
            keep generating clicks for months or years — this is often called "evergreen" traffic.
          </P>
        </Card>
        <Card>
          <div className="mb-1.5 flex items-center gap-2">
            <Users2 className="h-3.5 w-3.5 text-magenta-glow" />
            <SectionTitle>Pinterest vs. Traditional Social</SectionTitle>
          </div>
          <P>
            Instagram or TikTok reward audience size and algorithmic timing. Pinterest rewards
            relevance and search match — meaning a small account with zero followers can still be
            found by the right searcher.
          </P>
        </Card>
      </div>

      <div className="mt-4">
        <SectionTitle>How Affiliate Marketing Works</SectionTitle>
        <P className="mt-1.5 mb-3">
          You recommend a product or tool, share a unique tracked link, and earn a commission when
          someone buys through that link. Pinterest's role is simple: it supplies interested traffic.
        </P>
        <Card className="bg-navy-950">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
            The Commission Flow
          </p>
          <CommissionFlow />
        </Card>
      </div>
    </PageShell>
  );
}

export function Page05() {
  return (
    <PageShell pageNumber={5}>
      <PageBackdrop />
      <SectionTitle>The Traffic → Click → Conversion Model</SectionTitle>
      <P className="mt-1.5 mb-3">
        Every affiliate result traces back to this simple chain. Strengthening any link — more
        qualified traffic, better click-through, a more relevant offer — moves your income forward.
      </P>
      <Card className="mb-4">
        <VerticalFunnel steps={["Pinterest Traffic", "Pin Clicks", "Landing Page Visits", "Affiliate Conversions"]} />
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Callout title="Set Realistic Expectations" variant="tip">
          Pinterest affiliate income builds gradually. Most beginners see meaningful traffic within
          6–12 weeks of consistent, keyword-driven publishing — not overnight.
        </Callout>
        <Callout title="Common Misconception" variant="warning">
          "Passive income" does not mean "no work." It means the work (creating pins, choosing
          offers) is done once, but results depend on ongoing testing and consistency.
        </Callout>
      </div>

      <div className="mt-4 rounded-xl border border-violet-glow/20 bg-white p-4">
        <div className="mb-2 flex items-center gap-2">
          <Target className="h-4 w-4 text-violet-glow" />
          <p className="font-display text-[12px] font-bold text-navy-900">
            Practical Exercise: Define Your Pinterest Income Goal
          </p>
          <Badge>Worksheet</Badge>
        </div>
        <P className="mb-2">
          Followers are not required for Pinterest traffic — search relevance is. Before moving on,
          write down a specific, realistic target.
        </P>
        <div className="grid grid-cols-3 gap-2">
          {["My target monthly income:", "My target launch date:", "My average commission per sale:"].map(
            (q, i) => (
              <div key={i} className="rounded-lg border border-dashed border-ink-500/30 p-2.5">
                <p className="text-[9px] font-semibold text-ink-700">{q}</p>
                <div className="mt-3 h-px w-full bg-ink-500/20" />
              </div>
            )
          )}
        </div>
      </div>
    </PageShell>
  );
}
