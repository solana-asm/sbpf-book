import { ImageResponse } from '@takumi-rs/image-response';
import { getImageResponseOptions } from './og/[...slug]/generate';

export const alt = 'The sBPF Programming Book';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          color: 'white',
          backgroundColor: '#0B0E14',
          fontFamily: 'JetBrainsMono',
          padding: '4rem',
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: '76px',
            lineHeight: 1.1,
          }}
        >
          The sBPF
        </span>
        <span
          style={{
            fontWeight: 600,
            fontSize: '76px',
            lineHeight: 1.1,
          }}
        >
          Programming Book
        </span>

        <p
          style={{
            fontSize: '36px',
            color: 'rgba(240,240,240,0.7)',
            marginTop: '24px',
            maxWidth: '900px',
          }}
        >
          Patterns and idioms for writing Solana programs in pure assembly.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '24px',
            marginTop: 'auto',
            color: 'rgb(240,240,240)',
          }}
        >
          <svg width="60" height="60" viewBox="0 0 180 180" filter="url(#og-home-shadow)">
            <circle cx="90" cy="90" r="86" fill="url(#og-home-grad)" />
            <defs>
              <filter id="og-home-shadow" colorInterpolationFilters="sRGB">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00FFFF" floodOpacity="1" />
              </filter>
              <linearGradient id="og-home-grad" gradientTransform="rotate(45)">
                <stop offset="45%" stopColor="black" />
                <stop offset="100%" stopColor="#00FFFF" />
              </linearGradient>
            </defs>
          </svg>
          <span
            style={{
              fontSize: '46px',
              fontWeight: 600,
            }}
          >
            sbpf.dev
          </span>
        </div>
      </div>
    ),
    await getImageResponseOptions()
  );
}
