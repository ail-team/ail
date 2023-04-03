import { FolderIcon, GlobeAltIcon, HomeIcon, UserIcon } from '@heroicons/react/24/outline';

export type Item = {
  name: string;
  slug: string;
  icon: (props?: any) => JSX.Element;
  description?: string;
};

export const GNB_ITEMS: Item[] = [
  {
    name: 'Home',
    slug: '',
    icon: props => <HomeIcon {...props} />,
    description: '나의 subject 문서의 요약을 확인 가능한 페이지',
  },
  {
    name: 'Edit',
    slug: 'edit',
    icon: props => <FolderIcon {...props} />,
    description: '나의 subject 문서 조회 및 수정이 가능한 페이지',
  },
  {
    name: 'Explore',
    slug: 'explore',
    icon: props => <GlobeAltIcon {...props} />,
    description: '다른 유저의 subject 문서 조회가 가능한 페이지',
  },
  {
    name: 'Login',
    slug: 'login',
    icon: props => <UserIcon {...props} />,
    description: '로그인 페이지',
  },
];
