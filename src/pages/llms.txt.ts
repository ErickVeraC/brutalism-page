import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// Genera /llms.txt siguiendo el estándar https://llmstxt.org/ : un índice en
// Markdown para que asistentes de IA descubran y citen el contenido del sitio.
export async function GET(context: APIContext) {
	const site = context.site?.origin ?? 'https://www.erickvcoder.codes';
	const slugOf = (id: string) => id.replace(/^(es|en|pt)\//, '');

	const posts = await getCollection('blog');
	const byLang = (lang: string) =>
		posts
			.filter(p => p.data.lang === lang)
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.map(p => `- [${p.data.title}](${site}/${lang}/blog/${slugOf(p.id)}/): ${p.data.description}`)
			.join('\n');

	const body = `# erickvcoder.codes

> Sitio personal, portafolio y blog editorial de Erick Vera, arquitecto de software. Ensayos sobre arquitectura de software, inteligencia artificial, filosofía, arte e historia, con una identidad visual brutalista. Sitio estático construido con Astro. El contenido existe en español (fuente), inglés y portugués.

## Blog (español)

${byLang('es')}

## Blog (English)

${byLang('en')}

## Blog (Português)

${byLang('pt')}

## Recursos

- [Feed RSS (es)](${site}/rss.xml): publicaciones en español.
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
