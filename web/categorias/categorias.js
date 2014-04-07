app.config(function($routeProvider) {
    $routeProvider.when('/categorias/list',
            {
                templateUrl: 'categorias/list.html',
                controller: "CategoriasListController"
            }
    );


    $routeProvider.when('/categorias/edit/:idCategoria',
            {
                templateUrl: 'categorias/edit.html',
                controller: "CategoriasEditController"
            }
    );


    $routeProvider.when('/categorias/new',
            {
                templateUrl: 'categorias/new.html',
                controller: "CategoriasNewController"
            }
    );

    $routeProvider.when('/categorias/delete/:idCategoria',
            {
                templateUrl: 'categorias/delete.html',
                controller: "CategoriasDeleteController"
            }
    );

});


app.controller("CategoriasListController", function($scope, $routeParams) {
    $scope.nombrePagina = "List";
    
    

});

app.controller("CategoriasEditController", function($scope, $routeParams) {
    $scope.nombrePagina = "Edit";
    $scope.idCategoria =  $routeParams.idCategoria;

});

app.controller("CategoriasNewController", function($scope, $routeParams) {
    $scope.nombrePagina = "New";

});

app.controller("CategoriasDeleteController", function($scope, $routeParams) {
    $scope.nombrePagina = "Delete";
    $scope.idCategoria = $routeParams.idCategoria;

});


