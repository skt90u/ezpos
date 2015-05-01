'use strict';

angular.module('app.controllers', ['datatables'])
.controller('employee_management', ['$scope', 'DTOptionsBuilder', 'DTColumnBuilder', function($scope, DTOptionsBuilder, DTColumnBuilder) {
	$scope.aaa = function(){alert('aaa');};
	$scope.abc = 'aabbcc';
	var vm = this;
	// fromSource
    vm.dtOptions = DTOptionsBuilder.fromSource('api/employees')
        .withScroller()
        .withOption('deferRender', true);
        // Do not forget to add the scorllY option!!!
        //.withOption('scrollY', 200);

    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('編號').notVisible(),
        DTColumnBuilder.newColumn('category_code').withTitle('類型'),
        DTColumnBuilder.newColumn('title_code').withTitle('職稱').notVisible(),
        DTColumnBuilder.newColumn('full_name').withTitle('真實姓名'),
        DTColumnBuilder.newColumn('nick_name').withTitle('簡稱'),

        DTColumnBuilder.newColumn('id_number').withTitle('身分證字號').notVisible(),
        DTColumnBuilder.newColumn('phone1').withTitle('電話1'),
        DTColumnBuilder.newColumn('phone2').withTitle('電話2').notVisible(),
        DTColumnBuilder.newColumn('address').withTitle('地址').notVisible(),
        DTColumnBuilder.newColumn('birthday').withTitle('生日').notVisible(),
        
        DTColumnBuilder.newColumn('take_office_date').withTitle('到職日').notVisible(),
        DTColumnBuilder.newColumn('leave_office_date').withTitle('離職日').notVisible(),
        DTColumnBuilder.newColumn('seniority').withTitle('年資').notVisible(),
        DTColumnBuilder.newColumn('experience').withTitle('經歷').notVisible(),
        DTColumnBuilder.newColumn('base_salary').withTitle('底薪').notVisible(),

        DTColumnBuilder.newColumn('bank_account_name').withTitle('銀行戶名').notVisible(),
        DTColumnBuilder.newColumn('bank_account_number').withTitle('銀行帳號').notVisible(),
        DTColumnBuilder.newColumn('remarks').withTitle('備註說明').notVisible(),

    ];
}]);

