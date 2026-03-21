"use client";

import { useState } from "react";
import { Problem } from "@/constants/problems";

interface Props {
  problem: Problem;
  onResult: (correct: boolean, partial: boolean) => void;
  onNext: () => void;
}

export default function OxQuiz({ problem, onResult, onNext }: Props) {
  const [pick, setPick] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (answer: boolean) => {
    setPick(answer);
    setSubmitted(true);
    onResult(answer === problem.answer, false);
  };

  const isCorrect = submitted && pick === problem.answer;

  return (
    <div>
      <div className="bg-surface border border-border rounded-lg p-4 mb-6">
        <p className="font-medium leading-relaxed">{problem.text}</p>
      </div>

      {!submitted ? (
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleSubmit(true)}
            className="py-4 bg-surface border-2 border-border rounded-lg text-lg font-bold hover:border-correct hover:text-correct transition-colors active:scale-[0.97]"
          >
            ⭕ 맞다
          </button>
          <button
            onClick={() => handleSubmit(false)}
            className="py-4 bg-surface border-2 border-border rounded-lg text-lg font-bold hover:border-wrong hover:text-wrong transition-colors active:scale-[0.97]"
          >
            ❌ 틀리다
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`py-4 text-center border-2 rounded-lg text-lg font-bold ${
                problem.answer === true
                  ? "border-correct bg-green-50 text-correct"
                  : pick === true
                  ? "border-wrong bg-red-50 text-wrong"
                  : "border-border text-text-sub opacity-50"
              }`}
            >
              ⭕ 맞다
            </div>
            <div
              className={`py-4 text-center border-2 rounded-lg text-lg font-bold ${
                problem.answer === false
                  ? "border-correct bg-green-50 text-correct"
                  : pick === false
                  ? "border-wrong bg-red-50 text-wrong"
                  : "border-border text-text-sub opacity-50"
              }`}
            >
              ❌ 틀리다
            </div>
          </div>

          <div className={`p-3 rounded-lg border text-sm ${isCorrect ? "bg-green-50 border-correct text-correct" : "bg-red-50 border-wrong text-wrong"}`}>
            <p className="font-bold">{isCorrect ? "정답!" : "오답"}</p>
          </div>

          <div className="p-3 bg-surface border border-border rounded-lg">
            <p className="text-xs font-bold mb-1">해설</p>
            <p className="text-xs text-text-sub">{problem.explanation}</p>
          </div>

          <button
            onClick={onNext}
            className="w-full py-2.5 bg-primary text-white rounded-lg font-bold text-sm active:scale-[0.98] transition-transform"
          >
            다음 문제
          </button>
        </div>
      )}
    </div>
  );
}
