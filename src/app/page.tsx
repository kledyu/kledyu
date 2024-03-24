import Hr from '@/app/components/Hr';
import Info from '@/app/components/Info';
import AboutMe from '@/app/components/(AboutMe)/AboutMe';
import Projects from '@/app/components/(Projects)/Projects';
import Educations from '@/app/components/(Educations)/Educations';
import SkillSet from '@/app/components/(SkillSet)/SkillSet';
import Licenses from '@/app/components/(Licenses)/Licenses';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center px-4 py-10 sm:px-64 sm:py-16'>
      <Info />
      <Hr isBold />
      <AboutMe />
      <Hr />
      <Projects />
      <Hr />
      <SkillSet />
      <Hr />
      <Educations />
      <Hr />
      <Licenses />
    </main>
  );
}
