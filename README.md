# URL shortener service

## About

A URL shortener service in an Express server with MongoDB.

## Features

An Express server which runs locally and connects to a MongoDB hosted with MongoDB Atlas.

For each given URL, a shortened URL, in the form of `http:localhost:5000/<url_code>` is generated. It's only generated once, so future requests for the same URL return the short URL stored at the database.

Navigating to the shortened URL redirects to the former URL.

## Running

Clone the repo and run either `npm start` (or `npm run dev` for using `nodemon`).

## Acknowledgment

Thanks to [Brad Traversy](https://github.com/bradtraversy) for his [tutorial](https://www.youtube.com/watch?v=Z57566JBaZQ&list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&index=29).
