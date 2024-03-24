import SubHeading from '@/app/components/SubHeading';
import Content from '@/app/components/Content';

import { randomUUID } from 'crypto';

export default function SkillSet() {
  const SKILL_SET = {
    development: {
      title: 'Development',
      details: [
        'JavaScript, TypeScript, React, Next.js',
        'React-hook-form, zod',
        'SWR, Axios, REST API',
      ],
    },
    styling: {
      title: 'Styling',
      details: ['CSS, SCSS', 'Styled-Component, Emotion', 'Tailwind CSS'],
    },
    stateManagement: {
      title: 'State-Management',
      details: ['Recoil, Zustand, React-Query'],
    },
    testing: {
      title: 'Testing',
      details: ['Jest, React-Test-Libaray'],
    },
  } as const;

  return (
    <div className='w-full'>
      <SubHeading heading='SKILL SET' />
      <div className='flex flex-col gap-10'>
        {Object.values(SKILL_SET).map((project) => (
          <Content key={randomUUID()} {...project} />
        ))}
      </div>
    </div>
  );
}
