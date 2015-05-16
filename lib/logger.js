var colors = require( 'colors' ),
	path   = require( 'path' ),
	_      = require( 'underscore' );

function logWithColor(){
    var args  = [].slice.call(arguments),
		namespace = args.shift(),
		color = args.shift();

	var message = formatMessage.apply( null, args );

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

function Logger( filename ){

	filename = filename || 'global';

	if(filename.indexOf('.js') != -1)
		filename = path.basename(filename, '.js');

	var namespace = colors.cyan( filename.toUpperCase() + ' ' );

	var methodInfos = [
		{method:'log',    color: colors.green   ( 'LOG    ' )},
		{method:'info',   color: colors.blue    ( 'INFO   ' )},
		{method:'warn',   color: colors.yellow  ( 'WARN   ' )},
		{method:'error',  color: colors.red     ( 'ERROR  ' )},
		{method:'assert', color: colors.magenta ( 'ASSERT ' )}
	];

	for(var i=0; i<methodInfos.length; i++){
		var methodInfo = methodInfos[i];
		this[methodInfo.method] = logWithColor.bind(
				this, 
				namespace, 
				methodInfo.color);
	}
};

module.exports = function( filename ){
	return new Logger( filename );
};
