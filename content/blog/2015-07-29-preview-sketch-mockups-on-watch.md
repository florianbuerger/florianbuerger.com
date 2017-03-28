---
layout: post
title: Preview Sketch Mockups on Apple Watch
date: '2015-07-29T11:44:41+02:00'
---

When designing applications for iOS using Sketch, their companion app Sketch Mirror is a must to preview your designs on real hardware. Today I realised they don’t support the ᴡᴀᴛᴄʜ—yet, hopefully.

After some googling I found [sketch-preview](https://github.com/marcisme/sketch-preview), a plugin for quickly sending slices/artboards to Skala Preview. Sadly, they don’t support the ᴡᴀᴛᴄʜ either.

But the plugin pushed me in the right direction. I modified the source file to open the generated image in xScope. This works pretty well with their iOS and WatchKit app. Whenever you want to view your design on the watch, hit ⌘P in Sketch and double click the digital crown on your watch to switch to the latest app. Your mockup should be visible after a few seconds.

*Tip: Go to xScope settings → “Mirror” and enable “Allow iOS devices to connect without a prompt”.*

You can grab the modified plugin at GitHub.

Of course all the credit goes to Marc Schwietermann, the author of the [sketch-preview plugin](https://github.com/marcisme/sketch-preview). Thanks, Marc!
