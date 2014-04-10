app.config(function($routeProvider) {
    $routeProvider.when('/compras/compras',
            {
                templateUrl: 'compras/compras.html',
                controller: "ComprasController"
            }
    );
});


app.controller("ComprasController", function($scope, $routeParams){
    $scope.nombrePagina="compras";
    
});