house.directive('ngEmpty', function() {
  return {
    restrict: 'A',
    require: '^ngTotal',
    scope: { ngTotal: '@' },
    template: '\
    <div ng-if="ngTotal == 0">\
      No Records Were Found.\
    </div>',
  }
});
