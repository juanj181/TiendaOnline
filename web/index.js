var app = angular.module("app", ['ngRoute']);


app.config(function($routeProvider) {

    $routeProvider.otherwise(
            {
                redirectTo: '/categorias/list'

            }
    );
});


app.controller("IndexController", function($scope){
    
});