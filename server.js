var express = require('express'),
    server = express();

server.use(express.static(__dirname+"/html"));

server.get('/beginning',function(req, res){
  res.sendFile("html/beginning.html", {root:__dirname});
});

server.listen(8080,function(){
  console.log("Now listening on port 8080");
});
