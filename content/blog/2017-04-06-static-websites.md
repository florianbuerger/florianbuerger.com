+++
title = "Static Websites"
draft = true
date = "2017-04-06"
+++

A few days ago I sat down and replaced the underlying code of this website. It used to be built using a static site generator named `jekyll`.

*If you have never heard of a static site generator, this is the run down; the tool enables you to generate all `HTML` (and maybe other) files you need for your website to be rendered in a user’s browser. Normally you’d have some kind of web server that dynamically loads the content from files or databases, based on what the user request. With static sites, there is no need for that. Everything is already generated. You can skip the server and host the site on anything that can host plain files like Amazon AWS or GitHub pages.*

`jekyll` was the apparent decision a few years ago because it is what GitHub uses to generate project pages. The problems arise when, after a few months of not updating the site I decide to change something. To publish the site, I have to install the `jekyll` gem. It should be the same version as the one GotHub uses. What this leads to the fact that it is probably necessary to install a more modern version of Ruby since the version shipped with macOS is pretty old—at least regarding of our fast paced software world. Installing the latest version of Ruby should be done with a ruby version manager, like [`rbenv`](github.com/rbenv/rbenv) or [`chruby`](github.com/postmodern/chruby). They require you to change your Terminal setup or may lead to problems with other tools installed. I am no Ruby developer, so it kinda feels wrong I have to jump through all these hoops just to generate a website. 

The next pain point is a reliable live reloading solution for `jekyll`. I don't like to 1) save the file 2) switch to the browser 3) hit `⌘-R` to reload the page. I know it doesn’t seem like that much work but believe me, it adds up. So that leads down another rabbit hole of Task runners, Rakefiles and more configuration and dependencies of tools I don’t want to learn and understand. Again, I just want to generate some HTML files as simple as possible.

## Enter `hugo`

Hugo is another static site generator written in Go. It is available on macOS via Homebrew, so the installation is as simple as `brew install hugo`. Generating the site is `hugo`. All files are then put into a directory called `public`, that you can deploy to Amazon or whatever. Running a local web server with live reload and automatic rebuilding: `hugo server`. I love the simplicity in that.

## Hosting

As I mentioned, the site used to be hosted on GitHub. To enable SSL connections, there is actually a [CloudFlare](https://www.cloudflare.com) distribution in front of it, as it offers free SSL certificates for GitHub pages. Again, two services, too complicated. I discovered [Netlify](https://www.netlify.com) which meets all my requirements (`SSL`, forward the blank domain to the `www` subdomain, publish via `git`) and the setup process was a matter of minutes. I moved some others sites to them as well, and I’ve never had a problem. I highly recommend to check out their services 👍.

<div class="hr-sect">***</div>

If you have any feedback, let me know via [Twitter](https://twitter.com/florianbuerger) or [Email](mailto:florian@florianbuerger.com?subject=Feedback).

Enjoy your day!

—Flo
