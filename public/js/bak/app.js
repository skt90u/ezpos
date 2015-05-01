'use strict';

angular.module('app.controllers', []);

angular.module('app', ['app.controllers', 'datatables'])
.config(['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
}]);