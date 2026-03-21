export default function IFRS16Diagram() {
  return (
    <svg viewBox="0 0 680 520" className="w-full" role="img" aria-label="IFRS 16 리스 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 시작 */}
      <rect x="240" y="10" width="200" height="40" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="30" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">리스 계약 체결</text>
      <line x1="340" y1="50" x2="340" y2="80" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 판단 */}
      <rect x="170" y="80" width="340" height="44" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="95" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12" fontWeight="bold">단기리스(12개월 이하) 또는 소액자산?</text>
      <text x="340" y="112" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">예 / 아니오</text>
      {/* 예 → 간편법 */}
      <line x1="510" y1="102" x2="600" y2="102" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="555" y="92" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">예</text>
      <rect x="600" y="82" width="70" height="40" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="635" y="102" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="11" fontWeight="bold">임차료</text>
      {/* 아니오 → 개시일 */}
      <line x1="340" y1="124" x2="340" y2="160" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="355" y="142" textAnchor="start" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">아니오</text>
      <rect x="130" y="160" width="420" height="50" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="178" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">리스 개시일 — 동시 인식</text>
      <text x="340" y="198" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">사용권자산 = 리스부채 + 초기직접원가 + 복구원가(PV)</text>
      {/* 분기 */}
      <line x1="240" y1="210" x2="240" y2="260" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="440" y1="210" x2="440" y2="260" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 사용권자산 */}
      <rect x="120" y="260" width="240" height="44" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="240" y="275" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="13" fontWeight="bold">사용권자산 (자산)</text>
      <text x="240" y="293" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">매년 감가상각 인식</text>
      <line x1="240" y1="304" x2="240" y2="350" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="140" y="350" width="200" height="40" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1" />
      <text x="240" y="363" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12">감가상각비 (비용)</text>
      <text x="240" y="380" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">리스기간에 걸쳐 상각</text>
      {/* 리스부채 */}
      <rect x="320" y="260" width="240" height="44" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="440" y="275" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="13" fontWeight="bold">리스부채 (부채)</text>
      <text x="440" y="293" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">이자비용 + 원금 상환</text>
      <line x1="440" y1="304" x2="440" y2="350" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="340" y="350" width="200" height="40" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1" />
      <text x="440" y="363" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12">리스료 지급</text>
      <text x="440" y="380" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">이자비용 + 원금 상환</text>
    </svg>
  );
}
