var express = require('express');
var router = express.Router();
var pool = require('../service/pool');

router.get('/', function(req, res) {
    var page = ((req.query.page || 1) - 1) * 10,
        size = req.query.size * 1;

    pool.query('select * from product order by name limit ?,?', [page, size], function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
});

router.get('/:id', function(req, res) {
    pool.query('select * from product where id=?', [req.params.id], function(err, rows, field) {
        if (err) throw err;
        rows.forEach(function(item) {
            res.json(item);
        });
    });
});

module.exports = router;
