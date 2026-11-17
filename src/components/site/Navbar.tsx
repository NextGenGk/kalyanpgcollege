import { useEffect, useState } from "react";
import collegeLogo from "@/assets/logo.svg";

const links = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#courses" },
  { label: "Campus", href: "#infrastructure" },
  { label: "Leadership", href: "#leadership" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-gold/30 shadow-xl py-3"
          : "bg-[#0f172a]/75 backdrop-blur-md border-b border-white/10 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Lockup using the provided logo.svg */}
        <a href="#top" className="flex items-center gap-3 shrink-0 group">
          <div className="size-11 sm:size-12 rounded-full border border-gold/50 bg-white p-1 shadow-sm flex items-center justify-center shrink-0 group-hover:border-gold transition-colors overflow-hidden">
            <img
              src={collegeLogo}
              alt="Kalyan College Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg text-white tracking-tight leading-none group-hover:text-gold transition-colors">
              Kalyan PG College
            </span>
            <span className="font-mono text-[10px] text-gold tracking-wider uppercase mt-1 leading-none font-medium">
              Bhilai Nagar · Est. 1963 · UGC CPE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[12px] font-medium uppercase tracking-[0.12em] text-white/80">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors py-1 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-gold hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="https://kalyanpgcollege.org/downloads/Kalyan_PG_College_Prospectus_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/80 border border-white/25 rounded-xs hover:border-gold hover:text-gold hover:bg-white/5 transition-all whitespace-nowrap"
          >
            Prospectus ↗
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] bg-gold text-[#0f172a] rounded-xs hover:bg-white transition-all shadow-sm whitespace-nowrap"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-1.5 text-white hover:text-gold transition-colors cursor-pointer"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f172a]/98 backdrop-blur-xl border-b border-gold/30 px-6 py-5 shadow-2xl space-y-4 animate-fade-up">
          <div className="flex flex-col space-y-2.5 pb-3 border-b border-white/10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.12em] text-white/90 hover:text-gold transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <a
              href="https://kalyanpgcollege.org/downloads/Kalyan_PG_College_Prospectus_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 border border-white/25 text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:border-gold hover:text-gold"
            >
              Download Prospectus (PDF) ↗
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-center py-2.5 bg-gold text-[#0f172a] text-xs font-bold uppercase tracking-[0.14em] rounded-xs shadow-md"
            >
              Apply for Admission 2026-27
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
