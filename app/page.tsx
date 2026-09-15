import Link from "next/link";
import PatternPlaceholder from "./components/PatternPlaceholder";

const buildSpecs = [
  { label: "Battery", value: "230Ah lithium house bank" },
  { label: "Inverter", value: "2000W pure sine wave" },
  { label: "Lighting", value: "Interior + rear work lighting circuits" },
  { label: "Fridge", value: "Drop-down slide, powered off the house bank" },
  { label: "Floor", value: "Custom-fitted flooring, sealed edges" },
  { label: "Mounting", value: "Removable jack-off leg system" },
];

const services = [
  {
    title: "Auto-electrical",
    body: "Fault-finding, rewiring, and circuit builds on cars, utes, ag gear and marine electronics.",
  },
  {
    title: "Air-conditioning",
    body: "Regas, repair and install, done right the first time.",
  },
  {
    title: "Diagnostics & repairs",
    body: "Computer diagnostics through to starter motors, alternators and batteries.",
  },
  {
    title: "Canopy & touring fit-outs",
    body: "Lithium power, fridge slides, lighting and flooring built for real off-grid use.",
  },
  {
    title: "Caravans & trailers",
    body: "Electrical systems and accessory fit-outs for anything you tow.",
  },
  {
    title: "Ag, marine & audio",
    body: "Farm equipment, boats, and car audio installs done to the same standard.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:items-start">
          <div className="fade-up">
            <p className="text-sm font-medium text-accent-strong">
              Kingaroy, QLD &middot; mobile unit + workshop
            </p>
            <h1 className="mt-4 max-w-[16ch] font-display text-5xl font-bold text-text sm:text-6xl">
              Built to run off the grid, not just off the shelf.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg text-text-muted">
              Darcy fits out utes, vans and canopies with electrical systems
              built for real touring — lithium power, fridge slides, lighting
              and mounting that hold up on corrugations, not just showroom
              floors. Same precision goes into every auto-electrical and
              air-con job that comes through the workshop.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+61439844118"
                className="rounded-sm bg-cta px-6 py-3 font-semibold text-cta-ink transition-colors hover:bg-cta-strong"
              >
                Call 0439 844 118
              </a>
              <Link
                href="/gallery"
                className="rounded-sm border border-border px-6 py-3 font-semibold text-text transition-colors hover:border-accent"
              >
                See the canopy build
              </Link>
            </div>
          </div>

          {/* Spec panel — the anchor build */}
          <div className="grain-panel fade-up rounded-sm border border-border p-6" style={{ animationDelay: "0.1s" }}>
            <p className="text-xs font-medium uppercase tracking-wide text-accent-strong">
              Recent build
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-text">
              MW Canopy, off-grid touring fit-out
            </h2>
            <dl className="mt-5 space-y-3 border-t border-border pt-5">
              {buildSpecs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 text-sm">
                  <dt className="text-text-faint">{s.label}</dt>
                  <dd className="text-right text-text">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Canopy build photo strip */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <PatternPlaceholder
            pattern="diag"
            label="MW Canopy — exterior"
            className="aspect-[4/3]"
          />
          <PatternPlaceholder
            pattern="grid"
            label="Lithium & inverter install"
            className="aspect-[4/3]"
          />
          <PatternPlaceholder
            pattern="dot"
            label="Fridge slide & flooring"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Services overview */}
      <section className="border-t border-border bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[20ch] font-display text-3xl font-bold text-text">
              Everything with a wire, a compressor, or a mounting bolt.
            </h2>
            <Link
              href="/services"
              className="text-sm font-semibold text-accent-strong hover:text-accent"
            >
              Full service list &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-sm border border-border bg-surface p-5 transition-colors hover:border-accent-dim"
              >
                <h3 className="font-display text-lg font-semibold text-text">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-border p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-text">
              Planning a build, or just need it fixed?
            </h2>
            <p className="mt-2 max-w-[46ch] text-text-muted">
              Darcy runs a mobile unit across the South Burnett and a workshop
              in Kingaroy. Tell him what you're driving and what you need it
              to do.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-sm bg-cta px-6 py-3 font-semibold text-cta-ink transition-colors hover:bg-cta-strong"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
