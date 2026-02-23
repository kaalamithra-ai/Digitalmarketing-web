export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  readingTime: string;
  category: string;
  featuredImage: string;
  content: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Why SEO is Important in Today's World",
    slug: "why-seo-is-important",
    excerpt:
      "SEO remains one of the most sustainable channels for brands that want long-term organic visibility and trust.",
    readingTime: "6 min read",
    category: "SEO",
    featuredImage: "/blog/seo-importance-DpIY2tkJ.jpg",
    content: [
      {
        heading: "What makes SEO essential now",
        paragraphs: [
          "Search is still where high-intent demand begins. When your pages rank for the right queries, your brand shows up exactly when users are ready to learn, compare, or buy.",
          "In today's crowded digital landscape, SEO is not just rankings. It is experience quality, content relevance, and technical reliability working together.",
        ],
      },
      {
        heading: "Business impact of SEO",
        paragraphs: [
          "SEO builds a reliable inbound engine that can reduce dependency on paid channels over time. It supports lower blended acquisition costs and stronger conversion paths.",
        ],
        bullets: [
          "Compounding organic traffic growth",
          "Higher trust from intent-aligned visibility",
          "Better site performance and user experience",
        ],
      },
    ],
  },
  {
    title: "Why Businesses Struggle with Retargeting and Remarketing",
    slug: "why-retargeting-fails",
    excerpt:
      "Most remarketing programs fail because of weak audience logic, repetitive messaging, and poor frequency control.",
    readingTime: "7 min read",
    category: "Remarketing",
    featuredImage: "/blog/retargeting-fZwNealV.jpg",
    content: [
      {
        heading: "Common reasons campaigns underperform",
        paragraphs: [
          "Retargeting often becomes a generic follow-up channel. Without segment-specific messaging, users see repetitive ads that add little value.",
          "Another frequent issue is tracking quality. If pixel events and audience rules are inconsistent, remarketing spends on the wrong users.",
        ],
      },
      {
        heading: "How to improve results",
        paragraphs: [
          "The strongest setups use behavior-based segmentation, exclusion logic, and creative sequencing by funnel stage.",
        ],
        bullets: [
          "Segment by user actions, not just page visits",
          "Rotate creatives with clear offer progression",
          "Control frequency and recency windows tightly",
        ],
      },
    ],
  },
  {
    title: "How Companies Achieve Targets Through Performance Marketing",
    slug: "performance-marketing-success",
    excerpt:
      "High-performing teams hit targets by combining disciplined testing, clear attribution, and budget agility.",
    readingTime: "8 min read",
    category: "Performance Marketing",
    featuredImage: "/blog/performance-targets-7Y7dV1Gl.jpg",
    content: [
      {
        heading: "Why performance systems win",
        paragraphs: [
          "Performance marketing aligns spend with measurable outcomes. Teams can quickly identify what works and scale profitable segments.",
          "When combined with quality creative and landing experience, performance channels become a dependable growth engine.",
        ],
      },
      {
        heading: "Execution framework",
        paragraphs: [
          "Winning programs run in cycles: plan, test, measure, optimize, and scale. This creates speed without losing control.",
        ],
        bullets: [
          "Channel mix based on intent and funnel stage",
          "Weekly experimentation and learning cadence",
          "Budget reallocation by CPA/ROAS performance",
        ],
      },
    ],
  },
  {
    title: "SEO",
    slug: "seo",
    excerpt:
      "A practical SEO playbook covering technical health, content architecture, and authority development.",
    readingTime: "5 min read",
    category: "SEO",
    featuredImage: "/blog/seo-technical-DVhigrdT.jpg",
    content: [
      {
        heading: "Core SEO pillars",
        paragraphs: [
          "Effective SEO combines technical reliability, content depth, and internal linking discipline.",
        ],
        bullets: [
          "Technical audits and indexing control",
          "Intent-based keyword strategy",
          "Content refresh and optimization loops",
        ],
      },
    ],
  },
  {
    title: "Performance Marketing",
    slug: "performance-marketing",
    excerpt:
      "How to build scalable paid media systems with measurable ROI and predictable optimization cycles.",
    readingTime: "6 min read",
    category: "Performance Marketing",
    featuredImage: "/blog/performance-marketing-DlCK1NWy.jpg",
    content: [
      {
        heading: "Performance foundations",
        paragraphs: [
          "A high-output performance program depends on measurement integrity, creative velocity, and clear decision rules.",
        ],
        bullets: [
          "Audience segmentation by intent",
          "Creative testing by hypothesis",
          "Attribution-aware reporting",
        ],
      },
    ],
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    excerpt:
      "Build authority and demand through content systems that are consistent, useful, and conversion-aware.",
    readingTime: "5 min read",
    category: "Content Marketing",
    featuredImage: "/blog/content-marketing-BCmDVygK.jpg",
    content: [
      {
        heading: "Content that compounds",
        paragraphs: [
          "Content marketing works when every asset has a clear role in education, trust, and conversion progression.",
        ],
        bullets: [
          "Topic clusters for depth",
          "Distribution planning by format",
          "Performance feedback loops",
        ],
      },
    ],
  },
  {
    title: "Social Media",
    slug: "social-media",
    excerpt:
      "A modern social strategy for consistent brand storytelling, community engagement, and demand support.",
    readingTime: "5 min read",
    category: "Social Media",
    featuredImage: "/blog/social-media-BCiBffY0.jpg",
    content: [
      {
        heading: "Social strategy essentials",
        paragraphs: [
          "Sustainable social growth comes from consistent publishing systems and audience-aware creative frameworks.",
        ],
        bullets: [
          "Channel-native content formats",
          "Engagement and moderation loops",
          "Creative iteration by signal quality",
        ],
      },
    ],
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    excerpt:
      "Email remains one of the highest-ROI channels for lifecycle growth when personalization is done right.",
    readingTime: "4 min read",
    category: "Email Marketing",
    featuredImage: "/blog/email-marketing-C7bNU1Zp.jpg",
    content: [
      {
        heading: "Lifecycle email impact",
        paragraphs: [
          "Email drives conversion and retention by delivering the right message at the right stage of the customer journey.",
        ],
        bullets: [
          "Welcome and nurture automation",
          "Segment-based personalization",
          "Retention and reactivation flows",
        ],
      },
    ],
  },
  {
    title: "Web Design",
    slug: "web-design",
    excerpt:
      "Conversion-focused web design blends clarity, speed, and credibility to improve business outcomes.",
    readingTime: "5 min read",
    category: "Web Design",
    featuredImage: "/blog/web-design-CJjybw3E.jpg",
    content: [
      {
        heading: "Design for conversion",
        paragraphs: [
          "High-performing web design reduces friction, improves comprehension, and guides users toward clear actions.",
        ],
        bullets: [
          "Message hierarchy and CTA clarity",
          "Mobile-first interaction quality",
          "Performance and accessibility standards",
        ],
      },
    ],
  },
  {
    title: "Branding",
    slug: "branding",
    excerpt:
      "Strong branding builds recognition, trust, and pricing power through consistent positioning and identity.",
    readingTime: "5 min read",
    category: "Branding",
    featuredImage: "/blog/branding-EzNb5CnS.jpg",
    content: [
      {
        heading: "Brand systems that scale",
        paragraphs: [
          "Branding is not only visual design. It is the strategic consistency of story, voice, and value perception across touchpoints.",
        ],
        bullets: [
          "Positioning and narrative clarity",
          "Visual and verbal consistency",
          "Trust-building across customer journey",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

