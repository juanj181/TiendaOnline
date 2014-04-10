app.config(function($routeProvider){
    $routeProvider.when('/registro/registro',
    {
        templateUrl:'registro/registro.html',
        controller:"RegistroController"
    }
);
});

app.controller("RegistroController", function($scope, $routeParams){
    $scope.nombrePagina="registro";
});