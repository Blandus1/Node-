//var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //Return the url part of the request object:
//   res.write('Hello i am a server');
//   res.end();
// }).listen(8080)


//const {functioni,celsiusToFahrenheit}= require('./main'); // Importing the main module

// console.log(`Random number: ${functioni()}`); // Using the function from the main module
// console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(0)}`); // Using the conversion function


import getPosts, { getPostsLength } from './another.js'; // Importing the posts module
console.log(getPosts()); // Logging the posts to the console
console.log(`posts length: ${getPostsLength()}`); // Logging the length of posts to the console