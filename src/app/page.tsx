import Hr from '@/app/components/Hr';
import Info from '@/app/components/Info';
import AboutMe from '@/app/components/(AboutMe)/AboutMe';
import Projects from '@/app/components/(Projects)/Projects';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-12'>
      <Info />
      <Hr isBold />
      <AboutMe />
      <Hr />
      <Projects />
    </main>
  );
}
