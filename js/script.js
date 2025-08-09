document.addEventListener('DOMContentLoaded', function () {
    // --- LANGUAGE DATA (Simulated) ---
    // In a real application, this data would be in separate JSON files (e.g., /lang/ko.json)
    const allTranslations = {
        ko: {
            heroTitle: "팬이 프로듀서가 되는 곳,<br><span class='gradient-text'>당신의 아이돌</span>을 직접 만드세요.",
            heroDesc: "Idol Island는 크리에이터와 팬이 함께 성장하는 Web3 기반 인큐베이팅 플랫폼입니다.<br>AI 기술로 창작의 한계를 넘고, 진정한 소유권을 통해 새로운 엔터테인먼트의 미래를 엽니다.",
            whitepaperBtn: "백서 전문 보기",
            discordBtn: "디스코드 참여하기",
            communityBtn: "커뮤니티 참여",
            mobileCommunityBtn: "커뮤니티 참여",
            problemTitle: "크리에이터 경제의 <span class='gradient-text'>분열된 현실</span>",
            problemDesc: "폭발적인 성장 이면에는 크리에이터의 발목을 잡는 구조적 문제가 존재합니다.",
            problem1Title: "높은 진입 장벽",
            problem1Desc: "수백만 원에 달하는 아바타 제작, 장비 구매 비용이 재능 있는 크리에이터의 시작을 가로막습니다.",
            problem2Title: "불공정한 수익 구조",
            problem2Desc: "소수의 상위 크리에이터가 수익을 독점하며, 대부분은 정당한 보상을 받지 못하고 있습니다.",
            problem3Title: "지속 불가능한 창작",
            problem3Desc: "끊임없는 콘텐츠 생산 압박과 감정 노동은 심각한 번아웃으로 이어져 활동 수명을 단축시킵니다.",
            solutionTitle: "새로운 패러다임",
            solutionDesc: "우리는 기술을 통해 크리에이터에게 힘을 실어주고, 팬을 단순한 소비자에서 '프로듀서'로 만듭니다.",
            solution1Title: "AI 공동 창작 엔진",
            solution1Desc: "스크립트, 음악, 댄스까지. AI가 창작의 부담을 덜어주어 크리에이터는 본질에 집중할 수 있습니다. 번아웃은 줄이고, 창의성은 극대화하세요.",
            solution2Title: "팬-프로듀서 시스템 (I-Stocks)",
            solution2Desc: "단순 후원을 넘어 아이돌의 '주식(NFT)'을 소유하세요. 아이돌의 성장에 직접 투자하고, 발생한 수익을 함께 나누는 진정한 파트너가 될 수 있습니다.",
            solution3Title: "크리에이터 소유 IP",
            solution3Desc: "플랫폼이 아닌, 당신이 IP의 주인입니다. Idol Island에서 탄생한 모든 캐릭터와 콘텐츠의 소유권은 창작자에게 귀속되어 자유로운 활동을 보장합니다.",
            tokenomicsTitle: "단 하나의 토큰, <span class='gradient-text'>$IDOL</span>",
            tokenomicsDesc: "복잡한 이중 토큰 모델의 실패를 교훈 삼아, Idol Island는 $IDOL이라는 단일 유틸리티 토큰으로 지속 가능한 경제를 구축합니다.",
            tokenomics1: "<strong class='text-white'>가치 교환:</strong> I-Stock 구매, NFT 민팅, AI 서비스 이용 등 생태계 내 모든 활동의 기축 통화로 사용됩니다.",
            tokenomics2: "<strong class='text-white'>가치 축적:</strong> 플랫폼 수수료의 일부를 소각하여 토큰의 희소성을 높이고, 스테이커에게는 플랫폼 수익을 분배하여 실질적인 보상을 제공합니다.",
            tokenomics3: "<strong class='text-white'>거버넌스:</strong> $IDOL 보유자는 DAO의 일원으로서 플랫폼의 주요 정책 결정에 직접 참여하여 생태계의 미래를 만들어갑니다.",
            roadmapTitle: "미래를 향한 <span class='gradient-text'>로드맵</span>",
            roadmapDesc: "우리는 명확한 비전과 단계별 실행 계획을 통해 커뮤니티와 함께 성장합니다.",
            roadmap1Title: "Phase 1",
            roadmap1Subtitle: "기반 구축 및 알파",
            roadmap1Desc: "핵심 플랫폼 개발 및 법인 설립, 소수의 '제네시스 크리에이터'와 함께하는 비공개 테스트 진행",
            roadmap2Title: "Phase 2",
            roadmap2Subtitle: "공개 베타 및 토큰 출시",
            roadmap2Desc: "플랫폼 공개 베타 및 $IDOL 토큰 출시(에어드랍), 독립 VTuber 커뮤니티 대상 마케팅 캠페인 시작",
            roadmap3Title: "Phase 3",
            roadmap3Subtitle: "DAO 설립 및 탈중앙화",
            roadmap3Desc: "Idol Island DAO 공식 출범, 커뮤니티 주도의 온체인 거버넌스로 핵심 통제권 점진적 이전",
            roadmap4Title: "Phase 4",
            roadmap4Subtitle: "생태계 확장",
            roadmap4Desc: "DAO 보조금을 통한 3자 개발자 참여, 프로토콜 위에 다양한 도구와 경험이 구축되는 완전한 생태계로 발전",
            footerTitle: "아이돌 문화의 미래, <span class='gradient-text'>함께 만드시겠습니까?</span>",
            footerDesc: "지금 바로 커뮤니티에 참여하여 Idol Island의 첫 번째 프로듀서가 되어보세요.",
            footerBtn: "지금 디스코드 참여하기",
            footerRights: "&copy; 2025 Idol Island. All Rights Reserved.",
            modalTitle: "Idol Island 백서",
            whitepaper: `
                <h2>파트 I: 새로운 크리에이터 패러다임 - 시장 분석 및 기회</h2>
                <h3>섹션 1: 분열된 크리에이터 경제: 파괴적 혁신을 기다리는 시장</h3>
                <p>현대의 디지털 콘텐츠 시장, 특히 버추얼 유튜버(VTuber)와 음악 산업은 폭발적인 성장 이면에 깊은 구조적 문제를 안고 있습니다. 이러한 문제들은 크리에이터의 지속 가능한 활동을 저해하고, 팬과의 관계를 단절시키며, 중앙화된 플랫폼의 가치 독점을 심화시키고 있습니다. Idol Island는 바로 이 분열된 시장의 근본적인 문제점을 진단하고, Web3 기술을 통해 해결책을 제시하고자 합니다.</p>
                <h4>VTuber의 딜레마: 높은 성장률, 더 높은 진입장벽과 마찰</h4>
                <p>VTuber 시장은 전례 없는 속도로 팽창하고 있습니다. 2024년 39억 9천만 달러 규모에서 2033년에는 594억 5천만 달러에 이를 것으로 전망되며, 이는 연평균 성장률(CAGR) 35.03%에 달하는 놀라운 수치입니다.[1] 그러나 이 화려한 성장세의 이면에는 독립 크리에이터들의 생존을 위협하는 심각한 문제들이 자리 잡고 있습니다.</p>
                <ul>
                    <li><strong>과도한 제작 비용 및 기술 장벽:</strong> 새로운 VTuber가 시장에 진입하기 위해서는 상당한 초기 비용을 감당해야 합니다. 아바타 디자인, 모션 캡처 장비, 실시간 렌더링 시스템 구축에 드는 비용은 수백에서 수천 달러에 이르며 [2], 이는 재능 있는 개인의 시장 진입을 가로막는 높은 장벽으로 작용합니다. 실제로 현직 크리에이터의 60%가 높은 제작 비용을 가장 큰 어려움으로 꼽았으며, 기술 관련 지출이 월 운영 예산의 50% 이상을 차지하는 경우도 비일비재합니다.[1]</li>
                    <li><strong>만연한 소득 불평등:</strong> VTuber 경제는 극심한 '부익부 빈익빈' 구조를 보입니다. 1,923명의 VTuber를 대상으로 한 대규모 연구에 따르면, 이들의 월평균 수입은 2,667달러였지만, 소득의 중간값은 고작 127달러에 불과했습니다.[3] 조사 대상 VTuber 중 25%는 유튜브의 후원 기능인 슈퍼챗을 단 한 번도 받지 못한 것으로 나타났습니다.[3] 이는 Hololive(시장 점유율 38%)와 Nijisanji(시장 점유율 30%) 같은 거대 에이전시 소속의 소수 상위 VTuber가 시장의 부를 독점하는 '승자 독식' 구조를 명확히 보여줍니다.[1, 3]</li>
                    <li><strong>번아웃의 만연화:</strong> 관련성을 유지하기 위해 끊임없이 콘텐츠를 생산해야 한다는 압박감은 크리에이터들을 심각한 번아웃으로 내몰고 있습니다.[4] 한 연구에 따르면 VTuber의 평균 활동 수명은 24개월에 불과하며, 소위 '실패'한 VTuber의 경우 19개월로 더욱 짧아집니다.[3] 이는 페르소나를 유지하는 데 따르는 감정 노동과 자신을 더 성공한 동료와 비교하는 데서 오는 정신적 스트레스와 결합하여 문제를 더욱 악화시킵니다.[4]</li>
                    <li><strong>에이전시의 착취 구조:</strong> Hololive나 Nijisanji와 같은 대형 에이전시는 소속 크리에이터에게 자원과 인프라를 제공하지만, 동시에 지적 재산권(IP) 소유권 분쟁이나 불공정한 노동 관행과 같은 착취의 위험을 내포하고 있습니다. 실제 유명 VTuber의 계약 해지 사례는 이러한 위험이 현실임을 증명하며, 이는 보다 공정하고 독립적인 성공 경로에 대한 수요를 창출합니다.[3]</li>
                </ul>
                <p>이러한 문제들은 단순히 새로운 수익화 도구의 부재에서 비롯된 것이 아닙니다. 더 깊은 분석을 통해 보면, 산업의 핵심 문제는 '지속 불가능한 작업 흐름'에 있습니다. 높은 제작 비용 [1], 끊임없는 콘텐츠 생산 압박 [4], 그리고 그로 인한 짧은 활동 수명 [3] 사이에는 명백한 인과 관계가 존재합니다. 단순히 새로운 수익 창출 기회를 제공하는 플랫폼은 오히려 크리에이터에게 더 많은 성과를 내야 한다는 압박을 가중시켜 번아웃을 가속화할 수 있습니다. 따라서 진정으로 필요한 해결책은 콘텐츠 제작 자체의 비용과 노력을 줄여 크리에이터의 경력을 보다 지속 가능하게 만드는 플랫폼입니다. 이는 Idol Island가 단순한 수익화 플랫폼을 넘어, AI 기반 공동 창작 엔진을 핵심 솔루션으로 제시해야 하는 이유입니다.</p>
                <h4>전통 음악 산업의 붕괴된 모델</h4>
                <p>VTuber 산업의 문제점은 전통적인 음악 산업에서 나타나는 구조적 모순과도 유사합니다. Spotify와 같은 스트리밍 플랫폼은 막대한 가치를 창출하면서도 아티스트에게는 극히 일부의 수익만을 분배하고, 불투명한 레이블의 회계 관행은 로열티 흐름을 모호하게 만듭니다.[5] 이러한 역사적 맥락은 투명하고 크리에이터 중심적인 경제 모델의 필요성을 더욱 강화하며, Idol Island가 추구하는 가치와 방향성의 정당성을 뒷받침합니다.</p>
                <h3>섹션 2: Web3 르네상스: 수동적 팬에서 능동적 이해관계자로</h3>
                <p>Web3 기술은 크리에이터와 팬 사이의 관계를 근본적으로 재정의할 잠재력을 가지고 있습니다. 이는 단순한 기술적 유행을 넘어, '소유권 경제(Ownership Economy)'라는 새로운 패러다임을 제시하며 기존의 문제를 해결할 수 있는 핵심적인 도구를 제공합니다.</p>
                <h4>권한 부여를 위한 기술적 도구</h4>
                <p>Web3의 핵심 기술들은 중앙화된 중개자 없이도 신뢰와 가치를 창출하며, 보다 공정하고 새로운 관계를 형성합니다.[6]</p>
                <ul>
                    <li><strong>소유권 및 접근 증명으로서의 NFT:</strong> NFT(대체 불가능 토큰)는 단순한 디지털 수집품을 넘어섭니다. 이는 아이돌의 데뷔곡, 고유한 아바타 스킨, 세계관의 한 조각과 같은 디지털 자산에 대한 검증 가능한 소유권을 의미합니다. 이를 통해 2차 시장에서 거래가 발생할 때마다 원작자에게 자동으로 로열티(통상 5-10%)가 지급되는 시스템을 구축할 수 있으며, 이는 크리에이터에게 지속적인 수익원을 제공합니다.[7]</li>
                    <li><strong>경제적 및 사회적 자본으로서의 팬 토큰:</strong> 팬 토큰은 수동적인 팔로워를 능동적인 이해관계자로 변모시킵니다.[7] 팬 토큰 보유자는 플랫폼의 주요 의사결정에 참여할 수 있는 거버넌스 권한을 갖거나, 독점 콘텐츠에 접근하고, 스트리밍 시청이나 설문 참여와 같은 활동에 대한 보상을 받을 수 있습니다. 이는 팬들이 커뮤니티에 깊이 몰입하고 투자하게 만드는 강력한 동인이 됩니다.[6, 7]</li>
                    <li><strong>커뮤니티 주도 조직으로서의 DAO:</strong> DAO(탈중앙화 자율 조직)는 탈중앙화되고 투명하며 커뮤니티가 주도하는 의사결정 프레임워크를 제공합니다. 이를 통해 권력은 중앙화된 기업에서 사용자 및 크리에이터 커뮤니티로 이동하게 됩니다.[6, 7]</li>
                </ul>
                <h4>패러다임의 전환</h4>
                <p>Web3는 팬과 크리에이터의 관계를 근본적으로 변화시킵니다. 기존 모델에서 팬은 소유권 없이 제한된 방식으로만 수익화에 기여하는 '팔로워'에 불과했습니다. 반면, Web3 모델은 팬을 진정한 디지털 소유권을 가진 '투자한 이해관계자'로 격상시키고 직접적인 경제적 참여를 가능하게 합니다.[7] 이러한 가치 추출 모델에서 참여 생태계로의 전환은 Web3가 약속하는 핵심적인 변화입니다.[5]</p>
                <h3>섹션 3: 경쟁 환경 및 전략적 포지셔닝</h3>
                <p>Idol Island의 성공을 위해서는 기존 시장의 성공과 실패 사례를 철저히 분석하여 독자적이고 방어 가능한 시장 위치를 확보해야 합니다. 주요 경쟁 및 관련 프로젝트 분석을 통해 Idol Island만의 차별화된 전략을 도출할 수 있습니다.</p>
                <h4>3.1 팬 참여 플랫폼 (기반)</h4>
                <ul>
                    <li><strong>Socios.com & 팬 토큰:</strong> 스포츠 팬들이 토큰을 통해 구단 관련 설문조사에 참여하고 특별 이벤트에 접근하는 모델의 성공 가능성을 입증했습니다.[7] <em>교훈:</em> 간단한 거버넌스 유틸리티는 초기 팬 참여를 유도하는 강력한 도구입니다.</li>
                    <li><strong>Royal.io & 음악 로열티:</strong> 팬들이 아티스트의 미래 수익에 직접 투자하고자 하는 강한 욕구를 가지고 있음을 증명했습니다.[7] <em>교훈:</em> IP의 부분 소유권은 매우 매력적인 가치 제안입니다.</li>
                    <li><strong>Audius & 탈중앙화 스트리밍:</strong> 아티스트가 직접 암호화폐 수익을 얻을 수 있도록 함으로써 750만 명의 커뮤니티를 구축하는 데 성공했습니다.[7] 자체 토큰인 $AUDIO는 스테이킹과 거버넌스 모델의 좋은 사례를 제공합니다.[8, 9] 그러나 Audius의 로드맵과 개발 활동은 핵심적인 음악 스트리밍 기능에 집중되어 있어, Idol Island가 목표로 하는 상호작용 및 인큐베이팅 중심의 시장에는 공백이 존재합니다.[9, 10, 11]</li>
                </ul>
                <h4>3.2 GameFi 플레이북 (반면교사)</h4>
                <ul>
                    <li><strong>Axie Infinity의 이중 토큰 실패:</strong> Axie Infinity는 거버넌스 및 투자를 위한 AXS와 게임 내 유틸리티를 위한 SLP라는 이중 토큰 모델을 개척했습니다.[12, 13] 이 모델은 SLP의 무한한 공급량을 소모시킬 충분한 '소각처(sink)'가 부족하여 하이퍼인플레이션을 유발했고, 결국 경제 붕괴로 이어졌습니다.[14] 거버넌스 토큰인 AXS는 투기 및 추가 AXS를 얻기 위한 스테이킹(실질적인 수익이 아닌 희석 방지책) 외에는 매력적인 유틸리티를 제공하지 못해, 시장의 과열이 식자 그 가치를 유지할 수 없었습니다.[13] <em>중요한 교훈:</em> 지속 가능한 토큰 경제는 단순한 투기가 아닌, 실제 플랫폼 활동에서 파생되는 강력한 가치 축적 메커니즘과 디플레이션 압력을 필요로 합니다. 이중 토큰 모델은 불필요한 복잡성과 실패 지점을 추가할 뿐입니다.</li>
                </ul>
                <h4>3.3 AI 아이돌의 최전선 (직접적 경쟁자)</h4>
                <ul>
                    <li><strong>MEET48 분석:</strong> MEET48은 팬 경제와 AI-UGC(사용자 생성 콘텐츠) 도구를 결합한 가장 직접적인 경쟁자입니다.[15, 16, 17, 18, 19] 이들은 SNH48이라는 기존 IP의 거대한 Web2 팬덤(3,000만 명 이상)을 기반으로 하며, 380만 명의 활성 사용자와 50만 개의 Web3 지갑이라는 인상적인 사용자 지표를 보유하고 있습니다.[15] AIdol Producer, AIShowBOX와 같은 AI 도구는 채팅, 스트리밍, 콘텐츠 생성을 위한 AI 에이전트를 원클릭으로 만들 수 있게 해줍니다.[17, 19] 자체 토큰인 $IDOL은 투표, 스테이킹, 서비스 접근에 사용됩니다.[18, 20]</li>
                    <li><strong>전략적 기회:</strong> MEET48의 강점(기존 SNH48 IP와의 연계)은 동시에 약점이기도 합니다. 이 프로젝트는 본질적으로 Web2.5 프로젝트로, 매우 중앙화된 기존 IP 생태계에 Web3 기술을 접목한 형태입니다. 이는 Idol Island가 진정으로 탈중앙화되고, 개방적이며, 크리에이터 중심적인 대안으로서 자리매김할 수 있는 전략적 기회를 제공합니다. MEET48이 사용자들이 <em>자사의 IP를 사용</em>하도록 하는 반면, Idol Island는 사용자들이 <em>자신만의 IP를 처음부터 창조하고 소유</em>할 수 있도록 권한을 부여할 것입니다. 이는 근본적으로 다른, 훨씬 더 Web3 네이티브한 가치 제안입니다.</li>
                </ul>
                <div class="overflow-x-auto my-6">
                    <h4 class="font-bold mb-2">표 1: Web3 팬 플랫폼 경쟁 분석</h4>
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th>플랫폼</th><th>핵심 컨셉</th><th>타겟 고객</th><th>핵심 기술</th><th>토큰 모델</th><th>수익화 전략</th><th>전략적 약점 / 차별점</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Audius</strong></td><td>탈중앙화 음악 스트리밍</td><td>아티스트, 음악 팬</td><td>블록체인</td><td>단일 토큰 ($AUDIO)</td><td>스테이킹, 거버넌스</td><td>깊이 있는 상호작용 및 인큐베이팅 기능 부재 [9]</td></tr>
                            <tr><td><strong>Axie Infinity</strong></td><td>P2E NFT 게임</td><td>게이머, 투기자</td><td>블록체인, NFT</td><td>이중 토큰 (AXS/SLP)</td><td>NFT 판매, 브리딩</td><td>지속 불가능한 토크노믹스, 투기 중심 [13, 14]</td></tr>
                            <tr><td><strong>MEET48</strong></td><td>AI 아이돌 팬 경제</td><td>SNH48 팬, Web2 사용자</td><td>AI-UGC, 블록체인</td><td>단일 토큰 ($IDOL)</td><td>투표, 콘텐츠 생성</td><td>중앙화된 IP, Web2.5 모델 [15, 19]</td></tr>
                            <tr><td><strong>Idol Island (제안)</strong></td><td>탈중앙화 VTuber/아이돌 인큐베이터</td><td>독립 크리에이터, 팬</td><td>AI 공동 창작, 블록체인, NFT</td><td>단일 유틸리티 토큰 ($IDOL)</td><td>플랫폼 수수료, AI 서비스, NFT 로열티</td><td>진정한 탈중앙화, 크리에이터 소유의 IP 창조</td></tr>
                        </tbody>
                    </table>
                </div>
                <h2>파트 II: Idol Island 생태계 - 미래를 위한 비전</h2>
                <p>이 파트에서는 시장 분석을 넘어 Idol Island 플랫폼의 구체적인 '무엇'과 '어떻게'를 다루며, 그 아키텍처와 기능을 상세히 설명합니다.</p>
                <h3>섹션 4: 플랫폼 아키텍처 및 핵심 기능</h3>
                <p>Idol Island는 아이돌의 탄생부터 팬과의 상호작용에 이르기까지, 사용자 여정 전반에 걸쳐 혁신적인 경험을 제공하도록 설계되었습니다.</p>
                <h4>4.1 아이돌의 탄생 - 크리에이터의 여정</h4>
                <p>이 섹션은 파트 I에서 식별된 높은 진입 장벽 문제를 직접적으로 해결하기 위한 크리에이터용 도구 모음을 상세히 설명합니다.</p>
                <ul>
                    <li><strong>아바타 파운드리 (Avatar Foundry):</strong> 사용자가 손쉽게 2D 또는 3D 아바타를 제작하거나 외부에서 가져올 수 있는 사용자 친화적인 인터페이스를 제공합니다. 오픈소스 솔루션과의 통합을 통해 제작 비용을 낮추고 [21], 간단한 모델부터 고품질의 맞춤형 캐릭터까지 다양한 옵션을 지원합니다.</li>
                    <li><strong>페르소나 및 브랜드 개발 키트:</strong> 성공적인 VTuber들의 모범 사례를 기반으로 [22, 23], 크리에이터가 자신의 유저네임, 캐치프레이즈, 배경 스토리(lore), 타겟 고객을 정의할 수 있도록 안내합니다. 이 구조화된 프로세스는 초기부터 강력하고 진정성 있는 브랜드를 구축하는 데 도움을 줍니다.</li>
                    <li><strong>데뷔 및 콘텐츠 관리 스위트:</strong> 데뷔 방송을 계획하고, 스트리밍 스케줄을 관리하며, 소셜 미디어에 콘텐츠를 교차 게시할 수 있는 도구를 제공합니다. 이는 크리에이터가 활동의 일관성을 유지하고 시장 트렌드를 효과적으로 활용할 수 있도록 지원합니다.[23]</li>
                </ul>
                <h4>4.2 팬-프로듀서 경험</h4>
                <p>이 섹션은 팬들에게 실질적인 지분과 영향력을 부여하여 수동적인 관객에서 능동적인 참여자로 전환시키는 상호작용 메커니즘을 설명합니다.</p>
                <ul>
                    <li><strong>아이돌 주식 (I-Stocks):</strong> 팬들은 유망한 아이돌의 'I-Stock'(NFT로 구현)을 구매하여 이들의 활동에 필요한 초기 자금(예: 더 좋은 장비나 아바타 업그레이드 비용)을 지원할 수 있습니다. 그 대가로 I-Stock 보유자는 해당 아이돌이 플랫폼에서 창출하는 미래 수익의 일부(예: NFT 2차 판매 로열티, AI 콘텐츠 판매 수익의 일정 비율)를 배분받습니다. 이는 Royal.io의 모델을 [7] VTuber의 전반적인 커리어에 적용한 것입니다.</li>
                    <li><strong>Engage-to-Earn 및 게임화된 충성도 시스템:</strong> 팬들은 스트리밍 시청, 설문 참여, 팬아트 제작(NFT로 민팅 가능), 아이돌의 미래 성과 예측 게임(예: "이번 달에 X 아이돌이 팔로워 1만 명을 달성할 것인가?") 참여 등 적극적인 활동을 통해 플랫폼 포인트나 토큰 보상을 획득합니다.[6, 7] 이는 사용자들에게 지속적이고 보람 있는 경험을 제공하여 플랫폼에 대한 몰입도를 높입니다.</li>
                    <li><strong>계층형 팬클럽 (NFT 기반):</strong> 팬들은 NFT 멤버십 패스를 구매하여 등급별 혜택을 누릴 수 있습니다. 독점 디스코드 채널 접근권, 비하인드 콘텐츠, 개인화된 메시지, 심지어 특정 창작 활동(예: 다음에 플레이할 게임, 커버할 노래)에 대한 투표권 등이 포함될 수 있습니다. 이 모델은 Socios.com과 같은 플랫폼에서 이미 그 효과가 입증되었습니다.[7]</li>
                </ul>
                <h4>4.3 AI 기반 공동 창작 엔진</h4>
                <p>이는 Idol Island의 핵심 기술 차별점으로, 크리에이터의 번아웃 문제를 해결하고 새로운 형태의 콘텐츠 제작을 가능하게 하도록 설계되었습니다. 이 엔진은 인간의 창의성을 대체하는 것이 아닌, 협업을 위한 도구로 포지셔닝됩니다.</p>
                <ul>
                    <li><strong>AI 스크립터 및 스토리 생성기:</strong> 아이돌이 구축한 페르소나와 배경 스토리를 기반으로 학습된 LLM(대규모 언어 모델)을 사용하여(기억 저장을 위해 VectorDB 활용 [24]), 스트리밍 주제, 대화, 영상 스크립트 등을 생성하여 크리에이터의 창작 부담을 덜어줍니다.</li>
                    <li><strong>AI 음악 및 댄스 작곡가:</strong> MEET48의 도구와 유사하게 [17, 19], 크리에이터(또는 팬)가 간단한 텍스트 프롬프트를 통해 오리지널 곡과 안무를 생성할 수 있도록 지원합니다. 이렇게 생성된 콘텐츠는 NFT로 민팅되어 확장 가능한 새로운 수익원을 창출합니다.</li>
                    <li><strong>AI 에이전트 동반자:</strong> 크리에이터는 자신의 페르소나를 복제한 'AI-Twin'을 배포하여 24시간 팬들과 채팅으로 소통하거나, 자동화된 Q&A 세션을 진행하고, 심지어 공동으로 방송을 진행할 수도 있습니다. 이는 Open-LLM-VTuber와 같은 프로젝트의 기술을 활용하여 [21] 크리에이터가 오프라인일 때도 커뮤니티의 참여를 유지시키며, '항상 접속해 있어야 한다'는 압박감을 직접적으로 해소합니다.[4]</li>
                </ul>
                <h2>파트 III: 토크노믹스 - Idol Island의 경제 엔진</h2>
                <p>이 파트는 과거 모델의 실패로부터 직접적인 교훈을 얻어 지속 가능하고 가치 축적적인 시스템을 구축하기 위한 플랫폼 경제 설계를 상세히 다룹니다.</p>
                <h3>섹션 5: $IDOL 토큰 - 통합된 유틸리티 프레임워크</h3>
                <p>Axie Infinity의 실패 사례에서 얻은 교훈을 바탕으로 [13], Idol Island는 불필요한 복잡성과 인플레이션 압력을 피하기 위해 <strong>단일 토큰 모델</strong>을 채택합니다. $IDOL 토큰은 생태계의 생명선과 같은 역할을 합니다.</p>
                <h4>핵심 기능</h4>
                <ul>
                    <li><strong>교환의 매개:</strong> $IDOL은 I-Stock 구매, NFT 민팅, 프리미엄 팬클럽 멤버십 구매, AI 공동 창작 서비스 결제 등 모든 고부가가치 플랫폼 거래에 사용되는 유일한 통화입니다.</li>
                    <li><strong>거버넌스:</strong> $IDOL 보유자는 Idol Island DAO에서 투표권을 행사하여 플랫폼 업그레이드, 재무부 자금 할당, IP 관리 정책과 같은 주요 의사결정에 영향을 미칩니다.</li>
                    <li><strong>스테이킹 및 접근권:</strong> 특정 플랫폼 등급이나 기능에 접근하기 위해 $IDOL을 스테이킹해야 합니다. 스테이커는 인플레이션 기반 보상이 아닌, 플랫폼 수익의 일부를 공유받아 실질적인 수익(real yield)을 얻게 됩니다 (섹션 6 참조).</li>
                    <li><strong>크리에이터 인센티브:</strong> 토큰 공급량의 일부는 'Play-to-Earn'을 재해석한 'Create-and-Engage-to-Earn' 풀에 할당되어, 인기 있는 콘텐츠를 제작하는 크리에이터와 적극적으로 참여하는 팬 모두에게 보상을 제공합니다.</li>
                </ul>
                <div class="overflow-x-auto my-6">
                    <h4 class="font-bold mb-2">표 2: $IDOL 토큰 유틸리티 매트릭스</h4>
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th>사용자 페르소나</th><th>주요 활동</th><th>토큰 유틸리티 (소비/스테이킹/획득)</th><th>결과적 혜택</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>팬 (Fan)</strong></td><td>I-Stock 구매, 팬클럽 가입, 아이돌 후원, AI 도구 사용</td><td>$IDOL 소비</td><td>아이돌에 투자, 독점적 접근권 획득, 크리에이터 지원</td></tr>
                            <tr><td></td><td>스트리밍 시청, 투표, 팬아트 제작 등 커뮤니티 활동 참여</td><td>$IDOL 획득 (Engage-to-Earn)</td><td>활동에 대한 경제적 보상, 커뮤니티 기여도 인정</td></tr>
                            <tr><td><strong>크리에이터 (Creator)</strong></td><td>데뷔 NFT 민팅, I-Stock 발행, 프리미엄 AI 기능 사용</td><td>$IDOL 소비/획득</td><td>활동 자금 조달, 콘텐츠 수익화, 작업 부담 감소</td></tr>
                            <tr><td></td><td>인기 콘텐츠 제작, 팬 참여 유도</td><td>$IDOL 획득 (Create-to-Earn)</td><td>창작 활동에 대한 직접적인 보상, 지속 가능한 커리어 구축</td></tr>
                            <tr><td><strong>투자자/투기자 (Investor/Speculator)</strong></td><td>$IDOL 스테이킹, DAO 거버넌스 투표 참여</td><td>$IDOL 스테이킹</td><td>플랫폼 수수료 기반의 실질 수익(Real Yield) 획득, 플랫폼 방향성 결정에 참여</td></tr>
                            <tr><td></td><td>탈중앙화 거래소(DEX)에서 $IDOL 거래</td><td>$IDOL 소비/획득</td><td>시장 참여를 통한 자본 이득 기회</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>섹션 6: 지속 가능한 경제 설계 및 가치 축적</h3>
                <p>이 섹션은 $IDOL이 단순한 투기성 자산이 아니라, 플랫폼의 성공과 연동된 내재적이고 지속 가능한 가치를 갖도록 보장하는 메커니즘을 상세히 설명합니다.</p>
                <h4>6.1 플랫폼 및 크리에이터 수익원 (가치 유입 흐름)</h4>
                <p>P2E 게임 및 NFT 마켓플레이스 모델에서 영감을 받은 다각화된 수익 모델을 제시합니다.[25, 26, 27, 28]</p>
                <ul>
                    <li><strong>플랫폼 수수료:</strong> 모든 1차 및 2차 NFT 판매, I-Stock 거래, 팬클럽 멤버십 가입에 대해 소액의 수수료(예: OpenSea와 유사한 2.5% [28])를 부과합니다.</li>
                    <li><strong>AI 서비스 수수료:</strong> 크리에이터가 고급 AI 공동 창작 엔진에 접근하기 위해 사용하는 '사용량 기반(pay-as-you-go)' 또는 구독 모델에 대해 $IDOL로 결제받습니다.</li>
                    <li><strong>민팅 및 리스팅 수수료:</strong> 플랫폼에서 특정 유형의 자산을 민팅할 때 명목상의 수수료를 $IDOL로 부과합니다.</li>
                    <li><strong>전략적 파트너십:</strong> Idol Island 생태계 내에서 스폰서 아이돌을 론칭하거나 이벤트를 개최하고자 하는 브랜드로부터 수익을 창출합니다.</li>
                </ul>
                <h4>6.2 디플레이션 메커니즘 및 재무부 관리 (가치 잠금)</h4>
                <p>Axie Infinity에서 나타난 하이퍼인플레이션 문제를 해결하기 위해 내재적인 디플레이션 압력을 설계합니다.</p>
                <ul>
                    <li><strong>거래 기반 토큰 소각:</strong> 플랫폼이 징수하는 모든 $IDOL 거래 수수료(플랫폼 수수료, AI 서비스 수수료 등)의 일부가 영구적으로 소각됩니다. 이 모델은 이더리움의 EIP-1559와 바이낸스의 BNB 소각 사례에서 그 효과가 입증되었습니다.[29] 이는 플랫폼 활동과 토큰 희소성을 직접적으로 연결합니다.</li>
                    <li><strong>바이백 및 소각 프로그램:</strong> 플랫폼 수익으로 자금이 조달되는 Idol Island DAO 재무부는 공개 시장에서 주기적으로 $IDOL을 재구매하여 소각할 수 있는 권한을 가집니다. 이는 공급량을 관리하는 강력하고 유연한 도구를 제공합니다.[30]</li>
                    <li><strong>DAO 주도 재무부:</strong> 모든 플랫폼 수익은 Idol Island DAO가 통제하는 투명한 온체인 재무부로 유입됩니다. $IDOL 보유자들은 이 자금을 바이백, 생태계 보조금, 마케팅, 추가 R&D 등 어디에 할당할지 투표를 통해 결정하며, 이를 통해 이해관계자 간의 목표 일치와 투명성을 보장합니다.[31]</li>
                </ul>
                <h3>섹션 7: 토큰 분배 및 베스팅 일정</h3>
                <p>이 섹션은 장기적인 목표 일치를 촉진하고 시장 불안정성을 방지하기 위해 설계된 명확하고 투명하며 공정한 분배 계획을 제공합니다. 이 모델은 MEET48 [18, 32] 및 Axie Infinity [33]와 같은 프로젝트를 벤치마킹하여 설계되었습니다.</p>
                <div class="overflow-x-auto my-6">
                    <h4 class="font-bold mb-2">표 3: 토큰 할당 및 베스팅 일정</h4>
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th>카테고리</th><th>할당 비율</th><th>총 토큰 수 (가상)</th><th>클리프(Cliff) 기간</th><th>베스팅(Vesting) 일정</th><th>근거 및 목적</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>커뮤니티 및 생태계</strong></td><td>50%</td><td>500,000,000</td><td>0개월</td><td>4년간 선형 분배</td><td>가장 큰 비중. Create-and-Engage-to-Earn 보상, 보조금, 에어드랍에 사용. 지속적인 생태계 성장을 보장하기 위함 (MEET48의 45.2% 커뮤니티 할당 참고 [18]).</td></tr>
                            <tr><td><strong>팀 및 어드바이저</strong></td><td>20%</td><td>200,000,000</td><td>12개월</td><td>클리프 이후 3년간 선형 분배</td><td>업계 표준. 핵심 팀의 장기적인 헌신을 보장하기 위함.</td></tr>
                            <tr><td><strong>재무부 (Treasury)</strong></td><td>15%</td><td>150,000,000</td><td>-</td><td>DAO 거버넌스에 따라 잠금 해제</td><td>운영 비용, 유동성 공급, 전략적 이니셔티브를 위해 DAO가 통제.</td></tr>
                            <tr><td><strong>투자자 (시드/프라이빗)</strong></td><td>15%</td><td>150,000,000</td><td>6~12개월</td><td>클리프 이후 2년간 선형 분배</td><td>초기 시장 매도 압력을 방지하고 장기적인 파트너십을 유도하기 위함.</td></tr>
                        </tbody>
                    </table>
                </div>
                <h2>파트 IV: 거버넌스, 법률, 그리고 실행</h2>
                <p>이 마지막 파트는 프로젝트를 단순한 개념에서 방어 가능한 기업으로 전환시키기 위해 필요한 핵심적인 운영, 법률, 전략적 기둥을 다룹니다.</p>
                <h3>섹션 8: Idol Island DAO - 탈중앙화 거버넌스를 위한 프레임워크</h3>
                <p>이 섹션은 DAO의 복잡한 법적 현실을 정면으로 다룹니다.</p>
                <h4>8.1 법적 구조 및 책임 완화</h4>
                <ul>
                    <li><strong>법인격 없는 DAO의 위험:</strong> 법인격이 없는 DAO는 '일반 조합(general partnership)'으로 간주될 위험이 있으며, 이 경우 모든 토큰 보유자가 DAO의 부채와 법적 문제에 대해 연대하여 무한 책임을 지게 될 수 있습니다.[34, 35, 36] 이는 진지한 프로젝트에게는 용납할 수 없는 위험입니다. <em>Sarcuni v. bZx DAO</em>와 같은 사례는 법원이 이러한 분류를 적용할 의지가 있음을 확인시켜 줍니다.[35, 37]</li>
                    <li><strong>법적 '래퍼(Wrapper)' 분석:</strong> 책임의 방패를 제공하기 위해 고안된 다양한 법적 '래퍼'의 장단점을 분석합니다.[34] 와이오밍 DAO LLC, 스위스 협회, 역외 재단 등이 옵션으로 고려될 수 있습니다.</li>
                    <li><strong>권장 사항: 케이맨 재단 모델:</strong> 본 보고서는 '소유자 없는(Ownerless)' 케이맨 제도 재단(Cayman Islands Foundation)을 포함하는 구조를 권장합니다. 이 법인은 프로젝트의 IP와 재무부를 보유할 수 있습니다. 이 재단은 이사회를 통해 운영되며, 이사회는 $IDOL 토큰 보유자들의 온체인 투표 결과에 법적으로 구속될 수 있습니다. ENS와 같은 프로젝트에서 사용되는 이 구조는 강력한 책임 보호막, 세금 효율성, 그리고 오프체인 세계와의 명확한 상호작용 프레임워크를 제공하면서도, DAO에 의한 진정한 탈중앙화 거버넌스를 가능하게 합니다.[34]</li>
                </ul>
                <h4>8.2 거버넌스 메커니즘 및 지적 재산권 관리</h4>
                <ul>
                    <li><strong>온체인 거버넌스:</strong> Aragon과 같은 플랫폼의 모범 사례를 참고하여 [38], 정족수(최소 참여율) 및 통과율과 같은 매개변수를 포함한 DAO 제안 및 투표 프로세스를 정의합니다.</li>
                    <li><strong>IP 딜레마:</strong> 핵심 과제는 플랫폼 네이티브 아이돌과 사용자 생성 콘텐츠(UGC) 모두에 대한 IP를 관리하는 것입니다. Spice DAO가 책 한 권을 구매하면 저작권을 획득했다고 오인했던 사건은 중요한 경고입니다.[39]</li>
                    <li><strong>제안된 IP 프레임워크:</strong> Idol Island 재단은 플랫폼과 핵심 AI 엔진에 대한 '마스터 IP'를 보유합니다. 크리에이터가 플랫폼에서 아이돌을 만들면, 해당 특정 캐릭터의 IP에 대한 독점적이고 양도 가능한 NFT 기반 라이선스를 부여받습니다. 이는 크리에이터에게 효과적인 소유권과 캐릭터 상업화 권리를 부여하는 동시에, 재단은 플랫폼 자체에 대한 기본 권리를 유지합니다. 팬아트나 AI 생성 노래와 같은 UGC의 경우, 사용자는 플랫폼에 해당 콘텐츠를 표시할 라이선스를 부여하고, 자신은 소유권을 유지하며 이를 NFT로 민팅할 수 있습니다. 이 하이브리드 모델은 NFT IP 권리의 복잡한 법적 위험을 탐색하면서 [40, 41] 플랫폼을 보호하고 크리에이터에게 권한을 부여합니다.</li>
                </ul>
                <div class="overflow-x-auto my-6">
                    <h4 class="font-bold mb-2">표 4: DAO 법적 구조 비교</h4>
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th>법적 구조</th><th>관할권</th><th>구성원 책임</th><th>거버넌스 유연성</th><th>IP/자산 보유</th><th>세금 영향</th><th>최적 사용 사례</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>법인격 없는 DAO</strong></td><td>해당 없음</td><td>무한 책임 (일반 조합)</td><td>높음 (코드가 법)</td><td>불분명</td><td>패스스루 (복잡성 높음)</td><td>권장하지 않음 [34]</td></tr>
                            <tr><td><strong>와이오밍 DAO LLC</strong></td><td>미국 와이오밍</td><td>유한 책임</td><td>보통 (구성원 관리)</td><td>LLC를 통해 가능</td><td>패스스루</td><td>미국 중심의 DAO [34]</td></tr>
                            <tr><td><strong>케이맨 재단</strong></td><td>케이맨 제도</td><td>유한 책임 (구성원)</td><td>높음 (DAO가 이사회 지시)</td><td>강력함 (IP/자산 보유 가능)</td><td>세금 중립</td><td>IP/재무부 관리가 필요한 글로벌, 탈중앙화 프로젝트 [34]</td></tr>
                            <tr><td><strong>스위스 협회</strong></td><td>스위스</td><td>유한 책임</td><td>보통</td><td>강력함</td><td>과세 대상 (비영리 제외)</td><td>비영리 또는 커뮤니티 중심 DAO [34]</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>섹션 9: 규제 환경 탐색: 유틸리티로서의 $IDOL 토큰</h3>
                <p>이 섹션은 증권법 리스크를 완화하는 중요한 과제에 전념합니다.</p>
                <ul>
                    <li><strong>Howey 테스트와 그 의미:</strong> 미국 증권거래위원회(SEC)가 자산이 '투자 계약'(따라서 '증권')인지 판단하는 데 사용하는 주요 프레임워크인 Howey 테스트를 설명합니다.[42]</li>
                    <li><strong>TurnKey Jet 비조치의견서(No-Action Letter)를 통한 청사진:</strong> SEC가 TurnKey Jet에 보낸 비조치의견서는 순수 유틸리티 토큰이 무엇인지에 대한 가장 명확한 (매우 제한적이기는 하지만) 지침을 제공합니다.[43, 44, 45, 46] 주요 요인은 다음과 같습니다.
                        <ol class="list-decimal pl-6 mt-2">
                            <li>플랫폼이 토큰 판매 <em>전</em>에 완전히 개발되고 운영 가능했습니다.</li>
                            <li>토큰 판매 자금은 플랫폼 개발에 사용되지 않았습니다.</li>
                            <li>토큰은 판매 즉시 의도된 기능(항공 서비스 구매)을 위해 사용 가능했습니다.</li>
                            <li>토큰은 고정된 가격(1달러)으로 판매되고 고정된 가치로 상환되었습니다.</li>
                            <li>토큰 전송은 플랫폼의 내부 지갑으로만 제한되었습니다.</li>
                        </ol>
                    </li>
                    <li><strong>Idol Island의 규제 준수 전략 (단계적 접근):</strong> Idol Island는 투자 잠재력을 희생하지 않으면서 TurnKey Jet의 엄격한 기준을 모두 충족할 수는 없습니다. 따라서 '점진적 탈중앙화' 모델에 기반한 보다 미묘한 전략을 채택할 것입니다.
                        <ul class="list-disc pl-6 mt-2">
                            <li><strong>1단계 - 자금 조달을 위한 공개 토큰 판매 금지:</strong> Idol Island는 초기 플랫폼 개발 자금을 조달하기 위해 ICO나 $IDOL의 공개 판매를 진행하지 <em>않을</em> 것입니다. 자본은 공인된 투자자로부터 전통적인 지분 투자를 통해 조달합니다. 이는 토큰이 미완성된 사업의 자금 조달 메커니즘으로 판매되고 있다는 SEC의 주요 우려를 직접적으로 해결합니다.</li>
                            <li><strong>2단계 - 즉각적인 유틸리티와 함께 출시:</strong> $IDOL 토큰은 핵심 플랫폼이 활성화되고 운영 가능한 <em>이후</em>에만 도입됩니다. 출시 시점에 토큰은 섹션 5에서 설명한 기능(AI 서비스 비용 지불, 민팅 등)에 대한 즉각적이고 명확한 유틸리티를 갖게 됩니다.</li>
                            <li><strong>마케팅 및 프레이밍:</strong> 모든 마케팅 자료는 토큰의 가격 상승 잠재력이 아닌, 생태계 내에서의 <em>소비적 사용 및 기능</em>을 강조할 것입니다. 이는 TurnKey Jet의 지침과 일치하며 [42, 44], 규제 준수에 매우 중요합니다.</li>
                        </ul>
                    </li>
                </ul>
                <h3>섹션 10: 단계별 로드맵 및 시장 진출 전략</h3>
                <p>이 섹션은 Idol Island를 시장에 출시하고 장기적인 비전을 달성하기 위한 신뢰할 수 있고 실행 가능한 계획을 제공합니다.</p>
                <ul>
                    <li><strong>1단계: 기반 구축 및 플랫폼 알파 (1년차)</strong>
                        <ul class="list-disc pl-6 mt-2">
                            <li><strong>개발:</strong> 아바타 파운드리, 기본 팬 참여 도구, AI 공동 창작 엔진 V1을 포함한 핵심 플랫폼 개발.</li>
                            <li><strong>법률 및 법인:</strong> 자금 조달을 위한 법인 및 케이맨 재단 구조 설립.</li>
                            <li><strong>시장 진출:</strong> 디스코드와 트위터에서 커뮤니티 기반 구축. 50-100명의 '제네시스 크리에이터' 소규모 코호트를 모집하여 플랫폼을 테스트하고 피드백 제공.</li>
                        </ul>
                    </li>
                    <li><strong>2단계: 공개 베타 및 토큰 출시 (2년차)</strong>
                        <ul class="list-disc pl-6 mt-2">
                            <li><strong>개발:</strong> Idol Island 플랫폼의 공개 베타 버전 출시.</li>
                            <li><strong>토큰 생성 이벤트(TGE):</strong> 초기 크리에이터, 팬, 커뮤니티 멤버에게 에어드랍을 통해 $IDOL 토큰 도입. *공개 판매는 진행하지 않음.* 탈중앙화 거래소(DEX)에 토큰 상장.</li>
                            <li><strong>시장 진출:</strong> 트위치, 유튜브 등 플랫폼의 독립 VTuber와 그들의 커뮤니티를 유치하는 데 초점을 맞춘 대규모 마케팅 캠페인 시작.</li>
                        </ul>
                    </li>
                    <li><strong>3단계: DAO 설립 및 점진적 탈중앙화 (3년차)</strong>
                        <ul class="list-disc pl-6 mt-2">
                            <li><strong>개발:</strong> 커뮤니티 피드백을 기반으로 AI 엔진 V2 출시 및 플랫폼 기능 확장.</li>
                            <li><strong>거버넌스:</strong> Idol Island DAO 공식 출범. 재무부 및 핵심 플랫폼 매개변수에 대한 통제권을 핵심 팀에서 온체인 투표를 통해 DAO로 점진적으로 이전 시작.</li>
                            <li><strong>시장 진출:</strong> 게임 길드, 엔터테인먼트 회사, 기타 Web3 프로토콜과 전략적 파트너십 형성.</li>
                        </ul>
                    </li>
                    <li><strong>4단계: 완전한 탈중앙화 및 생태계 확장 (4년차 이후)</strong>
                        <ul class="list-disc pl-6 mt-2">
                            <li><strong>거버넌스:</strong> 핵심 팀의 역할이 DAO에 대한 서비스 제공자로 전환. DAO가 플랫폼의 미래에 대한 완전한 통제권을 가짐.</li>
                            <li><strong>개발:</strong> DAO가 자금을 지원하는 보조금을 통해 제3자 개발자들이 Idol Island 프로토콜 위에 새로운 도구와 경험을 구축하면서 생태계 확장.</li>
                        </ul>
                    </li>
                </ul>
                <h3>결론</h3>
                <p>크리에이터 경제, 특히 VTuber 시장은 폭발적인 성장과 함께 심각한 구조적 문제에 직면해 있습니다. 높은 진입 비용, 극심한 소득 불평등, 만연한 번아웃, 그리고 중앙화된 에이전시의 착취 구조는 재능 있는 개인들의 지속 가능한 활동을 가로막고 있습니다. Idol Island는 이러한 문제들이 단순한 수익화의 부재가 아닌, '지속 불가능한 창작 워크플로우'에서 기인한다고 진단합니다.</p>
                <p>이에 대한 해결책으로, Idol Island는 Web3 기술과 AI를 결합하여 새로운 패러다임을 제시합니다. 본 보고서에서 제안된 전략적 청사진은 다음과 같은 핵심 요소를 통해 기존 시장의 한계를 극복하고자 합니다.</p>
                <ol class="list-decimal pl-6 mt-2">
                    <li><strong>지속 가능한 창작 환경 제공:</strong> AI 공동 창작 엔진은 스크립트 작성, 음악 제작 등의 창작 부담을 줄여 크리에이터가 번아웃 없이 활동에 집중할 수 있도록 지원합니다. 이는 단순한 수익화 도구를 넘어, 크리에이터 경력의 지속 가능성을 근본적으로 해결하는 핵심 차별점입니다.</li>
                    <li><strong>진정한 소유권 경제 구축:</strong> NFT와 팬 토큰을 통해 크리에이터는 자신의 IP와 콘텐츠에 대한 완전한 소유권을 가지며, 팬은 단순한 소비자를 넘어 아이돌의 성장에 직접 기여하고 그 과실을 공유하는 '팬-프로듀서'로 거듭납니다. 이는 MEET48과 같은 Web2.5 모델과 차별화되는, 진정한 Web3 네이티브 접근 방식입니다.</li>
                    <li><strong>견고하고 지속 가능한 토크노믹스:</strong> Axie Infinity의 실패 사례를 반면교사 삼아, 단일 유틸리티 토큰($IDOL) 모델을 채택합니다. 플랫폼의 실제 활동(수수료, 서비스 이용)과 직접 연동된 가치 축적 및 디플레이션 메커니즘(거래 수수료 소각, 바이백)을 통해 투기에 의존하지 않는 건전한 경제 생태계를 구축합니다.</li>
                    <li><strong>명확한 법적 및 규제 준수 전략:</strong> DAO의 법적 리스크를 완화하기 위해 케이맨 재단과 같은 검증된 법적 래퍼를 활용하고, SEC의 지침을 준수하는 단계적 토큰 출시 전략을 통해 증권법 리스크를 최소화합니다. 이는 프로젝트의 장기적인 안정성과 투자자 신뢰 확보에 필수적입니다.</li>
                </ol>
                <p>결론적으로, Idol Island는 단순한 플랫폼이 아닌, 차세대 크리에이터를 위한 탈중앙화 인큐베이팅 생태계입니다. 기술적 혁신, 지속 가능한 경제 모델, 그리고 명확한 법적 프레임워크를 통해 분열된 크리에이터 시장에 새로운 대안을 제시하고, 크리에이터와 팬이 함께 성장하는 진정한 소유권 경제의 시대를 열어갈 것입니다. 본 청사진은 그 비전을 실현하기 위한 구체적이고 실행 가능한 로드맵을 담고 있습니다.</p>
            `
        },
        ja: {
            // ... (Japanese translations would go here, mirroring the structure of 'ko')
            heroTitle: "ファンがプロデューサーになる場所、<br><span class='gradient-text'>あなたのアイドル</span>を直接作ろう。",
            heroDesc: "Idol Islandは、クリエイターとファンが共に成長するWeb3ベースのインキュベーションプラットフォームです。<br>AI技術で創作の限界を超え、真の所有権を通じて新しいエンターテインメントの未来を開きます。",
            whitepaperBtn: "ホワイトペーパー全文を見る",
            discordBtn: "Discordに参加",
            communityBtn: "コミュニティに参加",
            mobileCommunityBtn: "コミュニティに参加",
            problemTitle: "クリエイターエコノミーの<span class='gradient-text'>分裂した現実</span>",
            problemDesc: "爆発的な成長の裏には、クリエイターの足を引っ張る構造的な問題が存在します。",
            problem1Title: "高い参入障壁",
            problem1Desc: "数百万円に達するアバター制作、機材購入費用が、才能あるクリエイターのスタートを妨げます。",
            problem2Title: "不公正な収益構造",
            problem2Desc: "少数のトップクリエイターが収益を独占し、ほとんどは正当な報酬を受け取れていません。",
            problem3Title: "持続不可能な創作",
            problem3Desc: "絶え間ないコンテンツ生産のプレッシャーと感情労働は、深刻な燃え尽き症候群につながり、活動寿命を縮めます。",
            solutionTitle: "新しいパラダイム",
            solutionDesc: "私たちは技術を通じてクリエイターに力を与え、ファンを単なる消費者から「プロデューサー」に変えます。",
            solution1Title: "AI共同創作エンジン",
            solution1Desc: "脚本、音楽、ダンスまで。AIが創作の負担を軽減し、クリエイターは本質に集中できます。燃え尽きを減らし、創造性を最大化しましょう。",
            solution2Title: "ファンプロデューサーシステム (I-Stocks)",
            solution2Desc: "単なる支援を超え、アイドルの「株式(NFT)」を所有しましょう。アイドルの成長に直接投資し、発生した収益を共に分かち合う真のパートナーになれます。",
            solution3Title: "クリエイター所有のIP",
            solution3Desc: "プラットフォームではなく、あなたがIPの所有者です。Idol Islandで生まれたすべてのキャラクターとコンテンツの所有権は、創作者に帰属し、自由な活動を保証します。",
            tokenomicsTitle: "ただ一つのトークン、<span class='gradient-text'>$IDOL</span>",
            tokenomicsDesc: "複雑なデュアルトークンモデルの失敗を教訓に、Idol Islandは$IDOLという単一のユーティリティトークンで持続可能な経済を構築します。",
            tokenomics1: "<strong class='text-white'>価値交換の媒体:</strong> I-Stockの購入、NFTミンティング、AIサービスの利用など、エコシステム内のすべての活動の基軸通貨として使用されます。",
            tokenomics2: "<strong class='text-white'>価値の蓄積:</strong> プラットフォーム手数料の一部をバーンしてトークンの希少性を高め、ステーカーにはプラットフォーム収益を分配して実質的な報酬を提供します。",
            tokenomics3: "<strong class='text-white'>ガバナンス:</strong> $IDOL保有者はDAOの一員としてプラットフォームの主要な意思決定に直接参加し、エコシステムの未来を創造します。",
            roadmapTitle: "未来への<span class='gradient-text'>ロードマップ</span>",
            roadmapDesc: "私たちは明確なビジョンと段階的な実行計画を通じて、コミュニティと共に成長します。",
            roadmap1Title: "フェーズ1",
            roadmap1Subtitle: "基盤構築とアルファ版",
            roadmap1Desc: "コアプラットフォーム開発と法人設立、少数の「ジェネシスクリエイター」と共に非公開テストを実施。",
            roadmap2Title: "フェーズ2",
            roadmap2Subtitle: "公開ベータとトークンローンチ",
            roadmap2Desc: "プラットフォームの公開ベータと$IDOLトークンのローンチ（エアドロップ）、独立系VTuberコミュニティを対象としたマーケティングキャンペーンを開始。",
            roadmap3Title: "フェーズ3",
            roadmap3Subtitle: "DAO設立と分散化",
            roadmap3Desc: "Idol Island DAOの公式発足、コミュニティ主導のオンチェーンガバナンスへの核心的コントロールの段階的移行。",
            roadmap4Title: "フェーズ4",
            roadmap4Subtitle: "エコシステムの拡大",
            roadmap4Desc: "DAOの助成金を通じたサードパーティ開発者の参加、プロトコル上に多様なツールと体験が構築される完全なエコシステムへと発展。",
            footerTitle: "アイドル文化の未来、<span class='gradient-text'>一緒に作りませんか？</span>",
            footerDesc: "今すぐコミュニティに参加して、Idol Islandの最初のプロデューサーになりましょう。",
            footerBtn: "今すぐDiscordに参加",
            footerRights: "&copy; 2025 Idol Island. All Rights Reserved.",
            modalTitle: "Idol Island ホワイトペーパー",
            collapseAllBtn: "すべて折りたたむ",
            expandAllBtn: "すべて展開",
            whitepaper: `
                <div class="accordion-item">
                    <h2 class="accordion-toggle">パートI：新しいクリエイターパラダイム - 市場分析と機会<span class="accordion-icon text-xl font-light">+</span></h2>
                    <div class="accordion-panel"><div class="accordion-content">
                        <h3>セクション1：分裂したクリエイター経済：破壊的革新を待つ市場</h3>
                        <p>現代のデジタルコンテンツ市場、特にバーチャルYouTuber（VTuber）と音楽産業は、爆発的な成長の裏に深刻な構造的問題を抱えています。これらの問題は、クリエイターの持続可能な活動を妨げ、ファンとの関係を断絶させ、中央集権型プラットフォームの価値独占を深刻化させています。Idol Islandは、この分裂した市場の根本的な問題点を診断し、Web3技術を通じて解決策を提示することを目指します。</p>
                        <h4>VTuberのジレンマ：高い成長率、より高い参入障壁と摩擦</h4>
                        <p>VTuber市場は前例のないスピードで拡大しています。2024年の39億9000万ドル規模から2033年には594億5000万ドルに達すると予測されており、これは年平均成長率（CAGR）35.03%に達する驚異的な数値です。[1] しかし、この華やかな成長の裏には、独立系クリエイターの生存を脅かす深刻な問題が存在します。</p>
                        <ul>
                            <li><strong>過度な制作費用と技術障壁：</strong> 新しいVTuberが市場に参入するためには、相当な初期費用を負担しなければなりません。アバターデザイン、モーションキャプチャー機器、リアルタイムレンダリングシステムの構築にかかる費用は数百から数千ドルに及び[2]、これは才能ある個人の市場参入を妨げる高い障壁として機能します。実際に、現役クリエイターの60%が高い制作費用を最大の困難として挙げており、技術関連の支出が月間運営予算の50%以上を占めるケースも珍しくありません。[1]</li>
                            <li><strong>蔓延する所得格差：</strong> VTuber経済は極端な「富める者はますます富み、貧しい者はますます貧しくなる」構造を示しています。1,923人のVTuberを対象とした大規模な調査によると、彼らの月平均収入は2,667ドルでしたが、所得の中央値はわずか127ドルでした。[3] 調査対象のVTuberのうち25%は、YouTubeの支援機能であるスーパーチャットを一度も受け取ったことがないことが明らかになりました。[3] これは、ホロライブ（市場シェア38%）やにじさんじ（市場シェア30%）のような巨大エージェンシー所属の少数のトップVTuberが市場の富を独占する「勝者総取り」構造を明確に示しています。[1, 3]</li>
                            <li><strong>燃え尽き症候群の蔓延：</strong> 関連性を維持するために絶えずコンテンツを生産しなければならないというプレッシャーは、クリエイターを深刻な燃え尽き症候群に追い込んでいます。[4] ある研究によると、VTuberの平均活動寿命はわずか24ヶ月で、いわゆる「失敗」したVTuberの場合は19ヶ月とさらに短くなります。[3] これはペルソナを維持することに伴う感情労働と、より成功した同僚と比較することから来る精神的ストレスと相まって、問題をさらに悪化させます。[4]</li>
                            <li><strong>エージェンシーの搾取構造：</strong> ホロライブやにじさんじのような大手エージェンシーは所属クリエイターにリソースとインフラを提供しますが、同時に知的財産権（IP）の所有権紛争や不公正な労働慣行といった搾取のリスクを内包しています。実際の有名VTuberの契約解除事例は、これらのリスクが現実であることを証明し、より公正で独立した成功への道に対する需要を生み出しています。[3]</li>
                        </ul>
                        <p>これらの問題は、単に新しい収益化ツールの不在から生じているのではありません。より深い分析を通じて見ると、業界の核心的な問題は「持続不可能なワークフロー」にあります。高い制作費用[1]、絶え間ないコンテンツ生産のプレッシャー[4]、そしてそれに伴う短い活動寿命[3]の間には、明白な因果関係が存在します。単に新しい収益創出機会を提供するプラットフォームは、むしろクリエイターにさらなる成果を求めるプレッシャーをかけ、燃え尽きを加速させる可能性があります。したがって、真に必要とされる解決策は、コンテンツ制作自体のコストと労力を削減し、クリエイターのキャリアをより持続可能にするプラットフォームです。これが、Idol Islandが単なる収益化プラットフォームを超え、AIベースの共同創作エンジンを核心的なソリューションとして提示しなければならない理由です。</p>
                        <h4>伝統的な音楽産業の崩壊したモデル</h4>
                        <p>VTuber産業の問題点は、伝統的な音楽産業に見られる構造的矛盾とも類似しています。Spotifyのようなストリーミングプラットフォームは莫大な価値を創出しながらもアーティストにはごく一部の収益しか分配せず、不透明なレーベルの会計慣行はロイヤリティの流れを曖昧にしています。[5] このような歴史的背景は、透明でクリエイター中心の経済モデルの必要性をさらに強め、Idol Islandが追求する価値と方向性の正当性を裏付けています。</p>
                    </div></div>
                </div>
            `
        }
    };
    
    let currentLang = 'ko';
    let translations = {};

    // Function to fetch language data
    async function getLanguageData(lang) {
        // In a real application, you would fetch from a URL like `/lang/${lang}.json`
        // This is a simulation.
        return Promise.resolve(allTranslations[lang]);
    }

    // Function to apply translations
    const applyTranslations = () => {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.dataset.lang;
            if (translations[key]) {
                el.innerHTML = translations[key];
            }
        });
        const whitepaperContainer = document.getElementById('whitepaper-text');
        if (whitepaperContainer) {
            whitepaperContainer.innerHTML = translations.whitepaper || '';
            initAccordion();
        }
    };
    
    // Function to switch language
    const switchLanguage = async (lang) => {
        if (!lang) return;
        
        try {
            const data = await getLanguageData(lang);
            translations = data;
            currentLang = lang;
            document.documentElement.lang = lang;
            document.body.style.fontFamily = `var(--font-${lang})`;
            
            applyTranslations();

            document.getElementById('current-lang-text').textContent = lang.toUpperCase();
            langSwitcherDropdown.classList.add('hidden');
        } catch (error) {
            console.error('Error fetching language data:', error);
        }
    };

    // Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Language Switcher
    const langSwitcher = document.getElementById('lang-switcher');
    const langSwitcherBtn = document.getElementById('lang-switcher-btn');
    const langSwitcherDropdown = document.getElementById('lang-switcher-dropdown');

    langSwitcherBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcherDropdown.classList.toggle('hidden');
    });
    
    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcherDropdown.classList.add('hidden');
        }
    });
    
    document.querySelectorAll('[data-lang-code]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage(el.dataset.langCode);
        });
    });

    // Fade-in animation on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

    // Whitepaper Modal
    const whitepaperModal = document.getElementById('whitepaper-modal');
    const openBtn = document.getElementById('open-whitepaper-btn');
    const closeBtn = document.getElementById('close-whitepaper-btn');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        whitepaperModal.classList.remove('hidden');
        whitepaperModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        whitepaperModal.classList.add('hidden');
        whitepaperModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    whitepaperModal.addEventListener('click', (e) => {
        if (e.target === whitepaperModal) closeModal();
    });

    // Accordion Logic
    const initAccordion = () => {
        const whitepaperContainer = document.getElementById('whitepaper-text');
        whitepaperContainer.addEventListener('click', function(event) {
            const toggle = event.target.closest('.accordion-toggle');
            if (toggle) {
                const panel = toggle.nextElementSibling;
                toggle.classList.toggle('active');
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        });
    };

    document.getElementById('wp-expand-all')?.addEventListener('click', () => {
        document.querySelectorAll('.accordion-item').forEach(item => {
            const toggle = item.querySelector('.accordion-toggle');
            const panel = item.querySelector('.accordion-panel');
            toggle.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + "px";
        });
    });
    
    document.getElementById('wp-collapse-all')?.addEventListener('click', () => {
        document.querySelectorAll('.accordion-item').forEach(item => {
            const toggle = item.querySelector('.accordion-toggle');
            const panel = item.querySelector('.accordion-panel');
            toggle.classList.remove('active');
            panel.style.maxHeight = null;
        });
    });

    // Initial Load
    switchLanguage('ko');
});
