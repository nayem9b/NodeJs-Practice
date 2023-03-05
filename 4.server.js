const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   const address_url =
  //     "http://localhost:5000/dashboard?name=nayem&country=bangladesh";
  //   const parsed_url = url.parse(address_url, true);
  //   const queryObject = parsed_url.query;
  //   console.log(queryObject);
  //   console.log(parsed_url);
  //   const testJson = {
  //     name: "Kashem",
  //     age: 25,
  //   };
  if ((req.url = "/diff")) {
    fs.readFile("data.text", (err, data) => {
      if (err) {
        console.log(err);
        res.write("Failed to read data");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
  if ((req.url = "/foo")) {
    fs.writeFile("data.text", "You are writing in it now", (err) => {
      if (err) {
        console.log(err);
        res.write("Failed to read data");
        res.end();
      } else {
        res.write("data written successfully");
        res.end();
      }
    });
  }

  //   res.end("Hello from node.js server");
  //   if ((req.url = "/")) {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write(`<p> You are getting this from homepage</p>`);
  //     res.end();
  //   } else if ((req.url = "/contact")) {
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.write(JSON.stringify(testJson));
  //     res.end();
  //   }
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);
