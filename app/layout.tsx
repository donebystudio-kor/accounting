import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const BASE_URL = "https://accounting-theta-pink.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "회계던 | 회계기준별 인터랙티브 문제 풀이",
    template: "%s",
  },
  description:
    "K-IFRS, 일반기업, 은행업, 공기업 회계기준별 분개·OX·계산 문제 555개. 무료 회계 학습 플랫폼.",
  keywords: "분개 문제, 회계 문제 풀기, K-IFRS 문제, 회계 학습, 일반기업회계기준, 은행업회계, 공기업회계",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "회계던",
    title: "회계던 | 회계기준별 인터랙티브 문제 풀이",
    description: "K-IFRS, 일반기업, 은행업, 공기업 회계기준별 분개·OX·계산 문제 555개. 무료 회계 학습 플랫폼.",
    url: BASE_URL,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TBWKVVNL4H" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-TBWKVVNL4H');` }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="bg-surface border-b border-border sticky top-0 z-20">
          <div className="mx-auto max-w-3xl px-4 h-12 flex items-center justify-between">
            <Link href="/" className="text-lg font-extrabold text-primary">
              회계던
            </Link>
            <nav className="flex items-center gap-4 text-xs">
              <Link href="/" className="text-text-sub hover:text-primary">문제풀기</Link>
              <Link href="/concepts" className="text-text-sub hover:text-primary">개념</Link>
              <Link href="/calculator" className="text-text-sub hover:text-primary">계산기</Link>
              <Link href="/accounts" className="text-text-sub hover:text-primary">계정과목</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 mx-auto max-w-3xl w-full px-4 py-6">
          {children}
        </main>
        <footer className="border-t border-border">
          <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between text-xs text-text-sub">
            <span>&copy; 2026 회계던</span>
            <Link href="/privacy" className="hover:underline">
              개인정보처리방침
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
