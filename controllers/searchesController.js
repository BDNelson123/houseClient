house.controller('searchesController', function($scope, $location, $routeParams, $rootScope, indexSearch) {
  $scope.searchRedirect = function() {
    if($scope.query != null){
      $location.path('/searches/index/' + $scope.query);
    }
  };

  $scope.searchHome = function() {
    // total number of search results (not paginated)
    $scope.count = indexSearch.read({query: $routeParams.query, count: "true"});
    $scope.query = $routeParams.query;

    // get total number of search results
    $scope.count.$promise.then(function(data) {
      var pages = Math.ceil($scope.count[0][0] / 10);

      // actual search query && pagination
      if($routeParams.page != null && $routeParams.page <= pages){
        $scope.currentPage = parseInt($routeParams.page); // get the current page user is on
        $scope.searches = indexSearch.read({query: $routeParams.query, page: $routeParams.page});
      } else {
        $scope.currentPage = 1; // get the current page user is on
        $scope.searches = indexSearch.read({query: $routeParams.query, page: 1});
      }

      // this loop builds the pages array we loop over in the view to see how many pages we have
      var pages_array = [];
      for (i = 0; i < pages; i++) {
        pages_array.push(i + 1);
      }
      $scope.pages = pages_array;
      $scope.lastPage = Math.max.apply(Math, pages_array);
      $scope.prevPage = $scope.currentPage - 1;
      $scope.nextPage = $scope.currentPage + 1;
    });
  };
});
