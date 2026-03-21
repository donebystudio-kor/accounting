export default function IAS2Diagram() {
  return (
    <svg viewBox="0 0 800 1047" className="w-full" role="img" aria-label="IAS 2 재고자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 취득 */}
      <rect x="280" y="10" width="240" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="400" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">재고자산 취득</text>
      <line x1="400" y1="58" x2="400" y2="142" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 취득원가 결정 */}
      <rect x="200" y="142" width="400" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="400" y="160" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">취득원가 결정</text>
      <text x="400" y="182" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">개별법 / 선입선출법(FIFO) / 가중평균법</text>
      <line x1="400" y1="198" x2="400" y2="292" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 기말평가 저가법 */}
      <rect x="220" y="292" width="360" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="310" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">기말평가: 저가법 (LCNRV)</text>
      <text x="400" y="332" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">취득원가 vs 순실현가능가치(NRV) 비교</text>
      {/* 분기 */}
      <line x1="270" y1="348" x2="100" y2="348" stroke="var(--svg-arrow)" />
      <line x1="100" y1="348" x2="100" y2="466" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="112" y="378" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">원가 &le; NRV</text>
      <line x1="530" y1="348" x2="620" y2="348" stroke="var(--svg-arrow)" />
      <line x1="620" y1="348" x2="620" y2="466" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="558" y="378" textAnchor="start" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12">원가 &gt; NRV</text>
      {/* 유지 */}
      <rect x="0" y="466" width="200" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="100" y="484" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">취득원가 유지</text>
      <text x="100" y="506" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">별도 조정 없음</text>
      {/* 평가손실 */}
      <rect x="510" y="466" width="220" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="620" y="484" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">재고자산평가손실</text>
      <text x="620" y="506" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">NRV까지 감액 → 매출원가 가산</text>
      <line x1="620" y1="522" x2="620" y2="610" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* NRV 회복? */}
      <rect x="500" y="610" width="240" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="620" y="634" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">후속 기간: NRV 회복?</text>
      {/* 회복 분기 */}
      <line x1="550" y1="658" x2="550" y2="760" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="525" y="684" textAnchor="end" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">Yes</text>
      <line x1="690" y1="658" x2="690" y2="760" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="705" y="684" textAnchor="start" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12">No</text>
      {/* 환입 */}
      <rect x="460" y="760" width="180" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="550" y="778" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">평가손실환입</text>
      <text x="550" y="800" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">원래 취득원가 한도 내</text>
      {/* 유지 */}
      <rect x="650" y="760" width="100" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="700" y="788" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13">유지</text>
      {/* 판매 시 */}
      <line x1="400" y1="522" x2="400" y2="850" stroke="var(--svg-arrow)" strokeDasharray="4 3" />
      <line x1="100" y1="522" x2="100" y2="850" stroke="var(--svg-arrow)" strokeDasharray="4 3" />
      <line x1="100" y1="850" x2="400" y2="850" stroke="var(--svg-arrow)" />
      <line x1="400" y1="850" x2="400" y2="931" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="250" y="840" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12">판매 시</text>
      <rect x="260" y="931" width="280" height="48" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="400" y="947" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">매출원가 인식</text>
      <text x="400" y="967" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">장부금액을 매출원가로 대체</text>
    </svg>
  );
}
