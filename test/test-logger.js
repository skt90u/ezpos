// https://visionmedia.github.io/superagent/
process.env.NODE_ENV = 'development';

var rekuire = require( 'rekuire' ),
	logger  = rekuire( 'logger' );

describe( 'test logger ', function() {

	it( 'run all logger methods', function(done) {

		var methods = getAllMethods(logger);

		for(var i=0; i<methods.length; i++){

			var method = methods[i];

			logger[method]('Logger#' + method);
		}

		done();
	});
});

function getAllMethods(object) {

	//return Object.getOwnPropertyNames(object).filter(function(property) {
	//return typeof object[property] == 'function';
	//});

	var res = [];
	for(var m in object) {
		if(typeof object[m] == "function") {
			res.push(m)
		}
	}
	return res;
}