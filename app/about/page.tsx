// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Resourcin | Human Capital Advisors",
  description:
    "Learn about Resourcin Human Capital Advisors Limited – our mission, vision and how we connect talent with opportunity for employers and talent.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero / Intro */}
      <section className="mb-12 space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#172965]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#172965]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFC000]" />
          About Us
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Resourcin Human Capital Advisors Limited
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-700">
          At Resourcin Human Capital Advisors Limited, we are a dynamic human
          capital solutions provider committed to bridging the gap between{" "}
          <span className="font-semibold text-[#172965]">
            talent and opportunity
          </span>
          . We specialize in customized recruitment and job placement solutions,
          leveraging advanced technology, strategic HR expertise, and deep
          industry insights to meet the evolving needs of businesses and job
          seekers alike.
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-700">
          Our all-in-one approach streamlines the hiring process for
          organizations—helping them build high-performing teams—while equipping
          individuals with the resources and guidance they need to advance their
          careers.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#172965]/10 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-[#172965]">Our Vision</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            To become the leading human capital solutions provider, empowering
            businesses and individuals with transformative talent and career
            solutions that drive success.
          </p>
        </div>

        <div className="rounded-2xl border border-[#172965]/10 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-[#172965]">Our Mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Our mission is to{" "}
            <span className="font-semibold">
              “Connect Talent with Opportunity, Redefining Workplaces and
              Careers”.
            </span>{" "}
            Whether you are a business seeking to attract top talent or an
            individual looking for your next role, we are dedicated to
            supporting your goals with innovation, expertise, and care.
          </p>
        </div>
      </section>

      {/* For Employers / For Talent */}
      <section className="mb-12 grid gap-6 md:grid-cols-2">
        {/* Employers */}
        <div
          id="employers"
          className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-900">
            For Employers
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            We offer innovative talent acquisition solutions that scale with
            your business, regardless of size. Whether you&apos;re a startup or
            an established enterprise, our solutions are designed to help you
            attract, hire, and retain top talent—aligning your workforce with
            your objectives and driving sustained growth.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
            <li>• Senior and specialist recruitment mandates.</li>
            <li>• Embedded HR and people operations support.</li>
            <li>• Compensation, org design and workforce planning.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-[#172965]/30 px-4 py-2 text-xs font-semibold text-[#172965] hover:border-[#172965] hover:bg-[#172965]/5"
            >
              Explore services
            </Link>
            <Link
              href="/for-employers/request-talent"
              className="inline-flex items-center rounded-full bg-[#172965] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#101b47]"
            >
              Request talent
            </Link>
          </div>
        </div>

        {/* Talent */}
        <div
          id="talent"
          className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-900">
            For Talent
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Our intuitive job boards and career support solutions provide direct
            access to curated opportunities, resources and expert guidance—
            empowering you to accelerate your career growth.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
            <li>• Curated roles across high-growth companies.</li>
            <li>• Practical support on interview readiness and transitions.</li>
            <li>• A long-term view of your career, not just your next job.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            {/* Adjust this href later to your live job board / talent portal */}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 hover:border-[#306B34] hover:bg-[#306B34]/5"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      {/* How we work / Values flavour */}
      <section className="mb-12 rounded-2xl border border-[#306B34]/15 bg-[#306B34]/5 p-5">
        <h2 className="text-sm font-semibold text-[#306B34]">
          How we think about talent
        </h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-900">
              Technology-enabled, human-led
            </p>
            <p className="text-xs text-slate-700">
              We combine modern tools and data with grounded judgment, context
              and conversations that actually move decisions forward.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-900">
              Built for evolving teams
            </p>
            <p className="text-xs text-slate-700">
              Whether you&apos;re building your first leadership team or
              scaling across markets, we focus on fit, capability and runway.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-900">
              Careers as long-term journeys
            </p>
            <p className="text-xs text-slate-700">
              For candidates, we think beyond the next offer—towards meaningful
              work, growth and well-aligned environments.
            </p>
          </div>
        </div>
      </section>

      {/* Company details & contact */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">
          Company details
        </h2>
        <div className="mt-3 grid gap-4 text-xs text-slate-700 md:grid-cols-2">
          <div className="space-y-1">
            <p className="font-medium text-slate-900">
              Resourcin Human Capital Advisors Limited
            </p>
            <p>
              Address:
              <br />
              18b Engineer Muali Subair Street,
              <br />
              Lekki, Lagos.
            </p>
          </div>
          <div className="space-y-1">
            <p>
              Phone:{" "}
              <a
                href="tel:+2347045572393"
                className="text-[#172965] hover:underline"
              >
                +234 704 557 2393
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:hello@resourcin.com"
                className="text-[#172965] hover:underline"
              >
                hello@resourcin.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.resourcin.com"
                className="text-[#172965] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                resourcin.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          <span className="inline-flex items-center rounded-full bg-[#172965]/5 px-3 py-1 text-[#172965]">
            Based in Lagos, serving Africa and beyond
          </span>
          <span className="inline-flex items-center rounded-full bg-[#64C247]/10 px-3 py-1 text-[#306B34]">
            Human capital, recruitment & people solutions
          </span>
        </div>
      </section>
    </main>
  );
}
