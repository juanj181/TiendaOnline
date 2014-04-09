app.config(function($routeProvider) {
    $routeProvider.when('/usuarios/registro',
            {
                templateUrl: '/usuarios/registro.html',
                controller: "RegistroController"


            });

    app.controller("RegistroController", function($scope, $routeParams) {
        $scope.nombrePagina = "registro";
    });

});