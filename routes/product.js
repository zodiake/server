var express = require('express');
var router = express.Router();
var pageable = require('./middleware/pageable');

console.log(pageable);

var list = [{
    id: 1,
    name: 'wine1'
}, {
    id: 2,
    name: 'wine2'
}, {
    id: 3,
    name: 'wine3'
}, {
    id: 4,
    name: 'wine4'
}, {
    id: 5,
    name: 'wine5'
}, {
    id: 6,
    name: 'wine6'
}, {
    id: 7,
    name: 'wine7'
}, {
    id: 8,
    name: 'wine8'
}, {
    id: 9,
    name: 'wine9'
}, {
    id: 10,
    name: 'wine10'
}];

router.use('/', pageable);

router.get('/', function(req, res) {
    console.log('pageable:' + req.pageable);
    res.json(list);
});

module.exports = router;
