const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`requête reçue à ${new Date()}`);
  next();
});

app.get("/", function (req, res) {
  res.send("Racine");
});

app.get("/private", function (req, res) {
  res.send("Private");
});

app.get("/pictures", function (req, res) {
  res.download("../CW3A.pdf", "TP3A.pdf");
});

app.use((req, res) => {
  res.status(404).send("Bad Request");
});

app.listen(8080);
