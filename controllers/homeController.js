house.controller('homeController', function($scope, homeTest) {
  $scope.posts = homeTest.read();
});
