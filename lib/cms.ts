// lib/cms.ts
// Minimal CMS stub so TypeScript compiles cleanly.
// You can wire this up to Notion or any other source later.

export type CMSPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  content?: string | null;
  publishedAt?: string | null;
};

export async function getAllPosts(): Promise<CMSPost[]> {
  // TODO: fetch from your real CMS later
  return [];
}

export async function getPostBySlug(
  slug: string
): Promise<CMSPost | null> {
  if (!slug) return null;
  // TODO: fetch a real post by slug later
  return null;
}







