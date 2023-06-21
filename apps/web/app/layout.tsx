import '@/styles/globals.css';
import { PropsWithChildren } from 'react';
import { GNB } from '@/common/components/GNB/GNB';
import StyledComponentsRegistry from '@/lib/styled-component';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className="[color-scheme:dark]">
      <head />
      <body className="flex h-screen bg-black">
        <StyledComponentsRegistry>
          <GNB />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
