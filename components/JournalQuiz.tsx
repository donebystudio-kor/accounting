"use client";

import { useState, useMemo } from "react";
import { Problem, JournalEntry } from "@/constants/problems";
import { ACCOUNTS, ACCOUNT_TYPE_STYLE, AccountType } from "@/constants/accounts";

const TYPES: AccountType[] = ["자산", "부채", "자본", "수익", "비용"];

interface SlotPick {
  account: string | null;
  amount: number | null;
}

interface Props {
  problem: Problem;
  onResult: (correct: boolean, partial: boolean) => void;
  onNext: () => void;
}

export default function JournalQuiz({ problem, onResult, onNext }: Props) {
  const debitEntries = problem.debit!;
  const creditEntries = problem.credit!;
  const isCompound = debitEntries.length > 1 || creditEntries.length > 1;

  const [debitPicks, setDebitPicks] = useState<SlotPick[]>(
    debitEntries.map(() => ({ account: null, amount: null }))
  );
  const [creditPicks, setCreditPicks] = useState<SlotPick[]>(
    creditEntries.map(() => ({ account: null, amount: null }))
  );
  const [activeSlot, setActiveSlot] = useState<{
    side: "debit" | "credit";
    idx: number;
    field: "account" | "amount";
  } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const choices = useMemo(() => {
    const set = new Set<string>();
    debitEntries.forEach((e) => set.add(e.account));
    creditEntries.forEach((e) => set.add(e.account));
    problem.distractors?.forEach((d) => set.add(d));
    return ACCOUNTS.filter((a) => set.has(a.name));
  }, [problem]);

  const grouped = useMemo(() => {
    const map: Record<AccountType, typeof choices> = { 자산: [], 부채: [], 자본: [], 수익: [], 비용: [] };
    choices.forEach((a) => map[a.type].push(a));
    return map;
  }, [choices]);

  const amountChoices = useMemo(() => {
    if (!isCompound) return [];
    const set = new Set<number>();
    debitEntries.forEach((e) => set.add(e.amount));
    creditEntries.forEach((e) => set.add(e.amount));
    const arr = [...set];
    if (arr.length > 0) {
      set.add(Math.round(Math.max(...arr) * 0.5));
      set.add(Math.round(Math.max(...arr) * 1.5));
    }
    return [...set].sort((a, b) => a - b);
  }, [problem, isCompound]);

  // 실시간 합계
  const debitTotal = debitPicks.reduce((s, p) => s + (p.amount ?? 0), 0);
  const creditTotal = creditPicks.reduce((s, p) => s + (p.amount ?? 0), 0);
  const totalAmount = debitEntries.reduce((s, e) => s + e.amount, 0);

  const allFilled = () => {
    const d = debitPicks.every((p) => p.account && (isCompound ? p.amount !== null : true));
    const c = creditPicks.every((p) => p.account && (isCompound ? p.amount !== null : true));
    return d && c;
  };

  const checkResult = () => {
    const debitAccOk = debitEntries.every((e, i) => debitPicks[i]?.account === e.account);
    const creditAccOk = creditEntries.every((e, i) => creditPicks[i]?.account === e.account);
    const debitAmtOk = !isCompound || debitEntries.every((e, i) => debitPicks[i]?.amount === e.amount);
    const creditAmtOk = !isCompound || creditEntries.every((e, i) => creditPicks[i]?.amount === e.amount);
    const allAccOk = debitAccOk && creditAccOk;
    const allAmtOk = debitAmtOk && creditAmtOk;
    const full = allAccOk && allAmtOk;
    // 부분정답: 양쪽 계정 맞고 금액 틀림 OR 한쪽만 완전 정답
    const partial = !full && (allAccOk || debitAccOk || creditAccOk);
    return { full, partial };
  };

  const handleSubmit = () => {
    if (!allFilled()) return;
    setSubmitted(true);
    const { full, partial } = checkResult();
    onResult(full, partial);
  };

  const { full: isCorrect, partial: isPartial } = submitted ? checkResult() : { full: false, partial: false };

  const slotStyle = (
    side: "debit" | "credit",
    idx: number,
    field: "account" | "amount",
    pick: SlotPick,
    answer: JournalEntry
  ) => {
    const isActive = activeSlot?.side === side && activeSlot?.idx === idx && activeSlot?.field === field;
    if (submitted) {
      const ok = field === "account" ? pick.account === answer.account : pick.amount === answer.amount;
      return ok
        ? "border-correct bg-green-50 text-correct font-semibold"
        : "border-wrong bg-red-50 text-wrong";
    }
    if (isActive) return "border-primary ring-2 ring-primary/20 bg-primary-bg/30";
    const hasPick = field === "account" ? pick.account : pick.amount !== null;
    if (hasPick) return "border-primary/50 bg-primary-bg/20 text-primary";
    return "border-border text-text-sub";
  };

  return (
    <div>
      {/* 문제 */}
      <div className="bg-surface border border-border rounded-lg p-4 mb-4">
        <p className="font-medium leading-relaxed">{problem.text}</p>
        {!isCompound && (
          <p className="text-sm text-text-sub mt-1">금액: {totalAmount.toLocaleString()}원</p>
        )}
        {problem.hint && (
          <p className="text-xs text-primary mt-2">💡 {problem.hint}</p>
        )}
      </div>

      {/* 실시간 합계 (복합분개) */}
      {isCompound && !submitted && (
        <div className={`flex justify-between text-xs px-1 mb-2 ${debitTotal !== creditTotal && (debitTotal > 0 || creditTotal > 0) ? "text-wrong font-semibold" : "text-text-sub"}`}>
          <span>차변 합계: {debitTotal.toLocaleString()}</span>
          <span>대변 합계: {creditTotal.toLocaleString()}</span>
          {debitTotal !== creditTotal && (debitTotal > 0 || creditTotal > 0) && (
            <span>⚠ 불균형</span>
          )}
        </div>
      )}

      {/* 분개 슬롯 */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <p className="text-xs font-bold text-debit mb-2">차변 (Dr.)</p>
          <div className="space-y-1.5">
            {debitEntries.map((entry, i) => {
              const pick = debitPicks[i] || { account: null, amount: null };
              return (
                <div key={i} className="flex gap-1.5">
                  <button
                    disabled={submitted}
                    onClick={() => setActiveSlot({ side: "debit", idx: i, field: "account" })}
                    className={`flex-1 px-2.5 py-2 border rounded-md text-sm text-left transition-all ${slotStyle("debit", i, "account", pick, entry)}`}
                  >
                    {pick.account || "계정과목"}
                  </button>
                  {isCompound && (
                    <button
                      disabled={submitted}
                      onClick={() => setActiveSlot({ side: "debit", idx: i, field: "amount" })}
                      className={`w-24 px-2 py-2 border rounded-md text-sm text-right transition-all ${slotStyle("debit", i, "amount", pick, entry)}`}
                    >
                      {pick.amount !== null ? pick.amount.toLocaleString() : "금액"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-credit mb-2">대변 (Cr.)</p>
          <div className="space-y-1.5">
            {creditEntries.map((entry, i) => {
              const pick = creditPicks[i] || { account: null, amount: null };
              return (
                <div key={i} className="flex gap-1.5">
                  <button
                    disabled={submitted}
                    onClick={() => setActiveSlot({ side: "credit", idx: i, field: "account" })}
                    className={`flex-1 px-2.5 py-2 border rounded-md text-sm text-left transition-all ${slotStyle("credit", i, "account", pick, entry)}`}
                  >
                    {pick.account || "계정과목"}
                  </button>
                  {isCompound && (
                    <button
                      disabled={submitted}
                      onClick={() => setActiveSlot({ side: "credit", idx: i, field: "amount" })}
                      className={`w-24 px-2 py-2 border rounded-md text-sm text-right transition-all ${slotStyle("credit", i, "amount", pick, entry)}`}
                    >
                      {pick.amount !== null ? pick.amount.toLocaleString() : "금액"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 선택 패널 */}
      {!submitted && activeSlot && (
        <div className="bg-surface border border-primary/20 rounded-lg p-3 mb-4">
          {activeSlot.field === "account" ? (
            <div className="space-y-2">
              {TYPES.map((type) => {
                const accs = grouped[type];
                if (!accs.length) return null;
                return (
                  <div key={type}>
                    <p className="text-[11px] text-text-sub mb-1">{type}</p>
                    <div className="flex flex-wrap gap-1">
                      {accs.map((a) => (
                        <button
                          key={a.name}
                          onClick={() => {
                            const { side, idx } = activeSlot;
                            const setter = side === "debit" ? setDebitPicks : setCreditPicks;
                            setter((prev) => {
                              const next = [...prev];
                              next[idx] = { ...next[idx], account: a.name };
                              return next;
                            });
                            if (isCompound) setActiveSlot({ ...activeSlot, field: "amount" });
                            else setActiveSlot(null);
                          }}
                          className={`px-2.5 py-1.5 text-xs border rounded-md active:scale-95 transition-all ${ACCOUNT_TYPE_STYLE[a.type]}`}
                        >
                          {a.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <p className="text-[11px] text-text-sub mb-2">금액 선택</p>
              <div className="flex flex-wrap gap-1.5">
                {amountChoices.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      const { side, idx } = activeSlot;
                      const setter = side === "debit" ? setDebitPicks : setCreditPicks;
                      setter((prev) => {
                        const next = [...prev];
                        next[idx] = { ...next[idx], amount: amt };
                        return next;
                      });
                      setActiveSlot(null);
                    }}
                    className="px-3 py-1.5 text-xs border border-border rounded-md hover:border-primary active:scale-95 transition-all"
                  >
                    {amt.toLocaleString()}원
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {!submitted && !activeSlot && !allFilled() && (
        <p className="text-center text-xs text-text-sub mb-4">
          슬롯을 클릭하여 계정과목{isCompound ? "과 금액" : ""}을 선택하세요
        </p>
      )}

      {/* 제출 */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!allFilled()}
          className="w-full py-2.5 bg-primary text-white rounded-lg font-bold text-sm disabled:opacity-40 active:scale-[0.98] transition-transform"
        >
          제출
        </button>
      ) : (
        <div className="space-y-3">
          <div className={`p-3 rounded-lg border text-sm ${isCorrect ? "bg-green-50 border-correct text-correct" : isPartial ? "bg-orange-50 border-partial text-partial" : "bg-red-50 border-wrong text-wrong"}`}>
            <p className="font-bold">{isCorrect ? "정답!" : isPartial ? "부분 정답" : "오답"}</p>
            {!isCorrect && (
              <div className="mt-1 text-xs space-y-0.5">
                {debitEntries.map((e, i) => (
                  <p key={`d${i}`}>(차) {e.account} {e.amount.toLocaleString()}</p>
                ))}
                {creditEntries.map((e, i) => (
                  <p key={`c${i}`}>(대) {e.account} {e.amount.toLocaleString()}</p>
                ))}
              </div>
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
