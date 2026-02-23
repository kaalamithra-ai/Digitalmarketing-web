export type ResourceCategory = "blogs" | "ai-trends" | "marketing-guides";

export type ResourceEntry = {
  category: ResourceCategory;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  tags: string[];
  contentSections: { heading: string; body: string }[];
};

export const resources: ResourceEntry[] = [
  {
    category: "blogs",
    slug: "how-to-build-a-full-funnel-growth-engine",
    title: "How to Build a Full-Funnel Growth Engine",
    excerpt: "A practical framework for aligning awareness, demand capture, and retention into one operating system.",
    author: "KaalaMithra Editorial",
    date: "2026-01-12",
    readingTime: "8 min read",
    tags: ["Growth Strategy", "Funnel", "Performance"],
    contentSections: [
      {
        heading: "Why Full-Funnel Matters",
        body: "Channel-level optimizations look efficient in isolation, but sustained growth comes from connecting the full customer journey end to end.",
      },
      {
        heading: "Build Shared Metrics",
        body: "Create a common set of metrics across marketing and sales so teams optimize toward pipeline quality and revenue contribution.",
      },
      {
        heading: "Establish Weekly Learning Loops",
        body: "Treat campaign and content planning as a cadence of tests, not one-time launches. Use weekly readouts to reallocate budget quickly.",
      },
    ],
  },
  {
    category: "blogs",
    slug: "messaging-that-improves-paid-performance",
    title: "Messaging That Improves Paid Performance",
    excerpt: "Why message-market fit is the multiplier behind CPA and ROAS improvements.",
    author: "KaalaMithra Editorial",
    date: "2025-12-04",
    readingTime: "6 min read",
    tags: ["Creative", "Paid Media", "Conversion"],
    contentSections: [
      {
        heading: "Start with Buyer Tensions",
        body: "High-converting messaging acknowledges real buyer constraints and offers a clear before-after transformation.",
      },
      {
        heading: "Map Message to Landing Experience",
        body: "Message mismatch is a common hidden cause of wasted spend. Align ad promise to immediate on-page proof.",
      },
    ],
  },
  {
    category: "blogs",
    slug: "dashboards-that-drive-real-decisions",
    title: "Dashboards That Drive Real Decisions",
    excerpt: "Design reporting that tells teams what to do next, not just what happened.",
    author: "KaalaMithra Editorial",
    date: "2025-10-21",
    readingTime: "7 min read",
    tags: ["Analytics", "Reporting", "Operations"],
    contentSections: [
      {
        heading: "From Vanity to Decision Metrics",
        body: "Avoid overloading dashboards with disconnected KPIs. Prioritize metrics that directly inform budget, creative, and funnel changes.",
      },
      {
        heading: "Narrative + Numbers",
        body: "Data without interpretation slows action. Pair every metric block with a concise takeaway and next step.",
      },
    ],
  },
  {
    category: "ai-trends",
    slug: "ai-creative-testing-at-scale",
    title: "AI Creative Testing at Scale",
    excerpt: "How marketing teams are using AI-assisted workflows to accelerate concept generation and iteration cycles.",
    author: "Research Team",
    date: "2026-02-02",
    readingTime: "9 min read",
    tags: ["AI", "Creative", "Experimentation"],
    contentSections: [
      {
        heading: "Where AI Helps Most",
        body: "AI adds the most value at ideation and pattern analysis stages, while human strategy and brand judgment remain essential.",
      },
      {
        heading: "Guardrails for Quality",
        body: "Set strict tone, positioning, and compliance constraints so generated assets remain useful and on-brand.",
      },
    ],
  },
  {
    category: "ai-trends",
    slug: "predictive-segmentation-for-retention",
    title: "Predictive Segmentation for Retention",
    excerpt: "Using behavior signals and model-based segmentation to prioritize lifecycle interventions.",
    author: "Research Team",
    date: "2026-01-18",
    readingTime: "7 min read",
    tags: ["AI", "Retention", "Lifecycle"],
    contentSections: [
      {
        heading: "High-Impact Segments",
        body: "Focus model output on actionable segments, such as churn-risk or upsell-ready cohorts, rather than abstract clusters.",
      },
      {
        heading: "Operational Integration",
        body: "Retention gains happen when predictive signals are connected to automation workflows and campaign playbooks.",
      },
    ],
  },
  {
    category: "ai-trends",
    slug: "ai-assisted-seo-workflows",
    title: "AI-Assisted SEO Workflows",
    excerpt: "Combining AI-assisted research with human editorial rigor for stronger organic performance.",
    author: "Research Team",
    date: "2025-11-29",
    readingTime: "8 min read",
    tags: ["AI", "SEO", "Content"],
    contentSections: [
      {
        heading: "Research Speed vs Content Quality",
        body: "AI can dramatically reduce discovery time, but topical depth and differentiation still depend on subject-matter framing.",
      },
      {
        heading: "Editorial QA Loop",
        body: "A structured QA process preserves trust and search performance while scaling content production.",
      },
    ],
  },
  {
    category: "marketing-guides",
    slug: "performance-marketing-playbook",
    title: "Performance Marketing Playbook",
    excerpt: "A step-by-step operating guide for building reliable paid acquisition programs.",
    author: "Strategy Team",
    date: "2025-12-26",
    readingTime: "10 min read",
    tags: ["Guide", "PPC", "Measurement"],
    contentSections: [
      {
        heading: "Foundation Setup",
        body: "Start with clean tracking, conversion taxonomy, and account structure before increasing spend.",
      },
      {
        heading: "Optimization Rhythm",
        body: "Run weekly optimization cycles by channel and monthly strategic reviews by funnel stage.",
      },
    ],
  },
  {
    category: "marketing-guides",
    slug: "seo-content-roadmap-guide",
    title: "SEO Content Roadmap Guide",
    excerpt: "How to prioritize and sequence SEO + content initiatives for compounding demand.",
    author: "Strategy Team",
    date: "2025-10-09",
    readingTime: "9 min read",
    tags: ["Guide", "SEO", "Content Strategy"],
    contentSections: [
      {
        heading: "Prioritization Model",
        body: "Rank initiatives by intent quality, business relevance, and effort to build a realistic quarterly roadmap.",
      },
      {
        heading: "Execution Governance",
        body: "Define ownership and timelines for brief creation, production, optimization, and refresh cycles.",
      },
    ],
  },
  {
    category: "marketing-guides",
    slug: "b2b-demand-gen-guide",
    title: "B2B Demand Generation Guide",
    excerpt: "A practical guide to building demand programs across paid, organic, and lifecycle channels.",
    author: "Strategy Team",
    date: "2025-08-30",
    readingTime: "11 min read",
    tags: ["Guide", "B2B", "Demand Gen"],
    contentSections: [
      {
        heading: "Demand vs Capture",
        body: "Separate awareness-building programs from conversion-capture programs while keeping measurement connected.",
      },
      {
        heading: "Pipeline-Centric Measurement",
        body: "Track marketing influence on opportunity creation and velocity to avoid over-optimizing top-of-funnel metrics.",
      },
    ],
  },
];
