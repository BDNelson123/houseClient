house.controller('usersController', function($scope, $rootScope, $location, $routeParams, $window, $upload, newUser, indexUser, signInUser, showUser, editUser, showUserImages, updateUserImage, showUserImagePrimary, showHome, showLogs, indexHome, indexBid, indexMessage, indexImages) {
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
        $location.path('/users/show/' + data.id);
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
    $scope.route = $routeParams.type;
    $scope.image = showUserImagePrimary.read({id: $routeParams.id, primary: 'true'});

    if($routeParams.type == 'listings'){
      $scope.listings = indexHome.read({ user_id: $routeParams.id, basic: 'true' });
      $scope.listings.$promise.then(function(data) { $scope.total = $scope.listings.length; });
    } else if($routeParams.type == 'bids'){
      $scope.bids = indexBid.read({ user_id: $routeParams.id });
      $scope.bids.$promise.then(function(data) { $scope.total = $scope.bids.length; });
    } else if($routeParams.type == 'messages'){
      $scope.messages = indexMessage.read({ type: 'all' });

      $scope.messages.$promise.then(function(data) {
        $scope.total = $scope.messages.length;

        var users = []; var unique = [];

        angular.forEach($scope.messages, function(key, value) {
          this.push(key.sender_id, key.receiver_id);
        }, users);

        $.each(users, function(i, el){
          if (el != $rootScope.id){
            if($.inArray(el, unique) === -1) unique.push(el);
          }
        });

        $scope.message_images = indexImages.read({ type: 'message', id: [unique] });
        $scope.message_images.$promise.then(function(data) {
          angular.forEach($scope.messages, function(obj1){
            angular.forEach($scope.message_images, function(obj2){
              if(obj1.sender_id != $rootScope.id && obj1.sender_id == obj2.user_id){
                obj1.image = obj2;
              } else if(obj1.receiver_id != $rootScope.id && obj1.receiver_id == obj2.user_id){
                obj1.image = obj2;
              }
            });
          });
        });

        $scope.message_users = indexUser.read({ type: 'message', id: [unique] });
        $scope.message_users.$promise.then(function(data) {
          angular.forEach($scope.messages, function(obj1){
            angular.forEach($scope.message_users, function(obj2){
              if(obj1.sender_id != $rootScope.id && obj1.sender_id == obj2.id){
                obj1.user = obj2;
              } else if(obj1.receiver_id != $rootScope.id && obj1.receiver_id == obj2.id){
                obj1.user = obj2;
              }
            });
          });
        });
      });
    } else {
      $scope.logs = showLogs.read({id: $routeParams.id});
      $scope.logs.$promise.then(function(data) { $scope.total = $scope.logs.length; });
    }

    $scope.user = showUser.read({id: $routeParams.id},
      function success(data, status, headers, config){
      },

      function error(data, status, headers, config) {
        $location.path('/404').replace();
      }
    );
  };

  $scope.updateUser = function() {
    restrict_premission($location,$rootScope.id,$routeParams.id);
    $scope.userData = showUser.read({id: $rootScope.id});
    $scope.userData.$promise.then(function(data) {
      $scope.user = data;
    });
  }

  $scope.submitUpdateUser = function() {
    editUser.update({ id: $routeParams.id },{ user: $scope.user },
      function success(data, status, headers, config){
        $location.path('/users/show/' + $routeParams.id);
      }, 

      function error(data, status, headers, config) {
      }
    );
  };

  $scope.submitUpdateUserPrimaryImage = function(id) {
    updateUserImage.update({ id: id },
      function success(data, status, headers, config){
        $rootScope.userImagePrimary = id;
      }, 

      function error(data, status, headers, config) {
      }
    );
  };

  $scope.images = function() {
    $scope.userImages = showUserImages.read({id: $routeParams.id});

    $scope.userImages.$promise.then(function(data) {
      data.forEach(function(image){
        if(image.primary == true){
          $rootScope.userImagePrimary = image.id;
          console.log($rootScope.userImagePrimary);
        }
      });
    });
  }

  $scope.onFileSelect = function($files,images) {
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: server + '/images?klass=user',
        method: 'POST',
        data: {file: file},
        file: file
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        console.log(data);
        $scope.userImages.push(data);
      });
    }
  };
});
