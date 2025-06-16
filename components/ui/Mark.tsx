export default function Mark({ children }: { children: React.ReactNode }) {
  return (
    <mark className='px-1 text-[90%] rounded shadow-[inset_0_-1px_0_rgba(0,0,0,0.25)] dark:bg-yellow-400 dark:text-[#121212] bg-neutral-800 text-white'>
      {children}
    </mark>
  );
}
