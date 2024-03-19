const express = require("express");
const app = express();

app.get('/cours/:titre/descr', (req, res) => {
    res.send(`Vous avez demandé le cours ${req.params.titre}`);
});

app.listen(8080);