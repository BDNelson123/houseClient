house.factory('homeTest', ['$resource',
  function($resource){
    return $resource('http://jsonplaceholder.typicode.com/posts', {}, { query: {method:'GET', isArray:true} });
  }
]);
