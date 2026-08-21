import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design, build, secure, govern, and operate production AI systems: RAG, agents, data platforms, and AI governance frameworks.",
};

const services = [
  {
    n: "01",
    title: "AI strategy & design",
    summary: "Turn a use-case backlog into an architecture worth funding.",
    items: [
      "Use-case selection and ROI modelling",
      "Reference architecture for RAG and agentic systems",
      "Build vs. buy vs. fine-tune assessment",
      "Data readiness and gap analysis",
    ],
  },
  {
    n: "02",
    title: "Data platform engineering",
    summary: "The pipelines and infrastructure that make AI outputs trustworthy.",
    items: [
      "Ingestion and ETL/ELT pipeline design",
      "Vector store and retrieval infrastructure",
      "Data quality, lineage, and access controls",
      "Warehouse and lakehouse modernisation",
    ],
  },
  {
    n: "03",
    title: "RAG & agent development",
    summary: "Production-grade retrieval and orchestration, evaluated before it ships.",
    items: [
      "Retrieval pipeline build and tuning",
      "Multi-agent orchestration and tool use",
      "Evaluation harnesses and regression testing",
      "Latency, cost, and accuracy optimisation",
    ],
  },
  {
    n: "04",
    title: "AI security",
    summary: "Threat modelling built for how LLM systems actually fail.",
    items: [
      "Prompt injection and jailbreak testing",
      "Data leakage and access-control review",
      "Secure tool-use and agent sandboxing",
      "Red-teaming before go-live",
    ],
  },
  {
    n: "05",
    title: "AI governance",
    summary: "Controls that satisfy risk and compliance without slowing delivery.",
    items: [
      "Model risk management frameworks",
      "Audit trails and decision logging",
      "Policy design aligned to your regulatory context",
      "Governance operating models and RACI",
    ],
  },
  {
    n: "06",
    title: "Operate & support",
    summary: "What happens after launch, so systems stay accurate and available.",
    items: [
      "Production monitoring and alerting",
      "Ongoing evaluation and drift detection",
      "Incident response and on-call support",
      "Continuous improvement roadmap",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-ink text-paper grid-schematic-dark overflow-hidden">
        <div className="aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
          <div className="mono-label text-xs text-verified mb-6">Services</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-2xl tracking-tight">
            Six capabilities. One accountable team from design to operations.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-dark max-w-xl leading-relaxed">
            Engage us end-to-end, or bring us in at a single stage — most
            clients start with strategy or security review before committing
            to a full build.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 border-t border-line pt-10">
              <div>
                <div className="mono-label text-xs text-signal mb-3">{s.n}</div>
                <h2 className="font-display text-2xl font-medium">{s.title}</h2>
                <p className="text-sm text-slate mt-3 leading-relaxed max-w-xs">{s.summary}</p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-ink flex gap-3">
                    <span className="text-verified mt-1.5 h-1 w-1 rounded-full bg-verified shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col items-start gap-6">
          <h2 className="font-display text-3xl font-medium max-w-xl">
            Not sure which stage you need? Tell us where it&apos;s stuck.
          </h2>
          <Button asChild size="lg" variant="primary">
            <Link href="/contact">Book a scoping call</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
