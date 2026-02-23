export type CompanyItem = {
  id: string;
  name: string;
  hiringCount: string;
  accent: string;
};

export const mockCompanies: CompanyItem[] = [
  { id: "northstar", name: "Northstar Labs", hiringCount: "18 open roles", accent: "from-sky-200 to-cyan-100" },
  { id: "pulse", name: "Pulse Commerce", hiringCount: "12 open roles", accent: "from-violet-200 to-indigo-100" },
  { id: "nimbus", name: "Nimbus AI", hiringCount: "8 open roles", accent: "from-emerald-200 to-teal-100" },
  { id: "arcbyte", name: "Arcbyte Digital", hiringCount: "9 open roles", accent: "from-amber-200 to-orange-100" },
  { id: "finpilot", name: "Finpilot", hiringCount: "15 open roles", accent: "from-fuchsia-200 to-pink-100" },
  { id: "orbit", name: "Orbit Systems", hiringCount: "11 open roles", accent: "from-blue-200 to-slate-100" },
];
