module.exports = function () {
    return function (req, res, next) {

        res.locals.belepve = !!req.session.belepve;
        next();
    };
};