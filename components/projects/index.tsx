import Content from '@/components/ui/Content';
import Heading from '@/components/ui/Heading';

export default function Projects() {
  const PROJECTS = {
    prism: {
      title: '프리즘',
      desc: '반도체 장비사의 데이터를 자연어로 묻고 답하는 AI 분석 시스템',
      position: '프론트엔드 개발',
      period: '2026.05. ~ 2026.07.',
      details: `- 반도체 장비사 이슈 데이터를 분석·시각화하고 자연어 질의응답을 제공하는 폐쇄망 사내 시스템 구축
- 자연어 검색 화면과 LLM 분석 엔진을 연동해 **질문 → 답변 + 근거 이슈 목록·상세 패널**로 이어지는 RAG 검색 UX 설계
- 스트리밍 응답에 타임아웃·취소·에러 폴백(무응답 45초·전체 3분 자동 종료)을 적용해 **무한 로딩 제거** 및 엔진 장애 사유 노출
- 계정 단위 세션 인증 기반 대화 기록 저장·조회·삭제 구현 및 타 사용자 데이터 격리(접근 제어) 검증
- 출처·페이지 근거 카드와 문서 관계 지식 맵 시각화, 배포본 한정 문서 유출 방지 처리
- 인터넷이 차단된 폐쇄망 납품 환경을 위해 정적 빌드·단일 도메인 역프록시 구성과 외부 의존성 제거, 설치 런북 문서화
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
