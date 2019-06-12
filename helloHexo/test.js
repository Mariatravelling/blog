
// const port = process.env.PORT || 4000;

// // run hexo server 
// var exec = require('child_process').exec;

// var child = exec('./node_modules/.bin/hexo server -p' + port, function(error, stdout, stderr) {
//     console.log(stdout);
// }); 


var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!  THIS IS A TEST!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080