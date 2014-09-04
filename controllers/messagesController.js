house.controller('messagesController', function($scope, $location, $rootScope, $routeParams, newMessage, indexMessage, showUserImagePrimary, showMessage, showUser) {
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
    $scope.messages = indexMessage.read({ home_id: $routeParams.home_id, user_id: $routeParams.id });
    $scope.userPrimaryImage = showUserImagePrimary.read({ id: $rootScope.token, primary: 'true', type: 'hash' });
    $scope.otherPrimaryImage = showUserImagePrimary.read({ id: $routeParams.id, primary: 'true', type: 'integer'  });
  };

  $scope.show_thread = function() {
    var users = []; var unique = [];
    $scope.messages = showMessage.read({ id: $routeParams.id });
    console.log($scope.messages);

    $scope.messages.$promise.then(function(data) {
      $scope.total = $scope.messages.length;

      angular.forEach($scope.messages, function(key, value) {
        this.push(key.sender_id,key.receiver_id);
      }, users);

      $.each(users, function(i, el){
        if (el != $rootScope.id){
          if($.inArray(el, unique) === -1) unique.push(el);
        }
      });

      $scope.userPrimaryImage = showUserImagePrimary.read({ id: $rootScope.id, primary: 'true', type: 'hash' });
      $scope.otherPrimaryImage = showUserImagePrimary.read({ id: unique[0], primary: 'true', type: 'hash'  });
      $scope.otherUser = showUser.read({ id: unique[0]  });
    });
  };
});
