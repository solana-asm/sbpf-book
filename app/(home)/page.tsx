import Link from 'fumadocs-core/link';
import { getBlogPosts, slugFor } from '@/lib/source';

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export const revalidate = 3600;

export default function HomePage() {
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center px-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-fd-muted-foreground">
          solana-asm / book
        </div>
        <h1 className="mt-6 text-center text-4xl font-medium tracking-tight sm:text-6xl">
          The sBPF Programming Book
        </h1>
        <p className="mt-6 max-w-xl text-center text-base text-fd-muted-foreground sm:text-lg">
          Patterns and idioms for writing Solana programs in pure assembly.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center rounded-full bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            Read the book
          </Link>
          <Link
            href="https://shield.sbpf.dev"
            className="inline-flex items-center rounded-full border border-fd-border px-6 py-3 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            Try Shield
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground"
          >
            Read the blog
            <span aria-hidden className="ml-1.5">→</span>
          </Link>
        </div>

        {latestPosts.length > 0 ? (
          <Link
            href="#field-notes"
            className="absolute bottom-10 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fd-muted-foreground transition-colors hover:text-fd-foreground"
          >
            <span>Field notes below</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 5v14" />
              <path d="m6 13 6 6 6-6" />
            </svg>
          </Link>
        ) : null}
      </section>

      {latestPosts.length > 0 ? (
        <section
          id="field-notes"
          className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 pb-32 pt-24"
        >
          <header className="flex items-baseline justify-between border-b border-fd-border pb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-fd-muted-foreground">
                Field notes
              </div>
              <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                From the blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-fd-muted-foreground transition-colors hover:text-fd-primary"
            >
              All posts
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </header>

          <ul className="divide-y divide-fd-border">
            {latestPosts.map((post) => {
              const slug = slugFor(post);
              return (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="group flex flex-col gap-3 py-8"
                  >
                    <div className="flex items-baseline justify-between gap-6">
                      <h3 className="text-lg font-medium tracking-tight text-fd-foreground transition-colors group-hover:text-fd-primary sm:text-xl">
                        {post.title}
                      </h3>
                      <time
                        dateTime={post.date}
                        className="shrink-0 font-mono text-[11px] tabular-nums text-fd-muted-foreground"
                      >
                        {dateFmt.format(new Date(post.date))}
                      </time>
                    </div>
                    <p className="text-sm leading-relaxed text-fd-muted-foreground sm:text-base">
                      {post.description}
                    </p>
                    <div className="mt-1 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-fd-muted-foreground">
                      <span>Read post</span>
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1 group-hover:text-fd-primary"
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-fd-muted-foreground">
            More posts land as guards ship. Follow{' '}
            <a
              href="https://x.com/solana_asm"
              className="text-fd-foreground transition-colors hover:text-fd-primary"
            >
              @solana_asm
            </a>
            .
          </p>
        </section>
      ) : null}
    </main>
  );
}
