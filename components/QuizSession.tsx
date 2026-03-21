"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Problem } from "@/constants/problems";
import JournalQuiz from "./JournalQuiz";
import OxQuiz from "./OxQuiz";
import CalculationQuiz from "./CalculationQuiz";
import StatementQuiz from "./StatementQuiz";

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
}

interface Props {
  problems: Problem[];
  categoryName: string;
}

export default function QuizSession({ problems, categoryName }: Props) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (timerEnabled) {
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerEnabled, index]);

  const problem = problems[index];

  const handleResult = (correct: boolean, partial: boolean) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const result: QuizResult = {
      problemId: problem.id,
      correct,
      partial,
      elapsed,
    };
    const newResults = [...results, result];
    setResults(newResults);
    setTotalElapsed((t) => t + elapsed);

    if (correct) {
      const streakBonus = streak >= 2 ? Math.min(streak, 5) : 0;
      setScore((s) => s + 10 + streakBonus);
      setStreak((s) => s + 1);
    } else if (partial) {
      setScore((s) => s + 5);
      setStreak(0);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (index + 1 >= problems.length) {
      // 결과를 sessionStorage에 저장하고 result 페이지로 이동
      const finalElapsed = totalElapsed + elapsed;
      const finalScore = score; // 이미 handleResult에서 업데이트됨
      const summary: QuizSummary = {
        categoryName,
        problems,
        results: [...results],
        totalScore: finalScore,
        totalElapsed: finalElapsed,
      };
      sessionStorage.setItem("quizSummary", JSON.stringify(summary));
      router.push("/result");
      return;
    }
    setIndex((i) => i + 1);
    setElapsed(0);
    setKey((k) => k + 1);
  };

  return (
    <div>
      {/* 상단 바 */}
      <div className="flex items-center justify-between mb-3 text-xs text-text-sub">
        <span>
          {index + 1} / {problems.length}
        </span>
        <div className="flex items-center gap-3">
          <span className="font-bold text-primary">{score}점</span>
          {streak >= 2 && (
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

      {/* 진행 바 */}
      <div className="w-full h-1 bg-border rounded-full mb-5">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${((index + 1) / problems.length) * 100}%` }}
        />
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
