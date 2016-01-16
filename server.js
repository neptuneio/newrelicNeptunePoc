var newrelic = require('newrelic');

var http = require('http');

//JSON
var jsonToSend = {
  Name:"John Art",
  Email: "john.art@johnart.com",
  Address:"Infinite loop, cupertino",
  Role:"Adminstrator"
};

//Server
PORT_NO=3000;

http.createServer(function(req, res){
  switch(req.url) {
    case '/5000' :
      setTimeout(function(){
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify(jsonToSend));
      },5000);
    break;
    case '/error' :
      res.writeHead(500, {'Content-Type':'text/plain'});
    res.end("500 Error generated dude!");
    break;
    default :
      res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(jsonToSend));
    break;
  }

}).listen(PORT_NO);

console.log('New Relic test server just started on port: ' + PORT_NO);

