house.controller('usersController', function($scope, $rootScope, $location, $routeParams, $window, newUser, indexUser, signInUser, showUser, editUser) {
  $scope.submitUser = function() {
    newUser.save({ user: $scope.user }, 
      function success(data, status, headers, config){
        $window.sessionStorage.token = data.auth_token;
        $window.sessionStorage.id = data.id;
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
        $window.sessionStorage.id = data.id;
        $location.path('/users/show/' + data.auth_token);
      }, 

      function error(data, status, headers, config){
      }
    );
  };

  $scope.logoutUser = function() {
    delete $window.sessionStorage.token;
    delete $window.sessionStorage.id
    delete $rootScope.token;
    delete $rootScope.id;
    $location.path('/');
  };

  $scope.singleUser = function() {
    $scope.user = showUser.read({id: $routeParams.id});
  };

  $scope.updateUser = function() {
    $scope.userData = showUser.read({id: $rootScope.token});

    $scope.userData.$promise.then(function(data) {
      $scope.user = data;
    });
  }

  $scope.submitUpdateUser = function() {
    editUser.update({ id: $routeParams.id },{ user: $scope.user },
      function success(data, status, headers, config){
        $location.path('/users/show/' + data.auth_token);
      }, 

      function error(data, status, headers, config) {
        $location.path('/homes/edit/' + $routeParams.id);
      }
    );
  };
});
