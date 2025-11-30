// components/Footer.tsx
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#172965] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + About */}
          <div className="md:col-span-2 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#FFC000]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC000]" />
              Resourcin Human Capital Advisors Limited
            </div>
            <h2 className="text-sm font-semibold text-white">
              About Resourcin
            </h2>
            <p className="text-xs leading-relaxed text-slate-200/80">
              At Resourcin Human Capital Advisors Limited, we bridge the gap
              between talent and opportunity. We specialize in customized
              recruitment and job placement solutions, leveraging advanced
              technology, strategic HR expertise, and deep market insight to
              serve both employers and talent.
            </p>
            <p className="text-xs leading-relaxed text-slate-200/80">
              Our mission is simple:{" "}
              <span className="font-semibold">
                “Connect Talent with Opportunity, Redefining Workplaces and
                Careers”.
              </span>
            </p>
          </div>

          {/* For Employers */}
          <div className="space-y-3 text-xs">
            <h3 className="text-sm font-semibold text-white">
              For employers
            </h3>
            <p className="text-slate-200/80">
              Talent acquisition and people solutions that scale with your
              business – from early-stage teams to established enterprises.
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FFC000] transition"
                >
                  Services overview
                </Link>
              </li>
              <li>
                <Link
                  href="/for-employers/request-talent"
                  className="hover:text-[#FFC000] transition"
                >
                  Request talent
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Socials */}
          <div className="space-y-3 text-xs">
            <h3 className="text-sm font-semibold text-white">
              Get in touch
            </h3>
            <div className="space-y-1 text-slate-200/80">
              <p>
                18b Engineer Muali Subair Street,
                <br />
                Lekki, Lagos.
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+2347045572393"
                  className="hover:text-[#FFC000] transition"
                >
                  +234 704 557 2393
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@resourcin.com"
                  className="hover:text-[#FFC000] transition"
                >
                  hello@resourcin.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.resourcin.com"
                  className="hover:text-[#FFC000] transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  resourcin.com
                </a>
              </p>
            </div>

            <div className="pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200/80">
                Follow us
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href="https://www.linkedin.com/company/resourcin"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/5 px-3 py-1 hover:bg-[#FFC000] hover:text-[#172965] transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/resourcinhq"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/5 px-3 py-1 hover:bg-[#FFC000] hover:text-[#172965] transition"
                >
                  X (Twitter)
                </a>
                <a
                  href="https://www.instagram.com/resourcinhq/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/5 px-3 py-1 hover:bg-[#FFC000] hover:text-[#172965] transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 text-[11px] text-slate-200/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {CURRENT_YEAR} Resourcin Human Capital Advisors Limited. All
            rights reserved.
          </p>
          <p>
            Vision: To become the leading human capital solutions provider,
            empowering businesses and individuals with transformative talent and
            career solutions that drive success.
          </p>
        </div>
      </div>
    </footer>
  );
}
