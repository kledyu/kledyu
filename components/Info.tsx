import { cn } from '@/lib/utils';
import { Github, Mail, PhoneCall } from 'lucide-react';
import { Nanum_Gothic } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const nanum = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

const INFORMATIONS = [
  {
    icon: <PhoneCall className='w-5 h-5 text-gray-700 dark:text-gray-400' />,
    text: '010-4553-1704',
    href: 'tel:01045531704',
  },
  {
    icon: <Mail className='w-5 h-5 text-gray-700 dark:text-gray-400' />,
    text: 'kledyu@kakao.com',
    href: 'mailto:kledyu@kakao.com',
  },
  {
    icon: <Github className='w-5 h-5 text-gray-700 dark:text-gray-400' />,
    text: 'github.com/kledyu',
    href: 'https://github.com/kledyu',
  },
] as const;

export default function Info() {
  return (
    <div className='flex gap-6 justify-between w-full sm:gap-24 lg:gap-48 items-center md:items-start'>
      <div className='flex flex-col justify-between h-48 md:h-96'>
        <div className='space-y-4'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight'>
            유희태
          </h1>
          <h2 className='text-base md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium'>
            프론트엔드 엔지니어
          </h2>
        </div>

        <ul>
          {INFORMATIONS.map((info) => (
            <li key={info.text} className='list-none'>
              <Link
                href={info.href}
                target='_blank'
                className={cn(
                  'flex items-center gap-3 transition-colors',
                  nanum.className
                )}>
                <div className='flex items-center justify-center'>
                  {info.icon}
                </div>

                <span className='text-sm lg:text-lg hover:underline'>
                  {info.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='relative w-32 h-48 md:w-80 md:h-96'>
        <Image
          src='/profile.jpg'
          alt='프로필 사진'
          fill
          className='rounded-xl object-cover'
          priority
        />
      </div>
    </div>
  );
}
