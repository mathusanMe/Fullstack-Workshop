const express = require('express');
const serv = express();
serv.use(express.static('public'));
const path = require('path');

serv.use(express.urlencoded({ extended: true }));

// Données des voyages
const destinations = [
    { destination: 'Chili', duree: 15, cout: 2000 },
    { destination: 'Italie', duree: 7, cout: 400 },
    { destination: 'Ecosse', duree: 10, cout: 1000 },
];

// S'exécute à chaque fois qu'une demande est traitée
serv.all("*", (req, res, next) => {
    console.log("Traitement d'une demande");
    next();
});

// Route pour /
serv.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

// Route pour /voyage/inde
serv.get('/voyage/Inde', function (req, res) {
    res.render("voyage.ejs", { 
        voyage: {destination: 'Inde', duree: 13, cout: 2100 },
        message: "C'est ma destination préférée !"
    })
});

// Route pour /voyage/:destination
serv.get('/voyage/:destination', function (req, res, next) {
    const dest = req.params.destination;
    const destination = destinations.find(x => x.destination === dest); 
    if (typeof destination != "undefined") {
        res.render("voyage.ejs", { voyage: destination });
    } else {
        next();
    }
});

// Route pour /voyages (affichant table)
serv.get('/voyages', (req, res) => {
    res.render("voyages.ejs", {voyages: destinations });
});

serv.all('/voyage/*', (req, res) => {
    res.status(404).send("Ce voyage n'existe pas dans la base de donnée");
});

serv.get('/ajouter', (req, res) => {
    res.render('ajouter.ejs');
});

serv.post('/ajouter', (req, res) => {
    voyage = {
        destination: req.body.destination,
        duree: req.body.duree,
        cout: req.body.cout
    }

    // On doit traiter le cas critique où il manque des informations

    destinations.push(voyage);

    res.render('voyage.ejs', voyage);
});

serv.get('/600Euros', (req, res) => {
    filtreVoyages = destinations.filter(x => x.cout <= 600);
    res.render('voyages.ejs', {voyages: filtreVoyages })
});

serv.listen(8080);

