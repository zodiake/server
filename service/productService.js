var pool = require('./pool');

function Product(name) {
    this.name = name;
}

var service = {
    findAll: function() {
        var result = [];
        pool.query('select * from product', function(err, rows, fields) {
            if (err) throw err;
            for (var i in rows) {
                result.push(new Product(i['name']));
            }
        });
        return result;
    },
    findOne: function(id) {
        pool.query('select * from product where id=?', [id], function(err, rows, fields) {

        })
    }
}
