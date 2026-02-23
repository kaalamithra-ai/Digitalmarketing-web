import type { ServiceKind } from "@/components/services/ServiceIcon";

export const SERVICE_DETAIL_SLUGS = [
  "digital-marketing",
  "seo",
  "seo-optimization",
  "performance-marketing",
  "social-media-marketing",
  "marketing-automation-analysis",
  "mobile-marketing",
  "email-marketing",
  "content-marketing",
  "remarketing-retargeting",
] as const;

export type ServiceDetailSlug = (typeof SERVICE_DETAIL_SLUGS)[number];

export type ServiceDetail = {
  slug: ServiceDetailSlug;
  title: string;
  subtitle: string;
  chips: [string, string, string];
  accent: { from: string; to: string };
  illustrationKind: ServiceKind;
  imageSrc: string;
  whatYouGet: { title: string; description: string }[];
  processSteps: { title: string; description: string }[];
  deliverables: string[];
  kpiImpact: { label: string; value: string; description: string }[];
  faq: { q: string; a: string }[];
};

const seoDetail: ServiceDetail = {
  slug: "seo",
  title: "SEO",
  subtitle:
    "Improve visibility with technical SEO, intent-based content strategy, and authority signals that compound over time.",
  chips: ["SEO Boost", "Organic Growth", "Technical + Content"],
  accent: { from: "#16a34a", to: "#22d3ee" },
  illustrationKind: "seo",
  imageSrc: "/services/service-seo-B1t0muHw.png",
  whatYouGet: [
    { title: "Technical Foundations", description: "Crawl, indexation, speed, schema, and architecture optimization." },
    { title: "Intent Mapping", description: "Keyword clustering mapped to business outcomes and funnel stage." },
    { title: "Content Performance", description: "Content briefs and page updates focused on rankings and conversions." },
    { title: "Authority Growth", description: "Internal linking and quality authority-building execution plan." },
  ],
  processSteps: [
    { title: "Audit", description: "Benchmark your current SEO stack, rankings, and technical gaps." },
    { title: "Strategy", description: "Prioritize high-impact opportunities by intent and competition." },
    { title: "Execution", description: "Ship technical and content updates in focused delivery sprints." },
    { title: "Optimization", description: "Track movement and refine pages for sustained growth." },
  ],
  deliverables: [
    "Technical SEO audit",
    "Keyword opportunity map",
    "On-page optimization stack",
    "Content brief library",
    "Internal linking framework",
    "Schema implementation notes",
    "Local SEO checklist",
    "Monthly SEO report",
  ],
  kpiImpact: [
    { label: "Organic Sessions", value: "+210%", description: "Growth in high-intent organic traffic over 6 months." },
    { label: "Top 10 Keywords", value: "+145", description: "Increase in keyword positions across priority pages." },
    { label: "Organic Leads", value: "+96%", description: "Lift in qualified leads from organic channels." },
  ],
  faq: [
    { q: "How long does SEO take to show impact?", a: "You can see technical and ranking movement in weeks, with stronger compounding impact usually visible by month 3." },
    { q: "Do you handle both technical and content SEO?", a: "Yes. We combine technical execution with content strategy so results are scalable and measurable." },
    { q: "How do you measure SEO ROI?", a: "We connect rankings and traffic to lead quality, conversion events, and business outcomes." },
  ],
};

export const SERVICE_DETAILS: Record<ServiceDetailSlug, ServiceDetail> = {
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle:
      "AI-first marketing systems that align acquisition, conversion, and retention into a predictable growth engine.",
    chips: ["AI Powered", "Full Funnel", "Outcome Focused"],
    accent: { from: "#14b8a6", to: "#8b5cf6" },
    illustrationKind: "digital",
    imageSrc: "/services/service-digital-marketing-DgTBPFKC.png",
    whatYouGet: [
      { title: "Growth Strategy", description: "Clear channel and messaging roadmap tied to business goals." },
      { title: "Channel Execution", description: "Search, social, email, and content programs under one system." },
      { title: "Creative Testing", description: "Structured experimentation to improve conversion performance." },
      { title: "Performance Reporting", description: "Weekly and monthly insights with action-led recommendations." },
    ],
    processSteps: [
      { title: "Discovery", description: "Understand your market, audience, and growth constraints." },
      { title: "Planning", description: "Design the right channel mix and KPI model for your stage." },
      { title: "Launch", description: "Activate campaigns, assets, and tracking frameworks." },
      { title: "Scale", description: "Reallocate spend toward highest-return opportunities." },
    ],
    deliverables: [
      "Growth strategy deck",
      "Campaign launch framework",
      "Audience segmentation",
      "Creative testing matrix",
      "Performance dashboard",
      "Funnel optimization roadmap",
      "Attribution insights",
      "Monthly review report",
    ],
    kpiImpact: [
      { label: "Pipeline Growth", value: "+180%", description: "Qualified pipeline expansion in active programs." },
      { label: "Acquisition Cost", value: "-32%", description: "Reduction in blended customer acquisition cost." },
      { label: "Conversion Lift", value: "+41%", description: "Higher lead-to-opportunity conversion rates." },
    ],
    faq: [
      { q: "What makes your digital marketing approach different?", a: "We focus on measurable systems, not isolated campaigns, so growth becomes repeatable." },
      { q: "Can this work with our in-house team?", a: "Yes. We can operate as an extension of your team or lead end-to-end execution." },
      { q: "How quickly can we start?", a: "Most engagements begin with discovery and strategy alignment within the first week." },
    ],
  },
  seo: seoDetail,
  "seo-optimization": { ...seoDetail, slug: "seo-optimization" },
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing",
    subtitle:
      "ROI-driven paid media across search and social with disciplined testing, budget control, and conversion optimization.",
    chips: ["+240% ROAS", "Paid Media", "Real-Time Optimization"],
    accent: { from: "#f97316", to: "#ef4444" },
    illustrationKind: "performance",
    imageSrc: "/services/service-performance-ktslITiU.png",
    whatYouGet: [
      { title: "Campaign Architecture", description: "Scalable paid setup for search, social, and display." },
      { title: "Audience Strategy", description: "High-intent segments by persona, behavior, and funnel stage." },
      { title: "Conversion Tracking", description: "Reliable event tracking and attribution mapping." },
      { title: "Budget Intelligence", description: "Continuous bid and spend optimization for stronger ROAS." },
    ],
    processSteps: [
      { title: "Plan", description: "Set goals, budgets, and platform strategy with KPI targets." },
      { title: "Build", description: "Launch accounts, audiences, creative sets, and tracking." },
      { title: "Test", description: "Run controlled tests on offers, audiences, and creatives." },
      { title: "Scale", description: "Expand winners and reduce waste through weekly optimization." },
    ],
    deliverables: [
      "Paid media plan",
      "Campaign build sheets",
      "Audience matrix",
      "Creative variants",
      "Bid strategy settings",
      "Conversion tracking QA",
      "ROAS analysis",
      "Weekly optimization log",
      "Monthly business report",
    ],
    kpiImpact: [
      { label: "ROAS", value: "4.6x", description: "Average return achieved across mature campaign sets." },
      { label: "CPA Reduction", value: "-38%", description: "Cost efficiency improvements through test iteration." },
      { label: "Lead Volume", value: "+123%", description: "Scalable increase in qualified lead output." },
    ],
    faq: [
      { q: "Which platforms do you manage?", a: "Google, Meta, LinkedIn, and additional channels based on fit and performance." },
      { q: "How often do you optimize campaigns?", a: "Campaigns are monitored daily with structured weekly optimization cycles." },
      { q: "Can you improve underperforming ad accounts?", a: "Yes. We diagnose structural issues and rebuild for predictable performance." },
    ],
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    subtitle:
      "Brand and demand growth through strategic content, platform-native creative, and high-quality audience engagement.",
    chips: ["+3.2M Reach", "Creative Engine", "Community Growth"],
    accent: { from: "#6366f1", to: "#22c55e" },
    illustrationKind: "social",
    imageSrc: "/services/service-social-media-P4dXjYOT.png",
    whatYouGet: [
      { title: "Platform Strategy", description: "Role clarity for Instagram, LinkedIn, Facebook, and X." },
      { title: "Content Systems", description: "Always-on publishing cadence with clear content pillars." },
      { title: "Creative Direction", description: "Platform-first visuals and messaging for stronger engagement." },
      { title: "Growth Reporting", description: "Performance visibility tied to audience and lead outcomes." },
    ],
    processSteps: [
      { title: "Position", description: "Define voice, themes, and conversion goals." },
      { title: "Produce", description: "Create monthly content assets and campaign creatives." },
      { title: "Publish", description: "Distribute with timing and format precision." },
      { title: "Improve", description: "Optimize by engagement and assisted-conversion data." },
    ],
    deliverables: [
      "Social growth blueprint",
      "Monthly content calendar",
      "Creative concept board",
      "Caption bank",
      "Community response matrix",
      "Platform KPI dashboard",
      "Engagement review",
      "Monthly insights deck",
    ],
    kpiImpact: [
      { label: "Monthly Reach", value: "+3.2M", description: "Sustained visibility growth across priority platforms." },
      { label: "Engagement Rate", value: "+67%", description: "Improvement in meaningful audience interactions." },
      { label: "Social Leads", value: "+54%", description: "Lift in lead flow from social programs." },
    ],
    faq: [
      { q: "Do you also create content?", a: "Yes. Strategy, creative production, publishing, and optimization are included." },
      { q: "Can social drive qualified leads?", a: "Yes. With the right offer and funnel integration, social can be a consistent lead source." },
      { q: "Do you manage paid social too?", a: "Yes. Organic and paid social can run as one coordinated growth system." },
    ],
  },
  "marketing-automation-analysis": {
    slug: "marketing-automation-analysis",
    title: "Marketing automation & analysis",
    subtitle:
      "Workflow automation and performance analytics that improve speed, reduce manual effort, and strengthen decision-making.",
    chips: ["AI Workflow", "Automation", "Data Intelligence"],
    accent: { from: "#3b82f6", to: "#8b5cf6" },
    illustrationKind: "automation",
    imageSrc: "/services/service-automation-D9GQDyKA.png",
    whatYouGet: [
      { title: "Workflow Mapping", description: "End-to-end journey automation design based on lifecycle events." },
      { title: "Lead Qualification", description: "Scoring and prioritization to improve sales response quality." },
      { title: "Attribution Layer", description: "Track channel contribution with cleaner decision signals." },
      { title: "Optimization Loops", description: "Ongoing analysis with actionable weekly improvements." },
    ],
    processSteps: [
      { title: "Map", description: "Identify repetitive tasks and key automation triggers." },
      { title: "Build", description: "Configure systems, workflows, and data sync layers." },
      { title: "Measure", description: "Monitor performance and bottleneck trends." },
      { title: "Optimize", description: "Improve workflows using behavioral and KPI insights." },
    ],
    deliverables: [
      "Automation architecture",
      "Journey workflow docs",
      "Lead scoring model",
      "Attribution dashboard",
      "Alerting setup",
      "Performance diagnostics",
      "Optimization backlog",
      "Monthly insights summary",
    ],
    kpiImpact: [
      { label: "Time Saved", value: "29 hrs/wk", description: "Operational time reduced via automated workflows." },
      { label: "Response Speed", value: "-58%", description: "Faster lead follow-up with better qualification logic." },
      { label: "Retention Lift", value: "+24%", description: "Improved retention through smarter journey orchestration." },
    ],
    faq: [
      { q: "Will automation replace our team?", a: "No. It removes repetitive tasks so your team can focus on high-value work." },
      { q: "Can this work with our current tools?", a: "Yes. We design around your existing CRM and marketing stack." },
      { q: "How frequently do you review analytics?", a: "Performance reviews are ongoing with structured weekly and monthly reporting." },
    ],
  },
  "mobile-marketing": {
    slug: "mobile-marketing",
    title: "Mobile Marketing",
    subtitle:
      "Mobile-first campaigns built for high-intent engagement across app, web, push, and SMS touchpoints.",
    chips: ["Mobile First", "Real-Time Reach", "Behavior Driven"],
    accent: { from: "#0ea5e9", to: "#8b5cf6" },
    illustrationKind: "mobile",
    imageSrc: "/services/service-mobile-BTouDMEG.png",
    whatYouGet: [
      { title: "Mobile Segmentation", description: "User groups by behavior, location, and intent." },
      { title: "Message Strategy", description: "Channel-ready messaging for push, SMS, and in-app." },
      { title: "Mobile UX Inputs", description: "Landing and flow recommendations for stronger conversion." },
      { title: "Cross-Device Insights", description: "Attribution visibility across user touchpoints." },
    ],
    processSteps: [
      { title: "Research", description: "Understand mobile behavior and drop-off patterns." },
      { title: "Design", description: "Create channel-specific campaigns and messaging." },
      { title: "Launch", description: "Activate mobile campaigns with tracking in place." },
      { title: "Optimize", description: "Improve outcomes through iterative audience and creative tuning." },
    ],
    deliverables: [
      "Mobile strategy doc",
      "Audience segments",
      "Messaging flows",
      "Push/SMS campaign setup",
      "Mobile creative assets",
      "UX improvement checklist",
      "Attribution report",
      "Optimization summary",
    ],
    kpiImpact: [
      { label: "Mobile CTR", value: "+49%", description: "Improvement in mobile click-through rates." },
      { label: "Mobile Conversion", value: "+37%", description: "Increase in conversion from mobile traffic." },
      { label: "Re-engagement", value: "+42%", description: "Higher repeat activity through targeted follow-ups." },
    ],
    faq: [
      { q: "Is mobile marketing only for apps?", a: "No. It includes mobile web, messaging, and paid campaigns." },
      { q: "Can you run location-based campaigns?", a: "Yes. We use geolocation logic where it supports conversion outcomes." },
      { q: "How do you improve mobile funnel quality?", a: "By aligning message, landing speed, and intent-based targeting." },
    ],
  },
  "email-marketing": {
    slug: "email-marketing",
    title: "Email Marketing",
    subtitle:
      "Lifecycle email programs that improve lead nurture, retention, and revenue with personalized sequencing.",
    chips: ["High CTR", "Lifecycle Journeys", "Retention Focused"],
    accent: { from: "#16a34a", to: "#f97316" },
    illustrationKind: "email",
    imageSrc: "/services/service-email-ZNd5oL_I.png",
    whatYouGet: [
      { title: "Journey Design", description: "Welcome, nurture, conversion, and win-back email flows." },
      { title: "Segmentation Logic", description: "Behavioral and lifecycle segmentation for message relevance." },
      { title: "Template System", description: "Readable, conversion-focused templates and copy." },
      { title: "Deliverability Support", description: "Inbox placement monitoring and hygiene controls." },
    ],
    processSteps: [
      { title: "Segment", description: "Define audience groups with clear engagement intent." },
      { title: "Create", description: "Write and design campaigns aligned to user stage." },
      { title: "Automate", description: "Deploy trigger-based journeys and testing controls." },
      { title: "Refine", description: "Improve clicks, conversions, and retention over time." },
    ],
    deliverables: [
      "Email lifecycle map",
      "Audience segmentation matrix",
      "Template kit",
      "Campaign copy bank",
      "Automation setup",
      "Deliverability checklist",
      "A/B test log",
      "Performance report",
    ],
    kpiImpact: [
      { label: "Email Revenue", value: "+68%", description: "Increase in revenue from lifecycle email." },
      { label: "Click Rate", value: "+44%", description: "Higher click-through across priority sequences." },
      { label: "Unsubscribe Rate", value: "-26%", description: "Reduced churn through better targeting and timing." },
    ],
    faq: [
      { q: "Is email still effective for growth?", a: "Yes. Email remains one of the strongest ROI channels when mapped to lifecycle behavior." },
      { q: "Do you handle copy and design?", a: "Yes. We provide strategy, copywriting, design, and optimization." },
      { q: "Can email integrate with paid campaigns?", a: "Yes. We align email flows with broader demand and remarketing efforts." },
    ],
  },
  "content-marketing": {
    slug: "content-marketing",
    title: "Content Marketing",
    subtitle:
      "Strategic content systems designed to attract qualified audiences, build authority, and drive compounding demand.",
    chips: ["Content Engine", "SEO Aligned", "Demand Building"],
    accent: { from: "#8b5cf6", to: "#14b8a6" },
    illustrationKind: "content",
    imageSrc: "/services/service-content-QcgO-PdB.png",
    whatYouGet: [
      { title: "Editorial Strategy", description: "Topic clusters aligned to audience intent and funnel goals." },
      { title: "Asset Production", description: "High-value blogs, pages, and supporting content formats." },
      { title: "Distribution Layer", description: "Repurposing and channel distribution for stronger reach." },
      { title: "Performance Insights", description: "Topic-level reporting to guide future content investments." },
    ],
    processSteps: [
      { title: "Research", description: "Identify demand gaps and topic opportunities." },
      { title: "Plan", description: "Build a practical editorial pipeline." },
      { title: "Publish", description: "Launch optimized assets in a consistent cadence." },
      { title: "Optimize", description: "Refine by performance and conversion signals." },
    ],
    deliverables: [
      "Content roadmap",
      "Editorial calendar",
      "SEO briefs",
      "Long-form assets",
      "Website copy updates",
      "Social repurposing kit",
      "Topic performance dashboard",
      "Monthly content report",
    ],
    kpiImpact: [
      { label: "Qualified Traffic", value: "+132%", description: "Growth in intent-led traffic from content channels." },
      { label: "Engagement Time", value: "+39%", description: "Higher average engagement on key pages." },
      { label: "Assisted Leads", value: "+58%", description: "Increase in leads influenced by content touchpoints." },
    ],
    faq: [
      { q: "How does content support revenue?", a: "We map content to funnel stages and track its influence on lead and conversion outcomes." },
      { q: "Do you create strategy and execution both?", a: "Yes. We handle planning, production, distribution, and optimization." },
      { q: "Will content also improve SEO?", a: "Yes. Our content strategy is tightly integrated with SEO intent and structure." },
    ],
  },
  "remarketing-retargeting": {
    slug: "remarketing-retargeting",
    title: "Remarketing and Retargeting",
    subtitle:
      "Recover missed demand with personalized re-engagement across paid and owned channels to improve conversion efficiency.",
    chips: ["Retarget Pro", "Conversion Recovery", "Cross-Channel"],
    accent: { from: "#f97316", to: "#0ea5e9" },
    illustrationKind: "remarketing",
    imageSrc: "/services/service-retargeting-CxO8OQYr.png",
    whatYouGet: [
      { title: "Audience Recovery", description: "Segments based on behavior, recency, and buying intent." },
      { title: "Personalized Sequences", description: "Creative and messaging tuned to drop-off stage." },
      { title: "Channel Orchestration", description: "Retargeting across search, social, and email touchpoints." },
      { title: "Frequency Controls", description: "Cadence and fatigue management to protect efficiency." },
    ],
    processSteps: [
      { title: "Track", description: "Validate events and audience creation rules." },
      { title: "Segment", description: "Build intent-based groups for tailored messaging." },
      { title: "Activate", description: "Launch multi-channel retargeting campaigns." },
      { title: "Recover", description: "Optimize for conversion recapture and ROAS lift." },
    ],
    deliverables: [
      "Retargeting strategy map",
      "Audience matrix",
      "Creative sequence plan",
      "Frequency guardrails",
      "Cross-channel campaign setup",
      "Performance dashboard",
      "Incrementality review",
      "Monthly conversion recovery report",
    ],
    kpiImpact: [
      { label: "Recovered Conversions", value: "+61%", description: "Lift in recovered conversions from warm audiences." },
      { label: "Return ROAS", value: "5.2x", description: "Average return from retargeting campaign groups." },
      { label: "Cart Recovery", value: "+47%", description: "Higher checkout completion from recovery journeys." },
    ],
    faq: [
      { q: "What is the difference between remarketing and retargeting?", a: "Retargeting typically focuses on ads; remarketing can include owned channels like email and SMS." },
      { q: "How do you prevent ad fatigue?", a: "We use frequency caps, sequencing, and creative rotation logic." },
      { q: "Can retargeting improve profitability?", a: "Yes. Warm-audience conversion often delivers stronger economics than cold acquisition." },
    ],
  },
};

export function isServiceDetailSlug(slug: string): slug is ServiceDetailSlug {
  return SERVICE_DETAIL_SLUGS.includes(slug as ServiceDetailSlug);
}
