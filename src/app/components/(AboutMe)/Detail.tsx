import { Nanum_Gothic } from 'next/font/google';

const nanum = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

export default function Detail() {
  return (
    <p className={nanum.className}>
      JavaScript & TypeScript / React & Next.js 기반의 프론트엔드
      엔지니어로서&nbsp;
      <strong>웹앱 성능 향상</strong>에 관심이 많아 다수의 프로젝트에 참여하여{' '}
      <strong>
        Image Lazy-Loading & Eager-Loading, FP Time 향상 등의 애셋 로딩에 대한
        지연 시간 등을 보완
      </strong>
      하여&nbsp;
      <mark>LightHouse 퍼포먼스 약 30% 향상 및 SEO 최적화</mark>
      를 이끈 경험이 있습니다.
      <br /> <br /> 2023년 한 해에만 꾸준함을 갖고&nbsp;
      <mark>2,543회</mark>의 GitHub Contributions을 기록하고 버전관리, Code
      Review, Pull & Request를 통해 코드의 버전을 관리하고 협업하는 것을
      즐겨합니다. 좋은 서비스가 만들어지는 것에는 개인적 역량보단 팀과 함께
      만드는 시너지가 중요하다고 생각하여 <mark>팀과 팀원의 동반성장</mark>을
      추구하여 <strong>철저한 Code Review</strong>를 통해 동료가 작성한 코드에
      대해 충분히 이해를 수반한 협업을 이루어내는 것을 지향합니다.
      <br /> <br />
      패스트캠퍼스 프론트엔드 부트캠프 리더로서 약 <strong>50여명</strong>의
      프론트엔드 개발자들을 이끌어 본 경 험이 있고, 이를 바탕으로{' '}
      <strong>최우수 프로젝트, 최우수 수강생</strong>에 선정된 경험을 보유하고
      있습니다. 또한 다양한 직군과 함께 서비스를 만드는 것을 중요히 생각하여{' '}
      <strong>PM, UX/UI, 백엔드 직군과 함께 협업</strong>하여 프로젝트를 진행한
      경험이 있습니다.
    </p>
  );
}
