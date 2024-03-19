const http = require('http');
const fs = require('fs');

let contentType = {'Content-Type': 'text/plain; charset=utf-8'};

const server = http.createServer(function (req, res) {
    fs.readFile('sample.txt', 'utf-8', function (err, data) {
        if (err) {
            res.writeHead(404, contentType);
            res.write('Fichier non trouvé');
            res.end();
        } else {
            res.writeHead(200, contentType);
            res.write(data);
            res.end();
        }
    });  
});

server.listen(8080, 'localhost');