---
title: "A Ilusão do Universal: Arquitetura, Acessibilidade e a Linguagem Comum"
description: "Se você não entende a quem seu sistema serve, não pode torná-lo acessível. Transformar a acessibilidade em cultura."
pubDate: 2026-04-09
heroImage: "/src/assets/personas-caminando-fuera.jpg"
tags: ["acessibilidade", "ddd", "arquitetura"]
lang: "pt"
translationKey: "la-ilusion-de-lo-universal"
---

## O universal: a tarefa colossal

Devemos aspirar ao universal. No entanto, entender o "universal" é, talvez, a tarefa mais colossal que existe.

Caminhando pelo centro da cidade, naquele exercício constante de observar o caos com intenção, deparei-me com algo simples: uma pessoa tentava atravessar a rua, mas seu andador não conseguia avançar. A rampa estava bloqueada pelas cadeiras de uma barraca.

Foram dois minutos de ajuda. Mas foram apenas dois minutos para mim.

Depois disso, a pergunta mudou de forma:
quantas vezes ela enfrenta isso em um único dia?

Ali entendi algo incômodo:

_O problema não é a ausência._
_É a falsa presença._

A rampa estava ali. O acesso também. Mas alguém decidiu que aquele espaço podia ser ocupado. No software fazemos o mesmo.

## Antes de falar de técnica

Isto não é sobre frameworks. Nem sobre seguir uma metodologia específica.

Há muitas formas de construir software. Mas há algo que não é opcional:

> Se você não entende a quem seu sistema serve, não pode torná-lo acessível.

Aqui é onde tomo uma ideia do Domain-Driven Design (DDD). Não como regra. Não como dogma. Mas por sua essência.

## DDD como filosofia de inclusão

O DDD fala do _Ubiquitous Language_: uma linguagem compartilhada entre negócio e tecnologia.

Mas em acessibilidade, isto é algo mais cru:
**Seu código deve falar um idioma que todos possam interpretar.**

Esse "todos" não é abstrato:

- é o navegador
- é um leitor de tela
- é alguém navegando apenas com o teclado
- é alguém que não interage como você

Se você quebra essa linguagem, quebra a experiência.

O HTML semântico não é uma recomendação elegante. É o idioma base.

E aqui está o ponto que normalmente ignoramos:

**Se você não é dono da lógica do que constrói, não pode torná-lo acessível.**

## A arrogância de ignorar o simples

Gostamos da complexidade. Ela nos faz sentir que estamos construindo algo importante. Mas muitas vezes estamos apenas reescrevendo o que já existia... pior.

Um `<select>` já resolve:

- navegação por teclado
- gerenciamento de foco
- compatibilidade com leitores de tela

Um `<details>` já é interativo sem uma linha de JavaScript.

Quando você decide substituir isso por divs, não está inovando. Está assumindo que pode fazer melhor que o padrão. E quase nunca é verdade.

**Guia simples:**

- Se existe um elemento nativo → use-o
- Se ele não cumpre → estenda-o
- Se você o substitui → aceite que agora é responsável por tudo o que quebrou

## ARIA: quando o silêncio também comunica

ARIA não serve para "consertar" HTML mal feito. Serve para dar contexto quando o HTML não alcança.

Um ícone decorativo não deveria falar:

```html
<span aria-hidden="true">★</span>
```

Um botão sem texto visível precisa de uma voz:

```html
<button aria-label="Cerrar modal">×</button>
```

Mas aqui há uma verdade incômoda: Se você precisa de muito ARIA, provavelmente o problema está antes.

ARIA não é solução. É ajuste fino.

## Alt text: descrever não é suficiente

Um alt ruim descreve pixels. Um alt bom transmite intenção.

Não é o mesmo dizer:
_"Imagem de uma pessoa"_

que dizer:
_"Pessoa bloqueada ao tentar usar uma rampa ocupada"_

Você não descreve a imagem. Descreve o que importa dela.

## Transformar acessibilidade em algo real

Isto não deveria ficar na teoria.

Com minha equipe, algo que funciona é levar isto ao tangível:

1. Uma pessoa descreve a imagem.
2. Os demais fazem um esboço baseado apenas nessa descrição.

Se o resultado não coincide, o alt falha.

É um investimento de tempo. Mas transforma a acessibilidade em algo real, não em um checklist.

## Navegação por teclado: o mapa invisível

O teclado é um mouse que você não vê. Se você o quebra, o usuário se perde.

Erros comuns:

- eliminar o outline
- desordenar o fluxo de tabulação
- perder o foco em componentes dinâmicos

Tirar o foco visual sem substituí-lo não é estética. É deixar o usuário sem referência.

É como apagar as luzes em um edifício e esperar que todos encontrem a saída.

## Tabelas: quando a estrutura importa

As tabelas não são um vestígio do passado. Bem usadas, comunicam relações.

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

Um leitor de tela entende isto como informação conectada. Um conjunto de divs estilizados não.

## O compromisso que vai além

Aqui é onde isto deixa de ser apenas uma decisão técnica. Há empresas que já entenderam que acessibilidade não é uma melhoria... é uma responsabilidade.

Quando uma organização decide cumprir padrões, certificar-se ou auditar suas plataformas, não está apenas otimizando o produto: está declarando algo.

Está dizendo que seu software não é exclusivo. Que seu alcance não depende das capacidades do usuário.

Isso é compromisso real. E é aí que a acessibilidade deixa de ser uma boa prática... e se transforma em cultura.

## O benefício que não se diz

Fazer software acessível não é apenas o correto. É estratégico.

- melhora o SEO
- melhora o desempenho
- reduz bugs
- facilita a manutenção
- prepara seu produto para certificações

Não é um extra. É parte de construir bem.

## O encerramento

A universalidade não é um estado. É uma direção.

Cada decisão que você toma define quem pode avançar... e quem fica esperando.

Aquela rampa não estava quebrada. Estava ocupada.

E isso é o mais perigoso: quando acreditamos que já resolvemos algo... e deixamos de vê-lo. O software está cheio de rampas assim.

Se não construímos para todos, não estamos construindo progresso. Estamos apenas otimizando privilégios.
