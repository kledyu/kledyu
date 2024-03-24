import clsx from 'clsx';

export default function Hr({ isBold }: { isBold?: boolean }) {
  const hrClass = clsx('w-full mt-10 mb-6 bg-gray-200 border-black', {
    'border-[2px]': isBold,
    'border-[0.5px]': !isBold,
  });

  return <hr className={hrClass} />;
}
