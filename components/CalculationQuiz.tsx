"use client";

import { useState } from "react";
import { Problem } from "@/constants/problems";
import GlossaryText from "./GlossaryText";
import { DEFAULT_HINTS } from "@/constants/hints";

interface Props {
  problem: Problem;
  onResult: (correct: boolean, partial: boolean) => void;
  onNext: () => void;
}

function formatNumber(val: string): string {
  const num = val.replace(/[^0-9-]/g, "");
  if (!num || num === "-") return num;
  return Number(num).toLocaleString();
}

function parseNumber(val: string): number {
  return Number(val.replace(/,/g, ""));
}

export default function CalculationQuiz({ problem, onResult, onNext }: Props) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const answer = problem.correctAnswer ?? 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(formatNumber(e.target.value));
  };

  const handleSubmit = () => {
    const num = parseNumber(input);
    if (isNaN(num)) return;
    setSubmitted(true);
    // ±1 오차 허용 (반올림 차이 대비)
    const correct = Math.abs(num - answer) <= 1;
    onResult(correct, false);
  };

  const userNum = parseNumber(input);
  const isCorrect = submitted && Math.abs(userNum - answer) <= 1;

  return (
    <div>
      <div className="bg-surface border border-border rounded-lg p-4 mb-4">
        <p className="font-medium leading-relaxed"><GlossaryText text={problem.text} /></p>
        <p className="text-xs text-primary mt-2">💡 {problem.hint || DEFAULT_HINTS.calculation}</p>
      </div>

      {!submitted ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              inputMode="numeric"
              value={input}
              onChange={handleChange}
              placeholder="숫자 입력"
              className="flex-1 min-h-[44px] px-3 py-2.5 border border-border rounded-lg text-sm text-right focus:outline-none focus:border-primary"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <span className="text-sm text-text-sub font-medium">원</span>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="w-full min-h-[44px] py-2.5 bg-primary text-white rounded-lg font-bold text-sm disabled:opacity-40 active:scale-[0.98] transition-transform"
          >
            제출
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {/* 입력값 vs 정답 비교 */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-3 rounded-lg border text-center ${isCorrect ? "border-correct bg-green-50" : "border-wrong bg-red-50"}`}>
              <p className="text-[10px] text-text-sub mb-1">내 답</p>
              <p className={`text-lg font-bold ${isCorrect ? "text-correct" : "text-wrong"}`}>
                {userNum.toLocaleString()}원
              </p>
            </div>
            <div className="p-3 rounded-lg border border-correct bg-green-50 text-center">
              <p className="text-[10px] text-text-sub mb-1">정답</p>
              <p className="text-lg font-bold text-correct">
                {answer.toLocaleString()}원
              </p>
            </div>
          </div>

          <div className={`p-3 rounded-lg border text-sm ${isCorrect ? "bg-green-50 border-correct text-correct" : "bg-amber-50 border-wrong/70 text-wrong"}`}>
            <p className="font-bold">{isCorrect ? "정답!" : "❌ 오답"}</p>
          </div>

          <div className="p-3 bg-surface border border-border rounded-lg">
            <p className="text-xs font-bold mb-1">해설</p>
            <p className="text-xs text-text-sub">{problem.explanation}</p>
          </div>
          <button
            onClick={onNext}
            className="w-full min-h-[44px] py-2.5 bg-primary text-white rounded-lg font-bold text-sm active:scale-[0.98] transition-transform"
          >
            다음 문제
          </button>
        </div>
      )}
    </div>
  );
}
