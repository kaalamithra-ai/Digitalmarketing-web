export type Testimonial = {
  id: string;
  name: string;
  company: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  serviceTags: string[];
  date: string;
  featured: boolean;
};

export type RatingsSummary = {
  averageRating: number;
  totalReviews: number;
  distribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
};

export type CaseSummary = {
  title: string;
  metric: string;
  description: string;
  caseSlug: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "aarti-sharma-finedge",
    name: "Aarti Sharma",
    company: "FinEdge",
    role: "VP Growth",
    rating: 5,
    text: "Their strategy was clear, focused, and grounded in data. We doubled qualified leads in 90 days.",
    serviceTags: ["Performance Marketing", "SEO", "Analytics"],
    date: "2025-11-03",
    featured: true,
  },
  {
    id: "vikram-iyer-urbanhive",
    name: "Vikram Iyer",
    company: "UrbanHive",
    role: "Marketing Director",
    rating: 5,
    text: "The team is fast, thoughtful, and accountable. Every campaign was tied to outcomes we could measure.",
    serviceTags: ["Performance Marketing", "Social Media"],
    date: "2025-09-18",
    featured: true,
  },
  {
    id: "neha-kapoor-purely",
    name: "Neha Kapoor",
    company: "Purely",
    role: "Brand Lead",
    rating: 4,
    text: "A rare blend of creativity and performance. Our brand presence feels premium and consistent.",
    serviceTags: ["Social Media", "Content Marketing"],
    date: "2025-08-07",
    featured: false,
  },
  {
    id: "rohan-gill-novalabs",
    name: "Rohan Gill",
    company: "NovaLabs",
    role: "Founder",
    rating: 5,
    text: "Clear communication, reliable execution, and strong performance reporting.",
    serviceTags: ["SEO", "Analytics"],
    date: "2025-06-22",
    featured: false,
  },
  {
    id: "shruti-menon-cloudline",
    name: "Shruti Menon",
    company: "Cloudline",
    role: "CMO",
    rating: 4,
    text: "They helped us scale PPC and SEO in sync with our product roadmap.",
    serviceTags: ["Performance Marketing", "SEO"],
    date: "2025-05-31",
    featured: false,
  },
  {
    id: "dev-patel-mintstreet",
    name: "Dev Patel",
    company: "Mintstreet",
    role: "Growth Manager",
    rating: 5,
    text: "Strategic, creative, and data-driven. We saw results within the first quarter.",
    serviceTags: ["Performance Marketing", "Marketing Automation"],
    date: "2025-04-12",
    featured: true,
  },
];

export const ratingsSummary: RatingsSummary = {
  averageRating: 4.8,
  totalReviews: 148,
  distribution: {
    5: 112,
    4: 28,
    3: 6,
    2: 1,
    1: 1,
  },
};

export const caseSummaries: CaseSummary[] = [
  {
    title: "SaaS Pipeline Growth",
    metric: "+184% qualified pipeline",
    description: "Search + paid + CRO alignment for a B2B SaaS category challenger.",
    caseSlug: "saas-pipeline-growth",
  },
  {
    title: "Ecommerce Revenue Lift",
    metric: "3.2x blended ROAS",
    description: "Creative testing and retention automation for a direct-to-consumer brand.",
    caseSlug: "ecommerce-revenue-lift",
  },
  {
    title: "B2B CAC Improvement",
    metric: "-40% CAC",
    description: "Intent-led messaging and funnel diagnostics for enterprise demand generation.",
    caseSlug: "b2b-cac-improvement",
  },
];
