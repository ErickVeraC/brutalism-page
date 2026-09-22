---
title: "How Software Works"
description: "David Byrne, music, and software architecture: why understanding the context matters more than choosing the most sophisticated instruments."
pubDate: 2026-09-21
heroImage: "/src/assets/escenario.webp"
heroFilter: true
lang: "en"
translationKey: "asi-funciona-el-software"
tags: ["architecture", "art", "development"]
---

Wandering through downtown, I came across a new book.

One of those books you buy out of curiosity and, a few pages in, you know will inevitably turn into a post.

It's called *How Music Works*, by David Byrne.

And remember, this is an open studio: I can talk about whatever I want. Though, inevitably, I end up wandering until I find an analogy that brings me back to software development.

Perhaps because, as I've said before, development grows out of being human.

Software does not exist apart from us. It inherits our ways of organizing ourselves, our problems, our abstractions, and even our contradictions. We design systems inspired, consciously or unconsciously, by centuries of human creation.

So today I want to talk about music.

Or perhaps software architecture.

Probably both.

## A little context

David Byrne was born in Dumbarton, Scotland, on May 14, 1952. From a young age, he tried to find a place in music. Curiously, he did not always seem destined to become an important figure in it.

Years later, he would become one of the founders of Talking Heads, one of the defining bands to emerge from New York's new wave and post-punk scene.

But even Talking Heads would eventually prove too small for his curiosity.

The man behind *Psycho Killer* kept pushing the boundaries of what he understood music to be: he experimented with rhythms, collaborations, performance, sounds from different cultures, and a solo career that is difficult to fit into any single category.

And perhaps that is what makes *How Music Works* so interesting.

It isn't exactly an academic treatise on music theory.

It's something much more personal.

It's the perspective of someone who spent decades making music and is trying to understand why certain things work.

And, above all, **why they work where they work**.

## The room helps compose the song

There's an idea in the book that stayed with me.

Byrne talks about the different spaces where music exists: small stages, clubs, concert halls, cars, stadiums, recordings, films.

And he proposes something seemingly simple:

**Not all music works the same way in every place.**

A song designed to be heard in front of thousands of people, with an entire stadium singing along, doesn't necessarily work the same way when you're alone in a car.

A composition full of detail can be extraordinary through headphones and lose much of its appeal in a huge venue.

Music for a small stage needs different things from music for a concert hall.

And a piece that perfectly accompanies a film scene might not even make sense apart from the images it was created for.

Space is not simply the container we put music into.

**Space is part of the music.**

Context changes what works.

And as I read this, I thought:

Of course.

That's how software works, too.

## How software works

In development, we have a strange fascination with searching for universal answers.

What's the best language?

What's the best framework?

Microservices or a monolith?

SQL or NoSQL?

REST or GraphQL?

Kubernetes?

Serverless?

Events?

Queues?

We want to find the perfect architecture.

But perhaps we're asking the wrong question.

It would be like asking David Byrne:

**What's the best music?**

For where?

For whom?

In what space?

With how many people?

With what instruments?

With what budget?

To be heard in silence, or to get ten thousand people dancing?

Exactly the same thing happens in software.

An architecture can be extraordinary in one context and absurd in another.

You can build an impeccable distributed system, full of microservices, events, queues, observability, Kubernetes, and fault tolerance...

for an internal application used by twenty people.

Technically impressive.

Architecturally ridiculous.

It would be like setting up a stadium sound system to play for twelve people in a café.

It doesn't mean the sound system is bad.

It means **it doesn't belong there**.

And the opposite happens, too.

A simple monolith can be perfect for starting a product, allowing a small team to move quickly and keeping operating costs low.

But if that same system ends up processing enormous volumes of operations, integrating multiple channels, teams, and independent domains, perhaps what was once its greatest strength will become a limitation.

Not because monoliths are bad.

Not because microservices are better.

Because the stage has changed.

## Architecture listens, too

I think that is precisely where one of the differences between simply programming and designing systems lies.

An architect shouldn't start by asking which technology they want to use.

They should start by listening to the room.

How many people will use this?

How much traffic do we actually expect?

How many developers will maintain it?

What does the team know?

How much money do we have?

How much does it cost to operate?

How quickly do we need to change it?

What happens if it fails?

Which parts need to scale?

And which ones probably never will?

Only then does it make sense to talk about tools.

Because PostgreSQL, Redis, RabbitMQ, Kafka, Kubernetes, Go, TypeScript, React, or whatever technology happens to be fashionable at the time aren't answers.

They're instruments.

And a good musician doesn't demonstrate their talent by playing every available instrument at once.

They know which one the song needs.

## Sometimes a guitar is enough

The software industry has a particular problem with this.

We love to confuse complexity with sophistication.

An architecture with twenty components looks more serious than one with three.

A diagram full of boxes and arrows looks more professional than a simple one.

Saying “event-driven distributed architecture” sounds considerably better than saying:

“We have an application and a database.”

But perhaps an application and a database are exactly what you need.

And if they solve the problem correctly, handle the necessary load, can be maintained, and allow the product to evolve, then they aren't an inferior architecture.

They're the right architecture for that room.

Of course, there are exceptions.

There is also music capable of surviving in practically any setting.

Songs you can hear through headphones, in a car, performed by an orchestra, or shouted by thousands of people, and that somehow keep working.

But they're exceptional precisely because achieving that is extraordinarily difficult.

In software, too, there are ideas that are surprisingly resilient across contexts: simple principles that outlast languages, frameworks, and decades.

But even they need adaptation.

Because no system exists in a vacuum.

## Before designing, listen

Perhaps that's why I liked Byrne's idea so much.

Because it forces us to change the question.

When we design software, we tend to ask:

**What's the best architecture?**

Perhaps we should ask:

**What architecture can sound good here?**

And that changes the conversation completely.

Because then architecture stops being a collection of technologies and starts becoming a discipline of context, constraints, and decisions.

You don't need the biggest stage.

You don't need every instrument.

You don't need to use the technology appearing at every conference this week.

You need to understand where you're playing.

For how many people.

With which musicians.

With what resources.

And what song you're trying to play.

Because you can have the best musicians, the most expensive instruments, and the most sophisticated sound system in the world.

But if you never understood the room,

**you probably didn't understand the music either.**

And perhaps that's how software works, too.
