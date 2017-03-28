---
layout: post
title: How I Use Storyboards
date: 2016-08-23
---

In all my recent projects, I used storyboards like `nib` files. That is, one view controller per storyboard. That seems crazy at first but really helps when you want to reuse the view controller in other places.

Storyboards trump simple `nib` files as you can do more with them. They allow you to use the view controller’s top and bottom layout guide for your auto layout constraints. Use can use `UITableViewCell` prototypes and static `UITableView`content. I don’t remember where I’ve heard of this technique but so far it held up pretty well. Declaring all layout in code is often cumbersome and error prone, even when you can`UIStackView`.

By convention, I always name the Storyboard/Nib file the same as the class it represents. A few month ago I saw [a gist by Ben Sandofsky](https://gist.github.com/sandofsky/0a8b5977afb16af1c6083fe97f0ac867) that provided a nice protocol to formalise this convention. Normally I just copied the file to the current project. With the imminent release of Swift 3 and the big renaming I thought it would be better to bundle the files into a proper framework. That way it can be versioned and used from a variety from Swift versions.

You can view the source on [GitHub](https://github.com/florianbuerger/interfacebacked). It works with [Carthage](https://github.com/carthage/carthage) out of the box. The Swift package manager isn’t stable enough yet. Currently it is iOS only but I plan to make in an universal framework in the next days. If you are on Swift 3 already, use the `swift3` branch in the `Cartfile`.

Any feedback is greatly appreciated, either [open an issue](https://github.com/florianbuerger/interfacebacked/issues), via [Twitter](https://twitter.com/florianbuerger) or [email](mailto:hi@florianbuerger.com?subject=InterfaceBacked).

Have a nice day!

-Flo
