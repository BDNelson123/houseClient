house.controller('homesController', function($scope, $location, $rootScope, $routeParams, $upload, newHome, showHome, showHomeNoImage, showImages, indexImages, indexHome, editHome, destroyHome, updateHomeImage) {
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
    $scope.homeData = showHomeNoImage.read({id: $routeParams.id});

    $scope.homeData.$promise.then(function(data) {
      $scope.home = data;
    }, function(error) {
      $location.path('/404').replace();
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

  $scope.submitUpdateHomePrimaryImage = function(id) {
    updateHomeImage.update({ id: id, home_id: $routeParams.id },
      function success(data, status, headers, config){
        $rootScope.homeImagePrimary = id;
      }, 

      function error(data, status, headers, config) {
      }
    );
  };

  $scope.singleHome = function() {
    // this is the image gallery
    $scope.photos = [
      {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
      {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
      {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
      {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
      {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
      {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
    ];
    $scope._Index = 0;
    $scope.isActive = function (index) {
      return $scope._Index === index;
    };
    $scope.showPrev = function () {
      $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
    $scope.showNext = function () {
      $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };
    $scope.showPhoto = function (index) {
      $scope._Index = index;
    };
    // end

    $scope.homes = showHome.read({id: $routeParams.id},
      function success(data, status, headers, config){
      }, 

      function error(data, status, headers, config) {
        $location.path('/404').replace();
      }
    );

    $scope.homes.$promise.then(function(data) {
      $scope.total = $scope.homes.length;
    });
  };

  $scope.index = function() {
    $scope.homes = indexHome.read();

    $scope.homes.$promise.then(function(data) {
      $scope.total = $scope.homes.length;
    });
  };

  $scope.images = function() {
    $scope.homeImages = showImages.read({id: $routeParams.id});
  };

  $scope.deleteHome = function() {
    editHome.update({id: $routeParams.id, active: false},
      function success(data, status, headers, config){
        $location.path('/homes/index');
      }, 

      function error(data, status, headers, config) {
      }
    );
  };

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
