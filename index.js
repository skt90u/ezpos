var path = require('path'),
    _ = require('underscore'),
	express = require('express'),
    expressHbs = require('express-handlebars'),
    routes = require('./lib/routes'),
    app = module.exports = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

require('express-crud')(app);

_.each(['employees'], function(modelName){
  app.crud('/api/' + modelName, require('./lib/models/' + modelName));  
});

app.set('views', __dirname + '/views');
app.engine('html', expressHbs({extname:'html', defaultLayout: 'main'}));
app.set('view engine', 'html');

app.get('/:name', routes.partials);
app.get('/', routes.index);    

app.listen(3000);
