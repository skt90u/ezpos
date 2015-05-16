// https://visionmedia.github.io/superagent/
process.env.NODE_ENV = 'development';

var util   = require('../lib/util'),
	logger = require('../lib/logger')(__filename);

describe( 'test logger ', function() {

	it( 'log info', function(done) {
		var methods = util.getAllMethods(logger);
		for(var i=0; i<methods.length; i++){
			var method = methods[i];
			logger[method]('I am ' + method);
		}
		done();
	});
});
