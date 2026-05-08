import { useEffect, useRef, useState } from "react";
import { EVENTS, MEMBERS, NOTICES } from "@/lib/data";
import MemberCard from "@/components/MemberCard";

interface InViewState {
  [key: string]: boolean;
}

export default function Home() {
  const [inView, setInView] = useState<InViewState>({});
  const heroRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const membersRef = useRef<any>(null);
  const eventsRef = useRef<any>(null);
  const newsRef = useRef<any>(null);

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

    [heroRef, aboutRef, membersRef, eventsRef, newsRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/hero-main-fbfiaqNuE8ZBfLAthNHQsL.webp')`,
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className={`text-5xl md:text-6xl font-serif font-bold text-white mb-6 transition-all duration-1000 ${
              inView.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              個性を活かした活動の場
            </h1>
            <p className={`text-xl md:text-2xl text-orange-200 mb-8 transition-all duration-1000 delay-200 ${
              inView.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              QARATコミュニティは、自分の強みを活かして活動する個人が集まるコミュニティです。
            </p>
            <div className={`flex gap-4 transition-all duration-1000 delay-300 ${
              inView.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <a
                href="#members"
                className="px-8 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                メンバーを見る
              </a>
              <a
                href="#events"
                className="px-8 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
              >
                イベント一覧
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="py-20 bg-gradient-to-b from-white to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className={`transition-all duration-1000 ${
              inView.about ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <div className="w-1 h-12 bg-orange-600 mb-6"></div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                QARATとは
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                QARATコミュニティは、社会人として活動する個人が、自分の専門分野や強みを活かして活動できるコミュニティです。
              </p>
              <p className="text-lg text-gray-700 mb-4">
                フィットネスコーチ、イラストレーター、ネイリスト、カフェマネージャーなど、様々な分野で活動するメンバーが集まっています。
              </p>
              <p className="text-lg text-gray-700">
                あなたの友人やお客さんを、QARATのメンバーに紹介し、その活動に繋げることができます。
              </p>
            </div>

            {/* Right: Image */}
            <div className={`transition-all duration-1000 ${
              inView.about ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section
        ref={membersRef}
        id="members"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={`mb-12 transition-all duration-1000 ${
            inView.members ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="w-1 h-12 bg-orange-600 mb-6"></div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              コミュニティメンバー
            </h2>
            <p className="text-lg text-gray-600">
              個性や強みを活かして活動するメンバーたちをご紹介します。
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERS.map((member, idx) => (
              <div
                key={member.id}
                className={`transition-all duration-1000 ${
                  inView.members
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section
        ref={eventsRef}
        id="events"
        className="py-20 bg-gradient-to-b from-orange-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className={`mb-12 transition-all duration-1000 ${
            inView.events ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="w-1 h-12 bg-orange-600 mb-6"></div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              コミュニティイベント
            </h2>
            <p className="text-lg text-gray-600">
              メンバーが主催・参加するイベント。交流、フィットネス、ビューティー、クリエイティブなど様々なジャンルがあります。
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event, idx) => (
              <a
                key={event.id}
                href={`/qarat-community/events/${event.id}`}
                className={`group block transition-all duration-1000 ${
                  inView.events
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Event Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-serif font-bold text-gray-900">
                        {event.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full ml-2">
                        {event.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {event.description}
                    </p>
                    <div className="text-sm text-gray-500">
                      <p>定員: {event.capacity}</p>
                      <p>開催: {event.schedule}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section
        ref={newsRef}
        id="news"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className={`mb-12 transition-all duration-1000 ${
            inView.news ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="w-1 h-12 bg-orange-600 mb-6"></div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              お知らせ
            </h2>
          </div>

          {/* News List */}
          <div className="max-w-2xl space-y-4">
            {NOTICES.map((notice, idx) => (
              <div
                key={notice.id}
                className={`p-5 border-l-4 border-orange-600 bg-orange-50 rounded transition-all duration-1000 ${
                  inView.news
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-gray-500">
                        {notice.date}
                      </span>
                      <span className="inline-block px-2 py-1 bg-orange-200 text-orange-700 text-xs rounded">
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="inline-block px-2 py-1 bg-red-500 text-white text-xs rounded font-bold">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {notice.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            QARATコミュニティに参加しませんか？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            イベントに参加したり、メンバーのサービスを利用したり、新しい仲間と繋がりましょう。
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#events"
              className="px-8 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              イベントに参加
            </a>
            <a
              href="#members"
              className="px-8 py-3 bg-orange-700 text-white rounded-lg font-medium hover:bg-orange-800 transition-colors border border-white/30"
            >
              メンバーを見る
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
