import type { Metadata } from "next";
import PatternPlaceholder from "../components/PatternPlaceholder";

export const metadata: Metadata = {
  title: "About | DC Auto Repair Services",
  description:
    "Darcy runs DC Auto Repair Services from a mobile unit and Kingaroy workshop, specialising in off-grid touring electrical builds.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-medium text-accent-strong">About</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-text sm:text-5xl">
              Darcy, one workshop, and a ute that goes to the job.
            </h1>
            <p className="mt-6 text-lg text-text-muted">
              DC Auto Repair Services runs two ways: a workshop based in
              Kingaroy, and a mobile unit that covers the South Burnett
              region. If it can come to the shop, it comes to the shop. If
              it can't, the shop comes to it.
            </p>
          </div>
          <PatternPlaceholder
            pattern="grid"
            label="Darcy, workshop"
            className="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="border-t border-border bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-text">
                Why the touring builds
              </h2>
              <p className="mt-4 text-text-muted">
                Most auto-electrical work is diagnosis and repair — find the
                fault, fix the fault. Touring builds are different: they're
                designed from nothing. A lithium bank, an inverter, lighting
                circuits and a fridge slide all have to work together and
                survive being driven somewhere with no phone signal.
              </p>
              <p className="mt-4 text-text-muted">
                That's the work Darcy gravitated toward, and it's become the
                specialty — building electrical systems for people who
                actually take their vehicle off-grid, not just for the look
                of it.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-text">
                The mobile + workshop model
              </h2>
              <p className="mt-4 text-text-muted">
                Diagnostics, air-conditioning, and smaller electrical jobs
                run through the Kingaroy workshop, where the full toolset and
                test equipment live. Fit-outs, farm call-outs, and anything
                too big or awkward to trailer in get handled by the mobile
                unit, on-site.
              </p>
              <p className="mt-4 text-text-muted">
                It keeps the tools and the test gear centralised while
                still meeting customers where the job actually is.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <PatternPlaceholder
            pattern="diag"
            label="Mobile unit on-site"
            className="aspect-square"
          />
          <PatternPlaceholder
            pattern="dot"
            label="Workshop bay, Kingaroy"
            className="aspect-square"
          />
          <PatternPlaceholder
            pattern="grid"
            label="Canopy fit-out in progress"
            className="aspect-square"
          />
        </div>
      </section>
    </div>
  );
}
