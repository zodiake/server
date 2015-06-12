module.exports = function(req, res, next) {
    return function() {
        console.log('ok');
        var page = req.query.page || 1;
        var size = req.query.size || 10;
        req.pageable = new Page(page, size);
        next();
    }
}
