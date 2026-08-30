# AGENTS.md

Instrucciones para cualquier asistente de IA (ChatGPT, Claude, Cursor, Copilot…) que trabaje en este repositorio. Es documentación universal, no específica de una herramienta.

## Qué es este proyecto

`erickvcoder.codes` — sitio personal, portafolio y blog editorial de Erick Vera. Estética brutalista, contenido sobre arquitectura de software, IA, filosofía, arte e historia. Producción: <https://www.erickvcoder.codes>.

**Es un sitio estático de Astro.** No hay backend, base de datos ni runtime de servidor: Astro genera HTML/CSS/JS/imágenes en el build y Vercel los sirve.

## Stack y versiones

- **Astro 7** (`^7.2.9`) — generación estática, Content Collections, `astro:assets`.
- **Node.js 24** (Active LTS) — pin en `engines`, `.node-version` y `ci.yml`; los tres deben moverse juntos.
- **pnpm 10.14** — gestor único; lockfile congelado en CI.
- **TypeScript estricto**, **CSS propio** (sin framework de componentes), **Sharp** para imágenes, **RSS** (solo `es`).

Detalle completo y racional en [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Comandos

```sh
pnpm install --frozen-lockfile
pnpm dev         # servidor local (http://localhost:4321)
pnpm build       # sitio estático en dist/
pnpm typecheck   # astro check
pnpm lint        # eslint
pnpm check       # typecheck + lint + build  <- corre esto antes de abrir un PR
```

## Estructura

```text
src/
  content/blog/            Posts en español (fuente de la verdad)
  content/blog/en/         Traducciones al inglés (mismo slug)
  content/blog/pt/         Traducciones al portugués (mismo slug)
  components/              Secciones reutilizables (.astro)
  layouts/MainLayout.astro Layout global (head, nav, footer, favicon)
  pages/{es,en,pt}/        Home por idioma
  pages/[lang]/blog/       Listado y artículo (rutas dinámicas estáticas)
  styles/global.css        Tokens de diseño (:root) y tipografía
  i18n.ts                  Idiomas + textos de interfaz
  content.config.ts        Esquema Zod del blog
scripts/
  scaffold-translation.mjs Andamiaje de traducciones (ver CONTENT_GUIDE)
docs/
  ARCHITECTURE.md          Decisiones, versiones, seguridad, i18n
  CONTENT_GUIDE.md         Cómo publicar y traducir posts
```

## Reglas del proyecto (respétalas)

1. **Mantén el sitio estático.** No añadas backend, adaptadores de servidor ni JavaScript de cliente salvo que sea imprescindible (hoy solo hay JS para el menú móvil y el selector de blueprints). Antes de añadir una dependencia, verifica que HTML/CSS/JS nativo no basten.
2. **Los posts en español son la fuente de la verdad.** No cambies su contenido al traducir; una traducción vive en `src/content/blog/{en,pt}/` con el mismo nombre de archivo y comparte `translationKey` con el fuente.
3. **No dupliques imágenes entre traducciones** — todas reusan el mismo `heroImage`. Optimiza a WebP (calidad ~82, héroes ≤2400px). Los assets van en `src/assets` (pipeline de Astro), nunca en `public`.
4. **Diseño:** usa los tokens de `src/styles/global.css` (`--accent-red`, `--border-main`, `--shadow-brutal`, `--font-mono`). No inventes colores ni radios (el sitio fuerza `border-radius: 0`).
5. **Redirecciones** de slugs renombrados van como 301 declarativos en `astro.config.mjs`, nunca como páginas `.astro` sueltas.
6. **Seguridad:** mantén `pnpm audit` en cero; para CVEs transitivas usa `pnpm.overrides` (ver ARCHITECTURE.md).
7. **Antes de un PR:** corre `pnpm check` y revisa el preview de Vercel. `main` está protegida y exige el quality gate en verde.

## Cómo escribir o traducir un post

Ver [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) para el detalle. En resumen:

- **Nuevo post:** crea `src/content/blog/<slug>.md` con el frontmatter mínimo (`title`, `description`, `pubDate`, `heroImage`, `tags`, `lang: "es"`, `translationKey`). El nombre del archivo es el slug de la URL.
- **Traducir:** `pnpm scaffold:translation <slug> <en|pt>` genera el andamiaje (copia `pubDate`/`heroImage`/`heroFilter`, añade `translationKey` al fuente). Luego rellena `title`, `description`, `tags` y el cuerpo, conservando la voz del autor y **sin traducir literalmente** nombres propios ni referencias culturales/artísticas.

## Idioma

- La interfaz y el código (variables, funciones, commits, PRs) van en **inglés**.
- El contenido editorial existe en `es` (fuente), `en` y `pt`.
- Las respuestas al mantenedor pueden ir en español.
