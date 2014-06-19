house.factory('newBid', ['$resource',
  function($resource){
    return $resource(server + '/bids', {}, { post: {method:'POST', isArray:true} });
  }
]);

house.factory('showBid', ['$resource', '$routeParams',
  function($resource){
    return $resource(server + '/bids/:id', {}, { read: {method:'GET', isArray:true} });
  }
]);
