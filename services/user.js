house.factory('newUser', ['$resource',
  function($resource){
    return $resource(server + '/users', {}, { post: {method:'POST', isArray:true} });
  }
]);

house.factory('editUser', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/users/:id', {id:'@id'}, { update: {method:'PUT'} });
  }
]);

house.factory('indexUser', ['$resource',
  function($resource){
    return $resource(server + '/users', {}, { read: {method:'GET', isArray:true} });
  }
]);

house.factory('showUser', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/users/:id', {}, { read: {method:'GET', isArray:false} });
  }
]);

house.factory('signInUser', ['$resource',
  function($resource){
    return $resource(server + '/sessions/show', {}, { read: {method:'GET', isArray:false} });
  }
]);
