var path = require('path'),
	modelName = path.basename(__filename, '.js'),
	mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// 員工資訊
var schema = new Schema({
	// 員工編號
	//_id: mongoose.Schema.Types.ObjectId,
	// 員工類型代碼(正職，時薪，NULL代表未設定)
	category_code: Number, 
	// 職稱代碼(1手，2手，3手，NULL代表未設定)
	title_code: Number,
	// 真實姓名	
    full_name: String, 
	// 暱稱
    nick_name: String, 
	// 身分證字號
    id_number: String, 
	// 電話
    phones: Array, 
	// 地址
	address: String, 
	// 生日
	birthday: Date, 
	// 性別代碼(男，女)
    gender_code: Number, 
	// 到職日
    take_office_date: Date, 
	// 離職日
	leave_office_date: Date, 
	// 年資
    seniority: Number, 
	// 經歷
	experience: String, 
	// 底薪
	base_salary: Number, 
	// 銀行戶名
	bank_account_name: String, 
	// 銀行帳號
	bank_account_number: String, 
	// 備註說明
	remarks: Array 
});

mongoose.model(modelName, schema);
console.log('mongoose create model: ' + modelName);
