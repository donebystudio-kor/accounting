import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const BASE_URL = "https://accounting-theta-pink.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "회계던 — 회계 기준별 인터랙티브 문제 풀이",
    template: "%s — 회계던",
  },
  description:
    "분개 문제, K-IFRS 문제, 회계 문제 풀기. 클릭형 인터랙티브 회계 학습 사이트.",
  keywords: "분개 문제, 회계 문제 풀기, K-IFRS 문제, 회계 학습, 회계 연습, 일반기업회계기준",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "회계던",
    title: "회계던 — 회계 기준별 인터랙티브 문제 풀이",
    description: "분개 문제, K-IFRS 문제, 회계 문제 풀기. 클릭형 인터랙티브 회계 학습 사이트.",
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
      <body className="min-h-screen flex flex-col">
        <header className="bg-surface border-b border-border sticky top-0 z-20">
          <div className="mx-auto max-w-3xl px-4 h-12 flex items-center justify-between">
            <Link href="/" className="text-lg font-extrabold text-primary">
              회계던
            </Link>
            <span className="text-xs text-text-sub">
              회계 기준별 문제 풀이
            </span>
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
