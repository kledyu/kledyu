import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Noto_Sans_KR } from 'next/font/google';

interface ContentProps {
  title: string;
  details: string;
  image?: string;
  desc?: string;
  position?: string;
  period?: string;
  url?: string;
}

const sans = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '600'] });

export default function Content({ ...props }: ContentProps) {
  const { image, title, desc, position, period, url, details } = props;

  return (
    <div
      className={`w-full flex flex-col sm:flex-row justify-between gap-4 ${sans.className}`}>
      <div className='flex flex-col min-w-[35%] gap-1'>
        <div className='flex gap-3 mb-2 sm:max-w-[80%]'>
          {image && (
            <Image
              src={image}
              alt='favicon'
              width={36}
              height={36}
              priority
              quality={100}
            />
          )}

          <span
            className={`${
              position ? 'text-[2rem]' : 'text-lg'
            } leading-8 font-semibold`}>
            {title}
          </span>
        </div>

        <span className='sm:text-base text-sm'>{desc}</span>

        <div className='flex'>
          {position && (
            <span className='text-stone-400 sm:text-base text-xs'>
              {position} | &nbsp;
            </span>
          )}

          <span className='text-stone-400 sm:text-base text-xs'> {period}</span>
        </div>

        <Link
          href={`https://${url}`}
          target='_blank'
          className='underline text-gray-600 sm:text-base text-xs'>
          {url}
        </Link>
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className='min-w-[65%] sm:p-0 px-4'>
        {details}
      </ReactMarkdown>
    </div>
  );
}
