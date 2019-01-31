# Say Frontend Take Home Project

This repository contains the instructions for the frontend (web) takehome coding challenge. 

Please follow the instuctions for the project below.

Currently, we are primarily a React + TypeScript shop. With that said, feel free to pick any library/framework you know best for this coding challenge. IF you would like to complete this coding challenge with React + JavaSctipt, we have provided a simple React starter project for you in this repo. If you want to code it in something other than React, you can ignore the Getting Started section and head straight into the Project Details sction.

## Getting started

1. Make sure you have Node installed. This project was scaffolded with Yarn, so make sure you have that too.

2. Run `yarn install` to install the necessary dependencies. 

3. Run `yarn start` to start local server. This should start the project on `localhost:3000`.

## Project Details

### Goal

The result of this project should be a page containing groups of subreddits with each group containing it's posts sorted from most upvotes to least upvotes. Something to keep in mind here is that we aren't looking for 100% prefection here. We are more insterested in looking into your process as an engineer.

### Detailed Steps

1. Fetch data from the url provided: [https://www.reddit.com/.json](https://www.reddit.com/.json).

2. Group the posts together by subreddit.

3. Sort the posts in each subreddit based on upvote, i.e. most upvotes to fewest.

4. For each group of posts in a subreddit, display the subreddit name. Each post of the subreddit must display title, image (if there is one), date (formatted as MM/DD/YYYY), upvotes, and a link to the actual post.

5. Once you are done, push the project to your own GitHub/BitBucket/GitLab account (private is perfectly fine).

## Things to keep in mind

1. Please take ~2 hours to complete this challenge. 

2. The end result should be functional and user fiendly, but doesn't have to be styled to perfection. If you don't have time to style it, don't sweat it.

3. Feel free to use whatever dependencies you would like.
