house.controller('homesController', function($scope, $location, $rootScope, $routeParams, $upload, newHome, showHome, showImages) {
  restrict_access($location,$rootScope.token);

  $scope.home = {token: $rootScope.token};

  $scope.submitHome = function() {
    newHome.save({ home: $scope.home }, 
      function success(data, status, headers, config){
        $location.path('/homes/new_images/' + data.id);
      }, 

      function err() {
        $location.path('/homes/new');
      }
    );
  };

  $scope.singleHome = function() {
    $scope.home = showHome.read({id: $routeParams.id});
  };

  $scope.onFileSelect = function($files,showImages) {
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: server + '/images?home_id=' + $routeParams.id +'&token=' + $rootScope.token,
        method: 'POST',
        data: {file: file},
        file: file
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        console.log(data);
        $scope.new_images = data.image;
      });
    }
  };

  $scope.showImages = function() {
    $scope.homeImages = showImages.read({id: $routeParams.id});
  }
});
