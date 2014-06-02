house.controller('usersController', function($scope, newUser, $location) {
  $scope.submitUser = function() {
    newUser.save({ user: $scope.user }, 
      function success(){
        $location.path('/user/show.html');
      }, 

      function err() {
      }
    );
  };
});
