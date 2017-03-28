---
layout: post
title: Adding reminders via URL schemes on iOS
date: '2014-02-19T00:00:00+01:00'
tags: []
tumblr_url: http://log.florianbuerger.com/post/120842936138/adding-reminders-via-url-schemes-on-ios
---
If you are familiar with the productivity nerd community on iOS and Mac apps you should have heard of Launch Center Pro developed by Contrast. If not, here is the short breakdown:

Launch Center Pro

The application displays a grid of icons which can be actions or groups that contain more action. When you invoke an action, you actually open an URL with a specific scheme to open another app installed on your iPhone or iPad. This doesn’t sound much but it one of the must important and most used app on my iPhone. You don’t have to remember in which folder you put the 1Password application to search for a specific login item. You can simply toggle an action in Launch Center Pro and you are taken to 1Password and the cursor is already inside the search field. Who doesn’t like that! That is only one simple example of what you can do. If you are interested in more details be sure to check out Federico Viticci’s take on LCP on macstories.net.

There was only one thing that really bothered me: You cannot use Launch Center Pro to quickly add a new reminder to the native Reminders.app. If I recall correclty there was a way in version 1 via an unofficial URL scheme but Apple asked to remove it. I like using Reminders.app for all sort of todo lists since it sync automatically even when I don’t open it in a week. It also reminds my of stuff that I entered on my Mac even when I didn’t open the app on the iPhone once. That is the benefit of using the default built-in software.

Reminders.app

Adding new reminders using the app on iPhone is a bit of a pain. You have to find/select your default list in the stack of wobbling cards that no one needed but Apple built to show there new UIDynamics stuff—that is a topic for another post—scroll down, hit an empty row and start typing. But often you’ve copied something, an URL from Safari or Twitter or a chunk of text for more context from Mail and you want to add it into the notes field of your reminder. You have to tap the circular i icon and scroll down again to finally paste in your note.

Quentin

This morning I sat down and wrote a small app to work around this limitation. I built an app that can be launched via an URL scheme, understands x-callback URLs and uses the native reminder/event store on your iPhone. You can launch the application from Launch Center Pro, the notes field of your new reminder is populated with the current clipboard (thanks to LCP). The new reminder is added and on success you are redirected back to Launch Center Pro. So you can simply put the app in the last spot in your last home screen or folder and don’t have to worry about it. Just add new reminders using Launch Center Pro.

There are some parts missing which I intend to update in the next days/weeks. I’ll add an Icon, some help screen with the possibility to copy all supported URL schemes so you don’t have to paste them in by hand. Thanks to the awesome Command-C app by Danilo Torrisi for the inspiration, I think every app using URL schemes should do something like this!

The app is open source and can be found on my github. You can fork it, change it, do whatever you want with it. I’ll put it up in the App Store after a bit of polishing so all non-developers can enjoy it, too.
