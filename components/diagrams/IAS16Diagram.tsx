export default function IAS16Diagram() {
  return (
    <svg viewBox="0 0 680 720" className="w-full" role="img" aria-label="IAS 16 유형자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 취득 */}
      <rect x="220" y="10" width="240" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">유형자산 취득</text>
      <line x1="340" y1="58" x2="340" y2="98" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 최초인식 */}
      <rect x="190" y="98" width="300" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="116" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">최초 인식: 취득원가</text>
      <text x="340" y="138" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">매입가격 + 직접관련원가 + 복구충당부채</text>
      <line x1="340" y1="154" x2="340" y2="198" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 측정모형 선택 */}
      <rect x="190" y="198" width="300" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="222" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">후속측정 모형 선택</text>
      {/* 분기 화살표 */}
      <line x1="190" y1="222" x2="130" y2="222" stroke="var(--svg-arrow)" />
      <line x1="130" y1="222" x2="130" y2="306" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="142" y="264" textAnchor="start" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12">원가모형</text>
      <line x1="490" y1="222" x2="540" y2="222" stroke="var(--svg-arrow)" />
      <line x1="540" y1="222" x2="540" y2="306" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="552" y="264" textAnchor="start" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재평가모형</text>
      {/* 원가모형 */}
      <rect x="10" y="306" width="240" height="56" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="130" y="324" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">원가모형</text>
      <text x="130" y="346" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">취득원가 - 감가상각누계액 - 손상차손누계액</text>
      <line x1="130" y1="362" x2="130" y2="406" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="30" y="406" width="200" height="48" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1" />
      <text x="130" y="430" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13">감가상각 인식</text>
      <line x1="130" y1="454" x2="130" y2="498" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 원가모형 손상검사 */}
      <rect x="20" y="498" width="220" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="130" y="516" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">손상검사 (IAS 36)</text>
      <text x="130" y="538" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">회수가능액 &lt; 장부금액 → 손상차손</text>
      {/* 재평가모형 */}
      <rect x="420" y="306" width="240" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="540" y="324" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">재평가모형</text>
      <text x="540" y="346" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">공정가치 - 감가상각누계액 - 손상차손누계액</text>
      <line x1="540" y1="362" x2="540" y2="406" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="420" y="406" width="240" height="48" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="540" y="430" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13">감가상각 + 공정가치 재평가</text>
      {/* 재평가 분기 */}
      <line x1="470" y1="454" x2="470" y2="504" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="610" y1="454" x2="610" y2="504" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="470" y="479" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">증가분</text>
      <text x="610" y="479" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12">감소분</text>
      {/* 증가분 → OCI */}
      <rect x="380" y="504" width="180" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="470" y="522" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">기타포괄손익</text>
      <text x="470" y="544" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재평가잉여금(자본)</text>
      {/* 감소분 → P/L */}
      <rect x="570" y="504" width="100" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="620" y="522" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">당기손익</text>
      <text x="620" y="544" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재평가손실</text>
      {/* 재평가 → 손상검사 */}
      <line x1="540" y1="560" x2="540" y2="610" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="420" y="610" width="240" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="540" y="628" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">손상검사 (IAS 36)</text>
      <text x="540" y="650" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">회수가능액 &lt; 장부금액 → 손상차손</text>
      {/* 하단 공식 */}
      <rect x="60" y="680" width="560" height="30" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="340" y="695" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">감가상각 방법: 정액법 / 정률법 / 생산량비례법 — 매 기말 잔존가치·내용연수·방법 재검토</text>
    </svg>
  );
}
