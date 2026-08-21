import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solvix Labs is an enterprise AI and data consultancy built for the gap between an AI pilot and a governed production system.",
};

const principles = [
  {
    title: "Production is the deliverable",
    desc: "A demo that impresses in a workshop and a system that survives an audit are different products. We build the second one.",
  },
  {
    title: "Governance isn't a phase",
    desc: "Policy, audit trails, and access controls get designed alongside the architecture — not retrofitted once legal asks questions.",
  },
  {
    title: "Your data, your constraints",
    desc: "We work inside your existing stack and regulatory context rather than prescribing a rebuild you didn't ask for.",
  },
  {
    title: "We leave you able to run it",
    desc: "Documentation, runbooks, and internal enablement are part of the engagement, not a separate line item.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-ink text-paper grid-schematic-dark overflow-hidden">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
          <div className="mono-label text-xs text-verified mb-6">About Solvix Labs</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-2xl tracking-tight">
            We were built for the gap between pilot and production.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-dark max-w-xl leading-relaxed">
            Solvix Labs is a specialist consultancy for enterprises building
            AI on real production data, under real regulatory scrutiny.
            We work at the intersection of data engineering, AI development,
            security, and governance — because production AI needs all four
            at once, not in sequence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="mono-label text-xs text-slate mb-3">How we work</div>
          <h2 className="font-display text-3xl font-medium max-w-2xl mb-12">
            Four principles that shape every engagement.
          </h2>
        </Reveal>
        <div className="grid gap-px bg-line sm:grid-cols-2 border border-line">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07} className="bg-paper p-8 h-full">
              <h3 className="font-display text-lg font-medium">{p.title}</h3>
              <p className="text-sm text-slate mt-3 leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl font-medium max-w-md">
              Who we work with
            </h2>
            <p className="text-sm text-slate mt-4 leading-relaxed max-w-md">
              Heads of Data, Heads of AI, CTOs, and risk &amp; compliance
              leaders at mid-market and enterprise organisations who need an
              AI system that a regulator, an auditor, and an engineering team
              can all sign off on.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
