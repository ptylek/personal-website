---
title: 'Personal website'
description: "Seems like nowadays it's still easier to have a personal website than print your business card. You can include much more details, is easier to share and edit if anything changes in your career..."
---

Hey guys & girls,

Seems like nowadays it's still easier to have a personal website than print your business card. You can include much more details, is easier to share and edit if anything changes in your career. But I also wanted to create a space here where from time to time I can try to document and comment on some of the stuff I do currently or did in the past. There's possibility it will just drop after few posts but it's nice to have the space ready, isn't it? 

And here comes the bloooog... I created this website using [Nuxt](https://nuxt.com/){.underline .hover:text-purple} and its static site generation (SSG) with [Nuxt Content](https://content.nuxt.com/){.underline .hover:text-purple} module. I wanted to have some more experience and play around with stuff like document driven content (file driven CMS would make creating websites for business quite easy), different locales for content maybe, internationalization, explore `markdown` possibilities within Nuxt Content and also have some more time with tailwind.

:Emoji{icon="🎨"} Design

The first step in this journey was to design the website's layout. I used Procreate on iPad to sketch out how I wanted the page to look. Of course, it's very simple but helped me to visualise what to do and plan for the next steps.

![Procreate design](/images/blog/hello/procreate.png){loading="lazy" .block .mx-auto .max-w-full .sm:max-w-xs}

:Emoji{icon="📝"} Content

I already had content from previous personal website but I wanted to spice it up a little and add some emojis. In the end I also asked Chat GPT to make some of the sentences shorter or change context / focus on different thing. Often it was way off and I had to write the sentences on my own anyway but it also gave some nice examples to choose from. I am writing this post on my own but I've heard that it is possible to feed Chat GPT agent with self written text and it will try to simulate responses in similar manner. I will maybe try it out soon :Emoji{icon="🙈"}

![Chat GPT](/images/blog/hello/chatgpt.png){loading="lazy" .block .mx-auto .max-w-full .md:max-w-md}

:Emoji{icon="✅"} Plan

I planned tasks in ClickUp as it's free and I used it to plan work in some other project. And I am a huge fan of checking boxes. Update: Currently I switched to using Apple Reminders app as I am the only person doing anything here and I don't need overwhelming features - just to know what to do and what I'm currently working on. Apple Reminders now also support column view which can simulate Kanban board.

![Clickup](/images/blog/hello/clickup.png){loading="lazy" .block .mx-auto .max-w-full .xlg:max-w-xlg}

![Apple Reminders](/images/blog/hello/kanban.png){loading="lazy" .block .mx-auto .max-w-full .sm:max-w-sm}

The project turned out to be pretty simple, I installed and configured Nuxt 3 along with Nuxt Content, then I prepared layout (styled header, main content and footer), and added Nuxt Color Mode switcher, . In the beginning the page had custom styles for components, layout. Emojis had different style by using Noto Emoji font (instead of .svgs which are used today). After finishing up with homepage content I wanted to create a deployment process so I don't have to deploy the page manually. I used GitHub actions, it was also quite easy to set it up with my hosting.

![GitHub Actions](/images/blog/hello/github.png){loading="lazy" .block .mx-auto .max-w-full .lg:max-w-xlg}

And here's the result, I'm pretty happy with how it turned out and its performance.
I really recommend [@nuxtjs/fontaine](https://nuxt.com/modules/fontaine) to fight CLS on the webpage when custom fonts are loading. And you might say that this shouldn't be surprising as it's just a single static page with blog but still it's worth to check performance if it would ever be considered to replace some other CMS like WordPress when creating for other people.

![Apple Reminders](/images/blog/hello/performance.png){loading="lazy" .block .mx-auto .max-w-full .sm:max-w-sm}

Peace :Emoji{icon="✌️"}

Pawel