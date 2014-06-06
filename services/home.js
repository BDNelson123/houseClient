house.factory('newHome', ['$resource',
  function($resource){
    return $resource(server + '/homes', {}, { post: {method:'POST', isArray:true} });
  }
]);

house.factory('showHome', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/homes/:id', {}, { read: {method:'GET', isArray:false} });
  }
]);
