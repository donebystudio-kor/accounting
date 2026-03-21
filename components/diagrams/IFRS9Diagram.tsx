export default function IFRS9Diagram() {
  return (
    <svg viewBox="0 0 680 600" className="w-full" role="img" aria-label="IFRS 9 금융상품 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 금융자산 취득 */}
      <rect x="220" y="10" width="240" height="40" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="30" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">금융자산 취득</text>
      <line x1="340" y1="50" x2="340" y2="80" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* SPPI 테스트 */}
      <rect x="180" y="80" width="320" height="44" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="95" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">① SPPI 테스트</text>
      <text x="340" y="113" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">현금흐름이 원금과 이자만으로 구성?</text>
      {/* SPPI No → FVTPL */}
      <line x1="500" y1="102" x2="600" y2="102" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="550" y="92" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="11">No</text>
      <rect x="600" y="82" width="70" height="40" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="635" y="102" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="11" fontWeight="bold">FVTPL</text>
      {/* SPPI Yes → 사업모형 */}
      <line x1="340" y1="124" x2="340" y2="170" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="355" y="147" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="11">Yes</text>
      <rect x="180" y="170" width="320" height="44" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="185" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">② 사업모형 테스트</text>
      <text x="340" y="203" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">금융자산 관리 목적은?</text>
      {/* 3분기 화살표 */}
      <line x1="230" y1="214" x2="120" y2="214" stroke="var(--svg-arrow)" />
      <line x1="120" y1="214" x2="120" y2="280" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="130" y="247" textAnchor="start" dominantBaseline="central" fill="var(--svg-blue)" fontSize="10">수취 목적</text>
      <line x1="340" y1="214" x2="340" y2="280" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="355" y="247" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="10">수취 + 매도</text>
      <line x1="450" y1="214" x2="560" y2="214" stroke="var(--svg-arrow)" />
      <line x1="560" y1="214" x2="560" y2="280" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="510" y="247" textAnchor="start" dominantBaseline="central" fill="var(--svg-coral)" fontSize="10">그 외</text>
      {/* AC */}
      <rect x="20" y="280" width="200" height="70" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="120" y="298" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="13" fontWeight="bold">상각후원가 (AC)</text>
      <text x="120" y="318" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">유효이자율법 적용</text>
      <text x="120" y="335" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">이자수익 → 당기손익</text>
      {/* FVOCI */}
      <rect x="240" y="280" width="200" height="70" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="340" y="298" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="13" fontWeight="bold">FVOCI</text>
      <text x="340" y="318" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">공정가치 변동 → OCI</text>
      <text x="340" y="335" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">처분 시 재분류(P/L)</text>
      {/* FVTPL (아래) */}
      <rect x="460" y="280" width="200" height="70" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="560" y="298" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="13" fontWeight="bold">FVTPL</text>
      <text x="560" y="318" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">공정가치 변동 → 당기손익</text>
      <text x="560" y="335" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">파생상품, 주식 등</text>
      {/* 손상 연결선 */}
      <line x1="120" y1="350" x2="120" y2="400" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="340" y1="350" x2="340" y2="400" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* ECL 적용 대상 표시 */}
      <rect x="100" y="400" width="40" height="24" rx="4" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="120" y="412" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="9">ECL</text>
      <rect x="320" y="400" width="40" height="24" rx="4" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="340" y="412" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="9">ECL</text>
      {/* 하단: ECL 모형 */}
      <rect x="60" y="460" width="560" height="120" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="480" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="14" fontWeight="bold">기대신용손실(ECL) 모형</text>
      <text x="340" y="500" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">AC, FVOCI 채무상품에 적용 — 3단계 접근법</text>
      {/* 3단계 */}
      <rect x="80" y="515" width="160" height="50" rx="4" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1" />
      <text x="160" y="533" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="11" fontWeight="bold">Stage 1</text>
      <text x="160" y="550" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="9">12개월 ECL</text>
      <rect x="260" y="515" width="160" height="50" rx="4" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1" />
      <text x="340" y="533" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11" fontWeight="bold">Stage 2</text>
      <text x="340" y="550" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="9">전체기간 ECL</text>
      <rect x="440" y="515" width="160" height="50" rx="4" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1" />
      <text x="520" y="533" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="11" fontWeight="bold">Stage 3</text>
      <text x="520" y="550" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="9">전체기간 ECL (손상)</text>
    </svg>
  );
}
