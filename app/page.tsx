import AboutMe from '@/app/components/(AboutMe)/AboutMe';
import Certifications from '@/app/components/(Certifications)/Certifications';
import Career from '@/app/components/(Career)/Career';
import Projects from '@/app/components/(Projects)/Projects';
import SkillSet from '@/app/components/(SkillSet)/SkillSet';
import Info from '@/app/components/Info';
import Section from '@/app/components/ui/Section';

export const SECTIONS = [
  { Component: Info, isFirst: true },
  { Component: AboutMe, label: 'ABOUT ME', isBold: true },
  { Component: Projects, label: 'PROJECTS' },
  { Component: SkillSet, label: 'SKILL SET' },
  { Component: Career, label: 'CAREER' },
  { Component: Certifications, label: 'CERTIFICATIONS' },
];

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center px-4 py-32 sm:px-8 xl:px-64 lg:px-32 dark:bg-stone-950'>
      {SECTIONS.map(({ Component, isFirst, isBold }) => (
        <Section key={Component.name} isFirst={isFirst} isBold={isBold}>
          <Component />
        </Section>
      ))}
    </main>
  );
}
