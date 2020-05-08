const authMW = require('../middleware/auth/authMW');
const checkPwMW = require('../middleware/auth/checkPwMW');
const logoutMW = require('../middleware/auth/logoutMW');
const renderMW = require('../middleware/renderMW');
const checkLoggedInMW = require('../middleware/auth/checkLoggedInMW');

const deleteFestivalMW = require('../middleware/festival/deleteFestivalMW');
const getFestivalsMW = require('../middleware/festival/getFestivalsMW');
const getFestivalMW = require('../middleware/festival/getFestivalMW');
const saveFestivalMW = require('../middleware/festival/saveFestivalMW');

const deleleteTicketMW = require('../middleware/ticket/deleleteTicketMW');
const getTicketsMW = require('../middleware/ticket/getTicketsMW');
const getTicketMW = require('../middleware/ticket/getTicketMW');
const saveTicketMW = require('../middleware/ticket/saveTicketMW');
const FestivalModel = require('../models/festival');
const TicketModel = require('../models/Ticket');

module.exports = function (app) {
    const objRepo = {FestivalModel: FestivalModel,
                        TicketModel: TicketModel};

    app.use(
        checkLoggedInMW())

    app.use('/festivals/new',
        authMW(objRepo),
        (req, res, next) => {
            res.locals.festivalid = req.params.festivalid;
            return next();
        },
        saveFestivalMW(objRepo),
        renderMW(objRepo, 'uj_fesztival'));

    app.use('/festivals/delete/:festivalid',
        authMW(objRepo),
        deleteFestivalMW(objRepo),
        renderMW(objRepo, 'index'));

    
    app.use('/festivals/edit/:festivalid',
        authMW(objRepo),
        getFestivalMW(objRepo),
        saveFestivalMW(objRepo),
        renderMW(objRepo, 'editfest'));



    app.use('/tickets/:festivalid/new',
        authMW(objRepo),
        (req, res, next) => {
            res.locals.festivalid = req.params.festivalid;
            return next();
        },
        saveTicketMW(objRepo),
        renderMW(objRepo, 'uj_jegy'));

    app.use('/tickets/:ticketid/edit',
        authMW(objRepo),
        getTicketMW(objRepo),
        saveTicketMW(objRepo),
        renderMW(objRepo, 'editjegy'));
        //az uj_jegy es a szerk_jegy ugyan az az oldal, mindössze 1 sorban tér el

    app.get('/tickets/:ticketid/delete',
        authMW(objRepo),
        deleleteTicketMW(objRepo)),

    app.get('/tickets/:festivalid',
    (req, res, next) => {
        res.locals.festivalid = req.params.festivalid;
        return next();
    },
    getTicketsMW(objRepo),
    renderMW(objRepo, 'jegyek'));

    app.use('/logout',
        logoutMW(objRepo));

    app.use('/login',
        checkPwMW(objRepo),
        renderMW(objRepo, 'login'));

    app.get('/',
        getFestivalsMW(objRepo),
        renderMW(objRepo, 'index'));

    
};