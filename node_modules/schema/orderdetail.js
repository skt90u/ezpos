var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

// 訂購品項資訊
var schema = new Schema({
	// 訂單品項編號
	//_id: mongoose.Schema.Types.ObjectId,	
	// 訂單編號	
	order_id: mongoose.Schema.Types.ObjectId, 
	// 商品編號
	product_id: mongoose.Schema.Types.ObjectId, 
	// 訂購數量
    quantity: Number, 
	// 訂購單位代碼(1個，1斤，1對，1盤)
    unit_code: Number, 
	// 單價
    unit_price: Number, 
	// 總價
    total_price: Number 
});

module.exports = schema;