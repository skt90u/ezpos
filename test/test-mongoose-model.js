// make it extremely unlikely that this test unintentionally drops someone's DB
var config    = require( 'lib/config' ),
    expect    = require( 'chai' ).expect,
    mongoose  = require( 'mongoose' ),
    modelName = 'employee',  
    Model     = require( 'lib/models/' + modelName ),
    collectionName = modelName + 's';

var data = {
    order: 1,
    category_code: 1, // 員工類型代碼(正職，時薪，NULL代表未設定)
    title_code: 1, // 職稱代碼(1手，2手，3手，NULL代表未設定)
    full_name: '蘇家興',
    nick_name: '阿興',
		
    id_number: 'H123272551',
    phones: ['0928873075', '03-341-3069'],
    address: '桃園市蘆竹區大竹路九號',
    birthday: new Date('1985-06-15'),
    gender_code: 1,
		
    take_office_date: new Date('1985-06-15'),
    leave_office_date: null,
    seniority: 7,
    experience: '從小看到大',
    base_salary: 10,
		
    bank_account_name: '',
    bank_account_number: '',
    remarks: []
};

describe( 'mongodb basic operations' , function() {
  
  before( function( done ) {
  	if ( mongoose.connection.db ) return done();
    
    mongoose.connection.on( 'error', done );
    mongoose.connection.on( 'open', done );

    var uri = config.db.uri;
    var options = config.db.options;    
    mongoose.connect( uri, options);
  });

  describe( 'drop collection', function() {
    it( 'drop collection', function(done) {
  		mongoose.connection.collections[ collectionName ].drop( function( err ) {
        Model.find({}, function(err, docs){
      	  expect(err).to.not.exist; 
          expect(docs).to.have.length(0);
          done();
        });    		
  		});
    });
  });

  describe( 'create a document', function() {
    it( 'create a document', function( done ) {
  		var document = new Model( data ); 
      document.save( function( err, createdData, count ){
        expect(err).to.not.exist; 
        Model.find({}, function(err, docs){
          expect(err).to.not.exist; 
          expect(docs).to.have.length(1);
          done();
        });
      });
    });
  });  

  describe( 'read documents', function() {
    it( 'read documents', function(done) {
      Model.find({}, function(err, docs){
        expect(err).to.not.exist; 
        expect(docs).to.have.length(1);
        done();
      });
    });
  });  

  describe( 'update a document', function() {
    it( 'update a document', function(done) {
        Model.update( { order: data.order}, { $set: { order: data.order + 1 } }, function( err, result ){
			   expect(err).to.not.exist; 
         expect(result).to.exist;  
         expect(result.ok).to.equal(1);
         expect(result.nModified).to.equal(1);
         expect(result.n).to.equal(1);           
			   done();
        });
    });
  });

  describe( 'delete a docuemnt', function() {
    it( 'delete a document', function(done) {
        Model.remove( { order: data.order + 1 }, function( err, result ){
         expect(err).to.not.exist; 
         expect(result).to.exist;           
         
         result = result.result;
         expect(result).to.exist;  
         expect(result.ok).to.equal(1);
         expect(result.n).to.equal(1); 
         done();
        });
    });
  });  
});