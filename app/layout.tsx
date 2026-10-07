import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "総社秋元公歴史まつり 武者行列 参加者向け案内",
  description: "総社秋元公歴史まつりの武者行列参加者向け案内ページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${robotoMono.variable}`}>
      <body>
        <header className="border-b border-stone-300/80 bg-[#fffdf8]/90 backdrop-blur">
          <div className="page-shell flex min-h-16 items-center justify-between gap-4 py-3">
            <Link
              href="/"
              className="font-semibold tracking-[0.08em] text-stone-900"
            >
              総社秋元公歴史まつり
            </Link>
            <nav
              aria-label="主要ナビゲーション"
              className="flex items-center gap-4 text-sm font-medium"
            >
              <Link className="text-stone-700 hover:text-[#7c2d2d]" href="/">
                日程
              </Link>
              <Link
                className="text-stone-700 hover:text-[#7c2d2d]"
                href="/preparation/"
              >
                準備情報
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-16 border-t border-stone-300/80 bg-[#efe8dc]">
          <div className="page-shell py-8 text-sm leading-7 text-stone-600">
            <p>総社秋元公歴史まつり 武者行列 参加者向け案内</p>
            <p className="mt-1">掲載内容は配布資料に基づいて整理しています。</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
