let cours = [];
cours[0] = {
  titre: "OCaml",
  descr:
    "OCaml est un langage de programmation fonctionnel, impératif et objet créé en 1996 par Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy et Alain Frisch. Il est dérivé du langage Caml, lui-même dérivé du langage ML. OCaml est un logiciel libre distribué selon les termes de la licence publique générale GNU.",
  enseignants: ["Damien Doligez", "Didier Rémy", "Alain Frisch"],
  responsable: "Xavier Leroy",
};

cours[1] = {
  titre: "Java",
  descr:
    "Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld.",
  enseignants: ["James Gosling", "Patrick Naughton", "Bill Joy"],
  responsable: "Sun Microsystems",
};

const express = require("express");
const server = express();
const port = 8080;
server.set("view engine", "ejs");
server.use(express.static("public"));
server.get("/cours/:num", (req, res) => {
  let n = parseInt(req.params.num);
  if (cours[n] == undefined) {
    res.status(404).send("Cours non trouvé");
    return;
  }
  res.render("cours.ejs", cours[n]);
});

server.listen(port);
