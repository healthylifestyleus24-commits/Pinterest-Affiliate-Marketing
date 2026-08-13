import { PageShell, PageBackdrop, ChapterHeading, SectionTitle, P, Card, Checklist, Callout, StatTile } from "../components/ui";
import { VerticalFunnel } from "../components/illustrations";

export function Page08() {
  return (
    <PageShell pageNumber={8}>
      <PageBackdrop />
      <ChapterHeading kicker="Chapter 03" title="Find Profitable Affiliate Offers" />

      <P className="mb-3">
        Not all affiliate offers are equal. A high commission percentage means little if the product
        rarely sells. Strong offers combine demand, trust, and fair economics.
      </P>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card>
          <SectionTitle>Common Offer Types</SectionTitle>
          <Checklist
            items={[
              "Digital products & courses (often 30–50% commission)",
              "Software / SaaS tools (often recurring monthly commission)",
              "Marketplaces like Amazon Associates (broad selection, lower %)",
              "Physical products via retailer affiliate programs",
            ]}
          />
        </Card>
        <Card>
          <SectionTitle>Metrics Worth Understanding</SectionTitle>
          <Checklist
            items={[
              "Commission % — your share of each sale",
              "Cookie duration — how long you get credit after a click",
              "EPC (earnings per click) — network-reported average payout",
              "Recurring commission — repeat monthly income per customer",
            ]}
          />
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <StatTile value="30–50%" label="Typical Digital Commission" />
        <StatTile value="20–90d" label="Common Cookie Windows" />
        <StatTile value="$0.10+" label="Reference EPC Range" />
        <StatTile value="Monthly" label="SaaS Recurring Payouts" />
      </div>
      <p className="mt-1.5 text-[9px] italic text-ink-500">
        Figures are general industry reference ranges for education only — always verify current
        terms on the affiliate network or program page.
      </p>
    </PageShell>
  );
}

export function Page09() {
  return (
    <PageShell pageNumber={9}>
      <PageBackdrop />
      <SectionTitle>Profitability Evaluation Checklist</SectionTitle>
      <P className="mt-1.5 mb-3">
        Before promoting any offer, run it through this checklist. A good affiliate program should
        pass on most of these points.
      </P>

      <Card className="mb-4 grid grid-cols-2 gap-x-6 gap-y-1">
        <Checklist
          items={[
            "Commission is fair relative to product price",
            "Product price supports meaningful payouts",
            "Recurring revenue potential (bonus, not required)",
            "Conversion potential fits Pinterest's browsing intent",
          ]}
        />
        <Checklist
          items={[
            "Offer fits your audience's real needs",
            "Brand has a trustworthy reputation & reviews",
            "Refund / chargeback risk is reasonably low",
            "Promotional restrictions reviewed before posting",
          ]}
        />
      </Card>

      <SectionTitle>Affiliate Funnel: From Program to Payout</SectionTitle>
      <Card className="mt-2">
        <VerticalFunnel steps={["Choose Affiliate Program", "Get Approved & Get Your Link", "Promote via Pinterest Content", "Earn Verified Commission"]} />
      </Card>

      <Callout title="Always Check Program Rules" variant="warning">
        Some affiliate programs restrict how links can be shared (e.g., no direct linking, required
        disclosures). Always read current program terms before publishing pins that promote an offer.
      </Callout>
    </PageShell>
  );
}
