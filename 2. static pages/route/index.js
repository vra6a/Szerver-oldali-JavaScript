const authMW = require('../middleware/auth/authMW');
const checkPwMW = require('../middleware/auth/checkPwMW');
const renderMW = require('../middleware/renderMW');

const deleteFestivalMW = require('../middleware/festival/deleteFestivalMW');
const getFestivalsMW = require('../middleware/festival/getFestivalsMW');
const getFestivalMW = require('../middleware/festival/getFestivalMW');
const saveFestivalMW = require('../middleware/festival/saveFestivalMW');

const deleleteTicketMW = require('../middleware/ticket/deleleteTicketMW');
const getTicketsMW = require('../middleware/ticket/getTicketsMW');
const getTicketMW = require('../middleware/ticket/getTicketMW');
const saveTicketMW = require('../middleware/ticket/saveTicketMW');


module.exports = function (app) {
    const objRepo = {};

    app.use('/login',
        checkPwMW(objRepo),
        renderMW(objRepo, 'login'));

    app.get('/festivals',
        authMW(objRepo),
        getFestivalsMW(objRepo),
        renderMW(objRepo, 'index'));

    app.use('/festivals/new',
        authMW(objRepo),
        saveFestivalMW ,
        renderMW(objRepo, 'uj_fesztival'));

    app.use('/festivals/edit/:festivalid',
        authMW(objRepo),
        getFestivalMW(objRepo),
        saveFestivalMW(objRepo),
        renderMW(objRepo, 'szerk_fesztival'));
        //az uj_fesztival es a szerk_fesztival ugyan az az oldal, mindössze 1 sorban tér el

    app.get('/festivals/delete/:festivalid',
        authMW(objRepo),
        getFestivalMW(objRepo),
        deleteFestivalMW(objRepo));



    app.get('/tickets/:festivalid',
        authMW(objRepo),
        getFestivalMW(objRepo),
        getTicketsMW(objRepo),
        renderMW(objRepo, 'jegyek'));

    app.use('/tickets/:festivalid/new',
        authMW(objRepo),
        getFestivalMW(objRepo),
        saveTicketMW(objRepo),
        renderMW(objRepo, 'uj_jegy'));

    app.use('/tickets/:festivalid/edit/:ticketid',
        authMW(objRepo),
        getFestivalMW(objRepo),
        getTicketMW(objRepo),
        saveTicketMW(objRepo),
        renderMW(objRepo, 'szerk_jegy'));
        //az uj_jegy es a szerk_jegy ugyan az az oldal, mindössze 1 sorban tér el

    app.get('/tickets/:festivalid/delete/:ticketid',
        authMW(objRepo),
        getFestivalMW(objRepo),
        getTicketMW(objRepo),
        deleleteTicketMW(objRepo),
        renderMW(objRepo));
};