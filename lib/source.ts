import { blog, docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});

export type BlogPost = (typeof blog)[number];

function isPublished(post: BlogPost): boolean {
  return new Date(post.date).getTime() <= Date.now();
}

export function getBlogPosts(): BlogPost[] {
  return [...blog]
    .filter(isPublished)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blog.find((post) => slugFor(post) === slug && isPublished(post));
}

export function slugFor(post: BlogPost): string {
  return post.info.path.replace(/\.mdx$/, '').replace(/^\.\//, '');
}
