// app/insights/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getInsightsList } from "../../lib/insights";

export const metadata: Metadata = {
  title: "Insights | Resourcin",
  description:
    "Thinking on senior hiring, talent markets, compensation, and practical people operations.",
};

export default async function InsightsPage() {
  const insights = await getInsightsList();

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold text-slate-900">
          Insights
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Practical thinking for founders, hiring managers and HR leaders on
          senior hiring, interview design, scorecards, compensation and the
          realities of building teams across Africa and globally.
        </p>
      </header>

      {insights.length === 0 ? (
        <p className="text-sm text-slate-500">
          No insights are published yet.
        </p>
      ) : (
        <ul className="space-y-6">
          {insights.map((insight) => (
            <li
              key={insight.id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#172965]/60"
            >
              <Link
                href={`/insights/${insight.slug}`}
                className="block"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  {insight.category && (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium">
                      {insight.category}
                    </span>
                  )}
                  {insight.publishedAt && (
                    <span>{new Date(insight.publishedAt).toDateString()}</span>
                  )}
                </div>
                <h2 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-[#172965]">
                  {insight.title}
                </h2>
                {insight.excerpt && (
                  <p className="mt-2 text-sm text-slate-600">
                    {insight.excerpt}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
