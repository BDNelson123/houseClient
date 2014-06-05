house.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        $rootScope.token = $window.sessionStorage.token;
        config.headers.Authorization = 'Token token=' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
      }
      return response || $q.when(response);
    }
  };
});

house.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
