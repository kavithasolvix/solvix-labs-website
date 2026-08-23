import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Free AI & Data Consultation",
  description:
    "Book a free 30-minute AI & Data consultation with Solvix to discuss your business challenge, architecture, GenAI, RAG, agentic AI, automation or data platform opportunity.",
};

const outcomes = [
  {
    title: "Clarify the business problem",
    copy: "Understand the priority, desired outcome, current environment and the constraints that matter.",
  },
  {
    title: "Identify the right direction",
    copy: "Explore whether Data, GenAI, RAG, Agentic AI, automation or a combination is the best fit.",
  },
  {
    title: "Surface initial considerations",
    copy: "Highlight the main data, architecture, security, integration and governance considerations.",
  },
  {
    title: "Agree the next practical step",
    copy: "Determine whether to move into discovery, an architecture assessment, POC/MVP or implementation.",
  },
];

const defaultBookingUrl =
  "https://outlook.office.com/book/Free30MinuteAIDataConsultation@solvixlabs.com.au/?ismsaljsauthenabled";

export default function ConsultationPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || defaultBookingUrl;

  return (
    <section className="border-b border-line bg-[#f7f8f5]">
      <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mono-label text-[10px] text-signal">Free consultation</div>

        <div className="mt-4 max-w-4xl">
          <h1 className="font-display text-4xl font-medium leading-[1.03] text-ink sm:text-5xl lg:text-[3.55rem]">
            Let&apos;s turn your AI or Data challenge into a clear next step.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate sm:text-lg">
            Book a complimentary 30-minute conversation to discuss your current challenge,
            architecture, platform or AI initiative and determine the most practical way forward.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate">
          <span className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-signal" /> 30 minutes
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-signal" /> Microsoft Teams
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-signal" /> No obligation
          </span>
        </div>

        <div className="mt-10 overflow-hidden rounded-sm border border-line bg-paper shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                What you&apos;ll get in 30 minutes
              </h2>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div key={outcome.title} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-signal/10">
                      <CheckCircle2 className="h-4 w-4 text-signal" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-medium text-ink">{outcome.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate">{outcome.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line bg-[#f2f4ef] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="mono-label text-[10px] text-signal">Choose a time</div>
              <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
                View live availability
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate">
                Microsoft Bookings will open securely in a new tab. Choose a date and time, then
                enter your own name, email, organisation and a short description of the challenge
                you&apos;d like to discuss.
              </p>

              <Button asChild className="mt-6 h-11 px-5">
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  View available times <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>

              <p className="mt-4 text-xs leading-5 text-slate">
                Scheduling and meeting invitations are managed securely through Microsoft Bookings.
              </p>
            </div>
          </div>

          <div className="border-t border-line px-6 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
                <div>
                  <h2 className="font-display text-lg font-medium text-ink">Not ready to book?</h2>
                  <p className="mt-1 text-sm leading-6 text-slate">
                    Send us your requirements and we&apos;ll get back to you.
                  </p>
                </div> 
              </div>

              <Button asChild variant="outline" className="shrink-0">
                <Link href="/contact#enquiry">
                  Send an enquiry <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
