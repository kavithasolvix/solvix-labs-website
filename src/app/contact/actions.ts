"use server";

import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Enter a valid email address"),
  company: z.string().max(200).optional(),
  message: z.string().min(10, "Tell us a bit more about what you need").max(5000),
  // honeypot field — real users never fill this in; bots usually do
  website: z.string().max(0).optional(),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
};

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    website: formData.get("website")?.toString() ?? "",
  };

  const parsed = ContactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof ContactSchema>;
      fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Please check the form and try again.", fieldErrors };
  }

  // Honeypot tripped — silently report success so bots don't learn anything.
  if (parsed.data.website) {
    return { status: "success" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return {
      status: "error",
      message: "This form isn't configured to send email yet. Please email us directly.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { name, email, company, message } = parsed.data;

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Solvix Labs Site <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "hello@solvixlabs.com.au",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\nMessage:\n${message}`,
    });

    return { status: "success" };
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or email us directly.",
    };
  }
}
