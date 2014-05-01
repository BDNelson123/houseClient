var house = angular.module('house', ['ngRoute', 'ngAnimate', 'ngResource']);

house.config(function ($routeProvider) {
  $routeProvider
    .when ('/login', {templateUrl: "templates/login.html"})
    .when ('/home', {templateUrl: "templates/home.html", controller: 'homeController'})
    .when ('/about', {templateUrl: "templates/about.html"})
    .when ('/', {templateUrl: "templates/home.html", controller: 'homeController'})
    .otherwise({ redirectTo: '/' });
});
