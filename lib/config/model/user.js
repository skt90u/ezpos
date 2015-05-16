var mongoose  = require( 'mongoose' ),
	Schema    = mongoose.Schema,
	path      = require( 'path' ),
	modelName = path.basename( __filename, '.js' );

// 使用者登入資訊
var schema = new Schema({ 
	// 使用者編號
	//_id: mongoose.Schema.Types.ObjectId,
    email: String, 
    password: String
});

module.exports = mongoose.model( modelName, schema );