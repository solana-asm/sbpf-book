import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/components/layouts/shared';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          text: 'Book',
          url: '/docs',
          active: 'nested-url',
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
