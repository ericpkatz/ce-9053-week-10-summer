var app = angular.module("myWorld", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
   $routeProvider
        .when("/", {
           templateUrl: "/templates/home.html",
           controller: "HomeCtrl"
        })
        .when("/things", {
            templateUrl: "/templates/things.html",
            controller: "ThingsCtrl"
        })
        .when("/people", {
            templateUrl: "/templates/people.html",
            controller: "PeopleCtrl"
        });
        
        $locationProvider.html5Mode(true);
});

app.controller("MyCtrl", function($scope){
    console.log($scope);
    $scope.name = "professor";
});

var counter = 0;
app.controller("HomeCtrl", function($scope){
    console.log("hello");
    $scope.today = new Date();
    $scope.counter = ++counter;
    
});
app.controller("ThingsCtrl", function($scope, $http){
   $http.get("/api/things") 
        .then(function(results){
            $scope.things = results.data;
        });
    
    $scope.remove = function(thing){
        var index = $scope.things.indexOf(thing);
        $scope.things.splice(index, 1);
    };
});
app.controller("PeopleCtrl", function($scope, $http){
    $http.get("/api/people")
        .then(function(results){
           $scope.people = results.data;
        });
});