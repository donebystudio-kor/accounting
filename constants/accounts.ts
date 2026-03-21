export interface Account {
  name: string;
  type: "자산" | "부채" | "자본" | "수익" | "비용";
}

export const ACCOUNTS: Account[] = [
  // 자산
  { name: "현금", type: "자산" },
  { name: "보통예금", type: "자산" },
  { name: "당좌예금", type: "자산" },
  { name: "받을어음", type: "자산" },
  { name: "외상매출금", type: "자산" },
  { name: "미수금", type: "자산" },
  { name: "선급금", type: "자산" },
  { name: "선급비용", type: "자산" },
  { name: "상품", type: "자산" },
  { name: "제품", type: "자산" },
  { name: "원재료", type: "자산" },
  { name: "건물", type: "자산" },
  { name: "토지", type: "자산" },
  { name: "비품", type: "자산" },
  { name: "차량운반구", type: "자산" },
  { name: "기계장치", type: "자산" },
  { name: "단기대여금", type: "자산" },
  { name: "미수수익", type: "자산" },
  // 부채
  { name: "지급어음", type: "부채" },
  { name: "외상매입금", type: "부채" },
  { name: "미지급금", type: "부채" },
  { name: "미지급비용", type: "부채" },
  { name: "선수금", type: "부채" },
  { name: "선수수익", type: "부채" },
  { name: "단기차입금", type: "부채" },
  { name: "장기차입금", type: "부채" },
  { name: "예수금", type: "부채" },
  { name: "부가세예수금", type: "부채" },
  // 자본
  { name: "자본금", type: "자본" },
  { name: "이익잉여금", type: "자본" },
  { name: "인출금", type: "자본" },
  // 수익
  { name: "매출", type: "수익" },
  { name: "이자수익", type: "수익" },
  { name: "임대료수익", type: "수익" },
  { name: "수수료수익", type: "수익" },
  { name: "유형자산처분이익", type: "수익" },
  // 비용
  { name: "매출원가", type: "비용" },
  { name: "급여", type: "비용" },
  { name: "임차료", type: "비용" },
  { name: "보험료", type: "비용" },
  { name: "접대비", type: "비용" },
  { name: "통신비", type: "비용" },
  { name: "수도광열비", type: "비용" },
  { name: "소모품비", type: "비용" },
  { name: "감가상각비", type: "비용" },
  { name: "이자비용", type: "비용" },
  { name: "세금과공과", type: "비용" },
  { name: "광고선전비", type: "비용" },
  { name: "운반비", type: "비용" },
  { name: "수선비", type: "비용" },
  { name: "여비교통비", type: "비용" },
  { name: "복리후생비", type: "비용" },
  { name: "유형자산처분손실", type: "비용" },
];

export const ACCOUNT_TYPE_COLORS: Record<Account["type"], string> = {
  자산: "bg-amber-100 text-amber-800 border-amber-300",
  부채: "bg-violet-100 text-violet-800 border-violet-300",
  자본: "bg-cyan-100 text-cyan-800 border-cyan-300",
  수익: "bg-green-100 text-green-800 border-green-300",
  비용: "bg-red-100 text-red-800 border-red-300",
};
