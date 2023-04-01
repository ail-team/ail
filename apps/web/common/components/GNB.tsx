import { TabItem } from './Tab/TabItem';

export const GNB_CONTENTS = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Edit',
    link: '/edit',
  },
  {
    label: 'Explore',
    link: '/explore',
  },
];

export const GNB = () => {
  return <TabItem href={'/'}>hello</TabItem>;
};
