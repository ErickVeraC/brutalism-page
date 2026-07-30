import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Carga las entradas editoriales desde el directorio local del blog.
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		heroFilter: z.boolean().default(true),
		tags: z.array(z.string()).default([]),
		lang: z.enum(['es', 'en', 'pt']).default('es'),
		translationKey: z.string().optional(),
	}),
});

export const collections = { blog };
