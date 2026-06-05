import Link from 'fumadocs-core/link';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { getBlogPosts, slugFor } from '@/lib/source';

export const metadata: Metadata = createMetadata({
  title: 'Blog',
  description:
    'Field notes from solana-asm: pure sBPF assembly, Shield guards, and patterns from writing sub-kilobyte Solana programs.',
});

export const revalidate = 3600;

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
      <header className="mb-14">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-fd-muted-foreground">
          solana-asm / blog
        </div>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
          Field notes
        </h1>
        <p className="mt-4 max-w-xl text-fd-muted-foreground">
          Posts from the team behind Shield and the sBPF book. Patterns, decisions, and benchmarks from writing Solana programs in pure assembly.
        </p>
      </header>

      <ul className="divide-y divide-fd-border">
        {posts.map((post) => {
          const slug = slugFor(post);
          return (
            <li key={slug}>
              <Link
                href={`/blog/${slug}`}
                className="group block py-8"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h2 className="text-xl font-medium tracking-tight text-fd-foreground group-hover:text-fd-primary sm:text-2xl">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 font-mono text-xs text-fd-muted-foreground"
                  >
                    {dateFmt.format(new Date(post.date))}
                  </time>
                </div>
                <p className="mt-3 text-sm text-fd-muted-foreground sm:text-base">
                  {post.description}
                </p>
                {post.tags ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-fd-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fd-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
