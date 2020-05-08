/**
 * Ment egy fesztivált
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const FestivalModel = requireOption(objectrepository, 'FestivalModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.datum === 'undefined' ||
            typeof req.body.helyszin === 'undefined'
        ) {
            return next();
        }
        if (typeof res.locals.festival === 'undefined') {
            res.locals.festival = new FestivalModel();
        }
        

        res.locals.festival.nev = req.body.nev;
        res.locals.festival.datum = req.body.datum;
        res.locals.festival.helyszin = req.body.helyszin;

        res.locals.festival.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};