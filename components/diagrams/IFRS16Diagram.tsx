export default function IFRS16Diagram() {
  return (
    <svg viewBox="0 0 800 743" className="w-full" role="img" aria-label="IFRS 16 리스 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 시작 */}
      <rect x="280" y="10" width="240" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="400" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">리스 계약 체결</text>
      <line x1="400" y1="58" x2="400" y2="136" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />

      {/* 판단 */}
      <rect x="210" y="136" width="380" height="52" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="155" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">단기리스(12개월 이하) 또는 소액자산?</text>
      <text x="400" y="175" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">예 / 아니오</text>

      {/* 예 → 간편법 */}
      <line x1="590" y1="163" x2="658" y2="163" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="620" y="151" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">예</text>
      <rect x="660" y="139" width="70" height="48" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="695" y="163" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">임차료</text>

      {/* 아니오 → 개시일 */}
      <line x1="400" y1="189" x2="400" y2="280" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="420" y="211" textAnchor="start" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">아니오</text>

      <rect x="170" y="280" width="460" height="60" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="400" y="302" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">리스 개시일 — 동시 인식</text>
      <text x="400" y="324" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">사용권자산 = 리스부채 + 초기직접원가 + 복구원가(PV)</text>

      {/* 분기 */}
      <line x1="190" y1="340" x2="190" y2="460" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="610" y1="340" x2="610" y2="460" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />

      {/* 사용권자산 */}
      <rect x="60" y="460" width="260" height="56" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="190" y="480" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">사용권자산 (자산)</text>
      <text x="190" y="502" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">매년 감가상각 인식</text>
      <line x1="190" y1="516" x2="190" y2="625" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />

      <rect x="80" y="625" width="220" height="50" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1" />
      <text x="190" y="643" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13">감가상각비 (비용)</text>
      <text x="190" y="663" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">리스기간에 걸쳐 상각</text>

      {/* 리스부채 */}
      <rect x="480" y="460" width="260" height="56" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1.5" />
      <text x="610" y="480" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">리스부채 (부채)</text>
      <text x="610" y="502" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">이자비용 + 원금 상환</text>
      <line x1="610" y1="516" x2="610" y2="625" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />

      <rect x="500" y="625" width="220" height="50" rx="8" fill="var(--svg-coral-bg)" stroke="var(--svg-coral)" strokeWidth="1" />
      <text x="610" y="643" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13">리스료 지급</text>
      <text x="610" y="663" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">이자비용 + 원금 상환</text>
    </svg>
  );
}
