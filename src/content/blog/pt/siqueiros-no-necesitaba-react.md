---
title: "Siqueiros não precisava de React"
description: "A obra de Siqueiros como ponto de partida para pensar as duas abstrações do software e escolher ferramentas conforme os dados e a experiência do usuário."
pubDate: 2026-11-03
heroImage: "/src/assets/siqueiros-no-necesitaba-react.webp"
heroFilter: false
tags: ["arquitetura", "arte", "desenvolvimento"]
lang: "pt"
translationKey: "siqueiros-no-necesitaba-react"
---

No cotidiano, encontramos formas de expressão em perfeita harmonia com seu entorno. Nós as vemos nos cartazes publicitários, nos letreiros, nos anúncios de uma loja e até nos grafites. Às vezes basta prestar um pouco de atenção para descobrir como todas essas expressões se encaixam e acabam construindo a imagem das nossas cidades.

Na comunicação visual existe uma máxima bastante simples: transmitir uma mensagem por meio da visão. Pode parecer óbvio, mas isso tem um significado muito mais profundo do que imaginamos, especialmente porque não se limita aos materiais que utilizamos.

Esse ponto me parece importante. Se você quer compartilhar uma ideia ou mostrar sua criatividade, não precisa necessariamente de tela e tinta a óleo, lápis e papel ou uma tela digital. Pense, por exemplo, em algumas das primeiras imagens com as quais o ser humano tentou se comunicar: as pinturas rupestres.

Não se deixe enganar pelo quanto elas podem nos parecer rudimentares hoje. No fim, cumprem um dos princípios fundamentais da comunicação: abstrair uma ideia e conseguir expressá-la com os materiais disponíveis. E que maneira de fazer isso. Depois de milhares de anos, ainda podemos observá-las e compreender, ao menos parcialmente, aquilo que alguém tentou transmitir.

O desenvolvimento de software funciona, ou pelo menos aspira a funcionar, de maneira bastante parecida.

Temos uma ideia que busca facilitar algo, resolver um problema ou criar uma nova maneira de fazer as coisas. No entanto, entre imaginá-la e construí-la existe um processo que, pela minha experiência, exige duas grandes abstrações. Isso não significa que podemos desenvolver software em dois passos simples, mas que existem dois problemas distintos que precisamos aprender a resolver.

A primeira abstração consiste em traduzir nossa ideia em algo que possamos transformar em software.

Vamos imaginar que precisamos de uma aplicação para um consultório odontológico. Poderíamos dizer simplesmente:

“Preciso de uma aplicação para mostrar os serviços do dentista e agendar consultas”.

Mas isso ainda não é abstrair o problema.

Precisamos saber quem faz o agendamento, como a disponibilidade é consultada, o que acontece quando há vários dentistas, quem pode atender determinado paciente, como os tratamentos são acompanhados, o que ocorre quando duas pessoas tentam ocupar o mesmo horário e de quais informações cada uma das pessoas envolvidas precisa.

Quero que você perceba por que fiz uma lista muito mais extensa do que simplesmente “mostrar serviços e criar ou editar consultas”.

Uma ideia precisa ser abstraída até encontrarmos sua essência se quisermos transformá-la em algo viável e valioso.

Existem diferentes técnicas para isso. Uma delas é Domain-Driven Design, sobre a qual vou me demorar mais em outra ocasião.

Por enquanto, podemos imaginar essa parte do desenvolvimento como criar uma empresa e decidir de quantas áreas ela precisa, qual será a responsabilidade de cada uma e como elas deverão se comunicar.

Ou, se quisermos levar isso para a arquitetura, seria perguntar que tipo de edifício precisamos construir. Talvez um auditório, um estádio, uma oficina ou apenas um pequeno prédio de escritórios. Antes de discutir materiais, precisamos entender o que queremos construir.

Essa primeira abstração exige um pensamento principalmente analítico. Ela trata de responsabilidades, domínios, regras, dados e fluxos de trabalho.

Sei que isso não é habitual em um artigo sobre desenvolvimento web, mas este é um ateliê aberto e gosto de convidar à reflexão por aqui. O software não deveria ser tratado de maneira leviana; não é algo que um par de prompts engenhosos possa transformar magicamente no próximo Uber, Airbnb ou Facebook.

E é aqui que quero falar da segunda abstração.

## Uma caminhada pelo Museo de Arte Moderno

A ideia deste texto surgiu durante uma caminhada muito especial que fiz no domingo por um museu que agora está entre os meus favoritos: o Museo de Arte Moderno da Cidade do México.

Lembre-se de que começamos falando de comunicação visual, de letreiros, cartazes e grafites. Poderíamos falar de uma infinidade de expressões que compartilham mensagens à vista de todos, esperando que alguém queira prestar atenção. Entre todas elas, há uma que sempre ocupou um lugar especial para mim: a pintura.

Quero deixar claro que não a considero a forma definitiva de expressão visual. É simplesmente uma das minhas favoritas.

Durante aquela visita, entre as obras da coleção de arte mexicana, reencontrei o trabalho de um artista que, para mim, é um gênio: David Alfaro Siqueiros.

Se você não conhece seu trabalho, convido você a descobri-lo, mas não apenas pela internet. Há algo em sua pintura que você precisa experimentar diante dela.

Poderíamos falar de seus traços, de suas cores ou da mensagem política e transgressora que atravessa boa parte de sua produção. No entanto, ficar apenas nesses elementos seria insuficiente.

Siqueiros experimentava com superfícies, materiais e texturas. Incorporou tintas industriais, ferramentas como o aerógrafo e técnicas que rompiam com as formas tradicionais de pintar. Não se contentava em utilizar o que outros pintores haviam usado durante séculos; buscava novos meios para alcançar aquilo que imaginava.

Mas há algo ainda mais interessante em seu trabalho: a maneira como entendia o espectador.

Diante de uma das pinturas que encontrei no museu, *El diablo en la iglesia*, realizada em 1947, chamou especialmente minha atenção uma composição que parecia se estender até o fundo de uma enorme igreja. No alto, um diabo domina a cena, enquanto abaixo dele as figuras humanas se distribuem entre arcos e abóbadas, até chegar a uma multidão que ocupa praticamente todo o primeiro plano. A obra não utiliza a arquitetura apenas para criar profundidade; também a transforma em parte de sua mensagem política, uma crítica às hierarquias e ao poder religioso.

Em outra obra, enormes mãos abertas ocupavam o primeiro plano, enquanto o corpo parecia se projetar em nossa direção. Em ambas havia algo que me fascinava: Siqueiros fazia da perspectiva muito mais do que uma forma de representar o espaço. Ela também era uma maneira de conduzir nosso olhar e transformar a relação que estabelecemos com aquilo que observamos.

Siqueiros desenvolveu uma proposta que chamou de poliangularidade. Sua intenção era romper com a ideia de que uma pintura deveria ser contemplada de um único ponto de vista. Para ele, o espectador não permanecia imóvel; caminhava, mudava de posição e descobria a composição de diferentes ângulos.

Isso significava que a obra precisava considerar o espaço em que se encontrava e o percurso de quem a observava.

Sua pintura parece não se conformar em existir dentro dos limites que lhe foram atribuídos; ela os ultrapassa, utiliza o espaço e busca transformá-lo. O impacto visual faz algumas de suas peças parecerem vivas e acabarem inundando a sala onde se encontram.

E o fascinante é que o movimento não está necessariamente na pintura, mas em nossa relação com ela.

Sua obra não parece estática, e sim dinâmica.

E é precisamente aqui que encontro uma relação com o desenvolvimento.

## A segunda abstração

Depois de compreender o problema, ainda precisamos transformá-lo em uma experiência.

Essa segunda abstração é diferente. Já não estamos tentando pegar uma ideia simples e desenvolvê-la até encontrar seus domínios, regras e relações. Agora precisamos conceituar tudo isso e transformá-lo em algo visual, compreensível e, com sorte, memorável.

O usuário deve se sentir convidado a entrar, como diante de uma obra de Siqueiros. Deve compreender como percorrê-la e experimentar certa familiaridade, mesmo que nunca tenha estado ali.

Mas não apenas por sua aparência; isso seria simples demais. Deve se lembrar dela pela maneira como se move por ela.

É aqui que a poliangularidade me parece especialmente interessante. Siqueiros considerava os diferentes pontos a partir dos quais o espectador experimentava sua obra. No desenvolvimento, deveríamos nos perguntar algo parecido: de onde chega nosso usuário? O que ele precisa encontrar? O que acontece quando interage com aquilo que construímos?

Uma aplicação não é experimentada de uma única maneira. O usuário pode chegar buscando informações, tentando concluir uma tarefa ou procurando resolver um problema que não havíamos imaginado. Seu percurso modifica a experiência, mesmo que a aplicação continue sendo a mesma.

E aí surge a verdadeira dificuldade.

Depois da primeira abstração, temos dados, relações, estados e regras. No entanto, nada disso significa muito para o usuário até conseguirmos apresentar tudo de uma forma que ele possa compreender.

Os dados precisam adquirir sentido dentro da experiência, mudar quando necessário e ser apresentados no momento adequado. A interface deve responder às ações do usuário, mostrar o que aconteceu e permitir que ele continue seu percurso sem precisar compreender toda a complexidade que existe por trás.

Assim como na obra de Siqueiros, o material precisa fazer parte da experiência.

Nossa aspiração deveria ser algo muito simples de dizer e extremamente difícil de conseguir: que o usuário possa nos reconhecer.

Por isso considero essas duas abstrações igualmente importantes e encontro uma relação com duas grandes áreas do desenvolvimento: backend e frontend.

Embora suas responsabilidades não estejam completamente separadas, podemos pensá-las assim: uma constrói o mundo; a outra decide como vamos percorrê-lo.

## Siqueiros, React e os materiais

Neste ateliê aberto, convido você a ler sobre tecnologia por uma perspectiva diferente. Nem tudo precisa ser guia técnico, tutorial ou comparação de desempenho. Meu objetivo também é tentar explicar, tanto a desenvolvedores quanto a quem simplesmente tem curiosidade, como o desenvolvimento funciona e, sobretudo, por que fazemos as coisas de determinada maneira.

Então vou fazer uma comparação que pode parecer estranha: podemos utilizar a obra de Siqueiros para entender por que existe uma biblioteca como React.

Siqueiros utilizava os materiais e as superfícies disponíveis para construir uma obra dinâmica. No desenvolvimento web também temos materiais, e um deles são os dados.

A informação que muda dependendo do usuário, do tempo, de uma ação ou do estado da nossa aplicação pode ser dinâmica. Mas há uma distinção importante aqui: os dados não são uma animação, um efeito ou um elemento decorativo. São material.

Um site comercial cujas informações permanecem praticamente iguais pode funcionar perfeitamente como uma página estática. Seu conteúdo existe, é apresentado e raramente precisa mudar.

Mas vamos imaginar que essa mesma página precise mostrar informações diferentes dependendo do usuário, produtos que entram e saem de um catálogo, publicações atualizadas constantemente ou uma agenda em que os horários disponíveis mudam sempre que alguém marca uma consulta.

Então nosso material mudou, e precisamos decidir como apresentá-lo.

É aqui que convém distinguir dois conceitos que muitas vezes confundimos: o fato de a informação ser dinâmica não significa necessariamente que toda a interface deva ser interativa.

Podemos obter informações atualizadas de um servidor e apresentá-las como HTML sem precisar executar React no navegador. Por outro lado, quando precisamos que uma interface responda às ações do usuário, mantenha estados ou atualize determinados elementos sem reconstruir toda a página, bibliotecas como React podem ser especialmente úteis.

React permite construir interfaces a partir de componentes que recebem informações e representam o que o usuário deve ver. Quando seu estado muda, ele pode atualizar as partes correspondentes da interface.

Voltemos ao nosso consultório odontológico.

Poderíamos mostrar uma lista de horários disponíveis gerada no servidor. Mas, se quisermos que o usuário selecione um dentista, mude a data, consulte a disponibilidade e receba uma resposta visual imediata, precisamos pensar em como essa interação deve se comportar.

E isso não significa que React seja nossa única opção.

Essa diferença é fundamental no mundo do frontend, porque uma boa decisão de arquitetura não deveria começar perguntando qual é o framework mais moderno, mas o que precisamos apresentar, como essa informação se comporta e que tipo de interação esperamos do usuário.

Às vezes a resposta será React; em outras, não precisaremos dele.

Existem até ferramentas híbridas como Astro, uma das minhas favoritas, que permitem construir páginas principalmente estáticas e incorporar pequenas ilhas de interatividade onde elas realmente fazem falta. Essas ilhas podem utilizar React ou outras bibliotecas sem nos obrigar a transformar toda a página em uma aplicação interativa. Também podemos incorporar conteúdo dinâmico gerado no servidor quando necessário.

O interessante é que não precisamos escolher entre uma experiência completamente estática e outra completamente dinâmica.

Podemos utilizar ferramentas diferentes conforme a natureza de cada parte da nossa aplicação.

Não precisamos transformar tudo em dinâmico simplesmente porque podemos. Da mesma forma que Siqueiros não experimentava com materiais apenas por serem novidades, mas porque faziam parte da obra que queria construir.

Antes de escolher nossas ferramentas, precisamos compreender nosso material. Um framework não deveria decidir o que vamos construir; aquilo que queremos construir deveria determinar de quais ferramentas precisamos.

## A arte de escolher nossos materiais

Saí do museu pensando nos materiais, em como uma superfície pode deixar de ser apenas uma superfície quando alguém compreende o que pode fazer com ela. Em como Siqueiros fazia sua obra parecer se estender além dos próprios limites, transformando o espaço ao redor.

E acabei pensando no software, nos dados que armazenamos, nas interfaces que construímos e em todas aquelas decisões que tomamos antes que alguém possa ver sequer uma linha do nosso trabalho.

Construímos uma enorme quantidade de ferramentas que nos permitem fazer praticamente qualquer coisa. Podemos criar aplicações dinâmicas, interfaces reativas e experiências capazes de mudar diante dos nossos olhos.

Mas ter a capacidade de fazer algo não significa que devamos fazê-lo.

Talvez essa seja uma das coisas que mais podemos aprender com Siqueiros. Não se trata de utilizar todos os materiais disponíveis nem de fazer cada elemento chamar nossa atenção, mas de compreender o que queremos expressar e encontrar os meios para conseguir isso.

Talvez a distância entre um pintor e um desenvolvedor não seja tão grande quanto imaginamos. Ambos precisamos abstrair algo que ainda não existe, escolhemos materiais e tentamos construir algo que outra pessoa possa compreender.

E, depois daquela caminhada, não pude deixar de pensar novamente naquelas primeiras pinturas rupestres de que falávamos no início.

Milhares de anos nos separam de quem as criou. Nossos materiais mudaram, nossas ferramentas são infinitamente mais complexas e nossas possibilidades parecem não ter limites.

No entanto, continuamos enfrentando o mesmo problema.

Temos uma ideia.

E queremos que outra pessoa possa compreendê-la.
