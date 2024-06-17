const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("nameste!");
});

server.listen(3000);
