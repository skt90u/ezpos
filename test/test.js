var modelName = 'employee',
    collectionName = modelName + 's'
    config = require('lib/config'),
    urljoin = require('url-join'),
    url = urljoin(config.crudApiRoot, modelName);

var context = describe,
    should = require('should'),  
    app = require('../server'),  
    config = require('lib/config'),
    request = require('supertest'),    
    agent = request.agent(app);
  
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



describe(collectionName, function () {

  describe('GET ' + url, function () {
    it('should respond with Content-Type text/html', function (done) {
      agent
      .del(url + 'aa')
      .expect(200)
      .end(done);
    });
  });

  describe('GET ' + url, function () {
    it('should respond with Content-Type text/html', function (done) {
      agent
      .get(url)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
    });
  });

  describe('POST ' + url, function () {
    it('should respond with Content-Type text/html', function (done) {
      agent
      .post(url)
      .send(data)
      .end(done);
    });
  });
    
  
  /*
  describe('DELETE ' + url, function () {
    it('should respond with Content-Type text/html', function (done) {
      agent
      .del(url)
      .expect(404)
      .end(done);  
    });    
  });  
  */
});