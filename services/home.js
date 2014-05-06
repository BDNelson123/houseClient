house.factory('homeTest', ['$resource',
  function($resource){
    return $resource('http://198.61.208.215:3000/users', {}, { read: {method:'GET', isArray:true} });
  }
]);
