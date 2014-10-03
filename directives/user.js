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
      <div class="row-fluid home_from_top" style="margin-top:50px">\
        <div class="col-md-3"></div>\
        <div class="col-md-6">\
          <div class="btn-group btn-group-justified">\
            <div class="btn-group">\
              <a href="/#/users/show/{{ngUser}}?type=activity">\
                <button type="button" class="btn btn-primary active" ng-show="ngRoute == \'activity\'">Activity</button>\
                <button type="button" class="btn btn-primary active" ng-if="!ngRoute">Activity</button>\
                <button type="button" class="btn btn-default" ng-if="ngRoute" ng-show="ngRoute != \'activity\'">Activity</button>\
              </a>\
            </div>\
            <div class="btn-group">\
              <a href="/#/users/show/{{ngUser}}?type=listings">\
                <button type="button" class="btn btn-primary active" ng-show="ngRoute == \'listings\'">Listings</button>\
                <button type="button" class="btn btn-default" ng-hide="ngRoute == \'listings\'">Listings</button>\
              </a>\
            </div>\
            <div class="btn-group">\
              <a href="/#/users/show/{{ngUser}}?type=bids">\
                <button type="button" class="btn btn-primary active" ng-show="ngRoute == \'bids\'">Bids</button>\
                <button type="button" class="btn btn-default" ng-hide="ngRoute == \'bids\'">Bids</button>\
              </a>\
            </div>\
            <div class="btn-group">\
              <a href="/#/users/show/{{ngUser}}?type=messages">\
                <button type="button" class="btn btn-primary active" ng-show="ngRoute == \'messages\'">Messages</button>\
                <button type="button" class="btn btn-default" ng-hide="ngRoute == \'messages\'">Messages</button>\
              </a>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>',
  }
});
