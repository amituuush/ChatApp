# DoorDash Frontend Interview Project
* TLDR: *Build a chat app with real APIs*
* Time: *3hr - 6hrs*
* Allowed tools & frameworks: *anything*
* Show us what you got!

## Howdy! 👋  

This is the frontend interview project for DoorDash! We're going to ask you to build something with whatever tools you want, whatever language you want, or whatever.

If you want to keep it vanilla, that's fine—this should take you two hours with jQuery, plain ol' HTML and CSS. If you want to go all out and use other tools, that's fine too—*just make sure you have enough documentation for us to be able to build and run the app*.

The goal here is not to demonstrate your pure coding ability—we're here to give you a problem that's not totally spec'd out for you, and we want to see far you can go. How good can you make it without much guidance? What are the sort of improvements and choices you'll make as you build this thing, and where do your priorities lie?

Remember, building stuff is supposed to be fun, so be creative! Happy coding!

## Getting started
There's a few things you need to get started on to get this to work.

### 1. Installing minimum deps
Make sure you have `node` installed, with a version greater than `7.0.0`. I highly recommend [`nvm`](https://github.com/creationix/nvm), or just installing the latest version of `node` with `brew install node` on macOS.

Once you have a good `node` installed, run `npm install` in this repo to get your dependencies.

### 2. Serving your app
By default, you can run `npm start` to run your app, serving the files from `/public`. You can, however, change this to whatever you want! Just make sure you document the changes somewhere so we can run this.

### 3. Running the api server
We have provided a simple api server for you. You can run `npm run api-server` to start it. Read the [spec](./spec/api-endpoints.md) for more details on the api.

### 4. Read the spec
There's a pretty fleshed out spec in the `./spec` directory. Checkout the [design specs here](./spec/designs/detailed-design-specs.md) to understand what you're building!

## How we'll test this
We're going to review your code to see how you work and how you make tradeoffs—no automated tests for this one. We'll schedule a call with you after you submit this to walk through the code to understand your thought process. If you come on-site, we'll take your code here, and we'll build on it to tests other things—how you write tests, how you build out new features and refactor old code, etc.

## We'll be evaluating for:
* maintainability
* testability
* readability
* solid UX without strict guidance

## Extra notes

A couple of things to say:

1. Feel free to change the language you're writing this in. We want to see what good code looks like for you add a `gulpfile`, setup `webpack`, or just use the plain JS, CSS, and HTML you're given. It's all up to you!

2. Feel free to use any libraries or frameworks you want, with the idea that they're increasing your productivity, not writing the app for you.

3. Feel free to change any of the scaffolding we provided for you.
