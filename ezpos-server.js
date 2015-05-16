var rekuire  = require( 'rekuire' ),
	passport = rekuire( 'passport' ),
	express  = rekuire( 'express' ),
	logger   = rekuire( 'logger' ),
	config   = rekuire( 'config'),
	port     = config.port,
	app      = express();

var options = {
	config: config,
	app: app,
	passport: passport
};

rekuire( 'bootstrap-mongoose' )    ( options );
rekuire( 'bootstrap-express-crud' )( options );
rekuire( 'bootstrap-passport' )    ( options );
//rekuire( './config/express' )( options );

app.listen(port);
logger.info('listen port: {0}', port);

module.exports = app;
