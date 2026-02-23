export type CaseStudy = {
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  services: string[];
  duration: string;
  heroMetric: string;
  challenge: string;
  solution: string[];
  results: { label: string; value: string }[];
  tools: string[];
  timeline: string[];
  testimonialId?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-pipeline-growth",
    title: "SaaS Pipeline Growth",
    clientType: "B2B SaaS",
    industry: "Software",
    services: ["Performance Marketing", "SEO", "CRO", "Analytics"],
    duration: "6 months",
    heroMetric: "+184% qualified pipeline",
    challenge:
      "The client had strong product-market fit but inconsistent pipeline quality and fragmented channel reporting.",
    solution: [
      "Built a unified funnel and attribution map across paid search, paid social, and organic.",
      "Launched high-intent landing page clusters with message-match by audience segment.",
      "Introduced weekly creative and keyword test cycles tied to MQL-to-SQL conversion.",
      "Aligned dashboards to pipeline contribution and sales velocity, not just lead volume.",
    ],
    results: [
      { label: "Qualified Pipeline", value: "+184%" },
      { label: "Cost Per SQL", value: "-31%" },
      { label: "Landing Conversion", value: "+42%" },
    ],
    tools: ["Google Ads", "LinkedIn Ads", "GA4", "Looker Studio", "HubSpot"],
    timeline: ["Discovery & Audit", "Funnel Design", "Campaign Launch", "Optimization"],
    testimonialId: "aarti-sharma-finedge",
  },
  {
    slug: "ecommerce-revenue-lift",
    title: "Ecommerce Revenue Lift",
    clientType: "D2C Ecommerce",
    industry: "Retail",
    services: ["Performance Marketing", "Marketing Automation", "Creative Strategy"],
    duration: "4 months",
    heroMetric: "3.2x blended ROAS",
    challenge:
      "The brand was spending heavily on acquisition but lacked a profitable retention engine and clear creative direction.",
    solution: [
      "Rebuilt campaign architecture around product-margin tiers and seasonality.",
      "Launched ad creative testing system with weekly winners and rapid iteration.",
      "Implemented lifecycle automation flows for browse, cart, and post-purchase journeys.",
      "Set up cohort-based revenue dashboards for channel and retention analysis.",
    ],
    results: [
      { label: "Blended ROAS", value: "3.2x" },
      { label: "Repeat Purchase Rate", value: "+27%" },
      { label: "Acquisition CPA", value: "-22%" },
    ],
    tools: ["Meta Ads", "Google Ads", "Klaviyo", "Shopify", "GA4"],
    timeline: ["Audit", "Architecture", "Creative Testing", "Lifecycle Scaling"],
    testimonialId: "dev-patel-mintstreet",
  },
  {
    slug: "b2b-cac-improvement",
    title: "B2B CAC Improvement",
    clientType: "B2B Services",
    industry: "Professional Services",
    services: ["SEO", "Content Marketing", "Performance Marketing", "Analytics"],
    duration: "5 months",
    heroMetric: "-40% CAC",
    challenge:
      "The business was growing, but customer acquisition cost kept rising while lead quality remained uneven.",
    solution: [
      "Mapped core ICP segments and rebuilt channel messaging by pain-point and intent.",
      "Created a content and landing ecosystem targeting high-conversion query clusters.",
      "Introduced full-funnel KPI scorecards and budget reallocation by efficiency.",
      "Trained internal team on weekly decision cadences using unified reporting.",
    ],
    results: [
      { label: "Customer Acquisition Cost", value: "-40%" },
      { label: "SQL Rate", value: "+35%" },
      { label: "Organic Assisted Pipeline", value: "+58%" },
    ],
    tools: ["Search Console", "GA4", "Ahrefs", "Google Ads", "CRM"],
    timeline: ["Positioning", "Content Build", "Paid Optimization", "Scale"],
    testimonialId: "rohan-gill-novalabs",
  },
  {
    slug: "social-demand-acceleration",
    title: "Social Demand Acceleration",
    clientType: "Consumer Brand",
    industry: "Lifestyle",
    services: ["Social Media", "Paid Social", "Creative"],
    duration: "3 months",
    heroMetric: "+71% engagement-to-lead rate",
    challenge:
      "The brand had growing social reach but weak conversion pathways from engagement to qualified demand.",
    solution: [
      "Built a social content matrix aligned to awareness, consideration, and conversion goals.",
      "Connected paid social retargeting to top-performing organic themes and formats.",
      "Implemented short-form creative sprints and CTA sequencing across channels.",
      "Set up weekly performance review rituals with rapid content refresh.",
    ],
    results: [
      { label: "Engagement-to-Lead Rate", value: "+71%" },
      { label: "Cost Per Lead", value: "-24%" },
      { label: "Follower Growth", value: "+38%" },
    ],
    tools: ["Meta", "LinkedIn", "Canva", "GA4", "Looker Studio"],
    timeline: ["Strategy", "Production", "Activation", "Optimization"],
    testimonialId: "neha-kapoor-purely",
  },
];
