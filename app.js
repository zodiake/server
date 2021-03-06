var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var products = require('./routes/product');
var user = require('./routes/user');
var io = require('socket.io');
var cors = require('cors');


var wine = require('./routes/wine');
var bind = require('./routes/bind');
var order = require('./routes/order');
var address = require('./routes/address');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/products', products);
app.use('/user', user);
app.use('/address', address);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = http.Server(app);
var io = require('socket.io')(server);
io.on('connection', function(socket) {
    console.log("user come in");
    socket.emit('news', {
        title: 'world1234'
    });
    socket.on('my other event', function(data) {
        console.log(data);
    });
});
server.listen(3000);
