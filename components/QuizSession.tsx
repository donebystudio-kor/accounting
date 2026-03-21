"use client";

import { useState, useEffect, useRef } from "react";
import { Problem } from "@/constants/problems";
import JournalQuiz from "./JournalQuiz";
import OxQuiz from "./OxQuiz";

interface Props {
  problems: Problem[];
  categoryName: string;
}

export default function QuizSession({ problems, categoryName }: Props) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [done, setDone] = useState(false);
  // force re-mount quiz components
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (timerEnabled && !done) {
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerEnabled, done, index]);

  const problem = problems[index];

  const handleResult = (correct: boolean, partial: boolean) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (correct) {
      const streakBonus = streak >= 2 ? Math.min(streak, 5) : 0;
      setScore((s) => s + 10 + streakBonus);
      setBonus(streakBonus);
      setStreak((s) => s + 1);
    } else if (partial) {
      setScore((s) => s + 5);
      setBonus(0);
      setStreak(0);
    } else {
      setBonus(0);
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (index + 1 >= problems.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setElapsed(0);
    setKey((k) => k + 1);
  };

  if (done) {
    const maxScore = problems.length * 10;
    const pct = Math.round((score / maxScore) * 100);
    return (
      <div className="text-center py-10">
        <p className="text-4xl font-extrabold text-primary mb-2">{score}점</p>
        <p className="text-text-sub text-sm mb-1">
          {problems.length}문제 · 달성률 {pct}%
        </p>
        <div className="w-full max-w-xs mx-auto h-2 bg-border rounded-full mt-3 mb-6">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => {
              setIndex(0);
              setScore(0);
              setStreak(0);
              setElapsed(0);
              setDone(false);
              setKey((k) => k + 1);
            }}
            className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-bold"
          >
            다시 풀기
          </button>
          <a
            href="/"
            className="px-5 py-2 border border-border rounded-lg text-sm text-text-sub"
          >
            홈으로
          </a>
        </div>
      </div>
    );
  }

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
        <JournalQuiz
          key={key}
          problem={problem}
          onResult={handleResult}
          onNext={handleNext}
        />
      )}
      {problem.type === "ox" && (
        <OxQuiz
          key={key}
          problem={problem}
          onResult={handleResult}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
