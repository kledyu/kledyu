import Heading from '@/components/ui/Heading';
import Content from '@/components/ui/Content';

export default function Career() {
  const CAREERS = {
    charm: {
      title: `2025' 서울시 매력 일자리 사업`,
      position: '웹 풀스택 수강생',
      period: '2025.05. ~ 2025.07.',
      details: `- 풀스택 웹 개발자 과정 수강 (Next.js, Express 등)
- 한양대학교 학과 페이지 개발 및 운영`,
    },
    vetool: {
      title: '주식회사 벳툴',
      position: '프론트엔드 엔지니어',
      period: '2024.06. ~ 2025.02.',
      details: `- 10여개 병원에서 사용하는 BaaS 동물병원 차트 서비스 개발 및 운영
- 2024 K-STARTUP 예비창업패키지 선정`,
    },
    fastcampus: {
      title: '패스트캠퍼스 프론트엔드 부트캠프',
      position: '수강생 & 리더',
      period: '2023.03. ~ 2023.10.',
      details: `- 패스트캠퍼스 프론트엔드 개발자 양성과정 수강 & 리더
- 수강생 리더로서 50명 가량의 수강생들과 운영진 사이에서 꾸준히 의사소통하며 학습 환경 증진
- 우수 수료생 선정
      `,
    },
    inu: {
      title: '인천대학교',
      position: '전자공학과',
      period: '2015.03. ~ 2024.02.',
      details: `- 전자공학 전공 & 학사`,
    },
  } as const;

  return (
    <div id='career' className='w-full'>
      <Heading heading='CAREERS' />

      <ul className='flex flex-col gap-10'>
        {Object.values(CAREERS).map((career) => (
          <Content key={career.title} {...career} />
        ))}
      </ul>
    </div>
  );
}
