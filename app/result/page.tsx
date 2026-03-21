"use client";

import { useEffect, useState } from "react";
import { QuizSummary } from "@/components/QuizSession";
import { Problem } from "@/constants/problems";
import Link from "next/link";

export default function ResultPage() {
  const [summary, setSummary] = useState<QuizSummary | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("quizSummary");
    if (raw) {
      try {
        setSummary(JSON.parse(raw));
      } catch {}
    }
  }, []);

  if (!summary) {
    return (
      <div className="text-center py-12">
        <p className="text-text-sub mb-4">결과 데이터가 없습니다.</p>
        <Link href="/" className="text-primary text-sm hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const { problems, results, totalScore, totalElapsed, categoryName, timerUsed } = summary;
  const correctCount = results.filter((r) => r.correct).length;
  const partialCount = results.filter((r) => r.partial && !r.correct).length;
  const wrongCount = results.length - correctCount - partialCount;
  const maxScore = problems.length * 10;
  const pct = Math.min(Math.round((totalScore / maxScore) * 100), 100);
  const minutes = Math.floor(totalElapsed / 60);
  const seconds = totalElapsed % 60;

  const wrongProblems = results
    .map((r, i) => ({ result: r, problem: problems[i] }))
    .filter(({ result }) => !result.correct);

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-xs text-text-sub hover:text-primary">
          ← 홈
        </Link>
        <span className="text-xs text-border">/</span>
        <span className="text-xs font-semibold text-text">{categoryName} 결과</span>
      </div>

      {/* 점수 요약 */}
      <div className="text-center mb-8">
        <p className="text-5xl font-extrabold text-primary">{totalScore}</p>
        <p className="text-xs text-text-sub mt-1">/ {maxScore}점</p>
        <div className="w-full max-w-xs mx-auto h-2 bg-border rounded-full mt-4">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* 통계 */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        <div className="bg-surface border border-border rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-correct">{correctCount}</p>
          <p className="text-[10px] text-text-sub">정답</p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-partial">{partialCount}</p>
          <p className="text-[10px] text-text-sub">부분정답</p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-wrong">{wrongCount}</p>
          <p className="text-[10px] text-text-sub">오답</p>
        </div>
        <div className="bg-surface border border-border rounded-lg p-3 text-center">
          <p className="text-lg font-bold text-text">
            {timerUsed
              ? (minutes > 0 ? `${minutes}분 ${seconds}초` : `${seconds}초`)
              : "-"
            }
          </p>
          <p className="text-[10px] text-text-sub">
            {timerUsed ? "소요시간" : "타이머 미사용"}
          </p>
        </div>
      </div>

      {/* 문제별 결과 */}
      <h2 className="font-bold text-sm mb-3">문제별 결과</h2>
      <div className="space-y-1.5 mb-8">
        {results.map((r, i) => {
          const p = problems[i];
          const isExpanded = expandedId === p.id;
          return (
            <div key={p.id}>
              <button
                onClick={() => setExpandedId(isExpanded ? null : p.id)}
                className={`w-full flex items-center gap-2 p-3 border rounded-lg text-left text-sm transition-colors ${
                  r.correct
                    ? "border-correct/30 bg-green-50/50"
                    : r.partial
                    ? "border-partial/30 bg-orange-50/50"
                    : "border-wrong/30 bg-red-50/50"
                }`}
              >
                <span className="text-xs font-bold w-5">
                  {r.correct ? "✅" : r.partial ? "🟡" : "❌"}
                </span>
                <span className="flex-1 truncate">{p.text}</span>
                {timerUsed && <span className="text-xs text-text-sub">{r.elapsed}s</span>}
                <span className="text-xs text-text-sub">{isExpanded ? "▾" : "▸"}</span>
              </button>
              {isExpanded && (
                <div className="ml-7 mt-1 p-3 bg-surface border border-border rounded-lg text-xs text-text-sub space-y-2">
                  {p.type === "journal" && p.debit && p.credit && (
                    <div>
                      <p className="font-bold text-text mb-1">정답 분개:</p>
                      {p.debit.map((e, j) => (
                        <p key={`d${j}`}>(차) {e.account} {e.amount.toLocaleString()}</p>
                      ))}
                      {p.credit.map((e, j) => (
                        <p key={`c${j}`}>(대) {e.account} {e.amount.toLocaleString()}</p>
                      ))}
                    </div>
                  )}
                  {p.type === "ox" && (
                    <p>
                      <span className="font-bold text-text">정답: </span>
                      {p.answer ? "⭕ 맞다" : "❌ 틀리다"}
                    </p>
                  )}
                  {(p.type === "calculation" || p.type === "statement") && (
                    <p>
                      <span className="font-bold text-text">정답: </span>
                      {p.correctAnswer?.toLocaleString()}원
                    </p>
                  )}
                  <div>
                    <p className="font-bold text-text">해설:</p>
                    <p>{p.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 하단 버튼 */}
      <div className="flex gap-3">
        <Link
          href="/"
          className="flex-1 py-2.5 text-center bg-primary text-white rounded-lg text-sm font-bold"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
}
