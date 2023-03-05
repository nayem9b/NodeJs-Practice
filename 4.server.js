const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const address_url =
    "http://localhost:5000/dashboard?name=nayem&country=bangladesh";
  const parsed_url = url.parse(address_url, true);
  console.log(parsed_url);
  const testJson = {
    name: "Kashem",
    age: 25,
  };

  //   res.end("Hello from node.js server");
  if ((req.url = "/")) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<p> You are getting this from homepage</p>`);
    res.end();
  } else if ((req.url = "/contact")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(testJson));
    res.end();
  }
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);
