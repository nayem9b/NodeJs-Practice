const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from node.js server");
  console.log(req.url);
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);
