// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

const mainLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex items-center">
            <Image
              src="/resourcin-logo.svg"
              alt="Resourcin Human Capital Advisors"
              width={140}
              height={32}
              priority
            />
          </span>
          <span className="sr-only">Resourcin – Human Capital Advisors</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-4 text-xs font-medium text-slate-600">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1 transition ${
                    isActive(pathname, link.href)
                      ? "bg-[#172965]/5 text-[#172965]"
                      : "hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/for-employers/request-talent"
              className="hidden text-xs font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline lg:inline-block"
            >
              For employers
            </Link>
            <Link
              href="/for-employers/request-talent"
              className="inline-flex items-center gap-1 rounded-full bg-[#172965] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#101b47]"
            >
              <span>Request talent</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-4 w-4 text-slate-700"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <ul className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-2 py-2 ${
                      isActive(pathname, link.href)
                        ? "bg-[#172965]/5 text-[#172965]"
                        : "hover:bg-slate-100 hover:text-slate-900"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="mt-2 border-t border-slate-100 pt-2">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  For employers
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/for-employers/request-talent"
                    className="text-xs text-slate-700 hover:text-slate-900"
                    onClick={() => setOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/for-employers/request-talent"
                    className="inline-flex items-center justify-center rounded-full bg-[#172965] px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#101b47]"
                    onClick={() => setOpen(false)}
                  >
                    Request talent
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
