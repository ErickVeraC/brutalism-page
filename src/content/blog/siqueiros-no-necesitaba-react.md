---
title: "Siqueiros no necesitaba React"
description: "La obra de Siqueiros como punto de partida para pensar las dos abstracciones del software y elegir herramientas según los datos y la experiencia del usuario."
pubDate: 2026-11-03
heroImage: "/src/assets/siqueiros-no-necesitaba-react.webp"
heroFilter: false
tags: ["arquitectura", "arte", "desarrollo"]
lang: "es"
translationKey: "siqueiros-no-necesitaba-react"
---

En la vida cotidiana encontramos formas de expresión en perfecta armonía con su entorno. Las vemos en los carteles publicitarios, en los rótulos, en los anuncios de una tienda e incluso en los grafitis. A veces basta con prestar un poco de atención para descubrir cómo todas estas expresiones encajan y terminan construyendo la imagen de nuestras ciudades.

En comunicación visual existe una máxima bastante sencilla: transmitir un mensaje a través del sentido de la vista. Puede parecer obvio, pero tiene un significado mucho más profundo de lo que imaginamos, especialmente porque no está limitado por los materiales que utilizamos.

Este punto me parece importante. Si quieres compartir una idea o mostrar tu creatividad, no necesitas exclusivamente un lienzo y óleo, lápiz y papel o una pantalla. Piensa, por ejemplo, en algunas de las primeras imágenes con las que el ser humano intentó comunicarse: las pinturas rupestres.

No te dejes engañar por lo rudimentarias que pueden parecernos ahora. Al final, cumplen con uno de los principios fundamentales de la comunicación: abstraer una idea y conseguir plasmarla utilizando los materiales disponibles. Y vaya forma de hacerlo, después de miles de años todavía podemos observarlas y comprender, al menos parcialmente, aquello que alguien intentó transmitir.

El desarrollo de software funciona, o al menos aspira a funcionar, de una manera bastante parecida.

Tenemos una idea que busca facilitar algo, resolver un problema o crear una nueva forma de hacer las cosas. Sin embargo, entre imaginarla y construirla existe un proceso que, desde mi experiencia, requiere dos grandes abstracciones. Esto no significa que podamos desarrollar software en dos sencillos pasos, sino que existen dos problemas distintos que debemos aprender a resolver.

La primera abstracción consiste en traducir nuestra idea a algo que podamos convertir en software.

Imaginemos que necesitamos una aplicación para un consultorio dental. Podríamos decir simplemente:

“Necesito una aplicación para mostrar los servicios del dentista y agendar citas”.

Pero eso todavía no es abstraer el problema.

Necesitamos saber quién agenda, cómo se consulta la disponibilidad, qué sucede cuando existen varios dentistas, quién puede atender a determinado paciente, cómo se lleva el seguimiento de sus tratamientos, qué ocurre cuando dos personas intentan ocupar el mismo horario y qué información necesita cada una de las personas involucradas.

Quiero que notes por qué hice una lista mucho más extensa que simplemente “mostrar servicios y crear o editar citas”.

Una idea necesita abstraerse hasta encontrar su esencia si queremos convertirla en algo viable y valioso.

Existen diferentes técnicas para hacerlo. Una de ellas es Domain-Driven Design, de la que ya me tomaré más tiempo para hablar en otro momento.

Por ahora podemos imaginar esta parte del desarrollo como crear una empresa y decidir cuántas áreas necesita, qué responsabilidad tendrá cada una y cómo deberán comunicarse entre ellas.

O, si queremos llevarlo a la arquitectura, sería preguntarnos qué tipo de edificio necesitamos construir. Tal vez un auditorio, un estadio, un taller o quizá solamente un pequeño edificio de oficinas. Antes de discutir materiales tenemos que entender qué queremos construir.

Esta primera abstracción requiere un pensamiento principalmente analítico. Habla de responsabilidades, dominios, reglas, datos y flujos de trabajo.

Sé que esto no es habitual en un artículo sobre desarrollo web, pero este es un estudio abierto y aquí me gusta invitar a la reflexión. El software no debería tratarse a la ligera; no es algo que un par de prompts ingeniosos puedan convertir mágicamente en el próximo Uber, Airbnb o Facebook.

Y aquí es donde quiero hablar de la segunda abstracción.

## Una caminata por el Museo de Arte Moderno

La idea de este texto surgió durante una caminata muy especial que tuve el domingo por uno de mis ahora museos favoritos: el Museo de Arte Moderno de la Ciudad de México.

Recuerda que comenzamos hablando de comunicación visual, de rótulos, carteles y grafitis. Podríamos hablar de una infinidad de expresiones que comparten mensajes a plena vista, esperando que alguien quiera prestarles atención. Entre todas ellas hay una que siempre ha ocupado un lugar especial para mí: la pintura.

Aclaro que no creo que sea la forma definitiva de expresión visual, simplemente es una de mis favoritas.

Durante aquella visita, entre las obras de la colección de arte mexicano, encontré nuevamente el trabajo de un artista que, para mí, es un genio: David Alfaro Siqueiros.

Si no conoces su trabajo, te invito a descubrirlo, pero no solamente por internet. Hay algo en su pintura que necesitas experimentar frente a ella.

Podríamos hablar de sus trazos, de sus colores o del mensaje político y transgresor que atraviesa buena parte de su producción. Sin embargo, detenernos únicamente en esos elementos sería quedarnos cortos.

Siqueiros experimentaba con las superficies, los materiales y las texturas. Incorporó pinturas industriales, herramientas como el aerógrafo y técnicas que rompían con las formas tradicionales de pintar. No se conformaba con utilizar lo que otros pintores habían empleado durante siglos; buscaba nuevos medios para conseguir aquello que imaginaba.

Pero hay algo todavía más interesante en su trabajo: la manera en que entendía al espectador.

Frente a una de las pinturas que encontré en el museo, *El diablo en la iglesia*, realizada en 1947, me llamó especialmente la atención una composición que parecía extenderse hacia el fondo de una enorme iglesia. En lo alto, un diablo domina la escena, mientras debajo de él las figuras humanas se distribuyen entre arcos y bóvedas, hasta llegar a una multitud que ocupa prácticamente todo el primer plano. La obra no solamente utiliza la arquitectura para crear profundidad; también la convierte en parte de su mensaje político, una crítica a las jerarquías y al poder religioso.

En otra obra, unas enormes manos abiertas ocupaban el primer plano, mientras el cuerpo parecía proyectarse hacia nosotros. En ambas había algo que me resultaba fascinante: Siqueiros conseguía que la perspectiva fuera mucho más que una forma de representar el espacio. Era también una manera de dirigir nuestra mirada y transformar la relación que establecemos con aquello que estamos observando.

Siqueiros desarrolló una propuesta que llamó poliangularidad. Su intención era romper con la idea de que una pintura debía contemplarse desde un único punto de vista. Para él, el espectador no permanecía inmóvil; caminaba, cambiaba de posición y descubría la composición desde distintos ángulos.

Esto significaba que la obra debía considerar el espacio donde se encontraba y el recorrido de quien la observaba.

Su pintura no parece conformarse con existir dentro de los límites que le asignaron; se extiende sobre ellos, utiliza el espacio y busca transformarlo. El impacto visual consigue que algunas de sus piezas parezcan vivas y terminen inundando la sala donde se encuentran.

Y lo fascinante es que el movimiento no necesariamente está en la pintura, sino en nuestra relación con ella.

Su obra no se siente estática, sino dinámica.

Y es precisamente aquí donde encuentro una relación con el desarrollo.

## La segunda abstracción

Después de comprender el problema, todavía necesitamos convertirlo en una experiencia.

Esta segunda abstracción es diferente. Ya no estamos intentando tomar una idea sencilla y robustecerla hasta encontrar sus dominios, reglas y relaciones. Ahora tenemos que conceptualizar todo aquello y convertirlo en algo visual, comprensible y, con suerte, memorable.

El usuario debe sentirse invitado a entrar, como frente a una obra de Siqueiros. Debe comprender cómo recorrerla y experimentar cierta familiaridad, aunque nunca haya estado ahí.

Pero no solamente por cómo se ve, eso sería demasiado sencillo. Debe recordarla por la manera en que se mueve a través de ella.

Aquí es donde la poliangularidad me parece especialmente interesante. Siqueiros consideraba los distintos puntos desde los cuales el espectador experimentaba su obra. En el desarrollo deberíamos preguntarnos algo parecido: ¿desde dónde llega nuestro usuario?, ¿qué necesita encontrar?, ¿qué sucede cuando interactúa con lo que construimos?

Una aplicación no se experimenta de una sola manera. El usuario puede llegar buscando información, intentando completar una tarea o tratando de resolver un problema que no habíamos imaginado. Su recorrido modifica la experiencia, aunque la aplicación siga siendo la misma.

Y ahí aparece la verdadera dificultad.

Después de la primera abstracción tenemos datos, relaciones, estados y reglas. Sin embargo, nada de eso significa demasiado para el usuario hasta que conseguimos presentárselo de una forma que pueda comprender.

Los datos deben adquirir sentido dentro de la experiencia, cambiar cuando sea necesario y presentarse en el momento adecuado. La interfaz debe responder a las acciones del usuario, mostrarle qué ha sucedido y permitirle continuar su recorrido sin tener que comprender toda la complejidad que existe detrás.

Al igual que en la obra de Siqueiros, el material tiene que formar parte de la experiencia.

Nuestra aspiración debería ser algo muy sencillo de decir y extremadamente difícil de conseguir: que el usuario pueda reconocernos.

Por eso considero que estas dos abstracciones son igual de importantes y encuentro una relación con dos grandes áreas del desarrollo: backend y frontend.

Aunque sus responsabilidades no están completamente separadas, podemos pensarlas de esta manera: una construye el mundo; la otra decide cómo vamos a recorrerlo.

## Siqueiros, React y los materiales

En este estudio abierto te invito a leer sobre tecnología desde un enfoque diferente. No todo tienen que ser guías técnicas, tutoriales o comparaciones de rendimiento. Mi objetivo también es intentar explicar, tanto a desarrolladores como a quienes simplemente sienten curiosidad, cómo funciona el desarrollo y, sobre todo, por qué hacemos las cosas de determinada manera.

Así que voy a hacer una comparación que puede parecer extraña: podemos utilizar la obra de Siqueiros para entender por qué existe una biblioteca como React.

Siqueiros utilizaba los materiales y las superficies disponibles para construir una obra dinámica. En desarrollo web también tenemos materiales, y uno de ellos son los datos.

La información que cambia dependiendo del usuario, del tiempo, de una acción o del estado de nuestra aplicación puede ser dinámica. Pero aquí hay una distinción importante: los datos no son una animación, un efecto ni un elemento decorativo. Son material.

Un sitio comercial cuya información permanece prácticamente igual puede funcionar perfectamente como una página estática. Su contenido existe, se presenta y rara vez necesita cambiar.

Pero imaginemos que esa misma página debe mostrar información diferente dependiendo del usuario, productos que aparecen y desaparecen de un catálogo, publicaciones que se actualizan constantemente o una agenda donde los horarios disponibles cambian cada vez que alguien crea una cita.

Entonces nuestro material ha cambiado y debemos decidir cómo presentarlo.

Aquí es donde conviene distinguir dos conceptos que muchas veces confundimos: que la información sea dinámica no significa necesariamente que toda la interfaz deba ser interactiva.

Podemos obtener información actualizada desde un servidor y mostrarla como HTML sin necesidad de ejecutar React en el navegador. En cambio, cuando necesitamos que una interfaz responda a las acciones del usuario, conserve estados o actualice determinados elementos sin reconstruir toda la página, bibliotecas como React pueden resultar especialmente útiles.

React permite construir interfaces a partir de componentes que reciben información y representan lo que el usuario debe ver. Cuando cambia su estado, puede actualizar las partes correspondientes de la interfaz.

Volvamos a nuestro consultorio dental.

Podríamos mostrar una lista de horarios disponibles generada desde el servidor. Pero si queremos que el usuario seleccione un dentista, cambie la fecha, consulte la disponibilidad y reciba una respuesta visual inmediata, necesitamos pensar en cómo debe comportarse esa interacción.

Y eso no significa que React sea nuestra única opción.

Esta diferencia es fundamental en el mundo del frontend, porque una buena decisión de arquitectura no debería comenzar preguntando cuál es el framework más moderno, sino qué necesitamos presentar, cómo se comporta esa información y qué tipo de interacción esperamos del usuario.

A veces la respuesta será React, otras veces no lo necesitaremos.

Incluso existen herramientas híbridas como Astro, una de mis favoritas, que permiten construir páginas principalmente estáticas e incorporar pequeñas islas de interactividad donde realmente hacen falta. Estas islas pueden utilizar React u otras bibliotecas sin obligarnos a convertir toda la página en una aplicación interactiva. También podemos incorporar contenido dinámico generado desde el servidor cuando lo necesitamos.

Lo interesante es que no tenemos que elegir entre una experiencia completamente estática o una completamente dinámica.

Podemos utilizar diferentes herramientas según la naturaleza de cada parte de nuestra aplicación.

No necesitamos convertir todo en dinámico simplemente porque podemos hacerlo. De la misma manera que Siqueiros no experimentaba con materiales solamente porque fueran novedosos, sino porque formaban parte de la obra que quería construir.

Antes de elegir nuestras herramientas tenemos que comprender nuestro material. Un framework no debería decidir qué vamos a construir; lo que queremos construir debería determinar qué herramientas necesitamos.

## El arte de elegir nuestros materiales

Salí del museo pensando en los materiales, en cómo una superficie puede dejar de ser solamente una superficie cuando alguien comprende lo que puede hacer con ella. En cómo Siqueiros conseguía que su obra pareciera extenderse más allá de sus propios límites, transformando el espacio que la rodeaba.

Y terminé pensando en el software, en los datos que almacenamos, en las interfaces que construimos y en todas esas decisiones que tomamos antes de que alguien pueda ver siquiera una línea de nuestro trabajo.

Hemos construido una enorme cantidad de herramientas que nos permiten hacer prácticamente cualquier cosa. Podemos crear aplicaciones dinámicas, interfaces reactivas y experiencias capaces de cambiar frente a nuestros ojos.

Pero tener la capacidad de hacerlo no significa que debamos hacerlo.

Quizá esa sea una de las cosas que más podemos aprender de Siqueiros. No se trata de utilizar todos los materiales disponibles ni de hacer que cada elemento llame nuestra atención, sino de comprender qué queremos expresar y encontrar los medios para conseguirlo.

Tal vez la distancia entre un pintor y un desarrollador no sea tan grande como imaginamos. Ambos necesitamos abstraer algo que todavía no existe, elegimos materiales e intentamos construir algo que otra persona pueda comprender.

Y después de aquella caminata, no pude evitar pensar nuevamente en esas primeras pinturas rupestres de las que hablábamos al principio.

Miles de años nos separan de quienes las crearon. Nuestros materiales han cambiado, nuestras herramientas son infinitamente más complejas y nuestras posibilidades parecen no tener límites.

Sin embargo, seguimos enfrentándonos al mismo problema.

Tenemos una idea.

Y queremos que alguien más pueda comprenderla.
