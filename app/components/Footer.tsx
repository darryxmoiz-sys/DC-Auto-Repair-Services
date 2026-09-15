import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[auto_1fr_1fr] md:px-8">
        <div className="flex items-start gap-3">
          <Image
            src="/logo.png"
            alt="DC Auto Repair Services logo"
            width={52}
            height={52}
            className="h-[52px] w-[52px] object-contain"
          />
          <div>
            <p className="font-display text-base font-bold text-text">
              DC Auto Repair Services
            </p>
            <p className="mt-1 max-w-[26ch] text-sm text-text-faint">
              Mobile unit and Kingaroy workshop, built around the South Burnett.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">Get in touch</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            <li>
              <a href="tel:+61439844118" className="hover:text-accent-strong">
                0439 844 118
              </a>
            </li>
            <li>
              <a
                href="mailto:darcy@dcautorepairservices.com.au"
                className="hover:text-accent-strong"
              >
                darcy@dcautorepairservices.com.au
              </a>
            </li>
            <li>Kingaroy, QLD &amp; South Burnett region</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">Site</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            <li>
              <Link href="/services" className="hover:text-accent-strong">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-accent-strong">
                Builds
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent-strong">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-strong">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5 text-xs text-text-faint md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} DC Auto Repair Services.</p>
          <p>Auto-electrical &middot; air-conditioning &middot; off-grid touring builds</p>
        </div>
      </div>
    </footer>
  );
}
