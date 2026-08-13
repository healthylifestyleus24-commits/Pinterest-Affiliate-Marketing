import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Checklist, Badge } from "../components/ui";
import { ScoreBar, ProfileMockup } from "../components/illustrations";
import { Layers } from "lucide-react";

export function Page06() {
  return (
    <PageShell pageNumber={6}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 02" title="Build Your Pinterest Business Foundation" />

      <P className="mb-3">
        A profitable Pinterest account starts with a clear niche — a focused topic where you can
        consistently create content and confidently recommend affiliate offers.
      </P>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card>
          <SectionTitle>Niche Selection Criteria</SectionTitle>
          <Checklist
            items={[
              "There is proven search demand",
              "Buyers actively spend money in this space",
              "You can produce content consistently",
              "Relevant affiliate programs exist",
            ]}
          />
        </Card>
        <Card>
          <SectionTitle>Audience & Buyer Intent</SectionTitle>
          <P className="mt-1">
            Research who searches your niche and why. Separate <strong>informational</strong> searchers
            ("what is meal prepping") from <strong>buyer-intent</strong> searchers ("best meal prep
            containers") — the second group converts into affiliate sales far more often.
          </P>
        </Card>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <p className="font-display text-[12px] font-bold text-navy-900">Niche Selection Scorecard</p>
          <Badge tone="cyan">Framework</Badge>
        </div>
        <Card className="grid grid-cols-2 gap-x-6 gap-y-2.5">
          <ScoreBar label="Demand" value={8} />
          <ScoreBar label="Commercial Intent" value={7} />
          <ScoreBar label="Competition (lower = better)" value={6} />
          <ScoreBar label="Content Potential" value={9} />
          <ScoreBar label="Affiliate Availability" value={8} />
          <div className="flex flex-col justify-center rounded-lg bg-navy-950 p-2 text-center text-white">
            <p className="text-[9px] uppercase tracking-wide text-white/50">Total Score</p>
            <p className="font-display text-lg font-extrabold text-cyan-glow">38/50</p>
          </div>
        </Card>
        <p className="mt-1.5 text-[9.5px] italic text-ink-500">
          Score any niche idea 1–10 across all five criteria. Aim for 30+ before committing.
        </p>
      </div>
    </PageShell>
  );
}

export function Page07() {
  return (
    <PageShell pageNumber={7}>
      <PageBackdrop />
      <SectionTitle>Set Up Your Pinterest Business Foundation</SectionTitle>
      <P className="mt-1.5 mb-3">
        Once your niche is chosen, build the account structure that supports it — this is the base
        every future pin, board, and click will rest on.
      </P>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <div className="mb-1.5 flex items-center gap-2">
            <Layers className="h-3.5 w-3.5 text-violet-glow" />
            <SectionTitle>Profile Essentials</SectionTitle>
          </div>
          <Checklist
            items={[
              "Convert to a free Pinterest Business account",
              "Username & display name include a niche keyword",
              "Bio states who you help and how, with 2–3 keywords",
              "Profile photo is clear, on-brand, and consistent",
              "Boards are named with searchable keywords, not clever titles",
              "Every board has a keyword-rich description",
            ]}
          />
        </Card>
        <div>
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-ink-500">
            Foundation Preview
          </p>
          <ProfileMockup variant="good" />
          <p className="mt-3 mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-ink-500">
            Suggested Board Structure
          </p>
          <div className="space-y-1.5">
            {["[Niche] for Beginners", "[Niche] Tips & Tools", "[Niche] Product Roundups", "[Niche] Mistakes to Avoid"].map(
              (b, i) => (
                <div key={i} className="rounded-lg bg-white px-3 py-2 text-[10px] font-semibold text-navy-900 shadow-sm ring-1 ring-black/5">
                  📌 {b}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
