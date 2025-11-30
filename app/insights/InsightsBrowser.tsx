// app/insights/InsightsBrowser.tsx
"use client";

import Link from "next/link";

type InsightMeta = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string | null;
  coverUrl: string | null;
  publishedAt: string | null;
  content: string | null;
};

type InsightsBrowserProps = {
  insights: InsightMeta[];
};

function formatDate(value: string | null): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function InsightsBrowser({ insights }: InsightsBrowserProps) {
  const hasInsights = insights && insights.length > 0;

  return (
    <section className="mt-8 space-y-6">
      {!hasInsights && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
          No published insights yet.
          <br />
          Once your Notion database has entries with a Title and Slug, they’ll
          appear here automatically.
        </div>
      )}

      {hasInsights && (
        <div className="grid gap-5 md:grid-cols-2">
          {insights.map((post) => {
            const dateLabel = formatDate(post.publishedAt);

            return (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {post.coverUrl && (
                  <div className="relative h-40 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.coverUrl}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    {post.category && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                        {post.category}
                      </span>
                    )}
                    {dateLabel && (
                      <span className="text-[11px] text-slate-500">
                        {dateLabel}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-2 text-sm font-semibold leading-snug text-slate-900">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="inline-flex items-start"
                    >
                      <span className="bg-gradient-to-r from-brandBlue/10 to-brandBlue/0 bg-[length:0px_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-all duration-200 group-hover:bg-[length:100%_2px]">
                        {post.title}
                      </span>
                    </Link>
                  </h2>

                  {post.excerpt && (
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-700">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mt-4 flex items-center justify-between text-[11px] text-slate-600">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-brandBlue hover:underline"
                    >
                      Read insight
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
