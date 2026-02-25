import type { Metadata } from "next";

const BASE_URL = "https://dm.kaalamithra-ai.com";

export const metadata: Metadata = {
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
