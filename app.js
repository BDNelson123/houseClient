// interceptor
var house = angular.module('house', ['ngRoute', 'ngAnimate', 'ngResource', 'ngTouch', 'angularFileUpload']);

// routing
house.config(function ($routeProvider) {
  $routeProvider
    .when ('/public/home', {templateUrl: "templates/public/home.html", controller: 'homeController'})
    .when ('/public/how_it_works', {templateUrl: "templates/public/how_it_works.html"})
    .when ('/public/pricing', {templateUrl: "templates/public/pricing.html"})
    .when ('/public/contact', {templateUrl: "templates/public/contact.html"})
    .when ('/users/sign_in', {templateUrl: "templates/users/sign_in.html", controller: 'usersController'})
    .when ('/users/new', {templateUrl: "templates/users/new.html", controller: 'usersController'})
    .when ('/users/show/:id', {templateUrl: "templates/users/show.html", controller: 'usersController'})
    .when ('/users/edit/:id', {templateUrl: "templates/users/edit.html", controller: 'usersController'})
    .when ('/users/index', {templateUrl: "templates/users/index.html", controller: 'usersController'})
    .when ('/homes/index', {templateUrl: "templates/homes/index.html", controller: 'homesController'})
    .when ('/homes/new', {templateUrl: "templates/homes/new.html", controller: 'homesController'})
    .when ('/homes/new_images/:id', {templateUrl: "templates/homes/new_images.html", controller: 'homesController'})
    .when ('/homes/show/:id', {templateUrl: "templates/homes/show.html", controller: 'homesController'})
    .when ('/homes/edit/:id', {templateUrl: "templates/homes/edit.html", controller: 'homesController'})
    .when ('/searches/show/:query', {templateUrl: "templates/searches/show.html", controller: 'searchesController'})
    .when ('/searches/index/:query', {templateUrl: "templates/searches/index.html", controller: 'searchesController'})
    .when ('/bids/show/:id', {templateUrl: "templates/bids/show.html", controller: 'bidsController'})
    .when ('/bids/new/:id', {templateUrl: "templates/bids/new.html", controller: 'bidsController'})
    .when ('/messages/new/:id', {templateUrl: "templates/messages/new.html", controller: 'messagesController'})
    .when ('/messages/show/:id', {templateUrl: "templates/messages/show.html", controller: 'messagesController'})
    .when ('/404', {templateUrl: "templates/public/404.html"})
    .when ('/', {templateUrl: "templates/public/home.html"})
    .otherwise({ redirectTo: '/404' });
});
