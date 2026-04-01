// ==========================================================================
// QARAT Community - Home Page
// Design: Refined Warmth - Japanese Minimalism × Warm Scandinavian
// Sections: Hero, Events Grid, Notices, About CTA
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
      <EventsSection />
      <NoticesSection />
      <AboutSection />
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/hero-main-F6AR7vKxZ37jF3Lja9ZFSN.webp"
          alt="QARATコミュニティ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 40%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0.1) 100%)" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-6 animate-fade-in-up"
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

          {/* Main heading */}
          <h1
            className="text-5xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in-up animate-delay-100"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "oklch(0.22 0.02 50)",
              opacity: 0,
              animationFillMode: "forwards"
            }}
          >
            QARAT
          </h1>
          <p
            className="text-xl lg:text-2xl font-medium mb-6 animate-fade-in-up animate-delay-200"
            style={{
              fontFamily: "'Noto Serif JP', serif",
              color: "oklch(0.38 0.08 50)",
              opacity: 0,
              animationFillMode: "forwards"
            }}
          >
            上質な出会いと体験を、<br />あなたの日常に。
          </p>
          <p
            className="text-base text-stone-500 leading-relaxed mb-8 animate-fade-in-up animate-delay-300"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              opacity: 0,
              animationFillMode: "forwards"
            }}
          >
            QARATは社会人のための上質なコミュニティです。<br />
            シークレットカフェ、合同筋トレ、ランニング、<br />
            ネイルサロン、エステなど多彩なイベントを開催しています。
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-400"
            style={{ opacity: 0, animationFillMode: "forwards" }}
          >
            <a href="#events" className="btn-qarat-primary">
              イベントを見る
              <ArrowRight size={16} />
            </a>
            <a href="#notices" className="btn-qarat-outline">
              お知らせ
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-stone-400 tracking-widest" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-stone-300 to-transparent" />
      </div>
    </section>
  );
}

// ─── Events Section ────────────────────────────────────────────────────────────
function EventsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="events" className="py-20 lg:py-28 bg-qarat-ivory">
      <div className="container">
        {/* Section header */}
        <div ref={ref} className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Events
          </p>
          <h2
            className="section-heading text-3xl lg:text-4xl font-bold text-stone-800"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            イベント一覧
          </h2>
          <p
            className="mt-4 text-stone-500 max-w-xl"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            QARATでは多彩なイベントを定期開催しています。<br />
            気になるイベントをクリックして詳細をご確認ください。
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: typeof EVENTS[0]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`qarat-card group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${EVENT_CATEGORY_COLORS[event.category]}`}
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {event.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p
          className="text-xs tracking-widest mb-1"
          style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Playfair Display', serif" }}
        >
          {event.subtitle}
        </p>
        <h3
          className="text-xl font-bold text-stone-800 mb-2"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {event.title}
        </h3>
        <p
          className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          {event.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 mb-4 text-xs text-stone-400" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {event.schedule.split("（")[0]}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} />
            {event.capacity}
          </span>
        </div>

        <Link
          href={`/qarat-community/events/${event.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200"
          style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          詳細を見る
          <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

// ─── Notices Section ───────────────────────────────────────────────────────────
function NoticesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="notices" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Section header */}
          <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              News
            </p>
            <h2
              className="section-heading text-3xl lg:text-4xl font-bold text-stone-800 mb-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              新着お知らせ
            </h2>
            <p
              className="text-sm text-stone-500 leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              最新のイベント情報や<br />コミュニティからのお知らせです。
            </p>
          </div>

          {/* Notices list */}
          <div className="lg:col-span-2">
            <ul className="divide-y divide-stone-100">
              {NOTICES.map((notice, index) => (
                <NoticeItem key={notice.id} notice={notice} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function NoticeItem({ notice, index }: { notice: typeof NOTICES[0]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <li
      ref={ref}
      className={`py-5 transition-all duration-600 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 pt-0.5">
          <span
            className="text-xs text-stone-400"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {notice.date}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-sm ${
                notice.category === "イベント"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-stone-100 text-stone-600"
              }`}
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {notice.category}
            </span>
            {notice.isNew && (
              <span
                className="text-xs font-bold text-white px-1.5 py-0.5 rounded-sm"
                style={{ background: "oklch(0.62 0.17 45)", fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                NEW
              </span>
            )}
          </div>
          <p
            className="text-sm font-medium text-stone-700 hover:text-orange-600 transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {notice.title}
          </p>
        </div>
      </div>
    </li>
  );
}

// ─── About CTA Section ─────────────────────────────────────────────────────────
function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "oklch(0.22 0.04 50)" }}
    >
      {/* Decorative element */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.62 0.17 45)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.62 0.17 45)" }}
      />

      <div className="container relative z-10">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "oklch(0.78 0.12 45)", fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            About QARAT
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            上質な社会人コミュニティへ、<br />ようこそ。
          </h2>
          <p
            className="text-stone-300 leading-relaxed mb-8 text-sm lg:text-base"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            QARATは、忙しい社会人が「本当に楽しめる」時間を作るためのコミュニティです。
            厳選されたイベントと、価値観の合う仲間との出会いを通じて、
            日常に彩りを加えます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#events"
              className="btn-qarat-primary"
            >
              イベントを見る
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
