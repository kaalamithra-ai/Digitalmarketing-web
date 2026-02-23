export const SERVICE_SLUGS = [
  "digital-marketing",
  "seo",
  "performance-marketing",
  "social-media-marketing",
  "marketing-automation-analysis",
  "mobile-marketing",
  "email-marketing",
  "content-marketing",
  "remarketing-retargeting",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type ServiceData = {
  title: string;
  subtitle: string;
  badge: string;
  accent: { from: string; to: string };
  whatYouGet: string[];
  process: { title: string; desc: string }[];
  deliverables: string[];
  kpis: { label: string; value: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Record<ServiceSlug, ServiceData> = {
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle:
      "Integrated strategy across channels to attract qualified demand, improve conversion quality, and scale revenue with predictable execution.",
    badge: "AI Powered",
    accent: { from: "#14b8a6", to: "#8b5cf6" },
    whatYouGet: [
      "Full-funnel growth roadmap aligned to business goals",
      "Channel mix planning for search, social, email, and content",
      "Creative and messaging framework by audience stage",
      "Weekly optimization cadence with clear ownership",
      "Conversion-focused landing page and funnel recommendations",
      "Executive reporting with revenue attribution view",
    ],
    process: [
      { title: "Discovery", desc: "Audit your current channels, market position, and conversion flow to identify quick wins and structural gaps." },
      { title: "Strategy", desc: "Define audience segments, offer positioning, and channel priorities with measurable quarterly targets." },
      { title: "Execution", desc: "Launch campaign systems, creative iterations, and funnel improvements with sprint-based delivery." },
      { title: "Optimization", desc: "Refine spend allocation, creatives, and funnel touchpoints using live performance insights." },
    ],
    deliverables: [
      "Growth strategy deck",
      "Channel activation plan",
      "Campaign calendar",
      "Creative testing matrix",
      "Funnel improvement plan",
      "Monthly executive report",
    ],
    kpis: [
      { label: "Pipeline Growth", value: "+180%", desc: "Qualified lead pipeline expansion in 6 months." },
      { label: "Cost Efficiency", value: "-32%", desc: "Average reduction in blended acquisition cost." },
      { label: "Conversion Lift", value: "+41%", desc: "Improvement in lead-to-opportunity rate." },
    ],
    faqs: [
      { q: "How quickly can we see results?", a: "Initial traction appears in 4 to 8 weeks, while compounding channel gains typically become clear in 2 to 3 months." },
      { q: "Do you handle execution or only strategy?", a: "We provide both. Your team gets planning, hands-on execution, and optimization under one operating model." },
      { q: "How do you report performance?", a: "You receive weekly operational updates and monthly executive summaries tied to business outcomes." },
    ],
  },
  seo: {
    title: "SEO",
    subtitle:
      "Search visibility built on technical excellence, high-intent content, and authority development to drive long-term organic growth.",
    badge: "SEO Boost",
    accent: { from: "#16a34a", to: "#22d3ee" },
    whatYouGet: [
      "Comprehensive technical SEO audit and issue prioritization",
      "Keyword map based on intent, funnel stage, and opportunity",
      "On-page optimization framework across key templates",
      "Content clusters to improve topical authority",
      "Internal linking and crawl architecture improvements",
      "Local SEO enhancements for map and regional visibility",
    ],
    process: [
      { title: "Audit", desc: "Evaluate indexation, crawlability, page speed, and content quality against competitors." },
      { title: "Prioritize", desc: "Build a ranked implementation roadmap based on impact, effort, and dependency." },
      { title: "Implement", desc: "Execute technical fixes, optimize pages, and publish high-intent content assets." },
      { title: "Scale", desc: "Track rankings, traffic quality, and conversions to continuously expand wins." },
    ],
    deliverables: [
      "Technical SEO report",
      "Keyword opportunity map",
      "On-page optimization checklist",
      "Content brief library",
      "Link acquisition plan",
      "SEO performance dashboard",
    ],
    kpis: [
      { label: "Organic Traffic", value: "+210%", desc: "Growth in non-branded organic sessions." },
      { label: "Top 10 Rankings", value: "+145", desc: "Increase in high-value keywords ranking on page one." },
      { label: "Organic Leads", value: "+96%", desc: "Improvement in lead volume from organic search." },
    ],
    faqs: [
      { q: "Is SEO still worth investing in?", a: "Yes. Organic search remains one of the strongest compounding channels for high-intent, lower-cost acquisition." },
      { q: "Do you also optimize existing content?", a: "Yes. We improve underperforming pages and create new assets where demand and gaps are highest." },
      { q: "How do you measure SEO success?", a: "We track qualified traffic, keyword movement, landing page engagement, and conversion impact." },
    ],
  },
  "performance-marketing": {
    title: "Performance Marketing",
    subtitle:
      "Results-first paid media programs focused on measurable outcomes across search, social, and display ecosystems.",
    badge: "+240% ROAS",
    accent: { from: "#f97316", to: "#ef4444" },
    whatYouGet: [
      "Paid media strategy by objective and funnel stage",
      "Account architecture designed for scalable testing",
      "Audience segmentation and creative-message pairing",
      "Landing page and conversion path optimization",
      "Budget pacing and bid control framework",
      "Real-time reporting tied to revenue metrics",
    ],
    process: [
      { title: "Plan", desc: "Define target outcomes, budget scenarios, and channel allocation model." },
      { title: "Launch", desc: "Deploy campaigns with robust tracking, audience segmentation, and creative variants." },
      { title: "Test", desc: "Run controlled experiments on bidding, creatives, audiences, and offers." },
      { title: "Scale", desc: "Shift spend to highest-return units and expand proven campaign patterns." },
    ],
    deliverables: [
      "Paid media playbook",
      "Campaign build sheets",
      "Audience matrix",
      "Creative test tracker",
      "Budget pacing model",
      "ROAS reporting pack",
    ],
    kpis: [
      { label: "ROAS", value: "4.6x", desc: "Average return on ad spend across mature campaigns." },
      { label: "CPA Reduction", value: "-38%", desc: "Decrease in cost per acquisition through structured testing." },
      { label: "Conversion Volume", value: "+123%", desc: "Increase in conversion output at controlled efficiency." },
    ],
    faqs: [
      { q: "Which ad platforms do you manage?", a: "We manage Google, Meta, LinkedIn, and other paid channels based on your audience and goals." },
      { q: "How often are campaigns optimized?", a: "Optimization happens continuously, with formal weekly performance reviews and sprint updates." },
      { q: "Can you work with our in-house creative team?", a: "Yes. We collaborate with internal teams or provide creative direction and production support." },
    ],
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    subtitle:
      "Brand-led social systems that combine creative consistency, audience engagement, and demand generation at scale.",
    badge: "+3.2M Reach",
    accent: { from: "#6366f1", to: "#22c55e" },
    whatYouGet: [
      "Platform strategy for Instagram, Facebook, LinkedIn, and X",
      "Content pillars tailored to audience interests and intent",
      "Creative direction for static, carousel, and short video formats",
      "Community management and response framework",
      "Growth loops connecting social to lead capture",
      "Performance analytics for engagement and assisted conversions",
    ],
    process: [
      { title: "Position", desc: "Define brand voice, audience themes, and platform-level role in your funnel." },
      { title: "Produce", desc: "Build a monthly content system with high-quality creative and message consistency." },
      { title: "Publish", desc: "Deploy content using cadence and timing that maximize reach and interaction." },
      { title: "Improve", desc: "Optimize by post-level insights, audience behavior, and conversion signals." },
    ],
    deliverables: [
      "Social strategy framework",
      "Content calendar",
      "Creative asset kits",
      "Community response playbook",
      "Platform growth dashboard",
      "Monthly insight report",
    ],
    kpis: [
      { label: "Audience Reach", value: "+3.2M", desc: "Expanded monthly reach across priority platforms." },
      { label: "Engagement Rate", value: "+67%", desc: "Lift in meaningful interactions and saves." },
      { label: "Social Leads", value: "+54%", desc: "Increase in lead generation attributed to social activity." },
    ],
    faqs: [
      { q: "Do you create content or only manage posting?", a: "We cover strategy, creative production, publishing, and optimization as one integrated service." },
      { q: "Which platforms should we focus on?", a: "We prioritize platforms where your customers already spend time and where your offer converts best." },
      { q: "How do social efforts tie to revenue?", a: "We connect social touchpoints to lead capture and conversion paths with measurable attribution." },
    ],
  },
  "marketing-automation-analysis": {
    title: "Marketing automation & analysis",
    subtitle:
      "Automated customer journeys and analytics systems that improve efficiency, retention, and decision quality.",
    badge: "AI Workflow",
    accent: { from: "#3b82f6", to: "#8b5cf6" },
    whatYouGet: [
      "Automation blueprint for lifecycle communication",
      "Lead scoring and qualification logic setup",
      "Multi-step nurture sequences across channels",
      "Attribution and reporting architecture",
      "Performance anomaly alerts and diagnostics",
      "Continuous optimization recommendations",
    ],
    process: [
      { title: "Map", desc: "Document funnel stages, triggers, and key events that require automation." },
      { title: "Build", desc: "Configure workflows, segmentation, and tracking with governance controls." },
      { title: "Measure", desc: "Monitor conversion paths, engagement quality, and bottlenecks." },
      { title: "Optimize", desc: "Refine automation logic and messaging based on behavior insights." },
    ],
    deliverables: [
      "Automation architecture map",
      "Workflow library",
      "Lead scoring model",
      "Attribution dashboard",
      "KPI alerting system",
      "Optimization backlog",
    ],
    kpis: [
      { label: "Operational Time Saved", value: "29 hrs/wk", desc: "Average weekly effort reduced through automation." },
      { label: "Lead Response Speed", value: "-58%", desc: "Reduction in response delay after automation rollout." },
      { label: "Retention Lift", value: "+24%", desc: "Improvement in repeat engagement and retention metrics." },
    ],
    faqs: [
      { q: "Will automation replace our team workflow?", a: "No. It reduces repetitive tasks so your team can focus on strategy, quality, and higher-value decisions." },
      { q: "Can you integrate with our existing CRM?", a: "Yes. We design workflows around your current stack and improve data consistency across tools." },
      { q: "How often are analytics reviewed?", a: "We run recurring reviews and provide action-focused insights instead of static reporting." },
    ],
  },
  "mobile-marketing": {
    title: "Mobile Marketing",
    subtitle:
      "Mobile-first campaigns designed to reach high-intent users with relevant messaging, timing, and conversion pathways.",
    badge: "Mobile First",
    accent: { from: "#0ea5e9", to: "#8b5cf6" },
    whatYouGet: [
      "Mobile audience segmentation by behavior and intent",
      "Campaign formats optimized for smaller screens",
      "Push, SMS, and in-app messaging strategy",
      "Location-aware targeting opportunities",
      "Mobile landing experience optimization",
      "Cross-device attribution and reporting",
    ],
    process: [
      { title: "Research", desc: "Analyze device behavior, mobile drop-off points, and user journey friction." },
      { title: "Design", desc: "Create mobile-native messaging and creative patterns for each channel." },
      { title: "Deploy", desc: "Launch targeted mobile campaigns with event-based triggers." },
      { title: "Refine", desc: "Improve engagement and conversion through iterative testing and analytics." },
    ],
    deliverables: [
      "Mobile channel strategy",
      "Audience segmentation map",
      "Campaign creatives",
      "Messaging sequence flows",
      "Mobile UX recommendations",
      "Performance dashboard",
    ],
    kpis: [
      { label: "Mobile CTR", value: "+49%", desc: "Increase in click-through rates on mobile campaigns." },
      { label: "Mobile Conversion", value: "+37%", desc: "Lift in conversions from mobile traffic segments." },
      { label: "App Re-Engagement", value: "+42%", desc: "Growth in repeat engagement through push and remarketing." },
    ],
    faqs: [
      { q: "Is mobile marketing only for apps?", a: "No. It includes mobile web, SMS, ads, and push strategies for both app and non-app businesses." },
      { q: "How do you improve mobile conversion rates?", a: "We align ad messaging with fast landing experiences and event-based optimization." },
      { q: "Do you support geo-targeted campaigns?", a: "Yes. We build location-sensitive campaigns when regional intent is relevant." },
    ],
  },
  "email-marketing": {
    title: "Email Marketing",
    subtitle:
      "Lifecycle email programs that nurture leads, improve retention, and convert intent into repeat business.",
    badge: "High CTR",
    accent: { from: "#16a34a", to: "#f97316" },
    whatYouGet: [
      "Lifecycle journey planning from welcome to win-back",
      "List segmentation and personalization framework",
      "Campaign copy and design optimized for response",
      "Automation for abandoned actions and re-engagement",
      "Deliverability and sender reputation monitoring",
      "Revenue-focused reporting by sequence and segment",
    ],
    process: [
      { title: "Segment", desc: "Organize subscribers by behavior, lifecycle stage, and value signals." },
      { title: "Craft", desc: "Develop message sequences with clear intent, timing, and CTA structure." },
      { title: "Automate", desc: "Set up trigger-based campaigns for key lifecycle moments." },
      { title: "Optimize", desc: "Improve opens, clicks, and conversions through iterative testing." },
    ],
    deliverables: [
      "Email strategy blueprint",
      "Sequence flowcharts",
      "Template design system",
      "Copy bank and subject tests",
      "Deliverability checklist",
      "Email revenue report",
    ],
    kpis: [
      { label: "Email Revenue", value: "+68%", desc: "Increase in revenue contribution from lifecycle email." },
      { label: "Click Rate", value: "+44%", desc: "Improvement in average click-through across key flows." },
      { label: "Unsubscribe Rate", value: "-26%", desc: "Reduction through better targeting and message relevance." },
    ],
    faqs: [
      { q: "Can email still drive strong ROI?", a: "Yes. With lifecycle automation and segmentation, email remains one of the highest-ROI channels." },
      { q: "Do you write and design campaigns?", a: "Yes. We manage strategy, copy, design, setup, and optimization end to end." },
      { q: "How do you measure email performance?", a: "We track engagement and downstream outcomes including conversion and revenue per segment." },
    ],
  },
  "content-marketing": {
    title: "Content Marketing",
    subtitle:
      "Demand-building content systems that educate audiences, strengthen authority, and support acquisition across channels.",
    badge: "Content Engine",
    accent: { from: "#8b5cf6", to: "#14b8a6" },
    whatYouGet: [
      "Content strategy aligned to buyer journey stages",
      "Editorial planning for consistent publishing cadence",
      "SEO-integrated topic clusters and briefs",
      "Conversion-oriented content format recommendations",
      "Repurposing framework for social and email",
      "Performance tracking by topic and funnel impact",
    ],
    process: [
      { title: "Plan", desc: "Define audience themes, editorial goals, and topic priorities." },
      { title: "Produce", desc: "Create high-quality assets designed for discovery and conversion." },
      { title: "Distribute", desc: "Deploy content through owned and paid channels for reach." },
      { title: "Measure", desc: "Evaluate topic performance and optimize future content decisions." },
    ],
    deliverables: [
      "Content strategy document",
      "Editorial calendar",
      "SEO content briefs",
      "Long-form and short-form assets",
      "Distribution checklist",
      "Content performance report",
    ],
    kpis: [
      { label: "Qualified Traffic", value: "+132%", desc: "Growth in high-intent traffic from content assets." },
      { label: "Engagement Time", value: "+39%", desc: "Increase in average engagement on published content." },
      { label: "Assisted Leads", value: "+58%", desc: "More leads influenced by content touchpoints." },
    ],
    faqs: [
      { q: "How is content linked to business results?", a: "We map each content asset to funnel stages and track influence on engagement, leads, and revenue." },
      { q: "Do you handle topic research?", a: "Yes. We use search demand, audience intent, and competitive gaps to prioritize topics." },
      { q: "Can content support paid campaigns too?", a: "Yes. We create assets that improve both organic discovery and paid conversion performance." },
    ],
  },
  "remarketing-retargeting": {
    title: "Remarketing and Retargeting",
    subtitle:
      "Conversion recovery systems that re-engage warm audiences with timely, personalized messaging across channels.",
    badge: "Retarget Pro",
    accent: { from: "#f97316", to: "#0ea5e9" },
    whatYouGet: [
      "Audience recovery strategy by intent and drop-off stage",
      "Pixel and event tracking validation across touchpoints",
      "Personalized creative sequences for return visits",
      "Frequency and fatigue control to protect efficiency",
      "Cross-platform remarketing orchestration",
      "Incrementality and assisted-conversion reporting",
    ],
    process: [
      { title: "Track", desc: "Implement accurate event capture and segment creation for warm audiences." },
      { title: "Segment", desc: "Group users by behavior depth, product interest, and recency." },
      { title: "Retarget", desc: "Serve personalized messages with stage-specific offers and creatives." },
      { title: "Convert", desc: "Optimize bid, frequency, and creative mix to maximize return conversions." },
    ],
    deliverables: [
      "Retargeting strategy map",
      "Audience segment matrix",
      "Creative sequence set",
      "Frequency governance rules",
      "Cross-channel launch plan",
      "Conversion recovery report",
    ],
    kpis: [
      { label: "Recovered Conversions", value: "+61%", desc: "Increase in conversions from previously unconverted visitors." },
      { label: "Return ROAS", value: "5.2x", desc: "Average return from retargeting campaign segments." },
      { label: "Cart Recovery", value: "+47%", desc: "Lift in recovered checkout completions." },
    ],
    faqs: [
      { q: "What is the difference between remarketing and retargeting?", a: "Retargeting re-engages users via ads, while remarketing often includes owned channels like email and SMS." },
      { q: "How do you avoid ad fatigue?", a: "We use frequency caps, creative rotation, and segment-specific messaging windows." },
      { q: "Can retargeting improve profitability?", a: "Yes. Warm audiences usually convert at lower cost when timing and personalization are executed well." },
    ],
  },
};

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return SERVICE_SLUGS.includes(slug as ServiceSlug);
}
