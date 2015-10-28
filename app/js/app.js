"use strict";

// Declare app level module which depends on views, and components
angular.module('todoApp', [
    'ngRoute',
    'todoControllers',
    'todoDirectives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/tasks/:id', {
        templateUrl: 'res/detail.html',
        controller: 'detailCtrl'
      }).
    when('/', {
        templateUrl: 'res/list.html',
        controller: 'listCtrl'
      }).
    otherwise({
        redirectTo: '/'
      });
    
}]);