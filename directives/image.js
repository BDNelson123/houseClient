house.directive('ngShowimage', function() {
  return {
    restrict: 'A',
    require: '^ngImage',
    require: '^ngId',
    scope: {
      ngImage: '@',
      ngId: '@',
    },
    template: '<img src="' + server + '{{ngImage}}">',
  }
});

house.directive("ngUserprimaryimage", function($rootScope) {
  return {
    link: function(scope, element, attrs) {
      return $rootScope.$watch('userImagePrimary', function() {
        if ($rootScope.userImagePrimary) {
        }
      });
    }
  };
});
