house.controller('bidsController', function($scope, $location, $rootScope, $routeParams, newBid, showBid) {
  $scope.submitBid = function() {
    newBid.save({ home_id: $routeParams.id },{ bid: $scope.bid }, 
      function success(data, status, headers, config){
        $location.path('/homes/show/' + data.home_id);
      }, 

      function error(data, status, headers, config) {
        $location.path('/bids/new');
      }
    );
  };

  $scope.showBids = function() {
    $scope.bids = showBid.read({id: $routeParams.id});
  };
});
