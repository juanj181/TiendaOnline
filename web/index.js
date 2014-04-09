var app = angular.module("app", ['ngRoute']);


app.config(function($routeProvider) {

    $routeProvider.otherwise(
            {
                redirectTo: 'login'

            }
    );
});


app.controller("IndexController", function($scope){
    
});