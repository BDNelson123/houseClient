house.controller('searchesController', function($scope, $location, $routeParams, $rootScope, indexSearch) {
  $scope.searchRedirect = function() {
    $location.path('/searches/index/' + $scope.query);
  };

  $scope.searchHome = function() {
    $scope.searches = indexSearch.read({query: $routeParams.query});
  };
});
