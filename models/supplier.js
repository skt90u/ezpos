var path = require('path'),
	modelName = path.basename(__filename, '.js'),
	mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// 廠商資訊
var schema = new Schema({
	// 廠商編號
	//_id: mongoose.Schema.Types.ObjectId,	
	// 廠商全名	
	full_name: String, 
	// 廠商簡稱
	nick_name: String, 
	// 統一編號(employer identification number)
    ein_number: String,
	// 發票抬頭	
    ein_title: String, 
	// 負責人
	representative: Number, 
	// 電話
	phones: Array, 
	// 傳真
    fax: String, 
	// 電子郵件
    email: String, 
	// 累積消費(進貨)金額
    spending_amount: Number,
	// 備註說明
    remarks: Array	
});

mongoose.model(modelName, schema);
console.log('mongoose create model: ' + modelName);
