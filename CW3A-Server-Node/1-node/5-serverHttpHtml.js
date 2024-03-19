const http = require("http");
const fs = require("fs");

let contentType = { "Content-Type": "text/html; charset=utf-8" };

const server = http.createServer(function (req, res) {
  fs.readFile("sample.txt", "utf-8", function (err, data) {
    if (err) {
      res.writeHead(404, contentType);
      res.write("Fichier non trouvé");
      res.end();
    } else {
      res.writeHead(200, contentType);
      res.write("<title>Newer Sample Text</title>");
      res.write("<h1>Sample Text</h1>");
      res.write(`<p>${data}</p>`);
      res.write("<footer><p>Mathusan Selvakumar</p></footer>");
      res.end();
    }
  });
});

server.listen(8080, "localhost");
