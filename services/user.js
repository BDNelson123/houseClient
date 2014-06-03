house.factory('newUser', ['$resource',
  function($resource){
    return $resource(server + '/users', {}, { post: {method:'POST', isArray:true} });
  }
]);

house.factory('indexUser', ['$resource',
  function($resource){
    return $resource(server + '/users', {}, { read: {method:'GET', isArray:true} });
  }
]);
