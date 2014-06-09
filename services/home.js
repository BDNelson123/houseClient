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

house.factory('showImages', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images/:id', {}, { read: {method:'GET', isArray:true} });
  }
]);
