import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Checklist, Badge } from "../components/ui";
import { ProfileMockup } from "../components/illustrations";
import { ArrowRight } from "lucide-react";

export function Page13() {
  return (
    <PageShell pageNumber={13}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 05" title="Create a High-Converting Pinterest Profile" />

      <P className="mb-3">
        Your profile is the first trust check a searcher makes before clicking further. A clear,
        keyword-optimized, consistent profile increases both search visibility and click confidence.
      </P>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <SectionTitle>What To Optimize</SectionTitle>
          <Checklist
            items={[
              "SEO-friendly display name with a core keyword",
              "Keyword-rich bio written in plain, human language",
              "Descriptive board names and board descriptions",
              "Clear, professional profile image or logo",
              "Website connected and claimed where applicable",
            ]}
          />
        </Card>
        <Card>
          <SectionTitle>Trust Signals That Matter</SectionTitle>
          <Checklist
            items={[
              "Consistent visual branding across pins and profile",
              "A defined content category / niche focus",
              "Claimed website (adds a verified badge)",
              "Active, recently updated boards",
            ]}
          />
        </Card>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <p className="font-display text-[12px] font-bold text-navy-900">Pinterest Profile Optimization Checklist</p>
          <Badge>Checklist</Badge>
        </div>
        <Card className="grid grid-cols-2 gap-x-6 gap-y-1">
          <Checklist
            items={[
              "Business account activated",
              "Display name includes niche keyword",
              "Bio explains who you help + how, in 1–2 lines",
            ]}
          />
          <Checklist
            items={[
              "All boards renamed with searchable keywords",
              "Board descriptions written (2–3 sentences each)",
              "Website connected / claimed",
            ]}
          />
        </Card>
      </div>
    </PageShell>
  );
}

export function Page14() {
  return (
    <PageShell pageNumber={14}>
      <PageBackdrop />
      <SectionTitle>Before & After: Profile Optimization</SectionTitle>
      <P className="mt-1.5 mb-4">
        Small profile changes create a large difference in perceived trust and searchability. Compare
        an unoptimized personal-style profile with a keyword-optimized business profile below.
      </P>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div>
          <p className="mb-2 text-center text-[9px] font-bold uppercase tracking-wide text-ink-500">Before</p>
          <ProfileMockup variant="bad" />
        </div>
        <ArrowRight className="h-5 w-5 text-violet-glow" />
        <div>
          <p className="mb-2 text-center text-[9px] font-bold uppercase tracking-wide text-violet-glow">After</p>
          <ProfileMockup variant="good" />
        </div>
      </div>

      <Card className="mt-5">
        <SectionTitle>Keep Branding Consistent</SectionTitle>
        <P className="mt-1.5">
          Use the same color palette, fonts, and tone across your profile image, pin templates, and
          bio. Consistency builds recognizability as searchers see multiple pins from your account
          over time, increasing trust and click-through rate.
        </P>
      </Card>
    </PageShell>
  );
}
