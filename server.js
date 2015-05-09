var logger   = require( 'lib/logger' )(__filename),
    express  = require( 'express' ),
    app      = express(),
    config   = require( 'lib/config'),
    port     = config.port;

//    multer = require('multer'),
//    bodyParser = require('body-parser'),
//    cookieParser = require('cookie-parser'),
//    session = require('express-session'),

var options = {
    config: config,
    app: app
};

require( 'lib/config/mongoose' )( options );
require( 'lib/config/models' )( options );
//require( 'lib/config/passport' )( options ); // Bootstrap passport config
//require( 'lib/config/express')(app, passport); // Bootstrap application settings
//require( 'lib/config/routes')(app, passport); // Bootstrap routes


// 為了存取 cookies
//app.use(cookieParser());
// app.get('/', function(req, res) {
//   console.log("Cookies: ", req.cookies);
//   res.send('hello world');
// });

/*
app.use(multer()); // for parsing multipart/form-data
app.use(cookieParser());
app.use(session({secret: 'blog.fens.me', cookie: { maxAge: 60000 }}));
app.use(passport.initialize());
app.use(passport.session());
*/

/*
app.get('/', function(req, res) {
  res.send('hello world');
});

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use('local', new LocalStrategy(
    function (username, password, done) {
        console.log({method: 'register', arguments: arguments});



        var user = {
            id: '1',
            username: 'admin',
            password: 'pass'
        }; // 可以配置通过数据库方式读取登陆账号

        if (username !== user.username) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (password !== user.password) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
    }
));

passport.serializeUser(function (user, done) {//保存user对象
    console.log({method: 'serializeUser', arguments: arguments});
    done(null, user);//可以通过数据库方式操作
});

passport.deserializeUser(function (user, done) {//删除user对象
    console.log({method: 'deserializeUser', arguments: arguments});
    done(null, user);//可以通过数据库方式操作
});

app.use(cookieParser());
app.use(session({secret: 'blog.fens.me', cookie: { maxAge: 60000 }}));
app.use(passport.initialize());
app.use(passport.session());


app.post('/login',
  passport.authenticate('local', 
    { successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: 'Invalid username or password.',
      successFlash: 'Welcome!' 
    }
));

app.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  });
*/


app.listen(port);
logger.info('listen port: {0}', port);

module.exports = app;