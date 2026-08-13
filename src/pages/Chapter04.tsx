import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Badge, FrameworkStrip } from "../components/ui";
import { KeywordMap } from "../components/illustrations";
import { Search } from "lucide-react";

export function Page10() {
  return (
    <PageShell pageNumber={10}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 04" title="Pinterest Keyword Research" />

      <P className="mb-3">
        Pinterest ranks content primarily by keyword relevance. Understanding search intent — what
        the searcher actually wants — is the foundation of every pin, board, and profile you build.
      </P>

      <SectionTitle>Types of Search Intent</SectionTitle>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <Card>
          <p className="text-[10.5px] font-bold text-navy-900">Informational</p>
          <P className="mt-1">"what is meal prepping" — early-stage, useful for warming an audience.</P>
        </Card>
        <Card>
          <p className="text-[10.5px] font-bold text-navy-900">Commercial / Buyer-Intent</p>
          <P className="mt-1">"best meal prep containers" — closer to a purchase decision.</P>
        </Card>
        <Card>
          <p className="text-[10.5px] font-bold text-navy-900">Problem-Based</p>
          <P className="mt-1">"how to stop food from spoiling fast" — pairs well with a solution offer.</P>
        </Card>
        <Card>
          <p className="text-[10.5px] font-bold text-navy-900">Seasonal & Related</p>
          <P className="mt-1">"new year meal prep ideas" — spikes at predictable times of year.</P>
        </Card>
      </div>

      <div className="mt-4">
        <SectionTitle>Keyword Types To Collect</SectionTitle>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Seed Keywords", "Long-Tail Keywords", "Commercial Keywords", "Problem Keywords", "Seasonal Keywords", "Related Keywords"].map(
            (k, i) => (
              <Badge key={i} tone={i % 2 === 0 ? "violet" : "cyan"}>
                {k}
              </Badge>
            )
          )}
        </div>
      </div>
    </PageShell>
  );
}

export function Page11() {
  return (
    <PageShell pageNumber={11}>
      <PageBackdrop />
      <SectionTitle>From Seed Keyword to Long-Tail Variations</SectionTitle>
      <P className="mt-1.5 mb-3">
        Start with one broad seed keyword, then expand it using Pinterest's own search suggestions
        (the autocomplete dropdown and related searches). This single step reveals dozens of real
        phrases your audience is actually typing.
      </P>

      <Card className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-violet-glow" />
          <p className="text-[10px] font-bold uppercase tracking-wide text-ink-500">Worked Example</p>
        </div>
        <KeywordMap
          seed="Pinterest Marketing"
          branches={[
            "Pinterest marketing for beginners",
            "Pinterest affiliate marketing",
            "Pinterest SEO strategy",
            "Pinterest traffic strategy",
            "Pinterest affiliate marketing without a website",
          ]}
        />
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <SectionTitle>Keyword Clustering</SectionTitle>
          <P className="mt-1">
            Group related long-tail keywords into clusters (e.g., "beginner," "strategy," "tools").
            Each cluster becomes a board and a family of related pins — reinforcing topical relevance.
          </P>
        </Card>
        <Card>
          <SectionTitle>Understanding Competition</SectionTitle>
          <P className="mt-1">
            If a keyword returns saturated results from major brands, target a more specific
            long-tail variation instead. Specific keywords are easier to rank for and often convert better.
          </P>
        </Card>
      </div>
    </PageShell>
  );
}

export function Page12() {
  return (
    <PageShell pageNumber={12}>
      <PageBackdrop />
      <SectionTitle>Matching Keywords to Content & Offers</SectionTitle>
      <P className="mt-1.5 mb-3">
        The real goal of keyword research isn't a list — it's a clear path from what someone searches
        to the affiliate offer that solves their need.
      </P>

      <Card className="mb-4">
        <FrameworkStrip steps={["Seed Keyword", "Long-Tail Keywords", "Search Intent", "Pin Topic", "Affiliate Offer"]} />
      </Card>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <p className="font-display text-[12px] font-bold text-navy-900">Keyword Research Worksheet</p>
          <Badge tone="magenta">Worksheet</Badge>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Seed keyword:", "3 long-tail variations:", "Search intent (info / buyer / problem):", "Matching pin topic:", "Matching affiliate offer:", "Board this belongs to:"].map(
            (label, i) => (
              <div key={i} className="rounded-lg border border-dashed border-ink-500/30 bg-white p-2.5">
                <p className="text-[9.5px] font-semibold text-ink-700">{label}</p>
                <div className="mt-3 h-px w-full bg-ink-500/20" />
              </div>
            )
          )}
        </div>
      </div>
    </PageShell>
  );
}
