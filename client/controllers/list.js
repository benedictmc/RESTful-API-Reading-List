var myApp = angular.module('myApp');

myApp.controller('listController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	$scope.getList = function(){
		$http.get('api/list').then(successCallback, errorCallback);

		function successCallback(response){
		    $scope.list = response.data;
		    	
		}
		function errorCallback(error){
		    alert("hello");
		}
	}

	
	$scope.getOneofList = function(){
		var id = $routeParams.id;
		$http.get('/api/list/'+id).then(successCallback, errorCallback);
		function successCallback(response){
			$scope.x = response.data;
		}
		function errorCallback(error){
		    alert("hello");
		}

	}

	$scope.addListItem = function(){
		console.log($scope.x);
		$http.post('/api/list/', $scope.x).then(successCallback, errorCallback);

		function successCallback(response){
		   window.location.href='#/list';
		}
		function errorCallback(error){
		    alert("hello");
		}
	}


	$scope.updateListItem = function(){
		var id = $routeParams.id;
		$http.put('/api/list/'+id, $scope.x).then(successCallback, errorCallback);

		function successCallback(response){
		   window.location.href='#/list';
		}
		function errorCallback(error){
		    alert("hello");
		}

	}

	$scope.deleteListItem = function(id){
		$http.delete('/api/list/'+id).then(successCallback, errorCallback);

		function successCallback(response){
		   window.location.href='#/list/list_D';
		}
		function errorCallback(error){
		    alert("hello");
		}

	}
}]);


