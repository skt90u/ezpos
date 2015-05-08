var express  = require( 'express' ),
    app      = express(),
    bodyParser = require('body-parser'),
    multer = require('multer'),
	mongoose = require( 'mongoose' ),
	Logger   = require( 'lib/logger' ),
	logger   = new Logger( __filename ),
	config   = require( 'lib/config'),
    port     = config.port;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

require('lib/crudBinder')(app);
logger.info('listen port: {0}', port);

//var api = require('lib/crudApiFactory')('employee');
//api.create(null, {}, null);

app.listen(port);

module.exports = app;