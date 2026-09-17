import type { Metadata, Viewport } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const sans = Zen_Kaku_Gothic_New({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const serif = Shippori_Mincho({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "横浜の肩甲骨はがし・背中美容｜Private salon cherish",
  description:
    "横浜・日ノ出町、桜木町エリアの完全予約制プライベートサロン。40代からの肩甲骨まわりや後ろ姿のお悩みを、看護師資格を持つ美容家が1対1で伺います。",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "横浜の肩甲骨はがし・背中美容｜Private salon cherish",
    description:
      "40代からの肩甲骨まわりと後ろ姿を相談できる、横浜のプライベートサロン。",
    type: "website",
    locale: "ja_JP",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcf9f5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
