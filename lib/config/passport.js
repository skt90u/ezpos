var logger       = require( 'lib/logger' )( __filename );
var local_login  = require('./passport/local_login');
var local_signup = require('./passport/local_signup');
//var google       = require('./passport/google');
//var facebook     = require('./passport/facebook');
//var twitter      = require('./passport/twitter');
//var linkedin     = require('./passport/linkedin');
//var github       = require('./passport/github');

module.exports = function ( options ) {

	var passport = options.passport;

	passport.serializeUser(function(user, done) {
		done(null, user.id)
	})

	passport.deserializeUser(function(id, done) {
		var User = mongoose.model('user');
		User.findById(id, function(err, user){
			done(err, user);
		});
	})

	// use these strategies
	passport.use(local_login);
	//passport.use(local_signup);
	//passport.use(google);
	//passport.use(facebook);
	//passport.use(twitter);
	//passport.use(linkedin);
	//passport.use(github);
};
