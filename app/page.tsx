// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
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
              Learn about Resourcin
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-slate-600">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">
              Based in Lagos, serving Africa &amp; beyond
            </span>
            <span className="inline-flex items-center rounded-full bg-brandLightGreen/10 px-3 py-1 text-brandDarkGreen">
              Executive &amp; senior hiring
            </span>
            <span className="inline-flex items-center rounded-full bg-brandYellow/10 px-3 py-1 text-brandBlue">
              Embedded HR &amp; people operations
            </span>
          </div>
        </div>

        {/* Right: Employer / Talent panels */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              For employers
            </p>
            <h2 className="mt-2 text-sm font-semibold text-slate-900">
              Talent and people solutions that scale with your business.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              We support founders, CEOs and HR leaders with senior recruitment,
              embedded HR and people operations projects – from first hires to
              multi-market teams.
            </p>
            <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
              <li>• Executive &amp; specialist searches.</li>
              <li>• Embedded HR / PeopleOS support.</li>
              <li>• Compensation, job architecture &amp; org design.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/services"
                className="text-[11px] font-semibold text-brandBlue hover:underline"
              >
                Explore services
              </Link>
              <span className="text-[11px] text-slate-400">•</span>
              <Link
                href="/for-employers/request-talent"
                className="text
