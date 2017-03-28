---
layout: post
title: iTunes Connect & TestFlight
date: '2015-06-06T10:56:20+02:00'
---

When we started a new project some months ago we tried to embrace Apple’s new technologies and services. We started the project in Swift, knowing there will be bumps along the way (we switched back to Objective-C after ~ 3 weeks struggling with Swift’s tooling, but that deserves a post on its own). We abandoned HockeyApp in favour of Apple’s own TestFlight. The client wasn’t willing to purchase an enterprise developer account in addition to the normal developer account to avoid struggling with iOS UUIDs for beta testing. Normally we’d provide our own (enterprise) developer account for beta testing via HockeyApp but the client didn’t want that either.

Yesterday, the first alpha milestone was due. We had an iOS developer account that was a team member of the clients iOS developer organisation. We were able to build and sign the application using their certificates and provision profiles. No big deal. In the past, we would upload the resulting .ipa file to HockeyApp, allow downloading for our internal testers only and—after the QA is finished—send out the alpha for the client to test on their own.

# TestFlight

With TestFlight, the process is a bit different. iTunes Connect users have nothing to do with iOS developer accounts. Their management is completely uncoupled from the developer center.

Shouldn’t be that hard to add a new user in the clients iTunes Connect account for uploading new beta builds (hint: the user has to have the technical role). The problem is, you can’t add an user with an email address that is already associated with another iTunes Connect account. So we created a new email address to use only for that client’s iTC account. Turns out the email address have to match the email address of the developer account who built and signed the .ipa. So in addition to creating the separate email account we had to create a complete AppleID profile for that user, a developer account and add this developer account to the clients organisation. Now we were able to upload the App to the clients iTunes Connect portal.

# AppleID

Next thing was to get the app to show up on our internal test devices. We had to switch these devices to the newly created AppleID. But since this is the AppleID associated with the iTunes & AppStore on the device it is required to have a complete profile, including address information and even a credit card for future purchases—which of course, will never happen.

Now we thought we’re all set to finally install the TestFlight beta version onto the test devices and start QA. The issue was, the app did’t show up in Apple’s TestFlight App for iOS. Looking at the prerelease tab in iTunes Connect, we weren’t able to see our new user under Internal Testers, only the account owner was shown. Since the account owner is someone we don’t know in the clients IT department this didn’t help much. There was no way to manually add a new internal tester. We could add external testers but these require the app to pass Apple’s review before it is available, even for beta builds. Reading the iTunes Connect documentation didn’t help either.

>   First verify whether the iTunes Connect user is eligible to become an internal tester and then enable the user to be a tester. Then add the user as a tester of your app and invite him or her to begin testing.
— iTunes Connect Developer Guide

Users with the role Technical should show up for internal testing automatically. But it wasn’t the case. After poking around in the developer forums and on StackOverflow it seems that users can’t belong to internal and external testers simultaneously. No idea why that is or if it’s really the issue.

We asked the client to remove our iTunes Connect user and recreate him again, this time only for internal testing. After waiting another two hours for the iTunes Connect portal to see the changes we were finally able to install the app on our devices.

# What can we do to improve?

The only way to talk to Apple to suggest enhancements on their products is to file radars. This process is discouraging, to say the least. Most of the time the radars are closed or being marked as a duplicate and nothing will ever happen. But we shouldn’t lose hope.

If you can relate to our issues, please dupe the radar to let Apple know: [rdar://21272576](rdar://21272576)

By the way, the easiest way to duplicate a radar is to use the free Mac app [QuickRadar](). It is awesome!

# The future?

The whole process is cumbersome and was clearly designed for a single developer or developer team that is building and testing their own app(s) not a consulting firm handling multiple clients. The process outlined above is way to much work since we have to create a new AppleID with credit card information for every client now.

I hope someday Apple will improve this. But since they don’t need to use these tools internally and they seem to have no idea how the consulting app business works my hopes aren’t high. Best thing would be if by tomorrow everything I said is obsolete and the release process resembles Google’s Play Store without the need for provisioning at all.
