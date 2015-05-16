var rekuire     = require( 'rekuire' ),
	path        = rekuire( 'path' ),
	fs          = rekuire( 'fs' ),
	urljoin     = rekuire( 'url-join' ),
	bodyParser  = rekuire( 'body-parser'),
	crudAdapter = rekuire( 'mongoose-crud-adapter' ),
	logger      = rekuire( 'logger' );
	    
var bootstrap = function( options ) {

	var config = options.config;
	var app    = options.app;

    rekuire('express-crud')(app);

    // express-crud.model
	// 為了確保能夠正確解析傳遞到 server 的 json
	// 相關參數: https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
	app.use(bodyParser.json()); // for parsing application/json
	// express-crud似乎用不到urlencoded
	//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

	var dir = path.join( __dirname, 'mongoose-model' );

	fs.readdirSync( dir ).forEach( function( file ){
		
  		if (!/\.js$/.test(file)) return

		var modelName = path.basename( file, '.js' );
		
		var url = urljoin(config.crudApiRoot, modelName);

		logger.info( 'support {0}\'s crud api at {1}', modelName, url );

		app.crud( url, crudAdapter( modelName ));
	});

	// postman 額外測試
	app.crud( '/echo', rekuire( 'crud-echo' ));
};

module.exports = bootstrap;
