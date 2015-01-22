house.controller('searchesController', function($scope, $location, $routeParams, $rootScope, indexSearch) {
  $scope.searchRedirect = function() {
    if($scope.query != null){
      $location.path('/searches/index/' + $scope.query);
    }
  };

  $scope.searchHome = function() {
    // search is going to be paginated
    // need count, query (what user is searching), pages number (pages), currentPage, searches (ajax call), pages array, lastPage, prevPage, and nextPage
    $scope.count = indexSearch.read({query: $routeParams.query, count: "true"}); // total number of search results (not paginated)

    // get total number of search results
    $scope.count.$promise.then(function(data) {
      $scope.query = $routeParams.query; // what the user searched for
      $scope.searches = pagination_search_query($routeParams.query,$routeParams.page,Math.ceil($scope.count[0][0] / 10),indexSearch) // actual ajax query against API
      $scope.currentPage = pagination_search_currentPage($routeParams.query,$routeParams.page,Math.ceil($scope.count[0][0] / 10)) // gets the current page the user is on
      $scope.pages = pagination_search_pagesArray(Math.ceil($scope.count[0][0] / 10)); // creates an array with all pages to loop over
      $scope.lastPage = Math.max.apply(Math, pagination_search_pagesArray(Math.ceil($scope.count[0][0] / 10))); // gets last page in 
      $scope.prevPage = $scope.currentPage - 1; // gets the previous page in the pages list
      $scope.nextPage = $scope.currentPage + 1; // gets the next page in the pages list
    });
  };
});
