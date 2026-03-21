// data/accounts.ts
export type Account = {
  id: string
  name: string
  nameEn: string
  category: "자산" | "부채" | "자본" | "수익" | "비용"
  liquidity?: "유동" | "비유동"
  standards: string[]
  definition: string
  journalExample?: string
  relatedConceptTag?: string
  relatedQuestionTag?: string
}

export const accounts: Account[] = [

  // ================================================================
  // 자산 (Asset)
  // ================================================================

  // --- 유동자산 ---
  {
    id: "cash-and-equivalents",
    name: "현금및현금성자산",
    nameEn: "Cash and cash equivalents",
    category: "자산",
    liquidity: "유동",
    standards: ["공통"],
    definition: "즉시 사용 가능한 현금과 취득일로부터 만기가 3개월 이내인 단기 금융상품.",
  },
  {
    id: "trade-receivables",
    name: "매출채권",
    nameEn: "Trade receivables",
    category: "자산",
    liquidity: "유동",
    standards: ["공통"],
    definition: "일반적 상거래에서 발생한 외상매출금과 받을어음의 합계.",
    relatedQuestionTag: "IFRS9"
  },
  {
    id: "allowance-credit-losses",
    name: "대손충당금",
    nameEn: "Allowance for credit losses / Loss allowance",
    category: "자산",
    liquidity: "유동",
    standards: ["IFRS9"],
    definition: "매출채권·대출채권 등에서 기대신용손실(ECL) 기준으로 설정하는 차감 계정.",
    journalExample: "차) 대손상각비 ××× / 대) 대손충당금 ×××",
    relatedConceptTag: "ifrs9",
    relatedQuestionTag: "IFRS9"
  },
  {
    id: "inventories",
    name: "재고자산",
    nameEn: "Inventories",
    category: "자산",
    liquidity: "유동",
    standards: ["IAS2"],
    definition: "정상적인 영업과정에서 판매를 위해 보유하거나 생산 중인 자산.",
    relatedConceptTag: "ias2",
    relatedQuestionTag: "IAS2"
  },
  {
    id: "prepaid-expenses",
    name: "선급비용",
    nameEn: "Prepaid expenses",
    category: "자산",
    liquidity: "유동",
    standards: ["공통"],
    definition: "이미 지급했으나 아직 비용으로 인식하지 않은 금액.",
  },
  {
    id: "short-term-financial-assets",
    name: "단기금융상품",
    nameEn: "Short-term financial instruments",
    category: "자산",
    liquidity: "유동",
    standards: ["공통"],
    definition: "만기가 1년 이내인 정기예금, 정기적금 등 단기 금융상품.",
  },
  {
    id: "fvpl-financial-assets",
    name: "당기손익-공정가치 측정 금융자산",
    nameEn: "Financial assets at FVPL",
    category: "자산",
    liquidity: "유동",
    standards: ["IFRS9"],
    definition: "단기 매매 목적이거나 당기손익-공정가치 측정을 선택한 금융자산.",
    relatedConceptTag: "ifrs9"
  },
  {
    id: "fvoci-financial-assets",
    name: "기타포괄손익-공정가치 측정 금융자산",
    nameEn: "Financial assets at FVOCI",
    category: "자산",
    liquidity: "비유동",
    standards: ["IFRS9"],
    definition: "공정가치 변동을 기타포괄손익으로 인식하도록 지정한 금융자산.",
    relatedConceptTag: "ifrs9"
  },
  {
    id: "ac-financial-assets",
    name: "상각후원가 측정 금융자산",
    nameEn: "Financial assets at amortised cost",
    category: "자산",
    liquidity: "비유동",
    standards: ["IFRS9"],
    definition: "원리금만을 수취하는 목적으로 보유하는 금융자산. 유효이자율법으로 상각.",
    relatedConceptTag: "ifrs9"
  },
  {
    id: "contract-asset",
    name: "계약자산",
    nameEn: "Contract asset",
    category: "자산",
    liquidity: "유동",
    standards: ["IFRS15"],
    definition: "수행의무 이행으로 인식한 수익이 청구액을 초과할 때 발생.",
    relatedConceptTag: "ifrs15",
    relatedQuestionTag: "IFRS15"
  },

  // --- 비유동자산 ---
  {
    id: "ppe",
    name: "유형자산",
    nameEn: "Property, plant and equipment",
    category: "자산",
    standards: ["IAS16"],
    definition: "재화·용역 생산, 임대 또는 관리 목적으로 사용하기 위해 보유하는 물리적 자산.",
    relatedConceptTag: "ias16",
    relatedQuestionTag: "IAS16"
  },
  {
    id: "accumulated-depreciation",
    name: "감가상각누계액",
    nameEn: "Accumulated depreciation",
    category: "자산",
    liquidity: "비유동",
    standards: ["IAS16"],
    definition: "유형자산에 대해 누적된 감가상각비 총액. 자산 차감 계정.",
    journalExample: "차) 감가상각비 ××× / 대) 감가상각누계액 ×××",
    relatedConceptTag: "ias16"
  },
  {
    id: "right-of-use-asset",
    name: "사용권자산",
    nameEn: "Right-of-use asset",
    category: "자산",
    liquidity: "비유동",
    standards: ["IFRS16"],
    definition: "리스이용자가 리스기간 동안 기초자산을 사용할 권리를 나타내는 자산.",
    journalExample: "차) 사용권자산 ××× / 대) 리스부채 ×××",
    relatedConceptTag: "ifrs16",
    relatedQuestionTag: "IFRS16"
  },
  {
    id: "intangible-assets",
    name: "무형자산",
    nameEn: "Intangible assets",
    category: "자산",
    liquidity: "비유동",
    standards: ["IAS38"],
    definition: "물리적 실체는 없지만 식별 가능한 비화폐성 자산. 특허권, 상표권, 개발비 등.",
    relatedConceptTag: "ias38",
    relatedQuestionTag: "IAS38"
  },
  {
    id: "goodwill",
    name: "영업권",
    nameEn: "Goodwill",
    category: "자산",
    liquidity: "비유동",
    standards: ["IAS36"],
    definition: "사업결합에서 이전대가가 피취득자 순자산 공정가치를 초과하는 금액.",
    relatedConceptTag: "ias36"
  },
  {
    id: "deferred-tax-asset",
    name: "이연법인세자산",
    nameEn: "Deferred tax asset",
    category: "자산",
    liquidity: "비유동",
    standards: ["IAS12"],
    definition: "차감할 일시적차이·이월결손금 등으로 인해 미래에 회수될 법인세 효과.",
    relatedConceptTag: "ias12",
    relatedQuestionTag: "IAS12"
  },
  {
    id: "investment-property",
    name: "투자부동산",
    nameEn: "Investment property",
    category: "자산",
    liquidity: "비유동",
    standards: ["공통"],
    definition: "임대수익이나 시세차익을 목적으로 보유하는 부동산.",
  },
  {
    id: "long-term-loans",
    name: "장기대여금",
    nameEn: "Long-term loans receivable",
    category: "자산",
    standards: ["공통"],
    definition: "회수기간이 1년을 초과하는 대여금.",
  },
  {
    id: "impairment-loss-accumulated",
    name: "자산손상누계액",
    nameEn: "Accumulated impairment losses",
    category: "자산",
    liquidity: "비유동",
    standards: ["IAS36"],
    definition: "자산에 대해 누적된 손상차손 총액. 자산 차감 계정.",
    relatedConceptTag: "ias36"
  },

  // --- 금융/공공 특수 자산 ---
  {
    id: "loans-and-receivables-bank",
    name: "대출채권",
    nameEn: "Loans and advances",
    category: "자산",
    standards: ["IFRS9"],
    definition: "은행·정책금융기관이 대출한 원금 채권. 유효이자율법으로 이자 인식.",
    journalExample: "차) 대출채권 ××× / 대) 예수금(예금) ×××",
    relatedConceptTag: "ifrs9"
  },
  {
    id: "securities-bank",
    name: "유가증권",
    nameEn: "Securities",
    category: "자산",
    standards: ["IFRS9"],
    definition: "금융기관이 보유하는 국채, 지방채, 회사채, 주식 등의 금융상품.",
    relatedConceptTag: "ifrs9"
  },
  {
    id: "reserve-deposits",
    name: "지급준비금",
    nameEn: "Reserve deposits",
    category: "자산",
    standards: ["공통"],
    definition: "은행이 한국은행에 의무적으로 예치해야 하는 지급준비예치금.",
  },
  {
    id: "reinsurance-assets",
    name: "재보험자산",
    nameEn: "Reinsurance assets",
    category: "자산",
    standards: ["공통"],
    definition: "보험회사가 재보험계약에 따라 재보험사로부터 수취할 금액.",
  },
  {
    id: "government-infrastructure",
    name: "사회기반시설",
    nameEn: "Infrastructure assets",
    category: "자산",
    standards: ["공통"],
    definition: "국가·지방자치단체가 보유하는 도로, 하천, 댐 등 공공 인프라 자산.",
  },
  {
    id: "heritage-assets",
    name: "문화재·예술품",
    nameEn: "Heritage assets",
    category: "자산",
    standards: ["공통"],
    definition: "국가·지방자치단체가 보유하는 역사적·문화적 가치를 지닌 자산.",
  },
  {
    id: "long-term-receivables-public",
    name: "장기미수수익",
    nameEn: "Long-term accrued revenues",
    category: "자산",
    standards: ["공통"],
    definition: "공공기관이 보유하는 회수기간 1년 초과 미수수익.",
  },

  // ================================================================
  // 부채 (Liability)
  // ================================================================

  {
    id: "trade-payables",
    name: "매입채무",
    nameEn: "Trade payables",
    category: "부채",
    liquidity: "유동",
    standards: ["공통"],
    definition: "일반적 상거래에서 발생한 외상매입금과 지급어음.",
  },
  {
    id: "lease-liability",
    name: "리스부채",
    nameEn: "Lease liability",
    category: "부채",
    liquidity: "비유동",
    standards: ["IFRS16"],
    definition: "리스 개시일에 리스료 지급 의무의 현재가치로 인식하는 부채.",
    journalExample: "차) 리스부채 ××× / 차) 이자비용 ××× / 대) 현금 ×××",
    relatedConceptTag: "ifrs16",
    relatedQuestionTag: "IFRS16"
  },
  {
    id: "provision",
    name: "충당부채",
    nameEn: "Provision",
    category: "부채",
    liquidity: "비유동",
    standards: ["IAS37"],
    definition: "지출 시기나 금액이 불확실한 부채. 현재 의무 존재 + 자원 유출 가능성 높을 때 인식.",
    relatedConceptTag: "ias37",
    relatedQuestionTag: "IAS37"
  },
  {
    id: "restoration-provision",
    name: "복구충당부채",
    nameEn: "Decommissioning / Restoration provision",
    category: "부채",
    liquidity: "비유동",
    standards: ["IAS37"],
    definition: "자산 철거·원상복구 의무에 대한 충당부채. 미래 지출액의 현재가치로 인식.",
    journalExample: "차) 복구원가(자산) ××× / 대) 복구충당부채 ×××",
    relatedConceptTag: "ias37"
  },
  {
    id: "defined-benefit-obligation",
    name: "확정급여채무",
    nameEn: "Defined benefit obligation",
    category: "부채",
    liquidity: "비유동",
    standards: ["IAS19"],
    definition: "확정급여제도에서 종업원에게 지급할 미래 퇴직급여의 현재가치.",
    relatedConceptTag: "ias19",
    relatedQuestionTag: "IAS19"
  },
  {
    id: "deferred-tax-liability",
    name: "이연법인세부채",
    nameEn: "Deferred tax liability",
    category: "부채",
    liquidity: "비유동",
    standards: ["IAS12"],
    definition: "가산할 일시적차이로 인해 미래에 납부할 법인세 효과.",
    relatedConceptTag: "ias12"
  },
  {
    id: "contract-liability",
    name: "계약부채",
    nameEn: "Contract liability",
    category: "부채",
    liquidity: "유동",
    standards: ["IFRS15"],
    definition: "고객에게서 받은 대가가 수익 인식액을 초과할 때 발생하는 부채(선수금 성격).",
    relatedConceptTag: "ifrs15"
  },
  {
    id: "bonds-payable",
    name: "사채",
    nameEn: "Bonds payable",
    category: "부채",
    liquidity: "비유동",
    standards: ["공통"],
    definition: "기업이 자금 조달을 위해 발행한 채무증권.",
  },
  {
    id: "deposits-received",
    name: "예수금",
    nameEn: "Deposits received / Customer deposits",
    category: "부채",
    standards: ["공통"],
    definition: "은행이 고객으로부터 수취한 예금. 요구불예금·저축성예금 포함.",
  },
  {
    id: "borrowings",
    name: "차입금",
    nameEn: "Borrowings",
    category: "부채",
    liquidity: "비유동",
    standards: ["공통"],
    definition: "금융기관 등으로부터 차입한 자금.",
  },
  {
    id: "insurance-contract-liability",
    name: "보험계약부채",
    nameEn: "Insurance contract liabilities",
    category: "부채",
    standards: ["공통"],
    definition: "보험회사가 보험계약자에게 지급할 보험금 의무의 현재가치.",
  },
  {
    id: "policy-reserve",
    name: "책임준비금",
    nameEn: "Policy reserves",
    category: "부채",
    standards: ["공통"],
    definition: "보험회사가 미래 보험금 지급을 위해 적립하는 준비금.",
  },
  {
    id: "government-grants-liability",
    name: "정부보조금",
    nameEn: "Government grants",
    category: "부채",
    standards: ["공통"],
    definition: "정부로부터 수령한 보조금. 자산 차감 또는 이연수익으로 처리.",
  },
  {
    id: "accrued-subsidies",
    name: "미지급보조금",
    nameEn: "Accrued subsidies payable",
    category: "부채",
    standards: ["공통"],
    definition: "공공기관이 지급 의무는 발생했으나 아직 지급하지 않은 보조금.",
  },

  // ================================================================
  // 자본 (Equity)
  // ================================================================

  {
    id: "share-capital",
    name: "자본금",
    nameEn: "Share capital",
    category: "자본",
    standards: ["공통"],
    definition: "발행 주식의 액면금액 합계.",
  },
  {
    id: "share-premium",
    name: "주식발행초과금",
    nameEn: "Share premium",
    category: "자본",
    standards: ["공통"],
    definition: "주식 발행 시 액면금액을 초과하여 수령한 금액.",
  },
  {
    id: "retained-earnings",
    name: "이익잉여금",
    nameEn: "Retained earnings",
    category: "자본",
    standards: ["공통"],
    definition: "누적된 당기순이익에서 배당 등을 차감한 사내 유보 금액.",
  },
  {
    id: "oci-accumulated",
    name: "기타포괄손익누계액",
    nameEn: "Accumulated other comprehensive income",
    category: "자본",
    standards: ["공통"],
    definition: "당기손익에 포함되지 않고 자본에 직접 반영되는 손익 누계.",
  },
  {
    id: "treasury-shares",
    name: "자기주식",
    nameEn: "Treasury shares",
    category: "자본",
    standards: ["공통"],
    definition: "회사가 자신이 발행한 주식을 재취득한 것. 자본 차감 항목.",
  },
  {
    id: "government-fund",
    name: "기금",
    nameEn: "Government fund",
    category: "자본",
    standards: ["공통"],
    definition: "정부·공공기관이 특정 목적을 위해 설치·운용하는 자금. 정부회계의 자본 성격.",
  },
  {
    id: "capital-grants",
    name: "자본잉여금(정부출연금)",
    nameEn: "Capital grants / Government contribution",
    category: "자본",
    standards: ["공통"],
    definition: "정부·출자자로부터 수령한 출연금·출자금으로 자본 성격의 항목.",
  },

  // ================================================================
  // 수익 (Revenue / Income)
  // ================================================================

  {
    id: "revenue",
    name: "수익(매출)",
    nameEn: "Revenue",
    category: "수익",
    standards: ["IFRS15"],
    definition: "고객과의 계약에서 수행의무 이행으로 인식하는 재화·용역 이전 대가.",
    relatedConceptTag: "ifrs15",
    relatedQuestionTag: "IFRS15"
  },
  {
    id: "interest-income",
    name: "이자수익",
    nameEn: "Interest income",
    category: "수익",
    standards: ["공통"],
    definition: "금융자산·대출채권 보유로 발생하는 이자 수익.",
  },
  {
    id: "fee-commission-income",
    name: "수수료수익",
    nameEn: "Fee and commission income",
    category: "수익",
    standards: ["공통"],
    definition: "금융서비스 제공 대가로 수취하는 수수료.",
  },
  {
    id: "premium-income",
    name: "보험료수익",
    nameEn: "Premium income",
    category: "수익",
    standards: ["공통"],
    definition: "보험회사가 보험계약자로부터 수취하는 보험료.",
  },
  {
    id: "government-subsidy-income",
    name: "정부보조금수익",
    nameEn: "Government grant income",
    category: "수익",
    standards: ["공통"],
    definition: "정부로부터 수령한 보조금 중 수익으로 인식하는 금액.",
  },
  {
    id: "gain-on-disposal-ppe",
    name: "유형자산처분이익",
    nameEn: "Gain on disposal of PPE",
    category: "수익",
    standards: ["IAS16"],
    definition: "유형자산 처분 시 처분금액이 장부금액을 초과하는 이익.",
    relatedConceptTag: "ias16"
  },
  {
    id: "reversal-impairment",
    name: "손상차손환입",
    nameEn: "Reversal of impairment loss",
    category: "수익",
    standards: ["IAS36"],
    definition: "이전에 인식한 손상차손이 회복될 때 인식하는 이익.",
    relatedConceptTag: "ias36"
  },
  {
    id: "transfer-income",
    name: "전입금",
    nameEn: "Transfer income",
    category: "수익",
    standards: ["공통"],
    definition: "공공기관·정부기관이 다른 기관으로부터 이전받은 자금.",
  },
  {
    id: "dividend-income",
    name: "배당금수익",
    nameEn: "Dividend income",
    category: "수익",
    standards: ["공통"],
    definition: "투자한 주식에서 발생하는 배당금 수입.",
  },

  // ================================================================
  // 비용 (Expense)
  // ================================================================

  {
    id: "cost-of-goods-sold",
    name: "매출원가",
    nameEn: "Cost of goods sold",
    category: "비용",
    standards: ["공통"],
    definition: "판매된 재고자산의 원가.",
    relatedConceptTag: "ias2"
  },
  {
    id: "depreciation",
    name: "감가상각비",
    nameEn: "Depreciation expense",
    category: "비용",
    standards: ["IAS16"],
    definition: "유형자산 취득원가를 내용연수에 걸쳐 체계적으로 배분하는 금액.",
    journalExample: "차) 감가상각비 ××× / 대) 감가상각누계액 ×××",
    relatedConceptTag: "ias16",
    relatedQuestionTag: "IAS16"
  },
  {
    id: "amortization",
    name: "무형자산상각비",
    nameEn: "Amortization expense",
    category: "비용",
    standards: ["IAS38"],
    definition: "유한 내용연수 무형자산을 체계적으로 배분하는 금액.",
    relatedConceptTag: "ias38"
  },
  {
    id: "interest-expense",
    name: "이자비용",
    nameEn: "Interest expense",
    category: "비용",
    standards: ["공통"],
    definition: "차입금, 사채, 리스부채, 충당부채 등에서 발생하는 이자 비용.",
  },
  {
    id: "bad-debt-expense",
    name: "대손상각비",
    nameEn: "Credit loss expense / Bad debt expense",
    category: "비용",
    standards: ["IFRS9"],
    definition: "매출채권·대출채권 등의 기대신용손실(ECL)로 인식하는 비용.",
    journalExample: "차) 대손상각비 ××× / 대) 대손충당금 ×××",
    relatedConceptTag: "ifrs9"
  },
  {
    id: "impairment-loss",
    name: "손상차손",
    nameEn: "Impairment loss",
    category: "비용",
    standards: ["IAS36"],
    definition: "자산 장부금액이 회수가능액을 초과할 때 인식하는 손실.",
    journalExample: "차) 손상차손 ××× / 대) 자산손상누계액 ×××",
    relatedConceptTag: "ias36",
    relatedQuestionTag: "IAS36"
  },
  {
    id: "pension-expense",
    name: "퇴직급여",
    nameEn: "Pension / Post-employment benefit expense",
    category: "비용",
    standards: ["IAS19"],
    definition: "확정급여제도의 당기근무원가와 이자비용 합계.",
    relatedConceptTag: "ias19"
  },
  {
    id: "service-cost",
    name: "당기근무원가",
    nameEn: "Current service cost",
    category: "비용",
    standards: ["IAS19"],
    definition: "종업원의 당기 근무에 대해 증가한 확정급여채무의 현재가치.",
    relatedConceptTag: "ias19"
  },
  {
    id: "income-tax-expense",
    name: "법인세비용",
    nameEn: "Income tax expense",
    category: "비용",
    standards: ["IAS12"],
    definition: "당기법인세와 이연법인세 변동액의 합계.",
    relatedConceptTag: "ias12"
  },
  {
    id: "provision-expense",
    name: "충당부채전입액",
    nameEn: "Provision expense",
    category: "비용",
    standards: ["IAS37"],
    definition: "충당부채를 신규 설정하거나 추가 적립할 때 인식하는 비용.",
    relatedConceptTag: "ias37"
  },
  {
    id: "interest-expense-lease",
    name: "리스이자비용",
    nameEn: "Interest expense on lease liability",
    category: "비용",
    standards: ["IFRS16"],
    definition: "리스부채에 대해 유효이자율법으로 인식하는 이자비용.",
    relatedConceptTag: "ifrs16"
  },
  {
    id: "unwinding-discount",
    name: "이자전입액(충당부채 할인액 상각)",
    nameEn: "Unwinding of discount",
    category: "비용",
    standards: ["IAS37"],
    definition: "충당부채 현재가치 할인으로 인한 기간 경과에 따른 이자비용 성격의 비용.",
    relatedConceptTag: "ias37"
  },
  {
    id: "transfer-expense",
    name: "전출금비용",
    nameEn: "Transfer expense",
    category: "비용",
    standards: ["공통"],
    definition: "공공기관이 다른 기관에 이전하는 지출.",
  },
  {
    id: "subsidy-expense",
    name: "보조금비용",
    nameEn: "Subsidy expense",
    category: "비용",
    standards: ["공통"],
    definition: "공공기관·정책금융기관이 지급하는 보조금 또는 출연금.",
  },
  {
    id: "program-cost",
    name: "프로그램순원가",
    nameEn: "Net program cost",
    category: "비용",
    standards: ["공통"],
    definition: "정부회계에서 특정 프로그램(정책사업) 수행에 소요된 순비용.",
  },
  {
    id: "credit-loss-bank",
    name: "대손비용(은행)",
    nameEn: "Credit loss expense (bank)",
    category: "비용",
    standards: ["IFRS9"],
    definition: "은행·정책금융기관의 대출채권에 대한 기대신용손실 인식 비용.",
    relatedConceptTag: "ifrs9"
  },

  // --- 당좌자산 ---
  { id: "ordinary-deposit", name: "보통예금", nameEn: "Ordinary deposit", category: "자산", liquidity: "유동", standards: ["공통"], definition: "은행에 예치한 수시 입출금 가능한 예금." },
  { id: "current-deposit", name: "당좌예금", nameEn: "Current account", category: "자산", liquidity: "유동", standards: ["공통"], definition: "수표·어음 발행을 위해 은행과 당좌거래계약을 맺고 예치한 예금." },
  { id: "petty-cash", name: "소액현금", nameEn: "Petty cash", category: "자산", liquidity: "유동", standards: ["공통"], definition: "소액 지출을 위해 별도로 관리하는 현금 자금." },
  { id: "notes-receivable", name: "받을어음", nameEn: "Notes receivable", category: "자산", liquidity: "유동", standards: ["공통"], definition: "상거래에서 수취한 약속어음·환어음." },
  { id: "accrued-income", name: "미수수익", nameEn: "Accrued income", category: "자산", liquidity: "유동", standards: ["공통"], definition: "수익은 발생했으나 아직 수취하지 않은 금액." },
  { id: "other-receivables", name: "미수금", nameEn: "Other receivables", category: "자산", liquidity: "유동", standards: ["공통"], definition: "일반적 상거래 이외에서 발생한 미수채권." },
  { id: "advance-payments", name: "선급금", nameEn: "Advance payments", category: "자산", liquidity: "유동", standards: ["공통"], definition: "재화·용역 수취 전 미리 지급한 금액." },
  { id: "vat-receivable", name: "부가세대급금", nameEn: "VAT receivable", category: "자산", liquidity: "유동", standards: ["공통"], definition: "매입 시 부담한 부가가치세로 환급 대상인 금액." },
  { id: "suspense-payments", name: "가지급금", nameEn: "Suspense payments", category: "자산", liquidity: "유동", standards: ["공통"], definition: "지출은 했으나 계정과목이 확정되지 않은 임시 자산 계정." },
  { id: "deposits-paid", name: "임차보증금", nameEn: "Lease deposit paid", category: "자산", liquidity: "비유동", standards: ["공통"], definition: "부동산 임차 시 임대인에게 지급한 보증금." },
  { id: "long-term-deposits", name: "장기금융상품", nameEn: "Long-term financial instruments", category: "자산", liquidity: "비유동", standards: ["공통"], definition: "만기가 1년을 초과하는 정기예금·적금 등." },
  { id: "land", name: "토지", nameEn: "Land", category: "자산", liquidity: "비유동", standards: ["IAS16"], definition: "영업 목적으로 보유하는 토지. 감가상각 대상 아님.", relatedConceptTag: "ias16" },
  { id: "buildings", name: "건물", nameEn: "Buildings", category: "자산", liquidity: "비유동", standards: ["IAS16"], definition: "영업 목적으로 보유하는 건물 및 구축물.", relatedConceptTag: "ias16" },
  { id: "machinery", name: "기계장치", nameEn: "Machinery and equipment", category: "자산", liquidity: "비유동", standards: ["IAS16"], definition: "제조·생산에 사용하는 기계·장치류.", relatedConceptTag: "ias16" },
  { id: "vehicles", name: "차량운반구", nameEn: "Vehicles", category: "자산", liquidity: "비유동", standards: ["IAS16"], definition: "영업용 자동차·트럭 등 운반 수단.", relatedConceptTag: "ias16" },
  { id: "tools-fixtures", name: "비품", nameEn: "Furniture and fixtures", category: "자산", liquidity: "비유동", standards: ["IAS16"], definition: "사무용 가구, 집기, 전산기기 등.", relatedConceptTag: "ias16" },
  { id: "construction-in-progress", name: "건설중인자산", nameEn: "Construction in progress", category: "자산", liquidity: "비유동", standards: ["IAS16"], definition: "완공 전 건설 중인 유형자산. 완공 시 해당 자산으로 대체.", relatedConceptTag: "ias16" },
  { id: "development-costs", name: "개발비", nameEn: "Development costs", category: "자산", liquidity: "비유동", standards: ["IAS38"], definition: "IAS38 인식 요건을 충족하는 개발 단계 지출. 무형자산으로 자본화.", relatedConceptTag: "ias38" },
  { id: "software", name: "소프트웨어", nameEn: "Software", category: "자산", liquidity: "비유동", standards: ["IAS38"], definition: "구입하거나 개발한 소프트웨어 자산.", relatedConceptTag: "ias38" },
  { id: "patents", name: "특허권", nameEn: "Patents", category: "자산", liquidity: "비유동", standards: ["IAS38"], definition: "발명에 대한 독점적 사용 권리.", relatedConceptTag: "ias38" },
  { id: "franchise", name: "영업권(프랜차이즈)", nameEn: "Franchise rights", category: "자산", liquidity: "비유동", standards: ["IAS38"], definition: "가맹계약에 따른 영업 권리.", relatedConceptTag: "ias38" },
  { id: "equity-method-investments", name: "지분법적용투자주식", nameEn: "Equity method investments", category: "자산", liquidity: "비유동", standards: ["공통"], definition: "피투자회사에 유의적 영향력을 행사할 수 있는 주식. 지분법으로 평가." },
  { id: "subsidiary-investments", name: "종속기업투자주식", nameEn: "Investment in subsidiaries", category: "자산", liquidity: "비유동", standards: ["공통"], definition: "지배력을 보유한 종속기업에 대한 투자 주식." },
  // --- 부채 ---
  { id: "notes-payable", name: "지급어음", nameEn: "Notes payable", category: "부채", liquidity: "유동", standards: ["공통"], definition: "상거래에서 발행한 약속어음." },
  { id: "accrued-expenses", name: "미지급비용", nameEn: "Accrued expenses", category: "부채", liquidity: "유동", standards: ["공통"], definition: "비용은 발생했으나 아직 지급하지 않은 금액." },
  { id: "other-payables", name: "미지급금", nameEn: "Other payables", category: "부채", liquidity: "유동", standards: ["공통"], definition: "일반적 상거래 이외에서 발생한 미지급채무." },
  { id: "advance-receipts", name: "선수금", nameEn: "Advance receipts", category: "부채", liquidity: "유동", standards: ["공통"], definition: "재화·용역 제공 전 미리 수취한 금액." },
  { id: "unearned-revenue", name: "선수수익", nameEn: "Unearned revenue / Deferred revenue", category: "부채", liquidity: "유동", standards: ["공통"], definition: "이미 수취했으나 아직 수익으로 인식하지 않은 금액." },
  { id: "vat-payable", name: "부가세예수금", nameEn: "VAT payable", category: "부채", liquidity: "유동", standards: ["공통"], definition: "매출 시 고객으로부터 수취한 부가가치세 납부 의무." },
  { id: "withholding-tax", name: "예수금(원천징수)", nameEn: "Withholding tax payable", category: "부채", liquidity: "유동", standards: ["공통"], definition: "종업원 급여 등에서 원천징수한 세금 납부 의무." },
  { id: "suspense-receipts", name: "가수금", nameEn: "Suspense receipts", category: "부채", liquidity: "유동", standards: ["공통"], definition: "수취는 했으나 계정과목이 확정되지 않은 임시 부채 계정." },
  { id: "deposits-received-security", name: "임대보증금", nameEn: "Security deposits received", category: "부채", liquidity: "비유동", standards: ["공통"], definition: "부동산 임대 시 임차인으로부터 수취한 보증금." },
  { id: "current-portion-lt-debt", name: "유동성장기부채", nameEn: "Current portion of long-term debt", category: "부채", liquidity: "유동", standards: ["공통"], definition: "장기차입금 중 1년 이내 만기 도래 부분." },
  { id: "income-tax-payable", name: "미지급법인세", nameEn: "Income tax payable", category: "부채", liquidity: "유동", standards: ["공통"], definition: "당기 법인세 중 아직 납부하지 않은 금액." },
  { id: "dividends-payable", name: "미지급배당금", nameEn: "Dividends payable", category: "부채", liquidity: "유동", standards: ["공통"], definition: "주주총회 결의 후 아직 지급하지 않은 배당금." },
  // --- 자본 ---
  { id: "legal-reserve", name: "이익준비금", nameEn: "Legal reserve", category: "자본", standards: ["공통"], definition: "상법에 따라 배당액의 10% 이상 적립 의무가 있는 법정준비금." },
  { id: "voluntary-reserve", name: "임의적립금", nameEn: "Voluntary reserve", category: "자본", standards: ["공통"], definition: "정관 또는 주주총회 결의로 적립하는 준비금." },
  { id: "capital-adjustment", name: "자본조정", nameEn: "Capital adjustments", category: "자본", standards: ["공통"], definition: "주주와의 자본거래에서 발생하는 자본 가감 항목. 주식할인발행차금 등." },
  // --- 수익 ---
  { id: "product-sales", name: "제품매출", nameEn: "Product sales", category: "수익", standards: ["공통"], definition: "제조업에서 생산한 제품의 판매로 발생하는 수익." },
  { id: "merchandise-sales", name: "상품매출", nameEn: "Merchandise sales", category: "수익", standards: ["공통"], definition: "구입한 상품을 그대로 판매하여 발생하는 수익." },
  { id: "rental-income", name: "임대료수익", nameEn: "Rental income", category: "수익", standards: ["공통"], definition: "부동산·자산 임대로 발생하는 수익." },
  { id: "gain-on-sale-securities", name: "유가증권처분이익", nameEn: "Gain on sale of securities", category: "수익", standards: ["공통"], definition: "유가증권 처분 시 처분금액이 장부금액을 초과하는 이익." },
  { id: "foreign-exchange-gain", name: "외환차익", nameEn: "Foreign exchange gain", category: "수익", standards: ["공통"], definition: "외화 거래의 결제 시 환율 변동으로 발생하는 이익." },
  { id: "misc-income", name: "잡이익", nameEn: "Miscellaneous income", category: "수익", standards: ["공통"], definition: "영업외 소액 이익 항목." },
  // --- 비용 ---
  { id: "salaries", name: "급여", nameEn: "Salaries and wages", category: "비용", standards: ["공통"], definition: "종업원에게 지급하는 기본급 및 수당." },
  { id: "welfare-expenses", name: "복리후생비", nameEn: "Employee welfare expenses", category: "비용", standards: ["공통"], definition: "식대, 의료비, 경조사비 등 종업원 복리후생 관련 지출." },
  { id: "advertising", name: "광고선전비", nameEn: "Advertising expense", category: "비용", standards: ["공통"], definition: "제품·서비스 홍보를 위한 광고 지출." },
  { id: "rent-expense", name: "임차료", nameEn: "Rent expense", category: "비용", standards: ["공통"], definition: "단기리스 또는 소액자산 리스에 대한 임차비용 (IFRS16 예외 적용).", relatedConceptTag: "ifrs16" },
  { id: "travel-expense", name: "여비교통비", nameEn: "Travel expense", category: "비용", standards: ["공통"], definition: "출장·외근에 소요되는 교통비·숙박비 등." },
  { id: "communication", name: "통신비", nameEn: "Communication expense", category: "비용", standards: ["공통"], definition: "전화·인터넷 등 통신 관련 비용." },
  { id: "utilities", name: "수도광열비", nameEn: "Utilities expense", category: "비용", standards: ["공통"], definition: "전기·수도·가스 등 공과금." },
  { id: "supplies", name: "소모품비", nameEn: "Supplies expense", category: "비용", standards: ["공통"], definition: "사무용품·소모성 자재 등 단기 소모 비용." },
  { id: "repairs", name: "수선비", nameEn: "Repairs and maintenance", category: "비용", standards: ["공통"], definition: "자산의 현상 유지를 위한 수리·보수 비용." },
  { id: "insurance-expense", name: "보험료", nameEn: "Insurance expense", category: "비용", standards: ["공통"], definition: "화재보험·자동차보험 등 보험 납입액." },
  { id: "taxes-dues", name: "세금과공과", nameEn: "Taxes and dues", category: "비용", standards: ["공통"], definition: "재산세·자동차세·협회비 등 세금 및 공과금." },
  { id: "entertainment", name: "접대비", nameEn: "Entertainment expense", category: "비용", standards: ["공통"], definition: "거래처 접대·선물 등 영업 관련 접대 지출." },
  { id: "research-costs", name: "연구비", nameEn: "Research expense", category: "비용", standards: ["IAS38"], definition: "새로운 지식 획득을 위한 연구 단계 지출. 즉시 비용 처리.", relatedConceptTag: "ias38" },
  { id: "loss-disposal-ppe", name: "유형자산처분손실", nameEn: "Loss on disposal of PPE", category: "비용", standards: ["IAS16"], definition: "유형자산 처분 시 처분금액이 장부금액에 미달하는 손실.", relatedConceptTag: "ias16" },
  { id: "foreign-exchange-loss", name: "외환차손", nameEn: "Foreign exchange loss", category: "비용", standards: ["공통"], definition: "외화 거래의 결제 시 환율 변동으로 발생하는 손실." },
  { id: "misc-expense", name: "잡손실", nameEn: "Miscellaneous loss", category: "비용", standards: ["공통"], definition: "영업외 소액 손실 항목." },
  { id: "cost-of-construction", name: "공사원가", nameEn: "Construction costs", category: "비용", standards: ["공통"], definition: "건설업에서 수주한 공사에 소요된 원가." },

  // --- 추가 계정과목 ---
  { id: "raw-materials", name: "원재료", nameEn: "Raw materials", category: "자산", liquidity: "유동", standards: ["공통"], definition: "제품 제조를 위해 구입한 원자재." },
  { id: "work-in-progress", name: "재공품", nameEn: "Work in progress", category: "자산", liquidity: "유동", standards: ["공통"], definition: "제조 공정에 투입되었으나 아직 완성되지 않은 중간 단계 자산." },
  { id: "semi-finished-goods", name: "반제품", nameEn: "Semi-finished goods", category: "자산", liquidity: "유동", standards: ["공통"], definition: "자체 제조한 중간 제품으로 외부 판매도 가능한 상태." },
  { id: "finished-goods", name: "제품", nameEn: "Finished goods", category: "자산", liquidity: "유동", standards: ["공통"], definition: "제조 공정이 완료되어 판매 가능한 상태의 재고자산." },
  { id: "merchandise", name: "상품", nameEn: "Merchandise", category: "자산", liquidity: "유동", standards: ["공통"], definition: "외부에서 구입하여 그대로 판매할 목적으로 보유하는 재고자산." },
  { id: "supplies-asset", name: "소모품", nameEn: "Supplies (asset)", category: "자산", liquidity: "유동", standards: ["공통"], definition: "구입했으나 아직 사용하지 않은 소모성 자재." },
  { id: "labor-cost", name: "노무비", nameEn: "Labor cost", category: "비용", standards: ["공통"], definition: "제품 제조에 직접 투입된 작업자의 인건비." },
  { id: "manufacturing-overhead", name: "제조간접비", nameEn: "Manufacturing overhead", category: "비용", standards: ["공통"], definition: "특정 제품에 직접 추적할 수 없는 제조 관련 비용." },
  { id: "stock-options", name: "주식선택권", nameEn: "Share-based payment reserve", category: "자본", standards: ["공통"], definition: "주식기준보상을 부여한 대가로 인식하는 자본 항목.", journalExample: "차) 주식보상비용 ××× / 대) 주식선택권 ×××" },
  { id: "accrued-interest", name: "미수이자", nameEn: "Accrued interest receivable", category: "자산", liquidity: "유동", standards: ["공통"], definition: "이자 수익이 발생했으나 아직 수취하지 않은 미수 이자." },
  { id: "derivative-asset", name: "파생상품자산", nameEn: "Derivative financial assets", category: "자산", liquidity: "유동", standards: ["IFRS9"], definition: "선물, 옵션, 스왑 등 파생금융상품의 공정가치 중 양(+)의 값.", relatedConceptTag: "ifrs9" },
  { id: "current-tax-asset", name: "당기법인세자산", nameEn: "Current tax asset", category: "자산", liquidity: "유동", standards: ["IAS12"], definition: "납부한 법인세가 납부해야 할 금액을 초과하는 경우 환급받을 금액.", relatedConceptTag: "ias12" },
  { id: "derivative-liability", name: "파생상품부채", nameEn: "Derivative financial liabilities", category: "부채", liquidity: "유동", standards: ["IFRS9"], definition: "파생금융상품의 공정가치 중 음(-)의 값.", relatedConceptTag: "ifrs9" },
  { id: "current-tax-liability", name: "당기법인세부채", nameEn: "Current tax liability", category: "부채", liquidity: "유동", standards: ["IAS12"], definition: "당기 및 전기의 과세소득에 대해 납부해야 할 법인세 중 미납액.", relatedConceptTag: "ias12" },
  { id: "guarantee-provision", name: "지급보증충당부채", nameEn: "Guarantee provision", category: "부채", liquidity: "비유동", standards: ["IAS37"], definition: "타인 채무에 대해 보증을 섰을 때 설정하는 충당부채.", relatedConceptTag: "ias37" },
  { id: "unpaid-transfer", name: "미지급전출금", nameEn: "Transfer payable", category: "부채", liquidity: "유동", standards: ["공통"], definition: "공공기관이 타 기관에 전출할 의무가 발생했으나 아직 지급하지 않은 금액." },
  { id: "construction-receivable", name: "공사미수금", nameEn: "Construction receivable", category: "자산", liquidity: "유동", standards: ["IFRS15"], definition: "건설계약에서 공사 진행에 따라 청구했으나 아직 수취하지 못한 금액.", relatedConceptTag: "ifrs15" },
  { id: "construction-advance", name: "공사선수금", nameEn: "Advance from customers (construction)", category: "부채", liquidity: "유동", standards: ["IFRS15"], definition: "건설계약에서 공사 수행 전 발주처로부터 미리 수취한 금액.", relatedConceptTag: "ifrs15" },
  { id: "call-loans", name: "콜론", nameEn: "Call loans", category: "자산", liquidity: "유동", standards: ["공통"], definition: "은행이 다른 금융기관에 초단기로 대여한 자금." },
  { id: "call-money", name: "콜머니", nameEn: "Call money", category: "부채", liquidity: "유동", standards: ["공통"], definition: "은행이 다른 금융기관으로부터 초단기로 차입한 자금." },

]
