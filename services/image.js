house.factory('showImages', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images/:id', {}, { read: {method:'GET', isArray:true} });
  }
]);

house.factory('indexImages', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images', {}, { read: {method:'GET', isArray:true} });
  }
]);
