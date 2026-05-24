import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'sBPF Book',
    },
    githubUrl: 'https://github.com/solana-asm/sbpf-book',
  };
}
