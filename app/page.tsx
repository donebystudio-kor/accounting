import Link from "next/link";
import { STANDARDS } from "@/constants/standards";
import { PROBLEMS } from "@/constants/problems";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계던 — 회계 기준별 인터랙티브 문제 풀이",
  description: "분개 문제, K-IFRS 문제, OX 퀴즈까지. 계정과목 버튼 클릭으로 회계를 연습하세요.",
  openGraph: {
    title: "회계던 — 회계 기준별 인터랙티브 문제 풀이",
    description: "분개 문제, K-IFRS 문제, OX 퀴즈까지. 계정과목 버튼 클릭으로 회계를 연습하세요.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <section className="text-center py-8 mb-8">
        <h1 className="text-3xl font-extrabold text-primary mb-1">회계던</h1>
        <p className="text-text-sub text-sm">
          회계 기준별 인터랙티브 문제 풀이
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-text mb-3">회계기준 선택</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {STANDARDS.map((std) => {
            const count = PROBLEMS.filter(
              (p) => p.standard === std.id || p.standard === "common"
            ).length;
            return (
              <Link
                key={std.id}
                href={`/${std.id}`}
                className="flex items-center gap-3 p-5 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
              >
                <span className="text-3xl">{std.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-text">{std.name}</h3>
                  <p className="text-xs text-text-sub mt-0.5">{std.description}</p>
                </div>
                <span className="text-xs text-text-sub">{count}문제</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="p-4 bg-primary-bg/40 border border-primary/10 rounded-lg text-sm text-text-sub">
        <p className="font-semibold text-primary mb-1">사용법</p>
        <ol className="list-decimal list-inside space-y-0.5 text-xs">
          <li>회계기준을 선택하세요</li>
          <li>카테고리를 골라 문제 풀이를 시작하세요</li>
          <li>분개형: 차변/대변 계정과목 버튼 클릭</li>
          <li>OX형: O 또는 X 버튼 클릭</li>
          <li>제출 후 해설 확인 → 다음 문제</li>
        </ol>
      </section>
    </div>
  );
}
