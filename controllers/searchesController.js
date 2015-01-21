house.controller('searchesController', function($scope, $location, $routeParams, $rootScope, indexSearch) {
  $scope.searchRedirect = function() {
    if($scope.query != null){
      $location.path('/searches/index/' + $scope.query);
    }
  };

  $scope.searchHome = function() {
    $scope.searches = indexSearch.read({query: $routeParams.query});
    $scope.count = indexSearch.read({query: $routeParams.query, count: "true"});
  };
});
