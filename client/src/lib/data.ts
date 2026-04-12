// ==========================================================================
// QARAT Community - Shared Data
// Events and announcements data
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/event-gym-HKH3TxfdcHNjEi2ti3o8J7.webp",
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/event-run-5sjyi6LiEu7E5PeAmrHj3Z.webp",
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/event-nail-mHt6adPJHoAq2keyKqb7BP.webp",
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/event-esthe-AiYsqqMDBe3V8fzuGmUVWo.webp",
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
    description: "イラストやアート好きな人が集まって、お喋りをしながら絵を描くイベント。創作の時間と交流を同時に楽しめます。",
    longDescription: "イラストやアート好きな社会人が集まり、自由に絵を描きながらお喋りを楽しむイベントです。初心者から経験者まで、自分のペースで創作活動ができます。同じ価値観を持つアート好きな仲間と出会い、創作のモチベーションを高め合える特別な時間です。",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498366223/FXniwgiv9AQiRJmEoGcM6D/event-art-talk-DbMQiVtFbgLZfcrF5m3Ch4.webp",
    category: "クリエイティブ",
    highlights: [
      "初心者〜経験者対応",
      "自由な創作活動",
      "アート好きな仲間と交流",
      "リラックスした雰囲気"
    ],
    schedule: "月1〜2回（週末）",
    capacity: "6〜12名",
    fee: "参加費は各回ご案内",
    formUrl: "https://forms.google.com",
    color: "from-indigo-50 to-blue-50"
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

export const EVENT_CATEGORY_COLORS: Record<string, string> = {
  "交流": "bg-orange-100 text-orange-700",
  "フィットネス": "bg-green-100 text-green-700",
  "ビューティー": "bg-pink-100 text-pink-700",
  "クリエイティブ": "bg-indigo-100 text-indigo-700"
};
