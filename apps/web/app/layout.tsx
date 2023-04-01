import '@/styles/globals.css';
import { PropsWithChildren } from 'react';
import { GNB } from '@/common/components/GNB';

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-scroll">
        layout
        <GNB />
        {children}
      </body>
    </html>
  );
}
