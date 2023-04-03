'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { GNB_ITEMS, type Item } from './contents';

export const GNB = () => {
  return (
    <div className="flex-row w-full h-20 absolute bottom-0 space-y-0 sm:w-20 flex justify-between items-center px-12 sm:px-0 sm:py-8 sm:space-y-8 bg-s-gray-100 sm:h-full sm:flex-col sm:static sm:justify-normal">
      {GNB_ITEMS.map(item => (
        <GNBItem key={item.slug} name={item.name} slug={item.slug} icon={item.icon} />
      ))}
    </div>
  );
};

export const GNBItem = (item: Item) => {
  const segment = useSelectedLayoutSegment() || '';
  const isActive = item.slug === segment;

  return (
    <Link href={`/${item.slug}`} className={`${isActive ? 'text-gray-50' : 'text-gray-400'} hover:text-gray-50`}>
      {item.icon({ width: '24px' })}
    </Link>
  );
};
