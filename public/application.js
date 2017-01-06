'use strict';

  define(['angular'], function (angular ) {

    return angular.module('app')
      .controller('MainCtrl', function ($scope, localStorageService) {

        var todosInStore = localStorageService.get('todos');

        $scope.todos = todosInStore || [];

        $scope.$watch('todos', function () {
          localStorageService.add('todos', $scope.todos);
        }, true);

        // Uncomment if you are disabling persistence
        //$scope.todos = [];

        $scope.addTodo = function () {
          $scope.todos.push($scope.todo);
          $scope.todo = '';
        };

        $scope.removeTodo = function (index) {
          $scope.todos.splice(index, 1);
        };

      });
});