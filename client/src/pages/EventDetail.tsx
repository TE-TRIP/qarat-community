// ==========================================================================
// QARAT Community - Event Detail Page
// Design: Refined Warmth - Japanese Minimalism × Warm Scandinavian
// Shared template for all 5 event pages
// ==========================================================================

import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Users,
  Banknote,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { EVENTS, EVENT_CATEGORY_COLORS } from "@/lib/data";

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

export default function EventDetail() {
  const params = useParams<{ id: string }>();
  const event = EVENTS.find((e) => e.id === params.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params.id]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-stone-400 mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            イベントが見つかりませんでした
          </p>
          <Link href="/qarat-community" className="btn-qarat-primary">
            トップページへ
          </Link>
        </div>
      </div>
    );
  }

  // Other events (excluding current)
  const otherEvents = EVENTS.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <EventHero event={event} />

      {/* Content */}
      <EventContent event={event} />

      {/* Application CTA */}
      <ApplicationCTA event={event} />

      {/* Other Events */}
      <OtherEvents events={otherEvents} />
    </div>
  );
}

// ─── Event Hero ────────────────────────────────────────────────────────────────
function EventHero({ event }: { event: typeof EVENTS[0] }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(34,20,10,0.85) 0%, rgba(34,20,10,0.4) 50%, rgba(34,20,10,0.1) 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pb-10 lg:pb-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-xs text-stone-300" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          <Link href="/qarat-community" className="hover:text-white transition-colors">ホーム</Link>
          <ChevronRight size={12} />
          <span className="text-white">{event.title}</span>
        </nav>

        {/* Category badge */}
        <div className="mb-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${EVENT_CATEGORY_COLORS[event.category]}`}
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {event.category}
          </span>
        </div>

        {/* Title */}
        <p
          className="text-sm tracking-widest text-orange-300 mb-1 animate-fade-in-up"
          style={{ fontFamily: "'Playfair Display', serif", opacity: 0, animationFillMode: "forwards" }}
        >
          {event.subtitle}
        </p>
        <h1
          className="text-4xl lg:text-5xl font-bold text-white animate-fade-in-up animate-delay-100"
          style={{ fontFamily: "'Noto Serif JP', serif", opacity: 0, animationFillMode: "forwards" }}
        >
          {event.title}
        </h1>
      </div>
    </section>
  );
}

// ─── Event Content ─────────────────────────────────────────────────────────────
function EventContent({ event }: { event: typeof EVENTS[0] }) {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Back link */}
            <Link
              href="/qarat-community"
              className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-orange-600 transition-colors duration-200"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              <ArrowLeft size={14} />
              イベント一覧に戻る
            </Link>

            {/* Description */}
            <div>
              <h2
                className="section-heading text-2xl font-bold text-stone-800 mb-4"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                イベント概要
              </h2>
              <p
                className="text-stone-600 leading-relaxed"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {event.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3
                className="text-lg font-bold text-stone-800 mb-4"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                このイベントの特徴
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-md bg-orange-50"
                  >
                    <CheckCircle2
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.62 0.17 45)" }}
                    />
                    <span
                      className="text-sm text-stone-700"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar: Event info */}
          <div className="lg:col-span-1">
            <div
              className="sticky top-24 rounded-lg border p-6 space-y-5"
              style={{ borderColor: "oklch(0.9 0.008 80)" }}
            >
              <h3
                className="text-lg font-bold text-stone-800 pb-3 border-b"
                style={{ fontFamily: "'Noto Serif JP', serif", borderColor: "oklch(0.9 0.008 80)" }}
              >
                イベント情報
              </h3>

              {/* Schedule */}
              <div className="flex items-start gap-3">
                <Calendar
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "oklch(0.62 0.17 45)" }}
                />
                <div>
                  <p
                    className="text-xs text-stone-400 mb-0.5"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    開催スケジュール
                  </p>
                  <p
                    className="text-sm font-medium text-stone-700"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {event.schedule}
                  </p>
                </div>
              </div>

              {/* Capacity */}
              <div className="flex items-start gap-3">
                <Users
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "oklch(0.62 0.17 45)" }}
                />
                <div>
                  <p
                    className="text-xs text-stone-400 mb-0.5"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    定員
                  </p>
                  <p
                    className="text-sm font-medium text-stone-700"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {event.capacity}
                  </p>
                </div>
              </div>

              {/* Fee */}
              <div className="flex items-start gap-3">
                <Banknote
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "oklch(0.62 0.17 45)" }}
                />
                <div>
                  <p
                    className="text-xs text-stone-400 mb-0.5"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    参加費
                  </p>
                  <p
                    className="text-sm font-medium text-stone-700"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {event.fee}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={event.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-qarat-primary w-full justify-center"
                >
                  申し込む
                  <ArrowRight size={16} />
                </a>
                <p
                  className="text-xs text-center text-stone-400 mt-2"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  Googleフォームに移動します
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Application CTA ───────────────────────────────────────────────────────────
function ApplicationCTA({ event }: { event: typeof EVENTS[0] }) {
  const { ref, inView } = useInView();

  return (
    <section
      className="py-16 lg:py-20"
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2
            className="text-2xl lg:text-3xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            {event.title}に参加しませんか？
          </h2>
          <p
            className="text-stone-500 mb-8 leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            下記のボタンから申し込みフォームにアクセスできます。
            <br />
            ご不明な点はお気軽にお問い合わせください。
          </p>
          <a
            href={event.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-qarat-primary text-base px-8 py-4"
          >
            申し込みフォームへ
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Other Events ──────────────────────────────────────────────────────────────
function OtherEvents({ events }: { events: typeof EVENTS }) {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2
            className="section-heading text-2xl font-bold text-stone-800 mb-8"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            他のイベント
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/qarat-community/events/${event.id}`}
                className="qarat-card group block"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p
                    className="text-xs tracking-widest mb-1"
                    style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Playfair Display', serif" }}
                  >
                    {event.subtitle}
                  </p>
                  <h3
                    className="text-base font-bold text-stone-800 mb-1"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {event.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-200"
                    style={{ color: "oklch(0.62 0.17 45)", fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    詳細を見る
                    <ChevronRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
