import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "회계던 — 클릭형 분개 연습",
  description: "계정과목 버튼을 클릭해서 분개를 연습하는 인터랙티브 회계 학습 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen">
        <header className="border-b border-border bg-surface sticky top-0 z-10">
          <div className="mx-auto max-w-2xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-primary">
              회계던
            </a>
            <span className="text-xs text-text-sub">클릭형 분개 연습</span>
          </div>
        </header>
        <main className="mx-auto max-w-2xl px-4 py-6">{children}</main>
        <footer className="border-t border-border mt-12">
          <div className="mx-auto max-w-2xl px-4 py-4 text-center text-xs text-text-sub">
            <a href="/privacy" className="hover:underline">
              개인정보처리방침
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
