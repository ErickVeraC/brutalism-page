# Arquitectura

## Visión general

El proyecto es una aplicación Astro estática. Astro genera HTML, CSS, JavaScript e imágenes optimizadas durante el build; Vercel publica esos archivos sin mantener un servidor de aplicación.

```text
Markdown + componentes + assets
              │
              ▼
          Astro build
              │
              ├── páginas HTML
              ├── CSS y JavaScript
              ├── imágenes optimizadas
              └── RSS
              │
              ▼
            Vercel
```

## Enrutamiento e idiomas

Los idiomas soportados están declarados en `src/i18n.ts`:

```ts
export const languages = ['es', 'en', 'pt'] as const;
```

Las páginas principales son explícitas:

```text
src/pages/es/index.astro
src/pages/en/index.astro
src/pages/pt/index.astro
```

El blog usa rutas dinámicas estáticas:

```text
src/pages/[lang]/blog/index.astro
src/pages/[lang]/blog/[slug].astro
```

`getStaticPaths()` genera únicamente combinaciones válidas. Cada entrada se publica bajo el idioma de su frontmatter; una entrada con `lang: en` nunca debe aparecer bajo `/es/blog/`.

La interfaz compartida —navegación, footer y textos del blog— vive en `src/i18n.ts`. Los textos específicos de una sección pueden permanecer junto al componente cuando no se reutilizan fuera de él.

## Contenido

La colección `blog` se define en `src/content.config.ts` y carga Markdown o MDX desde `src/content/blog`.

Campos disponibles:

| Campo | Tipo | Obligatorio | Uso |
| --- | --- | --- | --- |
| `title` | string | sí | Título editorial |
| `description` | string | sí | Resumen y futura metadata |
| `pubDate` | date | sí | Fecha de publicación |
| `updatedDate` | date | no | Fecha de actualización |
| `heroImage` | string | no | Ruta absoluta dentro de `src/assets` |
| `heroFilter` | boolean | no | Activa el tratamiento visual; por defecto `true` |
| `tags` | string[] | no | Clasificación editorial |
| `lang` | `es`, `en`, `pt` | no | Idioma; por defecto `es` |
| `translationKey` | string | no | Relaciona traducciones del mismo artículo |

El ID de una entrada proviene del nombre de su archivo. Ese ID también forma parte de la URL.

## Relación entre traducciones

Las versiones equivalentes comparten `translationKey`. La página del artículo busca otras entradas con la misma clave y construye los enlaces del selector de idioma.

```text
article-es.md  ─┐
article-en.md  ─┼─ translationKey: logical-architecture
article-pt.md  ─┘
```

Si una traducción no existe, el selector no inventa una URL de artículo.

## Redirecciones

Los slugs históricos que fueron renombrados se conservan como redirecciones **301 declarativas** en `astro.config.mjs` (`redirects`), no como páginas `.astro` sueltas. Esto mantiene el sistema de rutas dinámicas `[lang]/blog/[slug]` sin archivos fuera de patrón y centraliza las redirecciones en un solo lugar.

```js
redirects: {
  '/es/blog/slug-viejo': { status: 301, destination: '/es/blog/slug-nuevo/' },
}
```

Regla: al renombrar el slug de un artículo ya publicado, añade aquí un 301 del slug anterior al nuevo. Nunca borres el redirect de un slug que pudo ser indexado.

## Imágenes

Los assets en `src/assets` se importan con `astro:assets` o se resuelven mediante `import.meta.glob()` para los héroes definidos en Markdown.

Reglas:

- WebP es el formato fuente preferido para fotografía.
- Los héroes no deben superar 2400 px en su lado mayor.
- Las imágenes de galería y artículo no deben superar 2000 px.
- La calidad WebP recomendada es 80–84.
- Las traducciones reutilizan el mismo asset.
- Los archivos en `src/assets` pasan por el pipeline de Astro; no deben copiarse a `public`.

Astro genera las variantes de entrega durante el build. Optimizar las fuentes sigue siendo importante para reducir el repositorio, el trabajo del build y el almacenamiento de caché.

## Código cliente

La mayor parte del sitio no envía JavaScript al navegador. Los scripts existentes se limitan a:

- Apertura y cierre del menú móvil.
- Selección interactiva de blueprints.

Antes de añadir una dependencia o framework cliente, debe comprobarse que HTML, CSS y JavaScript nativo no sean suficientes.

## CI y ramas

`main` está protegida. `.github/workflows/ci.yml` ejecuta el job `Quality gate` en pull requests y pushes:

```text
install → typecheck → lint → build
```

Todos los cambios deben entrar mediante una rama y un pull request con los checks aprobados.

## Plataforma y versiones

El proyecto está fijado a un conjunto de versiones explícito para que el build local y el de CI sean reproducibles.

| Herramienta | Versión | Dónde se declara | Racional |
| --- | --- | --- | --- |
| Astro | `^7.2.9` | `package.json` | Última major estable. Genera el sitio estático, resuelve las Content Collections y optimiza imágenes con `astro:assets`. |
| Node.js | `>=24.0.0` (pin `24.20.0`) | `package.json` (`engines`), `.node-version`, `ci.yml` | Node 24 «Krypton» es la línea **Active LTS**. Astro 7 soporta la Active LTS y la Maintenance LTS de Node; se elige la Active LTS para maximizar la vida útil y alinear el runner de CI con el entorno local. |
| pnpm | `10.14.0` | `package.json` (`packageManager`) | Gestor de paquetes único. El lockfile congelado (`--frozen-lockfile`) garantiza instalaciones deterministas. |

Los tres puntos donde se declara la versión de Node deben moverse **juntos** al actualizar: `engines` en `package.json`, `.node-version` (usado por Vercel y version managers locales) y `node-version` en `.github/workflows/ci.yml`. Un desajuste entre ellos produce advertencias de motor o builds que pasan en local y fallan en CI.

### Qué aporta Astro 7 a este proyecto

- **Generación estática por defecto**: sin adaptador de servidor, cada ruta se resuelve a HTML en `build`.
- **Content Collections tipadas** (`astro:content` + esquema Zod en `src/content.config.ts`) para el blog Markdown.
- **`astro:assets` con Sharp** para optimizar los héroes WebP durante el build.
- **`getStaticPaths()`** para generar únicamente las combinaciones válidas de idioma y slug del blog.
- **Islas de JavaScript mínimas**: el sitio no monta ningún framework de UI; los únicos scripts cliente son vanilla (menú móvil y selector de blueprints).

Para actualizar Astro y sus integraciones oficiales de forma coordinada: `pnpm dlx @astrojs/upgrade`. Revisa la [guía de upgrade a v7](https://docs.astro.build/en/guides/upgrade-to/v7/) antes de saltar de major.

### Seguridad de dependencias

Toda dependencia del proyecto es de **build-time** (no hay runtime de servidor): Astro genera HTML estático y Vercel lo sirve. Aun así, se mantiene `pnpm audit` en cero.

Las vulnerabilidades reportadas suelen ser **transitivas** (dependencias de dependencias). Cuando el parche vive más profundo de lo que alcanza un bump del paquete padre, se fuerza la versión parcheada con `pnpm.overrides` en `package.json`:

```jsonc
"pnpm": {
  "overrides": {
    "js-yaml@>=4.0.0 <4.3.1": ">=4.3.1",   // GHSA-5p4m-2wfm-xmqj (CPU cuadrática en !!omap)
    "fast-uri@>=3.0.0 <3.1.5": ">=3.1.5",  // host confusion
    "nanoid@<3.3.18": ">=3.3.18"           // GHSA-2v37-7h3g-55p8 (loop infinito size=0)
  }
}
```

Regla de mantenimiento: correr `pnpm audit` periódicamente; para un hallazgo transitivo, preferir un override con rango (no un pin exacto) que deje que pnpm resuelva a la última compatible. Estas tres CVEs eran de superficie de runtime de servidor y, en un sitio estático, de riesgo práctico bajo — se cerraron por higiene.

Para actualizar dependencias directas usa `pnpm outdated` y sube minors/patches en su propio PR. Los majors (p. ej. TypeScript 6→7) van en un PR aparte con verificación dedicada.

## Decisiones conscientes

- No se usa Turborepo: el repositorio contiene una sola aplicación.
- No se usa Turbopack: es un bundler de Next.js y el proyecto utiliza Astro/Vite.
- No hay base de datos ni backend persistente.
- RSS existe actualmente solo para español.
- Las versiones inglesa y portuguesa del blog pueden mostrar un estado vacío hasta que existan traducciones.
