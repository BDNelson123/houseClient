house.directive('ngShowimage', function() {
  return {
    restrict: 'A',
    require: '^ngImage',
    require: '^ngType',
    scope: {
      ngImage: '@',
      ngType: '@',
    },
    template:
      '<img ng-if="ngType == \'user\'" fallback-src="/images/Bed-Head.jpg" ng-src="' + server + '{{ngImage}}">' +
      '<img ng-if="ngType == \'house\'" fallback-src="/images/home_72.png" ng-src="' + server + '{{ngImage}}">',
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
