"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SolvixLogo } from "@/components/site/SolvixLogo";

const links = [
  { href: "/", label: "Home", match: "/" },
  { href: "/services", label: "Services", match: "/services" },
  { href: "/#industries", label: "Industries", match: "#industries" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/contact", label: "Contact", match: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (match: string) => {
    if (match === "/") {
      return pathname === "/";
    }

    if (match === "#industries") {
      return false;
    }

    return pathname.startsWith(match);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink/90 text-paper backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">

        {/* Logo -> Home */}
        <Link
          href="/"
          aria-label="Solvix Labs home"
          className="transition-opacity hover:opacity-90"
        >
          <SolvixLogo />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(link.match);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-2 text-sm transition-colors ${
                  active
                    ? "text-paper"
                    : "text-slate-dark hover:text-paper"
                }`}
              >
                {link.label}

                {/* Active indicator */}
                {active && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-signal" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Button asChild size="sm" variant="inverse">
          <Link href="/consultation">
            30-min consultation
          </Link>
        </Button>
      </div>
    </header>
  );
}