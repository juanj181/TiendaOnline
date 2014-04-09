app.config(function($routeProvider) {
    $routeProvider.when('/login/list',
            {
                templateUrl: 'login/list.html',
                controller: "LoginListController"
            }
    );


    $routeProvider.when('/login/edit/:idUsuario',
            {
                templateUrl: 'login/edit.html',
                controller: "LoginEditController"
            }
    );


    $routeProvider.when('/login/new',
            {
                templateUrl: 'login/new.html',
                controller: "LoginNewController"
            }
    );

    $routeProvider.when('/login/delete/:idUsuario',
            {
                templateUrl: 'login/delete.html',
                controller: "LoginDeleteController"
            }
    );

});


app.controller("LoginListController", function($scope, $routeParams) {
    $scope.nombrePagina = "UsuarioList";
    
    

});

app.controller("LoginEditController", function($scope, $routeParams) {
    $scope.nombrePagina = "UsuarioEdit";
    $scope.idCategoria =  $routeParams.idUsuario;

});

app.controller("LoginNewController", function($scope, $routeParams) {
    $scope.nombrePagina = "UsuarioNew";

});

app.controller("LoginDeleteController", function($scope, $routeParams) {
    $scope.nombrePagina = "UsuarioDelete";
    $scope.idCategoria = $routeParams.idUsuario;

});


