house.controller('usersController', function($scope, $location, newUser, indexUser) {
  $scope.submitUser = function() {
    newUser.save({ user: $scope.user }, 
      function success(){
        $location.path('/user/show.html');
      }, 

      function err() {
      }
    );
  };

  $scope.allUser = function() {
    $scope.users = indexUser.read();
  };
});
