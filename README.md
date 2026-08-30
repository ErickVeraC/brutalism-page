# erickvcoder.codes

Sitio personal, portafolio profesional y blog editorial de Erick Vera. El proyecto combina una identidad visual brutalista con contenido sobre arquitectura de software, inteligencia artificial, filosofía, arte e historia.

Producción: [www.erickvcoder.codes](https://www.erickvcoder.codes)

## Stack

- [Astro 7](https://astro.build/) con generación estática.
- Content Collections para los artículos Markdown.
- TypeScript con configuración estricta.
- CSS propio, sin framework de componentes.
- Sharp y `astro:assets` para optimización de imágenes.
- RSS para las publicaciones en español.
- Vercel para previews y despliegue.
- GitHub Actions como quality gate.

## Requisitos

- Node.js 24 (Active LTS) o superior.
- pnpm 10.14.

El campo `packageManager` de `package.json` define la versión esperada de pnpm.

## Desarrollo local

```sh
pnpm install --frozen-lockfile
pnpm dev
```

El servidor queda disponible normalmente en `http://localhost:4321`.

Rutas principales:

```text
/                 Redirección al idioma predeterminado
/es/              Portafolio en español
/en/              Portafolio en inglés
/pt/              Portafolio en portugués
/{lang}/blog/      Archivo del blog por idioma
/{lang}/blog/:id/  Artículo individual
/rss.xml           Feed de publicaciones en español
/llms.txt          Índice de contenido para asistentes de IA (llmstxt.org)
```

## Comandos

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera el sitio estático en `dist/` |
| `pnpm preview` | Sirve localmente el resultado del build |
| `pnpm typecheck` | Ejecuta Astro Check |
| `pnpm lint` | Ejecuta ESLint |
| `pnpm check` | Ejecuta typecheck, lint y build |

Antes de abrir un pull request:

```sh
pnpm check
```

## Estructura

```text
.
├── .github/workflows/ci.yml   Quality gate de GitHub
├── docs/
│   ├── ARCHITECTURE.md        Decisiones y flujo del sistema
│   └── CONTENT_GUIDE.md       Publicación y traducción de artículos
├── public/                    Favicon y fuentes públicas
├── src/
│   ├── assets/                Imágenes procesadas por Astro
│   ├── components/            Secciones reutilizables
│   ├── content/blog/          Artículos Markdown
│   ├── layouts/               Layout global
│   ├── pages/                 Rutas del sitio
│   ├── styles/                CSS global
│   ├── content.config.ts      Esquema del blog
│   └── i18n.ts                Textos de interfaz e idiomas
├── astro.config.mjs
└── package.json
```

Consulta [la arquitectura](docs/ARCHITECTURE.md) para entender el enrutamiento y [la guía de contenido](docs/CONTENT_GUIDE.md) antes de añadir o traducir artículos.

## Calidad y despliegue

Cada pull request contra `main` ejecuta el job obligatorio `Quality gate`:

1. Instalación con lockfile congelado.
2. Typecheck.
3. Lint.
4. Build de producción.

Vercel genera un preview por pull request. La rama `main` está protegida y no acepta merges cuando el quality gate falla o está desactualizado.

El despliegue de producción ocurre desde `main` mediante la integración de Vercel.

## Principios del proyecto

- Mantener las páginas estáticas siempre que sea posible.
- Evitar JavaScript cliente innecesario.
- Conservar la identidad visual sin sacrificar accesibilidad.
- No duplicar imágenes entre traducciones.
- Tratar cada artículo como contenido editorial, no como una página aislada.
- Incorporar infraestructura solo cuando resuelva una necesidad real.
