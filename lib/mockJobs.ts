export type JobType = "Full-time" | "Contract" | "Part-time";
export type WorkMode = "Remote" | "Hybrid" | "On-site";

export type JobItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  workMode: WorkMode;
  type: JobType;
  salaryRange: string;
  posted: string;
  topPick: boolean;
  aiMatch: number;
  description: string;
  skills: string[];
};

export const mockJobs: JobItem[] = [
  {
    id: "job-frontend-01",
    title: "Senior Frontend Developer",
    company: "Northstar Labs",
    location: "Bengaluru",
    workMode: "Hybrid",
    type: "Full-time",
    salaryRange: "INR 24L - 34L",
    posted: "2 days ago",
    topPick: true,
    aiMatch: 92,
    description:
      "Build high-performance React interfaces and collaborate with product and design teams across a modern SaaS stack.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "job-frontend-02",
    title: "Frontend Engineer",
    company: "Pulse Commerce",
    location: "Mumbai",
    workMode: "Remote",
    type: "Full-time",
    salaryRange: "INR 18L - 25L",
    posted: "1 day ago",
    topPick: false,
    aiMatch: 87,
    description:
      "Own UI modules for conversion workflows and deliver polished responsive experiences for high-traffic commerce pages.",
    skills: ["JavaScript", "React", "Redux", "A/B Testing"],
  },
  {
    id: "job-frontend-03",
    title: "UI Engineer",
    company: "Nimbus AI",
    location: "Pune",
    workMode: "On-site",
    type: "Full-time",
    salaryRange: "INR 16L - 22L",
    posted: "3 days ago",
    topPick: true,
    aiMatch: 84,
    description:
      "Design and implement high-fidelity interfaces for AI products with deep focus on accessibility and motion quality.",
    skills: ["React", "CSS", "Accessibility", "Framer Motion"],
  },
  {
    id: "job-frontend-04",
    title: "Frontend Developer (Contract)",
    company: "Arcbyte Digital",
    location: "Chennai",
    workMode: "Remote",
    type: "Contract",
    salaryRange: "INR 1400/hr - 2000/hr",
    posted: "5 days ago",
    topPick: false,
    aiMatch: 78,
    description:
      "Ship marketing and dashboard interfaces for client projects with tight feedback loops and clear delivery timelines.",
    skills: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "job-frontend-05",
    title: "Product Frontend Engineer",
    company: "Finpilot",
    location: "Hyderabad",
    workMode: "Hybrid",
    type: "Full-time",
    salaryRange: "INR 20L - 28L",
    posted: "6 hours ago",
    topPick: true,
    aiMatch: 95,
    description:
      "Lead frontend architecture for financial workflows and collaborate closely with product analytics and design systems.",
    skills: ["React", "TypeScript", "Design Systems", "Performance"],
  },
  {
    id: "job-frontend-06",
    title: "Frontend Developer",
    company: "Orbit Systems",
    location: "Delhi",
    workMode: "Hybrid",
    type: "Full-time",
    salaryRange: "INR 15L - 21L",
    posted: "4 days ago",
    topPick: false,
    aiMatch: 80,
    description:
      "Work on user-facing modules for enterprise tools, optimize rendering performance, and improve UI consistency across products.",
    skills: ["React", "Next.js", "GraphQL", "Testing"],
  },
  {
    id: "job-frontend-07",
    title: "Junior Frontend Developer",
    company: "Brightline Media",
    location: "Remote",
    workMode: "Remote",
    type: "Full-time",
    salaryRange: "INR 8L - 12L",
    posted: "2 days ago",
    topPick: false,
    aiMatch: 73,
    description:
      "Contribute to content platform interfaces, fix UI bugs, and support feature delivery under senior mentorship.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "job-frontend-08",
    title: "Part-time React Developer",
    company: "Scalebridge",
    location: "Bengaluru",
    workMode: "On-site",
    type: "Part-time",
    salaryRange: "INR 55K - 75K / month",
    posted: "1 week ago",
    topPick: false,
    aiMatch: 69,
    description:
      "Support frontend sprint work for internal products with focus on component quality and cross-browser compatibility.",
    skills: ["React", "TypeScript", "Storybook", "Git"],
  },
];
