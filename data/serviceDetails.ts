export const SERVICE_DETAIL_SLUGS = ["digital-marketing", "seo", "performance-marketing", "social-media-marketing", "content-marketing", "email-marketing", "mobile-marketing", "remarketing-and-retargeting", "marketing-automation", "whatsapp-management"] as const;
export type ServiceDetailSlug = (typeof SERVICE_DETAIL_SLUGS)[number];
export type ServiceFaqItem = { question: string; answer: string };
export type ServiceContentItem = { title: string; text: string };
export type ServiceDetail = {
  slug: ServiceDetailSlug;
  seo: { title: string; description: string; canonical: string; keywords: string[]; primaryKeyword: string; supportingKeywords: [string, string]; audienceKeyword: string };
  hero: { eyebrow: string; h1: string; subtitle: string };
  overview: { title: string; text: string };
  pillars?: { title: string; items: ServiceContentItem[] };
  process?: { title: string; items: ServiceContentItem[] };
  framework?: { title: string; items: ServiceContentItem[] };
  deliverables: { title: string; items: string[] };
  faqs: { title: string; items: ServiceFaqItem[] };
  imageSrc: string;
};

const BASE_URL = "https://dm.kaalamithra-ai.com";
const make = (data: Omit<ServiceDetail, "seo"> & { seo: Omit<ServiceDetail["seo"], "canonical"> }): ServiceDetail => ({ ...data, seo: { ...data.seo, canonical: `${BASE_URL}/services/${data.slug}` } });

export const SERVICE_DETAILS: Record<ServiceDetailSlug, ServiceDetail> = {
  "digital-marketing": make({
    slug: "digital-marketing",
    seo: {
      title: "AI-Powered Digital Marketing Agency in Bangalore | Kaalamithra",
      description:
        "Rated as one of the best digital marketing agencies in Bangalore. We combine creativity with technology to drive visibility, engagement, and conversions from strategy to measurable growth.",
      keywords: [
        "ai powered digital marketing services bangalore",
        "digital marketing agency in bangalore",
        "ai powered digital marketing in bangalore",
        "digital marketing services bangalore",
      ],
      primaryKeyword: "AI-Powered Digital Marketing Agency in Bangalore",
      supportingKeywords: ["AI powered digital marketing in Bangalore", "digital marketing services Bangalore"],
      audienceKeyword: "growth-focused brands in Bangalore",
    },
    hero: {
      eyebrow: "Digital Marketing",
      h1: "AI-Powered Digital Marketing Agency in Bangalore",
      subtitle:
        "Clicks turn into customers. Modern marketing requires intelligence, automation, and precision. Our AI powered digital marketing in Bangalore strategies analyze user behavior, predict trends, and optimize campaigns in real time.",
    },
    overview: {
      title: "Get Noticed",
      text:
        "We manage your entire digital journey from strategy to measurable growth driving visibility, engagement, and conversions with a smarter execution model built for brands that need reliable digital marketing services Bangalore teams can scale with.",
    },
    pillars: {
      title: "What You Get",
      items: [
        {
          title: "More Visibility and Brand Presence",
          text:
            "Increase your online exposure and make your brand harder to ignore. We improve discoverability across search, paid, and content touchpoints so your positioning stays consistent and memorable.",
        },
        {
          title: "Qualified Leads",
          text:
            "Attract the right audience, not just more traffic. Our campaigns are designed to reach people with stronger intent, improving enquiry quality and conversion potential over time.",
        },
        {
          title: "Sales-Focused Growth",
          text:
            "Turn marketing effort into commercial movement by aligning audience targeting, messaging, and funnel steps with the outcomes your business actually cares about.",
        },
        {
          title: "Performance Analytics and Insights",
          text:
            "Gain clearer visibility into campaign health with reporting that helps growth-focused brands in Bangalore understand what is driving momentum and what needs attention next.",
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        "Growth strategy deck",
        "Campaign launch framework",
        "Audience segmentation",
        "Creative testing matrix",
        "Performance dashboard",
        "Funnel optimization roadmap",
        "Attribution insights",
        "Monthly review report",
      ],
    },
    faqs: {
      title: "FAQ",
      items: [
        {
          question: "How is Kaalamithra different from other Google marketing agencies?",
          answer:
            "Kaalamithra combines strategy, creativity, and data with automation-led execution. We focus on visibility, conversions, and commercial reporting so decisions are based on business outcomes rather than traffic alone.",
        },
        {
          question: "How do you choose a marketing agency in Bangalore?",
          answer:
            "Look for strategic clarity, transparent reporting, strong execution ability, and a process that connects channel work to revenue goals. The right partner should align with your growth stage and business priorities.",
        },
        {
          question: "Can you manage the entire digital journey end to end?",
          answer:
            "Yes. We support the full journey from strategy and campaign execution to conversion improvement, reporting, and ongoing optimisation across key digital channels.",
        },
      ],
    },
    imageSrc: "/services/service-digital-marketing-DgTBPFKC.png",
  }),
  seo: make({
    slug: "seo",
    seo: {
      title: "Best SEO Agency in Bangalore | Kaalamithra",
      description:
        "AI-driven SEO to increase organic visibility, attract high-intent traffic, and generate qualified leads through technical SEO, on-page optimization, content strategy, and clear reporting.",
      keywords: [
        "best seo agency in bangalore",
        "professional seo services in bangalore",
        "technical seo audit",
        "local seo checklist",
      ],
      primaryKeyword: "Best SEO Agency in Bangalore",
      supportingKeywords: ["professional SEO services in Bangalore", "technical SEO audit"],
      audienceKeyword: "local and growth-focused businesses",
    },
    hero: {
      eyebrow: "SEO",
      h1: "Best SEO Agency in Bangalore",
      subtitle:
        "Be found online. If your website is not ranking, you are losing business to competitors. We focus not only on rankings, but on qualified leads that are more likely to convert.",
    },
    overview: {
      title: "Rank Higher. Get Found. Dominate Search.",
      text:
        "Our approach improves organic visibility, attracts high-intent traffic, and builds long-term authority through keyword research, on-page improvements, content planning, and a disciplined technical SEO audit process designed for sustainable inbound growth.",
    },
    process: {
      title: "Our SEO Process",
      items: [
        {
          title: "Understand Your Goals",
          text: "We analyze your business, target audience, and commercial priorities so the SEO roadmap stays aligned with outcomes that matter.",
        },
        {
          title: "Website Audit and Research",
          text: "A detailed review identifies technical issues, page opportunities, keyword gaps, and areas where stronger search intent alignment is needed.",
        },
        {
          title: "Strategic Implementation",
          text: "We execute on-page updates, technical fixes, and off-page priorities through a phased plan that is easier to manage and measure.",
        },
        {
          title: "Content and Link Optimization",
          text: "Content is improved or created around search intent while authority signals and internal linking are strengthened over time.",
        },
        {
          title: "Tracking and Reporting",
          text: "Performance is monitored through clear reporting that helps your team understand visibility, traffic quality, and lead impact.",
        },
        {
          title: "Ongoing Optimization",
          text: "Professional SEO services in Bangalore work best as a continuous process, with regular refinements based on results, competition, and site evolution.",
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        "Technical SEO audit",
        "Keyword opportunity map",
        "On-page optimization stack",
        "Content brief library",
        "Internal linking framework",
        "Schema implementation notes",
        "Local SEO checklist",
        "Monthly SEO report",
      ],
    },
    faqs: {
      title: "FAQ",
      items: [
        {
          question: "How long does it take to see SEO results?",
          answer:
            "Timelines depend on competition, industry, and your website's current condition. Some businesses see early improvements within a few months, while more competitive spaces take longer. Sustainable SEO is a long-term channel.",
        },
        {
          question: "Can you guarantee number one rankings on Google?",
          answer:
            "No credible SEO partner can guarantee number one rankings because search algorithms and competitive conditions change constantly. Good SEO focuses on sound execution, transparency, and ongoing improvement.",
        },
        {
          question: "Why is SEO usually managed monthly?",
          answer:
            "SEO needs continuous monitoring, updates, and refinement. That is especially true for local and growth-focused businesses competing in changing search environments where content, technical health, and authority all need ongoing attention.",
        },
      ],
    },
    imageSrc: "/services/service-seo-B1t0muHw.png",
  }),
  "performance-marketing": make({
    slug: "performance-marketing",
    seo: {
      title: "Performance Marketing Agency in Bangalore | Kaalamithra",
      description:
        "ROI-driven paid campaigns across search and social that stay trackable, budget-focused, and optimized through testing and conversion improvements for quality lead growth.",
      keywords: [
        "performance marketing agency in bangalore",
        "roi driven paid campaigns",
        "conversion tracking and attribution",
        "budget optimization roas",
      ],
      primaryKeyword: "Performance Marketing Agency in Bangalore",
      supportingKeywords: ["ROI-driven paid campaigns", "conversion tracking and attribution"],
      audienceKeyword: "ecommerce and lead generation brands",
    },
    hero: {
      eyebrow: "Performance Marketing",
      h1: "Performance Marketing Agency in Bangalore",
      subtitle:
        "A job well done should show up in the numbers. Our ROI-driven paid campaigns across search and social use smart testing, budget discipline, and conversion optimization to improve paid growth.",
    },
    overview: {
      title: "Turn Ad Spend Into Profit",
      text:
        "Performance-focused marketing should produce measurable progress, not guesswork. We help brands reach the right audience, optimize budgets, improve conversion tracking and attribution, and make faster decisions based on reliable campaign signals.",
    },
    pillars: {
      title: "Core Pillars",
      items: [
        {
          title: "Campaign Architecture",
          text: "We build scalable paid account structures across search, social, and display so optimisation stays controlled as spend grows.",
        },
        {
          title: "Audience Strategy",
          text: "High-intent segments are mapped by persona, behavior, and funnel stage to improve relevance and reduce wasted budget.",
        },
        {
          title: "Conversion Tracking",
          text: "Reliable event setup and attribution mapping give your team a clearer view of what is actually generating business outcomes.",
        },
        {
          title: "Budget Intelligence",
          text: "Continuous bid and spend refinement helps ecommerce and lead generation brands move budget toward stronger efficiency and healthier ROAS patterns.",
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
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
    },
    faqs: {
      title: "FAQ",
      items: [
        {
          question: "How does performance marketing differ from PPC?",
          answer:
            "PPC is one part of performance marketing. Performance marketing is broader and can include paid search, paid social, affiliate activity, and other channels where spend is tied to measurable business actions.",
        },
        {
          question: "How is performance marketing different from traditional marketing?",
          answer:
            "Traditional media can build awareness, but performance marketing gives you clearer measurement, faster optimisation cycles, and more control over spend because decisions are guided by trackable actions.",
        },
        {
          question: "Can campaigns be paused or modified?",
          answer:
            "Yes. Campaigns can be paused, adjusted, scaled, or restructured based on performance data, business priorities, budget changes, or conversion quality concerns.",
        },
      ],
    },
    imageSrc: "/services/service-performance-ktslITiU.png",
  }),
  "social-media-marketing": make({
    slug: "social-media-marketing",
    seo: {
      title: "Social Media Marketing Agency in Bangalore | Kaalamithra",
      description:
        "Strategic content calendars, engaging creatives, short-form video strategies, and engagement systems that build brand trust and drive measurable business impact.",
      keywords: [
        "social media marketing agency in bangalore",
        "social media content calendar",
        "short form video strategy",
        "social media engagement systems",
      ],
      primaryKeyword: "Social Media Marketing Agency in Bangalore",
      supportingKeywords: ["social media content calendar", "short form video strategy"],
      audienceKeyword: "founder-led and brand-building businesses",
    },
    hero: {
      eyebrow: "Social Media Marketing",
      h1: "Social Media Marketing Agency in Bangalore",
      subtitle:
        "Beyond the clutter, social needs to build brand, community, and trust. We create strategic content calendars, engaging creatives, short-form video strategy systems, and engagement workflows that help brands stay relevant.",
    },
    overview: {
      title: "Social That Drives Business Impact",
      text:
        "Your audience does not want constant noise. They want relevance, consistency, and connection. Our approach blends creativity with analytics so your presence supports stronger engagement, better recall, and more meaningful business outcomes.",
    },
    framework: {
      title: "Scale Your Social Media in 3 Steps",
      items: [
        {
          title: "Goal Setting",
          text: "We define whether the focus is brand awareness, engagement, authority, or qualified leads so content decisions stay measurable.",
        },
        {
          title: "Target Audience",
          text: "Audience behavior, preferred platforms, and content preferences shape the social media content calendar and publishing priorities.",
        },
        {
          title: "Branding and Engagement",
          text: "A consistent brand voice, community response structure, and strong creative rhythm help founder-led and brand-building businesses earn trust over time.",
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        "Social growth blueprint",
        "Monthly content calendar",
        "Creative concept board",
        "Caption bank",
        "Community response matrix",
        "Platform KPI dashboard",
        "Engagement review",
        "Monthly insights deck",
      ],
    },
    faqs: {
      title: "FAQ",
      items: [
        {
          question: "Why should I hire a social media marketing company in Bangalore?",
          answer:
            "A professional team helps build awareness, engage the right audience, and support qualified demand through better planning, consistent content quality, and channel-specific execution.",
        },
        {
          question: "What makes an agency different from freelancers?",
          answer:
            "An agency usually brings strategists, designers, content planners, and paid specialists together, which makes execution more consistent and easier to scale.",
        },
        {
          question: "Do I need daily posting?",
          answer:
            "Not always. Consistency and quality matter more than posting frequency. The right cadence supported by social media engagement systems usually performs better than random daily content.",
        },
      ],
    },
    imageSrc: "/services/service-social-media-P4dXjYOT.png",
  }),
  "content-marketing": make({
    slug: "content-marketing",
    seo: { title: "Content Marketing Agency in Bangalore | Kaalamithra", description: "Content marketing agency in Bangalore for editorial strategy, SEO-aligned content, and conversion-aware demand generation assets.", keywords: ["content marketing agency in bangalore", "content marketing services in bangalore", "seo content writing bangalore", "content strategy agency bangalore", "blog writing services bangalore"], primaryKeyword: "Content Marketing Agency in Bangalore", supportingKeywords: ["content marketing services in Bangalore", "SEO content writing Bangalore"], audienceKeyword: "B2B companies and expertise-led brands" },
    hero: { eyebrow: "Authority Building Through Useful Content", h1: "Content Marketing Agency in Bangalore", subtitle: "Content Marketing Agency in Bangalore gives your brand a clearer editorial system for attracting demand, improving trust, and supporting qualified conversions." },
    overview: { title: "Build a content engine that compounds", text: "Great content should do more than fill a calendar. It should answer buyer questions, support search demand, and strengthen sales conversations. Our content marketing services in Bangalore are planned to improve discoverability and commercial usefulness at the same time." },
    framework: { title: "Our content framework", items: [{ title: "Research", text: "We identify customer questions, search intent, and funnel gaps that deserve content investment." }, { title: "Production", text: "We create briefs and assets with structure, clarity, and conversion logic built in from the start." }, { title: "Refinement", text: "Winning topics are updated, expanded, and reused across channels to improve long-term return." }] },
    deliverables: { title: "Typical deliverables", items: ["Editorial strategy document", "Topic cluster planning", "SEO content briefs", "Blog and landing page copy", "Content refresh recommendations", "Repurposing workflow", "CTA and conversion guidance", "Monthly performance review"] },
    faqs: { title: "Content marketing FAQs", items: [{ question: "Do you create content only for search traffic?", answer: "No. We balance search intent with buyer education so content can support discovery, trust, and conversion support together." }, { question: "Can you help with long-form SEO content?", answer: "Yes. SEO content writing Bangalore is a major part of the engagement, especially when topical depth is important for visibility." }, { question: "Who benefits most from this service?", answer: "It is ideal for B2B companies and expertise-led brands that want a repeatable content engine instead of one-off publishing." }] },
    imageSrc: "/services/service-content-QcgO-PdB.png",
  }),
  "email-marketing": make({
    slug: "email-marketing",
    seo: { title: "Email Marketing Agency in Bangalore | Kaalamithra", description: "Email marketing agency in Bangalore for lifecycle planning, segmentation, automation, and retention-focused campaign execution.", keywords: ["email marketing agency in bangalore", "email marketing services in bangalore", "email automation services bangalore", "retention marketing agency bangalore", "email campaign management bangalore"], primaryKeyword: "Email Marketing Agency in Bangalore", supportingKeywords: ["email marketing services in Bangalore", "email automation services Bangalore"], audienceKeyword: "ecommerce, SaaS, and repeat-purchase businesses" },
    hero: { eyebrow: "Lifecycle Messaging That Drives Retention", h1: "Email Marketing Agency in Bangalore", subtitle: "Email Marketing Agency in Bangalore helps businesses turn lists into high-value lifecycle journeys with better segmentation, timing, and conversion focus." },
    overview: { title: "From isolated campaigns to lifecycle revenue support", text: "Email performs best when it is tied to real customer moments. Our email marketing services in Bangalore focus on welcome flows, nurture sequences, and retention opportunities so the channel works as a dependable growth asset rather than a periodic send tool." },
    process: { title: "How email programs are built", items: [{ title: "Journey Mapping", text: "We identify which lifecycle moments deserve nurture, recovery, retention, or reactivation messaging." }, { title: "Segmentation Logic", text: "Lists and triggers are structured by behavior, source, and intent so relevance stays high." }, { title: "Campaign Production", text: "Copy, design, and CTA logic are created with readability and action in mind." }, { title: "Testing and Tuning", text: "Send times, subject lines, and sequence performance are reviewed for ongoing improvement." }] },
    deliverables: { title: "Typical deliverables", items: ["Lifecycle email map", "Segmentation framework", "Automation sequence planning", "Campaign copy development", "Template recommendations", "Deliverability checklist", "A/B testing roadmap", "Monthly email performance report"] },
    faqs: { title: "Email marketing FAQs", items: [{ question: "Do you handle one-off campaigns and automation together?", answer: "Yes. We build both broadcast campaigns and lifecycle sequences so the channel works as one coordinated system." }, { question: "Can you support retention improvements as well as lead nurturing?", answer: "Yes. Email automation services Bangalore are especially useful when you need better follow-up, repeat purchase prompts, and reactivation planning." }, { question: "Who is this most useful for?", answer: "It works especially well for ecommerce, SaaS, and repeat-purchase businesses that want stronger lifecycle revenue support." }] },
    imageSrc: "/services/service-email-ZNd5oL_I.png",
  }),
  "mobile-marketing": make({
    slug: "mobile-marketing",
    seo: { title: "Mobile Marketing Services in Bangalore | Kaalamithra", description: "Mobile marketing services in Bangalore for SMS, push, app and mobile-web acquisition journeys designed for faster action.", keywords: ["mobile marketing services in bangalore", "mobile marketing agency in bangalore", "sms marketing services bangalore", "push notification marketing bangalore", "mobile advertising agency bangalore"], primaryKeyword: "Mobile Marketing Services in Bangalore", supportingKeywords: ["SMS marketing services Bangalore", "push notification marketing Bangalore"], audienceKeyword: "app-first brands and mobile-heavy businesses" },
    hero: { eyebrow: "Mobile-First Growth Journeys", h1: "Mobile Marketing Services in Bangalore", subtitle: "Mobile Marketing Services in Bangalore help brands engage faster-moving users through better timing, segmentation, and mobile-first conversion design." },
    overview: { title: "Meet users where attention is shortest and intent is immediate", text: "Mobile is often the first and most frequent touchpoint in the customer journey. We plan mobile marketing agency Bangalore businesses can use to connect message timing, device behavior, and action-oriented journeys without creating fragmented user experiences." },
    framework: { title: "Our mobile marketing framework", items: [{ title: "Behavior Signals", text: "We analyze device habits, recency, and context to determine which mobile moments deserve intervention." }, { title: "Channel Fit", text: "SMS, app messaging, push, and mobile landing experiences are aligned with the user action you need." }, { title: "Journey Improvement", text: "We reduce friction across mobile forms, click paths, and message continuity to support conversion." }] },
    deliverables: { title: "Typical deliverables", items: ["Mobile channel strategy", "Audience segmentation plan", "SMS and push flows", "Message timing guidance", "Mobile landing page inputs", "Cross-device tracking review", "Campaign testing priorities", "Monthly mobile performance review"] },
    faqs: { title: "Mobile marketing FAQs", items: [{ question: "Is mobile marketing only relevant for app businesses?", answer: "No. It also supports mobile web, click-to-call campaigns, SMS programs, and other phone-first user journeys." }, { question: "Can you handle SMS and push together?", answer: "Yes. SMS marketing services Bangalore and push planning work best when timing and message priority are coordinated instead of duplicated." }, { question: "Who benefits the most from this service?", answer: "It is especially useful for app-first brands and mobile-heavy businesses where a large share of attention and action happens on phones." }] },
    imageSrc: "/services/service-mobile-BTouDMEG.png",
  }),
  "remarketing-and-retargeting": make({
    slug: "remarketing-and-retargeting",
    seo: { title: "Remarketing and Retargeting Services in Bangalore | Kaalamithra", description: "Remarketing and retargeting services in Bangalore for warm-audience recovery, stronger follow-up, and conversion-focused re-engagement.", keywords: ["remarketing and retargeting services in bangalore", "remarketing services bangalore", "retargeting ads agency bangalore", "conversion recovery campaigns bangalore", "retargeting services in bangalore"], primaryKeyword: "Remarketing and Retargeting Services in Bangalore", supportingKeywords: ["remarketing services Bangalore", "retargeting ads agency Bangalore"], audienceKeyword: "ecommerce stores and high-intent lead funnels" },
    hero: { eyebrow: "Recover More Warm Demand", h1: "Remarketing and Retargeting Services in Bangalore", subtitle: "Remarketing and Retargeting Services in Bangalore help brands re-engage visitors and leads with more relevant timing, creative, and conversion recovery logic." },
    overview: { title: "Stay visible after the first click without wasting spend", text: "Not every buyer converts on the first visit. We build remarketing services Bangalore companies can use to reconnect with high-intent audiences through better segmentation, stronger offer sequencing, and more controlled frequency across platforms." },
    pillars: { title: "What improves recovery performance", items: [{ title: "Audience Grouping", text: "We split users by behavior, recency, and value so follow-up feels relevant to where they dropped off." }, { title: "Creative Sequencing", text: "Messaging evolves from reminder to proof to offer instead of repeating the same ad too often." }, { title: "Frequency Controls", text: "We protect efficiency with exclusions, timing windows, and better pacing." }, { title: "Cross-Channel Coordination", text: "Remarketing can be aligned with email or CRM follow-up to create a fuller recovery journey." }] },
    deliverables: { title: "Typical deliverables", items: ["Audience recovery map", "Event and audience validation", "Segment prioritisation plan", "Creative sequence recommendations", "Offer and reminder logic", "Frequency control settings", "Performance reporting dashboard", "Monthly recovery review"] },
    faqs: { title: "Remarketing FAQs", items: [{ question: "What is the difference between remarketing and retargeting?", answer: "Retargeting usually refers to paid ad follow-up, while remarketing can also include owned channels such as email and lifecycle messaging." }, { question: "Can you support conversion recovery outside of ecommerce?", answer: "Yes. Retargeting ads agency Bangalore work is also valuable for lead generation when prospects need multiple touches before converting." }, { question: "Who gets the most value from this?", answer: "It is a strong fit for ecommerce stores and high-intent lead funnels where first-touch traffic is meaningful but not immediately converting." }] },
    imageSrc: "/services/service-retargeting-CxO8OQYr.png",
  }),
  "marketing-automation": make({
    slug: "marketing-automation",
    seo: { title: "Marketing Automation Services in Bangalore | Kaalamithra", description: "Marketing automation services in Bangalore for lead routing, workflow design, lifecycle triggers, and cleaner reporting systems.", keywords: ["marketing automation services in bangalore", "marketing automation agency in bangalore", "crm automation bangalore", "lead automation services bangalore", "marketing workflow setup bangalore"], primaryKeyword: "Marketing Automation Services in Bangalore", supportingKeywords: ["marketing automation agency in Bangalore", "CRM automation Bangalore"], audienceKeyword: "sales-led teams and service businesses" },
    hero: { eyebrow: "Smarter Workflows, Faster Follow-Up", h1: "Marketing Automation Services in Bangalore", subtitle: "Marketing Automation Services in Bangalore help teams reduce manual work, improve lead handling, and build cleaner lifecycle execution across the funnel." },
    overview: { title: "Build workflows that support speed, consistency, and visibility", text: "Automation works best when it solves real operational bottlenecks. We design systems for routing, alerts, handoffs, and reporting so a marketing automation agency in Bangalore is not just adding tools, but making your process more dependable." },
    process: { title: "How automation engagements work", items: [{ title: "Audit the Workflow", text: "We review forms, funnels, handoffs, and reporting gaps to find where manual effort is slowing progress." }, { title: "Design the Logic", text: "Triggers, routing paths, alerts, and CRM automation Bangalore rules are mapped around the real sales process." }, { title: "Implement the System", text: "We set up automation carefully so data stays usable and fallbacks are clear." }, { title: "Refine Over Time", text: "Sequences and routing rules are adjusted as the funnel evolves and operational needs change." }] },
    deliverables: { title: "Typical deliverables", items: ["Workflow audit document", "Lead routing logic", "Lifecycle trigger map", "CRM field cleanup plan", "Alert and notification setup", "Automation QA checklist", "Reporting visibility improvements", "Monthly optimisation review"] },
    faqs: { title: "Marketing automation FAQs", items: [{ question: "Can you work with our current CRM stack?", answer: "Yes. We usually improve the current setup first and only recommend major changes when the existing stack blocks execution or reporting." }, { question: "Will automation make our process feel robotic?", answer: "No. Good automation removes repetitive steps while preserving the points where human context and sales judgment matter most." }, { question: "Who is this most useful for?", answer: "It works especially well for sales-led teams and service businesses that need faster response times and better process visibility." }] },
    imageSrc: "/services/service-automation-D9GQDyKA.png",
  }),
  "whatsapp-management": make({
    slug: "whatsapp-management",
    seo: { title: "WhatsApp Management Services in Bangalore | Kaalamithra", description: "WhatsApp management services in Bangalore for lead handling, automation, broadcast planning, and customer response workflows.", keywords: ["whatsapp management services in bangalore", "whatsapp marketing agency bangalore", "whatsapp automation services bangalore", "whatsapp lead management bangalore", "whatsapp business setup bangalore"], primaryKeyword: "WhatsApp Management Services in Bangalore", supportingKeywords: ["WhatsApp marketing agency Bangalore", "WhatsApp automation services Bangalore"], audienceKeyword: "local service brands and conversion-focused teams" },
    hero: { eyebrow: "Conversational Growth With Better Control", h1: "WhatsApp Management Services in Bangalore", subtitle: "WhatsApp Management Services in Bangalore help businesses turn scattered conversations into a more organised sales, support, and follow-up channel." },
    overview: { title: "Create a WhatsApp workflow that scales with the business", text: "WhatsApp can become a high-value conversion touchpoint when response speed, routing logic, and campaign usage are planned well. We act as a WhatsApp marketing agency Bangalore teams can use to make the channel more structured, faster, and easier to manage." },
    pillars: { title: "What we improve inside the channel", items: [{ title: "Business Setup", text: "We organise templates, profile details, labels, and response standards so operations start from a cleaner foundation." }, { title: "Lead Routing", text: "New conversations are segmented and directed to the right next step instead of being handled inconsistently." }, { title: "Automation Layers", text: "WhatsApp automation services Bangalore are applied where they reduce delay without damaging the user experience." }, { title: "Campaign Coordination", text: "Broadcasts, reminders, and nurture sequences are structured to support communication quality and conversion flow." }] },
    deliverables: { title: "Typical deliverables", items: ["WhatsApp channel audit", "Business profile optimisation", "Template and response setup", "Lead routing workflow", "Automation trigger planning", "Broadcast campaign guide", "Conversation handling matrix", "Monthly channel review"] },
    faqs: { title: "WhatsApp management FAQs", items: [{ question: "Can WhatsApp support both sales and support workflows?", answer: "Yes. It can be structured to handle enquiry capture, nurturing, reminders, updates, and support interactions in one channel." }, { question: "Do you also help with automation and chatbot setup?", answer: "Yes. We use automation where it improves speed and consistency, while keeping escalation paths clear for human conversations." }, { question: "Who gets the most value from this service?", answer: "It is particularly useful for local service brands and conversion-focused teams that rely on fast response and strong follow-up quality." }] },
    imageSrc: "/services/whatsapp-management.png",
  }),
};

export function isServiceDetailSlug(slug: string): slug is ServiceDetailSlug {
  return SERVICE_DETAIL_SLUGS.includes(slug as ServiceDetailSlug);
}
