// app/for-employers/request-talent/page.tsx
import type { Metadata } from "next";
import RequestTalentForm from "../../../components/RequestTalentForm";

export const metadata: Metadata = {
  title: "Request Talent | Resourcin",
  description:
    "Share a simple brief and Resourcin will scope your search and next steps for hiring.",
};

export default function RequestTalentPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <h1 className="text-3xl font-semibold text-slate-900">
            Tell us who you&apos;re hiring
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Use this form to share a quick brief: roles, locations, timelines
            and any constraints. We&apos;ll respond with a simple plan and fee
            structure – not a 40–slide deck.
          </p>

          <div className="mt-8 space-y-2 text-xs text-slate-500">
            <p>• Senior and niche mandates across Africa and global.</p>
            <p>• We can work on retained, contained or success-only structures.</p>
          </div>
        </section>

        <section>
          <RequestTalentForm />
        </section>
      </div>
    </main>
  );
}
