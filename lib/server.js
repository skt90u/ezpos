var passport = require('passport'),
	express  = require( 'express' ),
	app      = express(),
	logger   = require( './logger' )(__filename),	
	config   = require( './config'),
	port     = config.port;

var options = {
	config: config,
	app: app,
	passport: passport
};

require( './config/mongoose' )( options );
require( './config/model' )( options );
//require( './config/passport' )( options );
//require( './config/express' )( options );

app.listen(port);
logger.info('listen port: {0}', port);

module.exports = app;
