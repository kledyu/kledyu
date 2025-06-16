import AboutMe from '@/components/about-me';
import Career from '@/components/career';
import Certifications from '@/components/certifications';
import Info from '@/components/Info';
import Projects from '@/components/projects';
import SkillSet from '@/components/skill-set';
import Section from '@/components/ui/Section';

export const SECTIONS = [
  { Component: Info, isFirst: true },
  { Component: AboutMe, label: 'ABOUT ME', isBold: true },
  { Component: Projects, label: 'PROJECTS' },
  { Component: SkillSet, label: 'SKILL SET' },
  { Component: Career, label: 'CAREER' },
  { Component: Certifications, label: 'CERTIFICATIONS' },
];

export default function Main() {
  return (
    <main className='flex min-h-screen flex-col items-center px-4 py-32 sm:px-8 xl:px-64 lg:px-32 dark:bg-[#121212]'>
      {SECTIONS.map(({ Component, isFirst, isBold }) => (
        <Section key={Component.name} isFirst={isFirst} isBold={isBold}>
          <Component />
        </Section>
      ))}
    </main>
  );
}
