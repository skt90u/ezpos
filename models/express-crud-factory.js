var mongoose = require('mongoose');
var colors = require('colors');
var querystringUtils = require('querystring');
var _ = require('underscore');

var factory = function(modelName){

    return {
        
        create: function( querystring, model, callback ){
            model = _.extend( {}, querystringUtils.parse( querystring || '' ), model || {} );
            console.log( 'create ' + modelName );
            console.log( { model: model } );

            var Model = mongoose.model( modelName );
            var document = new Model( model ); 
            document.save( function( err, createdData, count ){
                if( err ){
                    console.log( ( 'failed to create ' + modelName ).red );
                    console.log( err.message.red );
                }
                else{
                    console.log( ( count + ' item(s) of ' + modelName + ' has been created' ).green ); 
                }
                callback( null, createdData );
            });
        },

        delete: function( id, querystring, callback ){
            var conditions = querystringUtils.parse( querystring || '' );
            if( id ){
                conditions = _.extend( {}, conditions, { _id: mongoose.Types.ObjectId( id ) } );
            }
            console.log( 'delete ' + modelName );
            console.log( { conditions: conditions } );

            var Model = mongoose.model( modelName );
            Model.remove( conditions, function( err, result ){
                if( err ){
                    console.log( ( 'failed to delete ' + modelName ).red );
                    console.log( err.message.red );
                }
                else{
                    console.log( ( result.result.n + ' item(s) of ' + modelName + ' has been deleted' ).green ); 
                }
                callback( null, result );
            });
        },

        read: function( querystring, callback ){
            var conditions = querystringUtils.parse( querystring || '' );
            console.log( 'read ' + modelName );
            console.log( { conditions: conditions } );

            var Model = mongoose.model( modelName );
            Model.find( conditions, function( err, result ){
                if( err ){
                    console.log( ( 'failed to read ' + modelName ).red );
                    console.log( err.message.red );
                }
                else{
                    console.log( ( result.length + ' item(s) of ' + modelName + ' has been read' ).green );
                }
                callback( null, result );
            });
        },

        readById: function( id, querystring, callback ){
            // id = '5542d8b5f3abc876a785881b';
            // querystring = 'id=5542d8b5f3abc876a785881b';
            var documentId = id || querystringUtils.parse( querystring || '' )['id'] || '';
            console.log( 'read ' + modelName + ' by id' );
            console.log( { id: id, querystring: querystring, documentId: documentId } );

            var Model = mongoose.model( modelName );
            Model.findById( documentId, function( err, result ){
                if( err ){
                    console.log( ( 'failed to read ' + modelName + ' by id' ).red );
                    console.log( err.message.red );
                }
                else{
                    var count = result ? 1 : 0;
                    console.log( ( count + ' item(s) of ' + modelName + ' has been read by id' ).green ); 
                }
                callback( null, result );
            });
        },

        update: function(id, querystring, model, callback){
            var arg1 = ( id && { _id: mongoose.Types.ObjectId( id ) } ) || {};
            var arg2 = querystringUtils.parse( querystring || '' );
            if(arg2.id){
                arg2._id = mongoose.Types.ObjectId( arg2.id );
                delete arg2.id;
            }
            var conditions = _.extend( {}, arg1, arg2 );

            console.log( 'update ' + modelName );
            console.log( { arg1: arg1, arg2: arg2, conditions: conditions } );

            var Model = mongoose.model( modelName );
            Model.update( conditions, { $set: model }, function( err, result ){
                if( err ){
                    console.log( ( 'failed to update ' + modelName ).red );
                    console.log( err.message.red );
                }
                else{
                    console.log( ( result.nModified + ' item(s) of ' + modelName + ' has been updated' ).green ); 
                }
                callback( null, result );
            });
        }
    };
};

module.exports = factory;
