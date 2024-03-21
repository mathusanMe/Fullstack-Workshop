let db_users = [];

let data = {
  entete: "Veuillez remplir ce formulaire",
  username: "",
  password: "",
};

const express = require("express");
const server = express();

server.set("view engine", "ejs");
server.get("/", (req, res) => {
  res.render("form.ejs", data);
});

server.use(express.urlencoded({ extended: true }));

server.post("/", (req, res) => {
  console.log(db_users);
  if (
    (typeof req.body.username == "string" && req.body.username.length === 0) ||
    (typeof req.body.password == "string" && req.body.password.length === 0)
  ) {
    data.entete = "Veuillez remplir tous les champs";
    data.password = req.body.password;
    data.username = req.body.username;
    res.render("form.ejs", data);
  } else {
    let user = {
      username: req.body.username,
      password: req.body.password,
    };

    let found = false;
    for (let i = 0; i < db_users.length; i++) {
      if (db_users[i].username == user.username) {
        found = true;
        db_users[i].password = user.password;
        data.entete = `Bonjour ${user.username}, votre mot de passe a été mis à jour`;
        res.render("second.ejs", data);
      }
    }

    if (!found) {
      db_users.push(user);
      data.entete = `Bonjour ${user.username}, vous êtes maintenant inscrit`;
      res.render("second.ejs", data);
    }
  }
});

server.listen(8080);
