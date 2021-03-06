// https://visionmedia.github.io/superagent/
process.env.NODE_ENV = 'development';

var rekuire        = require( 'rekuire' ),
    context        = describe,
    should         = rekuire( 'should' ),
    expect         = rekuire( 'chai' ).expect,
    request        = rekuire( 'supertest' ),
    mongoose       = rekuire( 'mongoose' ),
    urljoin        = rekuire( 'url-join'),
    querystring    = rekuire( 'querystring' ),
    _              = rekuire( 'underscore' ),
    async          = rekuire( 'async' ),
    app            = rekuire( 'ezpos-server' ),
    agent          = request.agent(app),
    config         = rekuire( 'config' ),
    modelName      = 'employee',  
    collectionName = modelName + 's',
    url            = urljoin(config.crudApiRoot, modelName);    
    Model          = rekuire( modelName ),
    createdData    = [];

// not working
//var data = require( './data/' + modelName + '.json');
var data = {
    order: 1,
    category_code: 1,
    title_code: 1,
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

describe( 'express-crud operations' , function() {

	describe( 'POST ' + url, function() {

		it( 'create by querystring', function(done) {
			agent
			.post(url + '?' + querystring.stringify(data))
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) { 
				expect(err).to.not.exist;  
				var doc = res.body;       
				expect(doc.full_name).to.equal(data.full_name);   
				createdData.push(doc);
				done();
			});
		});

		it( 'create by form data', function(done) {
			agent
			.post(url)
			.set('Accept', 'application/x-www-form-urlencoded')
			.send(data)
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) { 
				expect(err).to.not.exist;  
				var doc = res.body;       
				expect(doc.full_name).to.equal(data.full_name);   
				createdData.push(doc);
				done();
			});
		});
	}); 

	describe( 'GET' + url, function() {

		it( 'read by querystring', function(done) {
			agent
			.get(url + '?full_name=' + data.full_name)
			.expect('Content-Type', /json/)
			.expect(200)      
			.end(function(err, res) {
				expect(err).to.not.exist;  
				var docs = res.body;
				expect(docs.length).to.equal(2);
				done();
			});
		});

		it( 'read by id', function(done) {
			agent
			.get(url + '/' + createdData[0]._id)
			.expect('Content-Type', /json/)
			.expect(200)      
			.end(function(err, res) {
				expect(err).to.not.exist;  
				var doc = res.body;
				expect(doc).to.exist;  
				done();
			});
		});
	}); 

	describe( 'PUT ' + url, function() {
		it( 'update by id', function(done) {
			agent
			.put(url + '/' + createdData[0]._id)
			.set('Accept', 'application/x-www-form-urlencoded')
			.send({category_code: data.category_code + 100})
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err, res) {
				expect(err).to.not.exist;
				var result = res.body;
				expect(result).to.exist;  
				expect(result.ok).to.equal(1);
				expect(result.nModified).to.equal(1);
				expect(result.n).to.equal(1);
				done();
			});
		});
	});

	describe( 'DELETE ' + url, function() {
		it( 'delete by id', function(done) {
			async.forEach(createdData, function (aData, callback) {
				agent
				.del(url + '/' + aData._id)
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function(err, res) {
					if(err)return callback(err);
					var result = res.body;
					expect(result).to.exist;
					expect(result.ok).to.equal(1);
					expect(result.n).to.equal(1);
					callback();
				});
			},
			function (err) {
				expect(err).to.not.exist;  
				done();
			});
		});
	});

});
