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
    links: [
      {
        text: 'Docs',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Blog',
        url: '/blog',
        active: 'nested-url',
      },
      {
        text: 'Shield',
        url: 'https://shield.sbpf.dev',
        external: true,
      },
      {
        type: 'icon',
        url: 'https://x.com/solana_asm',
        text: 'X / Twitter',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.86l-5.36-7.02L4.66 22H1.4l8.04-9.18L1 2h7.02l4.84 6.4L18.244 2Zm-1.2 18h1.9L7.04 4H5.06l11.984 16Z" />
          </svg>
        ),
        external: true,
      },
      {
        type: 'icon',
        url: 'https://github.com/solana-asm',
        text: 'GitHub',
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.01c-3.2.69-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z"
            />
          </svg>
        ),
        external: true,
      },
    ],
  };
}
