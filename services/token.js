house.factory('TokenHandler', function() {
  var tokenHandler = {};
  var token = "none";

  tokenHandler.set = function( newToken ) {
    token = newToken;
  };

  tokenHandler.get = function() {
    return token;
  };

  tokenHandler.wrapActions = function( resource, actions ) {
    var wrappedResource = resource;
    for (var i=0; i < actions.length; i++) {
      tokenWrapper( wrappedResource, actions[i] );
    };
    return wrappedResource;
  };

  var tokenWrapper = function( resource, action ) {
    resource['_' + action]  = resource[action];
    resource[action] = function( data, success, error){
      return resource['_' + action](
        angular.extend({}, data || {}, {access_token: tokenHandler.get()}),
        success,
        error
      );
    };
  };

  return tokenHandler;
});
