var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

// 客戶資訊
var schema = new Schema({ 
	// 客戶編號
	//_id: mongoose.Schema.Types.ObjectId,
	// 真實姓名
    full_name: String, 
	// 暱稱
    nick_name: String, 
	// 身分證字號
    id_number: String, 
	// 客戶類型代碼(一般客戶，早餐店，鄰居，批貨，NULL代表未設定)
    category_code: Number, 
	// 性別代碼(男，女)
    gender_code: Number, 
	// 生日
    birthday: Date,
	// 電話	
    phones: Array, 
	// 傳真
    fax: String, 
	// 電子郵件
    email: String, 
	// 統一編號(employer identification number)
    ein_number: String,
	// 發票抬頭	
    ein_title: String, 
	// 收件地址
    recipient_address: String, 
	// 聯絡地址
    contact_address: String, 
	// 累積消費金額
    spending_amount: Number,
	// 備註說明
	remarks: Array 	
});

module.exports = schema;
