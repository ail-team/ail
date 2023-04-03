import { PropsWithChildren } from 'react';

interface LoginLayoutProps extends PropsWithChildren {}

export default function ExploreLayout({ children }: LoginLayoutProps) {
  return <section>{children}</section>;
}
