import { PropsWithChildren } from 'react';

interface EditLayout extends PropsWithChildren {}

export default function EditLayout({ children }: EditLayout) {
  return <section>{children}</section>;
}
