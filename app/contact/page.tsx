// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Resourcin",
  description:
    "Get in touch with Resourcin about hiring, embedded HR, and people operations support.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <h1 className="text-3xl font-semibold text-slate-900">
            Contact Resourcin
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Share a bit about your company and what you&apos;re trying to
            achieve. We&apos;ll respond with a concrete next step – not a
            generic deck.
          </p>

          <div className="mt-8 space-y-2 text-xs text-slate-500">
            <p>• Typical response time: within one business day.</p>
            <p>• For urgent searches, mention timelines in your message.</p>
          </div>
        </section>

        <section>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
