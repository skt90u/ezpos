// https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically

var mongoose = require( 'mongoose' ),
	config = require( 'lib/config' ),
	_ = require( 'underscore' ),
	fs = require( 'fs' ),
	path = require( 'path' ),
	Logger = require( 'lib/logger' ),
	logger = new Logger('Mocha.schema'),
	crudApiFactory = require( 'lib/crudApiFactory' );



describe('schema', function(){

	// this.timeout(5000);

	beforeEach(function(done) {
		if (mongoose.connection.db) return done();

	    mongoose.connection.on('open', done);
	    var options = { server: { socketOptions: {keepAlive: 1} } };
    	mongoose.connect(config.db, options);
	});	

	var dir = __dirname + '/' + '../testData/schema';
	
	fs.readdirSync( dir ).forEach( function( file ){
		if( path.extname( file ) !== '.js' ){
			return;
		}

		var data = require( dir + '/' + file );

		var modelName = path.basename( file, '.js' );

		var crudApi = crudApiFactory( modelName );

		// drop
		it('drop ' + modelName, function(done){
			console.log('drop ' + modelName + 's');
			mongoose.connection.collections[modelName + 's'].drop( function(err) {				
				return done(err);
			});
		});


		// create
		it('create ' + modelName, function(done){
			_.each(data, function(aData){
				crudApi.create( null, aData, function(err, result){
					//logger.info({err:err, result:result});
					return done(err);
				});
			});
		});

		// read
		it('read ' + modelName, function(done){
			crudApi.read('order=1', function(err, result){
				//logger.info({err:err, result:result});
				return done(err);
			});
		});

		// update
		it('update ' + modelName, function(done){
			crudApi.update(null, 'order=1', {category_code:123}, function(err, result){
				//logger.info({err:err, result:result});
				return done(err);
			});
		});

		// delete
		it('delete ' + modelName, function(done){
			crudApi.delete(null, 'order=1', function(err, result){
				//logger.info({err:err, result:result});
				return done(err);
			});
		});		
	});
});
