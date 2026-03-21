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

export default function StatementQuiz({ problem, onResult, onNext }: Props) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // 재무제표형은 계산형과 동일한 숫자 입력으로 처리 (추후 항목 선택 UI로 확장 가능)
  const handleSubmit = () => {
    const num = Number(input.replace(/,/g, ""));
    if (isNaN(num)) return;
    setSubmitted(true);
    onResult(num === problem.correctAnswer, false);
  };

  const isCorrect = submitted && Number(input.replace(/,/g, "")) === problem.correctAnswer;

  return (
    <div>
      <div className="bg-surface border border-border rounded-lg p-4 mb-4">
        <p className="font-medium leading-relaxed"><GlossaryText text={problem.text} /></p>
        <HintToggle hint={problem.hint || DEFAULT_HINTS.statement} />
      </div>

      {!submitted ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="숫자 입력"
              className="flex-1 px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <span className="text-sm text-text-sub">원</span>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="w-full py-2.5 bg-primary text-white rounded-lg font-bold text-sm disabled:opacity-40 active:scale-[0.98] transition-transform"
          >
            제출
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className={`p-3 rounded-lg border text-sm ${isCorrect ? "bg-green-50 border-correct text-correct" : "bg-red-50 border-wrong text-wrong"}`}>
            <p className="font-bold">{isCorrect ? "정답!" : "오답"}</p>
            {!isCorrect && (
              <p className="text-xs mt-1">정답: {problem.correctAnswer?.toLocaleString()}원</p>
            )}
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
