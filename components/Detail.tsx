import { cn } from '@/lib/utils';
import Mark from '@/components/ui/Mark';
import { Nanum_Gothic } from 'next/font/google';

const nanum = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

export default function Detail() {
  return (
    <p className={cn(nanum.className, 'sm:text-lg')}>
      화면 너머 <strong>AI와 아키텍처</strong>까지 책임지는{' '}
      <Mark>프론트엔드 엔지니어</Mark>입니다. 일 6만 건 트래픽부터 자연어 AI
      분석 시스템까지, 사용자가 만나는 모든 경험을 설계합니다.
      <br />
      <br />
      메디컬 서비스 회사에서 <strong>일일 API 요청 63,000건 이상</strong>을
      처리하는 시스템을 운영했습니다. React Server Components 도입과 Web Vitals
      최적화를 통해 <Mark>Lighthouse 성능 점수를 평균 98점</Mark>으로 유지하며
      사용자 경험을 개선했습니다.
      <br />
      <br />
      현재는 근로자 안전 솔루션을 개발하며 Next.js 모놀리식 레거시를{' '}
      <strong>React/Rust 기반 MSA</strong>로 마이그레이션하고, 반도체 장비사의
      데이터를 자연어로 질의응답하는 <Mark>AI 분석 시스템(RAG)</Mark>을
      구축하는 등 프론트엔드를 넘어 아키텍처와 AI 영역까지 확장하고 있습니다.
      <br />
      <br />
      패스트캠퍼스 프론트엔드 부트캠프에서 <strong>50여 명의 개발자</strong>를
      이끌며 코드 리뷰와 버전 관리 체계를 구축해{' '}
      <Mark>최우수 프로젝트 및 수강생</Mark>으로 선정되었습니다. PM, UX/UI
      디자이너, 백엔드 엔지니어와 협업하여 기술적 문제 해결을 넘어 비즈니스
      가치를 만드는 데 집중합니다.
    </p>
  );
}
