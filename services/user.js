house.factory('newUser', ['$resource',
  function($resource){
    return $resource('http://198.61.208.215:3000/users', {}, { post: {method:'POST', isArray:true} });
  }
]);
