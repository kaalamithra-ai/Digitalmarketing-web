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

export const caseStudies: CaseStudy[] = [];
