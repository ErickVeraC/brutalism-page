---
title: "Siqueiros Didn’t Need React"
description: "Siqueiros’s work offers a way to explore software’s two abstractions and choose tools according to our data and the experience we want to create."
pubDate: 2026-11-03
heroImage: "/src/assets/siqueiros-no-necesitaba-react.webp"
heroFilter: false
tags: ["architecture", "art", "development"]
lang: "en"
translationKey: "siqueiros-no-necesitaba-react"
---

In everyday life, we find forms of expression in perfect harmony with their surroundings. We see them in advertising posters, hand-painted signs, storefront announcements, and even graffiti. Sometimes all it takes is a little attention to discover how these expressions fit together and end up shaping the image of our cities.

There is a fairly simple principle in visual communication: conveying a message through sight. That may seem obvious, but it means much more than we might imagine, especially because it is not limited by the materials we use.

I think this matters. If you want to share an idea or express your creativity, you do not necessarily need canvas and oil paint, pencil and paper, or a screen. Think, for example, of some of the earliest images humans used to communicate: cave paintings.

Do not let their apparent simplicity fool you. In the end, they fulfill one of the fundamental principles of communication: distilling an idea and finding a way to express it with the materials at hand. And what a way to do it. Thousands of years later, we can still look at them and understand, at least in part, what someone was trying to convey.

Software development works, or at least aspires to work, in much the same way.

We have an idea meant to make something easier, solve a problem, or create a new way of doing things. Yet between imagining it and building it lies a process that, in my experience, requires two major abstractions. This does not mean we can develop software in two easy steps. It means there are two different problems we need to learn to solve.

The first abstraction involves translating our idea into something we can turn into software.

Imagine we need an application for a dental practice. We could simply say:

“I need an application to display the dentist's services and schedule appointments.”

But that is not yet an abstraction of the problem.

We need to know who schedules appointments, how availability is checked, what happens when there are several dentists, who can treat a particular patient, how treatments are tracked, what happens when two people try to book the same time slot, and what information each person involved needs.

I want you to notice why I made a much longer list than simply “display services and create or edit appointments.”

An idea needs to be abstracted until we find its essence if we want to turn it into something viable and valuable.

There are different techniques for doing this. One is Domain-Driven Design, which I will take more time to discuss on another occasion.

For now, we can think of this part of development as starting a company and deciding how many departments it needs, what each will be responsible for, and how they should communicate with one another.

Or, to bring it into architecture, we might ask what kind of building we need to construct. Perhaps an auditorium, a stadium, a workshop, or simply a small office building. Before discussing materials, we need to understand what we want to build.

This first abstraction calls for a primarily analytical way of thinking. It deals with responsibilities, domains, rules, data, and workflows.

I know this is unusual for an article about web development, but this is an open studio, and I like to invite reflection here. Software should not be taken lightly; a couple of clever prompts cannot magically turn it into the next Uber, Airbnb, or Facebook.

And this is where I want to talk about the second abstraction.

## A walk through the Museo de Arte Moderno

The idea for this text came during a very special Sunday walk through what has become one of my favorite museums: the Museo de Arte Moderno in Mexico City.

Remember that we began by talking about visual communication, hand-painted signs, posters, and graffiti. We could talk about countless forms of expression that share messages in plain sight, waiting for someone to pay attention. Among them, one has always held a special place for me: painting.

To be clear, I do not think it is the ultimate form of visual expression. It is simply one of my favorites.

During that visit, among the works in the Mexican art collection, I once again encountered the work of an artist who, to me, is a genius: David Alfaro Siqueiros.

If you are unfamiliar with his work, I encourage you to discover it, but not just online. There is something in his painting that you need to experience in person.

We could talk about his brushwork, his colors, or the political and transgressive message running through much of his work. Still, stopping at those elements would fall short.

Siqueiros experimented with surfaces, materials, and textures. He incorporated industrial paints, tools such as the airbrush, and techniques that broke with traditional ways of painting. He was not content to use what other painters had used for centuries; he sought new means of achieving what he imagined.

But there is something even more interesting in his work: the way he understood the viewer.

Standing before one of the paintings I found in the museum, *El diablo en la iglesia*, painted in 1947, I was particularly struck by a composition that seemed to stretch into the depths of an enormous church. High above, a devil dominates the scene, while below him human figures are arranged among arches and vaults, leading to a crowd that fills almost the entire foreground. The work does more than use architecture to create depth; it also makes it part of its political message, a critique of hierarchies and religious power.

In another work, enormous open hands filled the foreground, while the body seemed to project toward us. In both, there was something I found fascinating: Siqueiros made perspective much more than a way to represent space. It was also a way to guide our gaze and transform the relationship we establish with what we are looking at.

Siqueiros developed an approach he called polyangularity. His intention was to break with the idea that a painting should be viewed from a single vantage point. For him, the viewer did not remain still; they walked, changed position, and discovered the composition from different angles.

This meant the work had to take into account the space it occupied and the path of the person viewing it.

His painting seems unwilling to remain within its assigned boundaries; it reaches beyond them, uses the space, and seeks to transform it. Its visual impact makes some of his pieces seem alive, filling the room around them.

And what is fascinating is that the movement is not necessarily in the painting, but in our relationship with it.

His work feels dynamic rather than static.

And this is precisely where I see a connection with development.

## The second abstraction

Once we understand the problem, we still need to turn it into an experience.

This second abstraction is different. We are no longer trying to take a simple idea and develop it until we find its domains, rules, and relationships. Now we need to conceptualize all of that and turn it into something visual, understandable, and, with luck, memorable.

The user should feel invited in, as if standing before a work by Siqueiros. They should understand how to move through it and feel a certain familiarity, even if they have never been there before.

But not just because of how it looks; that would be too easy. They should remember it for the way they move through it.

This is where I find polyangularity especially interesting. Siqueiros considered the different points from which the viewer experienced his work. In development, we should ask ourselves something similar: where is our user coming from? What do they need to find? What happens when they interact with what we build?

An application is not experienced in just one way. A user may arrive looking for information, trying to complete a task, or attempting to solve a problem we had not imagined. Their path changes the experience, even though the application remains the same.

And that is where the real difficulty appears.

After the first abstraction, we have data, relationships, states, and rules. Yet none of that means much to the user until we manage to present it in a way they can understand.

Data needs to make sense within the experience, change when necessary, and appear at the right moment. The interface must respond to the user's actions, show them what has happened, and let them continue their journey without having to understand all the complexity behind it.

As in Siqueiros's work, the material has to be part of the experience.

Our ambition should be something very simple to say and extremely difficult to achieve: for the user to recognize us.

That is why I consider these two abstractions equally important, and why I see a connection with two major areas of development: backend and frontend.

Although their responsibilities are not entirely separate, we can think of them this way: one builds the world; the other decides how we will move through it.

## Siqueiros, React, and materials

In this open studio, I invite you to read about technology from a different perspective. Not everything has to be technical guides, tutorials, or performance comparisons. My aim is also to try to explain, both to developers and to those who are simply curious, how development works and, above all, why we do things in certain ways.

So I am going to make a comparison that may seem strange: we can use Siqueiros's work to understand why a library like React exists.

Siqueiros used the materials and surfaces available to him to build a dynamic work. In web development, we also have materials, and one of them is data.

Information that changes depending on the user, time, an action, or the state of our application can be dynamic. But there is an important distinction here: data is not an animation, an effect, or a decorative element. It is material.

A commercial website whose information stays much the same can work perfectly well as a static page. Its content exists, is presented, and rarely needs to change.

But imagine that same page needs to display different information depending on the user, products that come and go in a catalog, posts that are constantly updated, or a calendar where available time slots change every time someone books an appointment.

Our material has changed, and we need to decide how to present it.

This is where we should distinguish between two concepts we often confuse: dynamic information does not necessarily mean the entire interface needs to be interactive.

We can fetch updated information from a server and display it as HTML without running React in the browser. On the other hand, when we need an interface to respond to user actions, maintain state, or update certain elements without rebuilding the entire page, libraries like React can be especially useful.

React lets us build interfaces from components that receive information and represent what the user should see. When their state changes, it can update the corresponding parts of the interface.

Let us return to our dental practice.

We could display a list of available time slots generated on the server. But if we want the user to select a dentist, change the date, check availability, and receive an immediate visual response, we need to think about how that interaction should behave.

And that does not mean React is our only option.

This distinction is fundamental in frontend development, because a good architectural decision should not begin by asking which framework is the newest, but what we need to present, how that information behaves, and what kind of interaction we expect from the user.

Sometimes the answer will be React; other times we will not need it.

There are even hybrid tools like Astro, one of my favorites, that let us build mostly static pages and incorporate small islands of interactivity where they are actually needed. These islands can use React or other libraries without forcing us to turn the entire page into an interactive application. We can also incorporate dynamic content generated on the server when we need it.

The interesting thing is that we do not have to choose between a completely static experience and a completely dynamic one.

We can use different tools according to the nature of each part of our application.

We do not need to make everything dynamic simply because we can. Just as Siqueiros did not experiment with materials merely because they were new, but because they were part of the work he wanted to create.

Before choosing our tools, we need to understand our material. A framework should not decide what we are going to build; what we want to build should determine which tools we need.

## The art of choosing our materials

I left the museum thinking about materials, about how a surface can stop being merely a surface when someone understands what they can do with it. About how Siqueiros made his work seem to extend beyond its own boundaries, transforming the space around it.

And I found myself thinking about software, the data we store, the interfaces we build, and all those decisions we make before anyone can see even a single line of our work.

We have built an enormous number of tools that let us do practically anything. We can create dynamic applications, reactive interfaces, and experiences capable of changing before our eyes.

But being able to do something does not mean we should.

Perhaps that is one of the things we can learn most from Siqueiros. It is not about using every available material or making every element demand our attention, but about understanding what we want to express and finding the means to achieve it.

Perhaps the distance between a painter and a developer is not as great as we imagine. Both of us need to abstract something that does not yet exist, choose materials, and try to build something another person can understand.

And after that walk, I could not help thinking again about those first cave paintings we discussed at the beginning.

Thousands of years separate us from the people who created them. Our materials have changed, our tools are infinitely more complex, and our possibilities seem limitless.

Yet we still face the same problem.

We have an idea.

And we want someone else to understand it.
