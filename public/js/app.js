var app = angular.module('MyTodos', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/todos', {
		templateUrl: '/templates/todos.html',
		controller: 'TodoController',
		resolve: {
			todos: function(TodoService) {
				return TodoService.getTodos();
			}
		}
	})
	.when('/profile', {
		templateUrl: '/templates/profile.html',
		controller: 'ProfileController',
		resolve: {
			profile: function(ProfileService) {
				return ProfileService.getProfile();
			}
		}
	})
	.when('/auth', {
		templateUrl: '/templates/auth.html',
		controller: 'AuthController'
	})
	.otherwise({
		redirectTo: '/todos'
	});
});