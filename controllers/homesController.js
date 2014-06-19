house.controller('homesController', function($scope, $location, $rootScope, $routeParams, $upload, newHome, showHome, showHomeNoImage, showImages, indexImages, indexHome, editHome, destroyHome) {
  $scope.createHome = function() {
    restrict_access($location,$rootScope.token);
  };

  $scope.submitHome = function() {
    newHome.save({ home: $scope.home }, 
      function success(data, status, headers, config){
        $location.path('/homes/show/' + data.id);
      }, 

      function error(data, status, headers, config) {
        $location.path('/homes/new');
      }
    );
  };

  $scope.updateHome = function() {
    restrict_access($location,$rootScope.token);

    $scope.homeData = showHomeNoImage.read({id: $routeParams.id});

    $scope.homeData.$promise.then(function(data) {
      $scope.home = data;
    });
  }

  $scope.submitUpdateHome = function() {
    editHome.update({ id: $routeParams.id },{ home: $scope.home },
      function success(data, status, headers, config){
        $location.path('/homes/show/' + data.id);
      }, 

      function error(data, status, headers, config) {
        $location.path('/homes/edit/' + $routeParams.id);
      }
    );
  };

  $scope.singleHome = function() {
    $scope.homes = showHome.read({id: $routeParams.id},
      function success(data, status, headers, config){
      }, 

      function error(data, status, headers, config) {
        $location.path('/404');
      }
    );
  };

  $scope.index = function() {
    $scope.homes = indexHome.read();
  };

  $scope.images = function() {
    $scope.homeImages = showImages.read({id: $routeParams.id});
  }

  $scope.deleteHome = function() {
    destroyHome.delete({id: $routeParams.id},
      function success(data, status, headers, config){
        $location.path('/homes/index');
      }, 

      function error(data, status, headers, config) {
      }
    );
  }

  $scope.onFileSelect = function($files,images) {
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: server + '/images?klass=home&home_id=' + $routeParams.id,
        method: 'POST',
        data: {file: file},
        file: file
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        console.log(data);
        $scope.homeImages.push(data);
      });
    }
  };
});
