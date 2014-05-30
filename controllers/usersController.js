house.controller('usersController', function($scope, newUser, $location) {
  $scope.submitUser = function() {
    newUser.save(
      { user: $scope.user }
    );

    function success(response) {
      console.log("success", response);
      $location.path("/contacts");
    }

    function failure(response) {
      console.log("failure", response)

      _.each(response.data, function(errors, key) {
        _.each(errors, function(e) {
          $scope.form[key].$dirty = true;
          $scope.form[key].$setValidity(e, false);
        });
      });

      $location.path('/public/contact');
    }
  };
});
