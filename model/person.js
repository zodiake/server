var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.137:27017/test');

var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);

var kitty = new Kitten({
    name: 'tom'
});

kitty.save(function(err, res) {
    if (err) console.log('error');
    console.log('saved');
});
