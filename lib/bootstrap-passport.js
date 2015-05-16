var rekuire      = require( 'rekuire' ),
	express  = require('express'),
	cookieParser = rekuire( 'cookie-parser' ),
	bodyParser   = rekuire( 'body-parser' ),
	session      = rekuire( 'express-session' ),
	flash        = rekuire( 'connect-flash' ),
	logger       = rekuire( 'logger' ),
	User         = rekuire( 'user' ),
	local_login  = rekuire( 'local-login' ),
	local_signup = rekuire( 'local-signup' );
//	google     = rekuire( 'google'),
//	facebook   = rekuire( 'facebook'),
//	twitter    = rekuire( 'twitter'),
//	linkedin   = rekuire( 'linkedin'),
//	github     = rekuire( 'github'),

var bootstrap = function ( options ) {

	var passport = options.passport;
	var app      = options.app;

	passport.serializeUser(function(user, done) {
		done(null, user.id)
	})

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user){
			done(err, user);
		});
	})

	// use these strategies
	passport.use('local-login', local_login);
	passport.use('local-signup', local_signup);
	//passport.use(google);
	//passport.use(facebook);
	//passport.use(twitter);
	//passport.use(linkedin);
	//passport.use(github);

	app.use(cookieParser()); // read cookies (needed for auth)
	app.use(bodyParser.json()); // get information from html forms
	app.use(bodyParser.urlencoded({ extended: true }));	

	app.set('view engine', 'ejs'); // set up ejs for templating
	
	// required for passport
	app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session	

	////////////////////////////////////////
	// routes
	////////////////////////////////////////

	

	////////////////////////////////////////

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    ////////////////////////////////////////

    // show the login form
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    ////////////////////////////////////////

    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));    
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

module.exports = bootstrap;