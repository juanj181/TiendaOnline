app.config(function($routeProvider) {
    $routeProvider.when('/compras/compras/:idProvincia',
            {
                templateUrl: 'compras/compras.html',
                controller: "ComprasController"
            }
    );
});


app.controller("ComprasController", function($scope, $routeParams) {
    $scope.nombrePagina = "compras";
    $scope.idProvincia = $routeParams.idProvincia;

});