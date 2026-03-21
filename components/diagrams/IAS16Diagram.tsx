export default function IAS16Diagram() {
  return (
    <svg viewBox="0 0 800 1110" className="w-full" role="img" aria-label="IAS 16 유형자산 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 취득 */}
      <rect x="280" y="10" width="240" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="400" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">유형자산 취득</text>
      <line x1="400" y1="58" x2="400" y2="142" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 최초인식 */}
      <rect x="250" y="142" width="300" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="400" y="160" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="14" fontWeight="bold">최초 인식: 취득원가</text>
      <text x="400" y="182" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">매입가격 + 직접관련원가 + 복구충당부채</text>
      <line x1="400" y1="198" x2="400" y2="292" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 측정모형 선택 */}
      <rect x="250" y="292" width="300" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="316" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">후속측정 모형 선택</text>
      {/* 분기 화살표 */}
      <line x1="250" y1="316" x2="100" y2="316" stroke="var(--svg-arrow)" />
      <line x1="100" y1="316" x2="100" y2="454" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="112" y="358" textAnchor="start" dominantBaseline="central" fill="var(--svg-blue)" fontSize="12">원가모형</text>
      <line x1="550" y1="316" x2="620" y2="316" stroke="var(--svg-arrow)" />
      <line x1="620" y1="316" x2="620" y2="454" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="632" y="358" textAnchor="start" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재평가모형</text>
      {/* 원가모형 */}
      <rect x="0" y="454" width="200" height="56" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="100" y="472" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">원가모형</text>
      <text x="100" y="494" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">취득원가 - 감가상각누계액 - 손상차손누계액</text>
      <line x1="100" y1="510" x2="100" y2="604" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="0" y="604" width="200" height="48" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1" />
      <text x="100" y="628" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13">감가상각 인식</text>
      <line x1="100" y1="652" x2="100" y2="742" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 원가모형 손상검사 */}
      <rect x="0" y="742" width="200" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="100" y="763" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">손상검사 (IAS 36)</text>
      <text x="100" y="785" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">회수가능액 &lt; 장부금액 → 손상차손</text>
      {/* 재평가모형 */}
      <rect x="500" y="454" width="240" height="56" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="620" y="472" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">재평가모형</text>
      <text x="620" y="494" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">공정가치 - 감가상각누계액 - 손상차손누계액</text>
      <line x1="620" y1="510" x2="620" y2="604" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="500" y="604" width="240" height="48" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1" />
      <text x="620" y="628" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13">감가상각 + 공정가치 재평가</text>
      {/* 재평가 분기 */}
      <line x1="550" y1="652" x2="550" y2="751" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="690" y1="652" x2="690" y2="751" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="550" y="677" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="12">증가분</text>
      <text x="690" y="677" textAnchor="middle" dominantBaseline="central" fill="var(--svg-coral)" fontSize="12">감소분</text>
      {/* 증가분 → OCI */}
      <rect x="460" y="751" width="180" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="550" y="769" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">기타포괄손익</text>
      <text x="550" y="791" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재평가잉여금(자본)</text>
      {/* 감소분 → P/L */}
      <rect x="650" y="751" width="100" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="700" y="769" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">당기손익</text>
      <text x="700" y="791" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">재평가손실</text>
      {/* 재평가 → 손상검사 */}
      <line x1="620" y1="807" x2="620" y2="910" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <rect x="500" y="910" width="240" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="620" y="928" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">손상검사 (IAS 36)</text>
      <text x="620" y="950" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">회수가능액 &lt; 장부금액 → 손상차손</text>
      {/* 하단 공식 */}
      <rect x="120" y="1015" width="560" height="30" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1" />
      <text x="400" y="1030" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">감가상각 방법: 정액법 / 정률법 / 생산량비례법 — 매 기말 잔존가치·내용연수·방법 재검토</text>
    </svg>
  );
}
