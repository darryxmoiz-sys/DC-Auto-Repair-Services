import type { Metadata } from "next";
import PatternPlaceholder from "../components/PatternPlaceholder";

export const metadata: Metadata = {
  title: "Builds | DC Auto Repair Services",
  description:
    "A look at recent work from DC Auto Repair Services, led by the MW Canopy off-grid touring fit-out.",
};

const otherWork = [
  { label: "Dual-battery install, ute tray", pattern: "grid" as const },
  { label: "Caravan electrical rewire", pattern: "diag" as const },
  { label: "Air-con regas & repair", pattern: "dot" as const },
  { label: "Car audio install", pattern: "grid" as const },
  { label: "Ag equipment fault-find", pattern: "diag" as const },
  { label: "Marine battery system", pattern: "dot" as const },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14 md:px-8 md:pt-20">
        <p className="text-sm font-medium text-accent-strong">Builds</p>
        <h1 className="mt-4 max-w-[24ch] font-display text-4xl font-bold text-text sm:text-5xl">
          Recent work, led by the build that shows what's possible.
        </h1>
      </section>

      {/* Anchor build */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <div className="rounded-sm border border-border">
          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
            <PatternPlaceholder
              pattern="grid"
              label="MW Canopy — full fit-out"
              className="aspect-[4/3] md:aspect-auto md:h-full"
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-wide text-accent-strong">
                Featured build
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-text">
                MW Canopy, off-grid touring fit-out
              </h2>
              <p className="mt-3 text-text-muted">
                A complete electrical build for serious touring: 230Ah
                lithium house battery, 2000W pure sine inverter, interior
                and rear work lighting, a drop-down fridge slide, and custom
                flooring — all mounted around a removable jack-off leg
                system so the canopy comes off clean when it's not needed.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-text-muted">
                <li className="flex gap-2">
                  <span className="text-accent-strong">&bull;</span>
                  230Ah lithium battery, 2000W pure sine inverter
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-strong">&bull;</span>
                  Interior and rear work lighting circuits
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-strong">&bull;</span>
                  Drop-down fridge slide, custom flooring
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-strong">&bull;</span>
                  Removable jack-off leg mounting system
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px border-t border-border sm:grid-cols-4">
            {[
              "Battery bay",
              "Inverter mount",
              "Fridge slide",
              "Finished interior",
            ].map((label) => (
              <PatternPlaceholder
                key={label}
                pattern="dot"
                label={label}
                className="aspect-square border-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other work grid */}
      <section className="border-t border-border bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <h2 className="font-display text-2xl font-bold text-text">
            More from the workshop and mobile unit
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherWork.map((w) => (
              <PatternPlaceholder
                key={w.label}
                pattern={w.pattern}
                label={w.label}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
