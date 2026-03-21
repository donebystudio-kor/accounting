export default function IAS2Diagram() {
  return (
    <svg viewBox="0 0 680 680" className="w-full" role="img" aria-label="IAS 2 재고자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 취득 */}
      <rect x="220" y="10" width="240" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">재고자산 취득</text>
      <line x1="340" y1="58" x2="340" y2="98" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 취득원가 결정 */}
      <rect x="140" y="98" width="400" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="116" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">취득원가 결정</text>
      <text x="340" y="138" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">개별법 / 선입선출법(FIFO) / 가중평균법</text>
      <line x1="340" y1="154" x2="340" y2="198" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 기말평가 저가법 */}
      <rect x="160" y="198" width="360" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="216" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">기말평가: 저가법 (LCNRV)</text>
      <text x="340" y="238" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">취득원가 vs 순실현가능가치(NRV) 비교</text>
      {/* 분기 */}
      <line x1="210" y1="254" x2="140" y2="254" stroke="var(--svg-arrow)" />
      <line x1="140" y1="254" x2="140" y2="314" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="152" y="284" textAnchor="start" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">원가 &le; NRV</text>
      <line x1="470" y1="254" x2="540" y2="254" stroke="var(--svg-arrow)" />
      <line x1="540" y1="254" x2="540" y2="314" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="478" y="284" textAnchor="start" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12">원가 &gt; NRV</text>
      {/* 유지 */}
      <rect x="30" y="314" width="220" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="140" y="332" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">취득원가 유지</text>
      <text x="140" y="354" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">별도 조정 없음</text>
      {/* 평가손실 */}
      <rect x="430" y="314" width="220" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="540" y="332" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">재고자산평가손실</text>
      <text x="540" y="354" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">NRV까지 감액 → 매출원가 가산</text>
      <line x1="540" y1="370" x2="540" y2="410" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* NRV 회복? */}
      <rect x="420" y="410" width="240" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="540" y="434" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">후속 기간: NRV 회복?</text>
      {/* 회복 분기 */}
      <line x1="470" y1="458" x2="470" y2="510" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="445" y="484" textAnchor="end" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">Yes</text>
      <line x1="610" y1="458" x2="610" y2="510" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="625" y="484" textAnchor="start" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12">No</text>
      {/* 환입 */}
      <rect x="380" y="510" width="180" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="470" y="528" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">평가손실환입</text>
      <text x="470" y="550" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">원래 취득원가 한도 내</text>
      {/* 유지 */}
      <rect x="570" y="510" width="100" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="620" y="538" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13">유지</text>
      {/* 판매 시 */}
      <line x1="340" y1="370" x2="340" y2="600" stroke="var(--svg-arrow)" strokeDasharray="4 3" />
      <line x1="140" y1="370" x2="140" y2="600" stroke="var(--svg-arrow)" strokeDasharray="4 3" />
      <line x1="140" y1="600" x2="340" y2="600" stroke="var(--svg-arrow)" />
      <line x1="340" y1="600" x2="340" y2="624" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="240" y="590" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12">판매 시</text>
      <rect x="200" y="624" width="280" height="48" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="340" y="640" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">매출원가 인식</text>
      <text x="340" y="660" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">장부금액을 매출원가로 대체</text>
    </svg>
  );
}
