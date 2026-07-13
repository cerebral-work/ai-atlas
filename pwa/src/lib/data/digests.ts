// Daily AI/ML digest — populated at runtime from the aiml-digests R2 bucket.
// The site never bundles digest content; a daily job writes JSON objects and
// this module fetches them client-side.

// R2 bucket `aiml-digests` fronted by a custom domain (full CDN, no r2.dev throttle).
export const DIGEST_BASE = "https://digests.cerebral.work";

export type DigestCategory =
  | "models"
  | "research"
  | "hardware"
  | "industry"
  | "policy"
  | "tools";

export interface DigestItem {
  headline: string;
  url: string;
  source: string;
  category: DigestCategory;
  summary: string;
}

export interface Digest {
  date: string; // YYYY-MM-DD
  title?: string;
  items: DigestItem[];
}

export interface DigestIndex {
  updated: string; // ISO timestamp of last write
  dates: string[]; // YYYY-MM-DD, newest first
}

export const digestCategoryMeta: Record<DigestCategory, { label: string; color: string }> = {
  models: { label: "Models", color: "#5e72e4" },
  research: { label: "Research", color: "#a29bfe" },
  hardware: { label: "Hardware", color: "#f1c40f" },
  industry: { label: "Industry", color: "#3498db" },
  policy: { label: "Policy", color: "#e74c3c" },
  tools: { label: "Tools", color: "#2ecc71" },
};

export async function fetchDigestIndex(): Promise<DigestIndex> {
  const res = await fetch(`${DIGEST_BASE}/index.json`, { cache: "no-cache" });
  if (!res.ok) throw new Error(`digest index: HTTP ${res.status}`);
  return res.json();
}

export async function fetchDigest(date: string): Promise<Digest> {
  // no-cache: the daily job overwrites <date>.json in place (corrections/revisions),
  // so a stale HTTP-cached copy must never win.
  const res = await fetch(`${DIGEST_BASE}/${date}.json`, { cache: "no-cache" });
  if (!res.ok) throw new Error(`digest ${date}: HTTP ${res.status}`);
  return res.json();
}
