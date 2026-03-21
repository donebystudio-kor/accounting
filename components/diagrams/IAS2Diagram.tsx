export default function IAS2Diagram() {
  return (
    <svg viewBox="0 0 680 580" className="w-full" role="img" aria-label="IAS 2 재고자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 취득 */}
      <rect x="240" y="10" width="200" height="40" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="30" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">재고자산 취득</text>
      <line x1="340" y1="50" x2="340" y2="80" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 취득원가 결정 */}
      <rect x="160" y="80" width="360" height="54" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="97" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">취득원가 결정</text>
      <text x="340" y="118" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">개별법 / 선입선출법(FIFO) / 가중평균법</text>
      <line x1="340" y1="134" x2="340" y2="170" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 기말평가 저가법 */}
      <rect x="190" y="170" width="300" height="44" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="185" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">기말평가: 저가법 (LCNRV)</text>
      <text x="340" y="203" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">취득원가 vs 순실현가능가치(NRV) 비교</text>
      {/* 분기 */}
      <line x1="240" y1="214" x2="140" y2="214" stroke="var(--svg-arrow)" />
      <line x1="140" y1="214" x2="140" y2="270" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="155" y="242" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="11">원가 &le; NRV</text>
      <line x1="440" y1="214" x2="540" y2="214" stroke="var(--svg-arrow)" />
      <line x1="540" y1="214" x2="540" y2="270" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="475" y="242" textAnchor="start" dominantBaseline="central" fill="var(--svg-coral)" fontSize="11">원가 &gt; NRV</text>
      {/* 유지 */}
      <rect x="50" y="270" width="180" height="40" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="140" y="283" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12" fontWeight="bold">취득원가 유지</text>
      <text x="140" y="300" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">별도 조정 없음</text>
      {/* 평가손실 */}
      <rect x="440" y="270" width="200" height="44" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="540" y="285" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12" fontWeight="bold">재고자산평가손실</text>
      <text x="540" y="303" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">NRV까지 감액 → 매출원가 가산</text>
      <line x1="540" y1="314" x2="540" y2="350" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* NRV 회복? */}
      <rect x="430" y="350" width="220" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="540" y="370" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12" fontWeight="bold">후속 기간: NRV 회복?</text>
      {/* 회복 분기 */}
      <line x1="470" y1="390" x2="470" y2="440" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="445" y="415" textAnchor="end" dominantBaseline="central" fill="var(--svg-teal)" fontSize="10">Yes</text>
      <line x1="610" y1="390" x2="610" y2="440" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="625" y="415" textAnchor="start" dominantBaseline="central" fill="var(--svg-gray)" fontSize="10">No</text>
      {/* 환입 */}
      <rect x="390" y="440" width="160" height="44" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="470" y="455" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12" fontWeight="bold">평가손실환입</text>
      <text x="470" y="472" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">원래 취득원가 한도 내</text>
      {/* 유지 */}
      <rect x="560" y="440" width="100" height="44" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="610" y="462" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12">유지</text>
      {/* 판매 시 */}
      <line x1="340" y1="310" x2="340" y2="510" stroke="var(--svg-arrow)" strokeDasharray="4 3" />
      <line x1="140" y1="310" x2="140" y2="510" stroke="var(--svg-arrow)" strokeDasharray="4 3" />
      <line x1="140" y1="510" x2="340" y2="510" stroke="var(--svg-arrow)" />
      <line x1="340" y1="510" x2="340" y2="530" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="240" y="500" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="11">판매 시</text>
      <rect x="220" y="530" width="240" height="40" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="340" y="543" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="13" fontWeight="bold">매출원가 인식</text>
      <text x="340" y="560" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">장부금액을 매출원가로 대체</text>
    </svg>
  );
}
