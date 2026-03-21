"use client";

import { useState } from "react";
import { Problem } from "@/constants/problems";
import GlossaryText from "./GlossaryText";
import { DEFAULT_HINTS } from "@/constants/hints";
import HintToggle from "./HintToggle";

interface Props {
  problem: Problem;
  onResult: (correct: boolean, partial: boolean) => void;
  onNext: () => void;
}

export default function OxQuiz({ problem, onResult, onNext }: Props) {
  const [pick, setPick] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (pick === null) return;
    setSubmitted(true);
    onResult(pick === problem.answer, false);
  };

  const isCorrect = submitted && pick === problem.answer;

  return (
    <div>
      <div className="bg-surface border border-border rounded-lg p-4 mb-6">
        <p className="font-medium leading-relaxed"><GlossaryText text={problem.text} /></p>
        <HintToggle hint={problem.hint || DEFAULT_HINTS.ox} />
      </div>

      {!submitted ? (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPick(true)}
              className={`min-h-[56px] py-4 bg-surface border-2 rounded-lg text-lg font-bold transition-colors active:scale-[0.97] ${
                pick === true
                  ? "border-correct bg-green-50 text-correct"
                  : "border-border hover:border-correct hover:text-correct"
              }`}
            >
              ⭕ 맞다
            </button>
            <button
              onClick={() => setPick(false)}
              className={`min-h-[56px] py-4 bg-surface border-2 rounded-lg text-lg font-bold transition-colors active:scale-[0.97] ${
                pick === false
                  ? "border-wrong bg-red-50 text-wrong"
                  : "border-border hover:border-wrong hover:text-wrong"
              }`}
            >
              ❌ 틀리다
            </button>
          </div>
          <button
            onClick={handleSubmit}
            disabled={pick === null}
            className="w-full min-h-[44px] py-2.5 bg-primary text-white rounded-lg font-bold text-sm disabled:opacity-40 active:scale-[0.98] transition-transform"
          >
            제출
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div
              className={`min-h-[56px] py-4 text-center border-2 rounded-lg text-lg font-bold ${
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
              className={`min-h-[56px] py-4 text-center border-2 rounded-lg text-lg font-bold ${
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
