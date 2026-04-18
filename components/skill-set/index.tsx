import Heading from '@/components/ui/Heading';
import Content from '@/components/ui/Content';

export default function SkillSet() {
  const SKILL_SET = {
    development: {
      title: 'Development',
      details: `- JavaScript, TypeScript, React 19, Next 15
- React-hook-form, zod
- React Query, SWR, Axios, REST API
      `,
    },
    styling: {
      title: 'Styling',
      details: `- Tailwind CSS
- Styled-Component, Emotion
- CSS, SCSS`,
    },
    stateManagement: {
      title: 'State Management',
      details: `- Zustand`,
    },
    database: {
      title: 'Database',
      details: `- PostgreSQL, Supabase`,
    },
    testing: {
      title: 'Testing',
      details: `- Jest, React Testing Library`,
    },
  } as const;

  return (
    <div id='skillset' className='w-full'>
      <Heading heading='SKILL SET' />
      <div className='flex flex-col gap-10'>
        {Object.values(SKILL_SET).map((skill) => (
          <Content key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
}
