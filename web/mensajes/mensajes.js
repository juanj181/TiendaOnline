app.config(function($routeProvider) {
    $routeProvider.when('/mensajes/mensajes',
            {
                templateUrl: 'mensajes/mensajes.html',
                controller: 'MensajesController'
            }
    );

});

app.controller("MensajesController", function($scope, $routeParams) {
    $scope.nombrePagina = "mensajes";
    $scope.provincias = [
        {
            nombre: "valencia",
            idProvincia: 3,
            codigo: "46"
        },
        {
            nombre: "alicante",
            idProvincia: 7,
            codigo: "03"
        },
        {
            nombre: "castellon",
            idProvincia: 5,
            codigo: "66"
        }

    ];
});