var assert = require("assert"); // node.js core module

describe('Array', function(){
  describe('#indexOf()', function(){
      it('should return -1 when the value is not present', function(){
	        assert.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
	      })
    })
});

describe('api', function(){
  describe('GET /api/users', function(){
    it('respond with an array of users')
  })
});


describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if (err) throw err;
        done();
      });
    })
  })
});

describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
	console.log('before ...');
  })
  after(function(){
    // runs after all tests in this block
	console.log('after ...');
  })
  beforeEach(function(){
    // runs before each test in this block
	console.log('beforeEach ...');
  })
  afterEach(function(){
    // runs after each test in this block
	console.log('afterEach ...');
  })
  // test cases
describe('app', function(){
  describe('GET /users', function(){
    it('with an array of users')
  })
});
})


//describe('a suite of tests', function(){
//	console.log('a');
//  this.timeout(100);
//console.log('b');
//  it('should take less than 500ms', function(done){
//    setTimeout(done, 300);
//  })
//
//  it('should take less than 500ms as well', function(done){
//    setTimeout(done, 300);
//  })
//})





 function User(name){
	this.name = name;	
};

User.prototype.save = function(callback){
	setTimeout(function(){
		console.log('aaa');
		callback(null);
	},1000);
};
