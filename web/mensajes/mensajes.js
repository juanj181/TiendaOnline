app.config(function($routeProvider) {
    $routeProvider.when('/mensajes/mensajes',
            {
                templateUrl: 'mensajes/mensajes.html',
                controller: 'MensajesController'
            }
    );

});

app.controller("MensajesController", function($scope, $routeParams){
   $scope.nombrePagina="mensajes"; 
});