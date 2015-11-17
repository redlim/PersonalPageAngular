'use strict';

/**
 * @ngdoc overview
 * @name wilderOlmosApp
 * @description
 * # wilderOlmosApp
 *
 * Main module of the application.
 */
angular
  .module('wilderOlmosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
