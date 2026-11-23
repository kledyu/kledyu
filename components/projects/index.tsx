import Content from '@/components/ui/Content';
import Heading from '@/components/ui/Heading';

export default function Projects() {
  const PROJECTS = {
    prism: {
      title: '프리즘',
      desc: '반도체 장비사의 Jira 이슈와 기술 문서를 자연어로 묻고 답하는 폐쇄망 온프레미스 AI 검색·분석 시스템',
      position: '풀스택 개발 · AI 검색',
      period: '2026.05. ~ 2026.08.',
      details: `- Rust 기반 **규칙 기반 + LLM 하이브리드 질의 이해** 파이프라인 구현: 용어집 매칭 우선, 미해결 질문만 Gemma 3 27B **Structured Output**으로 검색 조건 생성, 스키마 검증 실패 시 **Self-correction** 후 Fail-closed
- Text-to-SQL 대신 LLM이 **검증 가능한 중간 표현**(검색 DSL)만 생성하고 쿼리 변환·수치 계산은 서버가 맡도록 분리해 환각과 쿼리 오용 차단
- ClickHouse 정확 검색과 BGE-M3 의미 검색을 **RRF로 결합한 하이브리드 검색**, 이슈 1만여 건을 **벡터 5만 8천 개**로 색인하고 거리 컷오프를 실측 조정해 노이즈 제거 (164건 → 45건)
- 용어집 **494개 용어·798개 별칭**으로 한국어 질의를 정규화하고, **변형 질의 2만 9천 건 회귀 테스트**로 품질 검증
- PDF를 문서·페이지·본문·이미지 노드와 포함·동일 페이지·유사도 관계의 **문서 그래프**로 구성한 **그래프 기반 RAG** 고도화: 벡터 검색 결과를 **2-hop 이웃으로 확장**해 이미지 설명에서 같은 페이지 본문까지 근거를 보강하고, 인용을 실제 근거와 대조해 검증
- 리랭커(bge-reranker) 병목을 단계별 지연 측정으로 찾아 동시성 제한·대기열 도입, 함수 호출을 지원하지 않는 Gemma용 **OpenAI 호환 LLM 중계기** 구현
- React 19 기반 **8개 화면 프론트엔드 전담**: SSE 스트리밍 답변, 근거 이슈·원문 페이지 연결, 문서 지식 맵 시각화
      `,
    },
    vetool: {
      image: '/logos/vetool.png',
      imageWidth: 168,
      title: '벳툴',
      desc: '10여 개 병원에서 사용하는 SaaS 동물병원 입원 차트 서비스',
      position: '프론트엔드 개발',
      period: '2024.06. ~ 2025.02.',
      url: 'vetool.co.kr',
      github: 'kledyu/Vetool',
      details: `- PostgreSQL 기반 RDBMS 설계 및 **Row Level Security(RLS)를 활용한 다중 권한 체계 구현**
- **문제**: 기존 차트 시스템의 성능 이슈와 접근성 제약
- **해결**: Next.js 기반 PWA 구현, 이미지 최적화 및 인덱스 튜닝
- **결과**: 환자 테이블 인덱스 최적화로 **쿼리 성능 67% 개선** (1.7ms → 0.5ms), 일 63,000건 API 요청 처리 시 **총 2.4초 단축**
- AWS S3 Presigned URL 도입으로 **이미지 로드 속도 70% 단축**
- 에러 모니터링 시스템 구축 및 사용자 피드백 기반 개선 프로세스 확립
      `,
    },
    officener: {
      image: '/logos/officener.png',
      title: '오피스너',
      desc: '상용 서비스 `오피스너` 개선 웹앱',
      position: '프론트엔드 팀장',
      period: '2023.08. ~ 2023.10.',
      src: '/documents/officener.pdf',
      github: 'livable-final/client',
      details: `
- 상용 서비스 '오피스너'의 **유저 가입자수와 WAU 증진**을 위한 개선 웹앱 제작
- Core Web Vitals 최적화: Image Lazy/Eager Loading, Font Preload 전략 도입으로 **Lighthouse 퍼포먼스 50% 이상 개선**
- WebP 이미지 포맷 도입 및 최적화로 기존 GIF 대비 **리소스 사용량 30% 절감**
- RESTful API 50개 이상 연동 및 상태 관리 아키텍처 설계
- PM, UX/UI, 백엔드 직군과 함께 협업하여 프로젝트 진행
- **패스트캠퍼스 부트캠프 최우수 프로젝트 선정**
      `,
    },
  } as const;

  return (
    <div id='projects' className='w-full'>
      <Heading heading='PROJECTS' />

      <div className='flex flex-col gap-8'>
        {Object.values(PROJECTS).map((project) => (
          <Content key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
