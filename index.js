var express  = require( 'express' ),
    app      = express(),
    port     = process.env.PORT || 3000;

require('lib/schema')(app);

app.listen(port);
