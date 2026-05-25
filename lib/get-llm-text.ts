import { source } from '@/lib/source';

type Page = NonNullable<ReturnType<typeof source.getPage>>;

export async function getLLMText(page: Page) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}
URL: ${page.url}
Source: https://github.com/solana-asm/sbpf-book/blob/main/content/docs/${page.path}

${page.data.description ?? ''}

${processed}`;
}
