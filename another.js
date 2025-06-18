// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //Return the url part of the request object:
//   res.write(req.url);
//   res.end();
// }).listen(8080)

const posts= [
  {id: 1, title: 'Post One', body: 'This is post one'},
  {id: 2, title: 'Post Two', body: 'This is post two'},
];

 const getPosts = () => posts;
export const getPostsLength = () => posts.length; // Function to get the length of posts

 export default getPosts;// Exporting the getPosts function as the default export