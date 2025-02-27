import Hr from '@/app/components/ui/Hr';

interface SectionProps {
  children: React.ReactNode;
  isFirst?: boolean;
  isBold?: boolean;
}

export default function Section({
  children,
  isFirst = false,
  isBold = false,
}: SectionProps) {
  return (
    <>
      {!isFirst && <Hr isBold={isBold} />}
      {children}
    </>
  );
}
