const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log('envoi des infos');
    res.send('réponse par un texte quelconque');
});

app.use((req, res) => {
    console.log("abort");
    res.status(404).send('Bad Request');
})

app.listen(8080);