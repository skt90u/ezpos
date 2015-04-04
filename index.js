var express = require('express'),
    expressHbs = require('express-handlebars'),
    routes = require('./routes'),
    path = require('path'),
    _ = require('underscore'),
    app = module.exports = express();

require('express-crud')(app);

_.each(['employees'], function(modelName){
  app.crud('/api/' + modelName, require('./models/' + modelName));  
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.set('views', __dirname + '/views');
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.get('/api/:/:id', function(req, res) {
    res.send({id:req.params.id, name: req.params.name, description: "description"});
});
//app.get('/api', function(){});
app.get('/:name', routes.partials);
app.get('/', routes.index);    
app.listen(3000);
