import { MEMBERS } from "@/lib/data";
import MemberCard from "@/components/MemberCard";
import { Link } from "wouter";

export default function MembersList() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-orange-600 hover:text-orange-700 mb-6 inline-block">
            ← ホームに戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            コミュニティメンバー
          </h1>
          <p className="text-lg text-gray-600">
            個性や強みを活かして活動するメンバーたちをご紹介します。
          </p>
        </div>
      </section>

      {/* Members Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MEMBERS.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
