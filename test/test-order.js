var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

// 訂單資訊
var schema = new Schema({
	// 訂單編號
	//_id: mongoose.Schema.Types.ObjectId,	
	// 客戶編號
	customer_id: mongoose.Schema.Types.ObjectId, 
	// 取貨方式代碼(自取，外送，宅配)
	delivery_option_code: Number, 
	// 送貨日期時間
    delivery_date: Date, 
	// 收貨人(資料來源為(1)客戶編號對應客戶資訊．(2)客戶編號對應過去訂單．)
    consignee: String, 
	// 送貨地址(手機或市話，資料來源為(1)客戶編號對應客戶資訊．(2)客戶編號對應過去訂單．)
    delivery_address: String, 
	// 電話
    phones: Array, 
	// 訂單狀態代碼
	// 1. 客戶下訂完成
	// 2. 店家確認訂單完成
	// 3. 店家定製商品
	// 4. 店家備貨完成
	// 5. 送貨完成｜通知收件人自取完成｜宅配寄送完成
	// 6. 店家確認訂單貨款結清';
	status_code: Number, 
	// 訂購日期
	order_date: Date,
	// 訂金
	down_payment: Number,
	// 備註說明
	remarks: Array 
});

module.exports = schema;