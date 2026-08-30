#!/usr/bin/env node

/**
 * scaffold-translation.mjs
 *
 * Genera el andamiaje mecánico de una traducción de un post del blog.
 * NO traduce texto: crea el archivo destino con el frontmatter correcto
 * (mismo pubDate / heroImage / heroFilter, lang y translationKey coherentes)
 * y marca title, description y cuerpo con un placeholder para que un humano
 * o un asistente rellene la prosa.
 *
 * Uso:
 *   node scripts/scaffold-translation.mjs <slug-fuente> <lang-destino>
 *   pnpm scaffold:translation <slug-fuente> <lang-destino>
 *
 * Ejemplo:
 *   pnpm scaffold:translation el-mar-y-los-mensajes en
 *
 * Efectos:
 *   - Si el post fuente no tiene translationKey, se lo añade (derivado del slug).
 *   - Crea src/content/blog/<lang>/<slug-fuente>.md con lang y translationKey.
 *   - Es idempotente: si el destino ya existe, aborta sin sobrescribir.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');
const LANGS = ['es', 'en', 'pt'];
const PLACEHOLDER = '<!-- TRANSLATE -->';

/** Divide un archivo Markdown en { frontmatter, body }. */
function splitDocument(raw) {
	const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
	if (!match) {
		throw new Error('El archivo no tiene frontmatter YAML delimitado por ---.');
	}
	return { frontmatter: match[1], body: match[2] };
}

/** Lee el valor de una clave escalar del frontmatter (string sin parser YAML completo). */
function readField(frontmatter, key) {
	const line = frontmatter.split('\n').find((l) => l.startsWith(`${key}:`));
	if (!line) return undefined;
	return line.slice(key.length + 1).trim().replace(/^["']|["']$/g, '');
}

function fail(message) {
	console.error(`\n✗ ${message}\n`);
	process.exit(1);
}

const [, , sourceSlug, targetLang] = process.argv;

if (!sourceSlug || !targetLang) {
	fail('Uso: node scripts/scaffold-translation.mjs <slug-fuente> <lang-destino>');
}
if (!LANGS.includes(targetLang)) {
	fail(`Idioma destino inválido: "${targetLang}". Válidos: ${LANGS.join(', ')}.`);
}

const sourcePath = join(BLOG_DIR, `${sourceSlug}.md`);
if (!existsSync(sourcePath)) {
	fail(`No existe el post fuente: src/content/blog/${sourceSlug}.md`);
}

const targetDir = join(BLOG_DIR, targetLang);
const targetPath = join(targetDir, `${sourceSlug}.md`);
if (existsSync(targetPath)) {
	fail(`El destino ya existe (no se sobrescribe): src/content/blog/${targetLang}/${sourceSlug}.md`);
}

const raw = readFileSync(sourcePath, 'utf8');
const { frontmatter, body } = splitDocument(raw);

const sourceLang = readField(frontmatter, 'lang') ?? 'es';
if (sourceLang === targetLang) {
	fail(`El post fuente ya está en "${targetLang}".`);
}

// translationKey estable: el del fuente, o el slug del fuente si aún no lo tiene.
let translationKey = readField(frontmatter, 'translationKey');
if (!translationKey) {
	translationKey = sourceSlug;
	// Insertar translationKey en el frontmatter del fuente, tras la línea lang.
	const patchedFrontmatter = frontmatter
		.split('\n')
		.flatMap((line) =>
			line.startsWith('lang:')
				? [line, `translationKey: "${translationKey}"`]
				: [line]
		)
		.join('\n');
	writeFileSync(sourcePath, `---\n${patchedFrontmatter}\n---\n${body}`, 'utf8');
	console.log(`• translationKey "${translationKey}" añadido al post fuente.`);
}

// Campos que se CONSERVAN idénticos entre idiomas.
const pubDate = readField(frontmatter, 'pubDate');
const heroImage = readField(frontmatter, 'heroImage');
const heroFilter = readField(frontmatter, 'heroFilter');

const targetFrontmatter = [
	'---',
	`title: "${PLACEHOLDER}"`,
	`description: "${PLACEHOLDER}"`,
	...(pubDate ? [`pubDate: ${pubDate}`] : []),
	...(heroImage ? [`heroImage: "${heroImage}"`] : []),
	...(heroFilter !== undefined ? [`heroFilter: ${heroFilter}`] : []),
	'tags: []',
	`lang: "${targetLang}"`,
	`translationKey: "${translationKey}"`,
	'---',
	'',
	PLACEHOLDER,
	'',
].join('\n');

mkdirSync(targetDir, { recursive: true });
writeFileSync(targetPath, targetFrontmatter, 'utf8');

console.log(`✓ Creado src/content/blog/${targetLang}/${sourceSlug}.md`);
console.log(`  Rellena title, description, tags y el cuerpo (busca "${PLACEHOLDER}").`);
console.log(`  Conserva pubDate, heroImage, heroFilter y translationKey sin cambios.`);
