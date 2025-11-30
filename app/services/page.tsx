// app/services/page.tsx
import type { Metadata } from "next";
import {
  Briefcase,
  Users,
  LineChart,
  Globe2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Resourcin",
  description:
    "Recruitment, embedded HR and people operations support for founders and leadership teams.",
};

const services = [
  {
    icon: Briefcase,
    title: "Executive & senior hiring",
    description:
      "Searches for VP, Director and senior IC roles across product, engineering, operations, finance and more.",
  },
  {
    icon: Users,
    title: "Embedded HR / PeopleOS",
    description:
      "Hands-on HR support embedded into your team – payroll, policies, performance and day-to-day people operations.",
  },
  {
    icon: LineChart,
    title: "Compensation & org design",
    description:
      "Job architecture, salary bands and incentive structures that match your stage and market reality.",
  },
  {
    icon: Globe2,
    title: "Distributed & cross-border teams",
    description:
      "Help with hiring and managing talent across Nigeria, Africa and global hubs with the right structures.",
  },
  {
    icon: ShieldCheck,
    title: "HR projects & advisory",
    description:
      "Targeted projects on performance, culture, compliance, onboarding, and HR systems selection.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-semibold text-slate-900">
          Services
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Resourcin helps founders, CEOs and HR leaders close critical roles,
          build simple but robust people systems, and give structure to how
          work gets done.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#172965]/5">
                <Icon className="h-5 w-5 text-[#172965]" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-1 text-xs text-slate-600">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
