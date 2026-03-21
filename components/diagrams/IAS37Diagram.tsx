export default function IAS37Diagram() {
  return (
    <svg viewBox="0 0 680 600" className="w-full" role="img" aria-label="IAS 37 충당부채 흐름도">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="var(--svg-arrow)" />
        </marker>
      </defs>
      {/* 잠재적 의무 */}
      <rect x="220" y="10" width="240" height="40" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="340" y="30" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="13" fontWeight="bold">잠재적 의무 발생</text>
      <line x1="340" y1="50" x2="340" y2="80" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 3가지 인식 요건 */}
      <rect x="160" y="80" width="360" height="70" rx="6" fill="var(--svg-purple-bg)" stroke="var(--svg-purple)" strokeWidth="1.5" />
      <text x="340" y="98" textAnchor="middle" dominantBaseline="central" fill="var(--svg-purple)" fontSize="13" fontWeight="bold">3가지 인식 요건 검토</text>
      <text x="340" y="116" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">① 과거 사건에 의한 현재의무 존재</text>
      <text x="340" y="133" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">② 자원 유출 가능성 50% 초과 ③ 금액의 신뢰성 있는 추정</text>
      <line x1="340" y1="150" x2="340" y2="185" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      {/* 모두 충족? */}
      <rect x="220" y="185" width="240" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="340" y="205" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">3가지 요건 모두 충족?</text>
      {/* 예 → 충당부채 인식 */}
      <line x1="260" y1="225" x2="170" y2="270" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="198" y="242" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">예</text>
      <rect x="40" y="270" width="260" height="60" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1.5" />
      <text x="170" y="287" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="13" fontWeight="bold">충당부채 인식</text>
      <text x="170" y="305" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">최선의 추정치로 측정</text>
      <text x="170" y="321" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">시간가치 중요 시 현재가치 할인</text>
      {/* 아니오 → 유출 가능성 판단 */}
      <line x1="420" y1="225" x2="510" y2="270" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="483" y="242" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">아니오</text>
      <rect x="400" y="270" width="240" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="520" y="290" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="12" fontWeight="bold">유출 가능성 있음?</text>
      {/* 유출 가능성 있음 → 우발부채 주석 */}
      <line x1="460" y1="310" x2="400" y2="360" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="415" y="330" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">있음</text>
      <rect x="270" y="360" width="260" height="44" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1.5" />
      <text x="400" y="375" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="13" fontWeight="bold">우발부채 — 주석 공시</text>
      <text x="400" y="393" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">인식하지 않고 주석으로 공시</text>
      {/* 유출 희박 → 공시 없음 */}
      <line x1="580" y1="310" x2="600" y2="360" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <text x="608" y="330" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11">희박</text>
      <rect x="550" y="360" width="120" height="44" rx="6" fill="var(--svg-gray-bg)" stroke="var(--svg-gray)" strokeWidth="1.5" />
      <text x="610" y="375" textAnchor="middle" dominantBaseline="central" fill="var(--svg-gray)" fontSize="12" fontWeight="bold">공시 없음</text>
      <text x="610" y="393" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">유출 가능성 희박</text>
      {/* 구분선 */}
      <line x1="30" y1="440" x2="650" y2="440" stroke="var(--svg-gray)" strokeWidth="0.5" strokeDasharray="4" />
      {/* 하단: 우발자산 */}
      <rect x="140" y="470" width="400" height="50" rx="6" fill="var(--svg-blue-bg)" stroke="var(--svg-blue)" strokeWidth="1.5" />
      <text x="340" y="488" textAnchor="middle" dominantBaseline="central" fill="var(--svg-blue)" fontSize="13" fontWeight="bold">우발자산</text>
      <text x="340" y="507" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="11">자원 유입이 거의 확실한 경우에만 자산 인식</text>
      {/* 우발자산 상세 */}
      <rect x="80" y="540" width="240" height="40" rx="6" fill="var(--svg-teal-bg)" stroke="var(--svg-teal)" strokeWidth="1" />
      <text x="200" y="553" textAnchor="middle" dominantBaseline="central" fill="var(--svg-teal)" fontSize="11" fontWeight="bold">거의 확실 → 자산 인식</text>
      <text x="200" y="570" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">더 이상 우발자산 아님</text>
      <rect x="360" y="540" width="240" height="40" rx="6" fill="var(--svg-amber-bg)" stroke="var(--svg-amber)" strokeWidth="1" />
      <text x="480" y="553" textAnchor="middle" dominantBaseline="central" fill="var(--svg-amber)" fontSize="11" fontWeight="bold">유입 가능 → 주석 공시만</text>
      <text x="480" y="570" textAnchor="middle" dominantBaseline="central" fill="var(--svg-text)" fontSize="10">인식하지 않음</text>
      <line x1="250" y1="520" x2="200" y2="540" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
      <line x1="430" y1="520" x2="480" y2="540" stroke="var(--svg-arrow)" markerEnd="url(#ah)" />
    </svg>
  );
}
