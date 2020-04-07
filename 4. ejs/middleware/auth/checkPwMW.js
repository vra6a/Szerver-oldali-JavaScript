/**
 * Ha a felhasználó által beírt jelszó megegyezik az admin jelszóval,
 * akkor beléphet és szerkesztheti az oldalt
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};