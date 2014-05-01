var house = angular.module('house', ['ngRoute', 'ngAnimate', 'ngResource']);

house.config(function ($routeProvider) {
  $routeProvider
    .when ('/public/home', {templateUrl: "templates/public/home.html", controller: 'homeController'})
    .when ('/public/how_it_works', {templateUrl: "templates/public/how_it_works.html"})
    .when ('/public/pricing', {templateUrl: "templates/public/pricing.html"})
    .when ('/public/contact', {templateUrl: "templates/public/contact.html"})
    .when ('/public/career', {templateUrl: "templates/public/career.html"})
    .when ('/users/sign_in', {templateUrl: "templates/users/sign_in.html"})
    .when ('/users/new', {templateUrl: "templates/users/new.html"})
    .when ('/', {templateUrl: "templates/public/home.html", controller: 'homeController'})
    .otherwise({ redirectTo: '/' });
});
