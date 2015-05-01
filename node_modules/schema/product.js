var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

// 商品資訊
var schema = new Schema({
	// 商品編號
	//_id: mongoose.Schema.Types.ObjectId,	
	// 商品名稱	
	name: String, 
	// 商品類型代碼(NULL表示未設定)
	category_code: Number, 
	// 條碼內容
    barcode: String, 
	// 成本，進貨價(NULL表示未設定)
    prime_cost: Number, 
	// 員工價(NULL表示未設定)
    staff_price: Number, 
	// 售價(NULL表示未設定)
    selling_price: Number, 
	// 商品狀態代碼(例如；有效，無效，...；NULL表示未設定)
    status_code: Number, 
	// 供貨廠商編號(NULL表示未設定)
    supplier_id: mongoose.Schema.Types.ObjectId, 
	// 備註說明
    remarks: Array
});

module.exports = schema;