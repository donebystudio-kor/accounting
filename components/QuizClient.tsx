"use client";

import { useState, useMemo } from "react";
import { Problem, PROBLEMS } from "@/constants/problems";
import { ACCOUNTS, ACCOUNT_TYPE_COLORS, Account } from "@/constants/accounts";

interface Props {
  category: string;
}

type AccountType = Account["type"];
const TYPES: AccountType[] = ["자산", "부채", "자본", "수익", "비용"];

export default function QuizClient({ category }: Props) {
  const problems = useMemo(
    () => PROBLEMS.filter((p) => p.category === category),
    [category]
  );
  const [index, setIndex] = useState(0);
  const [debitPick, setDebitPick] = useState<string | null>(null);
  const [creditPick, setCreditPick] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [expandedType, setExpandedType] = useState<AccountType | null>(null);

  const problem = problems[index];
  if (!problem) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-bold mb-2">완료!</p>
        <p className="text-text-sub mb-4">
          {problems.length}문제 중 {score}문제 정답
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => {
              setIndex(0);
              setScore(0);
              setSubmitted(false);
              setDebitPick(null);
              setCreditPick(null);
            }}
            className="px-5 py-2 bg-primary text-white rounded-lg"
          >
            다시 풀기
          </button>
          <a
            href="/"
            className="px-5 py-2 border border-border rounded-lg text-text-sub"
          >
            홈으로
          </a>
        </div>
      </div>
    );
  }

  const isCorrect =
    debitPick === problem.debit.account &&
    creditPick === problem.credit.account;

  const handleSubmit = () => {
    if (!debitPick || !creditPick) return;
    setSubmitted(true);
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setIndex((i) => i + 1);
    setDebitPick(null);
    setCreditPick(null);
    setSubmitted(false);
    setExpandedType(null);
  };

  // 선택지: 정답 + distractors + 관련 계정
  const choices = useMemo(() => {
    const set = new Set<string>();
    set.add(problem.debit.account);
    set.add(problem.credit.account);
    problem.distractors.forEach((d) => set.add(d));
    return ACCOUNTS.filter((a) => set.has(a.name));
  }, [problem]);

  const grouped = useMemo(() => {
    const map: Record<AccountType, Account[]> = {
      자산: [],
      부채: [],
      자본: [],
      수익: [],
      비용: [],
    };
    choices.forEach((a) => map[a.type].push(a));
    return map;
  }, [choices]);

  const renderButton = (
    acc: Account,
    target: "debit" | "credit"
  ) => {
    const selected =
      target === "debit"
        ? debitPick === acc.name
        : creditPick === acc.name;
    const correctAnswer =
      target === "debit" ? problem.debit.account : problem.credit.account;
    const isAnswer = acc.name === correctAnswer;

    let extra = "";
    if (submitted) {
      if (isAnswer) extra = "ring-2 ring-correct";
      else if (selected && !isAnswer) extra = "ring-2 ring-wrong opacity-60";
    }

    return (
      <button
        key={`${target}-${acc.name}`}
        disabled={submitted}
        onClick={() => {
          if (target === "debit") setDebitPick(acc.name);
          else setCreditPick(acc.name);
        }}
        className={`px-3 py-2 text-sm border rounded-lg transition-all ${
          ACCOUNT_TYPE_COLORS[acc.type]
        } ${selected ? "ring-2 ring-primary font-bold" : ""} ${extra} ${
          submitted ? "cursor-default" : "active:scale-95"
        }`}
      >
        {acc.name}
      </button>
    );
  };

  return (
    <div>
      {/* 진행 상황 */}
      <div className="flex items-center justify-between mb-4 text-sm text-text-sub">
        <span>
          {index + 1} / {problems.length}
        </span>
        <span>정답 {score}개</span>
      </div>
      <div className="w-full h-1.5 bg-border rounded-full mb-6">
        <div
          className="h-full bg-primary rounded-full transition-all"
          style={{ width: `${((index + 1) / problems.length) * 100}%` }}
        />
      </div>

      {/* 문제 */}
      <div className="bg-surface border border-border rounded-xl p-5 mb-6">
        <p className="text-lg font-medium leading-relaxed">{problem.text}</p>
        <p className="text-sm text-text-sub mt-2">
          금액: {problem.debit.amount.toLocaleString()}원
        </p>
      </div>

      {/* 차변 / 대변 선택 영역 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* 차변 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-debit">차변 (Dr.)</span>
            {debitPick && !submitted && (
              <span className="text-xs bg-red-50 text-debit px-2 py-0.5 rounded">
                {debitPick}
              </span>
            )}
          </div>
          <div className="space-y-2">
            {TYPES.map((type) => {
              const accs = grouped[type];
              if (accs.length === 0) return null;
              const isOpen = expandedType === type || accs.length <= 3;
              return (
                <div key={`debit-${type}`}>
                  {accs.length > 3 && (
                    <button
                      onClick={() =>
                        setExpandedType(expandedType === type ? null : type)
                      }
                      className="text-xs text-text-sub mb-1"
                    >
                      {type} {isOpen ? "▾" : "▸"}
                    </button>
                  )}
                  {(isOpen || accs.length <= 3) && (
                    <div className="flex flex-wrap gap-1.5">
                      {accs.map((a) => renderButton(a, "debit"))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 대변 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-credit">대변 (Cr.)</span>
            {creditPick && !submitted && (
              <span className="text-xs bg-blue-50 text-credit px-2 py-0.5 rounded">
                {creditPick}
              </span>
            )}
          </div>
          <div className="space-y-2">
            {TYPES.map((type) => {
              const accs = grouped[type];
              if (accs.length === 0) return null;
              const isOpen = expandedType === type || accs.length <= 3;
              return (
                <div key={`credit-${type}`}>
                  {accs.length > 3 && (
                    <button
                      onClick={() =>
                        setExpandedType(expandedType === type ? null : type)
                      }
                      className="text-xs text-text-sub mb-1"
                    >
                      {type} {isOpen ? "▾" : "▸"}
                    </button>
                  )}
                  {(isOpen || accs.length <= 3) && (
                    <div className="flex flex-wrap gap-1.5">
                      {accs.map((a) => renderButton(a, "credit"))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 제출 / 결과 */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!debitPick || !creditPick}
          className="w-full py-3 bg-primary text-white rounded-xl font-bold disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-transform"
        >
          제출
        </button>
      ) : (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-xl border ${
              isCorrect
                ? "bg-green-50 border-correct text-correct"
                : "bg-red-50 border-wrong text-wrong"
            }`}
          >
            <p className="font-bold text-lg mb-1">
              {isCorrect ? "정답!" : "오답"}
            </p>
            {!isCorrect && (
              <p className="text-sm">
                정답: (차) {problem.debit.account} / (대){" "}
                {problem.credit.account}
              </p>
            )}
          </div>
          <div className="p-4 bg-surface border border-border rounded-xl">
            <p className="text-sm font-bold mb-1">해설</p>
            <p className="text-sm text-text-sub">{problem.explanation}</p>
          </div>
          <button
            onClick={handleNext}
            className="w-full py-3 bg-primary text-white rounded-xl font-bold active:scale-[0.98] transition-transform"
          >
            {index + 1 < problems.length ? "다음 문제" : "결과 보기"}
          </button>
        </div>
      )}
    </div>
  );
}
