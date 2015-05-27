var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config');

function createToken(phoneNumber) {
    return jwt.sign({
        foo: 'bar'
    }, config.secret);
}

router.post('/', function(req, res) {
    var phoneNumber = req.body.phoneNumber;
    res.send({
        id_token: createToken(phoneNumber)
    });

});


module.exports = router;
