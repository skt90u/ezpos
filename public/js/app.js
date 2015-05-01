'use strict';

define([
	'angular',
	'angularAMD', 
	'angular-route'
], function(angular, angularAMD) {

	var app = angular.module('app', ['ngRoute']);
	
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
        .when("/contacts", {
          templateUrl: "partials/index.jade",
          controller: "ContactsIndexCtrl" })
        .when("/contacts/new", {
          templateUrl: "partials/edit.jade",
          controller: "ContactsEditCtrl" })
        .when("/contacts/:id", {
          templateUrl: "partials/show.jade",
          controller: "ContactsShowCtrl" })
        .when("/contacts/:id/edit", {
          templateUrl: "partials/edit.jade",
          controller: "ContactsEditCtrl" })
        .otherwise({ redirectTo: "/contacts" });
    }])
	.controller('employee_management', ['$scope', function($scope) {
		console.log('alla');
	}]);

	return app;
});


