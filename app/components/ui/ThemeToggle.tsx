'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative h-8 w-16 rounded-full p-1 ring-1 transition-all duration-300 ml-auto',
        theme === 'dark'
          ? 'bg-slate-200 ring-slate-100 hover:bg-slate-300'
          : 'bg-slate-900 ring-slate-200 hover:bg-slate-700'
      )}>
      <motion.div
        animate={{
          x: theme === 'dark' ? '2rem' : '0rem',
          rotate: theme === 'dark' ? 230 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
        className={cn(
          'flex h-6 w-6 items-center justify-center rounded-full',
          theme === 'dark'
            ? 'bg-slate-950 text-slate-200'
            : 'bg-white text-yellow-500 shadow-md'
        )}>
        {theme === 'dark' ? (
          <Moon className='h-4 w-4' />
        ) : (
          <Sun className='h-4 w-4' />
        )}
      </motion.div>
    </button>
  );
}
