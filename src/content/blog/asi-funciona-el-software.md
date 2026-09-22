---
title: "Así funciona el software"
description: "David Byrne, la música y la arquitectura de software: por qué entender el contexto importa más que elegir los instrumentos más sofisticados."
pubDate: 2026-09-21
heroImage: "/src/assets/escenario.webp"
heroFilter: true
tags: ["arquitectura", "arte", "desarrollo"]
lang: "es"
translationKey: "asi-funciona-el-software"
---

Vagando por el centro encontré un libro nuevo.

Uno de esos libros que compras por curiosidad y que, después de unas páginas, sabes que inevitablemente terminará convertido en un post.

Se llama *Así funciona la música*, de David Byrne.

Y recuerden que esto es un estudio abierto: puedo hablar de lo que quiera. Aunque, inevitablemente, termino divagando hasta encontrar alguna analogía que me lleve de vuelta al desarrollo de software.

Quizá porque, como he dicho antes, el desarrollo nace de lo humano.

El software no existe separado de nosotros. Hereda nuestras formas de organizarnos, nuestros problemas, nuestras abstracciones y hasta nuestras contradicciones. Diseñamos sistemas inspirándonos, consciente o inconscientemente, en siglos de creación humana.

Así que hoy quiero hablar de música.

O quizá de arquitectura de software.

Probablemente de ambas.

## Un poco de contexto

David Byrne nació en Dumbarton, Escocia, el 14 de mayo de 1952. Desde joven intentó encontrar un lugar dentro de la música. Curiosamente, no siempre pareció destinado a convertirse en una figura importante de ella.

Años después terminaría siendo uno de los fundadores de Talking Heads, una de las bandas fundamentales surgidas de la escena new wave y post-punk de Nueva York.

Pero incluso Talking Heads terminaría siendo insuficiente para su curiosidad.

El hombre detrás de *Psycho Killer* siguió empujando las fronteras de lo que entendía por música: experimentó con ritmos, colaboraciones, performance, sonidos provenientes de distintas culturas y una carrera solista difícil de encerrar en una sola categoría.

Y quizá por eso *Así funciona la música* resulta tan interesante.

No es exactamente un tratado académico sobre teoría musical.

Es algo mucho más personal.

Es la mirada de alguien que pasó décadas haciendo música y que intenta entender por qué algunas cosas funcionan.

Y, sobre todo, **por qué funcionan donde funcionan**.

## La habitación también compone la canción

Hay una idea del libro que se quedó conmigo.

Byrne habla de distintos espacios donde la música existe: pequeños escenarios, clubes, salas de conciertos, automóviles, estadios, grabaciones, películas.

Y plantea algo aparentemente sencillo:

**No toda la música funciona igual en todos los lugares.**

Una canción diseñada para ser escuchada frente a miles de personas, con un estadio entero coreando, no necesariamente funciona de la misma manera cuando estás solo dentro de un automóvil.

Una composición llena de detalles puede ser extraordinaria con audífonos y perder buena parte de su encanto en un lugar enorme.

La música de un pequeño escenario necesita cosas diferentes a la música de una sala de conciertos.

Y una pieza que acompaña perfectamente una escena cinematográfica quizá ni siquiera tendría sentido separada de las imágenes para las que fue creada.

El espacio no es simplemente el recipiente donde colocamos la música.

**El espacio forma parte de la música.**

El contexto modifica aquello que funciona.

Y mientras leía esto pensé:

Claro.

Así funciona también el software.

## Así funciona el software

En desarrollo tenemos una extraña fascinación por buscar respuestas universales.

¿Cuál es el mejor lenguaje?

¿Cuál es el mejor framework?

¿Microservicios o monolito?

¿SQL o NoSQL?

¿REST o GraphQL?

¿Kubernetes?

¿Serverless?

¿Eventos?

¿Colas?

Queremos encontrar la arquitectura perfecta.

Pero quizá estamos haciendo la pregunta equivocada.

Sería como preguntarle a David Byrne:

**¿Cuál es la mejor música?**

¿Para dónde?

¿Para quién?

¿En qué espacio?

¿Con cuántas personas?

¿Con qué instrumentos?

¿Con qué presupuesto?

¿Para ser escuchada en silencio o para hacer bailar a diez mil personas?

En software ocurre exactamente lo mismo.

Una arquitectura puede ser extraordinaria en un contexto y absurda en otro.

Puedes construir un sistema distribuido impecable, lleno de microservicios, eventos, colas, observabilidad, Kubernetes y tolerancia a fallos...

para una aplicación interna utilizada por veinte personas.

Técnicamente impresionante.

Arquitectónicamente ridículo.

Sería como montar el sistema de sonido de un estadio para tocar frente a doce personas en un café.

No significa que el sistema de sonido sea malo.

Significa que **no pertenece ahí**.

Y lo contrario también ocurre.

Un monolito sencillo puede ser perfecto para comenzar un producto, permitir que un equipo pequeño avance rápidamente y mantener bajos los costos operativos.

Pero si ese mismo sistema termina procesando enormes cantidades de operaciones, integrando múltiples canales, equipos y dominios independientes, quizá aquello que alguna vez fue su mayor virtud termine convirtiéndose en una limitación.

No porque los monolitos sean malos.

No porque los microservicios sean mejores.

Porque cambió el escenario.

## La arquitectura también escucha

Creo que una de las diferencias entre simplemente programar y diseñar sistemas está precisamente ahí.

El arquitecto no debería comenzar preguntándose qué tecnología quiere utilizar.

Debería comenzar escuchando la habitación.

¿Cuántas personas van a usar esto?

¿Cuánto tráfico esperamos realmente?

¿Cuántos desarrolladores van a mantenerlo?

¿Qué conocimientos tiene el equipo?

¿Cuánto dinero tenemos?

¿Cuánto cuesta operarlo?

¿Qué tan rápido necesitamos cambiarlo?

¿Qué pasa si falla?

¿Qué partes necesitan escalar?

¿Y cuáles probablemente nunca lo harán?

Solo después tiene sentido hablar de herramientas.

Porque PostgreSQL, Redis, RabbitMQ, Kafka, Kubernetes, Go, TypeScript, React o cualquier tecnología que esté de moda en ese momento no son respuestas.

Son instrumentos.

Y un buen músico no demuestra su talento utilizando todos los instrumentos disponibles al mismo tiempo.

Sabe cuál necesita la canción.

## A veces una guitarra es suficiente

La industria del software tiene un problema particular con esto.

Nos encanta confundir complejidad con sofisticación.

Una arquitectura con veinte componentes parece más seria que una con tres.

Un diagrama lleno de cajas y flechas parece más profesional que uno sencillo.

Decir “arquitectura distribuida orientada a eventos” suena considerablemente mejor que decir:

“Tenemos una aplicación y una base de datos.”

Pero quizá una aplicación y una base de datos sean exactamente lo que necesitas.

Y si resuelven correctamente el problema, soportan la carga necesaria, pueden mantenerse y permiten evolucionar el producto, entonces no son una arquitectura inferior.

Son la arquitectura correcta para esa habitación.

Claro que existen excepciones.

También existe música capaz de sobrevivir prácticamente en cualquier escenario.

Canciones que puedes escuchar con audífonos, en un automóvil, interpretadas por una orquesta o gritadas por miles de personas y que, de alguna manera, continúan funcionando.

Pero son excepcionales precisamente porque conseguirlo es extraordinariamente difícil.

En software también existen ideas sorprendentemente resistentes al contexto: principios sencillos que sobreviven lenguajes, frameworks y décadas.

Pero incluso ellas necesitan adaptación.

Porque ningún sistema existe en el vacío.

## Antes de diseñar, escucha

Quizá por eso me gustó tanto la idea de Byrne.

Porque obliga a cambiar la pregunta.

Cuando diseñamos software solemos preguntarnos:

**¿Cuál es la mejor arquitectura?**

Tal vez deberíamos preguntar:

**¿Cuál es la arquitectura que puede sonar bien aquí?**

Y eso cambia completamente la conversación.

Porque entonces arquitectura deja de ser una colección de tecnologías y empieza a convertirse en una disciplina de contexto, restricciones y decisiones.

No necesitas el escenario más grande.

No necesitas todos los instrumentos.

No necesitas utilizar la tecnología que aparece esta semana en todas las conferencias.

Necesitas entender dónde estás tocando.

Para cuántas personas.

Con qué músicos.

Con qué recursos.

Y qué canción estás intentando tocar.

Porque puedes tener a los mejores músicos, los instrumentos más caros y el sistema de sonido más sofisticado del mundo.

Pero si nunca entendiste la habitación,

**probablemente tampoco entendiste la música.**

Y quizá así funciona también el software.
