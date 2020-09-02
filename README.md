# MyReads Project

This repository contains my submission for the final assessment project for
Udacity's React Fundamentals course. This simple webapp allows the user to
search for and categorize books into three separate shelves:
`Currently Reading`, `Want to Read`, and `Read`. This webapp uses React to
manage the state of said shelves, and utilizes an API provided by Udacity to
load and store the content.

## Getting started

To run this webapp:

- clone this repository
- ensure you are using the correct `npm` version (specified in [.nvmrc](.nvmrc))
- install all project dependencies with `npm install`
- start the development server with `npm start`

## Grading

Development of this project was guided by the following resources:

- [Rubric](https://review.udacity.com/#!/rubrics/918/view)
- [Style guides](https://udacity.github.io/git-styleguide/)

## Important

The backend API uses a fixed set of cached search results and is limited to a
particular set of search terms, which can be found in
[SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms
that will work with the backend, so don't be surprised if your searches for
Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app). You
can find more information on how to perform common tasks
[here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
