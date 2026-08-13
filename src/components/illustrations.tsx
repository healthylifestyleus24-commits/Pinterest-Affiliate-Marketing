import { Bookmark, Heart, TrendingUp, MousePointerClick, Search, DollarSign, Eye, Share2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Generic pieces                                                      */
/* ------------------------------------------------------------------ */

const GRADIENTS = [
  "from-violet-glow to-magenta-glow",
  "from-cyan-glow to-violet-glow",
  "from-magenta-glow to-pink-glow",
  "from-purple-glow to-cyan-glow",
];

export function PinCard({
  title,
  tag,
  index = 0,
  tall = false,
}: {
  title: string;
  tag?: string;
  index?: number;
  tall?: boolean;
}) {
  const grad = GRADIENTS[index % GRADIENTS.length];
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
      <div className={`relative flex ${tall ? "h-28" : "h-20"} w-full items-center justify-center bg-gradient-to-br ${grad}`}>
        {tag && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-navy-900">
            {tag}
          </span>
        )}
        <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/90">
          <Bookmark className="h-2.5 w-2.5 text-navy-900" />
        </div>
        <TrendingUp className="h-6 w-6 text-white/70" />
      </div>
      <div className="space-y-1 p-2">
        <p className="text-[9px] font-bold leading-tight text-navy-900">{title}</p>
        <div className="flex items-center gap-2 text-ink-500">
          <Heart className="h-2.5 w-2.5" />
          <Share2 className="h-2.5 w-2.5" />
        </div>
      </div>
    </div>
  );
}

export function PinGrid({ items }: { items: { title: string; tag?: string; tall?: boolean }[] }) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {items.map((it, i) => (
        <PinCard key={i} title={it.title} tag={it.tag} index={i} tall={it.tall} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Flow / funnel diagrams                                               */
/* ------------------------------------------------------------------ */

export function FlowSteps({ steps }: { steps: { label: string; icon?: React.ReactNode }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-3">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center">
          <div className="flex w-[92px] flex-col items-center gap-1.5 rounded-xl bg-white p-2.5 text-center shadow-sm ring-1 ring-black/5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-glow to-cyan-glow text-white">
              {s.icon}
            </div>
            <p className="text-[8.5px] font-bold leading-tight text-navy-900">{s.label}</p>
          </div>
          {i < steps.length - 1 && <span className="mx-1 text-sm text-violet-glow">→</span>}
        </div>
      ))}
    </div>
  );
}

export function VerticalFunnel({ steps }: { steps: string[] }) {
  const n = steps.length;
  return (
    <div className="flex flex-col items-center gap-1.5">
      {steps.map((s, i) => {
        const widthPct = 100 - i * (55 / (n - 1 || 1));
        const grad = GRADIENTS[i % GRADIENTS.length];
        return (
          <div key={i} className="flex flex-col items-center">
            <div
              style={{ width: `${widthPct}%` }}
              className={`flex min-w-[120px] items-center justify-center rounded-md bg-gradient-to-r ${grad} px-3 py-2 text-center shadow-sm`}
            >
              <span className="text-[10px] font-bold text-white">{s}</span>
            </div>
            {i < n - 1 && <span className="my-0.5 text-violet-glow">▾</span>}
          </div>
        );
      })}
    </div>
  );
}

export function ProcessLoop({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="rounded-full border-2 border-violet-glow/30 bg-white px-3 py-2 text-center shadow-sm">
            <span className="text-[9.5px] font-bold text-navy-900">{s}</span>
          </div>
          <span className="text-violet-glow">{i < steps.length - 1 ? "→" : "↻"}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Charts                                                               */
/* ------------------------------------------------------------------ */

export function GrowthChart() {
  const points = [40, 55, 48, 65, 72, 68, 85, 95, 90, 110];
  const max = Math.max(...points);
  const w = 280;
  const h = 90;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - (p / max) * h]);
  const path = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c[0]},${c[1]}`).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
      <defs>
        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="growthLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#growthFill)" />
      <path d={path} fill="none" stroke="url(#growthLine)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {coords.map((c, i) => (
        <circle key={i} cx={c[0]} cy={c[1]} r="2.3" fill="#fff" stroke="#7c3aed" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

export function BarMini({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="flex h-24 items-end gap-2">
      {data.map((d, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1">
          <div
            style={{ height: `${(d.value / max) * 100}%` }}
            className={`w-full rounded-t-md bg-gradient-to-t ${GRADIENTS[i % GRADIENTS.length]}`}
          />
          <span className="text-[7.5px] font-semibold text-ink-500">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-ink-700">{label}</span>
        <span className="text-[10px] font-bold text-navy-900">{value}/10</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-black/5">
        <div
          style={{ width: `${value * 10}%` }}
          className="h-full rounded-full bg-gradient-to-r from-violet-glow to-cyan-glow"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboards / mockups                                                 */
/* ------------------------------------------------------------------ */

export function DashboardMockup() {
  const stats = [
    { icon: <Eye className="h-3 w-3" />, label: "Impressions", value: "84.2K" },
    { icon: <MousePointerClick className="h-3 w-3" />, label: "Outbound Clicks", value: "3,140" },
    { icon: <Bookmark className="h-3 w-3" />, label: "Saves", value: "1,920" },
    { icon: <DollarSign className="h-3 w-3" />, label: "Est. Commission", value: "$612" },
  ];
  return (
    <div className="rounded-xl bg-navy-950 p-4 text-white shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[10px] font-bold uppercase tracking-wider text-white/70">
          Pinterest Analytics — Last 30 Days
        </p>
        <span className="rounded-full bg-cyan-glow/20 px-2 py-0.5 text-[8px] font-bold text-cyan-glow">Live</span>
      </div>
      <div className="mb-3 grid grid-cols-4 gap-2">
        {stats.map((s, i) => (
          <div key={i} className="rounded-lg bg-white/5 p-2">
            <div className="flex items-center gap-1 text-cyan-glow">{s.icon}</div>
            <p className="mt-1 font-display text-[11px] font-extrabold">{s.value}</p>
            <p className="text-[7px] uppercase tracking-wide text-white/50">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-white/5 p-2">
        <GrowthChart />
      </div>
    </div>
  );
}

export function ProfileMockup({
  variant,
}: {
  variant: "bad" | "good";
}) {
  const good = variant === "good";
  return (
    <div
      className={`rounded-xl p-3 shadow-sm ring-1 ${
        good ? "bg-white ring-violet-glow/30" : "bg-white ring-black/5 opacity-90"
      }`}
    >
      <div className="mb-2 flex items-center gap-2">
        <div
          className={`h-8 w-8 rounded-full ${
            good ? "bg-gradient-to-br from-violet-glow to-cyan-glow" : "bg-ink-500/30"
          }`}
        />
        <div>
          <p className="text-[9.5px] font-bold text-navy-900">
            {good ? "Sara | Pinterest Marketing Tips" : "sara_2024"}
          </p>
          <p className="text-[8px] text-ink-500">
            {good ? "Helping beginners grow with Pinterest SEO ✨" : "just a girl who likes stuff"}
          </p>
        </div>
      </div>
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-10 flex-1 rounded-md ${
              good ? `bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]}` : "bg-ink-500/10"
            }`}
          />
        ))}
      </div>
      <p className={`mt-2 text-center text-[8px] font-bold ${good ? "text-violet-glow" : "text-ink-500"}`}>
        {good ? "Keyword-rich · Niche-clear · Trustworthy" : "No keywords · Unclear niche · Low trust"}
      </p>
    </div>
  );
}

export function KeywordMap({
  seed,
  branches,
}: {
  seed: string;
  branches: string[];
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-violet-glow text-center shadow-md">
        <span className="px-1 text-[9px] font-bold leading-tight text-white">{seed}</span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        {branches.map((b, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="h-px w-3 bg-violet-glow/40" />
            <div className="flex items-center gap-1 rounded-md bg-white px-2 py-1 shadow-sm ring-1 ring-black/5">
              <Search className="h-2.5 w-2.5 text-cyan-700" />
              <span className="text-[8.5px] font-semibold text-ink-700">{b}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WeeklyCalendar({ days }: { days: { day: string; content: string }[] }) {
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {days.map((d, i) => (
        <div key={i} className="rounded-lg bg-white p-1.5 text-center shadow-sm ring-1 ring-black/5">
          <p className="text-[7.5px] font-extrabold uppercase tracking-wide text-violet-glow">{d.day}</p>
          <div className={`my-1 h-8 w-full rounded bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} opacity-80`} />
          <p className="text-[6.5px] font-semibold leading-tight text-ink-700">{d.content}</p>
        </div>
      ))}
    </div>
  );
}

export function RoadmapTimeline({
  phases,
}: {
  phases: { range: string; title: string; items: string[] }[];
}) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {phases.map((p, i) => (
        <div key={i} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
          <div
            className={`mb-2 inline-block rounded-full bg-gradient-to-r ${GRADIENTS[i % GRADIENTS.length]} px-2 py-0.5 text-[8px] font-bold text-white`}
          >
            {p.range}
          </div>
          <p className="mb-1.5 text-[10px] font-extrabold text-navy-900">{p.title}</p>
          <ul className="space-y-1">
            {p.items.map((it, j) => (
              <li key={j} className="text-[8.5px] leading-snug text-ink-700">
                • {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function CommissionFlow() {
  return (
    <FlowSteps
      steps={[
        { label: "Pin Seen", icon: <Eye className="h-3.5 w-3.5" /> },
        { label: "Pin Clicked", icon: <MousePointerClick className="h-3.5 w-3.5" /> },
        { label: "Offer Viewed", icon: <Search className="h-3.5 w-3.5" /> },
        { label: "Purchase", icon: <DollarSign className="h-3.5 w-3.5" /> },
        { label: "Commission", icon: <TrendingUp className="h-3.5 w-3.5" /> },
      ]}
    />
  );
}
