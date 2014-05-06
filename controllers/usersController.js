house.controller('usersController', function($scope, newUser) {
  $scope.submitUser = function() {
    return newUser.save(
      { post: $scope.post }
    );
  };
});
