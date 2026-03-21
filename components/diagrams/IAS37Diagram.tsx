export default function IAS37Diagram() {
  return (
    <svg viewBox="0 0 680 700" className="w-full" role="img" aria-label="IAS 37 충당부채 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 잠재적 의무 */}
      <rect x="200" y="10" width="280" height="48" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="15" fontWeight="bold">잠재적 의무 발생</text>
      <line x1="340" y1="58" x2="340" y2="98" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 3가지 인식 요건 */}
      <rect x="140" y="98" width="400" height="80" rx="8" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="118" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">3가지 인식 요건 검토</text>
      <text x="340" y="140" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">① 과거 사건에 의한 현재의무 존재</text>
      <text x="340" y="160" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">② 자원 유출 가능성 50% 초과 ③ 금액의 신뢰성 있는 추정</text>
      <line x1="340" y1="178" x2="340" y2="218" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 모두 충족? */}
      <rect x="200" y="218" width="280" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="242" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">3가지 요건 모두 충족?</text>
      {/* 예 → 충당부채 인식 */}
      <line x1="250" y1="266" x2="170" y2="316" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="195" y="284" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">예</text>
      <rect x="30" y="316" width="280" height="68" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="170" y="336" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">충당부채 인식</text>
      <text x="170" y="358" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">최선의 추정치로 측정</text>
      <text x="170" y="376" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">시간가치 중요 시 현재가치 할인</text>
      {/* 아니오 → 유출 가능성 판단 */}
      <line x1="430" y1="266" x2="520" y2="316" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="490" y="284" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">아니오</text>
      <rect x="390" y="316" width="260" height="48" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="520" y="340" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">유출 가능성 있음?</text>
      {/* 유출 가능성 있음 → 우발부채 주석 */}
      <line x1="455" y1="364" x2="400" y2="414" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="412" y="382" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">있음</text>
      <rect x="250" y="414" width="300" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="432" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">우발부채 — 주석 공시</text>
      <text x="400" y="454" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">인식하지 않고 주석으로 공시</text>
      {/* 유출 희박 → 공시 없음 */}
      <line x1="585" y1="364" x2="610" y2="414" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="615" y="382" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12">희박</text>
      <rect x="560" y="414" width="110" height="56" rx="8" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="615" y="432" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">공시 없음</text>
      <text x="615" y="454" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">유출 가능성 희박</text>
      {/* 구분선 */}
      <line x1="30" y1="506" x2="650" y2="506" stroke="var(--svg-gray)" strokeWidth="0.5" strokeDasharray="4" />
      {/* 하단: 우발자산 */}
      <rect x="120" y="540" width="440" height="56" rx="8" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="340" y="558" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="14" fontWeight="bold">우발자산</text>
      <text x="340" y="580" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">자원 유입이 거의 확실한 경우에만 자산 인식</text>
      {/* 우발자산 상세 */}
      <rect x="60" y="630" width="260" height="56" rx="8" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1" />
      <text x="190" y="648" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">거의 확실 → 자산 인식</text>
      <text x="190" y="670" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">더 이상 우발자산 아님</text>
      <rect x="360" y="630" width="260" height="56" rx="8" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1" />
      <text x="490" y="648" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="13" fontWeight="bold">유입 가능 → 주석 공시만</text>
      <text x="490" y="670" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="12">인식하지 않음</text>
      <line x1="240" y1="596" x2="190" y2="630" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="440" y1="596" x2="490" y2="630" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
    </svg>
  );
}
