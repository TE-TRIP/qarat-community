// QARAT Community - Shared Data
// Events, announcements, and members data
// ==========================================================================

export interface Event {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  highlights: string[];
  schedule: string;
  capacity: string;
  fee: string;
  formUrl: string;
  color: string;
}

export interface Notice {
  id: string;
  date: string;
  category: string;
  title: string;
  isNew?: boolean;
}

export interface Member {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  services: Array<{ name: string; url: string }>;
  social: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
}

export const EVENTS: Event[] = [
  {
    id: "secret-cafe",
    title: "シークレットカフェ",
    subtitle: "Secret Café",
    description: "非公開の特別空間で、上質なひとときを。厳選されたメンバーだけが集う、特別なカフェイベントです。",
    longDescription: "QARATが厳選した非公開のカフェ・レストランを会場に、社会人同士が自然体で交流できる特別なイベントです。美味しいドリンクや軽食を楽しみながら、同じ価値観を持つ仲間と出会えます。会場は毎回異なり、その都度サプライズな空間をご用意しています。",
    image: "https://raw.githubusercontent.com/TE-TRIP/qarat-community/main/assets/images/20250817-034A8959.jpg",
    category: "交流",
    highlights: [
      "非公開の厳選会場",
      "少人数制で深い交流",
      "ドリンク・軽食付き",
      "毎回異なるテーマ"
    ],
    schedule: "月1〜2回開催（土日祝日）",
    capacity: "10〜20名",
    fee: "参加費は各回ご案内",
    formUrl: "https://forms.google.com",
    color: "from-amber-50 to-orange-50"
  },
  {
    id: "gym",
    title: "合同筋トレ",
    subtitle: "Group Training",
    description: "仲間と一緒に、身体を鍛える充実の時間を。初心者から経験者まで、みんなで楽しく筋トレしましょう。",
    longDescription: "社会人同士が一緒にトレーニングする合同筋トレイベントです。経験豊富なメンバーがサポートするので、初心者の方も安心してご参加いただけます。トレーニング後は交流の時間もあり、健康意識の高い仲間と繋がれます。",
    image: "https://raw.githubusercontent.com/TE-TRIP/qarat-community/main/assets/images/event-gym.jpg",
    category: "フィットネス",
    highlights: [
      "初心者歓迎",
      "経験者によるサポート",
      "トレーニング後に交流会",
      "モチベーションアップ"
    ],
    schedule: "週1回（平日夜・週末）",
    capacity: "5〜15名",
    fee: "参加費は各回ご案内",
    formUrl: "https://forms.google.com",
    color: "from-orange-50 to-red-50"
  },
  {
    id: "run",
    title: "合同ラン",
    subtitle: "Group Running",
    description: "爽やかな朝や夕暮れ時、仲間と走る喜びを。都市の風景を感じながら、心地よい汗をかきましょう。",
    longDescription: "都市の公園や河川沿いを舞台に、仲間と一緒に走る合同ランイベントです。ペースは参加者に合わせて調整するので、ランニング初心者の方も歓迎です。走った後の達成感と爽快感を仲間と共有できます。",
    image: "https://raw.githubusercontent.com/TE-TRIP/qarat-community/main/assets/images/event-run.jpg",
    category: "フィットネス",
    highlights: [
      "初心者〜中級者対応",
      "都市の絶景コース",
      "ペース調整あり",
      "ラン後に交流タイム"
    ],
    schedule: "月2〜3回（早朝・夕方）",
    capacity: "5〜20名",
    fee: "無料（任意参加）",
    formUrl: "https://forms.google.com",
    color: "from-green-50 to-emerald-50"
  },
  {
    id: "nail",
    title: "ネイルサロン",
    subtitle: "Nail Salon",
    description: "プロのネイリストによる上質なネイル体験を、仲間と一緒に楽しみましょう。特別価格でご提供します。",
    longDescription: "プロのネイリストを招いて行う特別なネイルイベントです。QARATメンバー限定の特別価格でプロのネイルを体験できます。施術中も仲間との会話を楽しめる、リラックスした雰囲気のイベントです。",
    image: "https://raw.githubusercontent.com/TE-TRIP/qarat-community/main/assets/images/event-nail.jpg",
    category: "ビューティー",
    highlights: [
      "プロのネイリスト担当",
      "メンバー限定特別価格",
      "豊富なデザインから選択",
      "施術中も交流できる"
    ],
    schedule: "月1回（週末）",
    capacity: "4〜8名",
    fee: "施術料金は別途ご案内",
    formUrl: "https://forms.google.com",
    color: "from-pink-50 to-rose-50"
  },
  {
    id: "esthe",
    title: "エステ",
    subtitle: "Aesthetic Treatment",
    description: "日常の疲れを癒す、上質なエステ体験。プロの施術で心も身体もリフレッシュしましょう。",
    longDescription: "プロのエステティシャンによる本格的なエステ体験イベントです。フェイシャルやボディケアなど、様々なメニューをQARATメンバー限定の特別価格でご提供します。日常の疲れを癒し、内側から輝く美しさを引き出します。",
    image: "https://raw.githubusercontent.com/TE-TRIP/qarat-community/main/assets/images/event-esthe.jpg",
    category: "ビューティー",
    highlights: [
      "プロのエステティシャン担当",
      "フェイシャル・ボディケア対応",
      "メンバー限定特別価格",
      "完全個室でリラックス"
    ],
    schedule: "月1回（週末）",
    capacity: "3〜6名",
    fee: "施術料金は別途ご案内",
    formUrl: "https://forms.google.com",
    color: "from-purple-50 to-violet-50"
  },
  {
    id: "art-talk",
    title: "アート&トーク",
    subtitle: "Art & Talk",
    description: "イラストやアート好きな人が集まって、お喋りをしながら絵を描くイベントです。",
    longDescription: "イラストやアート好きな人が集まって、お喋りをしながら絵を描くイベントです。プロから初心者まで、様々なレベルの人が参加できます。アートを通じて、新しい仲間との繋がりを広げましょう。",
    image: "https://raw.githubusercontent.com/TE-TRIP/qarat-community/main/assets/images/event-art-talk.jpg",
    category: "クリエイティブ",
    highlights: [
      "イラスト・アート好きが集まる",
      "初心者から上級者まで参加可能",
      "お喋りしながら創作",
      "新しい仲間との繋がり"
    ],
    schedule: "月1〜2回（週末）",
    capacity: "6〜12名",
    fee: "参加費は各回ご案内",
    formUrl: "https://forms.google.com",
    color: "from-purple-50 to-indigo-50"
  }
];

export const NOTICES: Notice[] = [
  {
    id: "1",
    date: "2025.03.28",
    category: "イベント",
    title: "4月のシークレットカフェ開催決定！申し込み受付中",
    isNew: true
  },
  {
    id: "2",
    date: "2025.03.20",
    category: "お知らせ",
    title: "QARAT公式Instagramを開設しました",
    isNew: true
  },
  {
    id: "3",
    date: "2025.03.15",
    category: "イベント",
    title: "合同ラン（3月）開催レポートを公開しました",
    isNew: false
  },
  {
    id: "4",
    date: "2025.03.10",
    category: "イベント",
    title: "ネイルサロンイベント（4月）の参加者募集開始",
    isNew: false
  },
  {
    id: "5",
    date: "2025.03.01",
    category: "お知らせ",
    title: "2025年春のイベントスケジュールを更新しました",
    isNew: false
  }
];

export const MEMBERS: Member[] = [
  {
    id: "yamane",
    name: "山根",
    title: "カフェ・コミュニティマネージャ",
    bio: "コーヒーの概念が変わるようなコーヒー。QARATコミュニティマネージャ",
    image: "https://raw.githubusercontent.com/TE-TRIP/qarat-community/main/assets/images/member-yamane.jpg",
    specialties: ["カフェ運営", "コーヒー", "コミュニティ運営"],
    services: [
      { name: "カフェの運営相談", url: "https://instagram.com/cafe.coffee.0_0" },
      { name: "コーヒー講座", url: "https://instagram.com/cafe.coffee.0_0" },
      { name: "コミュニティ構築支援", url: "https://instagram.com/cafe.coffee.0_0" }
    ],
    social: {
      instagram: "https://instagram.com/cafe.coffee.0_0"
    }
  },
  {
    id: "member-2",
    name: "鈴木花子",
    title: "フィットネスコーチ",
    bio: "パーソナルトレーニング指導15年。初心者から上級者まで対応。",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    specialties: ["筋トレ", "栄養指導", "ダイエット"],
    services: [
      { name: "パーソナルトレーニング", url: "#" },
      { name: "栄養相談", url: "#" }
    ],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "member-3",
    name: "田中太郎",
    title: "イラストレーター",
    bio: "デジタルアートとイラストで、ブランドの世界観を表現します。",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    specialties: ["デジタルアート", "キャラクターデザイン", "ブランディング"],
    services: [
      { name: "イラスト制作", url: "#" },
      { name: "ブランドデザイン", url: "#" }
    ],
    social: {
      instagram: "https://instagram.com",
      website: "https://example.com"
    }
  },
  {
    id: "member-4",
    name: "佐藤美咲",
    title: "ネイリスト",
    bio: "トレンドを取り入れた上質なネイルデザインで、あなたの美しさを引き出します。",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    specialties: ["ネイルデザイン", "ジェルネイル", "アートネイル"],
    services: [
      { name: "ネイル施術", url: "#" },
      { name: "ネイルデザイン相談", url: "#" }
    ],
    social: {
      instagram: "https://instagram.com"
    }
  },
  {
    id: "member-5",
    name: "山田次郎",
    title: "エステティシャン",
    bio: "自然派コスメを使用した、肌に優しいエステで内側から輝く美しさをサポート。",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    specialties: ["フェイシャルケア", "ボディケア", "リラクゼーション"],
    services: [
      { name: "フェイシャルエステ", url: "#" },
      { name: "ボディケア", url: "#" }
    ],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "member-6",
    name: "伊藤健太",
    title: "ランニングコーチ",
    bio: "初心者からマラソン完走まで、あなたのランニングゴールを実現します。",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    specialties: ["ランニング指導", "マラソン対策", "フォーム改善"],
    services: [
      { name: "ランニングコーチング", url: "#" },
      { name: "マラソン対策プラン", url: "#" }
    ],
    social: {
      instagram: "https://instagram.com"
    }
  },
  {
    id: "member-7",
    name: "木村由美",
    title: "ウェブデザイナー",
    bio: "ユーザー体験を大切にした、美しく機能的なウェブサイトを制作します。",
    image: "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=400&h=400&fit=crop",
    specialties: ["ウェブデザイン", "UI/UX", "ブランディング"],
    services: [
      { name: "ウェブサイト制作", url: "#" },
      { name: "デザイン相談", url: "#" }
    ],
    social: {
      website: "https://example.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "member-8",
    name: "中村翔太",
    title: "マーケティングコンサルタント",
    bio: "データ分析に基づいた、実効性の高いマーケティング戦略をご提案します。",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    specialties: ["マーケティング戦略", "データ分析", "ブランド構築"],
    services: [
      { name: "マーケティング相談", url: "#" },
      { name: "ビジネス戦略立案", url: "#" }
    ],
    social: {
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  }
];

export const EVENT_CATEGORY_COLORS: Record<string, string> = {
  "交流": "bg-orange-100 text-orange-700",
  "フィットネス": "bg-green-100 text-green-700",
  "ビューティー": "bg-pink-100 text-pink-700",
  "クリエイティブ": "bg-purple-100 text-purple-700"
};
