import { cn } from '@/lib/utils';
import Mark from '@/components/ui/Mark';
import { Nanum_Gothic } from 'next/font/google';

const nanum = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

export default function Detail() {
  return (
    <p className={cn(nanum.className, 'sm:text-lg')}>
      <strong>JavaScript/TypeScript</strong>와 <strong>React/Next.js</strong>로{' '}
      <Mark>대규모 트래픽을 다루는 프론트엔드 엔지니어</Mark>입니다.
      <br />
      <br />
      메디컬 서비스 회사에서 <strong>일일 API 요청 63,000건 이상</strong>을
      처리하는 시스템을 운영했습니다. React Server Components 도입과 Web Vitals
      최적화를 통해 <Mark>Lighthouse 성능 점수를 평균 98점</Mark>으로 유지하며
      사용자 경험을 개선했습니다.
      <br />
      <br />
      패스트캠퍼스 프론트엔드 부트캠프에서 <strong>50여 명의 개발자</strong>를
      이끌며 코드 리뷰와 버전 관리 체계를 구축했고,{' '}
      <Mark>최우수 프로젝트 및 수강생</Mark>으로 선정되었습니다.
      <br />
      <br />
      <strong>PM, UX/UI 디자이너, 백엔드 엔지니어</strong>와 협업하여 기술적
      문제 해결을 넘어 <Mark>비즈니스 가치를 만드는 데 집중</Mark>합니다. 개인의
      성장만큼 팀 전체의 성장을 중요하게 생각합니다.
    </p>
  );
}
