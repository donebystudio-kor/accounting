export type Term = {
  id: string
  name: string
  nameEn?: string
  category: "분개·기록" | "평가·측정" | "재무제표" | "자본·이익" | "기타"
  definition: string
  example?: string
  relatedQuestionTag?: string
}

export const terms: Term[] = [

  // ================================================================
  // 분개·기록
  // ================================================================
  { id: "gyesang", name: "계상", nameEn: "Recognition", category: "분개·기록",
    definition: "자산, 부채, 수익, 비용 등을 회계장부에 기록하여 인식하는 것. '비용을 계상하다' = 비용으로 기록하다.",
    example: "감가상각비 100,000원을 계상하였다." },

  { id: "bungae", name: "분개", nameEn: "Journal entry", category: "분개·기록",
    definition: "거래를 차변(왼쪽)과 대변(오른쪽)으로 나누어 기록하는 것. 복식부기의 기본 단위.",
    example: "차) 현금 100,000 / 대) 매출 100,000" },

  { id: "chabyon", name: "차변", nameEn: "Debit", category: "분개·기록",
    definition: "분개의 왼쪽. 자산 증가, 부채 감소, 자본 감소, 비용 발생 시 기록.",
    example: "차) 현금 500,000" },

  { id: "daebyon", name: "대변", nameEn: "Credit", category: "분개·기록",
    definition: "분개의 오른쪽. 자산 감소, 부채 증가, 자본 증가, 수익 발생 시 기록.",
    example: "대) 매출 500,000" },

  { id: "daecheche", name: "대체", nameEn: "Transfer", category: "분개·기록",
    definition: "한 계정에서 다른 계정으로 금액을 이동하는 것.",
    example: "재공품 → 제품으로 대체" },

  { id: "sangge", name: "상계", nameEn: "Offset / Net", category: "분개·기록",
    definition: "자산과 부채, 또는 수익과 비용을 서로 차감하여 순액만 표시하는 것.",
    example: "대손충당금과 외상매출금을 상계하여 순액 표시" },

  { id: "jegak", name: "제각", nameEn: "Write-off", category: "분개·기록",
    definition: "회수 불능으로 확정된 채권을 장부에서 삭제하는 것. 대손 처리라고도 함.",
    example: "외상매출금 300,000원이 대손 확정되어 제각하였다." },

  { id: "hwanip", name: "환입", nameEn: "Reversal", category: "분개·기록",
    definition: "이전에 설정한 충당금이나 비용을 줄여 수익으로 되돌리는 것.",
    example: "대손충당금 100,000원을 환입하였다." },

  { id: "gyeoljeon", name: "결산", nameEn: "Closing / Year-end settlement", category: "분개·기록",
    definition: "회계기간 말에 장부를 정리하고 재무제표를 작성하는 과정.",
    example: "12월 31일 결산 시 감가상각비를 계상한다." },

  { id: "magam", name: "마감", nameEn: "Closing entries", category: "분개·기록",
    definition: "결산 시 수익·비용 계정의 잔액을 손익 계정으로 대체하여 0으로 만드는 것.",
    example: "수익 계정을 차변으로 마감한다." },

  { id: "sojub", name: "소급", nameEn: "Retrospective", category: "분개·기록",
    definition: "회계정책 변경이나 오류 수정을 과거 기간부터 적용하는 방법.",
    example: "중요한 전기 오류는 소급 수정한다." },

  { id: "jeonjin", name: "전진법", nameEn: "Prospective", category: "분개·기록",
    definition: "회계추정 변경을 당기부터 미래에만 적용하는 방법.",
    example: "감가상각 방법 변경은 전진법으로 처리한다." },

  { id: "ibgeum", name: "입금", nameEn: "Receipt", category: "분개·기록",
    definition: "현금이나 예금으로 자금이 들어오는 것.",
    example: "외상매출금 500,000원이 보통예금에 입금되었다." },

  { id: "chulgeum", name: "출금", nameEn: "Payment", category: "분개·기록",
    definition: "현금이나 예금에서 자금이 나가는 것.",
    example: "급여 2,000,000원을 보통예금에서 출금하였다." },

  { id: "nappub", name: "납부", nameEn: "Payment (tax)", category: "분개·기록",
    definition: "세금이나 공과금 등을 해당 기관에 지급하는 것.",
    example: "법인세 500,000원을 납부하였다." },

  // ================================================================
  // 평가·측정
  // ================================================================
  { id: "sangak", name: "상각", nameEn: "Amortization / Depreciation", category: "평가·측정",
    definition: "자산의 가치를 내용연수에 걸쳐 비용으로 배분하는 것. 유형자산은 감가상각, 무형자산은 상각.",
    example: "사채할인발행차금 300,000원을 3년간 상각한다." },

  { id: "gamgasangak", name: "감가상각", nameEn: "Depreciation", category: "평가·측정",
    definition: "유형자산의 취득원가를 내용연수 동안 체계적으로 비용으로 배분하는 것.",
    example: "건물 취득원가 10,000,000원, 내용연수 10년 → 연간 감가상각비 1,000,000원" },

  { id: "songsang", name: "손상", nameEn: "Impairment", category: "평가·측정",
    definition: "자산의 장부금액이 회수가능액을 초과할 때 그 차액을 비용으로 인식하는 것.",
    example: "장부가액 1,000,000원, 회수가능액 700,000원 → 손상차손 300,000원" },

  { id: "jeoga", name: "저가법", nameEn: "Lower of cost or NRV", category: "평가·측정",
    definition: "재고자산을 취득원가와 순실현가능가치 중 낮은 금액으로 평가하는 방법.",
    example: "취득원가 500,000원, 순실현가능가치 430,000원 → 430,000원으로 평가" },

  { id: "gongjeongkachi", name: "공정가치", nameEn: "Fair value", category: "평가·측정",
    definition: "합리적인 거래 당사자 간에 자산이 교환되거나 부채가 결제될 수 있는 가격.",
    example: "FVPL 금융자산은 기말에 공정가치로 평가한다." },

  { id: "jangbugaek", name: "장부가액", nameEn: "Carrying amount / Book value", category: "평가·측정",
    definition: "자산이나 부채가 재무상태표에 기록된 금액. 취득원가에서 감가상각누계액 등을 차감한 값.",
    example: "취득원가 1,000,000원 - 감가상각누계액 400,000원 = 장부가액 600,000원" },

  { id: "sunsilhyeon", name: "순실현가능가치", nameEn: "Net realizable value (NRV)", category: "평가·측정",
    definition: "정상적인 영업과정에서 자산을 판매하여 받을 수 있는 예상 금액에서 판매비용을 차감한 값.",
    example: "예상 판매가 600,000원 - 판매비용 50,000원 = NRV 550,000원" },

  { id: "hoesuganeungaek", name: "회수가능액", nameEn: "Recoverable amount", category: "평가·측정",
    definition: "자산의 순공정가치와 사용가치 중 높은 금액. 손상 검토의 기준.",
    example: "순공정가치 700,000원, 사용가치 800,000원 → 회수가능액 800,000원" },

  { id: "hyeonjaegachi", name: "현재가치", nameEn: "Present value (PV)", category: "평가·측정",
    definition: "미래에 받거나 지급할 금액을 할인율로 할인하여 현재 시점의 가치로 나타낸 것.",
    example: "3년 후 1,000,000원, 할인율 5% → 현재가치 863,838원" },

  { id: "yuhoijaeyul", name: "유효이자율", nameEn: "Effective interest rate", category: "평가·측정",
    definition: "금융상품의 실제 수익률. 액면이자율과 달리 발행가액 기준으로 계산한 이자율.",
    example: "사채 할인발행 시 유효이자율이 액면이자율보다 높다." },

  { id: "gamo", name: "감모", nameEn: "Shrinkage / Loss", category: "평가·측정",
    definition: "재고자산이 보관 중 소멸·분실·파손 등으로 실제 수량이 장부 수량보다 줄어드는 것.",
    example: "재고 감모손실 = 감모수량 × 단가" },

  { id: "pyeongga", name: "평가", nameEn: "Valuation", category: "평가·측정",
    definition: "자산이나 부채를 특정 기준(공정가치, 저가법 등)으로 측정하여 장부에 반영하는 것.",
    example: "기말 재고자산을 저가법으로 평가한다." },

  { id: "harin", name: "할인", nameEn: "Discount", category: "평가·측정",
    definition: "미래 금액을 현재가치로 환산하거나, 채권·사채를 액면보다 낮게 발행하는 것.",
    example: "사채 할인발행: 액면 1,000,000원을 950,000원에 발행" },

  { id: "haljeung", name: "할증", nameEn: "Premium", category: "평가·측정",
    definition: "사채 등을 액면금액보다 높은 가격으로 발행하는 것.",
    example: "사채 할증발행: 액면 1,000,000원을 1,050,000원에 발행" },

  { id: "hwansan", name: "환산", nameEn: "Translation", category: "평가·측정",
    definition: "외화로 표시된 금액을 기능통화(원화)로 변환하는 것. 화폐성 항목은 마감환율 적용.",
    example: "USD 1,000 × 마감환율 1,350원 = 1,350,000원" },

  // ================================================================
  // 재무제표
  // ================================================================
  { id: "balsaengjoui", name: "발생주의", nameEn: "Accrual basis", category: "재무제표",
    definition: "현금 수수와 무관하게 거래가 발생한 시점에 수익과 비용을 인식하는 회계 원칙.",
    example: "미수이자도 발생 시점에 수익으로 인식한다." },

  { id: "hyeongjoui", name: "현금주의", nameEn: "Cash basis", category: "재무제표",
    definition: "실제 현금이 오갈 때 수익과 비용을 인식하는 방법. IFRS에서는 원칙적으로 불허.",
    example: "현금을 받을 때만 수익으로 인식하는 방식" },

  { id: "yudongseonbunryu", name: "유동/비유동 분류", nameEn: "Current/Non-current", category: "재무제표",
    definition: "1년 이내 현금화되거나 결제될 자산·부채는 유동, 그 이상은 비유동으로 분류.",
    example: "만기 1년 이내 차입금 → 유동부채" },

  { id: "bigyo", name: "비교재무제표", nameEn: "Comparative financial statements", category: "재무제표",
    definition: "당기와 전기 수치를 나란히 표시한 재무제표. IFRS에서 원칙적으로 요구.",
    example: "2026년도와 2025년도 재무상태표를 비교 표시" },

  { id: "yeonsokseong", name: "계속기업", nameEn: "Going concern", category: "재무제표",
    definition: "기업이 예측 가능한 미래에 계속 영업활동을 할 것이라는 가정.",
    example: "계속기업 가정 하에 자산을 취득원가 기준으로 평가한다." },

  { id: "jungsanggye", name: "중간재무제표", nameEn: "Interim financial statements", category: "재무제표",
    definition: "회계연도 중간(분기, 반기)에 작성하는 재무제표.",
    example: "상장사는 분기마다 중간재무제표를 공시한다." },

  { id: "juseok", name: "주석", nameEn: "Notes to financial statements", category: "재무제표",
    definition: "재무제표 본문에 표시되지 않은 추가 정보를 설명하는 부분.",
    example: "회계정책, 우발부채, 약정사항 등을 주석으로 공시한다." },

  { id: "gongsi", name: "공시", nameEn: "Disclosure", category: "재무제표",
    definition: "기업이 재무정보를 이해관계자에게 공개하는 것.",
    example: "중요한 우발부채는 주석에 공시해야 한다." },

  { id: "yeonsangi", name: "연결재무제표", nameEn: "Consolidated financial statements", category: "재무제표",
    definition: "지배기업과 종속기업을 하나의 경제적 실체로 보아 작성한 재무제표.",
    example: "내부거래를 제거하고 연결재무제표를 작성한다." },

  { id: "byeoldo", name: "별도재무제표", nameEn: "Separate financial statements", category: "재무제표",
    definition: "지배기업이 종속기업 투자를 원가법·FVPL·지분법 중 하나로 처리한 단독 재무제표.",
    example: "별도재무제표에서 종속기업 투자를 지분법으로 처리한다." },

  { id: "jeopggungsonpil", name: "기타포괄손익", nameEn: "Other comprehensive income (OCI)", category: "재무제표",
    definition: "당기손익에 포함되지 않고 자본에 직접 반영되는 손익. FVOCI 평가손익, 환산차이 등.",
    example: "FVOCI 금융자산 평가이익은 기타포괄손익으로 처리한다." },

  { id: "jaebunsanitae", name: "재무상태표", nameEn: "Statement of financial position", category: "재무제표",
    definition: "특정 시점의 자산, 부채, 자본을 나타내는 재무제표. 구 명칭은 대차대조표.",
    example: "12월 31일 현재의 재무상태표" },

  { id: "sonigye", name: "손익계산서", nameEn: "Income statement", category: "재무제표",
    definition: "일정 기간의 수익과 비용을 나타내는 재무제표. IFRS에서는 포괄손익계산서.",
    example: "1월 1일~12월 31일의 손익계산서" },

  // ================================================================
  // 자본·이익
  // ================================================================
  { id: "ibim", name: "이연", nameEn: "Deferral", category: "자본·이익",
    definition: "수익이나 비용의 인식을 미래로 미루는 것. 선수수익, 선급비용 등.",
    example: "차기 분 임차료 100,000원을 선급비용으로 이연한다." },

  { id: "seongsang", name: "충당", nameEn: "Provision / Allowance", category: "자본·이익",
    definition: "미래에 발생할 것으로 예상되는 손실이나 비용을 미리 계상하는 것.",
    example: "대손충당금, 제품보증충당부채 등" },

  { id: "mipuneobun", name: "미처분이익잉여금", nameEn: "Retained earnings (unappropriated)", category: "자본·이익",
    definition: "당기순이익 중 아직 배당이나 적립금으로 처분되지 않은 잉여금.",
    example: "주주총회 결의 전까지 미처분이익잉여금으로 표시한다." },

  { id: "iwol", name: "이월", nameEn: "Carried forward", category: "자본·이익",
    definition: "당기의 잔액을 다음 기간으로 넘기는 것.",
    example: "이월결손금은 다음 기에 이월된다." },

  { id: "jeokrib", name: "적립", nameEn: "Appropriation / Reserve", category: "자본·이익",
    definition: "이익잉여금의 일부를 특정 목적을 위해 별도로 쌓아두는 것.",
    example: "이익준비금을 법정 한도까지 적립한다." },

  { id: "gasangjari", name: "가득기간", nameEn: "Vesting period", category: "자본·이익",
    definition: "주식선택권(스톡옵션) 등에서 권리가 확정되기까지의 기간.",
    example: "스톡옵션 가득기간 3년 → 3년간 비용 안분 인식" },

  { id: "gamsaja", name: "감자", nameEn: "Capital reduction", category: "자본·이익",
    definition: "회사의 자본금을 줄이는 것. 유상감자(주주에게 환급)와 무상감자(결손 보전)로 구분.",
    example: "무상감자로 자본금 5,000,000원을 줄여 결손금을 보전한다." },

  { id: "jeungja", name: "증자", nameEn: "Capital increase", category: "자본·이익",
    definition: "회사의 자본금을 늘리는 것. 유상증자(신주 발행)와 무상증자(자본잉여금 전환)로 구분.",
    example: "유상증자로 신주 1,000주를 주당 10,000원에 발행한다." },

  { id: "baedan", name: "배당", nameEn: "Dividend", category: "자본·이익",
    definition: "기업이 이익의 일부를 주주에게 분배하는 것. 현금배당과 주식배당으로 구분.",
    example: "주주총회에서 현금배당 1,000,000원을 결의하였다." },

  { id: "jibunbeob", name: "지분법", nameEn: "Equity method", category: "자본·이익",
    definition: "피투자회사의 순자산 변동분을 지분율만큼 투자주식에 반영하는 방법.",
    example: "종속기업 당기순이익 10,000,000원 × 지분율 60% = 지분법이익 6,000,000원" },

  { id: "gyeoljason", name: "결손금", nameEn: "Accumulated deficit", category: "자본·이익",
    definition: "누적된 당기순손실로 인해 이익잉여금이 마이너스가 된 금액.",
    example: "결손금 보전을 위해 자본잉여금을 사용한다." },

  { id: "jagiujik", name: "자기주식", nameEn: "Treasury shares", category: "자본·이익",
    definition: "회사가 발행한 주식을 다시 취득한 것. 자산이 아닌 자본 차감 항목.",
    example: "자기주식 1,000주를 주당 8,000원에 취득하였다." },

  // ================================================================
  // 기타
  // ================================================================
  { id: "balsaeng", name: "발생", nameEn: "Accrual", category: "기타",
    definition: "현금 수수 없이 권리나 의무가 생기는 것. 미수수익, 미지급비용 등.",
    example: "이자수익이 발생하여 미수이자로 계상한다." },

  { id: "insik", name: "인식", nameEn: "Recognition", category: "기타",
    definition: "자산, 부채, 수익, 비용 등의 항목을 재무제표에 포함시키는 것.",
    example: "수행의무 이행 시점에 수익을 인식한다." },

  { id: "chejeochul", name: "제거", nameEn: "Derecognition", category: "기타",
    definition: "자산이나 부채를 재무제표에서 삭제하는 것.",
    example: "진정양도 요건 충족 시 금융자산을 제거한다." },

  { id: "gongsi2", name: "우발부채", nameEn: "Contingent liability", category: "기타",
    definition: "발생 가능성은 있으나 확정되지 않은 잠재적 부채. 충당부채 인식 기준 미충족 시 주석 공시.",
    example: "소송 결과에 따라 발생할 수 있는 손해배상 의무" },

  { id: "jabonjijchul", name: "자본적 지출", nameEn: "Capital expenditure (CapEx)", category: "기타",
    definition: "자산의 가치를 높이거나 내용연수를 연장하는 지출. 자산으로 처리.",
    example: "건물에 엘리베이터 추가 설치 → 자본적 지출" },

  { id: "suibijichul", name: "수익적 지출", nameEn: "Revenue expenditure", category: "기타",
    definition: "자산의 현상 유지를 위한 지출. 당기 비용으로 처리.",
    example: "건물 외벽 페인트 칠 → 수익적 지출" },

  { id: "siljibeob", name: "실질 우선 원칙", nameEn: "Substance over form", category: "기타",
    definition: "법적 형식보다 경제적 실질을 우선하여 회계 처리하는 원칙.",
    example: "리스 계약 형식이지만 실질이 금융리스라면 자산 인식" },

  { id: "junghakpil", name: "중요성", nameEn: "Materiality", category: "기타",
    definition: "정보가 재무제표 이용자의 의사결정에 영향을 미칠 수 있는 정도.",
    example: "중요하지 않은 금액은 별도 공시 없이 처리할 수 있다." },

  { id: "bohyeonseong", name: "보수주의", nameEn: "Conservatism / Prudence", category: "기타",
    definition: "불확실한 상황에서 손실은 빨리, 이익은 늦게 인식하는 원칙.",
    example: "재고자산 저가법 적용이 보수주의의 예" },

  { id: "ilgwanseong", name: "일관성", nameEn: "Consistency", category: "기타",
    definition: "동일한 회계정책을 기간별로 계속 적용하여 비교 가능성을 높이는 원칙.",
    example: "감가상각 방법을 매기 동일하게 적용한다." },

  { id: "suyeongeomu", name: "수행의무", nameEn: "Performance obligation", category: "기타",
    definition: "IFRS15에서 고객에게 재화나 용역을 이전하기로 한 약속.",
    example: "수행의무 이행 시 수익을 인식한다.", relatedQuestionTag: "IFRS15" },

  { id: "gyeyakjasan", name: "계약자산/부채", nameEn: "Contract asset / liability", category: "기타",
    definition: "IFRS15에서 수익 인식액과 청구액의 차이. 수익>청구 → 계약자산, 수익<청구 → 계약부채.",
    example: "누적 인식 수익 500 > 청구액 300 → 계약자산 200", relatedQuestionTag: "IFRS15" },

  { id: "gidaesinyong", name: "기대신용손실", nameEn: "Expected credit loss (ECL)", category: "기타",
    definition: "IFRS9에서 금융자산의 미래 신용 손실 예상액을 미리 충당금으로 인식하는 모형.",
    example: "Stage 1: 12개월 ECL, Stage 2~3: 전체기간 ECL", relatedQuestionTag: "IFRS9" },

  { id: "hejihoege", name: "헤지회계", nameEn: "Hedge accounting", category: "기타",
    definition: "위험 회피 목적의 파생상품과 헤지대상의 손익을 같은 기간에 인식하여 변동성을 줄이는 회계.",
    example: "공정가치 헤지: 파생상품과 헤지대상 모두 당기손익", relatedQuestionTag: "IFRS9" },

  { id: "bokmugiwon", name: "복구충당부채", nameEn: "Decommissioning provision", category: "기타",
    definition: "자산 철거·원상복구 의무에 대해 현재가치로 인식하는 충당부채.",
    example: "발전소 건설 시 해체 의무 → 복구충당부채 인식", relatedQuestionTag: "IAS37" },

  { id: "saengsanwon", name: "원가 3요소", nameEn: "Three elements of cost", category: "기타",
    definition: "제조원가를 구성하는 세 가지 요소: 직접재료비, 직접노무비, 제조간접비.",
    example: "제조원가 = 직접재료비 + 직접노무비 + 제조간접비" },

  { id: "naeyongyeonsu", name: "내용연수", nameEn: "Useful life", category: "기타",
    definition: "자산을 사용할 수 있을 것으로 예상되는 기간.",
    example: "건물 내용연수 30년, 비품 5년" },

  { id: "jansongachi", name: "잔존가치", nameEn: "Residual value", category: "기타",
    definition: "자산의 내용연수 종료 시 예상되는 처분 금액.",
    example: "취득원가 1,000,000원, 잔존가치 100,000원 → 상각 대상액 900,000원" },
]
