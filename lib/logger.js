var colors = require( 'colors' ),
	path   = require( 'path' ),
	_      = require( 'underscore' );

function initialize( exports ){

	var methodInfos = [
		{method:'log',    color: colors.green   ( 'LOG    ' )},
		{method:'info',   color: colors.blue    ( 'INFO   ' )},
		{method:'warn',   color: colors.yellow  ( 'WARN   ' )},
		{method:'error',  color: colors.red     ( 'ERROR  ' )},
		{method:'assert', color: colors.magenta ( 'ASSERT ' )}
	];
	
	for(var i=0; i<methodInfos.length; i++){
		var methodInfo = methodInfos[i];
		exports[methodInfo.method] = logWithColor.bind(
				null, 
				methodInfo.color);
	}
};

function logWithColor(){

    var args       = [].slice.call(arguments);
	var color      = args.shift();
	var stackTrace = require('stack-trace');
	var trace      = stackTrace.get();
	var filepath   = trace[1].getFileName();
	var filename   = path.basename(filepath, '.js');
	var namespace  = colors.cyan( filename.toUpperCase() + ' ');
	var message    = formatMessage.apply( null, args );

	console.log( namespace + color + message);
}

function formatMessage()
{
	if( arguments.length == 1 && _.isObject( arguments[0] ) )
		return JSON.stringify( arguments[0] );

	var SKIP_INDEXES = 1,
		templateArgs = arguments,
		template     = templateArgs[0];

	var message = template.replace( /\{\d+\}/g, function( match ) {
		var index = + match.slice( 1 , -1 ),
		shiftedIndex = index + SKIP_INDEXES;

		if ( shiftedIndex < templateArgs.length ) {
			return templateArgs[shiftedIndex];
		}

		return match;
	});

	return message;
}

initialize(module.exports);
