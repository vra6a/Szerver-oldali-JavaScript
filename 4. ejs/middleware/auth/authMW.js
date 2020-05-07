/**
 * Ha a felhasználó be van jelentkeyve akkor az admin felületet látja, ahol szerkeszthet,
 * ha nincs belépve, akkor pedik csak listázni tud az oldalakon
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.session.belepve === 'undefined' || req.session.belepve !== true) {
            return res.redirect('/login');
        }
        next();
    };
};