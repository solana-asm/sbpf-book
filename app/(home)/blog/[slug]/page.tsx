import Link from 'fumadocs-core/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { getMDXComponents } from '@/components/mdx';
import { getBlogPost, getBlogPosts, slugFor } from '@/lib/source';

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: slugFor(post) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description ?? undefined,
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const Mdx = post.body;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
      <Link
        href="/blog"
        className="font-mono text-xs uppercase tracking-[0.3em] text-fd-muted-foreground transition-colors hover:text-fd-primary"
      >
        ← back to blog
      </Link>

      <header className="mt-8 mb-10 border-b border-fd-border pb-10">
        <h1 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        {post.description ? (
          <p className="mt-4 text-fd-muted-foreground sm:text-lg">
            {post.description}
          </p>
        ) : null}
        <div className="mt-6 flex items-center gap-4 font-mono text-xs text-fd-muted-foreground">
          <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
          {post.author ? <span>· {post.author}</span> : null}
        </div>
      </header>

      <article className="prose prose-invert max-w-none">
        <Mdx components={getMDXComponents()} />
      </article>

      <footer className="mt-16 border-t border-fd-border pt-8 font-mono text-xs text-fd-muted-foreground">
        Follow{' '}
        <a
          href="https://x.com/solana_asm"
          className="text-fd-primary hover:underline"
        >
          @solana_asm
        </a>{' '}
        for new posts and guards.
      </footer>
    </main>
  );
}
