import Link from 'fumadocs-core/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
        The sBPF Programming Book
      </h1>
      <p className="mt-6 max-w-xl text-fd-muted-foreground text-base sm:text-lg">
        Patterns and idioms for writing Solana programs in pure assembly.
      </p>
      <div className="mt-10 flex gap-3">
        <Link
          href="/docs"
          className="inline-flex items-center rounded-full bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
        >
          Read the book
        </Link>
      </div>
    </main>
  );
}
