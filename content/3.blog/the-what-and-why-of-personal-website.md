---
title: 'The what and why of personal website'
layout: 'post'
date: '2023/11/15'
---

Seems like nowadays it's still easier to have a personal website than print your business card. You can include much more details, it's easier to share and edit if anything changes in your career. I also wanted to create a space where I can write about some of the stuff I do currently or did in the past. And even if I don't do it regularly, it's nice to have that space ready, isn't it?
<!--more-->

## :UIcon{name="i-mdi-tools"} Tech stack

I created this website using Nuxt and its static site generation (SSG) with Nuxt Content module. Mostly I wanted to play around with document/file driven content - this kind of CMS would make creating websites for business much easier as there wouldn't be a need for WordPress.

Current tech stack:
- :UButton{to="https://nuxt.com" target="_blank" label="Nuxt 3.8.1 with TypeScript" :padded="false" variant="link"}
- :UButton{to="https://content.nuxt.com" target="_blank" label="Nuxt Content" :padded="false" variant="link"}
- :UButton{to="https://ui.nuxt.com" target="_blank" label="Nuxt UI" :padded="false" variant="link"}

Additional modules used:
- :UButton{to="https://image.nuxt.com" target="_blank" label="Nuxt Image" :padded="false" variant="link"}
- :UButton{to="https://nuxt.com/modules/fontaine" target="_blank" label="Nuxt Fontaine" :padded="false" variant="link"}
- :UButton{to="https://color-mode.nuxtjs.org" target="_blank" label="Nuxt Color Mode" :padded="false" variant="link"}
- :UButton{to="https://devtools.nuxt.com/" target="_blank" label="Nuxt DevTools" :padded="false" variant="link"}

## :UIcon{name="i-mdi-palette"} Design

The design is very simple. I used Procreate on iPad to sketch out how I wanted the page to look. Then I asked my friend who works within UX/UI to give me some tips. And as the result of extra discussion the final sketch looked like below.

:Image{src="/images/blog/hello/procreate.jpg" label="Procreate design"}

If you want to design a personal page, keep in mind:
- focus on who is the site aimed at
- have a separate 'about' page so the homepage is not surprising audience with big amount of text (if you're going to have subpages)
- remember to add most important information like years of experience, frameworks, certificates
- have most important links available in visible place (like linkedin or github)

## :UIcon{name="i-mdi-clipboard-list-outline"} Plan

I plan tasks in Apple Reminders app as I am the only person doing anything here and I don't need a lot of features - just to know what to do and what I'm currently working on. Apple Reminders now also support column view which can simulate Kanban board. As even with such simple project as personal website it can get overwhelming, I really recommend focusing on one task at a time.

:Image{src="/images/blog/hello/kanban.png" label="Apple Reminders"}

## :UIcon{name="i-mdi-code-braces"} Implementation

At first, I wanted to create easy deployment process so I don't have to deploy the page manually and the changes can be deployed quickly to production. I used GitHub actions, it was also quite easy to set it up with my hosting. 

:Image{src="/images/blog/hello/github.png" label="GitHub Actions"}

Website development history can be accessed via commits in GitHub repository.

## :UIcon{name="i-mdi-counter"} Result

Even though it's just a static page, I think it's always good to run the Lighthouse. And it gives room for improvements like
- :UButton{to="https://nuxt.com/modules/fontaine" target="_blank" label="Nuxt Fontaine" :padded="false" variant="link"} to fight CLS on the webpage when custom font is loading
- :UButton{to="https://unhead.unjs.io/usage/composables/use-server-head" target="_blank" label="useServerHead" :padded="false" variant="link"} for head attributes which don't have to be run client side
- background:text ratio gave me different results in :UButton{to="https://pagespeed.web.dev/" target="_blank" label="PageSpeed Insights" :padded="false" variant="link"} than local lighthouse test, so make sure to run it there too!

:Image{src="/images/blog/hello/performance.png" label="Performance"}
