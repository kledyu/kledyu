import Content from '@/app/components/ui/Content';
import Heading from '@/app/components/ui/Heading';

export default function Certifications() {
  const CERTIFICATIONS = {
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
