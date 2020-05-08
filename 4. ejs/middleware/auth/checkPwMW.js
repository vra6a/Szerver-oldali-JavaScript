/**
 * Ha a felhasználó által beírt jelszó megegyezik az admin jelszóval,
 * akkor beléphet és szerkesztheti az oldalt
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }
        if (req.body.password === 'admin') {
            req.session.belepve = true;
            return req.session.save(err => res.redirect('/'));
        }

        next();
    };
};
