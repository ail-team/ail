import { PropsWithChildren } from 'react';

interface ExploreLayoutProps extends PropsWithChildren {}

export default function ExploreLayout({ children }: ExploreLayoutProps) {
  return <section>{children}</section>;
}
