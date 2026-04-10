---
title: "La Ilusión de lo Universal: Arquitectura, Accesibilidad y el Lenguaje Común"
description: "Si no entiendes a quién sirve tu sistema, no puedes hacerlo accesible. Convertir la accesibilidad en cultura."
pubDate: 2026-04-09
heroImage: "/src/assets/personas-caminando-fuera.jpg"
tags: ["accesibilidad", "ddd", "arquitectura"]
lang: "es"
---

## Lo universal: la tarea colosal

Debemos aspirar a lo universal. Sin embargo, entender lo "universal" es, quizás, la tarea más colosal que existe.

Caminando por el centro de la ciudad, en ese ejercicio constante de observar el caos con intención, me encontré con algo simple: una persona intentaba cruzar la calle, pero su andadera no podía avanzar. La rampa estaba bloqueada por las sillas de un puesto.

Fueron dos minutos de ayuda. Pero fueron solo dos minutos para mí.

Después de eso, la pregunta cambió de forma:
¿cuántas veces enfrenta esto en un solo día?

Ahí entendí algo incómodo:

_El problema no es la ausencia._
_Es la falsa presencia._

La rampa estaba ahí. El acceso también. Pero alguien decidió que ese espacio podía ocuparse. En software hacemos lo mismo.

## Antes de hablar de técnica

Esto no va de frameworks. Ni de seguir una metodología específica.

Hay muchas formas de construir software. Pero hay algo que no es opcional:

> Si no entiendes a quién sirve tu sistema, no puedes hacerlo accesible.

Aquí es donde tomo una idea de Domain-Driven Design (DDD). No como regla. No como dogma. Sino por su esencia.

## DDD como filosofía de inclusión

El DDD habla del _Ubiquitous Language_: un lenguaje compartido entre negocio y tecnología.

Pero en accesibilidad, esto es algo más crudo:
**Tu código debe hablar un idioma que todos puedan interpretar.**

Ese "todos" no es abstracto:

- es el navegador
- es un lector de pantalla
- es alguien navegando solo con teclado
- es alguien que no interactúa como tú

Si rompes ese lenguaje, rompes la experiencia.

El HTML semántico no es una recomendación elegante. Es el idioma base.

Y aquí está el punto que normalmente ignoramos:

**Si no eres dueño de la lógica de lo que construyes, no puedes hacerlo accesible.**

## La arrogancia de ignorar lo simple

Nos gusta la complejidad. Nos hace sentir que estamos construyendo algo importante. Pero muchas veces solo estamos reescribiendo lo que ya existía... peor.

Un `<select>` ya resuelve:

- navegación por teclado
- manejo de foco
- compatibilidad con lectores de pantalla

Un `<details>` ya es interactivo sin una línea de JavaScript.

Cuando decides reemplazar esto con divs, no estás innovando. Estás asumiendo que puedes hacerlo mejor que el estándar. Y casi nunca es cierto.

**Guía simple:**

- Si existe un elemento nativo → úsalo
- Si no cumple → extiéndelo
- Si lo reemplazas → acepta que ahora tú eres responsable de todo lo que rompiste

## ARIA: cuando el silencio también comunica

ARIA no es para "arreglar" HTML mal hecho. Es para dar contexto cuando el HTML no alcanza.

Un icono decorativo no debería hablar:

```html
<span aria-hidden="true">★</span>
```

Un botón sin texto visible necesita una voz:

```html
<button aria-label="Cerrar modal">×</button>
```

Pero aquí hay una verdad incómoda: Si necesitas mucho ARIA, probablemente el problema está antes.

ARIA no es solución. Es ajuste fino.

## Alt text: describir no es suficiente

Un mal alt describe píxeles. Un buen alt transmite intención.

No es lo mismo decir:
_"Imagen de una persona"_

que decir:
_"Persona bloqueada al intentar usar una rampa ocupada"_

No describes la imagen. Describes lo que importa de ella.

## Convertir accesibilidad en algo real

Esto no debería quedarse en teoría.

Con mi equipo, algo que funciona es llevar esto a lo tangible:

1. Una persona describe la imagen.
2. Los demás hacen un boceto basado solo en esa descripción.

Si el resultado no coincide, el alt falla.

Es una inversión de tiempo. Pero transforma la accesibilidad en algo real, no en un checklist.

## Navegación por teclado: el mapa invisible

El teclado es un mouse que no ves. Si lo rompes, el usuario se pierde.

Errores comunes:

- eliminar el outline
- desordenar el flujo de tabulación
- perder el foco en componentes dinámicos

Quitar el foco visual sin reemplazarlo no es estética. Es dejar al usuario sin referencia.

Es como apagar las luces en un edificio y esperar que todos encuentren la salida.

## Tablas: cuando la estructura sí importa

Las tablas no son un vestigio del pasado. Bien usadas, comunican relaciones.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Erick</td>
      <td>35</td>
    </tr>
  </tbody>
</table>
```

Un lector de pantalla entiende esto como información conectada. Un conjunto de divs estilizados no.

## El compromiso que va más allá

Aquí es donde esto deja de ser solo una decisión técnica. Hay empresas que ya entendieron que accesibilidad no es una mejora... es una responsabilidad.

Cuando una organización decide cumplir estándares, certificarse o auditar sus plataformas, no solo está optimizando producto: está declarando algo.

Está diciendo que su software no es exclusivo. Que su alcance no depende de las capacidades del usuario.

Eso es compromiso real. Y ahí es donde accesibilidad deja de ser una buena práctica... y se convierte en cultura.

## El beneficio que no se dice

Hacer software accesible no solo es correcto. Es estratégico.

- mejora SEO
- mejora rendimiento
- reduce bugs
- facilita mantenimiento
- prepara tu producto para certificaciones

No es un extra. Es parte de construir bien.

## El cierre

La universalidad no es un estado. Es una dirección.

Cada decisión que tomas define quién puede avanzar... y quién se queda esperando.

Aquella rampa no estaba rota. Estaba ocupada.

Y eso es lo más peligroso: cuando creemos que ya resolvimos algo... y dejamos de verlo. El software está lleno de rampas así.

Si no construimos para todos, no estamos construyendo progreso. Solo estamos optimizando privilegios.
