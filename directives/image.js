house.directive('ngShowimage', function() {
  return {
    restrict: 'A',
    require: '^ngImage',
    scope: {
      ngImage: '@'
    },
    template: '<img src="' + server + '{{ngImage}}">'
  }
});
