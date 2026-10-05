"use client";

import { useState } from "react";
import { profile } from "@/lib/resume";

type Status = "idle" | "sending" | "sent" | "error";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/api/contact";

const fieldClassName =
  "w-full rounded-[2px] border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const honeypot = String(data.get("company") ?? "");

    if (honeypot) return;

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
      setStatus("error");
      setNote("Please add your name, a valid e-mail and a message of at least 10 characters.");
      return;
    }

    const mailSubject = subject || `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sending");
    setNote("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!response.ok) {
        const detail = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(detail?.error ?? `Request failed: ${response.status}`);
      }
      setStatus("sent");
      setNote("Thanks — your message is on its way to my inbox. I'll reply soon.");
      form.reset();
      return;
    } catch (error) {
      const reason = error instanceof Error ? error.message : "Unknown error";
      window.location.href = mailto;
      setStatus("error");
      setNote(
        `Server said: ${reason} — opening your e-mail app as a back-up.`,
      );
      form.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-[2px] border border-line bg-white p-6 text-left"
    >
      <h2 className="text-lg font-medium text-ink">Send a message</h2>
      <p className="mt-1 text-sm text-muted">
        Fill this in and it goes straight to {profile.email}.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[11px] tracking-wider text-muted uppercase">
            Name
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            className={`mt-1.5 ${fieldClassName}`}
          />
        </label>

        <label className="block">
          <span className="font-mono text-[11px] tracking-wider text-muted uppercase">
            E-mail
          </span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`mt-1.5 ${fieldClassName}`}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="font-mono text-[11px] tracking-wider text-muted uppercase">
          Subject
        </span>
        <input
          type="text"
          name="subject"
          placeholder="Internship, role, collaboration…"
          className={`mt-1.5 ${fieldClassName}`}
        />
      </label>

      <label className="mt-4 block">
        <span className="font-mono text-[11px] tracking-wider text-muted uppercase">
          Message
        </span>
        <textarea
          name="message"
          rows={6}
          placeholder="Tell me a little about what you have in mind."
          className={`mt-1.5 resize-y ${fieldClassName}`}
        />
      </label>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-[2px] bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        <a
          href={`mailto:${profile.email}`}
          className="text-sm text-accent-deep underline underline-offset-2 hover:text-accent"
        >
          or e-mail me directly
        </a>
      </div>

      {note ? (
        <p
          role="status"
          className={`mt-4 rounded-[2px] border px-3 py-2 text-sm ${
            status === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-line bg-accent-soft text-accent-deep"
          }`}
        >
          {note}
        </p>
      ) : null}
    </form>
  );
}
