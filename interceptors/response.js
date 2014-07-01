house.config(function ($provide, $httpProvider) {
  $provide.factory('houseHttpInterceptor', function ($q) {
    return {
      request: function (config) {
        console.log(config); 
        $( "#alert" ).hide();
        $('#loading').show();
        return config || $q.when(config);
      },

      requestError: function (rejection) {
        console.log(rejection);
        api_errors(rejection);
        $('#loading').hide();
        return $q.reject(rejection);
      },
 
      response: function (response) {
        console.log(response);
        $( "#alert" ).hide();
        $('#loading').hide();
        return response || $q.when(response);
      },

      responseError: function (rejection) {
        console.log(rejection.data);
        api_errors(rejection);
        $('#loading').hide();
        return $q.reject(rejection);
      }
    };
  });
 
  $httpProvider.interceptors.push('houseHttpInterceptor');
});
