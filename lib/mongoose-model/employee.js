var mongoose  = require( 'mongoose' ),
	Schema    = mongoose.Schema,
	path      = require( 'path' ),
	modelName = path.basename( __filename, '.js' );

// 員工資訊
var schema = new Schema({
	// 員工編號
	//_id: mongoose.Schema.Types.ObjectId,
	order: Number, 	
	category_code: Number, // 員工類型代碼(正職，時薪，NULL代表未設定)	
	title_code: Number, // 職稱代碼(1手，2手，3手，NULL代表未設定)	
    full_name: String, // 真實姓名		
    nick_name: String, // 暱稱
	
    id_number: String, // 身分證字號	
    phones: Array, // 電話	
	address: String, // 地址	
	birthday: Date, // 生日	
    gender_code: Number, // 性別代碼(男，女)
	
    take_office_date: Date, // 到職日	
	leave_office_date: Date, // 離職日	
    seniority: Number, // 年資	
	experience: String, // 經歷	
	base_salary: Number, // 底薪	
	
	bank_account_name: String, // 銀行戶名	
	bank_account_number: String, // 銀行帳號	
	remarks: Array // 備註說明
});

module.exports = mongoose.model( modelName, schema );