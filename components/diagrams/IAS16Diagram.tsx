export default function IAS16Diagram() {
  return (
    <svg viewBox="0 0 680 620" className="w-full" role="img" aria-label="IAS 16 유형자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 취득 */}
      <rect x="240" y="10" width="200" height="40" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="30" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">유형자산 취득</text>
      <line x1="340" y1="50" x2="340" y2="80" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 최초인식 */}
      <rect x="210" y="80" width="260" height="44" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="95" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">최초 인식: 취득원가</text>
      <text x="340" y="112" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">매입가격 + 직접관련원가 + 복구충당부채</text>
      <line x1="340" y1="124" x2="340" y2="160" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 측정모형 선택 */}
      <rect x="210" y="160" width="260" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="180" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">후속측정 모형 선택</text>
      {/* 분기 화살표 */}
      <line x1="210" y1="180" x2="130" y2="180" stroke="var(--svg-arrow)" />
      <line x1="130" y1="180" x2="130" y2="260" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="140" y="220" textAnchor="start" dominantBaseline="central" fill="var(--svg-blue)" fontSize="11">원가모형</text>
      <line x1="470" y1="180" x2="540" y2="180" stroke="var(--svg-arrow)" />
      <line x1="540" y1="180" x2="540" y2="260" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="550" y="220" textAnchor="start" dominantBaseline="central" fill="var(--svg-purple)" fontSize="11">재평가모형</text>
      {/* 원가모형 */}
      <rect x="20" y="260" width="220" height="44" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="130" y="275" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="13" fontWeight="bold">원가모형</text>
      <text x="130" y="293" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">취득원가 - 감가상각누계액 - 손상차손누계액</text>
      <line x1="130" y1="304" x2="130" y2="340" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="40" y="340" width="180" height="36" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1" />
      <text x="130" y="358" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12">감가상각 인식</text>
      <line x1="130" y1="376" x2="130" y2="410" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 원가모형 손상검사 */}
      <rect x="30" y="410" width="200" height="44" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="130" y="425" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12" fontWeight="bold">손상검사 (IAS 36)</text>
      <text x="130" y="443" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">회수가능액 &lt; 장부금액 → 손상차손</text>
      {/* 재평가모형 */}
      <rect x="430" y="260" width="220" height="44" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="540" y="275" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">재평가모형</text>
      <text x="540" y="293" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">공정가치 - 감가상각누계액 - 손상차손누계액</text>
      <line x1="540" y1="304" x2="540" y2="340" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="430" y="340" width="220" height="36" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="540" y="358" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="11">감가상각 + 공정가치 재평가</text>
      {/* 재평가 분기 */}
      <line x1="470" y1="376" x2="470" y2="420" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="610" y1="376" x2="610" y2="420" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="470" y="400" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="10">증가분</text>
      <text x="610" y="400" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="10">감소분</text>
      {/* 증가분 → OCI */}
      <rect x="390" y="420" width="160" height="44" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="470" y="435" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12" fontWeight="bold">기타포괄손익</text>
      <text x="470" y="452" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">재평가잉여금(자본)</text>
      {/* 감소분 → P/L */}
      <rect x="560" y="420" width="100" height="44" rx="6" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="610" y="435" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12" fontWeight="bold">당기손익</text>
      <text x="610" y="452" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">재평가손실</text>
      {/* 재평가 → 손상검사 */}
      <line x1="540" y1="464" x2="540" y2="510" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="430" y="510" width="220" height="44" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="540" y="525" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12" fontWeight="bold">손상검사 (IAS 36)</text>
      <text x="540" y="543" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">회수가능액 &lt; 장부금액 → 손상차손</text>
      {/* 하단 공식 */}
      <rect x="80" y="570" width="520" height="36" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="340" y="588" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">감가상각 방법: 정액법 / 정률법 / 생산량비례법 — 매 기말 잔존가치·내용연수·방법 재검토</text>
    </svg>
  );
}
