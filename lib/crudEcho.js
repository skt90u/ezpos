var logger           = require( './logger' )(__filename);

// step 1.
// require('express-crud')(app);
// app.crud( '/echo', require( 'lib/crudEcho' ));

// step 2.
// express-crud.model
// 為了確保能夠正確解析傳遞到 server 的 json
// app.use(bodyParser.json()); // for parsing application/json

// step 3.
// 使用postman

var echo = {

    // method -> POST
    // url    -> localhost:3000/echo?q1=1
    // header -> Content-Type = application/json
    // raw    -> {"aaa":"bbb"}
    // ----------------------------------------
    // result -> {
    //     "method": "create",
    //     "querystring": {
    //         "q1": "1"
    //     },
    //     "model": {
    //         "aaa": "bbb"
    //     }
    // }
    create: function( querystring, model, callback ){            
        logger.info({ method: 'create', arguments: arguments });
        callback && callback(null, { 
            method: 'create', 
            querystring: querystring,
            model: model
        });
    },

    // method -> DELETE
    // url    -> localhost:3000/echo/1?q1=1
    // header -> Content-Type = application/json
    // ----------------------------------------
    // result -> {
    //     "method": "delete",
    //     "id": "1",
    //     "querystring": {
    //         "q1": "1"
    //     }
    // }
    delete: function( id, querystring, callback ){
        logger.info({ method: 'delete', arguments: arguments });
        callback && callback(null, { 
            method: 'delete', 
            id: id, 
            querystring: querystring
        });
    },

    // method -> GET
    // url    -> localhost:3000/echo?q1=1
    // header -> Content-Type = application/json
    // ----------------------------------------
    // result -> [
    //     {
    //         "method": "read",
    //         "querystring": {
    //             "q1": "1"
    //         }
    //     }
    // ]
    read: function( querystring, callback ){

        logger.info({ method: 'read', arguments: arguments });
        callback && callback(null, [{ 
            method: 'read', 
            querystring: querystring
        }]);
    },

    // method -> GET
    // url    -> localhost:3000/echo/1?q1=1
    // header -> Content-Type = application/json
    // ----------------------------------------
    // result -> {
    //  "method": "readById",
    //  "id": "1",
    //  "querystring": {
    //      "q1": "1"
    //  }
    // }
    readById: function( id, querystring, callback ){
        logger.info({ method: 'readById', arguments: arguments });
        callback && callback(null, { 
            method: 'readById', 
            id: id, 
            querystring: querystring
        });
    },

    // method -> PUT
    // url    -> localhost:3000/echo/1?q1=1
    // header -> Content-Type = application/json
    // raw    -> {"aaa":"bbb"}
    // ----------------------------------------
    // result -> {
    //  "method": "update",
    //  "id": "1",
    //  "querystring": {
    //      "q1": "1"
    //  },
    //  "model": {
    //     "aaa": "bbb"
    //  }
    // }
    update: function(id, querystring, model, callback){
        logger.info({ method: 'update', arguments: arguments });
        callback && callback(null, { 
            method: 'update', 
            id: id, 
            querystring: querystring, 
            model: model 
        });
    }
};

module.exports = echo;
