import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The sBPF Programming Book',
    short_name: 'sBPF Book',
    description:
      'Patterns and idioms for writing Solana programs in pure assembly.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0E14',
    theme_color: '#0B0E14',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
