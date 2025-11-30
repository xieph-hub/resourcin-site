// app/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Resourcin | Recruitment & Human Capital Advisors",
  description:
    "Resourcin Human Capital Advisors Limited connects talent with opportunity – delivering sharper, faster and more honest hiring decisions for employers and talent.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
        {/* Left: Story + CTAs */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brandBlue/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brandBlue">
            <span className="h-1.5 w-1.5 rounded-full bg-brandYellow" />
            Recruitment &amp; people advisory
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Sharper, faster and more honest hiring decisions.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-700">
            Resourcin Human Capital Advisors Limited is a human capital
            solutions partner that{" "}
            <span className="font-semibold text-brandBlue">
              bridges the gap between talent and opportunity
            </span>
            . We design senior searches, build hiring pipelines and create
            simple, practical people systems for teams across Nigeria, Africa
            and beyond.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700">
            Our mission is to{" "}
            <span className="font-semibold">
              “Connect Talent with Opportunity, Redefining Workplaces and
              Careers”.
            </span>{" "}
            Whether you&apos;re hiring a critical leader or planning your next
            career move, we help you move with clarity and speed.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/for-employers/request-talent"
              className="inline-flex items-center rounded-full bg-brandBlue px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#101b47]"
            >
              Request talent
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-xs font-semibold text-slate-800 hover:border-brandBlue hover:bg-brandBlue/5"
            >
              Learn about Res
