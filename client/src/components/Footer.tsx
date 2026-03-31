// ==========================================================================
// QARAT Community - Footer Component
// Design: Refined Warmth - Deep brown footer with warm accents
// ==========================================================================

import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-stone-200"
      style={{ background: "oklch(0.22 0.04 50)" }}
    >
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center"
                style={{ background: "oklch(0.62 0.17 45)" }}
              >
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Q
                </span>
              </div>
              <span
                className="text-xl font-bold tracking-widest text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                QARAT
              </span>
            </div>
            <p
              className="text-sm leading-relaxed text-stone-400"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              社会人のための上質なコミュニティ。
              <br />
              多彩なイベントで、豊かな出会いと体験を。
            </p>
          </div>

          {/* Events */}
          <div className="space-y-4">
            <h3
              className="text-sm font-semibold tracking-widest text-stone-300 uppercase"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              イベント
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/events/secret-cafe", label: "シークレットカフェ" },
                { href: "/events/gym", label: "合同筋トレ" },
                { href: "/events/run", label: "合同ラン" },
                { href: "/events/nail", label: "ネイルサロン" },
                { href: "/events/esthe", label: "エステ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-orange-400 transition-colors duration-200"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / SNS */}
          <div className="space-y-4">
            <h3
              className="text-sm font-semibold tracking-widest text-stone-300 uppercase"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              フォロー
            </h3>
            <p
              className="text-sm text-stone-400 leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              最新情報はSNSでも発信中。
              <br />
              フォローしてイベント情報をいち早くチェック！
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: "oklch(0.32 0.04 50)" }}
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: "oklch(0.32 0.04 50)" }}
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "oklch(0.32 0.04 50)" }}
        >
          <p
            className="text-xs text-stone-500"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            © {currentYear} QARAT. All rights reserved.
          </p>
          <p
            className="text-xs text-stone-500"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            社会人コミュニティ QARAT
          </p>
        </div>
      </div>
    </footer>
  );
}
