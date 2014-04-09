app.config(function($routeProvider) {
    $routeProvider.when('/comprar/comprar',
            {
                templateUrl: 'comprar/comprar.html',
                controller: "ComprarController"
            }
    );
});

app.controller("ComprarController", function($scope, $routeParams){
   $scope.nombrePagina="comprar"; 
});
