house.factory('newHome', ['$resource',
  function($resource){
    return $resource(server + '/homes', {}, { post: {method:'POST', isArray:true} });
  }
]);

house.factory('editHome', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/homes/:id', {id:'@id'}, { update: {method:'PUT'} });
  }
]);

house.factory('showHome', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/homes/:id', {}, { read: {method:'GET', isArray:true} });
  }
]);

house.factory('showHomeNoImage', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/homes/:id?image=false', {}, { read: {method:'GET', isArray:false} });
  }
]);

house.factory('indexHome', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/homes', {}, { read: {method:'GET', isArray:true} });
  }
]);
