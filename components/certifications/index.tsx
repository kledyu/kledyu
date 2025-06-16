import Content from '@/components/ui/Content';
import Heading from '@/components/ui/Heading';

export default function Certifications() {
  const CERTIFICATIONS = {
    data: {
      title: '정보처리기사',
      period: '2025.05.11. ~ 진행중',
      details: `- 정보처리기사 필기 합격 및 실기 준비중`,
    },
    eng: {
      title: '영어',
      period: '2023.10.15.',
      details: `- OPIc, IH(Intermediate High)`,
    },
    korHis: {
      title: '한국사',
      period: '2019.08.23.',
      details: `- 한국사능력검정시험, 1급`,
    },
  } as const;

  return (
    <div id='certifications' className='w-full'>
      <Heading heading='CERTIFICATIONS' />
      <div className='flex flex-col gap-10'>
        {Object.values(CERTIFICATIONS).map((certification) => (
          <Content key={certification.title} {...certification} />
        ))}
      </div>
    </div>
  );
}
