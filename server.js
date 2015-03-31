var express = require('express'),
    expressHbs = require('express-handlebars'),
    routes = require('./routes'),
    path = require('path'),
    app = module.exports = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.set('views', __dirname + '/views');
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.get('/:name', routes.partials);
app.get('/', routes.index);    

app.listen(3000);