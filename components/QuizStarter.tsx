"use client";

import { useState } from "react";
import { Problem } from "@/constants/problems";
import QuizSession from "./QuizSession";

interface Props {
  stdProblems: Problem[];
  commonProblems: Problem[];
  categoryName: string;
  isCommonStandard: boolean;
}

export default function QuizStarter({
  stdProblems,
  commonProblems,
  categoryName,
  isCommonStandard,
}: Props) {
  const [started, setStarted] = useState(false);
  const [includeCommon, setIncludeCommon] = useState(true);

  // 공통 직접 접근이면 옵션 없이 바로 시작
  if (isCommonStandard) {
    return <QuizSession problems={stdProblems} categoryName={categoryName} />;
  }

  const problems = includeCommon
    ? [...stdProblems, ...commonProblems]
    : stdProblems;

  if (started) {
    return <QuizSession problems={problems} categoryName={categoryName} />;
  }

  return (
    <div className="py-8">
      <div className="bg-surface border border-border rounded-lg p-5 mb-5">
        <h2 className="font-bold text-text mb-4">문제 풀이 옵션</h2>

        <div className="flex items-center justify-between py-3 border-b border-border">
          <div>
            <p className="text-sm font-medium text-text">공통 문제 포함</p>
            <p className="text-xs text-text-sub mt-0.5">
              모든 기준에 적용되는 기본 문제를 함께 출제합니다
            </p>
          </div>
          <button
            onClick={() => setIncludeCommon(!includeCommon)}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              includeCommon ? "bg-primary" : "bg-border"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                includeCommon ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>

        <div className="mt-4 text-xs text-text-sub">
          <p>
            기준 전용: <span className="font-bold text-text">{stdProblems.length}문제</span>
            {includeCommon && (
              <>
                {" "}+ 공통: <span className="font-bold text-text">{commonProblems.length}문제</span>
                {" "}= <span className="font-bold text-primary">{problems.length}문제</span>
              </>
            )}
            {!includeCommon && (
              <>
                {" "}= <span className="font-bold text-primary">{problems.length}문제</span>
              </>
            )}
          </p>
        </div>
      </div>

      <button
        onClick={() => setStarted(true)}
        disabled={problems.length === 0}
        className="w-full min-h-[44px] py-3 bg-primary text-white rounded-lg font-bold text-sm disabled:opacity-40 active:scale-[0.98] transition-transform"
      >
        {problems.length}문제 시작
      </button>
    </div>
  );
}
