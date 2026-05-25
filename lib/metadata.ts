import type { Metadata } from 'next/types';
import type { source } from '@/lib/source';

type Page = ReturnType<typeof source.getPage>;

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      siteName: 'The sBPF Programming Book',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
  };
}

export function getPageImage(page: NonNullable<Page>) {
  const segments = [...page.slugs, 'image.png'];
  return {
    segments,
    url: `/og/${segments.join('/')}`,
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL('https://sbpf.dev');
