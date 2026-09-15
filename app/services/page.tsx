import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | DC Auto Repair Services",
  description:
    "Auto-electrical, air-conditioning, diagnostics, canopy and touring fit-outs, caravans, ag and marine — Kingaroy and South Burnett.",
};

const serviceGroups = [
  {
    title: "Auto-electrical",
    body: "Fault-finding and repair on anything with a wiring loom — cars, utes, trucks, farm gear. Rewiring, circuit protection, custom switch panels, and diagnosis when something's drawing power it shouldn't.",
  },
  {
    title: "Air-conditioning",
    body: "Regas, leak detection, compressor and condenser repair, full system installs. Work is carried out under refrigerant handling licence AU067317, so it's done to standard, not guesswork.",
  },
  {
    title: "Diagnostics & repairs",
    body: "Computer-based fault diagnosis for modern vehicle systems, paired with hands-on mechanical know-how for when the fix isn't in the software.",
  },
  {
    title: "Starter motors, alternators & batteries",
    body: "Testing, reconditioning and replacement. If your vehicle's not starting or not charging, this is usually where the problem lives — and where it gets found fast.",
  },
  {
    title: "Car audio",
    body: "Head unit, speaker and amp installs, wired in clean with no shortcuts on power or grounding.",
  },
  {
    title: "Accessory & canopy fit-outs",
    body: "Bar work, lighting, UHF, dual-battery systems and canopy electrics — built around how the vehicle actually gets used, not a generic install sheet.",
  },
  {
    title: "4WD & off-grid touring builds",
    body: "The specialty. Lithium house batteries, pure sine inverters, fridge slides, interior and rear work lighting, and mounting systems designed to survive corrugations — like the recent MW Canopy fit-out with its 230Ah lithium bank, 2000W inverter, and removable jack-off leg system.",
  },
  {
    title: "Caravans & trailers",
    body: "Electrical systems, brake wiring, solar and battery setups for anything you tow behind you.",
  },
  {
    title: "Agriculture",
    body: "Electrical repair and fit-out for farm machinery and equipment across the South Burnett.",
  },
  {
    title: "Marine",
    body: "Boat electrics, battery systems and accessory wiring, built to handle a marine environment.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 md:px-8 md:pt-20">
        <p className="text-sm font-medium text-accent-strong">Services</p>
        <h1 className="mt-4 max-w-[22ch] font-display text-4xl font-bold text-text sm:text-5xl">
          One shop for the electrics, the air-con, and the build.
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg text-text-muted">
          From a starter motor that won't turn over to a full touring canopy
          fit-out, it's handled by the same set of hands — in the Kingaroy
          workshop or on-site with the mobile unit.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="divide-y divide-border border-y border-border">
          {serviceGroups.map((s) => (
            <div
              key={s.title}
              className="grid gap-3 py-7 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10"
            >
              <h2 className="font-display text-xl font-semibold text-text">
                {s.title}
              </h2>
              <p className="max-w-[62ch] text-text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-border p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-text">
              Not sure which of these covers your job?
            </h2>
            <p className="mt-2 text-text-muted">
              Call or send a message — Darcy will tell you straight.
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
