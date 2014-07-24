house.directive('ngShowimage', function() {
  return {
    restrict: 'A',
    require: '^ngImage',
    scope: {
      ngImage: '@',
    },
    template: '<img fallback-src="/images/Bed-Head.jpg" ng-src="' + server + '{{ngImage}}">',
  }
});

house.directive('ngImageBlank', function() {
  return {
    template: '<img ng-src="/images/Bed-Head.jpg">',
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
