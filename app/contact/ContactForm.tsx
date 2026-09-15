"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-sm border border-accent-dim bg-panel p-6">
        <p className="font-display text-lg font-semibold text-text">
          Message sent
        </p>
        <p className="mt-2 text-sm text-text-muted">
          Darcy will get back to you directly. For anything urgent, call
          0439 844 118.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-text">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-text placeholder:text-text-faint focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-text">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-text placeholder:text-text-faint focus:border-accent"
            placeholder="04XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-text placeholder:text-text-faint focus:border-accent"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-text">
          What's the job?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-text placeholder:text-text-faint focus:border-accent"
          placeholder="Vehicle, what's happening, and whether it needs to be mobile or can come into the workshop."
        />
      </div>

      <button
        type="submit"
        className="rounded-sm bg-cta px-6 py-3 font-semibold text-cta-ink transition-colors hover:bg-cta-strong"
      >
        Send message
      </button>
    </form>
  );
}
