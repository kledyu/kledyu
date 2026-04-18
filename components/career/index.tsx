import Heading from '@/components/ui/Heading';
import Content from '@/components/ui/Content';

export default function Career() {
  const CAREERS = {
    careernet: {
      title: '㈜ 커리어넷',
      position: '연구소 · 풀스택 엔지니어',
      period: '2025.07. ~ 재직중',
      details: `- 산업안전보건법과 중대재해처벌법 기반 근로자 안전 솔루션 세이프티원 제작
- Next.js 모놀리식 아키텍처 레거시를 React/Rust 구조 MSA 아키텍처로 마이그레이션`,
    },
    vetool: {
      title: '㈜ 벳툴',
      position: '풀스택 엔지니어',
      period: '2024.06. ~ 2025.02.',
      details: `- 10여개 병원에서 사용하는 BaaS 동물병원 차트 서비스 개발 및 운영
- 성능 개선: PostgreSQL 인덱스 최적화 및 AWS S3 Presigned URL 도입
- 일 63,000건 API 처리 시 총 2.4초 단축, 이미지 로드 속도 70% 개선
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
      details: `- 전자공학 전공 & 학사
- 교내 소프트웨어 동아리 PINCOM 활동      
      `,
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
