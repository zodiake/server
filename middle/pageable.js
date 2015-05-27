module.exports = function(req, res, next) {
    return function() {
        var page = req.params.page || 1;
        var size = req.params.size || 10;
        req.pageable = new Page(page, size);
        next();
    }
}
