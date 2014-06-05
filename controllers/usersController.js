house.controller('usersController', function($scope, $rootScope, $location, $window, newUser, indexUser, signInUser) {
  $scope.submitUser = function() {
    newUser.save({ user: $scope.user }, 
      function success(data, status, headers, config){
        $window.sessionStorage.token = data.auth_token;
        $location.path('/users/index');
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
        $location.path('/users/index');
      }, 

      function err() {
      }
    );
  };

  $scope.logoutUser = function() {
    $window.sessionStorage.token = '';
    $rootScope.token = '';
    $location.path('/');
  };
});
