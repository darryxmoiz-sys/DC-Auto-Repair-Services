import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | DC Auto Repair Services",
  description:
    "Reach DC Auto Repair Services in Kingaroy, QLD, or across the South Burnett via the mobile unit. Call, email or send a message.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 md:px-8 md:pt-20">
        <p className="text-sm font-medium text-accent-strong">Contact</p>
        <h1 className="mt-4 max-w-[20ch] font-display text-4xl font-bold text-text sm:text-5xl">
          Kingaroy workshop, or wherever the vehicle is.
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div className="rounded-sm border border-border p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-accent-strong">
                Mobile unit
              </p>
              <p className="mt-2 text-text-muted">
                Covers Kingaroy and the wider South Burnett region for
                on-site fit-outs, ag call-outs and jobs too big to trailer
                in.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-text">Phone</p>
              <a
                href="tel:+61439844118"
                className="mt-1 block text-lg text-accent-strong hover:text-accent"
              >
                0439 844 118
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-text">Email</p>
              <a
                href="mailto:darcy@dcautorepairservices.com.au"
                className="mt-1 block text-lg text-accent-strong hover:text-accent"
              >
                darcy@dcautorepairservices.com.au
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-text">Service area</p>
              <p className="mt-1 text-text-muted">
                Kingaroy, QLD, and the South Burnett region
              </p>
            </div>
          </div>

          <div className="rounded-sm border border-border bg-panel p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-text">
              Send a message
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Include the vehicle and the job — Darcy will reply directly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
