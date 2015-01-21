house.directive('ngShowimage', function() {
  return {
    restrict: 'A',
    require: '^ngImage',
    require: '^ngType',
    require: '^ngSize',
    scope: {
      ngImage: '@',
      ngType: '@',
      ngSize: '@',
    },
    template:
      '<img ng-if="ngType == \'user\' && ngSize == \'thumb\'" fallback-src="/images/Bed-Head-thumb.jpg" ng-src="' + server + '{{ngImage}}">' +
      '<img ng-if="ngType == \'user\' && ngSize == \'medium\'" fallback-src="/images/Bed-Head-medium.jpg" width="75" height="75" ng-src="' + server + '{{ngImage}}">' +
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
