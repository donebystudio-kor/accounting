"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Problem } from "@/constants/problems";
import JournalQuiz from "./JournalQuiz";
import OxQuiz from "./OxQuiz";
import CalculationQuiz from "./CalculationQuiz";
import StatementQuiz from "./StatementQuiz";
import { addWrong, getWrongCount, isBookmarked, toggleBookmark, savePosition } from "@/lib/storage";

export interface QuizResult {
  problemId: string;
  correct: boolean;
  partial: boolean;
  elapsed: number;
}

export interface QuizSummary {
  categoryName: string;
  problems: Problem[];
  results: QuizResult[];
  totalScore: number;
  totalElapsed: number;
  timerUsed: boolean;
}

interface Props {
  problems: Problem[];
  categoryName: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizSession({ problems, categoryName }: Props) {
  const router = useRouter();
  const [shuffled] = useState(() => shuffle(problems));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerUsed, setTimerUsed] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [key, setKey] = useState(0);

  // 타이머 켜면 timerUsed 플래그 설정
  useEffect(() => {
    if (timerEnabled) {
      setTimerUsed(true);
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerEnabled, index]);

  const problem = shuffled[index];

  // 점수: 정답 10점, 부분정답 5점, 오답 0점. 보너스 없음. 만점 = 문제수 × 10
  const handleResult = (correct: boolean, partial: boolean) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const result: QuizResult = {
      problemId: problem.id,
      correct,
      partial,
      elapsed: timerEnabled ? elapsed : 0,
    };
    setResults((prev) => [...prev, result]);

    // 오답 저장
    if (!correct) addWrong(problem.id);

    if (correct) {
      setScore((s) => s + 10);
      setStreak((s) => s + 1);
    } else if (partial) {
      setScore((s) => s + 5);
      setStreak(0);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (index + 1 >= shuffled.length) {
      // 결과 집계
      const allResults = [...results];
      const totalElapsed = allResults.reduce((s, r) => s + r.elapsed, 0);
      const summary: QuizSummary = {
        categoryName,
        problems: shuffled,
        results: allResults,
        totalScore: score,
        totalElapsed,
        timerUsed,
      };
      sessionStorage.setItem("quizSummary", JSON.stringify(summary));
      router.push("/result");
      return;
    }
    const nextIdx = index + 1;
    setIndex(nextIdx);
    setElapsed(0);
    setKey((k) => k + 1);
    // 위치 저장
    savePosition({ standard: categoryName, type: "quiz", index: nextIdx });
  };

  return (
    <div>
      {/* 상단 바 */}
      <div className="flex items-center justify-between mb-3 text-xs text-text-sub">
        <span>
          {index + 1} / {shuffled.length}
        </span>
        <div className="flex items-center gap-3">
          <span className="font-bold text-primary">{score}점</span>
          {streak >= 3 && (
            <span className="text-correct font-bold">🔥 {streak}연속</span>
          )}
          <button
            onClick={() => setTimerEnabled(!timerEnabled)}
            className={`px-2 py-0.5 border rounded text-[10px] ${timerEnabled ? "border-primary text-primary" : "border-border"}`}
          >
            {timerEnabled ? `⏱ ${elapsed}s` : "타이머"}
          </button>
        </div>
      </div>

      {/* 여기까지만 풀기 */}
      {results.length > 0 && (
        <div className="mb-3">
          <button
            onClick={() => {
              const allResults = [...results];
              const totalElapsed = allResults.reduce((s, r) => s + r.elapsed, 0);
              const summary: QuizSummary = {
                categoryName,
                problems: shuffled.slice(0, results.length),
                results: allResults,
                totalScore: score,
                totalElapsed,
                timerUsed,
              };
              sessionStorage.setItem("quizSummary", JSON.stringify(summary));
              router.push("/result");
            }}
            className="w-full py-1.5 text-xs border border-border rounded-lg text-text-sub hover:border-primary hover:text-primary transition-colors"
          >
            여기까지만 풀기 ({results.length}/{shuffled.length}문제)
          </button>
        </div>
      )}

      {/* 진행 바 */}
      <div className="w-full h-1 bg-border rounded-full mb-5">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${((index + 1) / shuffled.length) * 100}%` }}
        />
      </div>

      {/* 오답 배지 + 북마크 */}
      <div className="flex items-center justify-between mb-3">
        <div>
          {getWrongCount(problem.id) > 0 && (
            <span className="text-[10px] text-wrong bg-amber-50 px-2 py-0.5 rounded">
              ❌ {getWrongCount(problem.id)}회 오답
            </span>
          )}
        </div>
        <button
          onClick={() => { toggleBookmark(problem.id); setKey((k) => k + 0.1); }}
          className="text-lg"
          title={isBookmarked(problem.id) ? "북마크 해제" : "북마크"}
        >
          {isBookmarked(problem.id) ? "★" : "☆"}
        </button>
      </div>

      {/* 문제 렌더 */}
      {problem.type === "journal" && (
        <JournalQuiz key={key} problem={problem} onResult={handleResult} onNext={handleNext} />
      )}
      {problem.type === "ox" && (
        <OxQuiz key={key} problem={problem} onResult={handleResult} onNext={handleNext} />
      )}
      {problem.type === "calculation" && (
        <CalculationQuiz key={key} problem={problem} onResult={handleResult} onNext={handleNext} />
      )}
      {problem.type === "statement" && (
        <StatementQuiz key={key} problem={problem} onResult={handleResult} onNext={handleNext} />
      )}
    </div>
  );
}
