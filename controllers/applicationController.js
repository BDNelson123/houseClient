house.controller('applicationController', function($scope, $location, $rootScope) {
  $rootScope.$on("$locationChangeStart", function(event, next, current) {
    $rootScope.url = next.replace(client + '/#/', '');
  });
});
