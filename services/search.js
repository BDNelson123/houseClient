house.factory('indexSearch', ['$resource',
  function($resource){
    return $resource(server + '/searches', {}, { read: {method:'GET', isArray:true} });
  }
]);
