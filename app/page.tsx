import Link from "next/link";
import { STANDARDS } from "@/constants/standards";
import { CATEGORIES } from "@/constants/categories";
import { PROBLEMS } from "@/constants/problems";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계던 — 회계 기준별 인터랙티브 문제 풀이",
  description: "분개 문제, K-IFRS 문제, OX 퀴즈. 클릭형 인터랙티브 회계 학습 사이트.",
};

export default function Home() {
  return (
    <div>
      <section className="text-center py-8 mb-6">
        <h1 className="text-3xl font-extrabold text-primary mb-1">회계던</h1>
        <p className="text-text-sub text-sm">
          회계 기준별 인터랙티브 문제 풀이
        </p>
      </section>

      {STANDARDS.map((std) => {
        const cats = CATEGORIES.filter((c) => c.standard === std.id);
        if (cats.length === 0) return null;
        return (
          <section key={std.id} className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{std.emoji}</span>
              <div>
                <h2 className="font-bold text-text">{std.name}</h2>
                <p className="text-xs text-text-sub">{std.description}</p>
              </div>
            </div>
            <div className="grid gap-2">
              {cats.map((cat) => {
                const count = PROBLEMS.filter(
                  (p) => p.standard === std.id && p.category === cat.id
                ).length;
                return (
                  <Link
                    key={cat.id}
                    href={`/quiz/${std.id}/${cat.id}`}
                    className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-sm text-text">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-text-sub mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                    <span className="text-xs text-text-sub whitespace-nowrap ml-4">
                      {count}문제
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      <section className="p-4 bg-primary-bg/40 border border-primary/10 rounded-lg text-sm text-text-sub">
        <p className="font-semibold text-primary mb-1">사용법</p>
        <ol className="list-decimal list-inside space-y-0.5 text-xs">
          <li>회계기준과 카테고리를 선택</li>
          <li>분개형: 차변/대변 계정과목 버튼 클릭</li>
          <li>OX형: O 또는 X 버튼 클릭</li>
          <li>제출 후 해설 확인 → 다음 문제</li>
        </ol>
      </section>
    </div>
  );
}
