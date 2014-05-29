house.controller('usersController', function($scope, newUser) {
  $scope.submitUser = function() {
    return newUser.save(
      { user: $scope.user }
    );
  };
});
