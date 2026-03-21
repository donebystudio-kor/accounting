// data/accounts.ts
export type Account = {
  id: string
  name: string
  nameEn: string
  category: "자산" | "부채" | "자본" | "수익" | "비용"
  standards: string[]
  definition: string
  standardDiff: {
    kifrs?: string
    general?: string      // 일반기업회계기준
    sme?: string          // 중소기업회계기준
    bank?: string         // 은행업
    insurance?: string    // 보험업
    financial?: string    // 금융투자업
    public?: string       // 공공기관(공기업·준정부)
    government?: string   // 국가/지방자치단체
    policyBank?: string   // 정책금융기관
  }
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
    standards: ["공통"],
    definition: "즉시 사용 가능한 현금과 취득일로부터 만기가 3개월 이내인 단기 금융상품.",
    standardDiff: {
      kifrs: "현금및현금성자산",
      general: "현금및현금성자산",
      sme: "현금및현금성자산",
      bank: "현금및예치금",
      insurance: "현금및현금성자산",
      financial: "현금및현금성자산",
      public: "현금및현금성자산",
      government: "현금및현금성자산",
      policyBank: "현금및예치금"
    }
  },
  {
    id: "trade-receivables",
    name: "매출채권",
    nameEn: "Trade receivables",
    category: "자산",
    standards: ["공통"],
    definition: "일반적 상거래에서 발생한 외상매출금과 받을어음의 합계.",
    standardDiff: {
      kifrs: "매출채권",
      general: "매출채권",
      sme: "매출채권",
      bank: "대출채권",
      insurance: "미수보험료",
      financial: "미수수익",
      public: "미수금",
      government: "미수수익",
      policyBank: "대출채권"
    },
    relatedQuestionTag: "IFRS9"
  },
  {
    id: "allowance-credit-losses",
    name: "대손충당금",
    nameEn: "Allowance for credit losses / Loss allowance",
    category: "자산",
    standards: ["IFRS9"],
    definition: "매출채권·대출채권 등에서 기대신용손실(ECL) 기준으로 설정하는 차감 계정.",
    standardDiff: {
      kifrs: "대손충당금",
      general: "대손충당금",
      sme: "대손충당금",
      bank: "대손충당금",
      insurance: "대손충당금",
      financial: "대손충당금",
      public: "대손충당금",
      government: "대손충당금",
      policyBank: "대손충당금"
    },
    journalExample: "차) 대손상각비 ××× / 대) 대손충당금 ×××",
    relatedConceptTag: "ifrs9",
    relatedQuestionTag: "IFRS9"
  },
  {
    id: "inventories",
    name: "재고자산",
    nameEn: "Inventories",
    category: "자산",
    standards: ["IAS2"],
    definition: "정상적인 영업과정에서 판매를 위해 보유하거나 생산 중인 자산.",
    standardDiff: {
      kifrs: "재고자산",
      general: "재고자산",
      sme: "재고자산",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "재고자산",
      government: "재고자산",
      policyBank: "해당없음"
    },
    relatedConceptTag: "ias2",
    relatedQuestionTag: "IAS2"
  },
  {
    id: "prepaid-expenses",
    name: "선급비용",
    nameEn: "Prepaid expenses",
    category: "자산",
    standards: ["공통"],
    definition: "이미 지급했으나 아직 비용으로 인식하지 않은 금액.",
    standardDiff: {
      kifrs: "선급비용",
      general: "선급비용",
      sme: "선급비용",
      bank: "선급비용",
      insurance: "선급비용",
      financial: "선급비용",
      public: "선급비용",
      government: "선급비용",
      policyBank: "선급비용"
    }
  },
  {
    id: "short-term-financial-assets",
    name: "단기금융상품",
    nameEn: "Short-term financial instruments",
    category: "자산",
    standards: ["공통"],
    definition: "만기가 1년 이내인 정기예금, 정기적금 등 단기 금융상품.",
    standardDiff: {
      kifrs: "단기금융상품",
      general: "단기금융상품",
      sme: "단기금융상품",
      bank: "예치금",
      insurance: "단기금융상품",
      financial: "단기금융상품",
      public: "단기금융상품",
      government: "단기금융상품",
      policyBank: "예치금"
    }
  },
  {
    id: "fvpl-financial-assets",
    name: "당기손익-공정가치 측정 금융자산",
    nameEn: "Financial assets at FVPL",
    category: "자산",
    standards: ["IFRS9"],
    definition: "단기 매매 목적이거나 당기손익-공정가치 측정을 선택한 금융자산.",
    standardDiff: {
      kifrs: "당기손익-공정가치 측정 금융자산",
      general: "단기매매금융자산",
      sme: "단기매매증권",
      bank: "매매목적유가증권",
      insurance: "매매목적유가증권",
      financial: "매매목적유가증권",
      public: "단기투자증권",
      government: "단기투자증권",
      policyBank: "매매목적유가증권"
    },
    relatedConceptTag: "ifrs9"
  },
  {
    id: "fvoci-financial-assets",
    name: "기타포괄손익-공정가치 측정 금융자산",
    nameEn: "Financial assets at FVOCI",
    category: "자산",
    standards: ["IFRS9"],
    definition: "공정가치 변동을 기타포괄손익으로 인식하도록 지정한 금융자산.",
    standardDiff: {
      kifrs: "기타포괄손익-공정가치 측정 금융자산",
      general: "매도가능금융자산",
      sme: "매도가능증권",
      bank: "매도가능유가증권",
      insurance: "매도가능유가증권",
      financial: "매도가능유가증권",
      public: "장기투자증권",
      government: "장기투자증권",
      policyBank: "매도가능유가증권"
    },
    relatedConceptTag: "ifrs9"
  },
  {
    id: "ac-financial-assets",
    name: "상각후원가 측정 금융자산",
    nameEn: "Financial assets at amortised cost",
    category: "자산",
    standards: ["IFRS9"],
    definition: "원리금만을 수취하는 목적으로 보유하는 금융자산. 유효이자율법으로 상각.",
    standardDiff: {
      kifrs: "상각후원가 측정 금융자산",
      general: "만기보유금융자산",
      sme: "만기보유증권",
      bank: "만기보유유가증권",
      insurance: "만기보유유가증권",
      financial: "만기보유유가증권",
      public: "만기보유투자증권",
      government: "만기보유투자증권",
      policyBank: "만기보유유가증권"
    },
    relatedConceptTag: "ifrs9"
  },
  {
    id: "contract-asset",
    name: "계약자산",
    nameEn: "Contract asset",
    category: "자산",
    standards: ["IFRS15"],
    definition: "수행의무 이행으로 인식한 수익이 청구액을 초과할 때 발생.",
    standardDiff: {
      kifrs: "계약자산",
      general: "미성공사",
      sme: "미성공사",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "계약자산",
      government: "계약자산",
      policyBank: "해당없음"
    },
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
    standardDiff: {
      kifrs: "유형자산",
      general: "유형자산",
      sme: "유형자산",
      bank: "유형자산",
      insurance: "유형자산",
      financial: "유형자산",
      public: "일반유형자산",
      government: "일반유형자산",
      policyBank: "유형자산"
    },
    relatedConceptTag: "ias16",
    relatedQuestionTag: "IAS16"
  },
  {
    id: "accumulated-depreciation",
    name: "감가상각누계액",
    nameEn: "Accumulated depreciation",
    category: "자산",
    standards: ["IAS16"],
    definition: "유형자산에 대해 누적된 감가상각비 총액. 자산 차감 계정.",
    standardDiff: {
      kifrs: "감가상각누계액",
      general: "감가상각누계액",
      sme: "감가상각누계액",
      bank: "감가상각누계액",
      insurance: "감가상각누계액",
      financial: "감가상각누계액",
      public: "감가상각누계액",
      government: "감가상각누계액",
      policyBank: "감가상각누계액"
    },
    journalExample: "차) 감가상각비 ××× / 대) 감가상각누계액 ×××",
    relatedConceptTag: "ias16"
  },
  {
    id: "right-of-use-asset",
    name: "사용권자산",
    nameEn: "Right-of-use asset",
    category: "자산",
    standards: ["IFRS16"],
    definition: "리스이용자가 리스기간 동안 기초자산을 사용할 권리를 나타내는 자산.",
    standardDiff: {
      kifrs: "사용권자산",
      general: "리스자산",
      sme: "리스자산",
      bank: "사용권자산",
      insurance: "사용권자산",
      financial: "사용권자산",
      public: "사용권자산",
      government: "사용권자산",
      policyBank: "사용권자산"
    },
    journalExample: "차) 사용권자산 ××× / 대) 리스부채 ×××",
    relatedConceptTag: "ifrs16",
    relatedQuestionTag: "IFRS16"
  },
  {
    id: "intangible-assets",
    name: "무형자산",
    nameEn: "Intangible assets",
    category: "자산",
    standards: ["IAS38"],
    definition: "물리적 실체는 없지만 식별 가능한 비화폐성 자산. 특허권, 상표권, 개발비 등.",
    standardDiff: {
      kifrs: "무형자산",
      general: "무형자산",
      sme: "무형자산",
      bank: "무형자산",
      insurance: "무형자산",
      financial: "무형자산",
      public: "무형자산",
      government: "무형자산",
      policyBank: "무형자산"
    },
    relatedConceptTag: "ias38",
    relatedQuestionTag: "IAS38"
  },
  {
    id: "goodwill",
    name: "영업권",
    nameEn: "Goodwill",
    category: "자산",
    standards: ["IAS36"],
    definition: "사업결합에서 이전대가가 피취득자 순자산 공정가치를 초과하는 금액.",
    standardDiff: {
      kifrs: "영업권",
      general: "영업권",
      sme: "영업권",
      bank: "영업권",
      insurance: "영업권",
      financial: "영업권",
      public: "영업권",
      government: "해당없음",
      policyBank: "영업권"
    },
    relatedConceptTag: "ias36"
  },
  {
    id: "deferred-tax-asset",
    name: "이연법인세자산",
    nameEn: "Deferred tax asset",
    category: "자산",
    standards: ["IAS12"],
    definition: "차감할 일시적차이·이월결손금 등으로 인해 미래에 회수될 법인세 효과.",
    standardDiff: {
      kifrs: "이연법인세자산",
      general: "이연법인세자산",
      sme: "이연법인세자산",
      bank: "이연법인세자산",
      insurance: "이연법인세자산",
      financial: "이연법인세자산",
      public: "이연법인세자산",
      government: "이연법인세자산",
      policyBank: "이연법인세자산"
    },
    relatedConceptTag: "ias12",
    relatedQuestionTag: "IAS12"
  },
  {
    id: "investment-property",
    name: "투자부동산",
    nameEn: "Investment property",
    category: "자산",
    standards: ["공통"],
    definition: "임대수익이나 시세차익을 목적으로 보유하는 부동산.",
    standardDiff: {
      kifrs: "투자부동산",
      general: "투자부동산",
      sme: "투자부동산",
      bank: "투자부동산",
      insurance: "투자부동산",
      financial: "투자부동산",
      public: "투자부동산",
      government: "해당없음",
      policyBank: "투자부동산"
    }
  },
  {
    id: "long-term-loans",
    name: "장기대여금",
    nameEn: "Long-term loans receivable",
    category: "자산",
    standards: ["공통"],
    definition: "회수기간이 1년을 초과하는 대여금.",
    standardDiff: {
      kifrs: "장기대여금",
      general: "장기대여금",
      sme: "장기대여금",
      bank: "장기대출금",
      insurance: "장기대여금",
      financial: "장기대여금",
      public: "장기대여금",
      government: "장기대여금",
      policyBank: "장기대출금"
    }
  },
  {
    id: "impairment-loss-accumulated",
    name: "자산손상누계액",
    nameEn: "Accumulated impairment losses",
    category: "자산",
    standards: ["IAS36"],
    definition: "자산에 대해 누적된 손상차손 총액. 자산 차감 계정.",
    standardDiff: {
      kifrs: "자산손상누계액",
      general: "자산손상누계액",
      sme: "자산손상누계액",
      bank: "자산손상누계액",
      insurance: "자산손상누계액",
      financial: "자산손상누계액",
      public: "자산손상누계액",
      government: "자산손상누계액",
      policyBank: "자산손상누계액"
    },
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
    standardDiff: {
      kifrs: "상각후원가 측정 금융자산",
      general: "해당없음",
      sme: "해당없음",
      bank: "대출채권",
      insurance: "해당없음",
      financial: "해당없음",
      public: "해당없음",
      government: "해당없음",
      policyBank: "대출채권"
    },
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
    standardDiff: {
      kifrs: "금융자산 (측정방법별 구분)",
      general: "단기매매증권/매도가능증권/만기보유증권",
      sme: "동일",
      bank: "매매목적/매도가능/만기보유유가증권",
      insurance: "동일",
      financial: "동일",
      public: "단기/장기투자증권",
      government: "동일",
      policyBank: "매매목적/매도가능/만기보유유가증권"
    },
    relatedConceptTag: "ifrs9"
  },
  {
    id: "reserve-deposits",
    name: "지급준비금",
    nameEn: "Reserve deposits",
    category: "자산",
    standards: ["공통"],
    definition: "은행이 한국은행에 의무적으로 예치해야 하는 지급준비예치금.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "지급준비예치금",
      insurance: "해당없음",
      financial: "해당없음",
      public: "해당없음",
      government: "해당없음",
      policyBank: "지급준비예치금"
    }
  },
  {
    id: "reinsurance-assets",
    name: "재보험자산",
    nameEn: "Reinsurance assets",
    category: "자산",
    standards: ["공통"],
    definition: "보험회사가 재보험계약에 따라 재보험사로부터 수취할 금액.",
    standardDiff: {
      kifrs: "재보험자산",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "재보험자산",
      financial: "해당없음",
      public: "해당없음",
      government: "해당없음",
      policyBank: "해당없음"
    }
  },
  {
    id: "government-infrastructure",
    name: "사회기반시설",
    nameEn: "Infrastructure assets",
    category: "자산",
    standards: ["공통"],
    definition: "국가·지방자치단체가 보유하는 도로, 하천, 댐 등 공공 인프라 자산.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "사회기반시설",
      government: "사회기반시설",
      policyBank: "해당없음"
    }
  },
  {
    id: "heritage-assets",
    name: "문화재·예술품",
    nameEn: "Heritage assets",
    category: "자산",
    standards: ["공통"],
    definition: "국가·지방자치단체가 보유하는 역사적·문화적 가치를 지닌 자산.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "문화재·예술품",
      government: "문화재·예술품",
      policyBank: "해당없음"
    }
  },
  {
    id: "long-term-receivables-public",
    name: "장기미수수익",
    nameEn: "Long-term accrued revenues",
    category: "자산",
    standards: ["공통"],
    definition: "공공기관이 보유하는 회수기간 1년 초과 미수수익.",
    standardDiff: {
      kifrs: "장기매출채권",
      general: "장기미수금",
      sme: "장기미수금",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "장기미수수익",
      government: "장기미수수익",
      policyBank: "해당없음"
    }
  },

  // ================================================================
  // 부채 (Liability)
  // ================================================================

  {
    id: "trade-payables",
    name: "매입채무",
    nameEn: "Trade payables",
    category: "부채",
    standards: ["공통"],
    definition: "일반적 상거래에서 발생한 외상매입금과 지급어음.",
    standardDiff: {
      kifrs: "매입채무",
      general: "매입채무",
      sme: "매입채무",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "매입채무",
      government: "매입채무",
      policyBank: "해당없음"
    }
  },
  {
    id: "lease-liability",
    name: "리스부채",
    nameEn: "Lease liability",
    category: "부채",
    standards: ["IFRS16"],
    definition: "리스 개시일에 리스료 지급 의무의 현재가치로 인식하는 부채.",
    standardDiff: {
      kifrs: "리스부채",
      general: "리스부채",
      sme: "금융리스부채",
      bank: "리스부채",
      insurance: "리스부채",
      financial: "리스부채",
      public: "리스부채",
      government: "리스부채",
      policyBank: "리스부채"
    },
    journalExample: "차) 리스부채 ××× / 차) 이자비용 ××× / 대) 현금 ×××",
    relatedConceptTag: "ifrs16",
    relatedQuestionTag: "IFRS16"
  },
  {
    id: "provision",
    name: "충당부채",
    nameEn: "Provision",
    category: "부채",
    standards: ["IAS37"],
    definition: "지출 시기나 금액이 불확실한 부채. 현재 의무 존재 + 자원 유출 가능성 높을 때 인식.",
    standardDiff: {
      kifrs: "충당부채",
      general: "충당부채",
      sme: "충당부채",
      bank: "충당부채",
      insurance: "충당부채",
      financial: "충당부채",
      public: "충당부채",
      government: "충당부채",
      policyBank: "충당부채"
    },
    relatedConceptTag: "ias37",
    relatedQuestionTag: "IAS37"
  },
  {
    id: "restoration-provision",
    name: "복구충당부채",
    nameEn: "Decommissioning / Restoration provision",
    category: "부채",
    standards: ["IAS37"],
    definition: "자산 철거·원상복구 의무에 대한 충당부채. 미래 지출액의 현재가치로 인식.",
    standardDiff: {
      kifrs: "복구충당부채",
      general: "복구충당부채",
      sme: "복구충당부채",
      bank: "복구충당부채",
      insurance: "복구충당부채",
      financial: "복구충당부채",
      public: "복구충당부채",
      government: "복구충당부채",
      policyBank: "복구충당부채"
    },
    journalExample: "차) 복구원가(자산) ××× / 대) 복구충당부채 ×××",
    relatedConceptTag: "ias37"
  },
  {
    id: "defined-benefit-obligation",
    name: "확정급여채무",
    nameEn: "Defined benefit obligation",
    category: "부채",
    standards: ["IAS19"],
    definition: "확정급여제도에서 종업원에게 지급할 미래 퇴직급여의 현재가치.",
    standardDiff: {
      kifrs: "확정급여채무",
      general: "퇴직급여충당부채",
      sme: "퇴직급여충당부채",
      bank: "확정급여채무",
      insurance: "확정급여채무",
      financial: "확정급여채무",
      public: "확정급여채무",
      government: "퇴직급여충당부채",
      policyBank: "확정급여채무"
    },
    relatedConceptTag: "ias19",
    relatedQuestionTag: "IAS19"
  },
  {
    id: "deferred-tax-liability",
    name: "이연법인세부채",
    nameEn: "Deferred tax liability",
    category: "부채",
    standards: ["IAS12"],
    definition: "가산할 일시적차이로 인해 미래에 납부할 법인세 효과.",
    standardDiff: {
      kifrs: "이연법인세부채",
      general: "이연법인세부채",
      sme: "이연법인세부채",
      bank: "이연법인세부채",
      insurance: "이연법인세부채",
      financial: "이연법인세부채",
      public: "이연법인세부채",
      government: "이연법인세부채",
      policyBank: "이연법인세부채"
    },
    relatedConceptTag: "ias12"
  },
  {
    id: "contract-liability",
    name: "계약부채",
    nameEn: "Contract liability",
    category: "부채",
    standards: ["IFRS15"],
    definition: "고객에게서 받은 대가가 수익 인식액을 초과할 때 발생하는 부채(선수금 성격).",
    standardDiff: {
      kifrs: "계약부채",
      general: "선수금",
      sme: "선수금",
      bank: "해당없음",
      insurance: "선수보험료",
      financial: "해당없음",
      public: "계약부채",
      government: "선수수익",
      policyBank: "해당없음"
    },
    relatedConceptTag: "ifrs15"
  },
  {
    id: "bonds-payable",
    name: "사채",
    nameEn: "Bonds payable",
    category: "부채",
    standards: ["공통"],
    definition: "기업이 자금 조달을 위해 발행한 채무증권.",
    standardDiff: {
      kifrs: "사채",
      general: "사채",
      sme: "사채",
      bank: "발행사채",
      insurance: "발행사채",
      financial: "발행사채",
      public: "사채",
      government: "국채/지방채",
      policyBank: "발행사채"
    }
  },
  {
    id: "deposits-received",
    name: "예수금",
    nameEn: "Deposits received / Customer deposits",
    category: "부채",
    standards: ["공통"],
    definition: "은행이 고객으로부터 수취한 예금. 요구불예금·저축성예금 포함.",
    standardDiff: {
      kifrs: "기타금융부채",
      general: "예수금",
      sme: "예수금",
      bank: "예수부채",
      insurance: "해당없음",
      financial: "해당없음",
      public: "예수금",
      government: "예수금",
      policyBank: "예수부채"
    }
  },
  {
    id: "borrowings",
    name: "차입금",
    nameEn: "Borrowings",
    category: "부채",
    standards: ["공통"],
    definition: "금융기관 등으로부터 차입한 자금.",
    standardDiff: {
      kifrs: "차입금",
      general: "차입금",
      sme: "차입금",
      bank: "차입부채",
      insurance: "차입금",
      financial: "차입금",
      public: "차입금",
      government: "차입금",
      policyBank: "차입부채"
    }
  },
  {
    id: "insurance-contract-liability",
    name: "보험계약부채",
    nameEn: "Insurance contract liabilities",
    category: "부채",
    standards: ["공통"],
    definition: "보험회사가 보험계약자에게 지급할 보험금 의무의 현재가치.",
    standardDiff: {
      kifrs: "보험계약부채",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "보험계약부채(책임준비금)",
      financial: "해당없음",
      public: "해당없음",
      government: "해당없음",
      policyBank: "해당없음"
    }
  },
  {
    id: "policy-reserve",
    name: "책임준비금",
    nameEn: "Policy reserves",
    category: "부채",
    standards: ["공통"],
    definition: "보험회사가 미래 보험금 지급을 위해 적립하는 준비금.",
    standardDiff: {
      kifrs: "보험계약부채",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "책임준비금",
      financial: "해당없음",
      public: "해당없음",
      government: "해당없음",
      policyBank: "해당없음"
    }
  },
  {
    id: "government-grants-liability",
    name: "정부보조금",
    nameEn: "Government grants",
    category: "부채",
    standards: ["공통"],
    definition: "정부로부터 수령한 보조금. 자산 차감 또는 이연수익으로 처리.",
    standardDiff: {
      kifrs: "이연수익(또는 자산 차감)",
      general: "이연수익",
      sme: "이연수익",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "정부보조금",
      government: "정부보조금",
      policyBank: "정부보조금"
    }
  },
  {
    id: "transfer-payable",
    name: "전출금",
    nameEn: "Transfer payable",
    category: "부채",
    standards: ["공통"],
    definition: "공공기관·정부기관이 다른 기관에 전출할 의무가 있는 금액.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "전출금",
      government: "전출금",
      policyBank: "해당없음"
    }
  },
  {
    id: "accrued-subsidies",
    name: "미지급보조금",
    nameEn: "Accrued subsidies payable",
    category: "부채",
    standards: ["공통"],
    definition: "공공기관이 지급 의무는 발생했으나 아직 지급하지 않은 보조금.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "미지급보조금",
      government: "미지급보조금",
      policyBank: "미지급보조금"
    }
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
    standardDiff: {
      kifrs: "자본금",
      general: "자본금",
      sme: "자본금",
      bank: "자본금",
      insurance: "자본금",
      financial: "자본금",
      public: "자본금",
      government: "기금",
      policyBank: "자본금"
    }
  },
  {
    id: "share-premium",
    name: "주식발행초과금",
    nameEn: "Share premium",
    category: "자본",
    standards: ["공통"],
    definition: "주식 발행 시 액면금액을 초과하여 수령한 금액.",
    standardDiff: {
      kifrs: "주식발행초과금",
      general: "주식발행초과금",
      sme: "주식발행초과금",
      bank: "주식발행초과금",
      insurance: "주식발행초과금",
      financial: "주식발행초과금",
      public: "주식발행초과금",
      government: "해당없음",
      policyBank: "주식발행초과금"
    }
  },
  {
    id: "retained-earnings",
    name: "이익잉여금",
    nameEn: "Retained earnings",
    category: "자본",
    standards: ["공통"],
    definition: "누적된 당기순이익에서 배당 등을 차감한 사내 유보 금액.",
    standardDiff: {
      kifrs: "이익잉여금",
      general: "이익잉여금",
      sme: "이익잉여금",
      bank: "이익잉여금",
      insurance: "이익잉여금",
      financial: "이익잉여금",
      public: "이익잉여금",
      government: "잉여금",
      policyBank: "이익잉여금"
    }
  },
  {
    id: "oci-accumulated",
    name: "기타포괄손익누계액",
    nameEn: "Accumulated other comprehensive income",
    category: "자본",
    standards: ["공통"],
    definition: "당기손익에 포함되지 않고 자본에 직접 반영되는 손익 누계.",
    standardDiff: {
      kifrs: "기타포괄손익누계액",
      general: "기타포괄손익누계액",
      sme: "기타포괄손익누계액",
      bank: "기타포괄손익누계액",
      insurance: "기타포괄손익누계액",
      financial: "기타포괄손익누계액",
      public: "기타포괄손익누계액",
      government: "기타포괄손익누계액",
      policyBank: "기타포괄손익누계액"
    }
  },
  {
    id: "treasury-shares",
    name: "자기주식",
    nameEn: "Treasury shares",
    category: "자본",
    standards: ["공통"],
    definition: "회사가 자신이 발행한 주식을 재취득한 것. 자본 차감 항목.",
    standardDiff: {
      kifrs: "자기주식",
      general: "자기주식",
      sme: "자기주식",
      bank: "자기주식",
      insurance: "자기주식",
      financial: "자기주식",
      public: "자기주식",
      government: "해당없음",
      policyBank: "자기주식"
    }
  },
  {
    id: "government-fund",
    name: "기금",
    nameEn: "Government fund",
    category: "자본",
    standards: ["공통"],
    definition: "정부·공공기관이 특정 목적을 위해 설치·운용하는 자금. 정부회계의 자본 성격.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "기금",
      government: "기금",
      policyBank: "기금"
    }
  },
  {
    id: "capital-grants",
    name: "자본잉여금(정부출연금)",
    nameEn: "Capital grants / Government contribution",
    category: "자본",
    standards: ["공통"],
    definition: "정부·출자자로부터 수령한 출연금·출자금으로 자본 성격의 항목.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "자본잉여금(정부출연금)",
      government: "정부출연금",
      policyBank: "정부출자금"
    }
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
    standardDiff: {
      kifrs: "수익",
      general: "매출액",
      sme: "매출액",
      bank: "이자수익/수수료수익",
      insurance: "보험료수익",
      financial: "수수료수익",
      public: "수익",
      government: "수익",
      policyBank: "이자수익/수수료수익"
    },
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
    standardDiff: {
      kifrs: "이자수익",
      general: "이자수익",
      sme: "이자수익",
      bank: "이자수익",
      insurance: "이자수익",
      financial: "이자수익",
      public: "이자수익",
      government: "이자수익",
      policyBank: "이자수익"
    }
  },
  {
    id: "fee-commission-income",
    name: "수수료수익",
    nameEn: "Fee and commission income",
    category: "수익",
    standards: ["공통"],
    definition: "금융서비스 제공 대가로 수취하는 수수료.",
    standardDiff: {
      kifrs: "수수료수익",
      general: "수수료수익",
      sme: "수수료수익",
      bank: "수수료수익",
      insurance: "수수료수익",
      financial: "수수료수익",
      public: "수수료수익",
      government: "수수료수익",
      policyBank: "수수료수익"
    }
  },
  {
    id: "premium-income",
    name: "보험료수익",
    nameEn: "Premium income",
    category: "수익",
    standards: ["공통"],
    definition: "보험회사가 보험계약자로부터 수취하는 보험료.",
    standardDiff: {
      kifrs: "보험료수익",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "보험료수익",
      financial: "해당없음",
      public: "해당없음",
      government: "해당없음",
      policyBank: "해당없음"
    }
  },
  {
    id: "government-subsidy-income",
    name: "정부보조금수익",
    nameEn: "Government grant income",
    category: "수익",
    standards: ["공통"],
    definition: "정부로부터 수령한 보조금 중 수익으로 인식하는 금액.",
    standardDiff: {
      kifrs: "기타수익",
      general: "기타수익",
      sme: "기타수익",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "정부보조금수익",
      government: "정부보조금수익",
      policyBank: "정부보조금수익"
    }
  },
  {
    id: "gain-on-disposal-ppe",
    name: "유형자산처분이익",
    nameEn: "Gain on disposal of PPE",
    category: "수익",
    standards: ["IAS16"],
    definition: "유형자산 처분 시 처분금액이 장부금액을 초과하는 이익.",
    standardDiff: {
      kifrs: "유형자산처분이익",
      general: "유형자산처분이익",
      sme: "유형자산처분이익",
      bank: "유형자산처분이익",
      insurance: "유형자산처분이익",
      financial: "유형자산처분이익",
      public: "유형자산처분이익",
      government: "유형자산처분이익",
      policyBank: "유형자산처분이익"
    },
    relatedConceptTag: "ias16"
  },
  {
    id: "reversal-impairment",
    name: "손상차손환입",
    nameEn: "Reversal of impairment loss",
    category: "수익",
    standards: ["IAS36"],
    definition: "이전에 인식한 손상차손이 회복될 때 인식하는 이익.",
    standardDiff: {
      kifrs: "손상차손환입",
      general: "손상차손환입",
      sme: "손상차손환입",
      bank: "손상차손환입",
      insurance: "손상차손환입",
      financial: "손상차손환입",
      public: "손상차손환입",
      government: "손상차손환입",
      policyBank: "손상차손환입"
    },
    relatedConceptTag: "ias36"
  },
  {
    id: "transfer-income",
    name: "전입금",
    nameEn: "Transfer income",
    category: "수익",
    standards: ["공통"],
    definition: "공공기관·정부기관이 다른 기관으로부터 이전받은 자금.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "전입금",
      government: "전입금",
      policyBank: "전입금"
    }
  },
  {
    id: "dividend-income",
    name: "배당금수익",
    nameEn: "Dividend income",
    category: "수익",
    standards: ["공통"],
    definition: "투자한 주식에서 발생하는 배당금 수입.",
    standardDiff: {
      kifrs: "배당금수익",
      general: "배당금수익",
      sme: "배당금수익",
      bank: "배당금수익",
      insurance: "배당금수익",
      financial: "배당금수익",
      public: "배당금수익",
      government: "배당금수익",
      policyBank: "배당금수익"
    }
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
    standardDiff: {
      kifrs: "매출원가",
      general: "매출원가",
      sme: "매출원가",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "사업비용",
      government: "프로그램순원가",
      policyBank: "해당없음"
    },
    relatedConceptTag: "ias2"
  },
  {
    id: "depreciation",
    name: "감가상각비",
    nameEn: "Depreciation expense",
    category: "비용",
    standards: ["IAS16"],
    definition: "유형자산 취득원가를 내용연수에 걸쳐 체계적으로 배분하는 금액.",
    standardDiff: {
      kifrs: "감가상각비",
      general: "감가상각비",
      sme: "감가상각비",
      bank: "감가상각비",
      insurance: "감가상각비",
      financial: "감가상각비",
      public: "감가상각비",
      government: "감가상각비",
      policyBank: "감가상각비"
    },
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
    standardDiff: {
      kifrs: "무형자산상각비",
      general: "무형자산상각비",
      sme: "무형자산상각비",
      bank: "무형자산상각비",
      insurance: "무형자산상각비",
      financial: "무형자산상각비",
      public: "무형자산상각비",
      government: "무형자산상각비",
      policyBank: "무형자산상각비"
    },
    relatedConceptTag: "ias38"
  },
  {
    id: "interest-expense",
    name: "이자비용",
    nameEn: "Interest expense",
    category: "비용",
    standards: ["공통"],
    definition: "차입금, 사채, 리스부채, 충당부채 등에서 발생하는 이자 비용.",
    standardDiff: {
      kifrs: "이자비용",
      general: "이자비용",
      sme: "이자비용",
      bank: "이자비용",
      insurance: "이자비용",
      financial: "이자비용",
      public: "이자비용",
      government: "이자비용",
      policyBank: "이자비용"
    }
  },
  {
    id: "bad-debt-expense",
    name: "대손상각비",
    nameEn: "Credit loss expense / Bad debt expense",
    category: "비용",
    standards: ["IFRS9"],
    definition: "매출채권·대출채권 등의 기대신용손실(ECL)로 인식하는 비용.",
    standardDiff: {
      kifrs: "대손상각비",
      general: "대손상각비",
      sme: "대손상각비",
      bank: "대손상각비",
      insurance: "대손상각비",
      financial: "대손상각비",
      public: "대손상각비",
      government: "대손상각비",
      policyBank: "대손상각비"
    },
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
    standardDiff: {
      kifrs: "손상차손",
      general: "손상차손",
      sme: "손상차손",
      bank: "손상차손",
      insurance: "손상차손",
      financial: "손상차손",
      public: "손상차손",
      government: "손상차손",
      policyBank: "손상차손"
    },
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
    standardDiff: {
      kifrs: "퇴직급여",
      general: "퇴직급여",
      sme: "퇴직급여",
      bank: "퇴직급여",
      insurance: "퇴직급여",
      financial: "퇴직급여",
      public: "퇴직급여",
      government: "퇴직급여",
      policyBank: "퇴직급여"
    },
    relatedConceptTag: "ias19"
  },
  {
    id: "service-cost",
    name: "당기근무원가",
    nameEn: "Current service cost",
    category: "비용",
    standards: ["IAS19"],
    definition: "종업원의 당기 근무에 대해 증가한 확정급여채무의 현재가치.",
    standardDiff: {
      kifrs: "당기근무원가",
      general: "퇴직급여(근무원가)",
      sme: "퇴직급여",
      bank: "당기근무원가",
      insurance: "당기근무원가",
      financial: "당기근무원가",
      public: "당기근무원가",
      government: "퇴직급여",
      policyBank: "당기근무원가"
    },
    relatedConceptTag: "ias19"
  },
  {
    id: "income-tax-expense",
    name: "법인세비용",
    nameEn: "Income tax expense",
    category: "비용",
    standards: ["IAS12"],
    definition: "당기법인세와 이연법인세 변동액의 합계.",
    standardDiff: {
      kifrs: "법인세비용",
      general: "법인세비용",
      sme: "법인세비용",
      bank: "법인세비용",
      insurance: "법인세비용",
      financial: "법인세비용",
      public: "법인세비용",
      government: "해당없음(비과세)",
      policyBank: "법인세비용"
    },
    relatedConceptTag: "ias12"
  },
  {
    id: "provision-expense",
    name: "충당부채전입액",
    nameEn: "Provision expense",
    category: "비용",
    standards: ["IAS37"],
    definition: "충당부채를 신규 설정하거나 추가 적립할 때 인식하는 비용.",
    standardDiff: {
      kifrs: "충당부채전입액",
      general: "충당부채전입액",
      sme: "충당부채전입액",
      bank: "충당부채전입액",
      insurance: "충당부채전입액",
      financial: "충당부채전입액",
      public: "충당부채전입액",
      government: "충당부채전입액",
      policyBank: "충당부채전입액"
    },
    relatedConceptTag: "ias37"
  },
  {
    id: "interest-expense-lease",
    name: "리스이자비용",
    nameEn: "Interest expense on lease liability",
    category: "비용",
    standards: ["IFRS16"],
    definition: "리스부채에 대해 유효이자율법으로 인식하는 이자비용.",
    standardDiff: {
      kifrs: "이자비용",
      general: "이자비용",
      sme: "이자비용",
      bank: "이자비용",
      insurance: "이자비용",
      financial: "이자비용",
      public: "이자비용",
      government: "이자비용",
      policyBank: "이자비용"
    },
    relatedConceptTag: "ifrs16"
  },
  {
    id: "unwinding-discount",
    name: "이자전입액(충당부채 할인액 상각)",
    nameEn: "Unwinding of discount",
    category: "비용",
    standards: ["IAS37"],
    definition: "충당부채 현재가치 할인으로 인한 기간 경과에 따른 이자비용 성격의 비용.",
    standardDiff: {
      kifrs: "이자비용",
      general: "이자비용",
      sme: "이자비용",
      bank: "이자비용",
      insurance: "이자비용",
      financial: "이자비용",
      public: "이자비용",
      government: "이자비용",
      policyBank: "이자비용"
    },
    relatedConceptTag: "ias37"
  },
  {
    id: "transfer-expense",
    name: "전출금비용",
    nameEn: "Transfer expense",
    category: "비용",
    standards: ["공통"],
    definition: "공공기관이 다른 기관에 이전하는 지출.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "전출금",
      government: "전출금",
      policyBank: "전출금"
    }
  },
  {
    id: "subsidy-expense",
    name: "보조금비용",
    nameEn: "Subsidy expense",
    category: "비용",
    standards: ["공통"],
    definition: "공공기관·정책금융기관이 지급하는 보조금 또는 출연금.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "보조금비용",
      government: "보조금비용",
      policyBank: "출연금비용"
    }
  },
  {
    id: "program-cost",
    name: "프로그램순원가",
    nameEn: "Net program cost",
    category: "비용",
    standards: ["공통"],
    definition: "정부회계에서 특정 프로그램(정책사업) 수행에 소요된 순비용.",
    standardDiff: {
      kifrs: "해당없음",
      general: "해당없음",
      sme: "해당없음",
      bank: "해당없음",
      insurance: "해당없음",
      financial: "해당없음",
      public: "사업비용",
      government: "프로그램순원가",
      policyBank: "해당없음"
    }
  },
  {
    id: "credit-loss-bank",
    name: "대손비용(은행)",
    nameEn: "Credit loss expense (bank)",
    category: "비용",
    standards: ["IFRS9"],
    definition: "은행·정책금융기관의 대출채권에 대한 기대신용손실 인식 비용.",
    standardDiff: {
      kifrs: "대손상각비",
      general: "해당없음",
      sme: "해당없음",
      bank: "대손상각비",
      insurance: "해당없음",
      financial: "해당없음",
      public: "해당없음",
      government: "해당없음",
      policyBank: "대손상각비"
    },
    relatedConceptTag: "ifrs9"
  },

  // --- 당좌자산 ---
  { id: "ordinary-deposit", name: "보통예금", nameEn: "Ordinary deposit", category: "자산", standards: ["공통"], definition: "은행에 예치한 수시 입출금 가능한 예금.", standardDiff: { kifrs: "보통예금" } },
  { id: "current-deposit", name: "당좌예금", nameEn: "Current account", category: "자산", standards: ["공통"], definition: "수표·어음 발행을 위해 은행과 당좌거래계약을 맺고 예치한 예금.", standardDiff: { kifrs: "당좌예금" } },
  { id: "petty-cash", name: "소액현금", nameEn: "Petty cash", category: "자산", standards: ["공통"], definition: "소액 지출을 위해 별도로 관리하는 현금 자금.", standardDiff: { kifrs: "소액현금" } },
  { id: "notes-receivable", name: "받을어음", nameEn: "Notes receivable", category: "자산", standards: ["공통"], definition: "상거래에서 수취한 약속어음·환어음.", standardDiff: { kifrs: "받을어음" } },
  { id: "accrued-income", name: "미수수익", nameEn: "Accrued income", category: "자산", standards: ["공통"], definition: "수익은 발생했으나 아직 수취하지 않은 금액.", standardDiff: { kifrs: "미수수익" } },
  { id: "other-receivables", name: "미수금", nameEn: "Other receivables", category: "자산", standards: ["공통"], definition: "일반적 상거래 이외에서 발생한 미수채권.", standardDiff: { kifrs: "미수금" } },
  { id: "advance-payments", name: "선급금", nameEn: "Advance payments", category: "자산", standards: ["공통"], definition: "재화·용역 수취 전 미리 지급한 금액.", standardDiff: { kifrs: "선급금" } },
  { id: "vat-receivable", name: "부가세대급금", nameEn: "VAT receivable", category: "자산", standards: ["공통"], definition: "매입 시 부담한 부가가치세로 환급 대상인 금액.", standardDiff: { kifrs: "부가세대급금" } },
  { id: "suspense-payments", name: "가지급금", nameEn: "Suspense payments", category: "자산", standards: ["공통"], definition: "지출은 했으나 계정과목이 확정되지 않은 임시 자산 계정.", standardDiff: { kifrs: "가지급금" } },
  { id: "deposits-paid", name: "임차보증금", nameEn: "Lease deposit paid", category: "자산", standards: ["공통"], definition: "부동산 임차 시 임대인에게 지급한 보증금.", standardDiff: { kifrs: "임차보증금" } },
  { id: "long-term-deposits", name: "장기금융상품", nameEn: "Long-term financial instruments", category: "자산", standards: ["공통"], definition: "만기가 1년을 초과하는 정기예금·적금 등.", standardDiff: { kifrs: "장기금융상품" } },
  { id: "land", name: "토지", nameEn: "Land", category: "자산", standards: ["IAS16"], definition: "영업 목적으로 보유하는 토지. 감가상각 대상 아님.", standardDiff: { kifrs: "토지" }, relatedConceptTag: "ias16" },
  { id: "buildings", name: "건물", nameEn: "Buildings", category: "자산", standards: ["IAS16"], definition: "영업 목적으로 보유하는 건물 및 구축물.", standardDiff: { kifrs: "건물" }, relatedConceptTag: "ias16" },
  { id: "machinery", name: "기계장치", nameEn: "Machinery and equipment", category: "자산", standards: ["IAS16"], definition: "제조·생산에 사용하는 기계·장치류.", standardDiff: { kifrs: "기계장치" }, relatedConceptTag: "ias16" },
  { id: "vehicles", name: "차량운반구", nameEn: "Vehicles", category: "자산", standards: ["IAS16"], definition: "영업용 자동차·트럭 등 운반 수단.", standardDiff: { kifrs: "차량운반구" }, relatedConceptTag: "ias16" },
  { id: "tools-fixtures", name: "비품", nameEn: "Furniture and fixtures", category: "자산", standards: ["IAS16"], definition: "사무용 가구, 집기, 전산기기 등.", standardDiff: { kifrs: "비품" }, relatedConceptTag: "ias16" },
  { id: "construction-in-progress", name: "건설중인자산", nameEn: "Construction in progress", category: "자산", standards: ["IAS16"], definition: "완공 전 건설 중인 유형자산. 완공 시 해당 자산으로 대체.", standardDiff: { kifrs: "건설중인자산" }, relatedConceptTag: "ias16" },
  { id: "development-costs", name: "개발비", nameEn: "Development costs", category: "자산", standards: ["IAS38"], definition: "IAS38 인식 요건을 충족하는 개발 단계 지출. 무형자산으로 자본화.", standardDiff: { kifrs: "개발비" }, relatedConceptTag: "ias38" },
  { id: "software", name: "소프트웨어", nameEn: "Software", category: "자산", standards: ["IAS38"], definition: "구입하거나 개발한 소프트웨어 자산.", standardDiff: { kifrs: "소프트웨어" }, relatedConceptTag: "ias38" },
  { id: "patents", name: "특허권", nameEn: "Patents", category: "자산", standards: ["IAS38"], definition: "발명에 대한 독점적 사용 권리.", standardDiff: { kifrs: "특허권" }, relatedConceptTag: "ias38" },
  { id: "franchise", name: "영업권(프랜차이즈)", nameEn: "Franchise rights", category: "자산", standards: ["IAS38"], definition: "가맹계약에 따른 영업 권리.", standardDiff: { kifrs: "프랜차이즈" }, relatedConceptTag: "ias38" },
  { id: "equity-method-investments", name: "지분법적용투자주식", nameEn: "Equity method investments", category: "자산", standards: ["공통"], definition: "피투자회사에 유의적 영향력을 행사할 수 있는 주식. 지분법으로 평가.", standardDiff: { kifrs: "지분법적용투자주식", general: "지분법적용투자주식", bank: "지분법적용투자주식" } },
  { id: "subsidiary-investments", name: "종속기업투자주식", nameEn: "Investment in subsidiaries", category: "자산", standards: ["공통"], definition: "지배력을 보유한 종속기업에 대한 투자 주식.", standardDiff: { kifrs: "종속기업투자주식" } },
  // --- 부채 ---
  { id: "notes-payable", name: "지급어음", nameEn: "Notes payable", category: "부채", standards: ["공통"], definition: "상거래에서 발행한 약속어음.", standardDiff: { kifrs: "지급어음" } },
  { id: "accrued-expenses", name: "미지급비용", nameEn: "Accrued expenses", category: "부채", standards: ["공통"], definition: "비용은 발생했으나 아직 지급하지 않은 금액.", standardDiff: { kifrs: "미지급비용" } },
  { id: "other-payables", name: "미지급금", nameEn: "Other payables", category: "부채", standards: ["공통"], definition: "일반적 상거래 이외에서 발생한 미지급채무.", standardDiff: { kifrs: "미지급금" } },
  { id: "advance-receipts", name: "선수금", nameEn: "Advance receipts", category: "부채", standards: ["공통"], definition: "재화·용역 제공 전 미리 수취한 금액.", standardDiff: { kifrs: "선수금", bank: "해당없음" } },
  { id: "unearned-revenue", name: "선수수익", nameEn: "Unearned revenue / Deferred revenue", category: "부채", standards: ["공통"], definition: "이미 수취했으나 아직 수익으로 인식하지 않은 금액.", standardDiff: { kifrs: "선수수익" } },
  { id: "vat-payable", name: "부가세예수금", nameEn: "VAT payable", category: "부채", standards: ["공통"], definition: "매출 시 고객으로부터 수취한 부가가치세 납부 의무.", standardDiff: { kifrs: "부가세예수금" } },
  { id: "withholding-tax", name: "예수금(원천징수)", nameEn: "Withholding tax payable", category: "부채", standards: ["공통"], definition: "종업원 급여 등에서 원천징수한 세금 납부 의무.", standardDiff: { kifrs: "예수금" } },
  { id: "suspense-receipts", name: "가수금", nameEn: "Suspense receipts", category: "부채", standards: ["공통"], definition: "수취는 했으나 계정과목이 확정되지 않은 임시 부채 계정.", standardDiff: { kifrs: "가수금" } },
  { id: "deposits-received-security", name: "임대보증금", nameEn: "Security deposits received", category: "부채", standards: ["공통"], definition: "부동산 임대 시 임차인으로부터 수취한 보증금.", standardDiff: { kifrs: "임대보증금" } },
  { id: "current-portion-lt-debt", name: "유동성장기부채", nameEn: "Current portion of long-term debt", category: "부채", standards: ["공통"], definition: "장기차입금 중 1년 이내 만기 도래 부분.", standardDiff: { kifrs: "유동성장기부채" } },
  { id: "income-tax-payable", name: "미지급법인세", nameEn: "Income tax payable", category: "부채", standards: ["공통"], definition: "당기 법인세 중 아직 납부하지 않은 금액.", standardDiff: { kifrs: "미지급법인세" } },
  { id: "dividends-payable", name: "미지급배당금", nameEn: "Dividends payable", category: "부채", standards: ["공통"], definition: "주주총회 결의 후 아직 지급하지 않은 배당금.", standardDiff: { kifrs: "미지급배당금" } },
  // --- 자본 ---
  { id: "legal-reserve", name: "이익준비금", nameEn: "Legal reserve", category: "자본", standards: ["공통"], definition: "상법에 따라 배당액의 10% 이상 적립 의무가 있는 법정준비금.", standardDiff: { kifrs: "이익준비금" } },
  { id: "voluntary-reserve", name: "임의적립금", nameEn: "Voluntary reserve", category: "자본", standards: ["공통"], definition: "정관 또는 주주총회 결의로 적립하는 준비금.", standardDiff: { kifrs: "임의적립금" } },
  { id: "capital-adjustment", name: "자본조정", nameEn: "Capital adjustments", category: "자본", standards: ["공통"], definition: "주주와의 자본거래에서 발생하는 자본 가감 항목. 주식할인발행차금 등.", standardDiff: { kifrs: "자본조정" } },
  // --- 수익 ---
  { id: "product-sales", name: "제품매출", nameEn: "Product sales", category: "수익", standards: ["공통"], definition: "제조업에서 생산한 제품의 판매로 발생하는 수익.", standardDiff: { kifrs: "제품매출" } },
  { id: "merchandise-sales", name: "상품매출", nameEn: "Merchandise sales", category: "수익", standards: ["공통"], definition: "구입한 상품을 그대로 판매하여 발생하는 수익.", standardDiff: { kifrs: "상품매출" } },
  { id: "rental-income", name: "임대료수익", nameEn: "Rental income", category: "수익", standards: ["공통"], definition: "부동산·자산 임대로 발생하는 수익.", standardDiff: { kifrs: "임대료수익" } },
  { id: "gain-on-sale-securities", name: "유가증권처분이익", nameEn: "Gain on sale of securities", category: "수익", standards: ["공통"], definition: "유가증권 처분 시 처분금액이 장부금액을 초과하는 이익.", standardDiff: { kifrs: "유가증권처분이익", bank: "유가증권처분이익" } },
  { id: "foreign-exchange-gain", name: "외환차익", nameEn: "Foreign exchange gain", category: "수익", standards: ["공통"], definition: "외화 거래의 결제 시 환율 변동으로 발생하는 이익.", standardDiff: { kifrs: "외환차익" } },
  { id: "misc-income", name: "잡이익", nameEn: "Miscellaneous income", category: "수익", standards: ["공통"], definition: "영업외 소액 이익 항목.", standardDiff: { kifrs: "잡이익" } },
  // --- 비용 ---
  { id: "salaries", name: "급여", nameEn: "Salaries and wages", category: "비용", standards: ["공통"], definition: "종업원에게 지급하는 기본급 및 수당.", standardDiff: { kifrs: "급여" } },
  { id: "welfare-expenses", name: "복리후생비", nameEn: "Employee welfare expenses", category: "비용", standards: ["공통"], definition: "식대, 의료비, 경조사비 등 종업원 복리후생 관련 지출.", standardDiff: { kifrs: "복리후생비" } },
  { id: "advertising", name: "광고선전비", nameEn: "Advertising expense", category: "비용", standards: ["공통"], definition: "제품·서비스 홍보를 위한 광고 지출.", standardDiff: { kifrs: "광고선전비" } },
  { id: "rent-expense", name: "임차료", nameEn: "Rent expense", category: "비용", standards: ["공통"], definition: "단기리스 또는 소액자산 리스에 대한 임차비용 (IFRS16 예외 적용).", standardDiff: { kifrs: "임차료" }, relatedConceptTag: "ifrs16" },
  { id: "travel-expense", name: "여비교통비", nameEn: "Travel expense", category: "비용", standards: ["공통"], definition: "출장·외근에 소요되는 교통비·숙박비 등.", standardDiff: { kifrs: "여비교통비" } },
  { id: "communication", name: "통신비", nameEn: "Communication expense", category: "비용", standards: ["공통"], definition: "전화·인터넷 등 통신 관련 비용.", standardDiff: { kifrs: "통신비" } },
  { id: "utilities", name: "수도광열비", nameEn: "Utilities expense", category: "비용", standards: ["공통"], definition: "전기·수도·가스 등 공과금.", standardDiff: { kifrs: "수도광열비" } },
  { id: "supplies", name: "소모품비", nameEn: "Supplies expense", category: "비용", standards: ["공통"], definition: "사무용품·소모성 자재 등 단기 소모 비용.", standardDiff: { kifrs: "소모품비" } },
  { id: "repairs", name: "수선비", nameEn: "Repairs and maintenance", category: "비용", standards: ["공통"], definition: "자산의 현상 유지를 위한 수리·보수 비용.", standardDiff: { kifrs: "수선비" } },
  { id: "insurance-expense", name: "보험료", nameEn: "Insurance expense", category: "비용", standards: ["공통"], definition: "화재보험·자동차보험 등 보험 납입액.", standardDiff: { kifrs: "보험료" } },
  { id: "taxes-dues", name: "세금과공과", nameEn: "Taxes and dues", category: "비용", standards: ["공통"], definition: "재산세·자동차세·협회비 등 세금 및 공과금.", standardDiff: { kifrs: "세금과공과" } },
  { id: "entertainment", name: "접대비", nameEn: "Entertainment expense", category: "비용", standards: ["공통"], definition: "거래처 접대·선물 등 영업 관련 접대 지출.", standardDiff: { kifrs: "접대비" } },
  { id: "research-costs", name: "연구비", nameEn: "Research expense", category: "비용", standards: ["IAS38"], definition: "새로운 지식 획득을 위한 연구 단계 지출. 즉시 비용 처리.", standardDiff: { kifrs: "연구비" }, relatedConceptTag: "ias38" },
  { id: "loss-disposal-ppe", name: "유형자산처분손실", nameEn: "Loss on disposal of PPE", category: "비용", standards: ["IAS16"], definition: "유형자산 처분 시 처분금액이 장부금액에 미달하는 손실.", standardDiff: { kifrs: "유형자산처분손실" }, relatedConceptTag: "ias16" },
  { id: "foreign-exchange-loss", name: "외환차손", nameEn: "Foreign exchange loss", category: "비용", standards: ["공통"], definition: "외화 거래의 결제 시 환율 변동으로 발생하는 손실.", standardDiff: { kifrs: "외환차손" } },
  { id: "misc-expense", name: "잡손실", nameEn: "Miscellaneous loss", category: "비용", standards: ["공통"], definition: "영업외 소액 손실 항목.", standardDiff: { kifrs: "잡손실" } },
  { id: "cost-of-construction", name: "공사원가", nameEn: "Construction costs", category: "비용", standards: ["공통"], definition: "건설업에서 수주한 공사에 소요된 원가.", standardDiff: { kifrs: "공사원가", public: "공사원가", government: "프로그램순원가" } },

]
