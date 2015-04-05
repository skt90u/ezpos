'use strict';

angular.module('app.controllers', ['datatables'])
.controller('employee_management', ['$scope', 'DTOptionsBuilder', 'DTColumnBuilder', function($scope, DTOptionsBuilder, DTColumnBuilder) {
	$scope.aaa = function(){alert('aaa');};
	$scope.abc = 'aabbcc';
	var vm = this;
	// fromSource
    vm.dtOptions = DTOptionsBuilder.fromSource('api/employees')
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('full_name').withTitle('First name'),
        DTColumnBuilder.newColumn('nick_name').withTitle('Last name').notVisible()
    ];
}]);


