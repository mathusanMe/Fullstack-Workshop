const fs = require('fs');

console.log('reading file, please wait');

fs.readFile('sample.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});