var _ = require('underscore');

exports.getMenuItems = function(selectedHref) {

  var menuItems = [
      {
          href: '/employee_management',
          icon: 'icon-tile-employee',
          name: '員工資料',
      },
      {
          href: '/customer_management',
          icon: 'icon-tile-customer',
          name: '客戶資料',
      },
      {
          href: '/supplier_management',
          icon: 'icon-tile-supplier',
          name: '廠商資料',
      },
      {
          href: '/product_management',
          icon: 'icon-tile-product',
          name: '商品資料',
      },
  ];  

  _.each(menuItems, function(menuItem){
    menuItem.selected = (selectedHref !== void 0) ? menuItem.href.slice(1) == selectedHref : false;
  });

  return menuItems;
};

