const express = require("express");
const server = express();

server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    reponses: ["Paris", "Lyon", "Marseille"],
    correcte: 1,
  },
  { question: "2 + 2 ?", reponses: ["3", "4", "5"], correcte: 2 },
];

server.get("/", (req, res) => {
  const { qnum, err } = req.query;
  const numQuestion = qnum ? parseInt(qnum, 10) : 0;

  if (numQuestion < questions.length) {
    res.render("index", {
      erreur: err,
      question: questions[numQuestion],
      numQuestion: numQuestion,
      totalQuestions: questions.length,
    });
  } else {
    res.send("Bravo !");
  }
});

server.post("/reponse", (req, res) => {
  const { numQuestion, reponse } = req.body;
  const num = parseInt(numQuestion, 10);
  const repIndex = parseInt(reponse, 10);

  if (questions[num].correcte === repIndex) {
    res.redirect("/?qnum=" + (num + 1));
  } else {
    res.redirect("/?qnum=" + num + "&err=true");
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
