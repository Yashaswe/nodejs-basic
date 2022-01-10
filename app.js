const http = require("http");

const server = http.createServer();

server.on("request", (request, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "how World!",
    })
  );
});

server.listen(8080);
