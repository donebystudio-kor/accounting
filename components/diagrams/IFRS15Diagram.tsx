export default function IFRS15Diagram() {
  return (
    <svg viewBox="0 0 680 1024" className="w-full" role="img" aria-label="IFRS 15 수익인식 5단계 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* Step 1: 계약 식별 */}
      <rect x="220" y="10" width="240" height="48" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">① 계약 식별</text>
      <line x1="340" y1="58" x2="340" y2="121" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* Step 2: 수행의무 식별 */}
      <rect x="220" y="121" width="240" height="48" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="145" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">② 수행의무 식별</text>
      <line x1="340" y1="169" x2="340" y2="232" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* Step 3: 거래가격 산정 */}
      <rect x="220" y="232" width="240" height="48" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="256" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">③ 거래가격 산정</text>
      <line x1="340" y1="280" x2="340" y2="343" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* Step 4: 거래가격 배분 */}
      <rect x="220" y="343" width="240" height="48" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="367" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">④ 거래가격 배분</text>
      <line x1="340" y1="391" x2="340" y2="454" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* Step 5: 수익 인식 */}
      <rect x="220" y="454" width="240" height="48" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="478" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">⑤ 수익 인식</text>
      <line x1="340" y1="502" x2="340" y2="586" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 통제 이전 시점 판단 */}
      <rect x="180" y="586" width="320" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="604" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">통제 이전 시점 판단</text>
      <text x="340" y="626" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">한 시점 / 기간에 걸쳐</text>
      {/* 왼쪽: 한 시점 */}
      <line x1="240" y1="642" x2="170" y2="745" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="188" y="662" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">한 시점</text>
      <rect x="50" y="745" width="240" height="56" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="170" y="763" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">인도 시점 인식</text>
      <text x="170" y="785" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">통제가 이전되는 시점</text>
      {/* 오른쪽: 기간에 걸쳐 */}
      <line x1="440" y1="642" x2="510" y2="745" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="492" y="662" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">기간에 걸쳐</text>
      <rect x="390" y="745" width="240" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="510" y="763" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">진행률 인식</text>
      <text x="510" y="785" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">투입법 / 산출법</text>
      {/* 하단: 계약부채 / 계약자산 */}
      <line x1="170" y1="801" x2="170" y2="904" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="30" y="904" width="280" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="170" y="922" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">계약부채 (선수수익)</text>
      <text x="170" y="944" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">미완료 수행의무에 대해 수취한 대가</text>
      <line x1="510" y1="801" x2="510" y2="904" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="370" y="904" width="280" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="510" y="922" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">계약자산 (미청구채권)</text>
      <text x="510" y="944" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">완료했으나 아직 청구하지 않은 대가</text>
    </svg>
  );
}
