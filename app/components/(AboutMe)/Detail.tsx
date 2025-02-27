import Mark from '@/app/components/(AboutMe)/ui/Mark';
import { Nanum_Gothic } from 'next/font/google';

const nanum = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

export default function Detail() {
  return (
    <p className={nanum.className}>
      <strong>JavaScript & TypeScript / React & Next.js</strong> 기반의
      프론트엔드 엔지니어로서,&nbsp;
      <Mark>성능 최적화와 확장 가능한 시스템 설계</Mark>에 관심이 많습니다
      <br />
      <br />
      <strong>
        일일 API 요청 60,000건 이상의 메디컬 서비스 회사에서 근무한 경험
      </strong>
      이 있으며 React Server Components, Web Vitals 최적화 도입으로&nbsp;
      <strong>Lighthouse 퍼포먼스 점수를 평균 98점</strong>으로 유지하여{' '}
      <Mark>사용자 경험을 극대화</Mark>했습니다.
      <br /> <br />
      사용자 중심의 확장 가능한 솔루션을 설계하는 데 강한 열정을 가지고
      있습니다. 빠르게 변화하는 기술 환경 속에서도 지속적으로 학습하고{' '}
      <strong>좋은 서비스는 개인의 역량보다 팀과 함께 만드는 시너지</strong>에서
      나온다고 믿으며, <Mark>팀과 팀원의 동반성장</Mark>을 추구합니다.
      <br /> <br />
      또한 패스트캠퍼스 프론트엔드 부트캠프에서 <strong>50여 명</strong>의
      개발자 리더로서, 체계적인 코드 리뷰와 버전 관리를 통해 팀 전체의 코드
      품질을 향상시켰습니다. 그 결과, <strong>최우수 프로젝트 및 수강생</strong>
      으로 선정된 경험이 있고, 다양한 직군과 함께 서비스를 만드는 것을 중요히
      생각하여 <strong>PM, UX/UI 디자이너, 백엔드 엔지니어</strong>등 다양한
      직군과의 긴밀한 협업을 통해 기술적 해결책뿐 아니라,{' '}
      <Mark>비즈니스 가치 창출에 기여하는 개발자</Mark>로 성장해왔습니다.
    </p>
  );
}
