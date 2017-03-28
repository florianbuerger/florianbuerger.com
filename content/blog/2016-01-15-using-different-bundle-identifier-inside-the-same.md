---
layout: post
title: Using different bundle identifier inside the same Xcode target
date: '2016-01-15T11:52:46+01:00'
---

Today I want to share a technique I’ve been using for the last year or so to enable a different bundle identifier for Debug/Beta/Release builds in the same project. It enables you to install the current beta version of your app next to the release version.

Here is how you configure your project:

1. Per default, every Xcode project has 2 configurations: Develop and Release. Duplicate the Release configuration and rename the copy to Beta or AdHoc. This configuration is used for versions pushed to TestFlight or Hockey or whatever service you use to distribute your test builds. 
2. Navigate to your project’s build settings page and add a User-Defined Setting.  Do this on the project level so its value can be applied to all targets like the iOS app and any extension—which must be prefixed with the main target’s bundle identifier. Name the setting something like `MYAPP_BUNDLE_IDENTIFIER`.
3. Expand the setting to show values for all build configurations. Append beta to the Beta configuration you’ve created earlier. I like to use a different identifier for debug builds as well. These are my settings. 
4. Change the value for the official `$PRODUCT_BUNDLE_IDENTIFIER` to refer to your custom setting, `$MYAPP_BUNDLE_IDENTIFIER`.
5. If you have a watchOS target or Today Extension, change its identifier as well. Since the custom variable is defined at the project level, you can use `$MYAPP_BUNDLE_IDENTIFIER.watchkitextension` and Xcode will pick the right value for you.


If you run into any problems or have questions, let me know. I am happy to help! Hope this is useful.
