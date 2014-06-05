house.controller('usersController', function($scope, $rootScope, $location, $routeParams, $window, newUser, indexUser, signInUser, showUser) {
  $scope.submitUser = function() {
    newUser.save({ user: $scope.user }, 
      function success(data, status, headers, config){
        $window.sessionStorage.token = data.auth_token;
        $location.path('/users/show/' + data.id);
      }, 

      function err() {
      }
    );
  };

  $scope.allUser = function() {
    $scope.users = indexUser.read();
  };

  $scope.loginUser = function() {
    signInUser.get({ email: $scope.email, password: $scope.password }, 
      function success(data, status, headers, config){
        $window.sessionStorage.token = data.auth_token;
        $location.path('/users/show/' + data.id);
      }, 

      function err() {
      }
    );
  };

  $scope.logoutUser = function() {
    delete $window.sessionStorage.token;
    delete $rootScope.token;
    $location.path('/');
  };

  $scope.singleUser = function() {
    console.log($routeParams.id);
    $scope.user = showUser.read({id: $routeParams.id});
  };
});
