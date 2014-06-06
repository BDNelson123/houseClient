house.factory('newHome', ['$resource',
  function($resource){
    return $resource(server + '/homes', {}, { post: {method:'POST', isArray:true} });
  }
]);
