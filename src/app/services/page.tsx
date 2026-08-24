import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI discovery, strategy, architecture, RAG, agentic AI, secure AI engineering, AI-ready data platforms, governance and production operations.",
};

const services = [
  {
    n: "01",
    title: "AI Discovery, Strategy & Architecture",
    summary:
      "Identify where AI can create value, what should be prioritised, and what is realistically ready to move forward.",
    items: [
      "AI discovery and readiness assessment",
      "Use-case prioritisation and value assessment",
      "Data, security and technical feasibility review",
      "Target architecture for RAG and agentic AI",
      "Build vs. buy vs. fine-tune assessment",
      "POC, MVP and production roadmap",
    ],
  },
  {
    n: "02",
    title: "AI-Ready Data Platforms",
    summary:
      "Build the governed data foundation required for reliable enterprise AI.",
    items: [
      "Ingestion and ETL/ELT pipeline design",
      "Lakehouse and warehouse architecture",
      "Vector search and retrieval infrastructure",
      "Data quality, lineage and observability",
      "Identity, access and data controls",
      "AI-ready data platform modernisation",
    ],
  },
  {
    n: "03",
    title: "RAG & Agentic AI Engineering",
    summary:
      "Build grounded AI systems and agents that can retrieve, reason, use tools and operate within defined controls.",
    items: [
      "RAG and advanced retrieval pipeline engineering",
      "Hybrid search, reranking and retrieval tuning",
      "Agent orchestration and governed tool use",
      "Groundedness and retrieval evaluation",
      "Golden dataset and regression testing",
      "Latency, cost and accuracy optimisation",
    ],
  },
  {
    n: "04",
    title: "Secure AI Engineering",
    summary:
      "Design AI systems with security controls built into the architecture rather than added after deployment.",
    items: [
      "AI threat modelling and security architecture",
      "Prompt injection and jailbreak testing",
      "Data leakage and access-control review",
      "Secure agent tool-use and connector design",
      "Identity, secrets and API security",
      "Red-teaming and production security review",
    ],
  },
  {
    n: "05",
    title: "AI Governance & Responsible AI",
    summary:
      "Put practical controls around AI risk, accountability, human oversight and production use.",
    items: [
      "AI governance operating model and RACI",
      "Model and solution risk assessment",
      "Human-in-the-loop approval controls",
      "Audit trails and decision logging",
      "Responsible AI policies and guardrails",
      "Governance aligned to regulatory and organisational requirements",
    ],
  },
  {
    n: "06",
    title: "AI Operations & Continuous Improvement",
    summary:
      "Keep production AI reliable, observable, cost-controlled and continuously improving after launch.",
    items: [
      "Production monitoring and observability",
      "Retrieval and generation quality monitoring",
      "Drift and regression detection",
      "Latency, token and infrastructure cost monitoring",
      "Incident response and operational runbooks",
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
          <div className="mono-label text-xs text-verified mb-6">
            Services
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-3xl tracking-tight">
            From AI discovery to production — one accountable delivery path.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-dark max-w-2xl leading-relaxed">
            Start with discovery and assessment, engage us for a specific
            capability, or work with us across the full lifecycle — from
            prioritisation and architecture through build, governance,
            security and production operations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.05}
              className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-16 border-t border-line pt-10"
            >
              <div>
                <div className="mono-label text-xs text-signal mb-3">
                  {s.n}
                </div>

                <h2 className="font-display text-2xl font-medium">
                  {s.title}
                </h2>

                <p className="text-sm text-slate mt-3 leading-relaxed max-w-xs">
                  {s.summary}
                </p>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink flex gap-3"
                  >
                    <span
                      className="text-verified mt-1.5 h-1 w-1 rounded-full bg-verified shrink-0"
                      aria-hidden="true"
                    />
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
            Not sure where to start? Begin with AI Discovery & Assessment.
          </h2>

          <p className="text-sm sm:text-base text-slate max-w-xl leading-relaxed">
            We can help identify the right use cases, assess readiness,
            clarify risks and define the practical path from opportunity to
            implementation.
          </p>

          <Button asChild size="lg" variant="primary">
            <Link href="/contact">
              Book a scoping call
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}