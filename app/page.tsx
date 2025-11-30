// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-16">
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
            simple, practical hiring processes for teams across Nigeria,
            Africa and beyond.
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

          {/* Chips aligned with your services */}
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-slate-600">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">
              Contingent &amp; retained search
            </span>
            <span className="inline-flex items-center rounded-full bg-brandLightGreen/10 px-3 py-1 text-brandDarkGreen">
              Embedded recruiters &amp; RPO
            </span>
            <span className="inline-flex items-center rounded-full bg-brandYellow/10 px-3 py-1 text-brandBlue">
              White-label job board (coming soon)
            </span>
          </div>
        </div>

        {/* Right: Employer / Talent panels */}
        <div className="space-y-4">
          {/* For employers */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              For employers
            </p>
            <h2 className="mt-2 text-sm font-semibold text-slate-900">
              Talent acquisition, search &amp; hiring models.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              We help growth-focused teams with contingent and retained search,
              repeat-role pipelines, and flexible embedded recruiter / RPO
              style engagements – so you can hire with conviction, not guesswork.
            </p>
            <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
              <li>• Talent acquisition (contingent search).</li>
              <li>• Executive &amp; leadership search (retained).</li>
              <li>• Talent pipelining &amp; bench building for repeat roles.</li>
              <li>• Embedded recruiter &amp; RPO squads; EOR via partners.</li>
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
                className="text-[11px] font-semibold text-brandBlue hover:underline"
              >
                Share a brief
              </Link>
            </div>
          </div>

          {/* For talent */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              For talent
            </p>
            <h2 className="mt-2 text-sm font-semibold text-slate-900">
              Curated opportunities and support for your next move.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              Our job mandates and talent network focus on meaningful work,
              growth potential and environments where you can actually do your
              best work.
            </p>
            <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
              <li>• Curated roles with growing and established teams.</li>
              <li>• Practical guidance on interviews and transitions.</li>
              <li>• A long-term view of your career, not just the next offer.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {/* Update this when ThinkATS / jobs is live */}
              <Link
                href="/contact"
                className="text-[11px] font-semibold text-brandBlue hover:underline"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Resourcin strip */}
      <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold text-slate-900">
            Context-rich searches
          </p>
          <p className="mt-1 text-xs text-slate-700">
            We start with the realities of your team, market and role – then
            design a search and interview process that reflects that context.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-900">
            Honest, grounded advice
          </p>
          <p className="mt-1 text-xs text-slate-700">
            Clear signals on compensation, candidate fit and trade-offs – not
            vague market speak or generic CV forwarding.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-900">
            Built for ongoing partnerships
          </p>
          <p className="mt-1 text-xs text-slate-700">
            Many of our relationships span multiple roles, markets and phases of
            growth. We optimise for the long-term, not just one mandate.
          </p>
        </div>
      </section>
    </div>
  );
}
