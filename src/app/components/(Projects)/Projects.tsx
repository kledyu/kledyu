import SubHeading from '@/app/components/SubHeading';
import Content from '@/app/components/Content';

import { randomUUID } from 'crypto';

export default function Projects() {
  const PROJECTS = {
    orury: {
      image: '/orury.png',
      title: 'Orury',
      desc: '실내 클라이밍 커뮤니티',
      position: '프론트엔드 팀장',
      period: '2023.12. ~ 진행중',
      url: 'orury.com',
      details: `- 인증/인가, 커뮤니티, 마이페이지 서비스 개발
- Next.js를 통한 서버 컴포넌트 도입, 컴포넌트 단위 캐싱, 초기 페이지 렌더링 속도 단축을 통한 서비스 최적화 진행,
- 중복되거나 불필요한 API 호출을 줄이기 위해 SWR 방식의 **‘선 캐시(stale) 후 페칭(fetching)’** 도입, 응답시간 단축 및 **서버와의 요청 횟수 약 50% 감소**,
- 백엔드에서 생성한 **50여개의 API**에 대한 UX/UI 구현,
- 로딩 애니메이션, 스켈레톤 UI 제공, 미들웨어를 통한 비허가 접근 제어 및 404 페이지에 대한 UX/UI 개선,
- 반응형 웹 & PWA 기반 앱 개발, 스토어 출시 진행중,
      `,
    },
    officener: {
      image: '/officener.png',
      title: '오피스너',
      desc: '상용 서비스 `오피스너` 개선 웹앱',
      position: '프론트엔드 팀장',
      period: '2023.08. ~ 2023.10.',
      url: 'officener.vercel.app',
      details: `
- 실 상용 서비스 ‘오피스너’의 **유저 가입자수와 WAU 증진**을 위한 개선 웹앱 제작,
- Image Lazy-Loading & Eager-Loading, Font preload, Layout-Shift & FOUT 방지 등을 통한 **Lighthouse 기준 약 50% 이상의 퍼포먼스 개선**,
- 용량이 큰 gif보다 **25-34% 더 작은 파일 크기를 가진 webp** 이미지 조각의 적절한 사용을 통해 무겁지 않고 최적화된 룰렛 애니메이션을 구현,
- 백엔드에서 생성한 50여개의 API에 대한 UX/UI 구현,
- PM, UX/UI, 백엔드 직군과 함께 협업하여 프로젝트 진행,
- **패스트캠퍼스 부트캠프 최우수 프로젝트 선정**,
      `,
    },
    woojoo: {
      image: '/woojoo.png',
      title: '우주 부동산',
      desc: '우주 판매 전자상거래 서비스',
      position: '프론트엔드 팀장',
      period: '2023.06. ~ 2023.07.',
      url: 'woojoo-land.netlify.app',
      details: `
- 프로젝트 구성, 메인 페이지, 장바구니, 찜, 결제 파트 구현,
- redux/toolkit & redux/saga를 통한 장바구니 및 즉시 구매 상품 전역적 관리를 통해 **props-drilling 최소화**,
- React-Query를 통해 로그인 시 사용자 정보 캐싱, 인증 과정에서 발생했던 **추가적인 서버와의 통신 50% 감소**,
- 찜 목록을 LocalStorage에 저장하여 반영구적 관리, 사용자가 서비스를 다시 방문할 때, 이전에 찜한 항목을 복원하여 사용자 경험 향상,
      `,
    },
  } as const;

  return (
    <div className='w-full'>
      <SubHeading heading='PROJECTS' />
      <div className='flex flex-col gap-8'>
        {Object.values(PROJECTS).map((project) => (
          <Content key={randomUUID()} {...project} />
        ))}
      </div>
    </div>
  );
}
