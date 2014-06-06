house.controller('homesController', function($scope, $location, $rootScope, newHome) {
  restrict_access($location,$rootScope.token);

  $scope.home = {token: $rootScope.token};

  $scope.submitHome = function() {
    newHome.save({ home: $scope.home }, 
      function success(data, status, headers, config){
        $location.path('/homes/show/' + data.id);
      }, 

      function err() {
        $location.path('/homes/new');
      }
    );
  };
});
