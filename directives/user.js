house.directive('ngUseroptions', function() {
  return {
    restrict: 'A',
    require: '^ngRoute',
    require: '^ngUser',
    scope: {
      ngRoute: '@',
      ngUser: '@',
    },
    template: '\
    <div class="container-fluid">\
      <div class="row-fluid" style="margin-top:25px">\
        <div class="col-md-2"></div>\
        <div class="col-md-8">\
          <div ng-if="ngRoute == \'listings\'" class="user_panel_heading">\
            <i class="glyphicon glyphicon-th-list"></i>\
            <span class="padding_left_5">Your Listings</span>\
          </div>\
          <div ng-if="ngRoute == \'activity\' || ngRoute == \'\'" class="user_panel_heading">\
            <i class="glyphicon glyphicon-stats"></i>\
            <span class="padding_left_5">Your Activity</span>\
          </div>\
          <div ng-if="ngRoute == \'bids\'" class="user_panel_heading">\
            <i class="glyphicon glyphicon-tags"></i>\
            <span class="padding_left_5">Your Bids</span>\
          </div>\
          <div ng-if="ngRoute == \'messages\'" class="user_panel_heading">\
            <i class="glyphicon glyphicon-comment"></i>\
            <span class="padding_left_5">Your Messages</span>\
          </div>\
        </div>\
        <div class="col-md-2"></div>\
      </div>\
    </div>',
  }
});
