var app = angular.module("myWorld", []);

app.controller("MyCtrl", function($scope){
    console.log($scope);
    $scope.name = "professor";
});