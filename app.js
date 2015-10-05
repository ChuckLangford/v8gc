var http = require('http');
var util = require('util');

const PORT=8080; 

process.on('SIGUSR2', function(code) {
  console.log('Running GC');
  gc();
});

function handleRequest(req, res){
  var mem = process.memoryUsage();
  res.end('rss: ' + Math.ceil(mem.rss/1024/1024) + 'MB ' +
          'heapTotal: ' + Math.ceil(mem.heapTotal/1024/1024) + 'MB ' +
          'heapUsed: ' + Math.ceil(mem.heapUsed/1024/1024) + 'MB ');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
