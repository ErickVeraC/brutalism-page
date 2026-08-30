---
title: "The Artillery of Thought: AI, Precision, and Strategy in Critical Systems"
description: "AI is not a shortcut: it's a multiplier. If your process is weak, it will make it obvious. If it's solid, it will scale it. The difference between generating code and building systems."
pubDate: 2026-05-05
heroImage: "/src/assets/nicolas-hippert-71wxZqCDcNU-unsplash.webp"
tags: ["ai", "architecture", "critical-systems"]
lang: "en"
translationKey: "la-artilleria-del-pensamiento"
---

There was a moment in history when war stopped depending solely on human courage and began to depend on something far more unsettling: organization, precision, and speed.

Europe still smelled of gunpowder, mud, and cavalry when the world began to transform industrially. The old feudal structures were crumbling while new forms of production altered the scale of empires forever. In the midst of that change appeared Napoleon Bonaparte, a man who did not inherit power but understood, before others did, where the world was moving.

Many remember Napoleon for his conquests. I believe his true obsession was precision.

He understood that a battle was not won by numbers alone, but by concentration of force, speed of execution, and reading of the terrain. His artillery was not merely destructive; it was strategic. It did not fire more. It fired where it mattered. Every movement sought to break balance, disrupt communication, and generate disorder before the enemy even understood what was happening.

## The new industrial revolution

Technological modernity resembles that historical moment far too closely.

Today we are living through a new industrial revolution, though it is no longer driven by steam and steel, but by data, automation, and artificial intelligence. And as happened back then, many believe the new tool by itself guarantees superiority.

It does not.

AI does not eliminate technical mediocrity; it scales it.
It does not replace weak processes; it exposes them.
It does not replace thought; it multiplies its consequences.

## When speed without direction is a threat

That becomes brutally evident when you work on critical systems.

I work on SMPP messaging platforms, where every message has a lifecycle, a state, and a real consequence. Here, errors don't disappear behind an elegant interface. A duplicate message can turn into fraud. A delay can break entire chains of communication. A loss can mean money, audits, or operational incidents.

In this kind of system, speed without direction becomes a threat.

That is why I have never seen AI as a substitute for judgment, but as modern artillery: an expansion of capacity that only works when there is strategy behind it. Exactly as Napoleon understood that artillery had to operate in coordination with logistics, reconnaissance, timing, and positioning, AI needs a clear operational framework to become a tool of precision and not merely a machine for accelerated production.

## The terrain before the shot

My methodology begins long before the code.

It begins by understanding the terrain.

Napoleon studied routes, weather, elevations, and mobilization times before firing a single cannon. In the same way, before building any system, I begin by delimiting domain and scope. In SMPP systems this means understanding throughput, states, confirmation windows, retries, idempotency, and behavior under load. Not as abstract theory, but as the real limits of the system.

There, something fundamental is defined: what the system is and, above all, what it must not become.

Then come the user stories. But I have never seen them as mere functional requirements. They are operational boundaries. Carefully defined constraints that reduce ambiguity and delimit behavior. In critical systems, ambiguity does not generate creativity; it generates cascading failures.

Then the architecture appears.

Not as decorative documentation, but as strategic cartography. I use C4 models to visualize responsibilities, dependencies, flows, and boundaries before a single line of code exists. How Kafka decouples processes. How events circulate. Where each responsibility lives. Which components can fail without compromising the entire system.

Architecture is not discovered accidentally during development. It is designed before entering the battlefield.

## Only then does AI enter

Never before.

I work under a dual context: permanent global rules and specific technical context for each component. AI does not "imagine" the system freely; it operates within carefully defined limits. Like Napoleonic artillery, its true value lies not only in power, but in the precision with which it can concentrate on specific targets.

And here appears an important distinction that is rarely discussed.

Many teams use AI to think.
I use it to execute.

That is why TDD holds a central place in my process.

Before generating code, I define tests. Each test establishes an operational truth that the system must respect. Valid states, consistency, timing, retries, distributed behavior. AI no longer generates code freely; it generates code forced to survive real conditions.

That completely transforms its usefulness.

Without tests, AI accelerates uncertainty.
With tests, it accelerates precision.

Finally comes execution: small, vertical changes aligned to a single intention. No gigantic branches or ambiguous deliveries. And afterward, something many underestimate: observability.

Because no system truly exists until it can be observed living under pressure.

Logs, metrics, monitoring, tracing, and real-time behavior. On SMPP platforms this is not optional. You need to understand how the system breathes while it operates. You need to detect deviations before they escalate.

AI also participates here. It doesn't just help build; it helps watch.

## The limit of all strategy

And even so, even the best strategy has a limit.

Napoleon ultimately found his at Waterloo. Not for lack of intelligence, but because reality always contains variables impossible to model completely: weather, terrain, timing, coordination, human exhaustion. No map survives intact upon contact with the real world.

In software, exactly the same thing happens.

You can have observability, metrics, automation, tests, AI, and an impeccable architecture on paper. But eventually the modern equivalent of the mud of Waterloo will arrive: unexpected latencies, emergent behavior, saturation, distributed failures, conditions impossible to reproduce in the lab.

And that is where functional systems separate from resilient systems.

Artificial intelligence is probably the most powerful tool our industry has seen since the very birth of modern computing. But I still believe that understanding it as a replacement for thought is a historic mistake.

Because tools never replace strategy.
They expand it.

In the end, the difference between generating code and building systems remains the same as the one that existed between firing a cannon and directing an entire campaign.

The winner is not the one who produces the most noise.
The winner is the one who best understands where they cannot afford to fail.
