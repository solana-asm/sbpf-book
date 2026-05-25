import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src="/logo.svg" alt="sBPF Book" width={24} height={24} />
          <span className="font-medium">sBPF Book</span>
        </>
      ),
    },
    themeSwitch: { enabled: false },
  };
}
