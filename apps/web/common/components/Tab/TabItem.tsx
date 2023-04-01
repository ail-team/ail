import Link from 'next/link';

export const TabItem = ({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <Link href={href} className={'rounded-lg px-3 py-1 text-sm font-medium'}>
      {children}
    </Link>
  );
};
