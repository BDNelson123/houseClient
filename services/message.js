house.factory('newMessage', ['$resource',
  function($resource){
    return $resource(server + '/messages', {}, { post: {method:'POST', isArray:true} });
  }
]);

house.factory('indexMessage', ['$resource',
  function($resource){
    return $resource(server + '/messages', {}, { read: {method:'GET', isArray:true} });
  }
]);
