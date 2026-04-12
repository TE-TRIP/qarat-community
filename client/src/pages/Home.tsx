// ==========================================================================
// QARAT Community - Home Page (Redesigned)
// Design: Refined Warmth × Asymmetric Modern
// Left Text + Right Image layout with responsive design
// ==========================================================================

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Calendar, Users } from "lucide-react";
import { EVENTS, NOTICES, EVENT_CATEGORY_COLORS } from "@/lib/data";

// Intersection Observer hook for scroll animations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useInView(threshold = 0.15) {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <EventCategoriesSection />
      <DetailSection />
      <NoticesSection />
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-4 w-fit animate-fade-in-up"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: "oklch(0.97 0.01 80)",
                  color: "oklch(0.62 0.17 45)",
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}
              >
                社会人コミュニティ
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in-up animate-delay-100"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.22 0.02 50)",
                opacity: 0,
                animationFillMode: "forwards"
              }}
            >
              QARAT
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl lg:text-2xl font-medium mb-6 animate-fade-in-up animate-delay-200"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                color: "oklch(0.38 0.08 50)",
                opacity: 0,
                animationFillMode: "forwards"
              }}
            >
              上質な出会いと体験を、<br />
              あなたの日常に。
            </p>

            {/* Description */}
            <p
              className="text-sm md:text-base text-stone-600 mb-8 leading-relaxed animate-fade-in-up animate-delay-300 max-w-md"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                opacity: 0,
                animationFillMode: "forwards"
              }}
            >
              QARATは社会人のための上質なコミュニティです。シークレットカフェ、合同筋トレ、ランニング、ネイルサロン、エステなど多彩なイベントを通じて、価値観の合う仲間との出会いを実現します。
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400"
              style={{
                opacity: 0,
                animationFillMode: "forwards"
              }}
            >
              <Link
                href="/qarat-community/events/secret-cafe"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                style={{
                  background: "oklch(0.62 0.17 45)",
                  color: "white",
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}
              >
                イベントを見る
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#notices"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 border-2"
                style={{
                  borderColor: "oklch(0.62 0.17 45)",
                  color: "oklch(0.62 0.17 45)",
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}
              >
                お知らせ
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/hero-main-F6AR7vKxZ37jF3Lja9ZFSN.webp"
              alt="QARATコミュニティ"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                color: "oklch(0.22 0.02 50)"
              }}
            >
              QARATとは？
            </h2>
            <p
              className="text-base md:text-lg text-stone-600 mb-6 leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              忙しい社会人が「本当に楽しめる」時間を作るためのコミュニティです。厳選されたイベントと、価値観の合う仲間との出会いを通じて、日常に彩りを加えます。
            </p>
            <p
              className="text-base md:text-lg text-stone-600 mb-8 leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              各イベントは少人数制で、深い交流が実現します。上質な体験と、心地よい人間関係を大切にしています。
            </p>
            <Link
              href="/qarat-community/events/secret-cafe"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
              style={{
                color: "oklch(0.62 0.17 45)",
                fontFamily: "'Noto Sans JP', sans-serif"
              }}
            >
              詳しく見る
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://raw.githubusercontent.com/TE-TRIP/qarat-community/main/assets/images/20250817-034A8959.jpg"
              alt="QARATコミュニティの様子"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Event Categories Section ─────────────────────────────────────────────────
function EventCategoriesSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="mb-12">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Events
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Noto Serif JP', serif",
              color: "oklch(0.22 0.02 50)"
            }}
          >
            イベント一覧
          </h2>
          <p
            className="text-base md:text-lg text-stone-600 max-w-2xl"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            QARATでは多彩なイベントを定期開催しています。気になるイベントをクリックして詳細をご確認ください。
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event, index) => (
            <EventCategoryCard
              key={event.id}
              event={event}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCategoryCard({
  event,
  index,
  inView
}: {
  event: typeof EVENTS[0];
  index: number;
  inView: boolean;
}) {
  return (
    <Link
      href={`/qarat-community/events/${event.id}`}
      className={`group block transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
          <p
            className="text-xs font-semibold tracking-widest mb-2 opacity-90"
            style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Playfair Display', serif" }}
          >
            {event.subtitle}
          </p>
          <h3
            className="text-xl md:text-2xl font-bold text-white mb-2"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            {event.title}
          </h3>
          <p
            className="text-sm text-white/90 line-clamp-2"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {event.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

// ─── Detail Section ────────────────────────────────────────────────────────────
function DetailSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Left: Text */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                color: "oklch(0.22 0.02 50)"
              }}
            >
              最高のコミュニティ体験
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "厳選されたメンバー",
                  desc: "価値観の合う社会人が集まるコミュニティ"
                },
                {
                  title: "少人数制イベント",
                  desc: "深い交流が実現する環境を大切にしています"
                },
                {
                  title: "上質な体験",
                  desc: "各イベントは厳選された会場と内容でご提供"
                }
              ].map((item, idx) => (
                <div key={idx}>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      color: "oklch(0.62 0.17 45)",
                      fontFamily: "'Noto Serif JP', serif"
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-stone-600"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/qarat-community"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 mt-8"
              style={{
                background: "oklch(0.62 0.17 45)",
                color: "white",
                fontFamily: "'Noto Sans JP', sans-serif"
              }}
            >
              イベントを見る
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/event-gym-F6AR7vKxZ37jF3Lja9ZFSN.webp"
              alt="コミュニティの様子"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Notices Section ──────────────────────────────────────────────────────────
function NoticesSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="notices"
      className={`py-16 md:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <div className="mb-12">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            News
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "'Noto Serif JP', serif",
              color: "oklch(0.22 0.02 50)"
            }}
          >
            新着お知らせ
          </h2>
        </div>

        {/* Notices List */}
        <div className="space-y-4 max-w-3xl">
          {NOTICES.map((notice, index) => (
            <div
              key={index}
              className="p-4 md:p-6 rounded-lg bg-white hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "oklch(0.97 0.01 80)",
                        color: "oklch(0.62 0.17 45)",
                        fontFamily: "'Noto Sans JP', sans-serif"
                      }}
                    >
                      {notice.category}
                    </span>
                    <span
                      className="text-xs text-stone-400"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {notice.date}
                    </span>
                  </div>
                  <p
                    className="text-base font-medium text-stone-800"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {notice.title}
                  </p>
                </div>
                <ChevronRight
                  size={20}
                  className="flex-shrink-0 text-stone-300 mt-2 md:mt-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
