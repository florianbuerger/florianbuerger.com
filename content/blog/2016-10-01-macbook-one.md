---
layout: post
title: The MacBook
date: 2016-10-01
permalink: macbook
images: macbook-one
excerpt: How does the Apple's smallest laptop hold up against the requirements of iOS development?&#160;
---

<section class="post-image-container">
    <img src="{{site.url}}/img/{{page.images}}/macbook-one.png" data-rjs="3"
    alt="Sketch of Macbook One">
</section>

Starting a new life as a digital nomad required some rethinking about the gear I use to develop software. In my home office in Stuttgart I used an iMac. In the shared office space I rented I took my wife's MacBook with me. I had a Thunderbolt Display on the desk. Sadly, the iMac—which was/is an awesome machine and may be one of the best Macs I've ever owned—would not be able to go around the world with me. I had to sell it.

That left me in a bit of a dilemma. I needed to buy a laptop. Apple's MacBook Pro lineup is what most developers tend to buy. My wife has the 13" model and the size is pretty ideal. Problem is though, that the models Apple offers you to buy in the summer of 2016 are pretty old and they still cost a lot of money. I don't have a problem with paying high prices for high quality machines—there are used to get work done so it is not an expense, it is an investment—but it didn't felt right to drop more than 2,000 euros on a computer with two year old hardware inside. And rumors were rising that Apple will introduce overhauled models soon. The new model ought to be thinner and lighter than the current MacBook Pro so they should be perfect for traveling.

On the other side I don't really care that much about performance. I don't mind if the build takes 1:32 or 2:12 minutes. As long as the machine isn't overwhelmed by every day tasks (Xcode, iOS simulator, Slack, Mail, Sketch, vim) I would be fine. And the pro line of Apple's laptops are still big, get pretty hot and offer more performance then I would ever need.

I dabbled with the idea of getting a MacBook Air for a short time. I prefer the tear drop shape of the body. They are light and performance should suffice. The only problem is they don't offer retina displays. I didn't want to go back in time and use a non-retina machine.

There is another option: The MacBook. Or MacBook One as it is often called in the internet nerd cycles. It is incredible light, perfect for travel. The battery lasts longer than the one in the pro line _check_. Retina display _check_. The small display doesn't bother me. Actually it is the same physical space as the 13 inch MacBook Pro in its default setting. I can easily adapt and if I need more screen estate I can always use the iPad as a secondary monitor thanks to [Duet][1]—by the way an awesome app. I wasn't sure about the performance though. There aren't many developers online who wrote about their experience with this small laptop. Most reviews tend to focus on writers and general consumers, casually browsing the web, writing blog posts and watching videos on YouTube.

After a week of consideration I ordered the top of the line space grey MacBook[^1]. And it is **so beautiful.** The space grey color is so much better than the boring silver[^2]. I set up my dev environment and didn't run into any troubles. I was astonished how good this tiny machine handles Xcode. Sadly since the introduction of Swift Xcode's performance dropped rapidly. Opening an old Objective-C only project is blazingly fast, even when the project is double the size. Mixen Objective-C/Swift projects tend be the worst. But it wasn't an issue. Sure, it would take a few more second to run the new build or a minute more to do a clean build[^3].

I took the laptop to the office and I was, again, blown away but the size. I didn't notice it at all in my bag. I know this would be perfect while being on the road.

My joy didn't last long. I was testing the MacBook while it was really hot outside (at least for Germany). And of course, inside as well. The MacBook doesn't have any moving parts, it has no fans at all. When the processor is stressed and would heat up it will reduce its clock speed so it won't overheat. This isn't anything I would have noticed during days without programming in Xcode. The problem is, while using Xcode and constantly compiling, running test and live evaluating Swift code the processor has to work **a lot**. It has to do so much stuff it would overheat so the system reduces the clock speed to protect the chip. In the clocked down mode the machine is too slow to handle Xcode in a sane way. I saw the beach ball of death more than ever before. The cruel thing is there is no way to fix it.

I wish I spend the working day in Applications that don't require a high CPU load. Editing files in `vim `was wonderful. Photoshop and Sketch didn't have problems, even when used a lot. Photoshop didn't blink on `.psd` files larger than 400 MB with multiple artboards.

So the only reason I didn't keep the MacBook **was Xcode**. And only if used for more the two hours in a row. I didn't mind the single port. I loved the weight. The feel of the machine in my bag—or the lack of it. The battery normally lasted around five to six hours with heavy CPU work. But the performance when the clock speed was reduced wasn't acceptable. I wish the job as an iOS developer wouldn't depend so much on hardware.  I would love to spend the day with it writing in `vim`. Someone has to offer me some web development projects 😉

For any other kind of work it is a terrific machine and I highly recommend to check it out.

_Enjoy your day!_

_-Flo_

[^1]:   1.2GHz m5 processor, 8GB memory and 512GB SSD storage.

[^2]:	Originally I considered the rose gold model!

[^3]:	Mostly on projects that still use `CocoaPods`. I try to switch to `Carthage` these days, especially with the slow Swift compile times, precompiled frameworks are a blessing.

[1]:	http://www.duetdisplay.com/
