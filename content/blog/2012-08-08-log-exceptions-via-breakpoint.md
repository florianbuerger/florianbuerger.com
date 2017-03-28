---
layout: post
title: Log Exceptions via breakpoint
date: '2012-08-08T15:19:17+02:00'
tags: []
---

Exception breakpoints are really, really handy. If you don’t use them yet, shame on you!

What really bugs me about this is that you have to click continue 3 times to view your exception printed to console.

Breakpoint actions to the rescue!

Right-Click on your breakpoint, choose edit and add an action:

`po $rax`

This is for 64 Bit Intel development, aka Mac development. For 32 Bit use $eax instead. For more information check Apple’s notes on Debugging (Mac OS X Debugging Magic or iOS Debugging Magic)

Now every time the breakpoint is hit, you see it in the console \o/
