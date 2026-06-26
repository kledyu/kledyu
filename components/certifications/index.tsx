import Content from '@/components/ui/Content';
import Heading from '@/components/ui/Heading';

export default function Certifications() {
  const CERTIFICATIONS = {
    engineer: {
      title: '정보처리기사',
      period: '2026.06.12.',
      details: `- 정보처리기사`,
    },
    sqld: {
      title: 'SQLD',
      period: '2026.03.27.',
      details: `- SQL 개발자`,
    },
    eng: {
      title: 'OPIc 영어',
      period: '2023.10.15.',
      details: `- IH(Intermediate High)`,
    },
    korHis: {
      title: '한국사능력검정시험',
      period: '2019.08.23.',
      details: `- 1급`,
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
