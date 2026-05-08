// ==========================================================================
// QARAT Community - Navbar Component
// Design: Refined Warmth - Clean white nav with orange accent
// Sticky header with smooth scroll behavior
// ==========================================================================

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/events/secret-cafe", label: "シークレットカフェ" },
  { href: "/events/gym", label: "合同筋トレ" },
  { href: "/events/run", label: "合同ラン" },
  { href: "/events/nail", label: "ネイルサロン" },
  { href: "/events/esthe", label: "エステ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "oklch(0.62 0.17 45)" }}>
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Q</span>
              </div>
              <span
                className="text-xl font-bold tracking-widest"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.22 0.02 50)"
                }}
              >
                QARAT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                  location === link.href
                    ? "text-orange-600"
                    : "text-stone-600 hover:text-orange-600"
                }`}
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-transform duration-200 origin-left ${
                    location === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ background: "oklch(0.62 0.17 45)" }}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-stone-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-orange-100 px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                location === link.href
                  ? "bg-orange-50 text-orange-600"
                  : "text-stone-600 hover:bg-orange-50 hover:text-orange-600"
              }`}
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
