import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <Image
        src="/logo.svg"
        alt=""
        width={72}
        height={72}
        className="opacity-90"
      />

      <div className="flex flex-col gap-3">
        <p className="font-mono text-sm tracking-widest text-fd-muted-foreground uppercase">
          Error 404
        </p>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="max-w-md text-fd-muted-foreground text-base">
          The page you are looking for does not exist, has moved, or never did.
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
        >
          Back home
        </Link>
        <Link
          href="/docs"
          className="inline-flex items-center rounded-full border border-fd-border px-6 py-3 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
        >
          Read the book
        </Link>
      </div>
    </main>
  );
}
