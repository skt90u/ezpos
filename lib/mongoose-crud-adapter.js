var rekuire  = require( 'rekuire' ),
    _        = rekuire( 'underscore' ),
	path     = rekuire( 'path' ),
	mongoose = rekuire( 'mongoose' ),
	logger   = rekuire( 'logger' );

var adapter = function( modelName ){

	var Model = rekuire( modelName );

    return {
        
        create: function( querystring, model, callback ){
            
            logger.info({ method: 'create', arguments: arguments });

            model = _.extend( {}, querystring || {}, model || {} );
            
            logger.info( 'create {0}', modelName );
            logger.info( { model: model } );
			
            var document = new Model( model ); 
            document.save( function( err, createdData, count ){
                if( err ){
                	logger.error( err.message );
                }
                else{
                	logger.info( '{0} item(s) has been created', count );
                }
				callback && callback(null, createdData);
            });
        },

        delete: function( id, querystring, callback ){

            logger.info({ method: 'delete', arguments: arguments });

            var conditions = querystring || {};
            if( id ){
                conditions = _.extend( {}, conditions, { _id: mongoose.Types.ObjectId( id ) } );
            }

            logger.info( 'delete {0}', modelName );
            logger.info( { conditions: conditions } );

            Model.remove( conditions, function( err, result ){
                if( err ){
                    logger.error( err.message );
                }
                else{
                    logger.info( '{0} item(s) has been deleted', result.result.n ); 
                }
				callback && callback(null, result);
            });
        },

        read: function( querystring, callback ){

            logger.info({ method: 'read', arguments: arguments });

            // querystring is a object
            querystring = querystring || {};

            logger.info( 'read {0}', modelName);
            logger.info( { querystring: querystring } );

            Model.find( querystring, function( err, result ){
                if( err ){
                    logger.error( err.message );
                }
                else{
                    logger.info( '{0} item(s) has been read', result.length );
                }
				callback && callback(null, result);
            });
        },

        readById: function( id, querystring, callback ){

            logger.info({ method: 'readById', arguments: arguments });

            // id = '5542d8b5f3abc876a785881b';
            // querystring = 'id=5542d8b5f3abc876a785881b';
            var documentId = id || querystringUtils.parse( querystring || '' )['id'] || '';

            logger.info( 'read {0} by id', modelName );
            logger.info( { id: id, querystring: querystring, documentId: documentId } );

            Model.findById( documentId, function( err, result ){
                if( err ){
                    logger.error( err.message );
                }
                else{
                    var count = result ? 1 : 0;
                    logger.info( '{0} item(s) has been read by id', count ); 
                }
				callback && callback(null, result);
            });
        },

        update: function(id, querystring, model, callback){

            logger.info({ method: 'update', arguments: arguments });
                        
            var arg1 = ( id && { _id: mongoose.Types.ObjectId( id ) } ) || {};
            var arg2 = querystring || {};
            if(arg2.id){
                arg2._id = mongoose.Types.ObjectId( arg2.id );
                delete arg2.id;
            }
            var conditions = _.extend( {}, arg1, arg2 );
            logger.info( 'update {0}', modelName );
            logger.info( { arg1: arg1, arg2: arg2, conditions: conditions } );

            Model.update( conditions, { $set: model }, function( err, result ){
                if( err ){
                    logger.error( err.message );
                }
                else{
                    logger.info( '{0} item(s) has been updated', result.nModified ); 
                }
				callback && callback(null, result);
            });
        }
    };
};

module.exports = adapter;
