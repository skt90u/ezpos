// https://www.npmjs.com/package/express-crud
// https://msdn.microsoft.com/zh-tw/library/system.net.httpstatuscode%28v=vs.110%29.aspx

var _ = require('underscore');

var employees = [
    {
        id: 1,
        category_code: 1, // 員工類型代碼(正職，時薪，NULL代表未設定)
        title_code: 1, // 職稱代碼(1手，2手，3手，NULL代表未設定)
        full_name: '蘇家興',
        nick_name: '阿興',
        id_number: 'H123272551',
        phone1: '0928873075',
        phone2: '03-341-3069',
        address: '桃園市蘆竹區大竹路九號',
        birthday: '1985/06/15',
        take_office_date: '1985/06/15',
        leave_office_date: '',
        seniority: 7,
        experience: '從小看到大',
        base_salary: 10,
        bank_account_name: '',
        bank_account_number: '',
        remarks: ''
    },
    {
        id: 2,
        category_code: 2, // 員工類型代碼(正職，時薪，NULL代表未設定)
        title_code: 3, // 職稱代碼(1手，2手，3手，NULL代表未設定)
        full_name: '蘇國棟',
        nick_name: '阿動',
        id_number: 'H123272552',
        phone1: '0921859698',
        phone2: '03-341-1515',
        address: '桃園市蘆竹區大竹路九號',
        birthday: '1982/08/15',
        take_office_date: '1982/08/15',
        leave_office_date: '',
        seniority: 7,
        experience: '從小看到大',
        base_salary: 20,
        bank_account_name: '',
        bank_account_number: '',
        remarks: ''
    },
];

module.exports = {
  
  create:   function(querystring, model, callback){
    
    employees.push(_.clone(model));
    
    _.sortBy(employees, function(employee) { return employee.id; })
  },

  delete:   function(id, queryString, callback){
    
    var match = _.findWhere(employees, {id: parseInt(id)});
    
    if(match){
        employees = _.without(employees, match);
        callback(null);
    }
    else{
        callback({status: 404});
    }
  },

  read: function(queryString, callback){    
    
    callback(null, employees);
  },

  readById: function(id, queryString, callback){
    
    var match = _.findWhere(employees, {id: parseInt(id)});
    
    if (match) {
        callback(null, match);
    }
    else{
        callback({status: 404});
    }
  },

  update:   function(id, queryString, model, callback){
    
    var match = _.find(employees, {id: parseInt(id)});
    
    if (match) {
        _.each(function(employee){
            employee = _.clone(model);
        });
        callback(null);
    }
    else{
        callback({status: 404});
    }
  }
};