var app = angular.module('todoApp',['ngRoute']);
app.config(function ($routeProvider){
	$routeProvider
	.when('/todo',{
		templateUrl:'views/partials/todo.html',
		controller : 'todoCtrl'
	})

});




