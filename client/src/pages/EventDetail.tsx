// ==========================================================================
// QARAT Community - Event Detail Page (Redesigned)
// Design: Refined Warmth × Asymmetric Modern
// Left Text + Right Image layout
// ==========================================================================

import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  Calendar,
  Users,
  Banknote,
  CheckCircle2,
  ChevronRight,
  ArrowRight
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
          <Link href="/qarat-community" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            style={{
              background: "oklch(0.62 0.17 45)",
              color: "white",
              fontFamily: "'Noto Sans JP', sans-serif"
            }}>
            トップページへ
          </Link>
        </div>
      </div>
    );
  }

  const otherEvents = EVENTS.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <EventHero event={event} />
      <EventContent event={event} />
      <ApplicationCTA event={event} />
      <OtherEvents events={otherEvents} />
    </div>
  );
}

// ─── Event Hero ───────────────────────────────────────────────────────────────
function EventHero({ event }: { event: typeof EVENTS[0] }) {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white">
      <div className="container">
        {/* Breadcrumb */}
        <Link
          href="/qarat-community"
          className="inline-flex items-center gap-1 text-sm font-medium mb-6 transition-colors duration-200"
          style={{
            color: "oklch(0.62 0.17 45)",
            fontFamily: "'Noto Sans JP', sans-serif"
          }}
        >
          <ArrowLeft size={16} />
          ホーム
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${EVENT_CATEGORY_COLORS[event.category]}`}
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {event.category}
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.22 0.02 50)"
              }}
            >
              {event.title}
            </h1>

            <p
              className="text-lg text-stone-600 mb-8 leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {event.description}
            </p>

            {/* Quick Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Calendar size={20} style={{ color: "oklch(0.62 0.17 45)" }} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-stone-400" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    開催スケジュール
                  </p>
                  <p className="font-medium text-stone-800" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {event.schedule}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users size={20} style={{ color: "oklch(0.62 0.17 45)" }} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-stone-400" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    定員
                  </p>
                  <p className="font-medium text-stone-800" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {event.capacity}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Banknote size={20} style={{ color: "oklch(0.62 0.17 45)" }} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-stone-400" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    参加費
                  </p>
                  <p className="font-medium text-stone-800" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    参加費は各回ご案内
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={event.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
              style={{
                background: "oklch(0.62 0.17 45)",
                color: "white",
                fontFamily: "'Noto Sans JP', sans-serif"
              }}
            >
              申し込む
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Event Content ────────────────────────────────────────────────────────────
function EventContent({ event }: { event: typeof EVENTS[0] }) {
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
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                color: "oklch(0.22 0.02 50)"
              }}
            >
              イベント概要
            </h2>

            <p
              className="text-base md:text-lg text-stone-600 mb-8 leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {event.description}
            </p>

            <h3
              className="text-xl font-bold mb-4"
              style={{
                fontFamily: "'Noto Serif JP', serif",
                color: "oklch(0.62 0.17 45)"
              }}
            >
              このイベントの特徴
            </h3>

            <ul className="space-y-3 mb-8">
              {[
                "少人数制で深い交流が実現",
                "厳選された会場でのイベント開催",
                "同じ価値観を持つ仲間との出会い",
                "毎回異なるテーマで新しい体験"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: "oklch(0.62 0.17 45)" }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={event.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              style={{
                background: "oklch(0.62 0.17 45)",
                color: "white",
                fontFamily: "'Noto Sans JP', sans-serif"
              }}
            >
              申し込みフォームへ
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Application CTA ──────────────────────────────────────────────────────────
function ApplicationCTA({ event }: { event: typeof EVENTS[0] }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontFamily: "'Noto Serif JP', serif",
              color: "oklch(0.22 0.02 50)"
            }}
          >
            {event.title}に参加しませんか？
          </h2>

          <p
            className="text-base md:text-lg text-stone-600 mb-8 leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            下記のボタンから申し込みフォームにアクセスできます。ご不明な点はお気軽にお問い合わせください。
          </p>

          <a
            href={event.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg"
            style={{
              background: "oklch(0.62 0.17 45)",
              color: "white",
              fontFamily: "'Noto Sans JP', sans-serif"
            }}
          >
            申し込みフォームへ
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Other Events ─────────────────────────────────────────────────────────────
function OtherEvents({ events }: { events: typeof EVENTS }) {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ background: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{
            fontFamily: "'Noto Serif JP', serif",
            color: "oklch(0.22 0.02 50)"
          }}
        >
          他のイベント
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Link
              key={event.id}
              href={`/qarat-community/events/${event.id}`}
              className={`group block transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {event.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
