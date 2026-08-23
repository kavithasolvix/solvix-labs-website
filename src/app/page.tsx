import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Database,
  Bot,
  Network,
  Gauge,
  Building2,
  Factory,
  Landmark,
  CheckCircle2,
  Sparkles,
  Cloud,
  Target,
  Cpu,
  Layers3,
  Search,
  BriefcaseBusiness,
  Workflow,
  Rocket,
  Scale,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Pickaxe,
  HardHat,
  Laptop2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PipelineDiagram } from "@/components/site/PipelineDiagram";
import { Reveal } from "@/components/site/Reveal";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const services = [
  {
    icon: Network,
    kicker: "DISCOVER",
    title: "AI Use Case Discovery & Prioritisation",
    desc: "Identify high-value AI opportunities and turn them into a practical, prioritised implementation roadmap.",
  },
  {
    icon: Layers3,
    kicker: "MODERNISE",
    title: "Data & AI Platform Modernisation",
    desc: "Build secure, scalable data and AI foundations across Azure, Databricks, Snowflake and modern cloud platforms.",
  },
  {
    icon: Bot,
    kicker: "BUILD",
    title: "GenAI & RAG Solutions",
    desc: "Build enterprise assistants grounded in organisational knowledge, documents and business data.",
  },
  {
    icon: Workflow,
    kicker: "AUTOMATE",
    title: "AI Agents & Workflow Automation",
    desc: "Design AI agents that retrieve information, use approved business tools and automate controlled workflows.",
  },
  {
    icon: Rocket,
    kicker: "VALIDATE",
    title: "POC & MVP Development",
    desc: "Rapidly design and validate AI solutions before committing to full-scale implementation.",
  },
  {
    icon: Network,
    kicker: "ARCHITECT",
    title: "Enterprise AI Architecture",
    desc: "Define secure, governed and production-ready architectures for scaling AI across the organisation.",
  },
  {
    icon: ShieldCheck,
    kicker: "GOVERN",
    title: "AI Governance & Responsible AI",
    desc: "Establish security, access controls, evaluation, monitoring and responsible-AI guardrails.",
  },
  {
    icon: Gauge,
    kicker: "OPERATE",
    title: "Production & Operationalisation",
    desc: "Move successful prototypes into monitored, scalable and supportable production solutions.",
  },
];

const industries = [
  { icon: Factory, title: "Transport & Logistics", desc: "Operational copilots, WHS and risk intelligence, fleet and shipment visibility, document automation and workflow agents." },
  { icon: Building2, title: "Energy & Utilities", desc: "Asset intelligence, field-worker copilots, forecasting, engineering knowledge and operational analytics." },
  { icon: Landmark, title: "Government & Public Sector", desc: "Policy and document intelligence, citizen-service assistants, case automation and secure enterprise knowledge search." },
  { icon: Pickaxe, title: "Mining & Resources", desc: "Safety copilots, maintenance intelligence, operational knowledge, compliance automation and predictive analytics." },
  { icon: Cpu, title: "Manufacturing", desc: "Quality intelligence, predictive maintenance, SOP assistants, production analytics and computer vision." },
  { icon: Scale, title: "Financial Services & Insurance", desc: "Document processing, compliance assistants, claims automation, fraud and risk analytics, and enterprise knowledge." },
  { icon: HeartPulse, title: "Healthcare", desc: "Knowledge assistants, administrative automation, document intelligence and workforce analytics." },
  { icon: ShoppingBag, title: "Retail & Consumer", desc: "Customer intelligence, demand forecasting, product assistants, personalisation and supply-chain analytics." },
  { icon: HardHat, title: "Construction & Engineering", desc: "Project-document intelligence, safety and compliance agents, engineering knowledge search and project risk analytics." },
  { icon: BriefcaseBusiness, title: "Professional Services", desc: "Enterprise knowledge assistants, proposal automation, document intelligence and workflow agents." },
  { icon: GraduationCap, title: "Education", desc: "Student-service assistants, knowledge search, administrative automation and learning analytics." },
  { icon: Laptop2, title: "Technology & SaaS", desc: "AI-enabled applications, agentic workflows, AI platform architecture, RAG, evaluation and observability." },
];

const engineeringPrinciples = [
  {
    title: "Domain-led",
    desc: "Start with the operational problem and business context — not a preferred technology.",
  },
  {
    title: "Tool-agnostic",
    desc: "Select cloud, data, model and orchestration technologies based on the use case and existing ecosystem.",
  },
  {
    title: "Customer-owned",
    desc: "Engineer solutions inside the customer's cloud, data and security environment.",
  },
  {
    title: "Secure by design",
    desc: "Identity, access, data protection, guardrails and auditability are architectural concerns from day one.",
  },
  {
    title: "Production-focused",
    desc: "Evaluation, observability, reliability, cost and operations are designed before go-live.",
  },
];

const technologyGroups = [
  {
    icon: Cloud,
    kicker: "CLOUD & AI",
    title: "Cloud Platforms",
    items: [
      "Microsoft Azure",
      "Amazon Web Services",
      "Google Cloud",
    ],
  },
  {
    icon: Layers3,
    kicker: "DATA",
    title: "Data Platforms",
    items: [
      "Databricks",
      "Snowflake",
      "Microsoft Fabric",
      "BigQuery",
    ],
  },
  {
    icon: Cpu,
    kicker: "AI ENGINEERING",
    title: "AI & Agent Platforms",
    items: [
      "Azure AI",
      "AWS Bedrock",
      "Google Vertex AI",
      "LangChain & LangGraph",
    ],
  },
  {
    icon: Search,
    kicker: "MODELS & RETRIEVAL",
    title: "Models & Knowledge",
    items: [
      "OpenAI",
      "Anthropic",
      "Llama & Mistral",
      "Vector & Hybrid Search",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-ink text-paper grid-schematic-dark">
        <div className="aurora" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-a" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-b" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pb-0 pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-center">

            {/* Hero copy */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line-dark bg-ink/40 px-3 py-1.5 mono-label text-[11px] text-verified">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-verified" />
                Secure AI &amp; Data Engineering
              </div>

              <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.01] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                Enterprise AI,
                <span className="block text-gradient">
                  engineered for production.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-dark sm:text-lg">
                Solvix Labs helps organisations design, build and operationalise
                governed AI platforms, agentic solutions and AI-ready data
                foundations — inside the customer&apos;s environment.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="inverse"
                  className="shadow-[0_0_44px_-12px_var(--signal)]"
                >
                  <Link href="/consultation">
                    Book a 30-Minute Consultation
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="text-paper hover:bg-paper/10"
                >
                  <Link href="/services">
                    Explore capabilities
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-dark">
                {[
                  "Customer-owned environment",
                  "Secure-by-design",
                  "Production focused",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-verified" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero architecture visual */}
            <div className="relative min-h-[430px]">
              <div className="architecture-card">

                <div className="flex items-center justify-between border-b border-line-dark px-5 py-4">
                  <div>
                    <div className="mono-label text-[10px] text-slate-dark">
                      Solvix engineering pattern
                    </div>

                    <div className="mt-1 font-display text-base">
                      Secure AI System
                    </div>
                  </div>

                  <div className="status-pill">
                    <span />
                    production-ready
                  </div>
                </div>

                <div className="p-5">
                  <div className="system-map">

                    <div className="map-node map-node-wide">
                      <Target size={17} className="text-blue-400" />

                      <div>
                        <b>Business Problem</b>
                        <small>domain · value · risk</small>
                      </div>
                    </div>

                    <div className="map-flow">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="map-node">
                        <Database size={17} />

                        <div>
                          <b>Data Foundation</b>
                          <small>trusted context</small>
                        </div>
                      </div>

                      <div className="map-node">
                        <ShieldCheck size={17} />

                        <div>
                          <b>Security</b>
                          <small>identity · controls</small>
                        </div>
                      </div>
                    </div>

                    <div className="map-flow">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="map-node map-node-accent">
                      <Bot size={18} />

                      <div>
                        <b>RAG + Agents + Tools</b>
                        <small>grounded orchestration</small>
                      </div>

                      <Sparkles
                        size={15}
                        className="ml-auto text-verified"
                      />
                    </div>

                    <div className="map-flow">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="map-node">
                        <Gauge size={17} />

                        <div>
                          <b>Evaluation</b>
                          <small>quality · cost</small>
                        </div>
                      </div>

                      <div className="map-node">
                        <Network size={17} />

                        <div>
                          <b>Operations</b>
                          <small>observe · improve</small>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical pipeline */}
          <div className="mt-16 border-t border-line-dark pb-14 pt-8">
            <PipelineDiagram />
          </div>
        </div>

        {/* Domain strip */}
        <div className="border-y border-line-dark bg-ink-raised/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5">

            <span className="mono-label text-[10px] text-slate-dark">
              Applied across
            </span>

            {[
              "Transport & Logistics",
              "Utilities & Infrastructure",
              "Regulated Enterprise",
              "Data-Intensive Organisations",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-3 text-sm text-paper/75"
              >
                <span className="h-1 w-1 rounded-full bg-signal" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SERVICES                                                           */}
      {/* ================================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="mono-label mb-3 text-xs text-slate">
            What we do
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
            <h2 className="max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              From AI opportunity to production — with clear delivery outcomes.
            </h2>

            <p className="leading-relaxed text-slate">
              Clear, focused services that take an organisation from opportunity discovery through architecture, build, governance and production.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
            >
              <article className="service-card h-full">

                <div className="flex items-start justify-between">
                  <span className="mono-label text-[10px] text-signal">
                    {service.kicker}
                  </span>

                  <div className="icon-tile">
                    <service.icon size={20} />
                  </div>
                </div>

                <h3 className="mt-12 font-display text-xl font-medium">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {service.desc}
                </p>

                <div className="service-line mt-8" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/* ENGINEERING PRINCIPLES                                             */}
      {/* ================================================================== */}

      <section className="border-y border-line-dark bg-ink text-paper grid-schematic-dark">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <Reveal>
            <div className="mono-label mb-3 text-xs text-verified">
              How Solvix engineers
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_.65fr] lg:items-end">

              <h2 className="max-w-3xl font-display text-3xl font-medium sm:text-4xl">
                Business context first.
                <br />
                Technology chosen for fit.
              </h2>

              <p className="leading-relaxed text-slate-dark">
                Solvix is not tied to one cloud, model, data platform or
                orchestration framework.
              </p>

            </div>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-5">

            {engineeringPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="flex min-h-[220px] flex-col bg-ink p-6"
              >

                <div className="h-1 w-8 bg-signal" />

                <h3 className="mt-10 font-display text-lg font-medium">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-dark">
                  {principle.desc}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line-dark pt-6 text-xs text-slate-dark">

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-verified" />
              Domain-led
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-verified" />
              Tool-agnostic
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-verified" />
              Cloud-agnostic
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-verified" />
              Customer-environment delivery
            </span>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INDUSTRIES                                                         */}
      {/* ================================================================== */}

      <section
        id="industries"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <Reveal>
          <div className="mono-label mb-3 text-xs text-slate">
            Industries We Support
          </div>

          <h2 className="max-w-3xl font-display text-3xl font-medium sm:text-4xl">
            Data & AI applied to industry-specific business problems.
          </h2>

          <p className="mt-5 max-w-3xl leading-relaxed text-slate">
            We apply modern Data & AI capabilities across industries, combining enterprise architecture, data platforms, GenAI and agentic AI to solve practical operational challenges.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => (
            <Reveal
              key={industry.title}
              delay={index * 0.07}
            >
              <article className="industry-card">

                <div className="industry-visual">
                  <div className="industry-grid" />

                  <industry.icon
                    className="relative h-9 w-9 text-paper"
                    strokeWidth={1.35}
                  />

                  <div className="industry-pulse" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-medium">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {industry.desc}
                  </p>
                </div>

              </article>
            </Reveal>
          ))}

        </div>

        <div className="mt-8 border-l-2 border-signal pl-5">
          <p className="max-w-3xl text-sm leading-relaxed text-slate">

            <strong className="font-medium text-ink">
              Domain-led, not domain-limited.
            </strong>{" "}

            Solvix adapts architecture and technology to the organisation, business problem and operating environment — without claiming the same domain depth in every sector.

          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TECHNOLOGY                                                         */}
      {/* ================================================================== */}

      <section className="border-y border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <Reveal>
            <div className="mono-label mb-3 text-xs text-slate">
              Technology selected for fit
            </div>

            <div className="grid gap-7 lg:grid-cols-[1fr_.7fr] lg:items-end">

              <h2 className="max-w-3xl font-display text-3xl font-medium sm:text-4xl">
                Cloud, data and AI technologies
                selected for fit.
              </h2>

              <p className="leading-relaxed text-slate">
                Architecture is shaped around the client&apos;s existing
                ecosystem, security requirements, data architecture and
                production needs — without forcing a preferred vendor stack.
              </p>

            </div>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">

            {technologyGroups.map((group) => (
              <div
                key={group.title}
                className="group bg-paper p-6 transition-colors hover:bg-paper-raised"
              >

                <div className="flex items-center justify-between">

                  <span className="mono-label text-[10px] text-signal">
                    {group.kicker}
                  </span>

                  <group.icon
                    className="h-5 w-5 text-slate transition-colors group-hover:text-signal"
                    strokeWidth={1.5}
                  />

                </div>

                <h3 className="mt-8 font-display text-lg font-medium">
                  {group.title}
                </h3>

                <div className="mt-5 space-y-3">

                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate"
                    >
                      <span className="h-1 w-1 rounded-full bg-verified" />
                      {item}
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>

          <div className="mt-8 flex flex-col gap-5 border border-line bg-paper px-6 py-5 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="font-display text-sm font-medium text-ink">
                Platform-independent engineering
              </div>

              <div className="mt-1 text-xs text-slate">
                Cloud, model and framework choices are driven by architecture fit.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">

              <span className="border border-line px-3 py-2 mono-label text-[10px] text-slate">
                AZURE
              </span>

              <span className="border border-line px-3 py-2 mono-label text-[10px] text-slate">
                AWS
              </span>

              <span className="border border-line px-3 py-2 mono-label text-[10px] text-slate">
                GCP
              </span>

              <span className="border border-line px-3 py-2 mono-label text-[10px] text-slate">
                OPEN SOURCE
              </span>

            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA                                                                */}
      {/* ================================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>

          <div className="cta-panel grid-schematic relative overflow-hidden p-9 sm:p-14">

            <div className="cta-glow" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>
                <div className="mono-label mb-4 text-xs text-signal">
                  Start focused. Engineer for production.
                </div>

                <h2 className="max-w-2xl font-display text-3xl font-medium sm:text-4xl">
                  Have a Data or AI challenge? Start with a free 30-minute AI & Data consultation.
                </h2>

                <p className="mt-5 max-w-xl leading-relaxed text-slate">
                  Discuss the business problem, identify the right AI or data approach, assess feasibility and leave with clear next steps.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                variant="primary"
              >
                <Link href="/consultation">
                  Book a 30-Minute Consultation
                </Link>
              </Button>

            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}