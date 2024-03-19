const fs = require('fs');

try {
    const data = fs.readFileSync('sample.txt', 'utf8');
    console.log('File read! \n');
    console.log(data);
} catch (err) {
    console.log('An error occurred: ', err);
}