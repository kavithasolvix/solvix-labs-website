import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Solvix Labs what you're trying to solve — AI strategy, RAG and agent development, data platforms, security, or governance.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid md:grid-cols-2 gap-16">
      <div>
        <div className="mono-label text-xs text-slate mb-6">Contact</div>
        <h1 className="font-display text-4xl font-medium leading-[1.05] max-w-md">
          Tell us where the project is stuck.
        </h1>
        <p className="mt-6 text-slate leading-relaxed max-w-sm">
          Whether you need a full build or a second opinion on an AI
          architecture already underway, this goes straight to the team —
          no queue, no account manager relay.
        </p>
        <dl className="mt-12 space-y-6 text-sm">
          <div>
            <dt className="mono-label text-xs text-slate">Email</dt>
            <dd className="mt-1">hello@solvixlabs.com</dd>
          </div>
          <div>
            <dt className="mono-label text-xs text-slate">Response time</dt>
            <dd className="mt-1">Within one business day</dd>
          </div>
          <div>
            <dt className="mono-label text-xs text-slate">Based in</dt>
            <dd className="mt-1">Sydney · working with clients remotely worldwide</dd>
          </div>
        </dl>
      </div>
      <div className="relative">
        <ContactForm />
      </div>
    </section>
  );
}
