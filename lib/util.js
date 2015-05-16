function getAllMethods(object) {
	//return Object.getOwnPropertyNames(object).filter(function(property) {
	//return typeof object[property] == 'function';
	//});
	var res = [];
	for(var m in object) {
		if(typeof object[m] == "function") {
			res.push(m)
		}
	}
	return res;
}

module.exports = {
	getAllMethods: getAllMethods
};
