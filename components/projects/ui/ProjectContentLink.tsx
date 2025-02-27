'use client';

import Link from 'next/link';

interface ProjectContentLinkProps {
  src?: string;
  href?: string;
  children: React.ReactNode;
}

export default function ProjectContentLink({
  src,
  href,
  children,
}: ProjectContentLinkProps) {
  const handlePdfClick = () => {
    window.open(src!, '_blank', 'noopener,noreferrer');
  };

  return (
    <label className='flex underline text-gray-700 dark:text-gray-300  sm:text-base text-xs w-fit'>
      {src ? (
        <button onClick={handlePdfClick}>{children}</button>
      ) : (
        <Link href={href!} target='_blank'>
          {children}
        </Link>
      )}
    </label>
  );
}
