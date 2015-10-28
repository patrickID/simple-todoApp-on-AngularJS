'use strict';

angular.module('todoControllers', ['ngRoute'])

.controller('listCtrl', function($scope, $http) {
    $http.get("res/tasks.json").success(function(response) {
        $scope.tasks = response;
    });
})

.controller('detailCtrl', ['$scope', '$routeParams', '$http',
                           function($scope, $routeParams, $http){ 
                               $http.get("res/tasks.json").success(function current (response) {
                                   var currentTask = response.filter( function(task) {
                                       return task.id ==  $routeParams.id;
                                   })[0];
                                   if (currentTask.description) {
                                       currentTask.description = currentTask.description.replace(/_/g, ' ');
                                   }
                                   $scope.currentTask = currentTask;
                                }) 
                           }
                          ]);

