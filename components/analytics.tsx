import { GoogleAnalytics } from '@next/third-parties/google';

const GA_ID = 'G-BXLLDK3M84';

export function Analytics() {
  // Skip in dev so localhost traffic doesn't pollute the production property.
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return <GoogleAnalytics gaId={GA_ID} />;
}
