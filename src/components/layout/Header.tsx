import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LOGO_URL, LOGO_ALT, HEADER_BG_URL, SHOP_URL } from "@/data/nav";
import { AREAS } from "@/data/areas";
import { MenuIcon, CloseIcon, ChevronDownIcon } from "@/components/Icons";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const areasRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setMobileOpen(false);
    setAreasOpen(false);
    setMobileAreasOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass =
    "text-white hover:text-amber-400 font-medium transition-colors text-sm whitespace-nowrap";

  return (
    <header
      style={{
        backgroundImage: `url('${HEADER_BG_URL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Main bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src={LOGO_URL}
            alt={LOGO_ALT}
            className="w-auto object-contain" style={{ height: "100px" }}
            loading="eager"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass}>
            About
          </Link>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            Shop
          </a>
          <Link href="/services" className={navLinkClass}>
            Services
          </Link>

          {/* Areas We Serve dropdown */}
          <div className="relative" ref={areasRef}>
            <button
              onClick={() => setAreasOpen((v) => !v)}
              className={`${navLinkClass} flex items-center gap-1`}
            >
              Areas We Serve
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${areasOpen ? "rotate-180" : ""}`}
              />
            </button>

            {areasOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl w-56 py-2 max-h-80 overflow-y-auto">
                {AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="block px-4 py-2 text-sm text-gray-200 hover:text-amber-400 hover:bg-gray-800 transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/calendar" className={navLinkClass}>
            Calendar
          </Link>
          <Link href="/connect" className={navLinkClass}>
            Connect
          </Link>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden relative z-10 bg-gray-950 border-t border-gray-700">
          <nav className="flex flex-col py-2">
            <Link href="/" className="px-6 py-3 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="px-6 py-3 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors font-medium">
              About
            </Link>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors font-medium"
            >
              Shop
            </a>
            <Link href="/services" className="px-6 py-3 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors font-medium">
              Services
            </Link>

            {/* Mobile Areas We Serve */}
            <button
              onClick={() => setMobileAreasOpen((v) => !v)}
              className="px-6 py-3 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors font-medium flex items-center justify-between text-left"
            >
              Areas We Serve
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAreasOpen && (
              <div className="bg-gray-900 border-t border-b border-gray-700">
                {AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="block px-10 py-2 text-sm text-gray-300 hover:text-amber-400 hover:bg-gray-800 transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/calendar" className="px-6 py-3 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors font-medium">
              Calendar
            </Link>
            <Link href="/connect" className="px-6 py-3 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors font-medium">
              Connect
            </Link>
            <Link href="/blog" className="px-6 py-3 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors font-medium">
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
