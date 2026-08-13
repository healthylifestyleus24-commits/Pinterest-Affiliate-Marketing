import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Checklist, Badge, FrameworkStrip } from "../components/ui";
import { PinCard, PinGrid } from "../components/illustrations";

export function Page15() {
  return (
    <PageShell pageNumber={15}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 06" title="Design Click-Worthy Pins" />

      <P className="mb-3">
        A strong pin earns attention in under a second, then earns a click. Every design choice —
        contrast, headline, layout — should work toward that single goal.
      </P>

      <div className="grid grid-cols-[1.1fr_1fr] gap-4 items-start">
        <Card>
          <SectionTitle>Pin Design Essentials</SectionTitle>
          <Checklist
            items={[
              "Vertical format (2:3 ratio) for maximum feed real estate",
              "Clear visual hierarchy — headline first, image support second",
              "High contrast text over image or solid background",
              "Readable typography, even on small mobile screens",
              "Consistent branding: colors, fonts, logo placement",
              "A visible next step — implied or direct call-to-action",
            ]}
          />
        </Card>
        <div>
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wide text-ink-500">Annotated Example</p>
          <div className="relative w-[140px]">
            <PinCard title="7 Pinterest SEO Mistakes Killing Your Traffic" tag="Guide" tall index={2} />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export function Page16() {
  return (
    <PageShell pageNumber={16}>
      <PageBackdrop />
      <SectionTitle>Reusable Headline Formulas</SectionTitle>
      <P className="mt-1.5 mb-3">
        You don't need to reinvent headlines for every pin. These proven formulas combine curiosity,
        specificity, and benefit — swap in your niche topic to generate dozens of variations.
      </P>

      <div className="grid grid-cols-2 gap-2.5">
        {[
          ["X Ways to…", "7 Ways to Grow Pinterest Traffic Fast"],
          ["The Beginner's Guide to…", "The Beginner's Guide to Affiliate Marketing"],
          ["How to…", "How to Get Your First Affiliate Sale"],
          ["X Mistakes to Avoid…", "5 Mistakes to Avoid on Pinterest"],
          ["The Simple System for…", "The Simple System for Passive Pinterest Traffic"],
          ["Before You Try X, Read This…", "Before You Try Pinterest Ads, Read This"],
        ].map(([formula, example], i) => (
          <Card key={i}>
            <p className="font-display text-[11px] font-bold text-navy-900">{formula}</p>
            <p className="mt-1 text-[10px] italic text-ink-500">"{example}"</p>
          </Card>
        ))}
      </div>

      <div className="mt-4">
        <SectionTitle>What Makes A Headline Work</SectionTitle>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Curiosity", "Benefit", "Specificity", "Contrast in Wording", "Numbers"].map((t, i) => (
            <Badge key={i} tone={i % 2 === 0 ? "violet" : "magenta"}>
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export function Page17() {
  return (
    <PageShell pageNumber={17}>
      <PageBackdrop />
      <SectionTitle>The High-Converting Pin Formula</SectionTitle>
      <P className="mt-1.5 mb-3">
        Use this structure as a design brief for every pin you create — it keeps your creative
        process fast, repeatable, and effective.
      </P>

      <Card className="mb-4 bg-navy-950">
        <FrameworkStrip steps={["Hook", "Benefit", "Curiosity", "Visual", "CTA"]} />
      </Card>

      <SectionTitle>Test Multiple Creative Variations</SectionTitle>
      <P className="mt-1.5 mb-2">
        Publish 3–5 design variations per topic (different headlines, colors, or images) and let
        Pinterest analytics show which resonates — this is basic A/B testing applied to pins.
      </P>
      <PinGrid
        items={[
          { title: "Pinterest Traffic in 30 Days", tag: "V1" },
          { title: "Grow Without Followers", tag: "V2" },
          { title: "The Pinterest SEO Method", tag: "V3" },
        ]}
      />
    </PageShell>
  );
}
