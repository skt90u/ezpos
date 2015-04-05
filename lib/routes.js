var api = require('./api');
/*
 * GET home page.
 */

exports.index = function(req, res){

  var menuItems = api.getMenuItems();
    
  res.redirect(menuItems[0].href);	
};

exports.partials = function (req, res) {
  
  var name = req.params.name;
  
  res.render(name , {
	menuItems: api.getMenuItems(name)
  });
};