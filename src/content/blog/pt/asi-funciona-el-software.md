---
title: "Como funciona o software"
description: "David Byrne, a música e a arquitetura de software: por que compreender o contexto importa mais do que escolher os instrumentos mais sofisticados."
pubDate: 2026-09-21
heroImage: "/src/assets/escenario.webp"
heroFilter: true
lang: "pt"
translationKey: "asi-funciona-el-software"
tags: ["arquitetura", "arte", "desenvolvimento"]
---

Vagando pelo centro, encontrei um livro novo.

Um daqueles livros que você compra por curiosidade e que, depois de algumas páginas, sabe que inevitavelmente vai acabar virando um post.

Chama-se *Como funciona a música*, de David Byrne.

E lembrem-se de que este é um ateliê aberto: posso falar sobre o que quiser. Embora, inevitavelmente, eu acabe divagando até encontrar alguma analogia que me leve de volta ao desenvolvimento de software.

Talvez porque, como já disse antes, o desenvolvimento nasce do humano.

O software não existe separado de nós. Ele herda nossas formas de organização, nossos problemas, nossas abstrações e até nossas contradições. Projetamos sistemas inspirados, consciente ou inconscientemente, por séculos de criação humana.

Então hoje quero falar de música.

Ou talvez de arquitetura de software.

Provavelmente de ambas.

## Um pouco de contexto

David Byrne nasceu em Dumbarton, na Escócia, em 14 de maio de 1952. Desde jovem, tentou encontrar um lugar na música. Curiosamente, nem sempre pareceu destinado a se tornar uma figura importante nela.

Anos depois, acabaria se tornando um dos fundadores do Talking Heads, uma das bandas fundamentais surgidas da cena new wave e pós-punk de Nova York.

Mas até o Talking Heads acabaria sendo insuficiente para sua curiosidade.

O homem por trás de *Psycho Killer* continuou ampliando as fronteiras do que entendia por música: experimentou com ritmos, colaborações, performance, sons de diferentes culturas e uma carreira solo difícil de encaixar em uma única categoria.

E talvez seja por isso que *Como funciona a música* seja tão interessante.

Não é exatamente um tratado acadêmico sobre teoria musical.

É algo muito mais pessoal.

É o olhar de alguém que passou décadas fazendo música e que tenta entender por que algumas coisas funcionam.

E, acima de tudo, **por que funcionam onde funcionam**.

## A sala também compõe a canção

Há uma ideia do livro que ficou comigo.

Byrne fala de diferentes espaços onde a música existe: pequenos palcos, clubes, salas de concerto, automóveis, estádios, gravações, filmes.

E propõe algo aparentemente simples:

**Nem toda música funciona da mesma forma em todos os lugares.**

Uma canção pensada para ser ouvida diante de milhares de pessoas, com um estádio inteiro cantando junto, não necessariamente funciona da mesma maneira quando você está sozinho dentro de um automóvel.

Uma composição cheia de detalhes pode ser extraordinária nos fones de ouvido e perder boa parte do encanto em um lugar enorme.

A música de um pequeno palco precisa de coisas diferentes da música de uma sala de concertos.

E uma peça que acompanha perfeitamente uma cena de cinema talvez nem sequer faça sentido separada das imagens para as quais foi criada.

O espaço não é simplesmente o recipiente onde colocamos a música.

**O espaço faz parte da música.**

O contexto modifica aquilo que funciona.

E, enquanto lia isso, pensei:

Claro.

É assim que o software também funciona.

## Como funciona o software

No desenvolvimento, temos uma estranha fascinação por buscar respostas universais.

Qual é a melhor linguagem?

Qual é o melhor framework?

Microsserviços ou monólito?

SQL ou NoSQL?

REST ou GraphQL?

Kubernetes?

Serverless?

Eventos?

Filas?

Queremos encontrar a arquitetura perfeita.

Mas talvez estejamos fazendo a pergunta errada.

Seria como perguntar a David Byrne:

**Qual é a melhor música?**

Para onde?

Para quem?

Em que espaço?

Com quantas pessoas?

Com quais instrumentos?

Com qual orçamento?

Para ser ouvida em silêncio ou para fazer dez mil pessoas dançarem?

No software acontece exatamente a mesma coisa.

Uma arquitetura pode ser extraordinária em um contexto e absurda em outro.

Você pode construir um sistema distribuído impecável, cheio de microsserviços, eventos, filas, observabilidade, Kubernetes e tolerância a falhas...

para uma aplicação interna utilizada por vinte pessoas.

Tecnicamente impressionante.

Arquitetonicamente ridículo.

Seria como montar o sistema de som de um estádio para tocar diante de doze pessoas em um café.

Não significa que o sistema de som seja ruim.

Significa que **ele não pertence àquele lugar**.

E o contrário também acontece.

Um monólito simples pode ser perfeito para começar um produto, permitir que uma equipe pequena avance rapidamente e manter os custos operacionais baixos.

Mas, se esse mesmo sistema acabar processando enormes quantidades de operações, integrando múltiplos canais, equipes e domínios independentes, talvez aquilo que um dia foi sua maior virtude acabe se tornando uma limitação.

Não porque monólitos sejam ruins.

Não porque microsserviços sejam melhores.

Porque o cenário mudou.

## A arquitetura também escuta

Acredito que uma das diferenças entre simplesmente programar e projetar sistemas esteja justamente aí.

O arquiteto não deveria começar se perguntando qual tecnologia quer utilizar.

Deveria começar escutando a sala.

Quantas pessoas vão usar isto?

Quanto tráfego realmente esperamos?

Quantos desenvolvedores vão mantê-lo?

Quais conhecimentos a equipe tem?

Quanto dinheiro temos?

Quanto custa operá-lo?

Com que rapidez precisamos modificá-lo?

O que acontece se falhar?

Quais partes precisam escalar?

E quais provavelmente nunca precisarão?

Só depois faz sentido falar de ferramentas.

Porque PostgreSQL, Redis, RabbitMQ, Kafka, Kubernetes, Go, TypeScript, React ou qualquer tecnologia que esteja na moda naquele momento não são respostas.

São instrumentos.

E um bom músico não demonstra seu talento usando todos os instrumentos disponíveis ao mesmo tempo.

Ele sabe de qual a canção precisa.

## Às vezes, um violão é suficiente

A indústria de software tem um problema particular com isso.

Adoramos confundir complexidade com sofisticação.

Uma arquitetura com vinte componentes parece mais séria do que uma com três.

Um diagrama cheio de caixas e setas parece mais profissional do que um simples.

Dizer “arquitetura distribuída orientada a eventos” soa consideravelmente melhor do que dizer:

“Temos uma aplicação e um banco de dados.”

Mas talvez uma aplicação e um banco de dados sejam exatamente o que você precisa.

E, se resolvem corretamente o problema, suportam a carga necessária, podem ser mantidos e permitem que o produto evolua, então não são uma arquitetura inferior.

São a arquitetura certa para aquela sala.

É claro que existem exceções.

Também existe música capaz de sobreviver em praticamente qualquer cenário.

Canções que você pode ouvir com fones, em um automóvel, interpretadas por uma orquestra ou gritadas por milhares de pessoas e que, de alguma forma, continuam funcionando.

Mas são excepcionais justamente porque conseguir isso é extraordinariamente difícil.

No software também existem ideias surpreendentemente resistentes ao contexto: princípios simples que sobrevivem a linguagens, frameworks e décadas.

Mas até elas precisam de adaptação.

Porque nenhum sistema existe no vazio.

## Antes de projetar, escute

Talvez seja por isso que gostei tanto da ideia de Byrne.

Porque ela nos obriga a mudar a pergunta.

Quando projetamos software, costumamos nos perguntar:

**Qual é a melhor arquitetura?**

Talvez devêssemos perguntar:

**Qual é a arquitetura que pode soar bem aqui?**

E isso muda completamente a conversa.

Porque então a arquitetura deixa de ser uma coleção de tecnologias e começa a se tornar uma disciplina de contexto, restrições e decisões.

Você não precisa do maior palco.

Não precisa de todos os instrumentos.

Não precisa usar a tecnologia que aparece esta semana em todas as conferências.

Precisa entender onde está tocando.

Para quantas pessoas.

Com quais músicos.

Com quais recursos.

E qual canção está tentando tocar.

Porque você pode ter os melhores músicos, os instrumentos mais caros e o sistema de som mais sofisticado do mundo.

Mas, se nunca entendeu a sala,

**provavelmente também não entendeu a música.**

E talvez seja assim que o software também funciona.
