app.config(function($routeProvider) {
    $routeProvider.when('/ventas/ventas/:idProvincia',
            {
                templateUrl: 'ventas/ventas.html',
                controller: 'VentasController'
            }
    );
});

app.controller("VentasController", function($scope, $routeParams) {
    $scope.nombrePagina = "ventas";
    $scope.idProvincia = $routeParams.idProvincia;
});