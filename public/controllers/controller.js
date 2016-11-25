var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/education').success(function(response) {
      console.log("I got the data I requested");
      $scope.education = response;
    });

    $http.get('/skills').success(function(response) {
      console.log("I got the data I requested");
      $scope.skills = response;
    });

    $http.get('/projects').success(function(response) {
      console.log("I got the data I requested");
      $scope.projects = response;
    });

}]);
