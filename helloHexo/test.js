
const port = process.env.PORT || 4000;

// run hexo server 
var exec = require('child_process').exec;

var child = exec('./node_modules/.bin/hexo server -p' + port, function(error, stdout, stderr) {
    console.log(stdout);
}); 


