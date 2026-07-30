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

## Decisiones conscientes

- No se usa Turborepo: el repositorio contiene una sola aplicación.
- No se usa Turbopack: es un bundler de Next.js y el proyecto utiliza Astro/Vite.
- No hay base de datos ni backend persistente.
- RSS existe actualmente solo para español.
- Las versiones inglesa y portuguesa del blog pueden mostrar un estado vacío hasta que existan traducciones.
