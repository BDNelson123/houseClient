house.factory('showLogs', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/logs/:id', {}, { read: {method:'GET', isArray:true} });
  }
]);
