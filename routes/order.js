var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var config = require('../config');


var jwtCheck = jwt({
    secret: config.secret
});

router.use(jwtCheck);

router.post('/', function(req, res) {
    console.log(req.user);
    res.json({
        haha: 'haha'
    })
});

module.exports = router;
