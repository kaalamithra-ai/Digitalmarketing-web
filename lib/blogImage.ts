import { readdirSync } from "node:fs";
import path from "node:path";

const BLOG_PUBLIC_DIR = path.join(process.cwd(), "public", "blog");
const FALLBACK_IMAGE = "/blog/default.png";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function listPngFiles(): string[] {
  try {
    return readdirSync(BLOG_PUBLIC_DIR).filter((file) =>
      file.toLowerCase().endsWith(".png")
    );
  } catch {
    return [];
  }
}

const imageFiles = listPngFiles();
const imageIndex = new Map<string, string>(
  imageFiles.map((file) => [normalize(file), file])
);

function overlapScore(a: string, b: string): number {
  const aTokens = new Set(a.split("-").filter(Boolean));
  const bTokens = new Set(b.split("-").filter(Boolean));
  let score = 0;
  for (const token of aTokens) {
    if (bTokens.has(token)) score += 1;
  }
  return score;
}

export function getBlogImage(slug: string, title?: string): string {
  const candidates = [slug, title ?? ""]
    .map((value) => normalize(value))
    .filter(Boolean);

  for (const candidate of candidates) {
    const exact = imageIndex.get(candidate);
    if (exact) return `/blog/${encodeURIComponent(exact)}`;
  }

  for (const candidate of candidates) {
    for (const [key, file] of imageIndex.entries()) {
      if (key.startsWith(candidate) || candidate.startsWith(key)) {
        return `/blog/${encodeURIComponent(file)}`;
      }
    }
  }

  let bestFile: string | null = null;
  let bestScore = 0;
  for (const candidate of candidates) {
    for (const [key, file] of imageIndex.entries()) {
      const score = overlapScore(candidate, key);
      if (score > bestScore) {
        bestScore = score;
        bestFile = file;
      }
    }
  }

  if (bestFile && bestScore > 0) {
    return `/blog/${encodeURIComponent(bestFile)}`;
  }

  return FALLBACK_IMAGE;
}
