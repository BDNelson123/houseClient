house.directive('ngShowimage', function() {
  return {
    restrict: 'A',
    require: '^ngImage',
    scope: {
      ngImage: '@',
    },
    template: '<img src="' + server + '{{ngImage}}">',
  }
});

house.directive("fallbackSrc", function() {
  var fallbackSrc = {
    link: function postLink(scope, iElement, iAttrs) {
      iElement.bind('error', function() {
        angular.element(this).attr("src", iAttrs.fallbackSrc);
      });
    }
   }
   return fallbackSrc;
});

house.directive("nilSrc", function() {
  var nilSrc = {
    link: function postLink(scope, iElement, iAttrs) {
      iElement.bind('', function() {
        angular.element(this).attr("src", iAttrs.fallbackSrc);
      });
    }
   }
   return fallbackSrc;
});
