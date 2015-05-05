var express  = require( 'express' ),
    app      = express(),
	mongoose = require( 'mongoose' ),
	Logger   = require( 'lib/logger' ),
	logger   = new Logger( 'MAIN' ),
    port     = process.env.PORT || 3000;
require('lib/crudApiBinder')(app);
logger.info('listen port: {0}', port);

//var api = require('lib/crudApiFactory')('employee');
//api.create(null, {}, null);

app.listen(port);
