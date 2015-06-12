var express = require('express');
var router = express.Router();
var pool = require('../service/pool');
var jwt = require('jsonwebtoken');
var config = require('../config');

router.post('/login', function(req, res) {
    var name = req.params.name;
    var password = req.params.password;
    var token = jwt.sign({
        username: name
    }, config.secret);
    res.json({
        status: 'success',
        token: token
    });
});

router.post('/signup', function(req, res) {
    var name = req.params.name,
        password = req.params.password;
    pool.query('insert into usr set ?', {
        name: name,
        password: password
    }, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows.insertId);
    });
});

router.get('/addresses', function(req, res) {
    var userId = req.query.id;
    pool.query('select * from address where user_id=?', [userId], function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
});
module.exports = router;
