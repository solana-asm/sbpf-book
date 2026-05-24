<div align="center">
  <h1>The sBPF Programming Book</h1>
  <p>
    <strong>Patterns and idioms for writing Solana programs in pure assembly.</strong>
  </p>
  <p>
    <a href="https://github.com/solana-asm/sbpf-book/blob/main/LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blueviolet" /></a>
    <a href="https://github.com/solana-asm/sbpf-book/issues"><img alt="Issues" src="https://img.shields.io/github/issues/solana-asm/sbpf-book?color=blueviolet" /></a>
  </p>
</div>

Every Solana program compiles down to **sBPF**, a deterministic 8-byte-instruction virtual machine derived from Berkeley Packet Filter. Anchor, Pinocchio, and native Rust are conveniences over the same target. This book teaches you to skip the conveniences when they cost too much.

You reach for sBPF assembly when audit clarity, sub-kilobyte binaries, byte-exact compute budgets, or the absence of a Rust runtime tax outweigh the ergonomics of a higher-level framework.

## Read it

Live site: [`sbpf-book`](https://sbpf-book.vercel.app) (or wherever the deployed URL points).

## What's inside

| Section | What it covers |
|---|---|
| **Getting Started** | Install the toolchain, scaffold a project, build and deploy your first program |
| **Assembly** | Registers, memory, the instruction set, the stack, and syscalls. Everything you need to read and write asm. |
| **Core Concepts** | Program structure, account data, errors and logging, PDAs, CPI, creating accounts, a complete walkthrough, writing a client, deploying |
| **Reference** | Input region byte tables, instruction set reference, syscall catalogue, compute-unit costs, security pitfalls, example programs, contribution guide |

Every chapter pairs an Anchor idiom (`#[derive(Accounts)]`, `CpiContext::new`, etc.) with its sBPF equivalent, so an Anchor developer can map what they already know onto raw assembly.

## Local development

```bash
bun install
bun run dev
```

Open [http://localhost:3000/docs](http://localhost:3000/docs).

The dev server hot-reloads MDX content as you edit. Type-check after content edits:

```bash
bun run types:check
```

## Production build

```bash
bun run build
bun run start
```

## How the project is laid out

```
BOOK/
├── app/                       # Next.js App Router (layout + routes)
│   ├── (home)/                # marketing landing page
│   ├── docs/[[...slug]]/      # dynamic doc pages rendered from MDX
│   ├── api/search/            # full-text search endpoint
│   └── global.css             # Tailwind v4 entry + theme tokens
├── components/
│   ├── mdx.tsx                # MDX component overrides
│   └── layouts/shared.tsx     # nav title, GitHub URL
├── content/docs/              # all chapter MDX lives here
│   ├── meta.json              # top-level sidebar
│   ├── installation.mdx
│   ├── quickstart.mdx
│   ├── assembly/              # asm primer
│   ├── basics/                # Core Concepts chapters
│   ├── program-development/   # reference material
│   └── contributing/          # contribution guide
├── lib/
│   ├── source.ts              # fumadocs source loader
│   └── metadata.ts            # OpenGraph + Twitter defaults
├── source.config.ts           # fumadocs-mdx config
└── next.config.mjs            # Next.js config wrapping fumadocs MDX
```

Sidebar order is controlled by each directory's `meta.json`. Adding a new chapter is: drop an `.mdx` file under `content/docs/...`, add its slug to the relevant `meta.json`, run `bun run dev`.

## Contributing

Issues and pull requests welcome. Before opening one, please read the [Contribution Guide](https://github.com/solana-asm/sbpf-book/blob/main/content/docs/contributing/contribution.mdx) chapter (also rendered on the live site).

Short version of the rules:

- One concept per PR.
- `#` for asm comments, not `;`.
- `SCREAMING_CASE` for `.equ`, `snake_case` for labels.
- No em-dashes.
- Run `bun run types:check` before pushing.

## Acknowledgements

- [`blueshift-gg/sbpf`](https://github.com/blueshift-gg/sbpf) for the assembler, the CLI, and the canonical example programs (`sbpf-asm-counter`, `sbpf-asm-vault`, `sbpf-asm-cpi`).
- [`solana-developers/program-examples`](https://github.com/solana-developers/program-examples) for the beginner asm flavour examples (`hello-solana`, `checking-accounts`, `create-account`, `transfer-sol`).
- [Fumadocs](https://fumadocs.dev) for the documentation framework.

## License

[MIT](./LICENSE).
