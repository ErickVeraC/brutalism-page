import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getCollection('blog');

	const sorted = posts
		.filter(post => post.data.lang === 'es')
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: 'erickvcoder — Blog',
		description: 'Arquitectura, filosofía y código. Reflexiones sobre sistemas, diseño y el acto de construir.',
		site: context.site!,
		items: sorted.map(post => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/es/blog/${post.id}/`,
		})),
		customData: `<language>es</language>`,
	});
}
