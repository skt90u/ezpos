'use strict';

angular.module('app.controllers')
.controller('employee_management', ['$scope', function($scope) {
	$scope.aaa = function(){alert('aaa');};
	$scope.abc = 'aabbcc';
}]);