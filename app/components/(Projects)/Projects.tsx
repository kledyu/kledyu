import Content from '@/app/components/ui/Content';
import Heading from '@/app/components/ui/Heading';

export default function Projects() {
  const PROJECTS = {
    orury: {
      image: '/logos/vetool.png',
      imageWidth: 168,
      title: '벳툴',
      desc: '동물병원 입원 차트 애플리케이션',
      position: '프론트엔드 개발',
      period: '2024.06. ~ 2025.02.',
      url: 'vetool.co.kr',
      github: 'kledyu/Vetool',
      details: `- Next.js와 TypeScript 기반의 동물병원 입원 환자 관리 서비스 설계 및 개발
- PostgreSQL 기반 RDBMS 설계 및 **Row Level Security(RLS)를 활용한 다중 권한 체계 구현**
- 환자 테이블 인덱스 최적화로 **쿼리 계획 시간 67% 단축** (1.7ms → 0.5ms), **실행 시간 25% 감소** (10ms → 6.8ms) → 일 63,000건 API 요청 처리 시 **총 2.4초 단축**, 고부하 상황에서 서버 리소스 사용량 절감
- AWS S3 Presigned URL 도입으로 **서버 부하 감소** 및 이미지 최적화를 통한 **이미지 로드 속도 70% 단축**
- 에러 모니터링 시스템 구축 및 사용자 피드백 기반 개선 프로세스 확립
- PWA(Progressive Web App) 기술 적용으로 크로스 플랫폼 지원, 공간 제약 없는 환자 관리 실현
- 반응형 웹 디자인 적용으로 다양한 디바이스 환경 지원
      `,
    },
    officener: {
      image: '/logos/officener.png',
      title: '오피스너',
      desc: '상용 서비스 `오피스너` 개선 웹앱',
      position: '프론트엔드 팀장',
      period: '2023.08. ~ 2023.10.',
      src: '/officener_pdf.pdf',
      github: 'livable-final/client',
      details: `
- 상용 서비스 ‘오피스너’의 **유저 가입자수와 WAU 증진**을 위한 개선 웹앱 제작
- Core Web Vitals 최적화: Image Lazy/Eager Loading, Font Preload 전략 도입으로 **Lighthouse 퍼포먼스 50% 이상 개선**
- WebP 이미지 포맷 도입 및 최적화로 기존 GIF 대비 **리소스 사용량 30% 절감**
- RESTful API 50개 이상 연동 및 상태 관리 아키텍처 설계
- PM, UX/UI, 백엔드 직군과 함께 협업하여 프로젝트 진행
- **패스트캠퍼스 부트캠프 최우수 프로젝트 선정**
      `,
    },
    woojoo: {
      image: '/logos/woojoo.png',
      title: '우주 부동산',
      desc: '우주 판매 전자상거래 서비스',
      position: '프론트엔드 팀장',
      period: '2023.06. ~ 2023.07.',
      url: 'woojoo-land.netlify.app',
      github: 'kledyu/woojoo_land',
      details: `
- 프로젝트 구성, 메인 페이지, 장바구니, 찜, 결제 파트 구현
- Redux Toolkit과 Redux Saga를 활용해 전역 상태 관리 시스템을 구축하고, **컴포넌트 간 결합도 감소**
- React Query를 활용한 데이터 캐싱 전략 구현으로 인증 관련 **API 호출 50% 감소**
- LocalStorage를 활용한 사용자 선호도 데이터 영구 저장 로직 구현으로 이탈률 감소
- 장바구니, 결제 시스템 등 핵심 비즈니스 로직 구현
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
