"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactState } from "@/app/contact/actions";
import { Label, Input, Textarea } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" variant="primary" disabled={pending}>
      {pending ? "Sending…" : "Send message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="border border-verified/40 bg-verified/5 p-8 flex items-start gap-4">
        <CheckCircle2 className="h-5 w-5 text-verified shrink-0 mt-0.5" />
        <div>
          <p className="font-display text-lg font-medium">Message received.</p>
          <p className="text-sm text-slate mt-1">
            We reply to every enquiry within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot — hidden from real users via CSS, not display:none, so bots that
          check visibility still fill it in */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required autoComplete="name" />
        {state.fieldErrors?.name && (
          <p className="text-xs text-amber mt-1">{state.fieldErrors.name}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
          {state.fieldErrors?.email && (
            <p className="text-xs text-amber mt-1">{state.fieldErrors.email}</p>
          )}
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
      </div>

      <div>
        <Label htmlFor="message">What are you trying to solve?</Label>
        <Textarea id="message" name="message" rows={6} required />
        {state.fieldErrors?.message && (
          <p className="text-xs text-amber mt-1">{state.fieldErrors.message}</p>
        )}
      </div>

      {state.status === "error" && state.message && !state.fieldErrors && (
        <p className="text-sm text-amber">{state.message}</p>
      )}

      <SubmitButton />

      {/*
        Add Cloudflare Turnstile here before going live:
        <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
        and verify the token server-side in actions.ts before sending mail.
      */}
    </form>
  );
}
