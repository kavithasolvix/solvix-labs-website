import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solvix Labs is an Australian AI and data consultancy helping organisations move from AI discovery and architecture to secure, governed, production-ready systems.",
};

const principles = [
  {
    title: "Start with the business problem",
    desc: "We begin by understanding the problem, value, data readiness, risks, and constraints before recommending technology or architecture.",
  },
  {
    title: "Production is the deliverable",
    desc: "A successful prototype is only the beginning. We design for reliability, security, observability, governance, and real operational use.",
  },
  {
    title: "Governance is built in",
    desc: "Security, access controls, human oversight, auditability, and responsible AI are designed alongside the solution rather than added later.",
  },
  {
    title: "Build within your environment",
    desc: "We work with your existing platforms, data, security standards, and operating model rather than forcing unnecessary technology change.",
  },
  {
    title: "Make the solution measurable",
    desc: "AI quality, retrieval performance, latency, cost, and operational behaviour need to be evaluated and monitored, not assumed.",
  },
  {
    title: "Leave your team able to run it",
    desc: "Architecture decisions, documentation, runbooks, handover, and internal enablement are part of the delivery so capability stays with your organisation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-ink text-paper grid-schematic-dark overflow-hidden">
        <div className="aurora" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
          <div className="mono-label text-xs text-verified mb-6">
            About Solvix Labs
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-3xl tracking-tight">
            From AI ambition to secure, governed production.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-dark max-w-2xl leading-relaxed">
            Solvix Labs is an Australian AI and data consulting boutique
            helping organisations identify the right AI opportunities, design
            the right architecture, and move solutions into secure, governed,
            production-ready operation.
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-dark max-w-2xl leading-relaxed">
            We work across AI strategy, data platforms, RAG, agentic AI,
            security, governance and production operations — because
            enterprise AI succeeds when these disciplines are designed
            together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="mono-label text-xs text-slate mb-3">
            How we work
          </div>

          <h2 className="font-display text-3xl font-medium max-w-2xl mb-12">
            Practical principles for building enterprise AI that can move
            beyond experimentation.
          </h2>
        </Reveal>

        <div className="grid gap-px bg-line sm:grid-cols-2 border border-line">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.07}
              className="bg-paper p-8 h-full"
            >
              <h3 className="font-display text-lg font-medium">
                {p.title}
              </h3>

              <p className="text-sm text-slate mt-3 leading-relaxed">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mono-label text-xs text-slate mb-3">
              Who we work with
            </div>

            <h2 className="font-display text-3xl font-medium max-w-md">
              Organisations that need AI to work in the real world.
            </h2>

            <p className="text-sm text-slate mt-4 leading-relaxed max-w-lg">
              We work with technology, data, AI, security, operations, and
              risk leaders who need to move from AI interest or experimentation
              to a solution that is practical, measurable, secure, governed,
              and ready for production.
            </p>
          </div>

          <div className="flex md:justify-end">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">
                Start a conversation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}