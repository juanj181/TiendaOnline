app.config(function($routeProvider) {
    $routeProvider.when('/ventas/ventas',
            {
                templateUrl: 'ventas/ventas.html',
                controller: 'VentasController'
            }
    );
});

app.controller("VentasController",function($scope, $routeParams) {
    $scope.nombrePagina = "ventas";
});