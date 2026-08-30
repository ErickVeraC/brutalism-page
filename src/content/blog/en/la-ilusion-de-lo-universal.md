---
title: "The Illusion of the Universal: Architecture, Accessibility, and the Common Language"
description: "If you don't understand who your system serves, you can't make it accessible. Turning accessibility into culture."
pubDate: 2026-04-09
heroImage: "/src/assets/personas-caminando-fuera.jpg"
tags: ["accessibility", "ddd", "architecture"]
lang: "en"
translationKey: "la-ilusion-de-lo-universal"
---

## The universal: the colossal task

We must aspire to the universal. And yet, understanding the "universal" is, perhaps, the most colossal task there is.

Walking through the city center, in that constant exercise of observing chaos with intention, I came across something simple: a person was trying to cross the street, but their walker couldn't move forward. The ramp was blocked by the chairs of a street stall.

It was two minutes of help. But it was only two minutes for me.

After that, the question took on a different shape:
how many times does this person face this in a single day?

That's when I understood something uncomfortable:

_The problem isn't the absence._
_It's the false presence._

The ramp was there. So was the access. But someone decided that space could be occupied. In software we do the same thing.

## Before we talk about technique

This isn't about frameworks. Nor about following a specific methodology.

There are many ways to build software. But there is one thing that is not optional:

> If you don't understand who your system serves, you can't make it accessible.

This is where I take an idea from Domain-Driven Design (DDD). Not as a rule. Not as dogma. But for its essence.

## DDD as a philosophy of inclusion

DDD talks about the _Ubiquitous Language_: a shared language between business and technology.

But in accessibility, this is something more raw:
**Your code must speak a language that everyone can interpret.**

That "everyone" isn't abstract:

- it's the browser
- it's a screen reader
- it's someone navigating with only a keyboard
- it's someone who doesn't interact the way you do

If you break that language, you break the experience.

Semantic HTML isn't an elegant recommendation. It's the base language.

And here is the point we normally ignore:

**If you don't own the logic of what you build, you can't make it accessible.**

## The arrogance of ignoring the simple

We like complexity. It makes us feel like we're building something important. But often we're just rewriting what already existed... worse.

A `<select>` already solves:

- keyboard navigation
- focus management
- screen reader compatibility

A `<details>` is already interactive without a single line of JavaScript.

When you decide to replace this with divs, you're not innovating. You're assuming you can do it better than the standard. And it's almost never true.

**Simple guide:**

- If a native element exists → use it
- If it doesn't do the job → extend it
- If you replace it → accept that you are now responsible for everything you broke

## ARIA: when silence also communicates

ARIA isn't for "fixing" poorly made HTML. It's for providing context when HTML isn't enough.

A decorative icon shouldn't speak:

```html
<span aria-hidden="true">★</span>
```

A button without visible text needs a voice:

```html
<button aria-label="Cerrar modal">×</button>
```

But here's an uncomfortable truth: If you need a lot of ARIA, the problem is probably earlier.

ARIA isn't a solution. It's fine-tuning.

## Alt text: describing isn't enough

A bad alt describes pixels. A good alt conveys intention.

It's not the same to say:
_"Image of a person"_

as to say:
_"Person blocked while trying to use an occupied ramp"_

You don't describe the image. You describe what matters about it.

## Turning accessibility into something real

This shouldn't stay in theory.

With my team, something that works is bringing this down to the tangible:

1. One person describes the image.
2. The others make a sketch based only on that description.

If the result doesn't match, the alt fails.

It's an investment of time. But it transforms accessibility into something real, not a checklist.

## Keyboard navigation: the invisible map

The keyboard is a mouse you can't see. If you break it, the user gets lost.

Common mistakes:

- removing the outline
- disrupting the tab order
- losing focus in dynamic components

Removing the visual focus without replacing it isn't aesthetics. It's leaving the user without a reference.

It's like turning off the lights in a building and expecting everyone to find the exit.

## Tables: when structure does matter

Tables aren't a relic of the past. Used well, they communicate relationships.

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

A screen reader understands this as connected information. A set of styled divs does not.

## The commitment that goes further

This is where it stops being just a technical decision. There are companies that have already understood that accessibility isn't an improvement... it's a responsibility.

When an organization decides to meet standards, get certified, or audit its platforms, it's not just optimizing a product: it's declaring something.

It's saying that its software isn't exclusive. That its reach doesn't depend on the user's capabilities.

That's real commitment. And that's where accessibility stops being a good practice... and becomes culture.

## The benefit that goes unsaid

Building accessible software isn't just the right thing. It's strategic.

- it improves SEO
- it improves performance
- it reduces bugs
- it eases maintenance
- it prepares your product for certifications

It's not an extra. It's part of building well.

## The closing

Universality isn't a state. It's a direction.

Every decision you make defines who can move forward... and who is left waiting.

That ramp wasn't broken. It was occupied.

And that's the most dangerous part: when we believe we've already solved something... and stop seeing it. Software is full of ramps like that.

If we don't build for everyone, we're not building progress. We're just optimizing privileges.
