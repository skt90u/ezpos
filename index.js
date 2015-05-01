var fs       = require( 'fs' ),
	config   = require( 'config' ),
    path     = require( 'path' ),
    mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    app      = express(),
    port     = process.env.PORT || 3000;

require('schema')(app);

app.listen(3000);
