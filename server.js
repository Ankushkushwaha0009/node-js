const http = require('http') ; 

//passing the arrow function inside the createServer

http.createServer((request , response) => {

    response.write('<h1>hello Ankush</h1>') ;
    response.end() ; 

}).listen(4000) ; 


//How to run this 
// 1.Node file_name.js
// 2.Go to google and type --> localhost:4000


