import clsx from 'clsx';

export default function Hr({ isBold }: { isBold?: boolean }) {
  const hrClass = clsx('w-full mt-8 mb-3 bg-gray-200 border-black', {
    'border-[2px]': isBold,
    'border-[0.5px]': !isBold,
  });

  return <hr className={hrClass} />;
}
