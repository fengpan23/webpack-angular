angular.module('router', ['ngRoute']).config(function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/a', {templateUrl:'partials/index.html', controller: function(){
            console.log('qppsdfasdfasfd');
        }}).
        when('/login', {templateUrl:'partials/login.html', controller:login}).
        when('/logout', {templateUrl:'partials/logout.html', controller:logout}).
        when('/signup', {templateUrl:'partials/signup.html', controller:singnup}).
        otherwise({redirectTo:'/'});

    $locationProvider.html5Mode(true);
}).controller('MainController', function($scope, $route, $routeParams, $location) {
    console.log('sdfasdfasdf');
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });
