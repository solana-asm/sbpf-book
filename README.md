# The sBPF Programming Book

A documentation site built with [fumadocs](https://fumadocs.dev) and Next.js. Content lives in MDX files under [`content/docs`](./content/docs).

## Local development

```bash
bun install
bun run dev
```

Open [http://localhost:3000/docs](http://localhost:3000/docs).

## Editing

Each chapter is a `.mdx` file in `content/docs/`. Frontmatter sets the title and description:

```mdx
---
title: My Chapter
description: One sentence summary.
---

Body in markdown plus JSX components.
```

Sidebar order is controlled by [`content/docs/meta.json`](./content/docs/meta.json).

## Build

```bash
bun run build
bun run start
```

## License

[MIT](./LICENSE)
