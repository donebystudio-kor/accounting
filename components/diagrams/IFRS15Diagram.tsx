export default function IFRS15Diagram() {
  return (
    <svg viewBox="0 0 680 580" className="w-full" role="img" aria-label="IFRS 15 수익인식 5단계 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* Step 1: 계약 식별 */}
      <rect x="240" y="10" width="200" height="40" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="30" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">① 계약 식별</text>
      <line x1="340" y1="50" x2="340" y2="70" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* Step 2: 수행의무 식별 */}
      <rect x="240" y="70" width="200" height="40" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="90" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">② 수행의무 식별</text>
      <line x1="340" y1="110" x2="340" y2="130" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* Step 3: 거래가격 산정 */}
      <rect x="240" y="130" width="200" height="40" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="150" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">③ 거래가격 산정</text>
      <line x1="340" y1="170" x2="340" y2="190" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* Step 4: 거래가격 배분 */}
      <rect x="240" y="190" width="200" height="40" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="210" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">④ 거래가격 배분</text>
      <line x1="340" y1="230" x2="340" y2="250" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* Step 5: 수익 인식 */}
      <rect x="240" y="250" width="200" height="40" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="270" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">⑤ 수익 인식</text>
      <line x1="340" y1="290" x2="340" y2="320" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 통제 이전 시점 판단 */}
      <rect x="200" y="320" width="280" height="44" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="335" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">통제 이전 시점 판단</text>
      <text x="340" y="353" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">한 시점 / 기간에 걸쳐</text>
      {/* 왼쪽: 한 시점 */}
      <line x1="260" y1="364" x2="170" y2="410" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="195" y="382" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">한 시점</text>
      <rect x="70" y="410" width="200" height="44" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="170" y="425" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="13" fontWeight="bold">인도 시점 인식</text>
      <text x="170" y="443" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">통제가 이전되는 시점</text>
      {/* 오른쪽: 기간에 걸쳐 */}
      <line x1="420" y1="364" x2="510" y2="410" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="485" y="382" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">기간에 걸쳐</text>
      <rect x="410" y="410" width="200" height="44" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="510" y="425" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="13" fontWeight="bold">진행률 인식</text>
      <text x="510" y="443" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">투입법 / 산출법</text>
      {/* 하단: 계약부채 / 계약자산 */}
      <line x1="170" y1="454" x2="170" y2="500" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="50" y="500" width="240" height="50" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="170" y="518" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12" fontWeight="bold">계약부채 (선수수익)</text>
      <text x="170" y="537" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">미완료 수행의무에 대해 수취한 대가</text>
      <line x1="510" y1="454" x2="510" y2="500" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="390" y="500" width="240" height="50" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="510" y="518" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12" fontWeight="bold">계약자산 (미청구채권)</text>
      <text x="510" y="537" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">완료했으나 아직 청구하지 않은 대가</text>
    </svg>
  );
}
