import Link from "next/link";
import { STANDARDS } from "@/constants/standards";
import { CATEGORIES } from "@/constants/categories";
import { PROBLEMS } from "@/constants/problems";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회계던 — 회계 기준별 인터랙티브 문제 풀이",
  description: "분개 문제, K-IFRS 문제, OX 퀴즈. 클릭형 인터랙티브 회계 학습 사이트.",
};

function countProblems(standardId: string, categoryId: string) {
  // 해당 기준 문제 + 공통 문제(같은 카테고리)
  return PROBLEMS.filter(
    (p) =>
      p.category === categoryId &&
      (p.standard === standardId || p.standard === "common")
  ).length;
}

export default function Home() {
  // 공통 카테고리
  const commonCats = CATEGORIES.filter((c) => c.standard === "common");

  return (
    <div>
      <section className="text-center py-8 mb-6">
        <h1 className="text-3xl font-extrabold text-primary mb-1">회계던</h1>
        <p className="text-text-sub text-sm">
          회계 기준별 인터랙티브 문제 풀이
        </p>
      </section>

      {/* 공통 문제 — 기준과 무관하게 바로 풀기 */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">📚</span>
          <div>
            <h2 className="font-bold text-text">공통 기본</h2>
            <p className="text-xs text-text-sub">모든 회계기준에 적용되는 기본 문제</p>
          </div>
        </div>
        <div className="grid gap-2">
          {commonCats.map((cat) => {
            const count = PROBLEMS.filter(
              (p) => p.standard === "common" && p.category === cat.id
            ).length;
            return (
              <Link
                key={cat.id}
                href={`/quiz/common/${cat.id}`}
                className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-sm text-text">{cat.name}</h3>
                  <p className="text-xs text-text-sub mt-0.5">{cat.description}</p>
                </div>
                <span className="text-xs text-text-sub whitespace-nowrap ml-4">
                  {count}문제
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 기준별 문제 — 해당 기준 + 공통 문제 합산 표시 */}
      {STANDARDS.map((std) => {
        const stdCats = CATEGORIES.filter((c) => c.standard === std.id);
        // 해당 기준 전용 카테고리 + 공통 카테고리 모두 표시
        const allCats = [...stdCats, ...commonCats];
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
              {allCats.map((cat) => {
                const count = countProblems(std.id, cat.id);
                if (count === 0) return null;
                return (
                  <Link
                    key={cat.id}
                    href={`/quiz/${std.id}/${cat.id}`}
                    className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-sm text-text">
                        {cat.name}
                        {cat.standard === "common" && (
                          <span className="ml-1.5 text-[10px] text-text-sub font-normal">공통</span>
                        )}
                      </h3>
                      <p className="text-xs text-text-sub mt-0.5">{cat.description}</p>
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
