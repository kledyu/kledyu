import ProjectContentLink from '@/components/projects/ui/ProjectContentLink';
import { cn } from '@/lib/utils';
import { Noto_Sans_KR } from 'next/font/google';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ContentProps {
  title: string;
  details: string;
  image?: string;
  desc?: string;
  position?: string;
  period?: string;
  url?: string;
  github?: string;
  src?: string;
  imageWidth?: number;
}

const sans = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '600'] });

export default function Content({ ...props }: ContentProps) {
  const {
    image,
    title,
    desc,
    position,
    period,
    url,
    details,
    imageWidth,
    github,
    src,
  } = props;

  return (
    <li
      className={cn(
        'w-full flex flex-col sm:flex-row justify-between gap-8 sm:gap-14',
        sans.className
      )}>
      <div className='flex flex-col min-w-[35%]'>
        <div className='flex gap-3 mb-2 '>
          <span className='leading-8 font-semibold text-2xl sm:text-3xl'>
            {title}
          </span>

          {image && (
            <Image
              src={image}
              alt='favicon'
              width={imageWidth ?? 36}
              height={36}
              priority
            />
          )}
        </div>

        <span className='2xl:text-base md:text-sm'>{desc}</span>

        <div>
          {position && (
            <span className='text-gray-800 dark:text-gray-200 sm:text-base text-xs'>
              {position} | &nbsp;
            </span>
          )}

          <span className='text-gray-800 dark:text-gray-200 sm:text-base text-xs'>
            {period}
          </span>
        </div>

        {url && (
          <ProjectContentLink href={`https://${url}`}>
            홈페이지
          </ProjectContentLink>
        )}

        {src && <ProjectContentLink src={src}>관련 자료</ProjectContentLink>}

        {github && (
          <ProjectContentLink href={`https://github.com/${github}`}>
            깃허브
          </ProjectContentLink>
        )}
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className='min-w-[65%] sm:p-0 px-4 2xl:text-lg md:text-base text-sm'>
        {details}
      </ReactMarkdown>
    </li>
  );
}
