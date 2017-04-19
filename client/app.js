
"use strict";
var myApp = angular.module('myApp',["ngRoute"]);

myApp.config(function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');

	$routeProvider.when('/',{
		templateUrl:'/views/list.html',
		controller:'listController'
	})	
	.when('/list',{
		templateUrl:'/views/list.html',
		controller:'listController'
	})

	.when('/list/details/:id',{
		controller:'listController',
		templateUrl: 'views/list_details.html'
	})

	.when('/list_E',{
		controller:'listController',
		templateUrl: 'views/list_E.html'
	})
	.when('/list_D',{
		controller:'listController',
		templateUrl: 'views/list_D.html'
	})

	.when('/list/edit/:id',{
		controller:'listController',
		templateUrl: 'views/editList.html'
	})

	.when('/addtoList',{
		templateUrl:'/views/addtoList.html',
		controller:'listController'
	});
});


