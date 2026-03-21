"use client";

import { useState, useMemo } from "react";
import { Problem, PROBLEMS, JournalEntry } from "@/constants/problems";
import { ACCOUNTS, ACCOUNT_TYPE_COLORS, Account } from "@/constants/accounts";

interface Props {
  category: string;
}

type AccountType = Account["type"];
const TYPES: AccountType[] = ["자산", "부채", "자본", "수익", "비용"];

interface SlotPick {
  account: string | null;
  amount: number | null;
}

export default function QuizClient({ category }: Props) {
  const problems = useMemo(
    () => PROBLEMS.filter((p) => p.category === category),
    [category]
  );
  const [index, setIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // 복합분개: 각 슬롯별 선택
  const [debitPicks, setDebitPicks] = useState<SlotPick[]>([]);
  const [creditPicks, setCreditPicks] = useState<SlotPick[]>([]);
  const [activeSlot, setActiveSlot] = useState<{
    side: "debit" | "credit";
    idx: number;
    field: "account" | "amount";
  } | null>(null);

  const problem = problems[index];

  // 문제가 바뀔 때 슬롯 초기화
  const isCompound = problem
    ? problem.debit.length > 1 || problem.credit.length > 1
    : false;

  // 슬롯 초기화
  const initSlots = (p: Problem) => {
    setDebitPicks(p.debit.map(() => ({ account: null, amount: null })));
    setCreditPicks(p.credit.map(() => ({ account: null, amount: null })));
    setActiveSlot(null);
    setSubmitted(false);
  };

  // 첫 렌더 또는 문제 변경 시
  useMemo(() => {
    if (problem) initSlots(problem);
  }, [index, category]);

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

  // 선택지 계정 목록
  const choices = useMemo(() => {
    const set = new Set<string>();
    problem.debit.forEach((e) => set.add(e.account));
    problem.credit.forEach((e) => set.add(e.account));
    problem.distractors.forEach((d) => set.add(d));
    return ACCOUNTS.filter((a) => set.has(a.name));
  }, [problem]);

  const grouped = useMemo(() => {
    const map: Record<AccountType, Account[]> = {
      자산: [], 부채: [], 자본: [], 수익: [], 비용: [],
    };
    choices.forEach((a) => map[a.type].push(a));
    return map;
  }, [choices]);

  // 금액 선택지 (복합분개용)
  const amountChoices = useMemo(() => {
    if (!isCompound) return [];
    const set = new Set<number>();
    problem.debit.forEach((e) => set.add(e.amount));
    problem.credit.forEach((e) => set.add(e.amount));
    // distractor 금액 추가
    const allAmounts = [...set];
    if (allAmounts.length > 0) {
      const max = Math.max(...allAmounts);
      set.add(Math.round(max * 0.5));
      set.add(Math.round(max * 1.5));
    }
    return [...set].sort((a, b) => a - b);
  }, [problem, isCompound]);

  // 정답 체크
  const checkCorrect = () => {
    const debitOk = problem.debit.every(
      (e, i) =>
        debitPicks[i]?.account === e.account &&
        (isCompound ? debitPicks[i]?.amount === e.amount : true)
    );
    const creditOk = problem.credit.every(
      (e, i) =>
        creditPicks[i]?.account === e.account &&
        (isCompound ? creditPicks[i]?.amount === e.amount : true)
    );
    return debitOk && creditOk;
  };

  const allFilled = () => {
    const debitDone = debitPicks.every(
      (p) => p.account !== null && (isCompound ? p.amount !== null : true)
    );
    const creditDone = creditPicks.every(
      (p) => p.account !== null && (isCompound ? p.amount !== null : true)
    );
    return debitDone && creditDone;
  };

  const handleSubmit = () => {
    if (!allFilled()) return;
    setSubmitted(true);
    if (checkCorrect()) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setIndex((i) => i + 1);
  };

  const isCorrect = submitted ? checkCorrect() : false;

  // 슬롯 클릭 → 활성화
  const activateSlot = (
    side: "debit" | "credit",
    idx: number,
    field: "account" | "amount"
  ) => {
    if (submitted) return;
    setActiveSlot({ side, idx, field });
  };

  // 계정 버튼 클릭
  const handleAccountClick = (accName: string) => {
    if (!activeSlot || activeSlot.field !== "account") return;
    const { side, idx } = activeSlot;
    if (side === "debit") {
      setDebitPicks((prev) => {
        const next = [...prev];
        next[idx] = { ...next[idx], account: accName };
        return next;
      });
    } else {
      setCreditPicks((prev) => {
        const next = [...prev];
        next[idx] = { ...next[idx], account: accName };
        return next;
      });
    }
    // 복합분개면 금액 선택으로 넘어감
    if (isCompound) {
      setActiveSlot({ ...activeSlot, field: "amount" });
    } else {
      setActiveSlot(null);
    }
  };

  // 금액 버튼 클릭
  const handleAmountClick = (amt: number) => {
    if (!activeSlot || activeSlot.field !== "amount") return;
    const { side, idx } = activeSlot;
    if (side === "debit") {
      setDebitPicks((prev) => {
        const next = [...prev];
        next[idx] = { ...next[idx], amount: amt };
        return next;
      });
    } else {
      setCreditPicks((prev) => {
        const next = [...prev];
        next[idx] = { ...next[idx], amount: amt };
        return next;
      });
    }
    setActiveSlot(null);
  };

  // 슬롯 렌더
  const renderSlot = (
    side: "debit" | "credit",
    idx: number,
    answer: JournalEntry,
    pick: SlotPick
  ) => {
    const isActive = activeSlot?.side === side && activeSlot?.idx === idx;
    const activeField = isActive ? activeSlot.field : null;

    let accStyle = "border-border text-text-sub";
    let amtStyle = "border-border text-text-sub";

    if (submitted) {
      const accOk = pick.account === answer.account;
      const amtOk = !isCompound || pick.amount === answer.amount;
      accStyle = accOk
        ? "border-correct bg-green-50 text-correct"
        : "border-wrong bg-red-50 text-wrong";
      if (isCompound) {
        amtStyle = amtOk
          ? "border-correct bg-green-50 text-correct"
          : "border-wrong bg-red-50 text-wrong";
      }
    } else {
      if (pick.account) accStyle = "border-primary bg-blue-50 text-primary";
      if (activeField === "account") accStyle = "border-primary ring-2 ring-primary/30 bg-blue-50";
      if (pick.amount !== null) amtStyle = "border-primary bg-blue-50 text-primary";
      if (activeField === "amount") amtStyle = "border-primary ring-2 ring-primary/30 bg-blue-50";
    }

    return (
      <div key={`${side}-${idx}`} className="flex items-center gap-2">
        <button
          onClick={() => activateSlot(side, idx, "account")}
          disabled={submitted}
          className={`flex-1 px-3 py-2 border rounded-lg text-sm text-left transition-all ${accStyle}`}
        >
          {pick.account || "계정과목 선택"}
        </button>
        {isCompound && (
          <button
            onClick={() => activateSlot(side, idx, "amount")}
            disabled={submitted}
            className={`w-28 px-3 py-2 border rounded-lg text-sm text-right transition-all ${amtStyle}`}
          >
            {pick.amount !== null
              ? pick.amount.toLocaleString()
              : "금액 선택"}
          </button>
        )}
      </div>
    );
  };

  // 총액 표시
  const totalDebit = problem.debit.reduce((s, e) => s + e.amount, 0);

  return (
    <div>
      {/* 진행바 */}
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
      <div className="bg-surface border border-border rounded-xl p-5 mb-5">
        <p className="text-lg font-medium leading-relaxed">{problem.text}</p>
        {!isCompound && (
          <p className="text-sm text-text-sub mt-2">
            금액: {totalDebit.toLocaleString()}원
          </p>
        )}
      </div>

      {/* 분개 슬롯 */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <p className="text-sm font-bold text-debit mb-2">
            차변 (Dr.)
          </p>
          <div className="space-y-2">
            {problem.debit.map((entry, i) =>
              renderSlot("debit", i, entry, debitPicks[i] || { account: null, amount: null })
            )}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-credit mb-2">
            대변 (Cr.)
          </p>
          <div className="space-y-2">
            {problem.credit.map((entry, i) =>
              renderSlot("credit", i, entry, creditPicks[i] || { account: null, amount: null })
            )}
          </div>
        </div>
      </div>

      {/* 선택 패널 */}
      {!submitted && activeSlot && (
        <div className="bg-surface border border-primary/30 rounded-xl p-4 mb-5">
          {activeSlot.field === "account" ? (
            <>
              <p className="text-xs text-text-sub mb-3">계정과목을 선택하세요</p>
              <div className="space-y-3">
                {TYPES.map((type) => {
                  const accs = grouped[type];
                  if (accs.length === 0) return null;
                  return (
                    <div key={type}>
                      <p className="text-xs text-text-sub mb-1">{type}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {accs.map((a) => (
                          <button
                            key={a.name}
                            onClick={() => handleAccountClick(a.name)}
                            className={`px-3 py-1.5 text-sm border rounded-lg active:scale-95 transition-all ${ACCOUNT_TYPE_COLORS[a.type]}`}
                          >
                            {a.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="text-xs text-text-sub mb-3">금액을 선택하세요</p>
              <div className="flex flex-wrap gap-2">
                {amountChoices.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleAmountClick(amt)}
                    className="px-4 py-2 text-sm border border-border rounded-lg hover:border-primary active:scale-95 transition-all"
                  >
                    {amt.toLocaleString()}원
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* 슬롯 활성화 안내 */}
      {!submitted && !activeSlot && !allFilled() && (
        <p className="text-center text-sm text-text-sub mb-5">
          위 슬롯을 클릭하여 계정과목{isCompound ? "과 금액" : ""}을 선택하세요
        </p>
      )}

      {/* 제출 / 결과 */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!allFilled()}
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
              <div className="text-sm space-y-1">
                <p>정답:</p>
                {problem.debit.map((e, i) => (
                  <p key={`d${i}`}>
                    (차) {e.account} {e.amount.toLocaleString()}
                  </p>
                ))}
                {problem.credit.map((e, i) => (
                  <p key={`c${i}`}>
                    (대) {e.account} {e.amount.toLocaleString()}
                  </p>
                ))}
              </div>
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
