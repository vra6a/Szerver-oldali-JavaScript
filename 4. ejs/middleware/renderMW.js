/**
 * Kirajzolja az aktuális képet a felhasynálónak
 */


/*
const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        console.log('render: ' + viewName);
        res.render(viewName);
        //res.end('Template: ' + viewName);
    };

};
*/

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        if (req.session.belepve === 'undefined' || req.session.belepve === false) {
            res.locals.belepve = false;
        }
        else {
            res.locals.belepve = req.session.belepve;
        }
        res.render(viewName);
    };
};
