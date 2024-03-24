import SubHeading from '@/app/components/SubHeading';
import Content from '@/app/components/Content';

import { randomUUID } from 'crypto';

export default function Licenses() {
  const LISENCES = {
    eng: {
      title: '영어',
      period: '2023.10.15.',
      details: ['OPIc, IH(Intermediate High)'],
    },
    korHis: {
      title: '한국사',
      period: '2019.08.23.',
      details: ['한국사능력검정시험, 1급'],
    },
  } as const;

  return (
    <div className='w-full'>
      <SubHeading heading='SKILL SET' />
      <div className='flex flex-col gap-10'>
        {Object.values(LISENCES).map((license) => (
          <Content key={randomUUID()} {...license} />
        ))}
      </div>
    </div>
  );
}
