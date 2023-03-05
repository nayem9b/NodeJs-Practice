const http = require("http");
const server = http.createServer((req, res) => {
  //   res.end("Hello from node.js server");
  if ((req.url = "/")) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<p> You are getting this from homepage</p>`);
    res.end();
  }
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);
