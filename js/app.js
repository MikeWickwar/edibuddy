
var env = {};

// Import variables if present (from env.js)
if(window){
  Object.assign(env, window.__env);
}

// Register environment in AngularJS as constant
var app = angular.module('EDIAPP', ['ui.router', 'ngAnimate']);

app.constant('__env', env);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: "/",
        controller: "SiteController",
        templateUrl: "partials/splash.html"
      })


      $urlRouterProvider.otherwise("/")
      //place an otherwise in this for a 404 sitautation
});
