house.factory('newMessage', ['$resource',
  function($resource){
    return $resource(server + '/messages', {}, { post: {method:'POST', isArray:true} });
  }
]);

house.factory('showMessage', ['$resource',
  function($resource){
    return $resource(server + '/messages?home_id=:home_id&user_id=:user_id', {}, { read: {method:'GET', isArray:true} });
  }
]);
