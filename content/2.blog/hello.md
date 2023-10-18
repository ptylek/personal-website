---
title: 'Personal website'
description: "Seems like nowadays it's still easier to have a personal website than print your business card. You can include much more details, is easier to share and edit if anything changes in your career..."
---

Hey guys & girls,

Seems like nowadays it's still easier to have a personal website than print your business card. You can include much more details, is easier to share and edit if anything changes in your career. But I also wanted to create a space here where from time to time I can try to document and comment on some of the stuff I do currently or did in the past. There's possibility it will just drop after few posts but it's nice to have the space ready, isn't it? 

And here comes the bloooog... I created this website using [Nuxt](https://nuxt.com/){.underline .hover:text-purple} and its static site generation (SSG) with [Nuxt Content](https://content.nuxt.com/){.underline .hover:text-purple} module. I wanted to have some more experience and play around with stuff like document driven content - it makes so easy to create personal websites for business, different locales for content maybe, internationalization, explore markdown possibilities within Nuxt Content and also have some more time with tailwind.

:Emoji{icon="🎨"} Design

The first step in this journey was to design the website's layout. I used Procreate on iPad to sketch out how I wanted it to look. Of course it's nothing professional but allowed me to visualise what to do and plan for the next steps.

![Procreate design](/images/blog/hello/procreate.png){.block .mx-auto .max-w-xs}

:Emoji{icon="📝"} Content

I already had content from previous personal website but I wanted to spice it up a little and add some emojis. In the end I also asked Chat GPT to make some of the sentences shorter or change context / focus on different thing. Some times it was way off and I had to write the sentences on my own anyway but it also gave some nice examples to choose from. I am writing this post on my own but I heard it is possible to feed Chat GPT agent with self written text and it will try to simulate responses in similar manner. I will maybe try it out soon :Emoji{icon="🙈"}

![Chat GPT](/images/blog/hello/chatgpt.png){.block .mx-auto .max-w-md}

:Emoji{icon="✅"} Plan

I planned tasks in ClickUp as it's free and I used it to plan work in some other project. And I am a huge fan of checking boxes. Update: Currently I switched to using Apple Reminders app as it now also has column view which can simulate Kanban board.

![Clickup](/images/blog/hello/clickup.png){.block .mx-auto .max-w-xlg}

![Apple Reminders](/images/blog/hello/kanban.png){.block .mx-auto .max-w-sm}

The project turned out to be pretty simple, I installed and configured Nuxt 3, prepared layout (Header, main content and Footer), added Nuxt Content with content for the home page. In the beginning the page had some custom css styles to achieve desired layout and emojis were coming from Noto Emoji font (instead of .svgs). After finishing up with Nuxt Color Mode module I wanted to create a deployment process. I used GitHub actions, it was quite easy to set it up with my hosting.

![GitHub Actions](/images/blog/hello/github.png){.block .mx-auto .max-w-xlg}

And here's the result, I'm pretty happy with how it turned out and its performance.

Peace :Emoji{icon="✌️"}

Pawel