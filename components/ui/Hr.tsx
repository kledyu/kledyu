import clsx from 'clsx';

export default function Hr({ isBold }: { isBold?: boolean }) {
  const hrClass = clsx(
    'w-full mt-24 mb-12 bg-gray-200 dark:border-white border-black',
    {
      'border-[2px]': isBold,
      'border-[0.5px]': !isBold,
    }
  );

  return <hr className={hrClass} />;
}
