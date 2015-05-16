var mongoose = require( 'mongoose' ),
	logger   = require( '../logger' )(__filename);

// please make sure your MongoDB has been started via command 'mongod'	  
var bootstrapDb = function( options ) {
	
	var db_uri     = options.config.db.uri;
	var db_options = options.config.db.options;

	if(mongoose.connection.db) {
		return;
	}

    mongoose.connection.on( 'error',         logger.error);
    mongoose.connection.on( 'disconnected',  function(){logger.info('{0} has been disconnected, retry to connect database', db_uri); bootstrapDb( options ); } );
    mongoose.connection.on( 'connecting',    function(){logger.info('connecting to {0}', db_uri );});
    mongoose.connection.on( 'connected',     function(){logger.info('{0} has been connected', db_uri );});
    mongoose.connection.on( 'disconnecting', function(){logger.info('disconnecting from {0}', db_uri );});
    mongoose.connection.on( 'open',          function(){logger.info('{0} has been opened', db_uri );});

	mongoose.connect( db_uri, db_options );
};

module.exports = bootstrapDb;
