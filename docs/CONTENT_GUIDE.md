# Guía de contenido

## Crear un artículo

Añade un archivo Markdown en:

```text
src/content/blog/nombre-del-articulo.md
```

El nombre del archivo se convierte en el ID y en parte de la URL. Usa minúsculas, palabras separadas por guiones y evita cambiarlo después de publicar.

Frontmatter mínimo:

```yaml
---
title: "Título del artículo"
description: "Resumen breve y autosuficiente."
pubDate: 2026-08-01
heroImage: "/src/assets/nombre-de-la-imagen.webp"
tags: ["arquitectura", "filosofia"]
lang: "es"
translationKey: "nombre-estable-del-articulo"
---
```

Después del frontmatter comienza el cuerpo Markdown.

## Fechas

Usa el formato ISO:

```yaml
pubDate: 2026-08-01
updatedDate: 2026-08-12
```

Añade `updatedDate` únicamente cuando haya una revisión editorial significativa.

## Descripciones

La descripción debe:

- Explicar el argumento del artículo sin repetir el título.
- Funcionar fuera de contexto.
- Evitar frases genéricas como “En este artículo hablaremos de”.
- Mantenerse idealmente entre 120 y 180 caracteres.

## Etiquetas

Usa minúsculas y reutiliza vocabulario existente. Evita crear dos formas para el mismo concepto, por ejemplo `filosofia` y `filosofía`.

Antes de añadir una etiqueta:

```sh
rg 'tags:' src/content/blog
```

## Imagen principal

1. Coloca la fuente optimizada en `src/assets`.
2. Usa WebP para fotografía.
3. Limita héroes a 2400 px en el lado mayor.
4. Utiliza una calidad aproximada de 82.
5. Referencia la imagen con una ruta absoluta desde `/src/assets/`.

Ejemplo con ImageMagick:

```sh
magick input.jpg \
  -auto-orient \
  -resize '2400x2400>' \
  -strip \
  -quality 82 \
  -define webp:method=6 \
  src/assets/article-hero.webp
```

`heroFilter` controla el tratamiento brutalista:

```yaml
heroFilter: true
```

Usa `false` únicamente cuando el color original sea parte importante de la obra.

## Traducir un artículo

Cada idioma usa un archivo independiente y puede tener un slug natural:

```text
logical-architecture.md
arquitectura-logica.md
arquitetura-logica.md
```

Las tres entradas deben compartir la misma `translationKey`:

```yaml
translationKey: "logical-architecture"
```

Cambia en cada versión:

- `title`
- `description`
- `lang`
- Cuerpo del artículo
- Etiquetas cuando necesiten traducción editorial

Conserva:

- `pubDate`
- `heroImage`
- `heroFilter`
- `translationKey`

Idiomas permitidos:

```yaml
lang: "es"
lang: "en"
lang: "pt"
```

No traduzcas literalmente expresiones culturales o referencias artísticas cuando eso dañe el sentido. Prioriza conservar la voz y el argumento.

## Revisión

Antes de enviar un artículo:

```sh
pnpm check
pnpm dev
```

Comprueba:

- Título y descripción.
- Fecha y orden en el archivo.
- Imagen en escritorio y móvil.
- Jerarquía de encabezados.
- Enlaces.
- Selector de idioma.
- Ausencia de desbordamiento horizontal.
- Ruta final.

## Publicación

1. Crea una rama.
2. Añade el artículo y su asset.
3. Ejecuta `pnpm check`.
4. Abre un pull request.
5. Revisa el preview de Vercel.
6. Fusiona únicamente con `Quality gate` aprobado.

El merge a `main` inicia el despliegue de producción.
