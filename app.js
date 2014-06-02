// ip address of rails api server
var server = "http://198.61.208.215:5000";

// shows server validation errors
function api_errors(rejection){
   var values = rejection.data;
   var flash = [];
   angular.forEach(values, function(value, key) {
     this.push('<p>' + key + ': ' + value + '</p>');
   }, flash);

  $( "#alert" ).fadeIn( "fast", function() {
    $( this ).html(flash);
  });
}

// interceptor
var house = angular.module('house', ['ngRoute', 'ngAnimate', 'ngResource'])
.config(function ($provide, $httpProvider) {
  $provide.factory('houseHttpInterceptor', function ($q) {
    return {
      request: function (config) {
        console.log(config); 
        $( "#alert" ).hide();
        return config || $q.when(config);
      },

      requestError: function (rejection) {
        console.log(rejection);
        api_errors(rejection);
        return $q.reject(rejection);
      },
 
      response: function (response) {
        console.log(response);
        $( "#alert" ).hide();
        return response || $q.when(response);
      },

      responseError: function (rejection) {
        console.log(rejection.data);
        api_errors(rejection);
        return $q.reject(rejection);
      }
    };
  });
 
  $httpProvider.interceptors.push('houseHttpInterceptor');
});

// routing
house.config(function ($routeProvider) {
  $routeProvider
    .when ('/public/home', {templateUrl: "templates/public/home.html", controller: 'homeController'})
    .when ('/public/how_it_works', {templateUrl: "templates/public/how_it_works.html"})
    .when ('/public/pricing', {templateUrl: "templates/public/pricing.html"})
    .when ('/public/contact', {templateUrl: "templates/public/contact.html"})
    .when ('/public/career', {templateUrl: "templates/public/career.html"})
    .when ('/users/sign_in', {templateUrl: "templates/users/sign_in.html"})
    .when ('/users/new', {templateUrl: "templates/users/new.html", controller: 'usersController'})
    .when ('/users/show', {templateUrl: "templates/users/show.html", controller: 'usersController'})
    .when ('/', {templateUrl: "templates/public/home.html", controller: 'homeController'})
    .otherwise({ redirectTo: '/' });
});
