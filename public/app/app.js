var app = angular.module("myWorld", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
   $routeProvider
        .when("/", {
           templateUrl: "/templates/home.html" 
        })
        .when("/things", {
            templateUrl: "/templates/things.html"
        })
        .when("/people", {
            templateUrl: "/templates/people.html"
        });
});

app.controller("MyCtrl", function($scope){
    console.log($scope);
    $scope.name = "professor";
});