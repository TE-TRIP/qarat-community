import { Link } from "wouter";
import { EVENTS } from "@/lib/data";
import { useRef, useEffect, useState } from "react";

interface InViewState {
  [key: string]: boolean;
}

export default function EventsList() {
  const [inView, setInView] = useState<InViewState>({});
  const eventsRef = useRef<any>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView((prev) => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    if (eventsRef.current) observer.observe(eventsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-orange-600 hover:underline">
              ホーム
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">イベント一覧</span>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <section className="container py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.02 50)" }}>
          コミュニティイベント
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          メンバーが主催・参加するイベント。交流、フィットネス、ビューティー、クリエイティブなど様々なジャンルがあります。
        </p>
      </section>

      {/* Events Grid */}
      <section
        ref={eventsRef}
        id="events"
        className="container py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer">
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Event Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ background: "oklch(0.62 0.17 45)" }}
                  >
                    {event.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">{event.title}</span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.02 50)" }}
                  >
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-sm flex-1 mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <span>定員:</span>
                      <span className="font-medium">{event.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>開催:</span>
                      <span className="font-medium">{event.schedule}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.22 0.02 50)" }}
          >
            イベントに参加しませんか？
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            QARATのイベントに参加して、新しい仲間と繋がりましょう。
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
