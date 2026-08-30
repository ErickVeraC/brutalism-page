// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.erickvcoder.codes',
	redirects: {
		// Slug histórico renombrado en #27. Se conserva el 301 para no romper
		// enlaces externos indexados. Ver docs/ARCHITECTURE.md → Redirecciones.
		'/es/blog/la-nueva-era-de-los-illuminati-parte-iv': {
			status: 301,
			destination: '/es/blog/la-ia-y-la-era-de-los-nuevos-iluminados-parte-iv/',
		},
	},
});
