house.controller('messagesController', function($scope, $location, $rootScope, $routeParams, newMessage, showMessage, showUserImagePrimary) {
  $scope.submitMessage = function() {
    $scope.message = { home_id: $routeParams.home_id, receiver_id: $routeParams.id, message: $scope.message };
    newMessage.save({ message: $scope.message }, 
      function success(data, status, headers, config){
        $scope.messages.push(data);
        $scope.message = '';
      }, 

      function error(data, status, headers, config) {
      }
    );
  };

  $scope.show = function() {
    $scope.messages = showMessage.read({ home_id: $routeParams.home_id, user_id: $routeParams.id });
    $scope.userPrimaryImage = showUserImagePrimary.read({ id: $rootScope.token, primary: 'true', type: 'hash' });
    $scope.otherPrimaryImage = showUserImagePrimary.read({ id: $routeParams.id, primary: 'true', type: 'integer'  });
  };
});
