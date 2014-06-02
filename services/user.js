house.factory('newUser', ['$resource',
  function($resource){
    return $resource(server + '/users', {}, { post: {method:'POST', isArray:true} });
  }
]);
