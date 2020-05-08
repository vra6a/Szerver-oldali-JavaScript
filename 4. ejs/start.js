/*
const FestivalModel = require('./models/festival');
const TicketModel = require('./models/Ticket')

let festival1 = new FestivalModel();
festival1.nev = "Balaton Sound";
festival1.helyszin = "Zamardi";
festival1.datum = "2020 rip";
festival1.save((err) => {
    console.log(err);
});
*/
const express = require('express');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');
app.use(session({
    secret: 'asd',
    cookie: {
        maxAge: 365 * 24 * 60 * 60 * 1000
    },
    resave: true,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('views'));

require('./route/index')(app);

app.listen(3000, function() {
    console.log('A Festicket elstartolt! jegyek a localhost:3000-on');
});

