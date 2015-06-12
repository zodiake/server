var express = require('express');
var router = express.Router();
var pool = require('../service/pool');

router.get('/province', function(req, res) {
    pool.query('select * from province', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
});

router.get('/cities', function(req, res) {
    pool.query('select * from city', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
});

router.get('/', function(req, res) {
    pool.query('select * from address', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
});

module.exports = router;
