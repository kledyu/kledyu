import Link from 'next/link';
import { Nanum_Gothic } from 'next/font/google';
import { PhoneCall, Mail, Github } from 'lucide-react';

const nanum = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

const INFORMATIONS = [
  {
    icon: <PhoneCall strokeWidth={1.5} />,
    text: '010-4553-1704',
    href: 'tel:01045531704',
  },
  {
    icon: <Mail strokeWidth={1.5} />,
    text: 'kledyu@kakao.com',
    href: 'mailto:kledyu@kakao.com',
  },
  {
    icon: <Github strokeWidth={1.5} />,
    text: 'github.com/kledyu',
    href: 'https://github.com/kledyu',
  },
];

export default function Info() {
  return (
    <div className='w-full flex justify-between h-24'>
      <div className='flex flex-col justify-between'>
        <h1 className='text-5xl leading-10 tracking-wider font-bold'>유희태</h1>
        <h3>프론트엔드 엔지니어</h3>
      </div>

      <ul className='flex justify-evenly flex-col'>
        {INFORMATIONS.map((info) => (
          <li key={info.text} className='flex gap-3 items-center'>
            {info.icon}

            <Link href={info.href} target='_blank' className={nanum.className}>
              {info.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
