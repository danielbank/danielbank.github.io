---
path: "/2048-chess"
date: "2015-12-05"
title: "2048 Chess"
tags: ["chess", "github", "html5", "javascript", "video games"]
---

I know I am about two years late to the 2048 Clone Wars, but I finally got around to finishing my variant, 2048 Chess. Originally I wanted to have multiple chess pieces on a larger 2048 board. What I ended up developing was simply the kings. The gameplay doesn’t lead to terribly interesting strategy. It’s ultimately a game of button mashing and luck. Whatever, I’m calling it done: http://danielbank.github.io/2048-chess/.

Making a GitHub page for a forked repository that already has a gh-pages branch:

My biggest hurdle in finishing this project was when I attempted to view the GitHub page for the repository. GitHub was overriding the game’s index.html with an automatically generated GitHub page. I found this incredibly useful StackOverflow question for fixing that problem. The prescribed steps were to:

- Make a file called `index.md`.
- Edit the contents of index.md to be:

```
---
## layout: index
---
```

- Make a file called `_config.yml`.
- Edit the contents of the `_config.yml` to be:

```
markdown: redcarpet
```

- Create a `_layouts` folder.
- Move your `index.html` into the `_layouts` folder.
- Commit the changes and push them to the gh-pages branch of your repository on GitHub.
- The automatically generated page should be replaced by your page when Jekyll generates it.
