'use client';

import { SECTIONS } from '@/components/Main';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 96,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className='fixed flex items-center top-0 z-10 bg-white dark:bg-stone-950 w-full h-12 xl:px-64 lg:px-32 sm:px-8 px-4 border-b'>
      <div className='hidden sm:flex gap-4 xl:gap-8'>
        {SECTIONS.map(
          ({ label, Component, isFirst }) =>
            !isFirst && (
              <button
                key={label}
                onClick={() => handleClick(Component.name.toLowerCase())}
                className='text-xs sm:text-base md:text-lg font-normal font-sans'>
                {label}
              </button>
            )
        )}
      </div>

      <ThemeToggle />
    </header>
  );
}
