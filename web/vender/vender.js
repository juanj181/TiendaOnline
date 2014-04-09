app.config(function($routeProvider){
    $routeProvider.when('/vender/vender',
    {
        templateUrl:'vender/vender.html',
        controller:"VenderController"
    }
);
});

app.controller("VenderController", function($scope, $routeParams){
    $scope.nombrePagina="comprar";
});