import Link from 'next/link';
import { Nanum_Gothic } from 'next/font/google';
import { PhoneCall, Mail, Github } from 'lucide-react';

const nanum = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

export default function Info() {
  return (
    <div className='w-full flex justify-between h-24'>
      <div className='flex flex-col justify-between'>
        <h1 className='text-[3rem] leading-[3rem] tracking-wider'>유희태</h1>
        <h3>프론트엔드 엔지니어</h3>
      </div>
      <div className='flex justify-evenly flex-col'>
        <div className='flex gap-3 items-center'>
          <PhoneCall strokeWidth={1.5} />
          <span className={nanum.className}>010-4553-1704</span>
        </div>
        <div className='flex gap-3 items-center'>
          <Mail strokeWidth={1.5} />
          <Link href='mailto:kledyu@kakao.com' className={nanum.className}>
            kledyu@kakao.com
          </Link>
        </div>
        <div className='flex gap-3 items-center'>
          <Github strokeWidth={1.5} />
          <Link
            target='_blank'
            href='https://github.com/kledyu'
            className={nanum.className}>
            github.com/kledyu
          </Link>
        </div>
      </div>
    </div>
  );
}
