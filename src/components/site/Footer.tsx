import { SolvixLogo } from "@/components/site/SolvixLogo";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line-dark bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <SolvixLogo />

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-dark">
              Enterprise AI and data engineering. We design, build, secure,
              govern and operationalise production AI systems — including RAG,
              agents and the data platforms underneath them.
            </p>

            <div className="mt-7 space-y-3 text-sm text-slate-dark">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-verified" />
                <span>Adelaide, South Australia</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                <span>Working with clients nationally</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div className="mono-label mb-5 text-[10px] text-slate-dark">
              Company
            </div>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-paper/75 transition-colors hover:text-signal"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/#industries"
                  className="text-paper/75 transition-colors hover:text-signal"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-paper/75 transition-colors hover:text-signal"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-paper/75 transition-colors hover:text-signal"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-2">
            <div className="mono-label mb-5 text-[10px] text-slate-dark">
              Capabilities
            </div>

            <ul className="space-y-3 text-sm text-paper/75">
              <li>AI Advisory</li>
              <li>Agentic AI &amp; RAG</li>
              <li>AI &amp; Data Platforms</li>
              <li>Secure AI Engineering</li>
              <li>AI Governance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="mono-label mb-5 text-[10px] text-slate-dark">
              Contact
            </div>

            <a
              href="mailto:hello@solvixlabs.com"
              className="flex items-center gap-3 text-sm text-paper/75 transition-colors hover:text-signal"
            >
              <Mail className="h-4 w-4 text-verified" />
              solvix.ai.consulting@gmail.com
            </a>

            <Link
              href="/contact"
              className="mt-8 block border border-line-dark bg-ink-raised p-5 transition-colors hover:border-signal/40"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-display text-sm font-medium text-paper">
                    Start a conversation
                  </div>

                  <div className="mt-2 text-xs leading-5 text-slate-dark">
                    Discuss your AI, data or platform opportunity.
                  </div>
                </div>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-signal" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 text-xs text-slate-dark md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Solvix Labs Pty Ltd. All rights reserved.
          </span>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-paper"
            >
              Privacy
            </Link>

            <span className="mono-label text-[10px] text-signal">
              Systems built to be governed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}