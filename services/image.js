house.factory('showImages', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images/:id?klass=home', {}, { read: {method:'GET', isArray:true} });
  }
]);

house.factory('showUserImages', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images/:id?klass=user', {}, { read: {method:'GET', isArray:true} });
  }
]);

house.factory('indexImages', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images', {}, { read: {method:'GET', isArray:true} });
  }
]);
