# FeedReader

The Web has been consistent on the use of applications in which the data keep changing frequently. FeedReader has joined this group of webapps that herds newsfeed from your preferred websites. It uses the greatest features of  both jQuery and Handlebars to dynamically request lists of RSS entries and make them easiy accessible and in control.

## Usage

FeedReader is accessible through your preferred browser by opening the file `index.html`.

A clickable sliding menu is provided to you on the left corner of the viewport. It gathers all your feed lists in a concise and easily accessible manner. To request different entries simply click on a feed name.

To customize the list you can open the file `app.js` and provide other names and URLs to `allFeeds` array. JSON syntax is required.

## jQuery and HandleBars

HTTP requests and DOM manipulation are implemented with [jQuery](https://jquery.com/).

To continuously update the data rendered on the browser, FeedReader uses [HandleBars](https://handlebarsjs.com/) templating engine.

## Unit Testing

This app's features are tested with the help of [Jasmine](https://jasmine.github.io/index.html) behavior-driven development framework.