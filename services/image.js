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

house.factory('showUserImagePrimary', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images/:id?klass=user', {}, { read: {method:'GET', isArray:false} });
  }
]);

house.factory('indexImages', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images', {}, { read: {method:'GET', isArray:true} });
  }
]);

house.factory('updateUserImage', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images/:id?klass=user', {id:'@id', token:'@token'}, { update: {method:'PUT'} });
  }
]);

house.factory('updateHomeImage', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/images/:id?klass=home', {id:'@id'}, { update: {method:'PUT'} });
  }
]);
