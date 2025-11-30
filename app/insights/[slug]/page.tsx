// app/insights/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsightBySlug } from "../../../lib/insights";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const insight = await getInsightBySlug(params.slug);

  if (!insight) {
    return {
      title: "Insight not found | Resourcin",
    };
  }

  return {
    title: `${insight.title} | Resourcin`,
    description: insight.excerpt ?? undefined,
  };
}

export default async function InsightPage({ params }: PageProps) {
  const insight = await getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  const published =
    insight.publishedAt && new Date(insight.publishedAt);

  const paragraphs =
    insight.content?.split(/\n\s*\n/) ?? [];

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <article>
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            {insight.category && (
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium">
                {insight.category}
              </span>
            )}
            {published && (
              <span>{published.toDateString()}</span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">
            {insight.title}
          </h1>
          {insight.excerpt && (
            <p className="mt-3 text-sm text-slate-600">
              {insight.excerpt}
            </p>
          )}
        </header>

        <div className="prose prose-sm max-w-none text-slate-800">
          {paragraphs.length ? (
            paragraphs.map((p, idx) => (
              <p key={idx} className="mb-3">
                {p}
              </p>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              Content will be available soon.
            </p>
          )}
        </div>
      </article>
    </main>
  );
}
