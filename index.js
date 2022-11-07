var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(301, { Location: "http://www.google.com" });
    res.end();
  })
  .listen(process.env.PORT || 8000);
