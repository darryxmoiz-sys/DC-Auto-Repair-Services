import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Builds" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="DC Auto Repair Services"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="hidden font-display text-lg font-bold leading-none text-text sm:block">
            DC Auto Repair
            <span className="block text-xs font-normal tracking-normal text-text-muted">
              Services
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 md:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded px-3 py-2 text-sm text-text-muted transition-colors hover:text-accent-strong"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+61439844118"
            className="ml-2 rounded-sm bg-cta px-4 py-2 text-sm font-semibold text-cta-ink transition-colors hover:bg-cta-strong"
          >
            Call Darcy
          </a>
        </nav>
      </div>
    </header>
  );
}
