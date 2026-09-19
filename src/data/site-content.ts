export const siteLinks = {
  line: "https://line.me/R/ti/p/@028oteds",
  lineReservation: "https://line.me/R/ti/p/@028oteds",
  hotpepper: "https://beauty.hotpepper.jp/kr/slnH000745004/",
  instagram: "https://www.instagram.com/chie_cherish184/",
  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=Private%20salon%20cherish%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E4%B8%AD%E5%8C%BA%E5%AE%AE%E5%B7%9D%E7%94%BA3-93-5%20%E3%82%A2%E3%83%AB%E3%83%90503",
} as const;

export const navigation = [
  { label: "施術について", href: "#approach" },
  { label: "選ばれる理由", href: "#reasons" },
  { label: "メニュー", href: "#menu" },
  { label: "事例", href: "#case" },
  { label: "施術者", href: "#profile" },
  { label: "アクセス", href: "#access" },
] as const;

export const concerns = [
  "背中や肩まわりが厚く見える",
  "以前より後ろ姿が疲れて見える",
  "巻き肩や肩まわりの左右差が気になる",
  "写真に写った背中のラインが気になる",
  "好きな服をもっと自信を持って着たい",
] as const;

export const approachPoints = [
  {
    title: "肩・背中まわりを丁寧にケア",
    body: "肩甲骨まわりや背中へ、ハンドと微弱電流を組み合わせてアプローチします。強さや不安なことは、施術前にご相談ください。",
  },
  {
    title: "施術前後の背面写真で状態を確認",
    body: "ご希望に応じて背面写真を撮影し、施術前後の見え方を一緒に確認します。",
  },
  {
    title: "一人ひとりの希望に合わせた施術",
    body: "気になる箇所や過ごし方の希望を伺い、無理のない範囲でメニューをご案内します。",
  },
] as const;

export const reasons = [
  {
    title: "40代からの肩甲骨・背中美容",
    body: "年齢とともに気になりやすい肩まわりや後ろ姿のお悩みに、丁寧に向き合います。",
  },
  {
    title: "看護師資格を持つ美容家が対応",
    body: "身体と美容の両方を相談できる相手として、カウンセリングから施術まで千恵さんが担当します。",
  },
  {
    title: "完全予約制・1対1のプライベート空間",
    body: "周りを気にせず過ごせる空間で、お悩みや希望を落ち着いて相談できます。",
  },
  {
    title: "微弱電流とハンドを組み合わせたケア",
    body: "肩・背中まわりを確認しながら、メニューに応じた方法で丁寧に施術します。",
  },
] as const;

export const featuredMenu = {
  name: "肩甲骨はがし",
  duration: "60分",
  price: "8,800円",
  tax: "税込",
  description:
    "肩・背中まわりを、微弱電流とハンドで丁寧にケアする主役メニューです。肩まわりの張りや後ろ姿が気になる方に。微弱電流に不安がある場合は、ご予約前にご相談ください。",
} as const;

export const relatedMenus = [
  {
    name: "【究極のほぐし】肩甲骨＆背中",
    subtitle: "肩甲骨はがし＋漢方温活泥湿布",
    prices: ["1枚：90分 15,000円", "2枚：90分 20,000円"],
    description:
      "肩甲骨はがしに漢方温活泥湿布を組み合わせたメニューです。温かさを感じながら、肩・背中まわりをゆったりケアしたい方へ。",
  },
  {
    name: "腸もみ＆漢方温活泥湿布（1枚）",
    prices: ["90分 13,000円（税込）"],
    description:
      "お腹まわりへの手技と漢方温活泥湿布を組み合わせたメニューです。内容や受け方が気になる場合は、事前にご相談ください。",
  },
  {
    name: "トータルリラクゼーションボディ（機械なし）",
    prices: ["120分 12,000円（税込）"],
    description:
      "機械を使わず、全身をオールハンドで丁寧にケアします。ゆっくり過ごしたい方におすすめのメニューです。",
  },
  {
    name: "【痩身】トータル美ボディ（機械あり）",
    prices: ["120分 22,000円（税込）"],
    description:
      "ハンドと機器を組み合わせた全身メニューです。施術内容や使用する機器については、ご予約前にご確認いただけます。",
  },
] as const;

export const femmeCareCampaign = {
  label: "モニター限定",
  name: "膣ポーラコース 3回券",
  duration: "1回30分",
  price: "49,500円（税込）",
  regularPrice: "通常価格 66,000円（税込）",
  note: "回数券の有効期限は1か月以内です。募集状況・適用条件はご予約前にご確認ください。",
} as const;

export const femmeCareMenus = [
  {
    name: "膣ポーラコース",
    duration: "30分",
    price: "22,000円（税込）",
    description:
      "専用機器を使用するフェムケアメニューです。施術内容や注意事項は、ご予約前にご案内します。",
  },
  {
    name: "デリケートゾーンケア",
    duration: "30分",
    price: "16,500円（税込）",
    option: "オプション：EP導入コース 10分 5,500円（税込）",
    description:
      "デリケートゾーンを温めながら、機器を使用してやさしくケアします。",
  },
  {
    name: "骨盤底筋トレーニング",
    duration: "30分",
    price: "6,600円（税込）",
    description:
      "専用機器を使用するトレーニングメニューです。受け方やご利用時の確認事項は事前にご相談いただけます。",
  },
] as const;

export const menuCategories = [
  {
    category: "フェイシャル",
    items: [
      "VERUNAハーブピーリング",
      "ララピール",
      "セルマン",
      "光フェイシャル",
    ],
  },
  {
    category: "温活メニュー",
    items: ["漢方温活泥湿布", "ローズコアウォーマー"],
  },
  {
    category: "フットケア",
    items: [
      "レッグリュクスドレナージュ",
      "角質ケア（フットバス＆マッサージ付き）",
    ],
  },
  {
    category: "光脱毛",
    items: ["全身", "部分"],
  },
] as const;

export const flowSteps = [
  {
    title: "相談・予約",
    body: "LINEまたはHot Pepperからご予約ください。メニューが決まっていない場合は、LINEで事前にご相談いただけます。",
  },
  {
    title: "来店・カウンセリング",
    body: "気になる箇所や、その日の状態、ご希望の過ごし方を伺います。",
  },
  {
    title: "施術",
    body: "ご予約のメニューに沿って、肩・背中まわりや身体を丁寧にケアします。",
  },
  {
    title: "施術後の確認",
    body: "施術後の過ごし方をご案内します。ご希望の場合は、背面写真で施術前後の見え方も確認します。",
  },
] as const;

export const faqs = [
  {
    question: "自分に合うメニューが分からなくても相談できますか？",
    answer:
      "はい。気になる箇所やご希望をLINEで伺いながら、候補となるメニューをご案内します。",
  },
  {
    question: "微弱電流が不安でも相談できますか？",
    answer:
      "はい。ご予約前にLINEでお知らせください。対応可能な施術内容についてご案内します。",
  },
  {
    question: "予約はどこからできますか？",
    answer:
      "LINEまたはHot Pepperからご予約いただけます。空き状況を確認したい場合はHot Pepper、メニューについて相談したい場合はLINEをご利用ください。",
  },
  {
    question: "サロンはどこにありますか？",
    answer:
      "横浜市中区宮川町にあります。京急 日ノ出町駅、JR 桜木町駅から徒歩圏です。詳しいアクセスは、ご予約時にもご確認いただけます。",
  },
] as const;

export const shopInfo = [
  ["住所", "神奈川県横浜市中区宮川町3-93-5 アルバ503"],
  ["最寄り", "京急 日ノ出町駅 徒歩3分"],
  ["最寄り", "JR 桜木町駅 徒歩約8分"],
  ["営業時間", "10:00〜18:30"],
  ["最終受付", "17:00"],
  ["定休日", "不定休"],
  ["電話", "070-1306-0184"],
  ["メール", "saloncherish184@gmail.com"],
  ["営業形態", "完全予約制・個室・1名運営"],
] as const;
