export interface JournalEntry {
  account: string;
  amount: number;
}

export interface Problem {
  id: string;
  type: "journal" | "ox" | "calculation" | "statement";
  standard: string;
  category: string;
  difficulty: "basic" | "intermediate" | "advanced" | "practical";
  text: string;
  // 분개형
  debit?: JournalEntry[];
  credit?: JournalEntry[];
  distractors?: string[];
  // OX형
  answer?: boolean;
  // 계산형
  correctAnswer?: number;
  // 공통
  explanation: string;
  hint?: string;
}

export const PROBLEMS: Problem[] = [
  // ══════════════════════════════════════
  // common / journal-basic (20개)
  // ══════════════════════════════════════
  {
    id: "cjb01", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "현금 500,000원을 출자하여 사업을 개시하였다.",
    debit: [{ account: "현금", amount: 500000 }],
    credit: [{ account: "자본금", amount: 500000 }],
    explanation: "사업주가 현금을 출자하면 자산(현금) 증가, 자본(자본금) 증가.",
    distractors: ["보통예금", "이익잉여금", "선수금"],
  },
  {
    id: "cjb02", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "상품 1,000,000원을 현금으로 매입하였다.",
    debit: [{ account: "상품", amount: 1000000 }],
    credit: [{ account: "현금", amount: 1000000 }],
    explanation: "상품(자산) 증가, 현금(자산) 감소.",
    distractors: ["매출원가", "외상매입금", "선급금"],
  },
  {
    id: "cjb03", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "상품 800,000원을 현금으로 판매하였다.",
    debit: [{ account: "현금", amount: 800000 }],
    credit: [{ account: "매출", amount: 800000 }],
    explanation: "현금(자산) 증가, 매출(수익) 발생.",
    distractors: ["외상매출금", "선수금", "매출원가"],
  },
  {
    id: "cjb04", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "상품 1,500,000원을 외상으로 매입하였다.",
    debit: [{ account: "상품", amount: 1500000 }],
    credit: [{ account: "외상매입금", amount: 1500000 }],
    explanation: "외상 매입: 상품(자산) 증가, 외상매입금(부채) 증가.",
    distractors: ["미지급금", "지급어음", "선수금"],
  },
  {
    id: "cjb05", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "상품 2,000,000원을 외상으로 판매하였다.",
    debit: [{ account: "외상매출금", amount: 2000000 }],
    credit: [{ account: "매출", amount: 2000000 }],
    explanation: "외상 판매: 외상매출금(자산) 증가, 매출(수익) 발생.",
    distractors: ["미수금", "받을어음", "선급금"],
  },
  {
    id: "cjb06", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "외상매입금 1,500,000원을 현금으로 지급하였다.",
    debit: [{ account: "외상매입금", amount: 1500000 }],
    credit: [{ account: "현금", amount: 1500000 }],
    explanation: "외상매입금(부채) 감소, 현금(자산) 감소.",
    distractors: ["미지급금", "지급어음", "상품"],
  },
  {
    id: "cjb07", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "외상매출금 2,000,000원을 현금으로 회수하였다.",
    debit: [{ account: "현금", amount: 2000000 }],
    credit: [{ account: "외상매출금", amount: 2000000 }],
    explanation: "현금(자산) 증가, 외상매출금(자산) 감소.",
    distractors: ["미수금", "받을어음", "매출"],
  },
  {
    id: "cjb08", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "은행에서 3,000,000원을 차입하고 보통예금에 입금하였다.",
    debit: [{ account: "보통예금", amount: 3000000 }],
    credit: [{ account: "단기차입금", amount: 3000000 }],
    explanation: "보통예금(자산) 증가, 단기차입금(부채) 증가.",
    distractors: ["현금", "장기차입금", "미지급금"],
  },
  {
    id: "cjb09", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "임차료 300,000원을 현금으로 지급하였다.",
    debit: [{ account: "임차료", amount: 300000 }],
    credit: [{ account: "현금", amount: 300000 }],
    explanation: "임차료(비용) 발생, 현금(자산) 감소.",
    distractors: ["임대료수익", "선급비용", "미지급비용"],
  },
  {
    id: "cjb10", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "급여 2,500,000원을 보통예금에서 이체 지급하였다.",
    debit: [{ account: "급여", amount: 2500000 }],
    credit: [{ account: "보통예금", amount: 2500000 }],
    explanation: "급여(비용) 발생, 보통예금(자산) 감소.",
    distractors: ["현금", "미지급비용", "예수금"],
  },
  {
    id: "cjb11", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "비품 500,000원을 현금으로 구입하였다.",
    debit: [{ account: "비품", amount: 500000 }],
    credit: [{ account: "현금", amount: 500000 }],
    explanation: "비품(자산) 증가, 현금(자산) 감소.",
    distractors: ["소모품비", "미지급금", "선급금"],
  },
  {
    id: "cjb12", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "거래처에 현금 200,000원을 선급금으로 지급하였다.",
    debit: [{ account: "선급금", amount: 200000 }],
    credit: [{ account: "현금", amount: 200000 }],
    explanation: "선급금(자산) 증가, 현금(자산) 감소. 선급금은 미리 지급한 금액.",
    distractors: ["선급비용", "선수금", "미지급금"],
  },
  {
    id: "cjb13", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "고객으로부터 상품 대금 500,000원을 미리 받았다.",
    debit: [{ account: "현금", amount: 500000 }],
    credit: [{ account: "선수금", amount: 500000 }],
    explanation: "현금(자산) 증가, 선수금(부채) 증가. 상품 인도 전에 받은 금액은 부채.",
    distractors: ["매출", "선급금", "예수금"],
  },
  {
    id: "cjb14", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "보험료 120,000원을 현금으로 납부하였다.",
    debit: [{ account: "보험료", amount: 120000 }],
    credit: [{ account: "현금", amount: 120000 }],
    explanation: "보험료(비용) 발생, 현금(자산) 감소.",
    distractors: ["선급비용", "미지급비용", "세금과공과"],
  },
  {
    id: "cjb15", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "은행 보통예금에서 이자 50,000원이 입금되었다.",
    debit: [{ account: "보통예금", amount: 50000 }],
    credit: [{ account: "이자수익", amount: 50000 }],
    explanation: "보통예금(자산) 증가, 이자수익(수익) 발생.",
    distractors: ["현금", "미수수익", "이자비용"],
  },
  {
    id: "cjb16", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "상품 매입 대금으로 약속어음 1,000,000원을 발행하였다.",
    debit: [{ account: "상품", amount: 1000000 }],
    credit: [{ account: "지급어음", amount: 1000000 }],
    explanation: "상품(자산) 증가, 지급어음(부채) 증가. 어음 발행은 외상매입금과 구분.",
    distractors: ["외상매입금", "미지급금", "받을어음"],
  },
  {
    id: "cjb17", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "상품을 판매하고 약속어음 1,200,000원을 받았다.",
    debit: [{ account: "받을어음", amount: 1200000 }],
    credit: [{ account: "매출", amount: 1200000 }],
    explanation: "받을어음(자산) 증가, 매출(수익) 발생. 외상매출금과 구분.",
    distractors: ["외상매출금", "미수금", "지급어음"],
  },
  {
    id: "cjb18", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "거래처에 현금 1,000,000원을 대여하였다.",
    debit: [{ account: "단기대여금", amount: 1000000 }],
    credit: [{ account: "현금", amount: 1000000 }],
    explanation: "단기대여금(자산) 증가, 현금(자산) 감소. 단기차입금과 혼동 주의.",
    distractors: ["단기차입금", "미수금", "선급금"],
  },
  {
    id: "cjb19", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "건물 임대료 400,000원을 현금으로 받았다.",
    debit: [{ account: "현금", amount: 400000 }],
    credit: [{ account: "임대료수익", amount: 400000 }],
    explanation: "현금(자산) 증가, 임대료수익(수익) 발생. 임차료(비용)와 구분.",
    distractors: ["임차료", "선수수익", "미수수익"],
  },
  {
    id: "cjb20", type: "journal", standard: "common", category: "journal-basic", difficulty: "basic",
    text: "광고선전비 500,000원을 보통예금에서 이체하였다.",
    debit: [{ account: "광고선전비", amount: 500000 }],
    credit: [{ account: "보통예금", amount: 500000 }],
    explanation: "광고선전비(비용) 발생, 보통예금(자산) 감소.",
    distractors: ["접대비", "현금", "미지급비용"],
  },
  // ══════════════════════════════════════
  // common / journal-intermediate (10개)
  // ══════════════════════════════════════
  {
    id: "cji01", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "단기차입금 3,000,000원과 이자 60,000원을 보통예금에서 상환하였다.",
    debit: [
      { account: "단기차입금", amount: 3000000 },
      { account: "이자비용", amount: 60000 },
    ],
    credit: [{ account: "보통예금", amount: 3060000 }],
    explanation: "원금(부채 감소) + 이자(비용 발생). 차변 합계 3,060,000 = 대변 3,060,000.",
    distractors: ["장기차입금", "현금", "미지급비용"],
  },
  {
    id: "cji02", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "비품을 외상으로 800,000원에 구입하였다.",
    debit: [{ account: "비품", amount: 800000 }],
    credit: [{ account: "미지급금", amount: 800000 }],
    explanation: "상품 이외 자산의 외상 구입은 미지급금. 외상매입금은 상품 거래에만 사용.",
    distractors: ["외상매입금", "지급어음", "미지급비용"],
  },
  {
    id: "cji03", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "차량운반구를 1,000,000원에 외상으로 처분하였다 (장부가액 800,000원).",
    debit: [{ account: "미수금", amount: 1000000 }],
    credit: [
      { account: "차량운반구", amount: 800000 },
      { account: "유형자산처분이익", amount: 200000 },
    ],
    explanation: "처분가액 > 장부가액 → 처분이익 200,000. 상품 외 자산 처분은 미수금 사용.",
    distractors: ["외상매출금", "유형자산처분손실", "매출"],
  },
  {
    id: "cji04", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "상품 2,000,000원 매입. 1,000,000원은 약속어음, 나머지는 외상.",
    debit: [{ account: "상품", amount: 2000000 }],
    credit: [
      { account: "지급어음", amount: 1000000 },
      { account: "외상매입금", amount: 1000000 },
    ],
    explanation: "복합 결제: 어음분은 지급어음, 외상분은 외상매입금.",
    distractors: ["현금", "미지급금", "받을어음"],
  },
  {
    id: "cji05", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "급여 3,000,000원에서 소득세 예수금 200,000원을 공제, 나머지를 보통예금 이체.",
    debit: [{ account: "급여", amount: 3000000 }],
    credit: [
      { account: "예수금", amount: 200000 },
      { account: "보통예금", amount: 2800000 },
    ],
    explanation: "급여 총액(비용). 원천징수 → 예수금(부채), 실지급 → 보통예금 감소.",
    distractors: ["현금", "미지급비용", "세금과공과"],
  },
  {
    id: "cji06", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "비품(장부가액 500,000원)을 300,000원에 현금 처분하였다.",
    debit: [
      { account: "현금", amount: 300000 },
      { account: "유형자산처분손실", amount: 200000 },
    ],
    credit: [{ account: "비품", amount: 500000 }],
    explanation: "처분가액 < 장부가액 → 처분손실 200,000.",
    distractors: ["유형자산처분이익", "미수금", "감가상각비"],
  },
  {
    id: "cji07", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "선급한 보험료 중 당기 해당분 80,000원을 비용으로 대체하였다.",
    debit: [{ account: "보험료", amount: 80000 }],
    credit: [{ account: "선급비용", amount: 80000 }],
    explanation: "결산 수정분개. 선급비용(자산) 감소 → 보험료(비용) 인식.",
    distractors: ["선급금", "미지급비용", "현금"],
  },
  {
    id: "cji08", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "임대료 중 차기분 100,000원을 선수수익으로 수정하였다.",
    debit: [{ account: "임대료수익", amount: 100000 }],
    credit: [{ account: "선수수익", amount: 100000 }],
    explanation: "결산 수정분개. 차기 귀속 수익을 선수수익(부채)으로 이연.",
    distractors: ["선수금", "미수수익", "임차료"],
  },
  {
    id: "cji09", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "건물 감가상각비 600,000원을 계상하였다.",
    debit: [{ account: "감가상각비", amount: 600000 }],
    credit: [{ account: "건물", amount: 600000 }],
    explanation: "감가상각비(비용) 인식, 건물(자산) 장부가액 감소.",
    distractors: ["수선비", "임차료", "미지급비용"],
  },
  {
    id: "cji10", type: "journal", standard: "common", category: "journal-intermediate", difficulty: "intermediate",
    text: "사무실 월세 1,100,000원(부가세 포함) 보통예금 이체. (공급가액 1,000,000, 부가세 100,000)",
    debit: [
      { account: "임차료", amount: 1000000 },
      { account: "부가세예수금", amount: 100000 },
    ],
    credit: [{ account: "보통예금", amount: 1100000 }],
    explanation: "공급가액 → 임차료(비용), 부가세 → 부가세예수금. 합계 일치 확인.",
    distractors: ["현금", "미지급비용", "선급비용", "세금과공과"],
  },
  // ══════════════════════════════════════
  // common / ox-basic (10개)
  // ══════════════════════════════════════
  {
    id: "cox01", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "자산이 증가하면 차변(왼쪽)에 기록한다.",
    answer: true,
    explanation: "자산의 증가는 차변, 감소는 대변에 기록합니다.",
  },
  {
    id: "cox02", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "부채가 증가하면 차변(왼쪽)에 기록한다.",
    answer: false,
    explanation: "부채의 증가는 대변(오른쪽)에 기록합니다. 부채 감소가 차변입니다.",
  },
  {
    id: "cox03", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "비용이 발생하면 대변(오른쪽)에 기록한다.",
    answer: false,
    explanation: "비용의 발생은 차변(왼쪽)에 기록합니다.",
  },
  {
    id: "cox04", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "수익이 발생하면 대변(오른쪽)에 기록한다.",
    answer: true,
    explanation: "수익의 발생은 대변에 기록합니다.",
  },
  {
    id: "cox05", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "외상매입금과 미지급금은 같은 계정과목이다.",
    answer: false,
    explanation: "외상매입금은 상품 매입 대금, 미지급금은 상품 외 거래 대금입니다.",
  },
  {
    id: "cox06", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "선급금은 부채 계정이다.",
    answer: false,
    explanation: "선급금은 미리 지급한 금액으로 자산 계정입니다. 선수금이 부채.",
  },
  {
    id: "cox07", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "분개에서 차변 합계와 대변 합계는 항상 일치해야 한다.",
    answer: true,
    explanation: "복식부기의 기본 원리. 대차평균의 원리.",
  },
  {
    id: "cox08", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "감가상각비는 자산 계정이다.",
    answer: false,
    explanation: "감가상각비는 비용 계정입니다. 자산의 가치 감소를 비용으로 인식.",
  },
  {
    id: "cox09", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "이자수익은 비용 계정이다.",
    answer: false,
    explanation: "이자수익은 수익 계정입니다. 이자비용이 비용.",
  },
  {
    id: "cox10", type: "ox", standard: "common", category: "ox-basic", difficulty: "basic",
    text: "재무상태표는 일정 시점의 자산, 부채, 자본을 나타낸다.",
    answer: true,
    explanation: "재무상태표(대차대조표)는 특정 시점의 재무 상태를 보여줍니다. 손익계산서가 기간.",
  },
  // ══════════════════════════════════════
  // k-ifrs / kifrs-basic (10개)
  // ══════════════════════════════════════
  {
    id: "kb01", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "상품 1,000,000원을 외상으로 매입하였다. (K-IFRS: 매입채무 사용)",
    debit: [{ account: "재고자산", amount: 1000000 }],
    credit: [{ account: "매입채무", amount: 1000000 }],
    explanation: "K-IFRS에서는 상품 대신 재고자산, 외상매입금 대신 매입채무를 사용합니다.",
    distractors: ["상품", "외상매입금", "미지급금"],
  },
  {
    id: "kb02", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "상품 2,000,000원을 외상으로 판매하였다. (K-IFRS: 매출채권 사용)",
    debit: [{ account: "매출채권", amount: 2000000 }],
    credit: [{ account: "매출", amount: 2000000 }],
    explanation: "K-IFRS에서는 외상매출금 대신 매출채권을 사용합니다.",
    distractors: ["외상매출금", "미수금", "받을어음"],
  },
  {
    id: "kb03", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "매출채권 500,000원에 대해 대손상각비를 인식하였다.",
    debit: [{ account: "대손상각비", amount: 500000 }],
    credit: [{ account: "매출채권", amount: 500000 }],
    explanation: "매출채권 회수 불가능 시 대손상각비(비용) 인식, 매출채권(자산) 감소.",
    distractors: ["유형자산처분손실", "충당부채", "이자비용"],
  },
  {
    id: "kb04", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "건물 감가상각비 1,200,000원을 인식하였다.",
    debit: [{ account: "감가상각비", amount: 1200000 }],
    credit: [{ account: "건물", amount: 1200000 }],
    explanation: "감가상각비(비용) 인식, 건물(자산) 장부가액 감소.",
    distractors: ["수선비", "임차료", "투자부동산"],
  },
  {
    id: "kb05", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "토지를 50,000,000원에 현금으로 취득하였다.",
    debit: [{ account: "토지", amount: 50000000 }],
    credit: [{ account: "현금", amount: 50000000 }],
    explanation: "토지(자산) 증가, 현금(자산) 감소. K-IFRS와 일반기업회계기준 동일.",
    distractors: ["건물", "투자부동산", "보통예금"],
  },
  {
    id: "kb06", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "재고자산 평가손실 300,000원을 인식하였다.",
    debit: [{ account: "재고자산평가손실", amount: 300000 }],
    credit: [{ account: "재고자산", amount: 300000 }],
    explanation: "재고자산의 순실현가능가치가 취득원가보다 낮을 때 평가손실 인식.",
    distractors: ["매출원가", "상품", "감가상각비"],
  },
  {
    id: "kb07", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "충당부채 2,000,000원을 설정하였다. (제품 보증 관련)",
    debit: [{ account: "제품보증비", amount: 2000000 }],
    credit: [{ account: "충당부채", amount: 2000000 }],
    explanation: "제품보증비(비용) 인식, 충당부채(부채) 설정. 미래 보증 지출이 예상될 때 인식.",
    hint: "충당부채는 금액이나 시기가 불확실한 부채입니다.",
    distractors: ["미지급비용", "선수금", "예수금"],
  },
  {
    id: "kb08", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "매입채무 1,000,000원을 보통예금으로 결제하였다.",
    debit: [{ account: "매입채무", amount: 1000000 }],
    credit: [{ account: "보통예금", amount: 1000000 }],
    explanation: "매입채무(부채) 감소, 보통예금(자산) 감소.",
    distractors: ["외상매입금", "미지급금", "현금"],
  },
  {
    id: "kb09", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "기계장치 10,000,000원을 보통예금으로 구입하였다.",
    debit: [{ account: "기계장치", amount: 10000000 }],
    credit: [{ account: "보통예금", amount: 10000000 }],
    explanation: "기계장치(자산) 증가, 보통예금(자산) 감소.",
    distractors: ["비품", "현금", "미지급금"],
  },
  {
    id: "kb10", type: "journal", standard: "k-ifrs", category: "kifrs-basic", difficulty: "basic",
    text: "장기차입금 5,000,000원을 보통예금으로 상환하였다.",
    debit: [{ account: "장기차입금", amount: 5000000 }],
    credit: [{ account: "보통예금", amount: 5000000 }],
    explanation: "장기차입금(부채) 감소, 보통예금(자산) 감소.",
    distractors: ["단기차입금", "현금", "이자비용"],
  },
  // ══════════════════════════════════════
  // k-ifrs / kifrs-intermediate (5개)
  // ══════════════════════════════════════
  {
    id: "ki01", type: "journal", standard: "k-ifrs", category: "kifrs-intermediate", difficulty: "intermediate",
    text: "사용권자산 12,000,000원과 리스부채 12,000,000원을 인식하였다. (IFRS 16 리스)",
    debit: [{ account: "사용권자산", amount: 12000000 }],
    credit: [{ account: "리스부채", amount: 12000000 }],
    explanation: "IFRS 16: 리스이용자는 사용권자산(자산)과 리스부채(부채)를 인식합니다.",
    distractors: ["비품", "임차료", "장기차입금"],
  },
  {
    id: "ki02", type: "journal", standard: "k-ifrs", category: "kifrs-intermediate", difficulty: "intermediate",
    text: "리스부채 이자비용 200,000원을 인식하였다.",
    debit: [{ account: "이자비용", amount: 200000 }],
    credit: [{ account: "리스부채", amount: 200000 }],
    explanation: "리스부채에 대한 이자비용 인식. 리스부채 장부금액 증가(유효이자법).",
    distractors: ["임차료", "감가상각비", "미지급비용"],
  },
  {
    id: "ki03", type: "journal", standard: "k-ifrs", category: "kifrs-intermediate", difficulty: "intermediate",
    text: "사용권자산 감가상각비 2,400,000원을 인식하였다.",
    debit: [{ account: "감가상각비", amount: 2400000 }],
    credit: [{ account: "사용권자산", amount: 2400000 }],
    explanation: "사용권자산을 리스기간에 걸쳐 감가상각합니다.",
    distractors: ["임차료", "리스부채", "건물"],
  },
  {
    id: "ki04", type: "journal", standard: "k-ifrs", category: "kifrs-intermediate", difficulty: "intermediate",
    text: "투자부동산(건물)의 감가상각비 800,000원을 인식하였다. (원가모형)",
    debit: [{ account: "감가상각비", amount: 800000 }],
    credit: [{ account: "투자부동산", amount: 800000 }],
    explanation: "투자부동산 원가모형 적용 시 감가상각비를 인식합니다.",
    distractors: ["건물", "임대료수익", "수선비"],
  },
  {
    id: "ki05", type: "journal", standard: "k-ifrs", category: "kifrs-intermediate", difficulty: "intermediate",
    text: "매출채권 800,000원에 대해 대손충당금(충당부채)을 설정하였다.",
    debit: [{ account: "대손상각비", amount: 800000 }],
    credit: [{ account: "충당부채", amount: 800000 }],
    explanation: "예상 대손에 대해 대손상각비(비용)를 인식하고 충당부채를 설정합니다.",
    distractors: ["매출채권", "미지급비용", "유형자산처분손실"],
  },
  // ══════════════════════════════════════
  // k-ifrs / kifrs-ox (10개)
  // ══════════════════════════════════════
  {
    id: "kox01", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "basic",
    text: "K-IFRS에서 재고자산은 취득원가와 순실현가능가치 중 낮은 금액으로 평가한다.",
    answer: true,
    explanation: "저가법 적용. 순실현가능가치가 낮으면 평가손실 인식.",
  },
  {
    id: "kox02", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "basic",
    text: "K-IFRS에서 외상매출금은 매출채권으로 표시한다.",
    answer: true,
    explanation: "K-IFRS는 매출채권, 일반기업회계기준은 외상매출금 사용.",
  },
  {
    id: "kox03", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "intermediate",
    text: "IFRS 16에 따라 리스이용자는 모든 리스를 운용리스와 금융리스로 구분한다.",
    answer: false,
    explanation: "IFRS 16은 리스이용자의 운용/금융리스 구분을 폐지. 단일 모델로 사용권자산과 리스부채를 인식.",
  },
  {
    id: "kox04", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "intermediate",
    text: "사용권자산은 리스부채와 동일한 금액으로 최초 인식한다.",
    answer: false,
    explanation: "사용권자산 = 리스부채 + 선급리스료 + 초기직접원가 + 복구원가 등. 동일하지 않을 수 있음.",
  },
  {
    id: "kox05", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "basic",
    text: "K-IFRS에서 투자부동산은 원가모형 또는 공정가치모형을 선택 적용할 수 있다.",
    answer: true,
    explanation: "원가모형과 공정가치모형 중 선택. 공정가치모형은 감가상각 불필요.",
  },
  {
    id: "kox06", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "basic",
    text: "충당부채는 지출의 시기 또는 금액이 불확실한 부채이다.",
    answer: true,
    explanation: "현재 의무, 경제적 효익 유출 가능성, 신뢰성 있는 추정 세 가지 조건 충족 시 인식.",
  },
  {
    id: "kox07", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "intermediate",
    text: "K-IFRS에서 유형자산은 원가모형만 적용할 수 있다.",
    answer: false,
    explanation: "원가모형과 재평가모형 중 선택 가능. 재평가모형은 공정가치로 재평가.",
  },
  {
    id: "kox08", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "basic",
    text: "대손충당금은 매출채권에서 차감하는 형식으로 표시한다.",
    answer: true,
    explanation: "재무상태표에서 매출채권 차감 표시. 순액으로 보고.",
  },
  {
    id: "kox09", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "intermediate",
    text: "K-IFRS에서 연구비는 자산으로 인식할 수 있다.",
    answer: false,
    explanation: "연구단계 지출은 전액 비용. 개발단계 지출만 조건 충족 시 무형자산 인식 가능.",
  },
  {
    id: "kox10", type: "ox", standard: "k-ifrs", category: "kifrs-ox", difficulty: "basic",
    text: "기타포괄손익은 당기손익에 포함된다.",
    answer: false,
    explanation: "기타포괄손익은 당기손익과 구분. 포괄손익계산서에 별도 표시.",
  },
];
