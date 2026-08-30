---
title: "The Patrons of Code: The Art of Understanding Before Creating"
description: "Domain-Driven Design and Event Storming are not agile methodologies; they are the tools for achieving the sacred understanding of the domain."
pubDate: 2026-04-06
heroImage: "/src/assets/estatua-hormigon-gris.webp"
tags: ["architecture", "ddd", "event-storming", "design"]
lang: "en"
translationKey: "mecenas-del-codigo"
---

The Thesis
We developers are digital artists. Like the masters of the Renaissance, we need patrons; not merely to survive, but to be challenged to create beyond our comfort zone. Yet before we imprint our own seal, we must deeply understand the vision of the one who commissions the work. Domain-Driven Design and Event Storming are not agile methodologies; they are the tools for achieving that sacred understanding.

## I. The artist and his patron
Michelangelo was a sculptor. He did not want to paint the Sistine Chapel. Julius II pushed him into unknown territory, into working with ideas that were not his own. And there, precisely there, something unrepeatable was born.

Velázquez painted Las Meninas, an everyday scene of a court he did not live in as a nobleman. It was not his world. But he observed it, decoded it, and captured it better than anyone. The scene breathes because Velázquez did not paint what he knew: he painted what he learned to see.

We do create projects of our own, yes. But we need our patrons to test our expertise against problems that would otherwise lie beyond our reach. These commissions do not limit our creativity; they channel it to create unique works, marked by our personality yet faithful to the essence of what was asked.

## II. The materials are not the work
Oil, marble, fresco. Go, TypeScript, PostgreSQL.
They are media. They are not the work.

The work is the faithful capture of the domain with your creative seal. A billing system is not a set of tables and endpoints; it is the living representation of how money flows through a business. If all you see is tables, you painted an inventory. If you capture the flow, you painted Las Meninas.

## III. The domain as a foreign world
How do you understand a domain that is not your own?
Not by reading withered documents. Not in meetings where one person speaks and everyone else nods out of inertia. You understand it by narrating the story together: the patron and the artist facing the same wall, reconstructing the events that give life to the business.

The domain is the patron's world. Its rules, its rituals, its decisions. When Velázquez enters the court, the "domain" is the Spanish monarchy. He did not invent those hierarchies; he observed them and gave them form.

## IV. The domain reveals itself through what happens: Event Storming
A domain is not described by listing its attributes. It reveals itself through what happens within it: its events.

"A customer registered." "A payment was rejected." "A campaign was launched."

It is like reading a novel. You do not come to know a character through their physical description, but through what they do and what happens to them. That is where their identity lies. Event Storming is exactly that: narrating the domain through its events on a wall, with everyone involved. The patron and the artist, together, reconstructing the scene before the brush touches the canvas. It is the most human way to nurture a team.

## V. The anemic model: Data without soul
When a team does not understand the domain, it produces an Anemic Model: data without behavior. Empty structures. Shells. It is as if Velázquez had painted Las Meninas as a warehouse inventory:

"An infanta. A dog. A mirror. Two maids."

The data is there, but the life is not. There is no tension, no gaze, no dynamic of power. It is a list, not a scene. An anemic model knows what exists, but it does not know what happens. The data lives on one side, the logic on another. Separated. Dead.

## VI. The rich model: The domain that breathes
A Rich Model is the opposite. The data and its behavior are one and the same. The infanta does not merely "exist"; she interacts, she gazes, she takes part. An order does not merely hold products; it knows how to calculate itself, validate itself, and protect itself.

When the model is rich, the code tells the same story as the business. There is no translation. There are no intermediaries. The artist and the patron see the same work.

## VII. Closing: The horror of the separated
Martin Fowler said it with brutal clarity:

> "The fundamental horror of this anti-pattern is that it’s so contrary to the basic idea of object-oriented design; which is to combine data and process together."

The horror is not technical, it is conceptual. It is painting a portrait where the face is on one canvas and the expression on another. The Renaissance taught us that great works are born when the artist understands the vision before touching the material.

We, the digital architects, bear the same responsibility. Frameworks come and go, but the domain —the story your patron needs to tell— is what makes your work transcend.
