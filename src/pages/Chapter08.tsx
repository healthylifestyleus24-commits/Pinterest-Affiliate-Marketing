import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Checklist, Callout } from "../components/ui";
import { VerticalFunnel } from "../components/illustrations";

export function Page21() {
  return (
    <PageShell pageNumber={21}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 08" title="Turn Pinterest Traffic Into Affiliate Clicks" />

      <P className="mb-3">
        A click is only valuable if it leads somewhere relevant. Understanding the path from
        Pinterest to a purchase helps you remove friction at every step.
      </P>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <SectionTitle>Direct Linking vs. a Bridge Page</SectionTitle>
          <P className="mt-1">
            Some programs allow linking straight from a pin to the offer. Others require or benefit
            from a simple "bridge page" — a short landing page that pre-sells the idea and adds
            context before sending traffic onward.
          </P>
        </Card>
        <Card>
          <SectionTitle>Why Pre-Selling Works</SectionTitle>
          <P className="mt-1">
            A short bridge page can build trust, explain the benefit, and set expectations —
            increasing the chance a visitor completes the offer once they arrive.
          </P>
        </Card>
      </div>

      <div className="mt-4">
        <SectionTitle>Match the Promise to the Destination</SectionTitle>
        <Checklist
          items={[
            "The pin headline and the landing page content should match exactly",
            "Never send curiosity-driven clicks to an unrelated offer",
            "Keep the path short: pin → bridge/landing page → offer",
            "Use a clear, singular call-to-action on every step",
          ]}
        />
      </div>
    </PageShell>
  );
}

export function Page22() {
  return (
    <PageShell pageNumber={22}>
      <PageBackdrop />
      <SectionTitle>The Traffic Conversion Funnel</SectionTitle>
      <P className="mt-1.5 mb-3">
        Visualizing the full journey helps you spot where visitors are dropping off, and which step
        deserves your next optimization effort.
      </P>

      <Card className="mb-4">
        <VerticalFunnel
          steps={["Pinterest Impression", "Pin Click", "Landing Page", "Affiliate Offer", "Conversion", "Commission"]}
        />
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <SectionTitle>Trust & User Experience</SectionTitle>
          <Checklist items={["Fast-loading, mobile-friendly pages", "Clear affiliate disclosure statement", "No misleading claims in pins or pages"]} />
        </Card>
        <Card>
          <SectionTitle>Tracking What Matters</SectionTitle>
          <Checklist items={["Use UTM parameters to track pin performance", "Monitor outbound clicks in Pinterest Analytics", "Track conversions in each affiliate dashboard"]} />
        </Card>
      </div>

      <Callout title="Always Follow Platform & Program Policies" variant="warning">
        Affiliate disclosures, Pinterest's advertising guidelines, and each affiliate program's
        promotional rules must always be followed. Review current policies regularly, as they can change.
      </Callout>
    </PageShell>
  );
}
